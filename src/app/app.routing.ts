import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import {UserComponent} from './user/user.component';

export const AppRoutes: Routes = [
    { path: '', component: MainComponent},
    { path: 'form', component: FormComponent},
    { path: 'user', component: UserComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);