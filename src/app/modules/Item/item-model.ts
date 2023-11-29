import { TituloModel } from "../titulo/titulo-model";

export interface ItemModel {
  id: number;
  numero_de_serie: number;
  data_aquisicao: Date;
  tipo_item: string;
  titulo: TituloModel;
}
