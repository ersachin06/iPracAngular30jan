import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { C16catComponent } from './c16cat/c16cat.component';
import { C17prodpassargComponent } from './c17prodpassarg/c17prodpassarg.component';
import { C18adminComponent } from './c18admin/c18admin.component';

import {C22dashboardComponent} from './c22dashboard/c22dashboard.component';
import { C19airlinesComponent } from './c18admin/c19airlines/c19airlines.component';
import { C20flightsComponent } from './c18admin/c20flights/c20flights.component';
import { C21viewuserComponent } from './c18admin/c21viewuser/c21viewuser.component';
import { C23infoComponent } from './c22dashboard/c23info/c23info.component';
import { C24panelComponent } from './c22dashboard/c24panel/c24panel.component';
import { C25optimizeTwowayComponent } from './c25optimize-twoway/c25optimize-twoway.component';
import { C25portalComponent } from './c25portal/c25portal.component';
import { AdminComponent } from './c25portal/admin/admin.component';
import { UserComponent } from './c25portal/user/user.component';
import { C27tdfformComponent } from './c26form/c27tdfform/c27tdfform.component';
import { C27tdfformvalidationComponent } from './c27tdfformvalidation/c27tdfformvalidation.component';
import { C28reactiveformComponent } from './c26form/c28reactiveform/c28reactiveform.component';
import { C29rdfRunTimeValidationComponent } from './c26form/c29rdf-run-time-validation/c29rdf-run-time-validation.component';

//  import { HttpClientModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { C30EmpInsertDelUpdateSelectComponent } from './c30-emp-insert-del-update-select/c30-emp-insert-del-update-select.component';
import { C31empDispComponent } from './c31emp-disp/c31emp-disp.component';
import { C32ReformAn1Component } from './c32-reform-an1/c32-reform-an1.component';
import { C33FormValidationComponent } from './c33-form-validation/c33-form-validation.component';
import { C34AReactiveFormsModuleComponent } from './c34-a-reactive-forms-module/c34-a-reactive-forms-module.component';
import { C35ReactiveformsFillingFormComponent } from './c35-reactiveforms-filling-form/c35-reactiveforms-filling-form.component';
import { C36ReactiveformsValidationsComponent } from './c36-reactiveforms-validations/c36-reactiveforms-validations.component';
import { C37ReactiveFormsqtyinstockComponent } from './c37-reactive-formsqtyinstock/c37-reactive-formsqtyinstock.component';
import { C38spinnerComponent } from './c38spinner/c38spinner.component';
import { C38UsingObjservableComponent } from './c38-using-objservable/c38-using-objservable.component';
import { DemoTusharObservableComponent } from './demo-tushar-observable/demo-tushar-observable.component';
import { D39intervalComponent } from './d39interval/d39interval.component';
import { C40consumeserviceComponent } from './c40consumeservice/c40consumeservice.component';
import { C41consueservice2Component } from './c41consueservice2/c41consueservice2.component';
import { C42componnetlevelserviceComponent } from './c42componnetlevelservice/c42componnetlevelservice.component';
 import { C39ObservableSlidesComponent } from './c39-observable-slides/c39-observable-slides.component';
import { C43stepbystepFormComponent } from './c43stepbystepForm/c43stepbystep-form/c43stepbystep-form.component';
import { Step1Component } from './c43stepbystepForm/step1/step1.component';
import { Step2Component } from './c43stepbystepForm/step2/step2.component';
import { Step3Component } from './c43stepbystepForm/step3/step3.component';
import { Step4Component } from './c43stepbystepForm/step4/step4.component';
import { C44RegProComponent } from './c44-reg-pro/c44-reg-pro.component';
import { C45FindIndexComponent } from './c45-find-index/c45-find-index.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductComponent,
    C16catComponent,
    C17prodpassargComponent,
    C18adminComponent,
    C22dashboardComponent,
    C19airlinesComponent,
    C20flightsComponent,
    C21viewuserComponent,
    C23infoComponent,
    C24panelComponent,
    C25optimizeTwowayComponent,
    C25portalComponent,
    AdminComponent,
    UserComponent,
    C27tdfformComponent,
    C27tdfformvalidationComponent,
    C28reactiveformComponent,
    C29rdfRunTimeValidationComponent,
    C30EmpInsertDelUpdateSelectComponent,
    C31empDispComponent,
    C32ReformAn1Component,
    C33FormValidationComponent,
    C34AReactiveFormsModuleComponent,
    C35ReactiveformsFillingFormComponent,
    C36ReactiveformsValidationsComponent,
    C37ReactiveFormsqtyinstockComponent,
    C38spinnerComponent,
    C38UsingObjservableComponent,
    DemoTusharObservableComponent,
    D39intervalComponent,
    C40consumeserviceComponent,
    C41consueservice2Component,
    C42componnetlevelserviceComponent,
    C39ObservableSlidesComponent,
    C43stepbystepFormComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    C44RegProComponent,
    C45FindIndexComponent,
    
   
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     MatIconModule,

    //  MatFormFieldModule,
     MatInputModule,
     MatSelectModule, 
     HttpClientModule,
    //  HttpModule,
    RouterModule.forRoot(
      [
        {path:'step1',component:Step1Component},
        {path:'step2',component:Step2Component},
        {path:'step3',component:Step3Component},
        {path:'step4',component:Step4Component},
         {path:'home',component:HomeComponent}, 
         {path:'users',component:UsersComponent},
         {path:'products',component:ProductComponent},
         {path:'categories',component:C16catComponent},
         {path:'dashboard',component:C22dashboardComponent ,children:
          [
              {path:'info/:id',component:C23infoComponent,outlet:'rinfo'},
              {path:'panel',component:C24panelComponent,outlet:'rpanel'}
          ]
        },
         {path:'admin',component:C18adminComponent,children:
         [
           //inside admin - we have router outlet
           {path:'airlines',component:C19airlinesComponent},
           {path:'flights',component:C20flightsComponent},
           {path:'viewuser',component:C21viewuserComponent}
         ]

        },
        { path:'portal' ,component:C25portalComponent   },
        {path:'tdfForm',component:C27tdfformComponent},
        {path:'tdfFormvalidation',component:C27tdfformvalidationComponent},
        { path:'reactiveForms',component:C28reactiveformComponent},
        { path:'reactiveFormsRunTimeV',component:C29rdfRunTimeValidationComponent},
        {
          path:'empInsertDelUpdtSelect',component:C30EmpInsertDelUpdateSelectComponent
        },
        {path:'empSelect',component:C31empDispComponent}



      ]
    )
  ],
  entryComponents:[AdminComponent,UserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
