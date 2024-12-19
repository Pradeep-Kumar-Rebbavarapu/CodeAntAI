import { useEffect, useRef } from 'react'
import { ChevronDown, Home, Code2, Cloud, HelpCircle, Settings, PhoneCall, LogOut, X } from 'lucide-react'
import { Button } from '../components/ui/button'
import NavItem from './NavItem'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function MobileSideBar({ isOpen, onClose } ){
  const sidebarRef = useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, etc.)
    navigate('/auth')
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
        
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 right-0 bg-white transform transition-transform duration-200 ease-in-out"
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          maxHeight: '100vh',
          overflowY: 'auto'
        }}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="CodeAnt AI" className="h-8 w-8" />
              <span className="font-semibold">CodeAnt AI</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <button className="mt-4 w-full flex items-center justify-between px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100 border-2">
            <span>UtkarshDhairyaPanwar</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <nav className="p-2 space-y-1">
          <NavItem icon={Home} label="Repositories" />
          <NavItem icon={Code2} label="AI Code Review" />
          <NavItem icon={Cloud} label="Cloud Security" />
          <NavItem icon={HelpCircle} label="How to Use" />
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={PhoneCall} label="Support" />
          <NavItem icon={LogOut} onClick={handleLogout} label="Logout" />
        </nav>
      </div>
    </div>
  )
}



