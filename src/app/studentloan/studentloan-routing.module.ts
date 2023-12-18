import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloanComponent } from './studentloan.component';

const routes: Routes = [{ path: '', component: StudentloanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentloanRoutingModule {}
