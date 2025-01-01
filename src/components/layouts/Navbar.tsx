import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router";
import { ModeToggle } from "../actions/mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            TodoApp
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Home
          </Link>
          <Link to="/todo" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Todos
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          {/* <Button variant="outline" size="icon">
            <span className="sr-only">Toggle Theme</span>
            🌙
          </Button> */}
          <ModeToggle/>

          {/* Profile Avatar */}
          <Avatar>
            <AvatarImage src="/path-to-profile-image.jpg" alt="Profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
