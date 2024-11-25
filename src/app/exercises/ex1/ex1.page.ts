import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  ngOnInit() {
  }
  onCardButtonClick(cardId: number) {
    console.log(`Botão do Card ${cardId} clicado!`);
    alert(`Você clicou no botão do Card ${cardId}!`);
  }
}
