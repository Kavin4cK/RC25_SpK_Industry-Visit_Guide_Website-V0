'use client'

import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight,
  Train,
  Hotel,
  Factory,
  Building,
  Utensils,
  Camera,
  Navigation,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Bus,
  Plane,
  BarChart3,
  Route,
  CalendarDays,
  Eye
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function Schedule() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [timelineRef, timelineVisible] = useScrollAnimation()
  const [summaryRef, summaryVisible] = useScrollAnimation()
  const scheduleData = [
    {
      date: '2025-05-23',
      day: 'Thursday',
      dayNumber: 'Day 1',
      events: [
        {
          time: '06:00 AM',
          title: 'Departure from KSR Bengaluru',
          location: 'Krantivira Sangolli Rayanna Railway Station',
          description: 'Gather at KSR station for departure to Chennai. Please arrive 30 minutes early for boarding.',
          type: 'departure',
          trainDetails: {
            trainName: 'Chennai Mail',
            trainNumber: '12658',
            departure: '06:30 AM',
            arrival: '12:45 PM',
            platform: 'Platform 1',
            journeyDuration: '6h 15m',
            class: 'AC 2 Tier',
            status: 'On Time'
          }
        },
        {
          time: '12:45 PM',
          title: 'Arrival at MGR Chennai Central',
          location: 'MGR Chennai Central Railway Station',
          description: 'Arrive at Chennai Central. Transfer to hotel for check-in and lunch.',
          type: 'arrival'
        },
        {
          time: '02:00 PM',
          title: 'Hotel Check-in & Lunch',
          location: 'Hotel Grand Chennai',
          description: 'Check-in to hotel, freshen up, and enjoy lunch at hotel restaurant.',
          type: 'hotel'
        },
        {
          time: '04:00 PM',
          title: 'Chennai City Orientation',
          location: 'Hotel Conference Room',
          description: 'Briefing session about Chennai, local culture, and safety guidelines.',
          type: 'orientation'
        },
        {
          time: '06:00 PM',
          title: 'Free Time & Dinner',
          location: 'Hotel & Nearby Areas',
          description: 'Free time to explore nearby areas. Dinner at hotel restaurant.',
          type: 'free'
        }
      ]
    },
    {
      date: '2025-05-24',
      day: 'Friday',
      dayNumber: 'Day 2',
      events: [
        {
          time: '07:00 AM',
          title: 'Breakfast & Departure',
          location: 'Hotel Grand Chennai',
          description: 'Early breakfast at hotel and departure for Integral Coach Factory.',
          type: 'breakfast'
        },
        {
          time: '08:30 AM',
          title: 'Integral Coach Factory Visit',
          location: 'ICF, Perambur, Chennai',
          description: 'Comprehensive tour of coach manufacturing facilities, assembly lines, and quality control systems.',
          type: 'factory'
        },
        {
          time: '12:00 PM',
          title: 'Lunch Break',
          location: 'ICF Canteen',
          description: 'Lunch at factory canteen with ICF officials and engineers.',
          type: 'lunch'
        },
        {
          time: '01:30 PM',
          title: 'Rail Museum Visit',
          location: 'Rail Museum, Perambur',
          description: 'Explore the rich history of Indian Railways with vintage locomotives and exhibits.',
          type: 'museum'
        },
        {
          time: '03:30 PM',
          title: 'Chennai Sightseeing',
          location: 'Marina Beach & Fort St. George',
          description: 'Visit iconic Chennai landmarks including Marina Beach and historical monuments.',
          type: 'sightseeing'
        },
        {
          time: '06:00 PM',
          title: 'Return to Hotel',
          location: 'Hotel Grand Chennai',
          description: 'Return to hotel for rest and dinner.',
          type: 'return'
        }
      ]
    },
    {
      date: '2025-05-25',
      day: 'Saturday',
      dayNumber: 'Day 3',
      events: [
        {
          time: '08:00 AM',
          title: 'Hotel Checkout & Breakfast',
          location: 'Hotel Grand Chennai',
          description: 'Complete hotel checkout formalities and enjoy breakfast before departure.',
          type: 'checkout'
        },
        {
          time: '10:30 AM',
          title: 'Departure from Perambur',
          location: 'Perambur Railway Station',
          description: 'Board Humsafar Express for return journey to Bengaluru. Please arrive 30 minutes early.',
          type: 'departure',
          trainDetails: {
            trainName: 'Humsafar Express',
            trainNumber: '22353',
            departure: '11:00 AM',
            arrival: '05:30 PM',
            platform: 'Platform 2',
            journeyDuration: '6h 30m',
            class: 'AC 3 Tier',
            status: 'On Time'
          }
        },
        {
          time: '05:30 PM',
          title: 'Arrival at SMVT Bengaluru',
          location: 'Sir M. Visvesvaraya Terminal',
          description: 'Arrive at SMVT Bengaluru. Transfer to campus or home. End of program.',
          type: 'arrival'
        }
      ]
    }
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'departure':
        return <Train className="w-5 h-5" />
      case 'arrival':
        return <MapPin className="w-5 h-5" />
      case 'hotel':
        return <Hotel className="w-5 h-5" />
      case 'checkout':
        return <Hotel className="w-5 h-5" />
      case 'orientation':
        return <Info className="w-5 h-5" />
      case 'free':
        return <Star className="w-5 h-5" />
      case 'breakfast':
        return <Utensils className="w-5 h-5" />
      case 'factory':
        return <Factory className="w-5 h-5" />
      case 'lunch':
        return <Utensils className="w-5 h-5" />
      case 'museum':
        return <Building className="w-5 h-5" />
      case 'sightseeing':
        return <Camera className="w-5 h-5" />
      case 'return':
        return <Bus className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case 'departure':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'arrival':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'hotel':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'checkout':
        return 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200'
      case 'orientation':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      case 'free':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'breakfast':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      case 'factory':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'lunch':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
      case 'museum':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
      case 'sightseeing':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
      case 'return':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Integral Coach Factory Visit Schedule
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Complete timeline for your three-day journey from Bengaluru to Chennai, including train travel, 
            factory visits, and sightseeing activities.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {scheduleData.map((day, dayIndex) => (
              <div key={day.date} className="relative">
                {/* Day Header */}
                <div className="flex items-center mb-8">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white dark:border-secondary-900 shadow-lg"></div>
                  <div className="ml-16">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg px-6 py-4 border border-secondary-200 dark:border-secondary-700">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                          {day.dayNumber}
                        </h2>
                        <p className="text-lg text-secondary-600 dark:text-secondary-400">
                          {day.day}, {new Date(day.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Events Timeline */}
                <div className="ml-16 space-y-8">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-10 w-4 h-4 bg-white dark:bg-secondary-800 rounded-full border-4 border-blue-500 shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>

                      {/* Event Card */}
                      <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg border border-secondary-200 dark:border-secondary-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                event.type === 'departure' ? 'bg-blue-100 dark:bg-blue-900' :
                                event.type === 'arrival' ? 'bg-green-100 dark:bg-green-900' :
                                event.type === 'factory' ? 'bg-red-100 dark:bg-red-900' :
                                'bg-purple-100 dark:bg-purple-900'
                              }`}>
                                {getEventIcon(event.type)}
                              </div>
                              <div>
                                <div className="flex items-center space-x-3 mb-1">
                                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                                    {event.title}
                                  </h3>
                                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getEventColor(event.type)}`}>
                                    {event.type}
                                  </span>
                                </div>
                                <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                                  <Clock className="w-4 h-4 mr-2" />
                                  {event.time}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>

                          <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                            {event.description}
                          </p>

                          {/* Train Details Card (Special for departure) */}
                          {event.trainDetails && (
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                              <div className="flex items-center mb-3">
                                <Train className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Train Details</h4>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Train Name</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.trainName}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Train Number</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.trainNumber}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Platform</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.platform}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Duration</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.journeyDuration}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 mt-3">
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Departure</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.departure}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Arrival</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.arrival}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                                <div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Class</p>
                                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100">{event.trainDetails.class}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{event.trainDetails.status}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Summary Section */}
        <div 
          ref={summaryRef}
          className={`mt-16 fade-in-up ${summaryVisible ? 'animate' : ''}`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Journey Summary
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Complete overview of your three-day Integral Coach Factory visit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Days */}
            <div className="card text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-l-blue-500">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">3</h3>
              <p className="text-blue-700 dark:text-blue-300 font-medium">Total Days</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">May 23-25, 2025</p>
            </div>

            {/* Factory Visits */}
            <div className="card text-center bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-l-red-500">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-red-900 dark:text-red-100 mb-2">2</h3>
              <p className="text-red-700 dark:text-red-300 font-medium">Factory Visits</p>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">ICF & Rail Museum</p>
            </div>

            {/* Travel Distance */}
            <div className="card text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-l-green-500">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Route className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">700+</h3>
              <p className="text-green-700 dark:text-green-300 font-medium">KM Travel</p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">Bengaluru ↔ Chennai</p>
            </div>

            {/* Sightseeing Spots */}
            <div className="card text-center bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-l-4 border-l-purple-500">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">5+</h3>
              <p className="text-purple-700 dark:text-purple-300 font-medium">Sightseeing Spots</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">Marina Beach, Fort St. George</p>
            </div>
          </div>

          {/* Journey Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-l-4 border-l-amber-500">
              <div className="flex items-center mb-4">
                <Train className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" />
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                  Train Journeys
                </h3>
              </div>
              <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Chennai Mail (12658) - Outbound
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Humsafar Express (22353) - Return
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-l-4 border-l-teal-500">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-teal-600 dark:text-teal-400 mr-3" />
                <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-100">
                  Key Locations
                </h3>
              </div>
              <ul className="space-y-2 text-teal-800 dark:text-teal-200">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
                  Integral Coach Factory
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
                  Rail Museum, Perambur
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-l-4 border-l-pink-500">
              <div className="flex items-center mb-4">
                <Camera className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-3" />
                <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-100">
                  Sightseeing
                </h3>
              </div>
              <ul className="space-y-2 text-pink-800 dark:text-pink-200">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-pink-600 dark:text-pink-400 mr-2" />
                  Marina Beach
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-pink-600 dark:text-pink-400 mr-2" />
                  Fort St. George
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-l-4 border-l-amber-500">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3" />
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100">
                Important Reminders
              </h3>
            </div>
            <ul className="space-y-2 text-amber-800 dark:text-amber-200">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                Arrive 30 minutes early for train departure
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                Bring valid ID and train tickets
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                Follow dress code guidelines
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                Keep emergency contacts handy
              </li>
            </ul>
          </div>

          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-l-blue-500">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                Contact Information
              </h3>
            </div>
            <div className="space-y-3 text-blue-800 dark:text-blue-200">
              <div>
                <strong>Program Coordinator:</strong> Dr. Sarah Johnson
              </div>
              <div>
                <strong>Phone:</strong> +91 98765 43210
              </div>
              <div>
                <strong>Email:</strong> coordinator@university.edu
              </div>
              <div>
                <strong>Emergency Contact:</strong> +91 98765 43211
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
