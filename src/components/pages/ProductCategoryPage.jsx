
import { Link, useParams } from 'react-router-dom';
import { routerPath as withBasePath } from '../../utils/basePath.js';
import './ProductCategoryPage.css';

const categoryData = {
  turmeric: {
    title: 'Turmeric',
    products: [
      'Turmeric Powder – Deluxe',
      'Turmeric Powder – Special'
    ]
  },

  chilli: {
    title: 'Chilli',
    products: [
      'Red Chilli Powder – Deluxe',
      'Red Chilli Powder – Special',
      'Extra Hot Red Chilli Powder',
      'Red Chilli Flakes',
      'Kashmiri Chilli Powder',
      'Kulambu Chilli Powder'
    ]
  },

  'pure-spices': {
    title: 'Pure Spices',
    products: [
      'Coriander Powder',
      'Cumin Powder',
      'Black Pepper Powder',
      'Black Pepper Powder – Compounded',
      'White Pepper Powder – Compounded',
      'White Pepper Powder',
      'Dry Garlic Powder',
      'Dry Ginger Powder',
      'Red Onion Powder',
      'Asafoetida Powder – Compounded',
      'Dry Mustard Powder',
      'Dry Mango Powder'
    ]
  },

  'blended-spices': {
    title: 'Blended Spices',
    products: [
      'Sambar Powder',
      'Rasam Powder',
      'Curry Powder',
      'Garam Masala',
      'Garam Masala – Classic',
      'Garam Masala – No onion No Garlic',
      'Chicken Masala',
      'Chicken Masala – Classic',
      'Chettinad Chicken Masala',
      'Kadai Chicken Masala',
      'Mutton Masala',
      'Meat Masala',
      'Kitchen King Masala',
      'Kitchen King Masala – Classic',
      'Tandoori Masala Tikka/Kebab/Chicken',
      'Paneer Butter Masala',
      'Pepper Masala (Veg & Non-veg)',
      'Egg Curry Masala',
      'Chettinad Biryani Masala',
      'Biryani Masala',
      'Hyderabadi Biryani Masala',
      'Thalassery Biryani Masala',
      'Chaat Masala',
      'Channa Masala',
      'Chicken 65 Masala',
      'Instant Chilli 65 Masala',
      'Fish Fry Masala',
      'Fish Curry Masala',
      'Magic Masala',
      'Crispy Fry Mix – Classic',
      'Crispy Fry Mix – Hot & Spicy'
    ]
  },

  seasonings: {
    title: 'Seasonings',
    products: [
      // International Herbs & Seasonings
      'Aromat Seasoning',
      'Peri Peri Masala – Hot',
      'Peri Peri Masala – Mild',
      'Noodles Masala',
      'Pasta Seasoning – Curry Flavour',
      'Mexican Popcorn Cheese Seasoning',
      'Mixed Herbs – Seasoning',
      'Pizza & Garlic Bread Seasoning',
      'Italian Seasoning',
      'Taco Seasoning',
      'Oregano',
      'Basil',
      'Parsley',
      'Thyme',

      // Snack Seasoning
      'Cream & Onion Seasoning',
      'Peri Peri Seasoning',
      'Chilli Masala Seasoning',
      'Chilli Garlic Seasoning',
      'Classic Cheese Seasoning'
    ]
  },

  'marination-mixes': {
    title: 'Marination Mixes',
    products: [
      'Extra Hot & Spicy Marinade',
      'Peri Peri Marinade',
      'Tandoori Marinade',
      'Spicy Grill Marinade',
      'BBQ – Marinade',
      'Kebab Marinade',
      'Breading Mixes'
    ]
  },

  'culinary-paste': {
    title: 'Culinary Paste',
    products: [
      'Ginger Garlic Paste',
      'Garlic Paste',
      'Ginger Paste'
    ]
  },

  'chutney-powder': {
    title: 'Chutney Powder',
    products: [
      'Idly Chilli Powder',
      'Dhall Rice Powder (Paruppu Podi)',
      'Andhra Dhall Chutney Powder (Hot)',
      'Andhra Dhall Chutney Powder (Mild)'
    ]
  }
};

function ProductCategoryPage() {
  const { category } = useParams();
  const data = categoryData[category];

  if (!data) {
    return (
      <main className="product-category-page">
        <h1>Category not found</h1>
        <Link to={withBasePath('/our-products/')}>Browse all products</Link>
      </main>
    );
  }

  return (
    <main className="product-category-page">
      <div className="product-category-breadcrumb">
        <Link to={withBasePath('/')}>Home</Link>
        <span>/</span>
        <Link to={withBasePath('/our-products/')}>Our Products</Link>
        <span>/</span>
        <span>{data.title}</span>
      </div>

      <header className="product-category-header">
        <p>OUR PRODUCT RANGE</p>
        <h1>{data.title}</h1>
        <span>
          Explore our {data.title.toLowerCase()} range.
        </span>
      </header>

      <section
        className="product-category-grid"
        aria-label={data.title}
      >
        {data.products.map((name, index) => (
          <article
            className="product-category-card"
            key={name}
          >
            <span className="product-category-card__number">
              PRODUCT {String(index + 1).padStart(2, '0')}
            </span>

            <h2>{name}</h2>

            <Link
              to={withBasePath('/contact-us/')}
              className="product-category-card__link"
            >
              Enquire about this product
            </Link>
          </article>
        ))}
      </section>

      <p className="product-category-note">
        Contact us for product availability, specifications and
        bulk-order enquiries.
      </p>

      <div className="product-category-back">
        <Link to={withBasePath('/our-products/')}>
          ? Back to all products
        </Link>
      </div>
    </main>
  );
}

export default ProductCategoryPage;

