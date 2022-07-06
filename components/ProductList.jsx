import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST RESTAURANT IN TOWN</h1>
      <p className={styles.desc}>
        Your giveaway and your ad To start, come up with a great giveaway. Do
        not bother with 25% off your next meal. This should be something really
        attractive, like a free slice of pizza every day for a month, or a date
        night for two.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
