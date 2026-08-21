export interface Product {
  id: string;
  name: string;
  category: 'bolos' | 'tortas' | 'salgados' | 'especiais';
  size?: '20cm' | '30cm' | 'Único';
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
 
  {
    id: 'nega-maluca-20',
    name: 'Nega Maluca (20cm)',
    category: 'bolos',
    size: '20cm',
    description: 'Massa de pão de ló de chocolate molhadinha, recheada com um creme de chocolate a base de creme de leite e pedaços generosos de chocolate ao leite e finalizado com raspa de chocolate ao leite!',
    price: 225.00,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80',
    badge: 'Favorito'
  },
  {
    id: 'nega-maluca-30',
    name: 'Nega Maluca (30cm)',
    category: 'bolos',
    size: '30cm',
    description: 'Massa de pão de ló de chocolate molhadinha, recheada com um creme a base de creme de leite e chocolate e pedaços generosos de chocolate ao leite!',
    price: 320.00,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'torta-morango-20',
    name: 'Torta de Morango (20cm)',
    category: 'tortas',
    size: '20cm',
    description: 'Massa de Pão de Ló de baunilha bem molhadinha, recheado com a combinação de dois cremes incríveis e muitos pedaços de morango!',
    price: 235.00,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80',
    badge: 'Queridinha'
  },
  {
    id: 'torta-morango-30',
    name: 'Torta de Morango (30cm)',
    category: 'tortas',
    size: '30cm',
    description: 'Massa de Pão de Ló bem molhadinha, um incrível recheio de creme de leite e muitos morangos!',
    price: 335.00,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'torta-paraense-20',
    name: 'Torta Paraense (20cm)',
    category: 'tortas',
    size: '20cm',
    description: 'Massa de pão de ló bem molhadinha, doce de leite, geleia de cupuaçu e praliné de castanhas!',
    price: 225.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    badge: 'Especial da Casa'
  },
  {
    id: 'torta-paraense-30',
    name: 'Torta Paraense (30cm)',
    category: 'tortas',
    size: '30cm',
    description: 'Massa de pão de ló bem molhadinha, doce de leite, geleia de cupuaçu e praliné de castanhas!',
    price: 320.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'surpresa-abacaxi-20',
    name: 'Surpresa de Abacaxi (20cm)',
    category: 'bolos',
    size: '20cm',
    description: 'Massa de pão de ló molhadinha, recheio de babá de moça com chocolate branco, pedaços de abacaxi e coco queimado!',
    price: 205.00,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'surpresa-abacaxi-30',
    name: 'Surpresa de Abacaxi (30cm)',
    category: 'bolos',
    size: '30cm',
    description: 'Massa de pão de ló molhadinha, recheio de babá de moça com chocolate branco, pedaços de abacaxi e coco queimado!',
    price: 310.00,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'torta-salgada',
    name: 'Torta Salgada (Inteira)',
    category: 'salgados',
    size: 'Único',
    description: 'Torta feita com pão caseiro de batata e recheio de frango!',
    price: 160.00,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'empadao-frango',
    name: 'Empadão de Frango (Inteiro)',
    category: 'salgados',
    size: 'Único',
    description: 'Nosso saboroso empadão com uma deliciosa massa de empada, recheada com creme de frango e catupiry. Irresistível!',
    price: 180.00,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80',
    badge: 'Artesanal'
  },
  {
    id: 'cocada-brulee-20',
    name: 'Bolo Cocada Brûlée (20cm)',
    category: 'bolos',
    size: '20cm',
    description: 'O bolo cocada brulê tem massa fofinha de pão-de-ló, recheio cremoso de cocada e doce de leite, finalizado com brigadeiro brûlée e a irresistível casquinha de açúcar caramelizada.',
    price: 210.00,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80',
    badge: 'Novidade'
  },
  {
    id: 'cocada-brulee-30',
    name: 'Bolo Cocada Brûlée (30cm)',
    category: 'bolos',
    size: '30cm',
    description: 'O bolo cocada brulê tem massa fofinha de pão-de-ló, recheio cremoso de cocada e doce de leite, finalizado com brigadeiro brûlée e a irresistível casquinha de açúcar caramelizada.',
    price: 315.00,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80'
  }
];

export interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}



