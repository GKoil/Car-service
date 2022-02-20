import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '@pages/home/components/card/card.component';
import { ListCarsComponent } from '@pages/home/components/list-cars/list-cars.component';
import { HeaderComponent } from '@layout/header/header.component';
import { TitleContentComponent } from '@layout/title-content/title-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '@pages/home/home.component';
import { DialogBaseComponent } from '@shared/dialog-base/dialog-base.component';
import { DialogTitleComponent } from '@shared/dialog-title/dialog-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonAddComponent } from './pages/home/components/button-add/button-add.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCarsComponent,
    HeaderComponent,
    TitleContentComponent,
    HomeComponent,
    DialogBaseComponent,
    DialogTitleComponent,
    ButtonAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
