import { Component, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.scss',
  templateUrl: './hello.html',
})
export class Hello {
  protected title = 'Welcome to Modern Angular';
  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  protected doubleCount = computed( () => this.count() * 2 )

  increateCounter() {
    this.count.update((value) => value + 1);
  }

  decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  resetCounter() {
    this.count.set(0);
  }
}
