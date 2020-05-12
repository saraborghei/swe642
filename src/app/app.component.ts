import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Student} from './Student.model';
import {StudentService} from './app.service';
import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'farsa-client';
  model: Student = new Student();
  student: Student;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/rest/survey/testconnection').subscribe((response) => console.log('resr', response));
    this.studentService.testConnection().subscribe((response) => console.log('resr', response));
  }

  getUser(studentId: string) {
    this.studentService.getStudentById(studentId).subscribe((student: Student) => {
      this.model = student;
    });
  }

  submitSurvey() {
    this.studentService.addSurvey(this.model).subscribe(result => {
      console.log('test', result);
      this.router.navigate(['/show_alunos']);
    });
    console.log(this.model);
  }

}
