import { AtorModel } from "../ator/ator-model";
import { ClasseModel } from "../classe/classe-model";
import { DiretorModel } from "../diretor/diretor-model";

export interface TituloModel {
  id: number;
  nome: string;
  ano: number;
  sinopse: string;
  categoria: string;
  actor: AtorModel;
  classe: ClasseModel;
  director: DiretorModel;
}
