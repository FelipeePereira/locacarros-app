import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario';
import { ApiServiceProvider } from '../api-service/api-service';

const CHAVE = 'avatar-usuario';

@Injectable()
export class UsuariosServiceProvider {
  _url: string;

  private _usuarioLogado: Usuario;

  constructor(private _http: HttpClient,
    private _api: ApiServiceProvider) {

      this._url = this._api.url;
  }

  efetuaLogin(email, senha) {
    return this._http.post<Usuario>(this._url+'/api/login', { email, senha})
              .do((usuario: Usuario) => this._usuarioLogado = usuario);
  }

  obtemUsuarioLogado() {
    return this._usuarioLogado;
  }

  salvaAvatar(avatar){
    localStorage.setItem(CHAVE, avatar);
  }

  obtemAvatar(){
    return localStorage.getItem(CHAVE)
    //if se eu tiver uma foto
      ? localStorage.getItem(CHAVE)
      //se n tiver
      : 'assets/img/avatar-profile.png';
  }
}
