import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react'

export default function Schedule() {
  const scheduleData = [
    {
      date: '2024-01-15',
      day: 'Monday',
      events: [
        {
          time: '08:00 AM',
          title: 'Departure from Campus',
          location: 'Main Gate',
          description: 'Gather at the main gate for departure. Please arrive 15 minutes early.',
          type: 'transport'
        },
        {
          time: '10:00 AM',
          title: 'TechCorp Industries Visit',
          location: 'TechCorp HQ, Silicon Valley',
          description: 'Tour of manufacturing facilities and R&D labs. Q&A session with engineers.',
          type: 'visit'
        },
        {
          time: '12:00 PM',
          title: 'Lunch Break',
          location: 'TechCorp Cafeteria',
          description: 'Networking lunch with company representatives.',
          type: 'break'
        },
        {
          time: '02:00 PM',
          title: 'InnovationLab Tour',
          location: 'InnovationLab, Downtown',
          description: 'Explore cutting-edge technology demonstrations and prototypes.',
          type: 'visit'
        },
        {
          time: '05:00 PM',
          title: 'Return to Campus',
          location: 'Main Gate',
          description: 'Expected arrival time back at campus.',
          type: 'transport'
        }
      ]
    },
    {
      date: '2024-01-16',
      day: 'Tuesday',
      events: [
        {
          time: '09:00 AM',
          title: 'GreenEnergy Solutions',
          location: 'GreenEnergy Campus, Eco Park',
          description: 'Learn about sustainable energy solutions and environmental practices.',
          type: 'visit'
        },
        {
          time: '11:30 AM',
          title: 'Workshop: Future of Energy',
          location: 'GreenEnergy Conference Room',
          description: 'Interactive workshop on renewable energy technologies.',
          type: 'workshop'
        },
        {
          time: '01:00 PM',
          title: 'Lunch & Networking',
          location: 'GreenEnergy Cafeteria',
          description: 'Lunch with industry professionals and fellow students.',
          type: 'break'
        },
        {
          time: '03:00 PM',
          title: 'Manufacturing Plant Tour',
          location: 'GreenEnergy Production Facility',
          description: 'Behind-the-scenes look at solar panel manufacturing.',
          type: 'visit'
        }
      ]
    }
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'transport':
        return <Users className="w-5 h-5" />
      case 'visit':
        return <MapPin className="w-5 h-5" />
      case 'workshop':
        return <Calendar className="w-5 h-5" />
      case 'break':
        return <Clock className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case 'transport':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'visit':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'workshop':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'break':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Industry Visit Schedule
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Detailed timeline of all activities, visits, and important events during your industry visit program.
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={day.date} className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    {day.day}
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {new Date(day.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    {/* Time */}
                    <div className="flex-shrink-0 w-20 text-sm font-medium text-secondary-600 dark:text-secondary-400">
                      {event.time}
                    </div>

                    {/* Event Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-secondary-700 rounded-full flex items-center justify-center shadow-sm">
                      {getEventIcon(event.type)}
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                          {event.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {event.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-secondary-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
              Important Notes
            </h3>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-400">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Arrive 15 minutes early for all departures
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Bring valid ID and required documents
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Dress code: Business casual
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                No photography without permission
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <div className="space-y-3 text-secondary-600 dark:text-secondary-400">
              <div>
                <strong>Program Coordinator:</strong> Dr. Sarah Johnson
              </div>
              <div>
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div>
                <strong>Email:</strong> coordinator@university.edu
              </div>
              <div>
                <strong>Emergency Contact:</strong> +1 (555) 987-6543
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
