import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../constants';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import Message from './Message';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={`${IMAGE_URL}/${product.image}`}
              alt={product.name}
              fluid
            />
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
