import {Injectable} from '@angular/core';
import {Usuario} from "../model/usuario";

@Injectable()
export class UsuarioService {
  cadastrar(usuario: Usuario): boolean {
    console.log('Request to: cadastrar');
    return true;
  }
}
