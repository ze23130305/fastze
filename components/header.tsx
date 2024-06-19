export default function Header() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                <svg className="h-8 w-8 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17.93V19h-2v.93C7.953 19.435 5.435 16.953 4.07 14H5v-2H4.07C4.565 7.953 7.047 5.435 10 4.07V5h2V4.07c2.953 1.365 5.435 3.847 6.93 6.93H19v2h-1.93c-1.495 3.083-3.977 5.565-6.93 6.93z" />
                </svg>
                <span className="font-bold">My Website</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Services</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>

          {/* <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">Login</a>
              <a href="#" className="py-2 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-100">Sign Up</a>
            </div> */}

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      </div>
    </nav>
  )
}