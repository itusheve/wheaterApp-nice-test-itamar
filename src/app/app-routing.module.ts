import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationComponent} from './location/location.component';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
  {path: '', component: LocationComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
