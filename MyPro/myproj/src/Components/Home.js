// Home.jsx

import React, { useState } from 'react';
import Carousel from './MyCarousel';
import Footer from './Footer';
import AdminDashboard from './AdminDashboard';

function Home() {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardVisible(prevState => !prevState);
  };

  return (
    <>
      {isDashboardVisible ? (
        <div>
          <AdminDashboard />
        </div>
      ) : (
        <div>
          <div>
            <Carousel />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
