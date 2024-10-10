import { Component, inject, OnInit } from '@angular/core';
import DialogValues from '../interfaces/dialog-values.interface';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'lib-cusca-dialog-options',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './cusca-dialog-options.component.html',
  styleUrls: ['./cusca-dialog-options.component.scss']
})
export class CuscaDialogOptionsComponent {
  public dialogData = inject(MAT_DIALOG_DATA);
  
}
