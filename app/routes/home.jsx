import React, { useState } from 'react';
import SideBar from '../components/SideBar'
import RepositoryList from '../components/RepositoryList';
import { FiMenu } from 'react-icons/fi';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex  bg-gray-50 w-full">
      
        <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
       
        <main className="p-4 w-full">
          <RepositoryList />
        </main>
    </div>
  );
};

export default App;

