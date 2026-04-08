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
    imagem:
      "https://qph.cf2.quoracdn.net/main-qimg-9eab730c82f42a399a5002235b5e491e-lq",
  },
  {
    nome: "Pedronaga",
    sexo: "Masculino",
    hobby: "Basquete",
    cabelo: "Preto",
    caracteristica: "Óculos",
    veiculo: "Limousine",
    imagem:
      "https://pm1.aminoapps.com/7067/b9fc547c0131b22e2176e4aedf79cb450ddfc89er1-720-720v2_00.jpg",
  },
  {
    nome: "Ferinhatan",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Preto",
    caracteristica: "Joias",
    veiculo: "Conversivel",
    imagem:
      "https://64.media.tumblr.com/60a18d42b6284e2af17fdc7a8676fd74/b74e2331fa27026d-59/s250x400/f5025b37f5cc1074cc64d74bf76b6a931070a3bf.jpg",
  },
  {
    nome: "Biamachi",
    sexo: "Feminino",
    hobby: "Futebol",
    cabelo: "Ruivo",
    caracteristica: "Tatuagem",
    veiculo: "Jipe",
    imagem: "https://64.media.tumblr.com/37375c459d91d245206f47f3f294d7cc/43407584080930c6-6c/s500x750/d3ae64dde267e5d4d4ede2d099d7ebeea63f2151.jpg",
  },
  {
    nome: "Hisokami",
    sexo: "Feminino",
    hobby: "Futebol",
    cabelo: "Ruivo",
    caracteristica: "Cicatriz",
    veiculo: "Limousine",
    imagem: "https://i1.sndcdn.com/artworks-ys99xdfoSJTrSz3n-y29pSQ-t500x500.jpg",
  },
  {
    nome: "Jaguatiphinks",
    sexo: "Masculino",
    hobby: "Tenis",
    cabelo: "Loiro",
    caracteristica: "Joias",
    veiculo: "Moto",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJNHb8L8HicHllFbwcFzp2JdVOJ7eO2tBuxDFRkTqJEQhfaN9R5NBMg-rC7Pmf4KkcQo&usqp=CAU",
  },
  {
    nome: "Jonark",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Loiro",
    caracteristica: "Óculos",
    veiculo: "Moto",
    imagem: "https://personality-index.com/images/profile/428d2b91-1926-4757-89a7-07d32f031d93.jpg",
  },
  {
    nome: "Franklin",
    sexo: "Masculino",
    hobby: "Futebol",
    cabelo: "Ruivo",
    caracteristica: "Joias",
    veiculo: "Conversivel",
    imagem: "https://cdn.personalitylist.com/avatars/7317.png",
  },
  {
    nome: "Noshizuko",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Preto",
    caracteristica: "Joias",
    veiculo: "Limousine",
    imagem: "https://64.media.tumblr.com/0aba7fda5f57484ba969ecd4b7115df2/42ebd1ec3c204215-52/s400x600/1dd3cf0aa37f5fab39aedc75d650f6d2867e783b.jpg",
  },
  {
    nome: "Pakunoda",
    sexo: "Feminino",
    hobby: "Futebol",
    cabelo: "Loiro",
    caracteristica: "Óculos",
    veiculo: "Jipe",
    imagem: "https://i.pinimg.com/736x/f1/ef/e4/f1efe4e1efd2db2a503c9dcb7cb88352.jpg",
  },
  {
    nome: "Kalangolenof",
    sexo: "Masculino",
    hobby: "Basquete",
    cabelo: "Castanho",
    caracteristica: "Tatuagem",
    veiculo: "Jipe",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR6KRv1N7bTou1X1iOlgAL3f12WSAsAM0ARabzEXiowq52UkTJXk3Vgc8_WPa8P--vs4&usqp=CAU",
  },
  {
    nome: "Ulobin",
    sexo: "Masculino",
    hobby: "Alpinismo",
    cabelo: "Ruivo",
    caracteristica: "Óculos",
    veiculo: "Moto",
    imagem: "https://i.pinimg.com/736x/6e/01/ae/6e01aeb685970ef4d0ec30b71636bae5.jpg",
  },
  {
    nome: "Weskortopi",
    sexo: "Masculino",
    hobby: "Basquete",
    cabelo: "Castanho",
    caracteristica: "Tatuagem",
    veiculo: "Jipe",
    imagem: "https://pm1.aminoapps.com/7273/b3bb3927665063bad6820f6566f0ad17dd2e72d9r1-210-240v2_00.jpg",
  },
  {
    nome: "Global View",
    sexo: "Feminino",
    hobby: "Tenis",
    cabelo: "Ruivo",
    caracteristica: "Joias",
    veiculo: "Conversivel",
    imagem: "https://i1.sndcdn.com/artworks-000486152007-9aymou-t500x500.jpg",
  },
];
