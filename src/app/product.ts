export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
    category: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Puso',
      price: 799,
      description: 'A large phone with one of the best screens',
      image: "assets/images/images 2.jpeg",
      quantity: 1,
      category: 'Pouch'
    },
    {
      id: 2,
      name: 'Bayong',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image: "assets/images/images.jpeg",
      quantity: 1,
      category: 'Bag'
    },
    {
      id: 3,
      name: 'Pitaka',
      price: 299,
      description: 'Descript',
      image: "assets/images/pitaka.jpg",
      quantity: 1,
      category: 'Wallet'
    }
  ];