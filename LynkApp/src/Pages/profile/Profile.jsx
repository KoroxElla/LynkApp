import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
  };
  
  return (
    <div>
      <h2>Profile</h2>
      <button
        onClick={handleSignOut}
        className="signout-btn"
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 2rem',
          background: 'linear-gradient(90deg, #2563eb 0%, #1e293b 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.75rem',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(30,41,59,0.08)',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1e293b 0%, #2563eb 100%)'}
        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #1e293b 100%)'}
      >
        Sign Out
      </button>
    </div>
  );
}
