/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 11:35:05
 * @LastEditTime: 2020-12-01 17:41:02
 * @LastEditors: lizhi.han
 * @Description:
 */
import { Component, OnInit, Input } from '@angular/core';
import { routes, IRoute } from '../../../../router/app-routing.module';
import { IItem } from '../../../../dicts/index';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less'],
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed = false;

  public routes: IRoute[] = [];
  constructor() {}

  ngOnInit(): void {
    const layout = routes.find((route: IRoute) => route.path === 'layout') as IRoute;
    this.routes = this.cycleFilter(layout.children as IRoute[], 'isSiderMenu');
  }
  /**
   * @description 根据路由递归生成菜单
   * @param trees 菜单路由
   * @param key 过滤字段
   * @param parentRoute 父路由
   */
  cycleFilter(trees: IRoute[], key: string, parentRoute: string = '/layout'): IRoute[] {
    const filter = (items: IRoute[]) => items.filter((item: IItem) => item[key]);
    const list = filter(trees).map((item: IItem) => {
      if (item.children) {
        return Object.assign(item, {
          path: `${parentRoute}/${item.path}`,
          children: this.cycleFilter(item.children, key, `${parentRoute}/${item.path}`)
        });
      } else {
        item.path = `${parentRoute}/${item.path}`;
        return item;
      }
    });
    return list;
  }
}
