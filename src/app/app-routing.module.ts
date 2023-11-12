import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'list/:title', component: ListComponent},
  { path: 'shows/:id/:title', component: DetailComponent},
  { path: 'shows/:id/:title/episodes', component: EpisodesComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  // { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
