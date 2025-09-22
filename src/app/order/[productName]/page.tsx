import orders from '@/data/orders.json';
import Image from 'next/image';

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

export async function generateStaticParams() {
  const paths = orders.flatMap((category: Category) =>
    category.items.map((product) => ({
      productName: encodeURIComponent(product.name),
    }))
  );

  return paths.map(({ productName }) => ({
    productName,
  }));
}

async function getProduct(productName: string) {
  let product: Product | null = null;

  for (const category of orders) {
    const foundProduct = category.items.find((item) => item.name === decodeURIComponent(productName));
    if (foundProduct) {
      product = foundProduct;
      break;
    }
  }

  return product;
}

export default async function ProductPage({ params }: { params: { productName: string } }) {
  const { productName } = params;

  const product = await getProduct(productName);

  if (!product) return <div>Servicio no encontrado</div>;

  return (
    <>
      <main>
        <section className="h-[75vh] w-full flex justify-center items-center">
          <h1 className="text-6xl text-center max-w-[750px] mx-auto">
            <b>{product.name}</b>
          </h1>
        </section>
        <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
          <div className="w-full">
            <Image 
              src={product.image} 
              alt={product.name} 
              className="mx-auto rounded-[25px]" 
              width={500}
              height={500}
            />
          </div>
          <div className="w-full text-center lg:text-start">
            <h2 className="text-5xl">
              <b>{product.name}</b>
            </h2>
            <span className="text-blue leading-10">$ {product.price} USD</span>
            <hr className="border-light-gray shadow-xl shadow-light-gray" />
            <p className="my-5">
              <b>DESCRIPTION</b>
            </p>
            <p className="text-[#333333] my-5">{product.description}</p>
            <hr className="border-light-gray shadow-xl shadow-light-gray" />
          </div>
        </section>
      </main>
    </>
  );
}
