export class Carro {
    id!: number;
    nome!: string;   
    marca!:string;
    modelo!:string;
     ano!:number;

    constructor(id: number, nome: string , ano: number, marca: string, modelo: string){
        this.id=id;
        this.nome=nome;
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
        
    }
}
