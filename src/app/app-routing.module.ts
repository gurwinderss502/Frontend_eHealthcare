import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { UserDashComponent } from './user-dash/user-dash.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppointSuccessComponent } from './appoint-success/appoint-success.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { SeeDoctorsComponent } from './see-doctors/see-doctors.component';
import { SeeMedicinesComponent } from './see-medicines/see-medicines.component';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'appointmentlist',component:AppointmentComponent},
  {path:'create-appointment',component:CreateAppointmentComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdashComponent},
  {path:'create-patient',component:CreatePatientComponent},
  {path:'view-medicine',component:MedicinelistComponent},
  {path:'create-medicine',component:CreateMedicineComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'view-patient/:id',component:ViewPatientComponent},
  {path:'update-medicine/:id',component:UpdateMedicineComponent},
  {path:'doclogin',component:DocloginComponent},
  {path:'adlogin',component:AdloginComponent},
  {path:'user-dash',component:UserDashComponent},
  {path:'create-acc',component:CreateAccComponent},
  {path:'view-doctors',component:ViewDoctorsComponent},
  {path:'add-doctor',component:AddDoctorComponent}
  ,
  {path:'appoint-success',component:AppointSuccessComponent}
  ,
  {path:'user-landing',component:UserLandingComponent}
  ,
  {path:'see-doctors',component:SeeDoctorsComponent}
  ,
  {path:'see-medicines',component:SeeMedicinesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
