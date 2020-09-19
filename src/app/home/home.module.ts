import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserListFilterPipe } from './home-component/user-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponentComponent,UserListFilterPipe],
  exports:[HomeComponentComponent]
})
export class HomeModule { }
