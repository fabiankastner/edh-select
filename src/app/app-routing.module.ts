import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdhListComponent } from './edh-list/edh-list.component';
import { EdhSelectComponent } from './edh-select/edh-select.component';

const routes: Routes = [
  { path: '', component: EdhSelectComponent },
  { path: 'edh-select', component: EdhSelectComponent },
  { path: 'edh-list', component: EdhListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
