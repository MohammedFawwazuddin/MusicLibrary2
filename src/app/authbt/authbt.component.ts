// import { Component } from '@angular/core';
// //import { AuthService } from '@auth0/auth0-angular';
// import { Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// @Component({
//   selector: 'app-authbt',
//   //template: '<button (click)="auth.loginWithRedirect()">Log in</button>'
//   template: `
//     <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
//       <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
//         Log out
//       </button>
//     </ng-container>

//     <ng-template #loggedOut>
//       <button (click)="auth.loginWithRedirect()">Log in</button>
//     </ng-template>
//   `,
//   styles: [],
// })
// export class AuthbtComponent {

//   //constructor(public auth: AuthService) {}
//   constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
// }
