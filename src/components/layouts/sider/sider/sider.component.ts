/*
 * @Author: lizhi.han
 * @Date: 2020-11-27 11:35:05
 * @LastEditTime: 2020-11-27 12:46:12
 * @LastEditors: lizhi.han
 * @Description: 
 */
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {

  @Input() isCollapsed:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
