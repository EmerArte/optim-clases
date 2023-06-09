import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    BlogsRoutingModule
  ],
})
export class BlogsModule { }
