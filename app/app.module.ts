import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductNameFilterPipe } from './products/product-name-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ProductNameFilterPipe, StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
