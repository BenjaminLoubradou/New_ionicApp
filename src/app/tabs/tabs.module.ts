import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from '../home/home.module'
import { AboutusPageModule } from '../aboutus/aboutus.module';
import { ContactPageModule } from '../contact/contact.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabsRoutingModule,
    HomePageModule,
    AboutusPageModule,
    ContactPageModule,

  ]
})
export class TabsModule { }
