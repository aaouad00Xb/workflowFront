import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DescriptifsComponent } from './descriptifs/descriptifs.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { SuiviFacturesComponent } from './suivi-factures/suivi-factures.component';
import { AddSoutraitantComponent } from './add-soutraitant/add-soutraitant.component';
import { SuiviFactureComponent } from './suivi-facture/suivi-facture.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'notification', component: DescriptifsComponent},
  {path: 'tuyaux', component: AddFactureComponent},
  {path: 'pomp', component: SuiviFacturesComponent},
  {path: 'AddSoutraitant', component: AddSoutraitantComponent},
  {path: 'suivieFacture', component: SuiviFactureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
