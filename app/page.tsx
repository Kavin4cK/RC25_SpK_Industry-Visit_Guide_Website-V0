import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Star,
  Factory,
  Wrench,
  Cog,
  Zap
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 gradient-animate">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-red-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/10 via-blue-500/10 to-purple-600/10 animate-pulse delay-1000"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full floating-animation-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/8 rounded-full floating-animation"></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-white/6 rounded-full floating-animation-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Factory Icon */}
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <Factory className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
              <span className="block">Integral Coach Factory</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                iV 2024
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              Embark on an extraordinary three-day journey into the heart of railway manufacturing excellence. 
              Discover cutting-edge technology, witness precision engineering, and experience the future of 
              transportation innovation at India's premier coach manufacturing facility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in">
              <button className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore 3-Day Journey
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary bg-white/20 hover:bg-white/30 text-white text-lg px-8 py-4 backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Day Journey Overview */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Your Three-Day Journey
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Experience the complete manufacturing process from raw materials to finished railway coaches. 
              Each day offers unique insights into different aspects of railway technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day 1 Card */}
            <div className="group relative">
              <div className="card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-l-4 border-l-blue-500">
                <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Day 1
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300 shadow-lg">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Manufacturing Foundations
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Raw material processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Welding and fabrication</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Quality control systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Safety protocols</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>Duration:</strong> 8:00 AM - 5:00 PM<br/>
                    <strong>Focus:</strong> Core manufacturing processes
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 Card */}
            <div className="group relative">
              <div className="card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-l-4 border-l-purple-500">
                <div className="absolute top-4 right-4 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Day 2
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300 shadow-lg">
                  <Cog className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Assembly & Integration
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Coach assembly line</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Electrical systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Interior fittings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Testing procedures</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>Duration:</strong> 8:00 AM - 5:00 PM<br/>
                    <strong>Focus:</strong> Assembly and integration
                  </p>
                </div>
              </div>
            </div>

            {/* Day 3 Card */}
            <div className="group relative">
              <div className="card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-l-4 border-l-orange-500">
                <div className="absolute top-4 right-4 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Day 3
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Innovation & Future
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">R&D laboratories</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Smart technologies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Sustainability initiatives</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Future projects</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>Duration:</strong> 8:00 AM - 4:00 PM<br/>
                    <strong>Focus:</strong> Innovation and research
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mt-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-secondary-300 dark:border-secondary-600"></div>
              </div>
              <div className="relative flex justify-between">
                <div className="bg-white dark:bg-secondary-900 px-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Start</p>
                </div>
                <div className="bg-white dark:bg-secondary-900 px-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto"></div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Mid</p>
                </div>
                <div className="bg-white dark:bg-secondary-900 px-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto"></div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">End</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Essential Resources
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Everything you need for a successful Integral Coach Factory visit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-green-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Pre-Visit Checklist
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Essential items and preparations before your Integral Coach Factory visit. Safety gear, documents, and requirements.
              </p>
              <button className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                View Checklist →
              </button>
            </div>

            <div className="card group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-yellow-500">
              <div className="flex items-center mb-4">
                <Factory className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Factory Overview
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Learn about Integral Coach Factory's history, capabilities, and manufacturing excellence in railway technology.
              </p>
              <button className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                Explore Factory →
              </button>
            </div>

            <div className="card group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Transportation
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Arrival and departure information with detailed transportation guides to the Integral Coach Factory facility.
              </p>
              <button className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                View Transport →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-animate-slow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Integral Coach Factory Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us for an unforgettable three-day experience exploring India's premier railway manufacturing facility. 
            Discover innovation, witness precision engineering, and be part of the future of transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              View 3-Day Schedule
            </button>
            <button className="btn-secondary bg-white/20 hover:bg-white/30 text-white text-lg px-8 py-4 backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Download Complete Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
