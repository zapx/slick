import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SlickOptions } from './slick-options';
declare var $: any;

@Component({
  selector: 'zapx-slick',
  templateUrl: 'zapx-slick.component.html',
  styles: []
})
export class ZapxSlickComponent implements OnInit {

  @Input() options: SlickOptions = {
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  @ViewChild('zapxSlick', { static: true }) zapxSlick: ElementRef;
  @ViewChild('zapxSlickItem', { static: true }) zapxSlickItem: ElementRef;
  constructor() { }

  ngOnInit() {
    $(this.zapxSlick.nativeElement).slick(this.options);
  }
}
