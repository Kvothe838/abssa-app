import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

const routes: Routes = [
	 { path: 'home', component: HomeComponent},
	 { path: '', redirectTo: '/home', pathMatch: 'full' },
	 { path: 'clients', component: ClientsComponent},
	 { path: 'contact', component: ContactComponent},
	 { path: 'us', component: UsComponent},
	 { path: 'services', component: ServicesComponent},	 
	 { path: 'solutions', component: SolutionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
