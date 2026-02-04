import { useEffect } from 'react';
import './MenuModal.css';

export default function MenuModal({ store, menuItems, onClose }) {
  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="modal-store-icon">{store.image}</span>
            <div>
              <h2 className="modal-store-name">{store.name}</h2>
              <p className="modal-store-category">{store.category}</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-store-details">
          <div className="modal-detail-item">
            <span className="modal-detail-icon">⭐</span>
            <span>{store.rating}</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-icon">🕒</span>
            <span>{store.deliveryTime} min</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-icon">🚚</span>
            <span>{store.deliveryFee} fee</span>
          </div>
          <div className="modal-detail-item">
            <span className="modal-detail-icon">📦</span>
            <span>Min {store.minOrder}</span>
          </div>
        </div>

        <div className="modal-body">
          <h3 className="menu-section-title">Menu</h3>
          <div className="menu-items-grid">
            {menuItems.map(item => (
              <div key={item.id} className="menu-item-card">
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h4 className="menu-item-name">{item.name}</h4>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                  {item.popular && (
                    <span className="popular-badge">🔥 Popular</span>
                  )}
                </div>
                <div className="menu-item-actions">
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
