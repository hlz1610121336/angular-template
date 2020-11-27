/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 11:35:05
 * @LastEditTime: 2020-11-27 18:32:20
 * @LastEditors: lizhi.han
 * @Description:
 */
import { Component, OnInit , Input} from '@angular/core';
import { AppRoutingModule , IRoute } from '../../../../router/app-routing.module';
import { IItem } from '../../../../dicts/index';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {

  @Input() isCollapsed = false;

  public routes: IRoute[];
  constructor(
    private routingModule: AppRoutingModule
  ) {
    // this.routes = this.cycleFilter(this.routingModule.routes, 'isSiderMenu');
    this.routes = this.cycleFilter(this.routingModule.routes, 'isSiderMenu');
  }

  ngOnInit(): void {
    console.log(this.routes);
  }

  cycleFilter(trees: IRoute[], key: string): IRoute[]{
    const filter = (lists: IRoute[]) => lists.filter((item: IItem) => item[key]);
    const list = filter(trees).map((item: IItem) => {
      if (item.children) {
        return this.cycleFilter(item.children, key);
      } else {
        return item;
      }
    });
    return list;
  }

}
