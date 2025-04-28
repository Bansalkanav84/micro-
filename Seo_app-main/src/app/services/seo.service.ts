import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateMeta(title: string, description: string, keywords?: string) {
    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    
    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }
  }
}
