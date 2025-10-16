'use client'

import { useState } from 'react'
import { 
  MapPin, 
  Clock, 
  Users, 
  Phone, 
  Globe, 
  Camera, 
  Shield, 
  Award,
  Train,
  Bus,
  Navigation,
  Map,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Building,
  Factory,
  Car,
  Footprints,
  Route,
  Calendar,
  Star,
  Eye,
  Brain,
  Users2
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

interface FacilityCard {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  features: Array<{
    icon: any
    title: string
    description: string
  }>
  imagePlaceholder: string
  color: string
  bgColor: string
}

interface TransportOption {
  id: string
  type: 'metro' | 'bus' | 'walking' | 'taxi'
  title: string
  description: string
  duration: string
  distance?: string
  cost?: string
  icon: any
  color: string
  details: string[]
}

const facilityData: FacilityCard[] = [
  {
    id: 'icf',
    title: 'Integral Coach Factory',
    subtitle: 'India\'s Premier Rail Coach Manufacturing Unit',
    description: 'Established in 1955, ICF is one of the world\'s largest rail coach manufacturing facilities, producing over 2,500 coaches annually. The factory spans 511 acres and employs over 8,000 skilled workers.',
    highlights: [
      'World\'s largest rail coach manufacturer',
      'Over 2,500 coaches produced annually',
      '511 acres of manufacturing facility',
      '8,000+ skilled workforce',
      'ISO 9001:2015 certified'
    ],
    features: [
      {
        icon: Factory,
        title: 'Production Lines',
        description: 'State-of-the-art manufacturing with automated assembly lines and precision engineering'
      },
      {
        icon: Shield,
        title: 'Quality Control',
        description: 'Rigorous testing and quality assurance processes ensuring world-class standards'
      },
      {
        icon: Brain,
        title: 'R&D Center',
        description: 'Advanced research and development facility for next-generation rail technology'
      },
      {
        icon: Award,
        title: 'Certifications',
        description: 'ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certified operations'
      }
    ],
    imagePlaceholder: '/api/placeholder/600/400',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    id: 'rail-museum',
    title: 'Rail Museum Chennai',
    subtitle: 'Heritage of Indian Railways',
    description: 'The Rail Museum showcases the rich heritage of Indian Railways with vintage locomotives, royal carriages, and interactive exhibits. It\'s a perfect blend of history and technology.',
    highlights: [
      'Vintage steam locomotives',
      'Royal carriages and coaches',
      'Interactive railway exhibits',
      'Heritage railway artifacts',
      'Educational programs'
    ],
    features: [
      {
        icon: Building,
        title: 'Heritage Collection',
        description: 'Rare collection of vintage locomotives and royal carriages from different eras'
      },
      {
        icon: Eye,
        title: 'Interactive Exhibits',
        description: 'Hands-on displays and multimedia presentations about railway technology'
      },
      {
        icon: Camera,
        title: 'Photo Opportunities',
        description: 'Perfect spots for photography with historic trains and railway memorabilia'
      },
      {
        icon: Users,
        title: 'Educational Tours',
        description: 'Guided tours explaining the evolution of Indian Railways over the decades'
      }
    ],
    imagePlaceholder: '/api/placeholder/600/400',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  }
]

const ksrTransportOptions: TransportOption[] = [
  {
    id: 'metro-ksr',
    type: 'metro',
    title: 'Namma Metro',
    description: 'Take Purple Line to KSR Bengaluru City Metro Station',
    duration: '15-20 minutes',
    distance: '2.5 km',
    cost: '₹25-35',
    icon: Train,
    color: 'text-purple-600',
    details: [
      'Board at any Purple Line station',
      'Get down at KSR Bengaluru City Metro Station',
      'Exit towards Platform 1 (Main Station)',
      'Walk 200m to reach KSR main entrance'
    ]
  },
  {
    id: 'bus-ksr',
    type: 'bus',
    title: 'BMTC Bus',
    description: 'Multiple bus routes connect to KSR Bengaluru City',
    duration: '20-30 minutes',
    distance: '3-5 km',
    cost: '₹15-25',
    icon: Bus,
    color: 'text-red-600',
    details: [
      'Routes: 201, 202, 203, 204, 205',
      'Frequency: Every 5-10 minutes',
      'Get down at KSR Bengaluru City Bus Stop',
      'Walk 100m to station entrance'
    ]
  },
  {
    id: 'walking-ksr',
    type: 'walking',
    title: 'Walking Directions',
    description: 'From nearby landmarks to KSR Bengaluru City',
    duration: '10-15 minutes',
    distance: '1-2 km',
    cost: 'Free',
    icon: Footprints,
    color: 'text-green-600',
    details: [
      'From Majestic Bus Stand: 800m walk',
      'From City Railway Station Metro: 200m walk',
      'From Kempegowda Bus Station: 1.2km walk',
      'Follow signboards to Platform 1'
    ]
  }
]

const mgrCentralTransportOptions: TransportOption[] = [
  {
    id: 'metro-mgr',
    type: 'metro',
    title: 'Chennai Metro',
    description: 'Take Blue Line to Chennai Central Metro Station',
    duration: '15-20 minutes',
    distance: '3 km',
    cost: '₹25-35',
    icon: Train,
    color: 'text-purple-600',
    details: [
      'Board at any Blue Line station',
      'Get down at Chennai Central Metro Station',
      'Exit towards Platform 1 (Main Station)',
      'Walk 100m to reach MGR Central main entrance'
    ]
  },
  {
    id: 'bus-mgr',
    type: 'bus',
    title: 'MTC Bus',
    description: 'Direct bus routes to MGR Central Chennai',
    duration: '20-30 minutes',
    distance: '4-6 km',
    cost: '₹15-25',
    icon: Bus,
    color: 'text-red-600',
    details: [
      'Routes: 1A, 1B, 1C, 1D, 1E',
      'Frequency: Every 5-10 minutes',
      'Get down at Chennai Central Bus Stop',
      'Walk 50m to station entrance'
    ]
  },
  {
    id: 'walking-mgr',
    type: 'walking',
    title: 'Walking Directions',
    description: 'From nearby areas to MGR Central Chennai',
    duration: '10-15 minutes',
    distance: '1-2 km',
    cost: 'Free',
    icon: Footprints,
    color: 'text-green-600',
    details: [
      'From Park Town: 1.2km walk',
      'From Chennai Central Metro: 100m walk',
      'From Egmore: 1.5km walk',
      'Follow signboards to Platform 1'
    ]
  }
]

export default function ArrivalDeparturePage() {
  const [activeFacility, setActiveFacility] = useState('icf')
  const [activeStation, setActiveStation] = useState('ksr')

  const [headerRef, headerVisible] = useScrollAnimation()
  const [facilitiesRef, facilitiesVisible] = useScrollAnimation()
  const [transportRef, transportVisible] = useScrollAnimation()
  const [advisoryRef, advisoryVisible] = useScrollAnimation()

  const selectedFacility = facilityData.find(f => f.id === activeFacility)
  const selectedTransportOptions = activeStation === 'ksr' ? ksrTransportOptions : mgrCentralTransportOptions

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Header Section */}
      <div 
        ref={headerRef}
        className={`fade-in-up ${headerVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Arrival & Departure
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Everything you need to know about reaching your destinations and exploring the facilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  KSR Bengaluru & MGR Central Chennai
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Factory className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  ICF & Rail Museum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facility Information Section */}
      <div 
        ref={facilitiesRef}
        className={`fade-in-up ${facilitiesVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Visit Destinations
            </h2>
            
            {/* Facility Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-2 shadow-lg">
                {facilityData.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => setActiveFacility(facility.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeFacility === facility.id
                        ? `${facility.bgColor} ${facility.color} shadow-md`
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {facility.id === 'icf' ? <Factory className="w-5 h-5" /> : <Building className="w-5 h-5" />}
                    {facility.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Facility Details */}
            {selectedFacility && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Information */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedFacility.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {selectedFacility.subtitle}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {selectedFacility.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Highlights:</h4>
                      {selectedFacility.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedFacility.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`fade-in-up stagger-${index + 1} ${
                          facilitiesVisible ? 'animate' : ''
                        }`}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                          <div className={`p-3 rounded-lg ${selectedFacility.bgColor} w-fit mb-4`}>
                            <feature.icon className={`w-6 h-6 ${selectedFacility.color}`} />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Image Placeholder */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                          {selectedFacility.title} Image
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          High-quality facility photography
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Visual Tour
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        Experience the facility through our comprehensive visual documentation
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Gallery
                      </button>
                    </div>
                  </div>

                  {/* Quick Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 text-center">
                      <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Visit Duration</p>
                      <p className="text-lg font-bold text-blue-600">2-3 Hours</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 text-center">
                      <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Group Size</p>
                      <p className="text-lg font-bold text-green-600">25-30</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Transportation Section */}
      <div 
        ref={transportRef}
        className={`fade-in-up ${transportVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Getting to Railway Stations
            </h2>

            {/* Station Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-2 shadow-lg">
                <button
                  onClick={() => setActiveStation('ksr')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeStation === 'ksr'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Train className="w-5 h-5" />
                  KSR Bengaluru
                </button>
                <button
                  onClick={() => setActiveStation('smvt')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeStation === 'smvt'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Train className="w-5 h-5" />
                  MGR Central Chennai
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Map Placeholder */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <p className="text-blue-700 dark:text-blue-300 font-medium">
                        Google Maps Integration
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {activeStation === 'ksr' ? 'KSR Bengaluru City Station' : 'MGR Central Chennai Station'}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Interactive Map
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Get real-time directions and traffic updates
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Open in Maps
                    </button>
                  </div>
                </div>

                {/* Station Info Card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    Station Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Full Name:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {activeStation === 'ksr' ? 'KSR Bengaluru City' : 'MGR Central Chennai'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Station Code:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {activeStation === 'ksr' ? 'SBC' : 'MAS'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Platforms:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {activeStation === 'ksr' ? '10 Platforms' : '8 Platforms'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Facilities:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        AC Waiting, Food Court, Parking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Transport Options */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Transportation Options
                </h3>
                
                {selectedTransportOptions.map((option, index) => (
                  <div
                    key={option.id}
                    className={`fade-in-up stagger-${index + 1} ${
                      transportVisible ? 'animate' : ''
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          option.type === 'metro' ? 'bg-purple-100 dark:bg-purple-900/20' :
                          option.type === 'bus' ? 'bg-red-100 dark:bg-red-900/20' :
                          option.type === 'walking' ? 'bg-green-100 dark:bg-green-900/20' :
                          'bg-yellow-100 dark:bg-yellow-900/20'
                        }`}>
                          <option.icon className={`w-6 h-6 ${option.color}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {option.title}
                            </h4>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-gray-600 dark:text-gray-400">
                                {option.duration}
                              </span>
                              {option.distance && (
                                <span className="text-gray-600 dark:text-gray-400">
                                  {option.distance}
                                </span>
                              )}
                              {option.cost && (
                                <span className="font-medium text-green-600">
                                  {option.cost}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {option.description}
                          </p>
                          
                          <div className="space-y-1">
                            {option.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2 text-sm">
                                <ArrowRight className="w-3 h-3 text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory Message Section */}
      <div 
        ref={advisoryRef}
        className={`fade-in-up ${advisoryVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl shadow-lg p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <AlertCircle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                    Important Advisory
                  </h3>
                  
                  <div className="space-y-4 text-amber-700 dark:text-amber-300">
                    <p className="font-medium">
                      Please ensure you have minimal luggage for this industrial visit:
                    </p>
                    
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600" />
                        <span>Carry only essential items (clothes, toiletries, documents)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600" />
                        <span>Use a small backpack or cabin-sized luggage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600" />
                        <span>Keep valuables and electronics secure at all times</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600" />
                        <span>Follow all safety protocols during factory visits</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-amber-200 dark:border-amber-700">
                      <p className="text-sm text-amber-600 dark:text-amber-400">
                        For any queries or assistance, contact the program coordinators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Team SPARK Signature */}
              <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-700 text-center">
                <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
                  <Users2 className="w-5 h-5" />
                  <span className="font-semibold">Team SPARK</span>
                </div>
                <p className="text-sm text-amber-500 dark:text-amber-500 mt-1">
                  Industry Visit Coordination Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}