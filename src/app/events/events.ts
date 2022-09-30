import { MatSnackBar } from '@angular/material/snack-bar';

export class Events {
  constructor(
    private _snackBar: MatSnackBar,
  ) {}
  showSnackBar(message : string){
    this._snackBar.open(message, 'x');
  }
}
