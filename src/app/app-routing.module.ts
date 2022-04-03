import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  {path:"Customer", component:CustomerComponent,
   children:[
              {path:"", component:ListingComponent },
              {path:"Create", component:AddNewComponent},
              {path:"Edit/:id", component:AddNewComponent}
            ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
