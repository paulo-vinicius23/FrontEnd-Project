import { CategoriaModel } from "./categoria.model";

export class FilmeModel {
    id?: number;
	filme?: string;
	ano?: string;
	imagem?: string;
	sinopse?: string;
	duracao?: string;
	diretor?: string;
	categoria?: CategoriaModel;
}
