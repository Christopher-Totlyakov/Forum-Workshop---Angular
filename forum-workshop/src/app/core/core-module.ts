import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@NgModule({
  declarations: [],
  imports: [CommonModule, Header, Footer],
  exports: [Header, Footer]
})
export class CoreModule {}
