import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 5,
    title: 'Conan',
    description: 'The detective like the lovely girl'
  },
  {
    id: 'p2',
    price: 7,
    title: 'ONE PIECE',
    description: 'A team about 10 humans on the board and someone of them owns the dark fruit'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
        ))}
      </ul>
    </section>
  );
};

export default Products;
