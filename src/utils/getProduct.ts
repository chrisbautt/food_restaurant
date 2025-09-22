import orders from '@/data/orders.json';

interface Product {
  image: string;
  name: string;
  price: number;
  content: string;
  description: string;
}

interface Category {
  category: string;
  items: Product[];
}

export async function getProduct(productName: string) {
  let product: Product | null = null;

  const decodedName = decodeURIComponent(productName);

  for (const category of orders as Category[]) {
    const foundProduct = category.items.find((item) => item.name === decodedName);
    if (foundProduct) {
      product = foundProduct;
      break;
    }
  }

  return product;
}
