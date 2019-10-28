import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LaptoplistserveService } from '../laptoplistserve.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.page.html',
  styleUrls: ['./laptop.page.scss'],
})
export class LaptopPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private laptoplistserveService: LaptoplistserveService
  ) {}

  laptops = [];

  singleLaptop;

  ngOnInit() {
    this.laptops = this.laptoplistserveService.returnLaptopsList();
    // this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('laptopgen');

      this.singleLaptop = this.laptops.find(obj => {
        return obj.gen.includes(val);
      });
    });
  }

  async deleteLaptop() {
    console.log('deleteStudent', this.singleLaptop);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleLaptop.model}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.laptoplistserveService.deleteLaptop(this.singleLaptop.gen);
            this.router.navigateByUrl('/laptoplist');
          }
        }
      ]
    });

    alert.present();

  }
}
