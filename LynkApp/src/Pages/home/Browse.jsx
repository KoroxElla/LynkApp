import { useState } from 'react';
import MenuModal from '../../Components/MenuModal';

const stores = [
  { id: 1, name: 'Pizza Palace', category: 'Pizza', rating: 4.5, deliveryTime: '25-35', image: '🍕', minOrder: '£15', deliveryFee: '£2.99', desc: 'Authentic Italian pizza made fresh' },
  { id: 2, name: 'Burger House', category: 'Burgers', rating: 4.3, deliveryTime: '20-30', image: '🍔', minOrder: '£10', deliveryFee: '£1.99', desc: 'Gourmet burgers and crispy fries' },
  { id: 3, name: 'Sushi Master', category: 'Sushi', rating: 4.7, deliveryTime: '30-40', image: '🍣', minOrder: '£20', deliveryFee: '£3.99', desc: 'Fresh sushi rolls and sashimi' },
  { id: 4, name: 'Taco Fiesta', category: 'Mexican', rating: 4.4, deliveryTime: '15-25', image: '🌮', minOrder: '£12', deliveryFee: '£1.49', desc: 'Authentic Mexican street food' },
  { id: 5, name: 'Pasta Corner', category: 'Italian', rating: 4.6, deliveryTime: '20-30', image: '🍝', minOrder: '£18', deliveryFee: '£2.49', desc: 'Homemade pasta and Italian classics' },
  { id: 6, name: 'Thai Express', category: 'Thai', rating: 4.5, deliveryTime: '25-35', image: '🍜', minOrder: '£15', deliveryFee: '£2.99', desc: 'Spicy Thai curries and noodles' },
  { id: 7, name: 'Sweet Treats', category: 'Desserts', rating: 4.8, deliveryTime: '30-40', image: '🍰', minOrder: '£25', deliveryFee: '£3.49', desc: 'Cakes, pastries, and sweet delights' },
  { id: 8, name: 'Quick Mart', category: 'Grocery', rating: 4.2, deliveryTime: '15-20', image: '🛒', minOrder: '£10', deliveryFee: '£0.99', desc: 'Fresh groceries delivered fast' },
];

const menus = {
  1: [
    { id: 1, name: 'Margherita Pizza', price: '£12.99', description: 'Classic tomato sauce and mozzarella and fresh basil', popular: true },
    { id: 2, name: 'Pepperoni Feast', price: '£14.99', description: 'Double pepperoni with extra mozzarella cheese', popular: true },
    { id: 3, name: 'Vegetarian Supreme', price: '£13.99', description: 'Bell peppers and mushrooms and onions and olives and tomatoes' },
    { id: 4, name: 'BBQ Chicken', price: '£15.99', description: 'Grilled chicken and BBQ sauce and red onions and cilantro' },
    { id: 5, name: 'Four Cheese', price: '£14.99', description: 'Mozzarella and parmesan and gorgonzola and ricotta' },
  ],
  2: [
    { id: 1, name: 'Classic Cheeseburger', price: '£8.99', description: 'Beef patty and cheddar cheese and lettuce and tomato and pickles', popular: true },
    { id: 2, name: 'Double Bacon Burger', price: '£11.99', description: 'Two beef patties and crispy bacon and cheese and special sauce', popular: true },
    { id: 3, name: 'Chicken Burger', price: '£9.99', description: 'Crispy chicken and lettuce and mayo and pickles' },
    { id: 4, name: 'Veggie Burger', price: '£8.49', description: 'Plant-based patty with fresh vegetables' },
    { id: 5, name: 'Loaded Fries', price: '£5.99', description: 'Crispy fries topped with cheese and bacon and sour cream' },
  ],
  3: [
    { id: 1, name: 'California Roll', price: '£9.99', description: 'Crab and avocado and cucumber with sesame seeds', popular: true },
    { id: 2, name: 'Spicy Tuna Roll', price: '£12.99', description: 'Fresh tuna with spicy mayo and cucumber', popular: true },
    { id: 3, name: 'Salmon Nigiri Set', price: '£14.99', description: '8 pieces of premium salmon nigiri' },
    { id: 4, name: 'Dragon Roll', price: '£15.99', description: 'Eel and cucumber topped with avocado and eel sauce' },
    { id: 5, name: 'Vegetable Tempura Roll', price: '£8.99', description: 'Assorted vegetables in crispy tempura' },
  ],
  4: [
    { id: 1, name: 'Beef Tacos', price: '£7.99', description: 'Seasoned beef with lettuce and cheese and salsa (3 pcs)', popular: true },
    { id: 2, name: 'Chicken Quesadilla', price: '£9.99', description: 'Grilled chicken with melted cheese in flour tortilla', popular: true },
    { id: 3, name: 'Fish Tacos', price: '£10.99', description: 'Battered fish with cabbage slaw and chipotle mayo (3 pcs)' },
    { id: 4, name: 'Veggie Burrito', price: '£8.99', description: 'Rice and beans and cheese and vegetables and guacamole' },
    { id: 5, name: 'Nachos Supreme', price: '£7.49', description: 'Tortilla chips with cheese and jalapeños and sour cream' },
  ],
  5: [
    { id: 1, name: 'Spaghetti Carbonara', price: '£11.99', description: 'Creamy sauce with bacon and parmesan', popular: true },
    { id: 2, name: 'Fettuccine Alfredo', price: '£10.99', description: 'Rich cream sauce with garlic and parmesan', popular: true },
    { id: 3, name: 'Penne Arrabbiata', price: '£9.99', description: 'Spicy tomato sauce with garlic and chili' },
    { id: 4, name: 'Lasagna Bolognese', price: '£13.99', description: 'Layers of pasta with meat sauce and béchamel' },
    { id: 5, name: 'Ravioli Ricotta', price: '£12.99', description: 'Cheese-filled pasta with tomato basil sauce' },
  ],
  6: [
    { id: 1, name: 'Pad Thai', price: '£10.99', description: 'Stir-fried rice noodles with shrimp and peanuts and egg', popular: true },
    { id: 2, name: 'Green Curry', price: '£11.99', description: 'Spicy coconut curry with vegetables and chicken', popular: true },
    { id: 3, name: 'Tom Yum Soup', price: '£8.99', description: 'Spicy and sour soup with shrimp and mushrooms' },
    { id: 4, name: 'Thai Basil Chicken', price: '£10.99', description: 'Stir-fried chicken with basil and chili' },
    { id: 5, name: 'Mango Sticky Rice', price: '£5.99', description: 'Sweet coconut rice with fresh mango' },
  ],
  7: [
    { id: 1, name: 'Chocolate Fudge Cake', price: '£6.99', description: 'Rich chocolate cake with fudge frosting', popular: true },
    { id: 2, name: 'Strawberry Cheesecake', price: '£7.99', description: 'Creamy cheesecake with fresh strawberries', popular: true },
    { id: 3, name: 'Tiramisu', price: '£6.49', description: 'Italian coffee-flavored dessert with mascarpone' },
    { id: 4, name: 'Apple Pie', price: '£5.99', description: 'Classic apple pie with vanilla ice cream' },
    { id: 5, name: 'Macarons Box', price: '£12.99', description: 'Assorted flavors of French macarons (12 pcs)' },
  ],
  8: [
    { id: 1, name: 'Fresh Bread', price: '£2.49', description: 'Daily baked artisan bread loaf', popular: true },
    { id: 2, name: 'Organic Eggs', price: '£3.99', description: 'Free-range organic eggs (12 pack)' },
    { id: 3, name: 'Fresh Milk', price: '£2.99', description: 'Whole milk 2L fresh from local farms' },
    { id: 4, name: 'Seasonal Fruits', price: '£4.99', description: 'Mixed seasonal fruit basket' },
    { id: 5, name: 'Pasta Pack', price: '£3.49', description: 'Assorted pasta varieties (500g)' },
  ],
};

export default function Browse() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Rating');
  const [store, setStore] = useState(null);
  
  const filters = ['All', 'Pizza', 'Burgers', 'Sushi', 'Mexican', 'Desserts', 'Grocery'];

  let results = stores.filter(s => 
    (s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'All' || s.category === filter)
  );
  
  if (sort === 'Rating') {
    results = [...results].sort((a, b) => b.rating - a.rating);
  } else if (sort === 'Fastest') {
    results = [...results].sort((a, b) => {
      return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0]);
    });
  } else if (sort === 'Lowest fee') {
    results = [...results].sort((a, b) => {
      return parseFloat(a.deliveryFee.replace('$', '')) - parseFloat(b.deliveryFee.replace('$', ''));
    });
  }

  return (
    <>
      <div className="page-title-section">
        <h1 className="page-title">Browse</h1>
      </div>

      <div className="search-section">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-row">
          <div className="filter-chips">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-chip ${filter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort by:</label>
            <select 
              id="sort"
              value={sort} 
              onChange={(e) => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="Rating">Rating</option>
              <option value="Fastest">Fastest</option>
              <option value="Lowest fee">Lowest fee</option>
            </select>
          </div>
        </div>
      </div>

      <div className="store-grid">
        {results.map(s => (
          <div key={s.id} className="store-card">
            <div className="store-icon-container">
              <span className="store-icon">{s.image}</span>
            </div>

            <div className="store-content">
              <h3 className="store-name">{s.name}</h3>
              <p className="store-category">{s.category}</p>
              <p className="store-desc">{s.desc}</p>
            </div>

            <div className="store-info-pills">
              <span className="info-pill">{s.rating}</span>
              <span className="info-pill">🕒 {s.deliveryTime} min</span>
              <span className="info-pill">{s.deliveryFee} fee</span>
            </div>

            <button 
              className="place-order-btn"
              onClick={() => setStore(s)}
            >
              View Menu
            </button>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div className="no-results">
          <p className="empty-text">nothing found</p>
        </div>
      )}

      {store && (
        <MenuModal 
          store={store}
          menuItems={menus[store.id] || []}
          onClose={() => setStore(null)}
        />
      )}
    </>
  );
}
