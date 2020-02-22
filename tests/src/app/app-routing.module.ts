import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './inputs/inputs.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SelectsComponent } from './selects/selects.component';
import { TextareasComponent } from './textareas/textareas.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  { path: 'inputs', component: InputsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'selects', component: SelectsComponent },
  { path: 'textares', component: TextareasComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: '', redirectTo: '/inputs', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
