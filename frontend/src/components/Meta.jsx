import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Emart',
  description:
    'Embrace the future with our electronic shop, where innovation meets affordability. Shop now and upgrade your tech game!',
  keywords:
    'electronics, buy electronics, cheap electronics, tech products, electronics store,',
};

export default Meta;
