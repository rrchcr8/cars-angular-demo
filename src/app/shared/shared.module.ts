import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [CustomFormComponent],
})
export class SharedModule {}
