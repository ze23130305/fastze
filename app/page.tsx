import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Welcome to</h2>
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">ZE Website</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            <div className="mt-8 flex justify-center">
              <a href="#" className="py-3 px-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400">Get Started</a>
              <a href="#" className="ml-4 py-3 px-8 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100">Learn More</a>
            </div>
          </div>
        </div>
      </div><div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to start your project</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 0118 0 9 9 0 01-18 0zm9-9v4m0 4v4m0 4v4m-4-4h8" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">All-in-One Solution</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">High Performance</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 16v-2m8-6h-2M4 12H2m12-8l-2 2m8 8l-2-2m-8 8l-2-2M4 4l2 2" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Setup</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div><footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Jobs</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Press</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Accessibility</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Partners</a>
          </nav>
          <p className="mt-8 text-center text-gray-400">&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer></>
  );
}
