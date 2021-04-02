import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './404notfound.component';
import { ContainerComponent } from './404-not-found/containers/container/container.component';
import { HeaderComponent } from './404-not-found/containers/header/header.component';
import { MainComponent } from './404-not-found/containers/main/main.component';
import { FooterComponent } from './404-not-found/containers/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '404-not-found',
    pathMatch: 'full'
  },
  {
    path: '404-not-found',
    loadChildren: () =>
      import('./404-not-found/routing/404-not-found-routing.module').then(m => m.DevChallenges404NotFoundRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
