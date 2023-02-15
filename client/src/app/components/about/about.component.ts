import { Component } from '@angular/core';

interface AboutTopic {
  title: string, 
  text: string, 
  imgPath: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  imagesPath: string = '../../../assets/images/';

  aboutTopics: AboutTopic[] = [{
    title: 'Reliable',
    text: `We stand behind our products and give genuine advice with customer's best interest at heart`,
    imgPath: this.imagesPath + 'reliable.svg',
  }, 
  {
    title: 'Customizable nature',
    text: 'Our products allow user to assume control of the color',
    imgPath: this.imagesPath + 'customizable-nature.svg',
  },
  {
    title: 'Cruelty-free',
    text: 'We made our products not only inclusive for human but also crutely-free for animals',
    imgPath: this.imagesPath + 'cruelty-free.svg',
  }
];


}
