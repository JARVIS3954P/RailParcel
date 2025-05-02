
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from 'react-router-dom';
import { MenuIcon, Package, Home, Search, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; // This will be replaced with authentication state

  const closeSheet = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Track Parcel", path: "/track", icon: Search },
    { name: "My Parcels", path: "/my-parcels", icon: Package },
    { name: "Profile", path: "/profile", icon: User, requiresAuth: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-railway-blue font-bold text-xl">Rail</span>
              <span className="text-railway-orange font-bold text-xl">Parcel</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => 
              (!link.requiresAuth || (link.requiresAuth && isLoggedIn)) && (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-railway-blue transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            
            {isLoggedIn ? (
              <Button variant="outline" className="ml-4">Logout</Button>
            ) : (
              <Button className="ml-4 bg-railway-blue hover:bg-railway-darkBlue text-white">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full pt-6">
                  <div className="flex items-center mb-10">
                    <span className="text-railway-blue font-bold text-xl">Rail</span>
                    <span className="text-railway-orange font-bold text-xl">Parcel</span>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => 
                      (!link.requiresAuth || (link.requiresAuth && isLoggedIn)) && (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-100"
                          onClick={closeSheet}
                        >
                          <link.icon className="mr-3 h-5 w-5 text-railway-blue" />
                          {link.name}
                        </Link>
                      )
                    )}
                  </nav>
                  <div className="mt-auto mb-8">
                    {isLoggedIn ? (
                      <Button variant="outline" className="w-full" onClick={closeSheet}>Logout</Button>
                    ) : (
                      <Button className="w-full bg-railway-blue hover:bg-railway-darkBlue" onClick={closeSheet}>
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
