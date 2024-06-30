import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrl: './view-doctors.component.css'
})
export class ViewDoctorsComponent {

  
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

view(id:number)
{
  this.router.navigate(['view-patient',id]);
}
  

}
