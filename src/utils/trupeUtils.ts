export interface Trupe {
  nome: string;
  sexo: "Masculino" | "Feminino";
  hobby: "Tenis" | "Basquete" | "Alpinismo" | "Futebol";
  cabelo: "Loiro" | "Ruivo" | "Castanho" | "Preto";
  caracteristica: "Joias" | "Tatuagem" | "Cicatriz" | "Óculos";
  veiculo: "Limousine" | "Conversivel" | "Moto" | "Jipe";
  imagem: string;
  idade?: string;
  outro?: string;
}

export const trupeiros: Trupe[] = [
  {
    nome: "Chrolliguin",
    sexo: "Masculino",
    idade: "24 anos",
    hobby: "Tenis",
    cabelo: "Preto",
    veiculo: "Moto",
    caracteristica: "Cicatriz",
    outro: "Apaixonado por Andy Blossom",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Chrolliguin",
  },
  {
    nome: "Pedronaga",
    sexo: "Masculino",
    hobby: "Basquete",
    cabelo: "Preto",
    caracteristica: "Óculos",
    veiculo: "Limousine",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Pedronaga",
  },
  {
    nome: "Ferinhatan",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Preto",
    caracteristica: "Joias",
    veiculo: "Conversivel",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Ferinhatan",
  },
  {
    nome: "Biamachi",
    sexo: "Feminino",
    hobby: "Futebol",
    cabelo: "Ruivo",
    caracteristica: "Tatuagem",
    veiculo: "Jipe",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Biamachi",
  },
  {
    nome: "Hisokami",
    sexo: "Feminino",
    hobby: "Futebol",
    cabelo: "Ruivo",
    caracteristica: "Cicatriz",
    veiculo: "Limousine",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Hisokami",
  },
  {
    nome: "Jaguatiphinks",
    sexo: "Masculino",
    hobby: "Tenis",
    cabelo: "Loiro",
    caracteristica: "Joias",
    veiculo: "Moto",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Jaguatiphinks",
  },
  {
    nome: "Jonark",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Loiro",
    caracteristica: "Óculos",
    veiculo: "Moto",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Jonark",
  },
  {
    nome: "Franklin",
    sexo: "Masculino",
    hobby: "Futebol",
    cabelo: "Ruivo",
    caracteristica: "Joias",
    veiculo: "Conversivel",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Franklin",
  },
  {
    nome: "Noshizuko",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Preto",
    caracteristica: "Joias",
    veiculo: "Limousine",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Noshizuko",
  },
  {
    nome: "Pakunoda",
    sexo: "Feminino",
    hobby: "Futebol",
    cabelo: "Loiro",
    caracteristica: "Óculos",
    veiculo: "Jipe",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Pakunoda",
  },
  {
    nome: "Kalangolenof",
    sexo: "Masculino",
    hobby: "Basquete",
    cabelo: "Castanho",
    caracteristica: "Tatuagem",
    veiculo: "Jipe",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Kalangolenof",
  },
  {
    nome: "Ulobin",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Ruivo",
    caracteristica: "Óculos",
    veiculo: "Moto",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Ulobin",
  },
  {
    nome: "Weskortopi",
    sexo: "Masculino",
    hobby: "Basquete",
    cabelo: "Castanho",
    caracteristica: "Tatuagem",
    veiculo: "Jipe",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Weskortopi",
  },
  {
    nome: "Global View",
    sexo: "Feminino",
    hobby: "Tenis",
    cabelo: "Ruivo",
    caracteristica: "Joias",
    veiculo: "Conversivel",
    imagem: "https://api.dicebear.com/7.x/pixel-art/svg?seed=GlobalView",
  },
];
