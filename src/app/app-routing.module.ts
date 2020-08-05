import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { PageNotFoundComponent } from './components/common/pagenotfound.component';

const routes: Routes = [
      { path: '', component: ListComponent },
      { path: 'list', component : ListComponent },
      { path: 'details/:id', component: DetailComponent },
      { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
