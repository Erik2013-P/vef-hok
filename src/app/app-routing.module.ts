import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'documents',
    loadChildren: () =>
      import('./documents/documents.module').then((m) => m.DocumentsModule),
  },
  {
    path: 'studentloan',
    loadChildren: () =>
      import('./studentloan/studentloan.module').then(
        (m) => m.StudentloanModule
      ),
  },
  {
    path: 'neptun',
    loadChildren: () =>
      import('./neptun/neptun.module').then((m) => m.NeptunModule),
  },
  {
    path: 'gyik',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'kollegium',
    loadChildren: () =>
      import('./dormitory/dormitory.module').then((m) => m.DormitoryModule),
  },
  {
    path: 'szervezeti-felepites',
    loadChildren: () =>
      import('./organisation/organisation.module').then(
        (m) => m.OrganisationModule
      ),
  },
  {
    path: 'kapcsolat',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
