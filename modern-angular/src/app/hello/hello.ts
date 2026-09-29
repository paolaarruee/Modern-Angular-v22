import { Component, signal, computed, effect } from '@angular/core';

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

  protected increateCounter() {
    this.count.update((value) => value + 1);
  }

  protected decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }

  private readonly countLog = effect(() => {
    console.log('Count changed',this.count())
  });
  
}
