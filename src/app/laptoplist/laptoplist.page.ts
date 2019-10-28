import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptoplistserveService } from '../laptoplistserve.service';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.page.html',
  styleUrls: ['./laptoplist.page.scss'],
})
export class LaptoplistPage implements OnInit {
    constructor(
      private router: Router,
      private laptoplistserveService: LaptoplistserveService 
          ) {}
  
    laptops = [];
  
    ngOnInit() {
      console.log('nothing on init');
  
    }
  
    changeUrl(user) {
      const gen = user.gen.substring(0, 4);
      const url = `laptoplist/${gen}`;
  
      this.router.navigateByUrl(url);
  }
  
    ionViewDidEnter() {
      console.log('view Enter');
      this.laptops = this.laptoplistserveService.returnLaptopsList();
    }
  }
  