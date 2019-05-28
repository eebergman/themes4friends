import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonsComponent } from './components/cards/buttons/buttons.component';
import { ToolbarsComponent } from './components/cards/toolbars/toolbars.component';
import { CheckboxesComponent } from './components/cards/checkboxes/checkboxes.component';
import { FormFieldsComponent } from './components/cards/form-fields/form-fields.component';
import { ThemePickerModule } from './components/theme-picker/theme-picker.component';
import { ThemeStorageService } from './components/theme-picker/theme-storage/theme-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ButtonsComponent,
    ToolbarsComponent,
    CheckboxesComponent,
    FormFieldsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    ThemePickerModule
  ],
  providers: [ThemeStorageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
