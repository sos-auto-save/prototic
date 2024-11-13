import { Outlet } from 'react-router-dom';
import './layout.css'; 

import { useState } from 'react';
import { ResponsiveToggle } from '../components/Responsive';
import { Footer } from '../components/Footer';

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <div className={`device-frame ${isMobile ? 'mobile' : 'desktop'}`}>
      <ResponsiveToggle onToggle={setIsMobile} />
      {isMobile && <div className="camera"></div>} 
      <main className="device-content">
        <Outlet />
      </main>
    </div>
  );
};
