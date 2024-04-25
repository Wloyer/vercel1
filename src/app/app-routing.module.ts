import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesUnComponent } from './pages-un/pages-un.component';
import { PagesDeuxComponent } from './pages-deux/pages-deux.component';
import { PagesTroisComponent } from './pages-trois/pages-trois.component';

const routes: Routes = [
  { path: 'pages-un', component: PagesUnComponent },
  { path: 'pages-deux', component: PagesDeuxComponent },
  { path: 'pages-trois', component: PagesTroisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
