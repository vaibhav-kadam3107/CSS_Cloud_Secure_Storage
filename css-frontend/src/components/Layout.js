import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const location = useLocation();

  const noLayoutPages = ['/', '/login', '/signup'];
  const isNoLayoutPage = noLayoutPages.includes(location.pathname);
  const isFileUploadPage = location.pathname === '/FileUpload';

  return (
    <>
      {isNoLayoutPage ? (
        <div className="h-screen">{children}</div>
      ) : (
        <div className="flex h-screen overflow-hidden">
          <Sidebar /> {/* Sidebar stays fixed */}
          <div className="flex flex-col flex-grow">
            <Navbar />
            <div
              className={`flex-grow ${
                isFileUploadPage ? 'overflow-auto' : ''
              } p-5`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
