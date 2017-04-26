import {Injectable} from '@angular/core';
import {Curso} from "../model/curso";
import {CURSOS} from "../mock/curso.mock";

@Injectable()
export class CursoService {
  buscaTodosCursos(): Promise<Curso[]> {
    console.log('Request to: buscaTodosCursos');
    return Promise.resolve(CURSOS);
  }
}
