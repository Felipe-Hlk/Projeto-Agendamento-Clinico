import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DATA_PEOPLE } from './model/data-people';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Person } from './model/data-people';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})

export class ConsultasComponent implements AfterViewInit {
  public dataSource = new MatTableDataSource(DATA_PEOPLE);
  public displayColumns: string[] = ['paciente', 'medico', 'data', 'horario', 'status', 'actions'];
  public cadastroForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      especialidade: ['', Validators.required],
      cpf: ['', [Validators.required]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required]
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  adicionarNovaConsulta() {
    // Aqui você pode adicionar lógica adicional, se necessário
    // ...

    // Navegar para a página de agendamento
    this.router.navigate(['/agendamento']);
  }

  ngOnInit() {
    // Add any initialization logic here
  }

  editUser(person: Person) {
    // Encontrar o índice da pessoa na lista
    const index = DATA_PEOPLE.indexOf(person);

    // Verificar se a pessoa foi encontrada
    if (index >= 0) {
      // Alterar o status para "atendida"
      DATA_PEOPLE[index].status = 'ATENDIDA';

      // Atualizar a fonte de dados da tabela
      this.dataSource = new MatTableDataSource(DATA_PEOPLE);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


  deleteUser(person: Person) {
    const index = DATA_PEOPLE.indexOf(person);
    if (index >= 0) {
      DATA_PEOPLE.splice(index, 1);
      this.dataSource = new MatTableDataSource(DATA_PEOPLE);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
