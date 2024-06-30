import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  
  doctor:Doctor=new Doctor();
  constructor(private doctorService:DoctorService,private router:Router)
  {

  }
  savedoctor(){
   this.doctorService.createDoctor(this.doctor).subscribe(data=>{
    console.log(data);
    this.goToDoctorList();
   })
  }
  onSubmit(){
     this.savedoctor();
  }
  goToDoctorList(){
    this.router.navigate(['/view-doctors'])
  }
}
