import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProdutsComponent {
  products = [{ name: '', count: '' }];
  productOptions = ['Pen', 'Pencil', 'Eraser', 'Compass', 'Scale', 'Paper', 'Protractor', 'Glue'];
  countOptions = [0, 1, 2, 3, 4, 5];
  order: { name: string; count: number }[] = [];

  addRow() {
    if (this.products.length < 8) {
      this.products.push({ name: '', count: '' });
    }
  }
  validateRow(index: number) {
    const product = this.products[index];
    if (product.name && product.count === '') {
      alert('Please select a quantity for the chosen product.');
    } else if (product.count && product.name === '') {
      alert('Please select a product for the chosen quantity.');
    }
  }

  showOrder() {
    this.order = this.products
      .filter(product => product.name && product.count !== '')
      .map(product => ({ name: product.name, count: +product.count }));
    this.products = [{ name: '', count: '' }];
  }

  readOrder() {
    const orderText = this.order
      .map(item => `${item.count} ${item.name}()`)
      .join(', ');
    const speech = new SpeechSynthesisUtterance(orderText);
    window.speechSynthesis.speak(speech);
  }
}