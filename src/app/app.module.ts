import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBadgeModule} from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { EvolutionComponent } from './charts/evolution/evolution.component';
import { DescriptifsComponent } from './descriptifs/descriptifs.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { SuiviFacturesComponent } from './suivi-factures/suivi-factures.component';
import { AddSoutraitantComponent } from './add-soutraitant/add-soutraitant.component';
import { SuiviFactureComponent } from './suivi-facture/suivi-facture.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    DashboardComponent,
    BarChartComponent,
    EvolutionComponent,
    DescriptifsComponent,
    AddFactureComponent,
    SuiviFacturesComponent,
    AddSoutraitantComponent,
    SuiviFactureComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatInputModule ,
    AutocompleteLibModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
