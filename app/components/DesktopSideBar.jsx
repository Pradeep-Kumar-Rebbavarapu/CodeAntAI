import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Home, Code2, Cloud, HelpCircle, Settings, PhoneCall, LogOut } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function DesktopSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const mainLinks = [
    { icon: Home, label: "Repositories", to: "/" },
    { icon: Code2, label: "AI Code Review", to: "/code-review" },
    { icon: Cloud, label: "Cloud Security", to: "/security" },
    { icon: HelpCircle, label: "How to Use", to: "/help" },
    { icon: Settings, label: "Settings", to: "/settings" },
  ]

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, etc.)
    navigate('/auth')
  }

  return (
    <div className="w-64 border-r bg-white h-screen flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/logo.png" alt="CodeAnt AI" className="h-8 w-8" />
          <span className="font-semibold">CodeAnt AI</span>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-between text-sm font-normal"
        >
          <span className="truncate">UtkarshDhairyaPa...</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        {mainLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md mb-1 ${
              location.pathname === link.to
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <link.icon className="h-4 w-4" />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-2 border-t">
        <Link
          to="/support"
          className="flex items-center gap-3 px-3 py-2 text-sm rounded-md mb-1 text-gray-700 hover:bg-gray-100"
        >
          <PhoneCall className="h-4 w-4" />
          <span>Support</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
