import { Component, OnInit, ViewChild } from '@angular/core';
import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import * as fr from 'dayjs/locale/fr';
import { DaterangepickerDirective } from '../../../../src/daterangepicker';
dayjs.extend(utc);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'locale',
    templateUrl: './locale.component.html',
    standalone: false
})
export class LocaleComponent implements OnInit {
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  locale = fr;
  constructor() {}


  ngOnInit(): void {}
}
