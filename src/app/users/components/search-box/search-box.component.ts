import { Component } from '@angular/core';

@Component({
  selector: 'users-search-box',
  template: `
    <input type="text"
      class="input-search"
      placeholder="Buscar gifs..."

      #txtTagInput
    >
  `,
  styles: `
    .input-search{
      border-radius: 12px;
      height: 25px;
      width: 600px;
      border-color: #D8D9CF;
    }
  `
})
export class SearchBoxComponent {

}
