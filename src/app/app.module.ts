import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent} from './components/list/list.component';
import { DetailComponent} from './components/detail/detail.component';
import { PageNotFoundComponent} from './components/common/pagenotfound.component';
import { EventDataService } from './services/event.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
