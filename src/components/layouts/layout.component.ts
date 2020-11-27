/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 10:24:46
 * @LastEditTime: 2020-11-27 12:42:58
 * @LastEditors: lizhi.han
 * @Description: 
 */
import { Component } from '@angular/core'

@Component({
    selector: 'page-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
  })
  export class LayoutComponent {
    public isCollapsed:boolean = false
    
    public onTriggerCollapsed():void{
      this.isCollapsed = !this.isCollapsed
    }
  }