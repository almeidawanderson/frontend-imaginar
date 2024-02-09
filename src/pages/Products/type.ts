interface IHeader {
    key: string;
    label: string;
  }

export const IHeaders: IHeader[] = [
    { label: "Indice", key: "indice" },
    { label: "Tipo", key: "tipo" },
    { label: "Tabela", key: "tabela" },
    { label: "Nome", key: "nome" },
    { label: "Unidade", key: "unidade" },
    { label: "Tipo de Custo", key: "tipoCusto" },
    { label: "Ações", key: "acoes" },
]

type IService = {
    indice: string;
    tipo: "SERVIÇOS";
    tabela: string;
    nome: string;
    unidade: string;
    tipoCusto: string;
  };
  
  type ISubFase = {
    indice: string;
    tipo: "SUB-FASE";
    tabela: string;
    nome: string;
    unidade: string;
    tipoCusto: string;
    servicos: IService[];
  };
  
  type IFase = {
    indice: string;
    tipo: "FASE";
    tabela: string;
    nome: string;
    unidade: string;
    tipoCusto: string;
    subfases: (ISubFase | IService)[];
  };
  
  
  type Ifase = IFase | ISubFase | IService;
  

export const DataBackend: Ifase[][] = [
    [
        {
          "indice": "1.0",
          "tipo": "FASE",
          "tabela": "SINAPI",
          "nome": "ASSENTAMENTO DE TUBOS E PEÇAS",
          "unidade": "H",
          "tipoCusto": "Mão de obra",
          "subfases": [
            {
              "indice": "1.1",
              "tipo": "SUB-FASE",
              "tabela": "SINAPI",
              "nome": "FORNEC E/OU ASSENT DE CONEXOES DIVERSAS",
              "unidade": "H",
              "tipoCusto": "Mão de obra",
              "servicos": [
                {
                  "indice": "1.1.1",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 1",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.2",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 2",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.3",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 3",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.4",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 4",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.5",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 5",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.6",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 6",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.7",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 7",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.8",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 8",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.9",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 9",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.1.10",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 10",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                }
              ]
            },
            {
              "indice": "1.2",
              "tipo": "SUB-FASE",
              "tabela": "SINAPI",
              "nome": "Sub-Fase 2",
              "unidade": "H",
              "tipoCusto": "Mão de obra",
              "servicos": [
                {
                  "indice": "1.2.1",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 1",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.2",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 2",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.3",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 3",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.4",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 4",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.5",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 5",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.6",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 6",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.7",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 7",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.8",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 8",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.9",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 9",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.2.10",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 10",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                }
              ]
            },
            {
              "indice": "1.3",
              "tipo": "SUB-FASE",
              "tabela": "SINAPI",
              "nome": "Sub-Fase 3",
              "unidade": "H",
              "tipoCusto": "Mão de obra",
              "servicos": [
                {
                  "indice": "1.3.1",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 1",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.2",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 2",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.3",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 3",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.4",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 4",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.5",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 5",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.6",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 6",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.7",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 7",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.8",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 8",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.9",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 9",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                },
                {
                  "indice": "1.3.10",
                  "tipo": "SERVIÇOS",
                  "tabela": "SINAPI",
                  "nome": "Serviço 10",
                  "unidade": "H",
                  "tipoCusto": "Mão de obra"
                }
              ]
            },
            {
              "indice": "1.4",
              "tipo": "SUB-FASE",
              "tabela": "SINAPI",
              "nome": "Sub-Fase 4",
              "unidade": "H",
              "tipoCusto": "Mão de obra",
              "servicos": [
                // ... serviços para a subfase 4
              ]
            },
            {
              "indice": "1.5",
              "tipo": "SUB-FASE",
              "tabela": "SINAPI",
              "nome": "Sub-Fase 5",
              "unidade": "H",
              "tipoCusto": "Mão de obra",
              "servicos": [
                // ... serviços para a subfase 5
              ]
            }
          ]
        },
        {
          "indice": "2.0",
          "tipo": "FASE",
          "tabela": "SINAPI",
          "nome": "Outra Fase",
          "unidade": "H",
          "tipoCusto": "Mão de obra",
          "subfases": [
            // ... subfases para a segunda fase
          ]
        },
        {
          "indice": "3.0",
          "tipo": "FASE",
          "tabela": "SINAPI",
          "nome": "Mais uma Fase",
          "unidade": "H",
          "tipoCusto": "Mão de obra",
          "subfases": [
            // ... subfases para a terceira fase
          ]
        }
      ]
]

