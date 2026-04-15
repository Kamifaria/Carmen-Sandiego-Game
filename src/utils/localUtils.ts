export interface LocationData {
  name: string;
  image: string;
  description: string;
  top: number;
  left: number;
  metadata: {
    currency: string;
    flag: string;
    landmark: string;
  };
}

export const locationsData: LocationData[] = [
    {
      name: "BANGU", 
      image: "https://static.displate.com/324x454/displate/2023-03-14/92462b10f9a0b66c0e6920ee6b9ea4ac_2d6ede5b027f156fd9b8e274bd441c89.avif", 
      description: "Bairro localizado na Zona Oeste do Rio de Janeiro, Brasil. Conhecido por sua história industrial e pelo Complexo Penitenciário de Bangu.", 
      top: 550, left: 510,
      metadata: { currency: "Real", flag: "Verde e Amarelo", landmark: "Cristo Redentor" }
    },
    {
      name: "TORONTO", 
      image: "https://static.displate.com/227x162/displate/2023-04-11/4c4cecc6492b557c5580640e9ea3e917_6edaaac3f1b6eae0ae3796bd1914a786.jpg", 
      description: "Maior cidade do Canadá, localizada em Ontário. É um centro multicultural e financeiro, com destaque para a Torre CN e seus eventos culturais.", 
      top: 300, left: 410,
      metadata: { currency: "Dólar Canadense", flag: "Vermelho e Branco (Folha de Bordo)", landmark: "Torre CN" }
    },
    {
      name: "NOVA YORK", 
      image: "https://static.displate.com/454x324/displate/2023-03-17/4e42543472f5923370365ff697a73b95_8303cfc475dd12efd939b2f4e0d10c4c.avif", 
      description: "Cidade mais populosa dos Estados Unidos, conhecida por seus arranha-céus icônicos, como o Empire State Building, e pela diversidade cultural.", 
      top: 350, left: 410,
      metadata: { currency: "Dólar Americano", flag: "Estrelas e Listras (Azul, Branco e Vermelho)", landmark: "Estátua da Liberdade" }
    },
    {
      name: "PARIS", 
      image: "https://static.displate.com/1200x857/displate/2023-02-12/03b8abcd532f2251be5987e83f6a158a_0d152c3e8f4b2396833e0b7a388c1f9e.jpg", 
      description: "Capital da França, conhecida como a Cidade Luz, famosa por sua cultura, arte, arquitetura clássica e monumentos icônicos como a Torre Eiffel e o Louvre.", 
      top: 290, left: 690,
      metadata: { currency: "Euro", flag: "Azul, Branco e Vermelho (Vertical)", landmark: "Torre Eiffel" }
    },
    {
      name: "LONDRES", 
      image: "https://static.displate.com/454x324/displate/2023-03-17/9e24044a934bd31c438bb97d75904832_889ba322460bc8cecfac83e7b0d546bf.avif", 
      description: "Capital do Reino Unido, uma metrópole global conhecida por sua história, cultura, teatros e ícones como o Big Ben e o Palácio de Buckingham.", 
      top: 270, left: 675,
      metadata: { currency: "Libra Esterlina", flag: "Union Jack (Azul, Vermelho e Branco)", landmark: "Big Ben" }
    },
    {
      name: "CAIRO", 
      image: "https://static.displate.com/227x162/displate/2023-05-01/3c05516b40912685bfcc99ff99885377_52a91f42a8c10c68cd8f6774b97c3dcc.jpg", 
      description: "Capital do Egito, conhecida por suas pirâmides antigas, como as de Gizé, e seu vibrante mercado Khan El Khalili.", 
      top: 370, left: 800,
      metadata: { currency: "Libra Egípcia", flag: "Vermelho, Branco e Preto com um Falcão Dourado", landmark: "Pirâmides de Gizé" }
    },
    {
      name: "MOSCOU", 
      image: "https://thumbs.dreamstime.com/b/saint-basil-s-cathedral-moscow-russia-vector-illustration-retro-style-saint-basil-s-cathedral-moscow-russia-vector-300530686.jpg", 
      description: "Capital da Rússia, conhecida por sua rica história, arquitetura monumental, como a Catedral de São Basílio, e vida cultural vibrante.", 
      top: 275, left: 870,
      metadata: { currency: "Rublo", flag: "Branco, Azul e Vermelho (Horizontal)", landmark: "Praça Vermelha" }
    },
    {
      name: "TÓQUIO", 
      image: "https://static.displate.com/324x454/displate/2024-01-05/2d2ae4f0774e3a1565e98f51cb129774_707b000a6983bf7eae874a7641e973eb.avif", 
      description: "Capital do Japão, uma cidade moderna e vibrante conhecida por sua tecnologia avançada, moda, cultura pop e templos antigos.", 
      top: 340, left: 1190,
      metadata: { currency: "Iene", flag: "Círculo Vermelho no Fundo Branco", landmark: "Monte Fuji" }
    },
    {
      name: "GUADALAJARA", 
      image: "https://static.displate.com/324x454/displate/2023-12-14/b31b23ff460d68cab2685f1a5013e097_02a19b178671b810d87ad513bdac81af.avif", 
      description: "Segunda maior cidade do México, famosa por sua arquitetura colonial, arte e música mariachi.", 
      top: 390, left: 310,
      metadata: { currency: "Peso Mexicano", flag: "Verde, Branco e Vermelho", landmark: "Catedral de Guadalajara" }
    },
    {
      name: "HAVANA", 
      image: "https://static.displate.com/324x454/displate/2024-06-11/d7b5d394275963b3edd0ce8a2be4d50c_cb6508d0cc9367f44e28bd4e07256591.avif", 
      description: "Capital de Cuba, conhecida por seus carros vintage, arquitetura colorida colonial espanhola e malecón à beira-mar.", 
      top: 395, left: 400,
      metadata: { currency: "Peso Cubano", flag: "Azul, Branco e uma Estrela Vermelha", landmark: "El Capitólio" }
    },
    {
      name: "BOGOTÁ", 
      image: "https://static.displate.com/454x324/displate/2023-11-30/83f3ff9845f16de01f7341574886e6e1_2aa2652035ad013af26449eeeab760fd.avif", 
      description: "Capital da Colômbia, situada em uma região montanhosa, conhecida por sua rica história, museus e arte urbana.", 
      top: 450, left: 430,
      metadata: { currency: "Peso Colombiano", flag: "Amarelo, Azul e Vermelho", landmark: "Santuário de Monserrate" }
    },
    {
      name: "LIMA", 
      image: "https://static.displate.com/324x454/displate/2023-05-14/79138ba0793248f790959f0ada08d271_4bb18a9ca3d1af0f87ef8d7bcaf10c68.avif", 
      description: "Capital do Peru, com uma combinação única de história colonial espanhola, sítios arqueológicos incas e uma vibrante cena gastronômica.", 
      top: 510, left: 420,
      metadata: { currency: "Sol", flag: "Vermelho e Branco (Vertical)", landmark: "Machu Picchu" }
    },
    {
      name: "ROMA", 
      image: "https://static.displate.com/227x162/displate/2023-04-11/b675754bbdd7e5518dba21802dedfbae_ef9a26900183c824db3bc1121ebb0ff3.jpg", 
      description: "Capital da Itália, conhecida por seus monumentos antigos, como o Coliseu, o Vaticano e a Fontana di Trevi.", 
      top: 320, left: 735,
      metadata: { currency: "Euro", flag: "Verde, Branco e Vermelho (Vertical)", landmark: "Coliseu" }
    },
    {
      name: "ROTERDÃ", 
      image: "https://static.displate.com/227x162/displate/2024-02-01/5dda641f12c96309d41839ea5fde30b0_58b6ed8a6bb14ba02ba8882650322dd4.jpg", 
      description: "Cidade portuária nos Países Baixos, conhecida por sua arquitetura moderna, arte contemporânea e porto movimentado.", 
      top: 265, left: 720,
      metadata: { currency: "Euro", flag: "Vermelho, Branco e Azul", landmark: "Casas Cubo" }
    },
    {
      name: "RABAT", 
      image: "https://ih0.redbubble.net/image.4237166901.2206/raf,360x360,075,t,fafafa:ca443f4786.jpg", 
      description: "Capital do Marrocos, conhecida por suas fortalezas históricas, medinas e pela Kasbah dos Oudaias.", 
      top: 360, left: 655,
      metadata: { currency: "Dirham", flag: "Vermelho com uma Estrela Verde", landmark: "Torre Hassan" }
    },
    {
      name: "PRETÓRIA", 
      image: "https://img.freepik.com/premium-vector/african-sunset-landscape-ai-generated-8bit-pixel-art-game-background-8bit-arcade-backdrop-indie-pixel-game-vector-scenery-vintage-2d-videogame-level-background-with-african-savannah-landscape_8071-54882.jpg", 
      description: "Uma das capitais administrativas da África do Sul, conhecida por seus edifícios históricos, museus e jardins botânicos.", 
      top: 520, left: 800,
      metadata: { currency: "Rand", flag: "Verde, Vermelho, Azul, Branco, Preto e Amarelo", landmark: "Union Buildings" }
    },
    {
      name: "DUBAI", 
      image: "https://static.displate.com/227x162/displate/2024-01-20/66ae7b5216eb6cd573e6694426a9ccd8_adb010ca0aef3aab37f0876cb565d924.jpg", 
      description: "Cidade nos Emirados Árabes Unidos conhecida por sua arquitetura futurista, compras de luxo, praias e vida noturna vibrante.", 
      top: 400, left: 880,
      metadata: { currency: "Dirham dos EAU", flag: "Vermelho, Verde, Branco e Preto", landmark: "Burj Khalifa" }
    },
    {
      name: "KIGALI", 
      image: "https://img.freepik.com/premium-vector/8-bit-pixel-jungle-forest-landscape-ai-generated-rainforest-retro-pixel-art-game-background-with-vector-tropical-trees-green-leaf-plants-palms-lianas-jungle-forest-nature-game-backdrop_8071-54733.jpg", 
      description: "Capital de Ruanda, conhecida por sua limpeza, segurança, colinas verdes e esforços de reconciliação pós-genocídio.", 
      top: 490, left: 800,
      metadata: { currency: "Franco Ruandês", flag: "Azul, Amarelo e Verde", landmark: "Memorial do Genocídio de Kigali" }
    },
    {
      name: "SEUL", 
      image: "https://static.displate.com/227x162/displate/2023-03-17/eb31df62542f4e280b2cba7641c9df35_5554bf59b77b8755667f8c24bc09afdb.jpg", 
      description: "Capital da Coreia do Sul, uma metrópole moderna conhecida por sua tecnologia avançada, comida deliciosa e palácios históricos.", 
      top: 340, left: 1145,
      metadata: { currency: "Won", flag: "Branco com Círculo Vermelho e Azul e 4 Trigramas Pretos", landmark: "Torre N Seoul" }
    },
    {
      name: "HONG KONG", 
      image: "https://static.displate.com/227x162/displate/2023-03-17/cea4fc83482ab17092673b727242226c_116be8295c09c0c64abd23e848c0009f.jpg", 
      description: "Região administrativa especial da China, conhecida por sua paisagem urbana de arranha-céus, gastronomia diversificada e cultura vibrante.", 
      top: 390, left: 1100,
      metadata: { currency: "Dólar de Hong Kong", flag: "Vermelho com uma Flor Branca de 5 Pétalas", landmark: "Victoria Peak" }
    },
    {
      name: "NOVA DELHI", 
      image: "https://static.displate.com/227x162/displate/2023-05-01/13ac91a10e0e5bb9e5090a92beaf44b0_f84b342a46ffa3cf35137f0d3eb3c9a4.jpg", 
      description: "Capital da Índia, conhecida por sua mistura de cultura antiga e moderna, como o complexo de Qutb Minar e os mercados movimentados.", 
      top: 380, left: 960,
      metadata: { currency: "Rupia Indiana", flag: "Açafrão, Branco e Verde com a Roda de Ashoka", landmark: "Portão da Índia" }
    },
    {
      name: "PEQUIM", 
      image: "https://static.displate.com/227x162/displate/2024-02-11/18c710aa9be5ac089ff51f373930cf99_8a84ed06355a44065a243a5398e1b333.jpg", 
      description: "Capital da China, conhecida por sua grandeza histórica e modernidade, incluindo a Cidade Proibida e a Grande Muralha.", 
      top: 320, left: 1130,
      metadata: { currency: "Renminbi (Yuan)", flag: "Vermelho com 5 Estrelas Douradas", landmark: "Grande Muralha" }
    },
    {
      name: "MELBOURNE", 
      image: "https://static.displate.com/227x162/displate/2024-02-07/cfecd117d4259e0d21053828274fcf79_f792ca1bd0244b2649af198925983e49.jpg", 
      description: "Cidade na Austrália, conhecida por sua cultura diversificada, cafés cosmopolitas, arte de rua e eventos esportivos.", 
      top: 575, left: 1205,
      metadata: { currency: "Dólar Australiano", flag: "Azul, Branco e Vermelho (Cruzeiro do Sul)", landmark: "Royal Exhibition Building" }
    },
  ];


  export const isLeftPosition = (cityName: string): boolean => {
    const citiesWithLeftName = ['GUADALAJARA', 'BOGOTÁ', 'LIMA', 'PARIS', 'LONDRES', 'RABAT', 'SEUL', 'MOSCOU', 'DUBAI', 'TÓQUIO', 'PEQUIM', 'MELBOURNE', 'HONG KONG'];
    return citiesWithLeftName.includes(cityName);
  };
  
  export function pickRandomLocation(): LocationData {
    const randomIndex = Math.floor(Math.random() * locationsData.length);
    return locationsData[randomIndex];
  }
  