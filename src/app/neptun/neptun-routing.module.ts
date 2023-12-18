import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeptunComponent } from './neptun.component';

const routes: Routes = [{ path: '', component: NeptunComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeptunRoutingModule {}
