import { Component } from '@angular/core';

@Component({
  selector: 'Page-not-found',
  template: `<div class="cardContainer"><mat-card class="card">
  <mat-card-header>
    <mat-card-title>
      Error
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <h1>404 - Page Not Found</h1>
  </mat-card-content>
</mat-card></div>`,
  styleUrls: ['./app.component.scss']
})
export class PageNotFoundComponent {
}
