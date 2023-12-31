import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { AddplaceComponent } from './addplace/addplace.component';
import { EditplaceComponent } from './editplace/editplace.component';
import { PlacedetailComponent } from './placedetail/placedetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'travels', component: PlaceListComponent, pathMatch: 'full' },
  { path: 'add', component: AddplaceComponent },
  { path: 'edit/:id', component: EditplaceComponent },
  { path: 'travels/:id', component: PlacedetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
