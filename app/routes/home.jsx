import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import SideBar from '../components/SideBar'
import { Menu } from 'lucide-react';
import RepositoryList from '../components/RepositoryList';
import { FiMenu } from 'react-icons/fi';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="lg:flex bg-gray-50">
      <header className="md:hidden bg-white border-b h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="CodeAnt AI" className="h-8 w-8" />
          <span className="font-semibold">CodeAnt AI</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      <SideBar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="p-4 w-full">
        <RepositoryList />
      </main>
    </div>
  );
};

export default App;

