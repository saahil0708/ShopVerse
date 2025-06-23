import axios from 'axios';

const fetchAllProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductsData = async () => {
  const products = await fetchAllProducts();
  
  const categoryCounts = {};
  products.forEach(product => {
    categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
  });
  
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    ...Object.entries(categoryCounts).map(([id, count]) => ({
      id,
      name: id.charAt(0).toUpperCase() + id.slice(1),
      count
    }))
  ];
  
  const brands = [...new Set(products.map(product => product.brand))];
  
  const priceRanges = [
    { min: 0, max: 25, label: "Under $25" },
    { min: 25, max: 50, label: "$25 - $50" },
    { min: 50, max: 100, label: "$50 - $100" },
    { min: 100, max: 200, label: "$100 - $200" },
    { min: 200, max: Number.POSITIVE_INFINITY, label: "Over $200" },
  ];
  
  return {
    products,
    categories,
    brands,
    priceRanges
  };
};
