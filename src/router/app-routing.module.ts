/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 09:15:47
 * @LastEditTime: 2020-11-27 09:54:40
 * @LastEditors: lizhi.han
 * @Description: routes config
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component'

const routes: Routes = [
  {
    path:'**',
    component: IndexComponent
  },
  {
    path:'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
