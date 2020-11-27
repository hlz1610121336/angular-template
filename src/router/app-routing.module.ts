/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 09:15:47
 * @LastEditTime: 2020-11-27 18:57:52
 * @LastEditors: lizhi.han
 * @Description: routes config
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component';
import { HelloComponent } from '../pages/hello/hello.component'

export interface IRoute extends Route{
  title?: string | null;
  icon?: string;
  isSiderMenu?: boolean;
  children?: IRoute[];
}
const routes: IRoute[] = [
  {
    path: '**',
    component: IndexComponent,
    title: '首页'
  },
  {
    path: 'index',
    component: IndexComponent,
    title: '首页',
    icon: 'home',
    isSiderMenu: true
  },
  {
    path: 'test',
    title: '二级目录',
    isSiderMenu: true,
    icon: 'appstore',
    children: [
      {
        path: 'index',
        component: HelloComponent,
        title: 'hello',
        isSiderMenu: true
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes: Routes = routes;
 }
