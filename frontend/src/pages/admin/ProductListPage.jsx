import { Button, Col, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from '../../slices/productsApiSlice';

function ProductListPage() {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useGetProductsQuery(productId);

  const [createProduct, { isLoading: isCreateProductLoading }] =
    useCreateProductMutation();

  const deleteHandler = (id) => {
    console.log('delete', id);
  };

  const createProductHandler = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct(productId);
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    }
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products </h1>
        </Col>
        <Col className='text-end'>
          <Button
            className='my-3 btn-sm'
            variant='primary'
            onClick={createProductHandler}
          >
            <i className='fas fa-edit'></i> Create Product
          </Button>
        </Col>
      </Row>
      {isCreateProductLoading && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table responsive striped hover className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button
                        type='button'
                        variant='light'
                        className='btn-sm mx-2'
                      >
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      type='button'
                      variant='danger'
                      className='btn-sm'
                      style={{ color: 'white' }}
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}

export default ProductListPage;
