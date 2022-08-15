import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f1f1f1] h-screen">
      <div className="w-[600px] p-4 mx-auto flex flex-col gap-6 items-center">
        <h1 className="text-2xl font-bold">Simple Dashboard</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
