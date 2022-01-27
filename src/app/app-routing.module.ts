import { ListComponent } from './home/list/list.component';
import { AutocompleteComponent } from './home/autocomplete/autocomplete.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent,
  children: [

  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'list', component: ListComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

