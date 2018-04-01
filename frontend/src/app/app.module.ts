import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EpdsComponent } from './epds/epds.component';
import { EpdDetailComponent } from './epd-detail/epd-detail.component';
import { EpdCreateComponent } from './epd-create/epd-create.component';
import { EhrCreateComponent } from './ehr-create/ehr-create.component';

const appRoutes: Routes = [
  {
    path: 'epds',
    component: EpdsComponent,
    data: { title: 'EPD List' }
  },
  {
    path: 'epd-detail/:id',
    component: EpdDetailComponent,
    data: { title: 'EPD Details' }
  },
  {
    path: 'epd-create',
    component: EpdCreateComponent,
    data: { title: 'EPD Erstellen' }
  },
  {
    path: 'ehr-create/:id',
    component: EhrCreateComponent,
    data: { title: 'EHR hinzufügen' }
  },
  { path: '',
    redirectTo: '/epds',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EpdsComponent,
    EpdDetailComponent,
    EpdCreateComponent,
    EhrCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
