export class Carro {
    id!: number;
    nome!: string;
    ano!:number;
    marca!:string;
    modelo!:string;

    constructor(id: number, nome: string, ano: number, marca: string, modelo:string){
        this.id=id;
        this.nome=nome;
        this.ano=ano;
        this.marca=marca;
        this.modelo=modelo;

    }
}
