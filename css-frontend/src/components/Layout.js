import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const location = useLocation();

  // Pages where we don't want to show Sidebar and Navbar
  const noLayoutPages = ['/', '/login', '/signup'];

  const isNoLayoutPage = noLayoutPages.includes(location.pathname);

  return (
    <>
      {isNoLayoutPage ? (
        // Directly render the children without Navbar and Sidebar for no-layout pages
        <div className='min-h-screen'>{children}</div>
      ) : (
        // Render Sidebar and Navbar for all other pages
        <div className='flex flex-auto h-screen'>
          <Sidebar />
          <div className='grow'>
            <Navbar />
            <div className='m-5'>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
