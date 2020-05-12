import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import {SubmitSuccessComponent} from './submit-success/submit-success.component';


const routes: Routes = [
  { path: 'appComponent', component: AppComponent },
  { path: 'submit-component', component: SubmitSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
