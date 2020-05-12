import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from './Student.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
      })
    };
  }

  public testConnection() {
    return this.http.get('http://localhost:8080/rest/survey/testconnection');
  }

  public getStudentById(studentId: string) {
    console.log('id', studentId);
    return this.http.get(`http://localhost:8080/rest/survey/get/${studentId}`);
  }

  public addSurvey(student: Student) {
    return this.http.post('http://localhost:8080/rest/survey/add', student);
  }
}
