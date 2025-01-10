export interface Evento {
    id: number;
    nome: string;
    data: string;
    qtd: number;
    tipo: string;
    descricao: string;
    local: string;
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento: string;
    imagem: string;
}

export interface BntCompartilhar {
    bg_Color: string;
    color: string;
    tamanho: number;
    fontSize: number;
    padding: string;
}