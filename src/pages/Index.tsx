import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900">hostex</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-700">Features</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-700">Solutions</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-700">Resources</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <span className="text-gray-700 cursor-pointer">Price</span>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-700">About Us</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Globe className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">Login</span>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Put your <br />
                vacation rental <br />
                on autopilot <br />
                with{" "}
                <span className="relative inline-block">
                  Smart AI
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 16" fill="none">
                    <path d="M5 12C30 8, 70 4, 100 6C130 8, 170 12, 195 10" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md">
                Give you pro-level tools, instant sync, and no-bloat pricing — so you stay ahead, not over budget.
              </p>
            </div>

            <div className="space-y-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
                15-Day Free Trial
              </Button>
              <p className="text-sm text-gray-500">no card needed, no extra fees</p>
            </div>
          </div>

          {/* Right Content - Chat Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Thomas Jordi</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                    <p className="text-sm text-gray-800">
                      Hi, where exactly is the parking spot for the unit?
                    </p>
                    <p className="text-xs text-gray-500 mt-2">09:31 AM</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="flex items-end space-x-2">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                      <p className="text-sm">
                        Hi, there's one reserved spot for you in front of the building, marked "Unit 3."
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-6 flex items-center space-x-3">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </div>
                <button className="text-blue-600 font-medium">Send</button>
              </div>

              {/* HostGPT Badge */}
              <div className="absolute -bottom-3 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                hostGPT
              </div>
            </div>

            {/* Background person image placeholder */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-64 h-96 bg-gradient-to-b from-gray-300 to-gray-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Partner Logos */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center space-x-12 grayscale opacity-60">
          <img src="https://logos-world.net/wp-content/uploads/2020/12/Airbnb-Logo.png" alt="Airbnb" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" alt="Booking.com" className="h-8" />
          <img src="https://logos-world.net/wp-content/uploads/2021/02/VRBO-Logo.png" alt="VRBO" className="h-8" />
          <img src="https://logos-world.net/wp-content/uploads/2020/07/Expedia-Logo.png" alt="Expedia" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="Google" className="h-8" />
          <span className="text-gray-400 font-semibold">VR</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-400 font-semibold ml-2">agoda</span>
          </div>
          <span className="text-blue-600 font-bold text-lg">Trip.com</span>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">h</span>
            </div>
            <span className="text-gray-400 font-semibold">houfy</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;