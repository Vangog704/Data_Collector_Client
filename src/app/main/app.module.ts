import { FieldEditorComponent } from "../admin-cab/fields/field-editor.component";
import { ResponseListComponent }from "../admin-cab/responses/response-list.component";
import { FieldListComponent }   from "../admin-cab/fields/field-list.component";
import { AppRoutingModule }     from "../app-routing.module";
import { HttpClientModule }     from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AdminService }  from "../services/admin.service";
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';

import { SimpletextComponent,
         MultitextComponent,
         CheckboxComponent,
         ComboboxComponent,
         RadioComponent,
         FieldDirective,
         DateComponent }  from "../data-collector/custom-fields.components";

import { CollectorFieldListComponent,CongratulationComponent } from "../data-collector/field-list.component";
import { AdminCabHeaderComponent }     from "../admin-cab/admin-cab.component";
import { LoginComponent }     from "../admin-cab/loginer/login.component";

//----------------------------------------------------------------------------------------------------------------------
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    CollectorFieldListComponent,
    CongratulationComponent,
    AdminCabHeaderComponent,
    ResponseListComponent,
    FieldEditorComponent,
    FieldListComponent,
    LoginComponent,
    AppComponent,

    SimpletextComponent,
    MultitextComponent,
    ComboboxComponent,
    CheckboxComponent,
    RadioComponent,
    DateComponent,

    FieldDirective
  ],
  providers: [
    AdminService,
  ],
  entryComponents: [
    SimpletextComponent,
    MultitextComponent,
    ComboboxComponent,
    CheckboxComponent,
    RadioComponent,
    DateComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

