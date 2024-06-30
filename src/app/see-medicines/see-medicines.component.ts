import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-see-medicines',
  templateUrl: './see-medicines.component.html',
  styleUrl: './see-medicines.component.css'
})
export class SeeMedicinesComponent {

  
  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router: Router){

  }

  ngOnInit():void{
    this.getMedicine();
  }

  getMedicine(){
    this.medicineService.getMedicines().subscribe(data=>{
      this.medicines=data;
    })
  }
  
}
