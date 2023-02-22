import { Component } from '@angular/core';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';

@Component({
  selector: 'app-chosen-for-you',
  templateUrl: './chosen-for-you.component.html',
  styleUrls: ['./chosen-for-you.component.scss']
})
export class ChosenForYouComponent {

  chosenProducts: BeautyProduct[] = [];

}
