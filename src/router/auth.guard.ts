/*
 * @Author: lizhi.han
 * @Date: 2020-12-01 17:57:25
 * @LastEditTime: 2020-12-01 18:03:31
 * @LastEditors: lizhi.han
 * @Description:
 */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('路由守卫')
    return true;
  }
}
