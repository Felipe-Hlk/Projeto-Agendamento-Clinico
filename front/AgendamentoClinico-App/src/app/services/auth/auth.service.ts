import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';  // Importe BehaviorSubject
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Use BehaviorSubject para notificar os assinantes sobre alterações no estado de autenticação
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();  // Exponha como Observable

  private authTokenKey = 'authToken';
  private isAuthenticatedValue: boolean = false;  // Mantenha a propriedade para consulta direta

  uri = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private router: Router) {
    // Ao iniciar o serviço, verificar se há um token armazenado no localStorage
    const storedToken = localStorage.getItem(this.authTokenKey);
    if (storedToken) {
      this.setAuthenticated(true);
    }
  }

  isLogado: boolean = false;

  logadoTrue() {
    this.isLogado = true;
  }

  logadoFalse() {
    this.isLogado = false;
  }

  loginFuncionario(
    email_funcionario: string,
    senha_funcionario: string
  ): Observable<any> {
    const auth = {
      email_funcionario,
      senha_funcionario,
    };

    console.log(auth);

    return this.http.post(`${this.uri}/login`, auth).pipe(
      catchError((error) => {
        console.error('Erro ao logar o funcionário:', error);
        console.error('Erro completo:', error.error);
        throw error;
      }),
      map((response: any) => {
        const token = response.token;

        console.log(`auth: ${JSON.stringify(auth)}`);
        console.log(`Token: ${token}`);

        if (token) {
          // Armazenar o token no localStorage
          localStorage.setItem(this.authTokenKey, token);
          this.setAuthenticated(true);
        }

        return response;
      })
    );
  }

  logout() {
    // Limpar o token do localStorage ao fazer logout
    localStorage.removeItem(this.authTokenKey);

    // Lógica adicional de logout, se necessário

    this.setAuthenticated(false);

    // Redirecionar para a tela de login após o logout
    this.router.navigate(['/tela-login']);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  setAuthenticated(isAuthenticated: boolean) {
    console.log(`Setting isAuthenticated to: ${isAuthenticated}`);
    this.isAuthenticatedValue = isAuthenticated;
    this.isAuthenticatedSubject.next(isAuthenticated);  // Notifique os assinantes sobre a mudança
  }

  checkAuthenticationAndRedirect() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/agendamento']);
    }
  }
}
