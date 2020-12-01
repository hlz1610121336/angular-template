/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 09:15:47
 * @LastEditTime: 2020-12-01 18:06:36
 * @LastEditors: lizhi.han
 * @Description: routes config
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from '../components/layouts/layout.component';
import { IndexComponent } from '../pages/index/index.component';
import { HelloComponent } from '../pages/hello/hello.component';
import { LoginComponent } from '../pages/login/login.component';

export interface IRoute extends Route {
  title?: string | null;
  icon?: string;
  isSiderMenu?: boolean;
  children?: IRoute[];
}
export const routes: IRoute[] = [
  { path: '', redirectTo: '/layout/index', pathMatch: 'full' },
  {
    path: 'layout',
    component: LayoutComponent,
    title: '首页',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent,
        title: '首页',
        icon: 'home',
        isSiderMenu: true,
        pathMatch: 'full',
      },
      {
        path: 'test',
        title: '二级目录',
        isSiderMenu: true,
        icon: 'appstore',
        children: [
          {
            path: 'hello',
            component: HelloComponent,
            title: 'hello',
            isSiderMenu: true,
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: '登录',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
