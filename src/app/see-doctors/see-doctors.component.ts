import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-see-doctors',
  templateUrl: './see-doctors.component.html',
  styleUrl: './see-doctors.component.css'
})
export class SeeDoctorsComponent {

  
constructor(private doctorService: DoctorService,private router:Router){}
doctors:Doctor[]=[];

ngOnInit():void
{
  this.getDoctors();
}
getDoctors()
{
  this.doctorService.getDoctorslist().subscribe(data=>
    {
      this.doctors=data;
    }
  )
}  

}
