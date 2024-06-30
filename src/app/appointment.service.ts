/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
  private baseUrl="http://localhost:8080/api/v2";

  constructor(private httpClient: HttpClient) { }

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>('${this.baseUrl}');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/v2/appoint';
  //private baseUrli = 'http://localhost:8080/api/v2/insert';

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(appointment: Appointment): Observable<Object> {
    return this.http.post(this.baseUrl, appointment);
  }

  deleteAppointment(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8080/api/v2/appoint';
  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(appointment: Appointment): Observable<Object> {
        return this.http.post(this.baseUrl, appointment);
      }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
