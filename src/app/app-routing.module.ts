import { DividerComponent } from './home/divider/divider.component';
import { TableComponent } from './home/table/table.component';
import { ButtonComponent } from './home/button/button.component';
import { MenuComponent } from './home/menu/menu.component';
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
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'table', component: TableComponent},
  {path: 'divider', component: DividerComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

