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
import { KeyCreateComponent } from './key-create/key-create.component';
import { EhrComponent } from './ehr/ehr.component';
import { TexttonumberToolComponent } from './texttonumber-tool/texttonumber-tool.component';
import { EncryptionToolComponent } from './encryption-tool/encryption-tool.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'epds',
    component: EpdsComponent,
    data: { title: 'EPD List' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
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
  {
    path: 'add-permission/:id',
    component: AddPermissionComponent,
    data: { title: 'Berechtigung hinzufügen' }
  },
  {
    path: 'ehr/:id',
    component: EhrComponent,
    data: { title: 'EHR Details' }
  },
  {
    path: 'key-create',
    component: KeyCreateComponent,
    data: { title: 'Key Generieren' }
  },
  {
    path: 'texttonumber-tool',
    component: TexttonumberToolComponent,
    data: { title: 'Text2Nummer Tool' }
  },
  {
    path: 'encryption-tool',
    component: EncryptionToolComponent,
    data: { title: 'Verschlüsselungs Tool' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EpdsComponent,
    EpdDetailComponent,
    EpdCreateComponent,
    EhrCreateComponent,
    KeyCreateComponent,
    EhrComponent,
    TexttonumberToolComponent,
    EncryptionToolComponent,
    AddPermissionComponent,
    HomeComponent
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
