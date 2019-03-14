import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
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
        {path:'tdfFormvalidation',component:C27tdfformvalidationComponent}



      ]
    )
  ],
  entryComponents:[AdminComponent,UserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
