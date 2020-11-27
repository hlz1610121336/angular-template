/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 11:23:48
 * @LastEditTime: 2020-11-27 17:36:29
 * @LastEditors: lizhi.han
 * @Description: 
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../router/app-routing.module'
import { LayoutComponent } from './layout.component'
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderComponent } from './header/header/header.component';
import { SiderComponent } from './sider/sider/sider.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ContentComponent } from './content/content/content.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SiderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    AppRoutingModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
