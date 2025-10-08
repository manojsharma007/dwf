import React from 'react';

const Header = () => (
  <header style={{ background: 'linear-gradient(90deg, #0056b3 0%, #007bff 100%)', color: '#fff', padding: '0', boxShadow: '0 2px 8px #ccc' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto', padding: '12px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://www.drivingtrainingschool.com/wp-content/themes/dfwdrivingschool/image/logo.png" alt="Driving School Logo" style={{ height: '48px', marginRight: '16px' }} />
        <span style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '2px' }}>Manoj Driving School</span>
      </div>
      <nav>
        <a href="/course" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: '500' }}>Courses</a>
        <a href="/signup" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: '500' }}>Sign Up</a>
        <a href="/login" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: '500' }}>Login</a>
      </nav>
    </div>
  </header>
);

export default Header;