import { LoadGoogleApiService } from '../services/load-google-api.service';
import { Directive, EventEmitter, ElementRef, Output } from '@angular/core';
import { NgZone } from '@angular/core';

@Directive({
  selector: '[appGoogleLogin]'
})
export class GoogleLoginDirective {
  @Output() loginOk: EventEmitter<gapi.auth2.GoogleUser> = new EventEmitter<any>();
  @Output() loginError: EventEmitter<string> = new EventEmitter<string>();
  @Output() loadingEnd: EventEmitter<void> = new EventEmitter<void>();

  constructor(private el: ElementRef, loadService: LoadGoogleApiService, private ngZone: NgZone) {
    loadService.getAuthApi().subscribe(
      auth2 => {
        auth2.attachClickHandler(el.nativeElement, {},
         (user: gapi.auth2.GoogleUser) => {
          this.ngZone.run( () => this.loginOk.emit(user));
         },
        error => this.loginError.emit(error));
        this.loadingEnd.emit();
      },
      error => this.loginError.emit(error)
    );
  }

}