import {Usuario} from '../usuario';
export abstract class AbstractModel {
  id: number;
  dataCriacao: Date;
  usuarioCriacao: Usuario;
  dataAtualizacao: Date;
  usuarioAtualizacao: Usuario;
}
