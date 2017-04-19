import {TipoUsuario} from '../tipo-usuario';
import {AbstractModel} from './abstract-model';

export abstract class Usuario extends AbstractModel {
  nome: string;
  matricula: string;
  email: string;
  tipoUsuario: TipoUsuario;
  senha: string;
}
