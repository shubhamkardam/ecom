import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(public globalService: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')) {
      this.globalService.userName = sessionStorage.getItem('user');
    } else {
      this.logout();
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
