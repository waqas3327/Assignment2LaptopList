import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptoplistserveService {
laptops = [
  {model:'dell',gen:'5000'},
  {model:'hp',gen:'6000'},
  {model:'asus',gen:'7000'},
  {model:'lenovo',gen:'2000'},
  {model:'alienware',gen:'3000'},
  
];
constructor() {}

get getLaptops() {
  return this.laptops;
}

getAllLaptops() {
  return this.laptops;
}

deleteLaptop(gen) {
  this.laptops = this.laptops.filter(e => {
    return e.gen !== gen;
  });
}
returnLaptopsList() {
  return this.laptops;
}
}