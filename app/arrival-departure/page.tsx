import { 
  MapPin, 
  Clock, 
  Bus, 
  Car, 
  Train, 
  Plane,
  Navigation,
  Phone,
  AlertCircle,
  CheckCircle,
  Download
} from 'lucide-react'

export default function ArrivalDeparture() {
  const transportationOptions = [
    {
      id: 'bus',
      name: 'University Bus',
      icon: Bus,
      description: 'Organized transportation provided by the university',
      features: ['Free for students', 'Guided by staff', 'Direct to locations', 'Group coordination'],
      schedule: 'Departure: 8:00 AM from Main Gate',
      contact: 'Transport Coordinator: +1 (555) 123-4567'
    },
    {
      id: 'car',
      name: 'Personal Vehicle',
      icon: Car,
      description: 'Drive yourself to the visit locations',
      features: ['Flexible timing', 'Personal space', 'Parking required', 'GPS navigation'],
      schedule: 'Arrive 15 minutes before scheduled time',
      contact: 'Parking Info: +1 (555) 234-5678'
    },
    {
      id: 'public',
      name: 'Public Transportation',
      icon: Train,
      description: 'Use local buses, trains, or metro systems',
      features: ['Cost-effective', 'Environmentally friendly', 'Multiple routes', 'Real-time updates'],
      schedule: 'Check local transit schedules',
      contact: 'Transit Info: 511 or visit localtransit.com'
    }
  ]

  const locations = [
    {
      name: 'TechCorp Industries',
      address: '123 Innovation Drive, Silicon Valley, CA 94000',
      coordinates: '37.7749° N, 122.4194° W',
      parking: 'Visitor parking available in front of building',
      access: 'Main entrance on Innovation Drive',
      specialInstructions: 'Check-in at reception desk with valid ID'
    },
    {
      name: 'GreenEnergy Solutions',
      address: '456 Eco Park Boulevard, Eco City, CA 95000',
      coordinates: '37.7849° N, 122.4094° W',
      parking: 'Designated visitor parking in Eco Park lot',
      access: 'Security gate - present student ID',
      specialInstructions: 'Safety briefing required before facility tour'
    },
    {
      name: 'InnovationLab',
      address: '789 Tech Street, Downtown District, CA 96000',
      coordinates: '37.7649° N, 122.4294° W',
      parking: 'Underground parking garage - Level B2',
      access: 'Main lobby entrance on Tech Street',
      specialInstructions: 'Badge required - obtain from security desk'
    }
  ]

  const emergencyContacts = [
    {
      name: 'Transportation Emergency',
      number: '+1 (555) 911-TRAN',
      description: 'For transportation-related emergencies'
    },
    {
      name: 'Program Coordinator',
      number: '+1 (555) 123-4567',
      description: 'Dr. Sarah Johnson - Main contact'
    },
    {
      name: 'University Security',
      number: '+1 (555) 911-CAMP',
      description: 'Campus security and safety'
    },
    {
      name: 'Local Emergency',
      number: '911',
      description: 'Police, Fire, Medical emergencies'
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Arrival & Departure
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Complete transportation guide with directions, parking information, and emergency contacts for all visit locations.
          </p>
        </div>

        {/* Transportation Options */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
              <Bus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Transportation Options
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Choose the best way to get to your industry visits
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportationOptions.map((option) => {
              const Icon = option.icon
              return (
                <div key={option.id} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                      {option.name}
                    </h3>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {option.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-secondary-200 dark:border-secondary-700 pt-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-secondary-400 mr-2" />
                      <span className="text-sm font-medium text-secondary-900 dark:text-white">
                        Schedule:
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                      {option.schedule}
                    </p>
                    
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-secondary-400 mr-2" />
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">
                        {option.contact}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Location Details */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Visit Locations
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Detailed information for each company location
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index} className="p-6 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                      {location.name}
                    </h3>
                    <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      {location.address}
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-500">
                      <Navigation className="w-4 h-4 mr-2" />
                      {location.coordinates}
                    </div>
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    Get Directions
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-2">
                      Parking Information
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {location.parking}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-2">
                      Access Instructions
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {location.access}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                        Special Instructions
                      </h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        {location.specialInstructions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Emergency Contacts
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Important numbers for emergencies and support
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-secondary-900 dark:text-white">
                    {contact.name}
                  </h3>
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {contact.number}
                  </span>
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="card">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Download Resources
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Get offline access to all transportation and location information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Complete Transport Guide
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Location Maps
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Emergency Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
