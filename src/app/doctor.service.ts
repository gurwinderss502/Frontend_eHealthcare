import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  
  private baseUrl = "http://localhost:8080/api/v3/doctors";

  constructor(private httpClient: HttpClient) { }
  
  getDoctorslist(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
  }

  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>(`${this.baseUrl}`, doctor);
  }
  
  getDoctorById(id: number): Observable<Doctor> {   
    return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`);
  }
}