import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('My SEO Optimized App');
    this.meta.addTags([
      { name: 'description', content: 'This is an Angular Universal SEO project' },
      { name: 'author', content: 'Abhishek Yadav' },
      { name: 'keywords', content: 'Angular, SEO, SSR, Meta Tags' }
    ]);
  }
}
