import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { FormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';



@NgModule({
  declarations: [CustomFormComponent, CustomDropdownComponent],
  imports: [CommonModule, FormsModule],
  exports: [CustomFormComponent, CustomDropdownComponent],
})
export class SharedModule {}
