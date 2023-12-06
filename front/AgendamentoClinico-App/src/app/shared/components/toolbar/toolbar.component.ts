import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarFuncionarioComponent } from 'src/app/pages/funcionario/editar-funcionario/editar-funcionario.component';
import { CadastroFuncionarioComponent } from 'src/app/pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';

// Importe o serviço de autenticação
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() popText = true;
  @Input() menuTitle = '';
  @Input() smallScreen = false;
  @Input() title: string = "";
  cadastroForm: any;
  dialogRef: any;

  // Injete o serviço de autenticação no construtor
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  AdicionarUsuario(): void {
    const dialogRef = this.dialog.open(CadastroFuncionarioComponent, {
      width: '70%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Adicione qualquer lógica adicional aqui após o fechamento da caixa de diálogo
    });
  }

  EditarUsuario(): void {
    const dialogRef = this.dialog.open(EditarFuncionarioComponent, {
      width: '70%',
      disableClose: true,
      data: { cadastroForm: this.cadastroForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Adicione qualquer lógica adicional aqui após o fechamento da caixa de diálogo
    });
  }

  // Modifique a função sair para chamar a função de logout do serviço de autenticação
  sair(): void {
    // Chame a função de logout do serviço de autenticação
    this.authService.logout();
    this.authService.logadoFalse()
    // Adicione qualquer lógica adicional aqui após o logout
  }
}
