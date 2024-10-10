import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CuscaDialogOptionsComponent } from '../../../cusca-dialog-options/src/public-api';
import DialogValues from '../../../cusca-dialog-options/src/interfaces/dialog-values.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private dialog = inject(MatDialog);
  private dialogData: DialogValues = {
    title: '¿Quieres salir?',
    description: 'Si sales deberás iniciar nuevamente tu transferencia',
    textPrimaryButton: 'Continuar transferencia',
    textSecondaryButton: 'Salir'
  }

  openDialog():void{
    const dialog = this.dialog.open(CuscaDialogOptionsComponent, {
      data: this.dialogData,
      autoFocus: false
    });

    dialog.afterClosed().subscribe(
      result => console.log(result)
    )
  }
}
