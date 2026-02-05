import { useState } from 'react';
import homebot from '../../assets/logo.png';
import Cart from '../cart/Cart';
import OrderHistory from '../orders/OrderHistory';
import OrderTracking from '../orders/OrderTracking';
import Profile from '../profile/Profile';
import Browse from './Browse';
import Map from '../map/Map';
import './Home.css';

export default function Home({ onLogout }) {
  const [tab, setTab] = useState('browse');
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleDark = () => {
    setDark(!dark);
    localStorage.setItem('darkMode', !dark);
    document.documentElement.setAttribute('data-theme', !dark ? 'dark' : 'light');
  };

  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

  const navItems = [
    { id: 'browse', label: 'Browse', icon: '🏪' },
    { id: 'track', label: 'Track Order', icon: '📍' },
    { id: 'history', label: 'Order History', icon: '📋' },
    { id: 'cart', label: 'Cart', icon: '🛒' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'map', label: 'Map', icon: '🗺️' },
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo-section">
            <img src={homebot} alt="Logo" className="logo-img" />
            <span className="logo-text">LynkApp</span>
          </div>

          <div className="nav-items">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`nav-btn ${tab === item.id ? 'active' : ''}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={toggleDark}
              className="nav-btn dark-mode-btn"
            >
              <span>{dark ? '☀️' : '🌙'}</span>
            </button>
            {onLogout && (
              <button
                onClick={onLogout}
                className="nav-btn logout-btn"
                title="Logout"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="main-content">
        {tab === 'browse' && <Browse />}
        {tab === 'cart' && <Cart />}
        {tab === 'track' && <OrderTracking />}
        {tab === 'history' && <OrderHistory />}
        {tab === 'profile' && <Profile />}
        {tab === 'map' && <Map />}
      </div>
    </div>
  );
}
