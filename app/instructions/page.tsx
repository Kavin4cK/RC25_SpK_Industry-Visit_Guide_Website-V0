import { 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Clock, 
  Users, 
  MapPin,
  Phone,
  Mail,
  Download
} from 'lucide-react'

export default function Instructions() {
  const preVisitChecklist = [
    { id: 1, item: 'Valid student ID card', completed: false },
    { id: 2, item: 'Signed permission form', completed: false },
    { id: 3, item: 'Medical clearance certificate', completed: false },
    { id: 4, item: 'Business casual attire', completed: false },
    { id: 5, item: 'Notebook and pen', completed: false },
    { id: 6, item: 'Mobile phone (fully charged)', completed: false },
    { id: 7, item: 'Emergency contact information', completed: false },
    { id: 8, item: 'Lunch money or packed lunch', completed: false }
  ]

  const safetyGuidelines = [
    {
      icon: AlertCircle,
      title: 'Safety First',
      description: 'Always follow safety instructions and wear provided safety equipment during facility tours.'
    },
    {
      icon: Users,
      title: 'Stay with Group',
      description: 'Never wander off alone. Always stay with your assigned group and supervisor.'
    },
    {
      icon: Phone,
      title: 'Emergency Contacts',
      description: 'Keep emergency contact numbers readily available and inform supervisors of any health issues.'
    },
    {
      icon: MapPin,
      title: 'Know Your Location',
      description: 'Be aware of emergency exits and assembly points at each facility.'
    }
  ]

  const conductRules = [
    'Maintain professional behavior at all times',
    'Respect company property and equipment',
    'Ask questions during designated Q&A sessions only',
    'No photography without explicit permission',
    'Keep mobile phones on silent mode during presentations',
    'Follow dress code requirements strictly',
    'Arrive on time for all scheduled activities',
    'Show respect to all company representatives and staff'
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Instructions & Guidelines
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Essential information and guidelines to ensure a safe, productive, and successful industry visit experience.
          </p>
        </div>

        {/* Pre-Visit Checklist */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Pre-Visit Checklist
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Complete these items before your industry visit
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {preVisitChecklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200 cursor-pointer"
              >
                <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                  item.completed 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-secondary-300 dark:border-secondary-600'
                }`}>
                  {item.completed && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span className={`text-sm ${
                  item.completed 
                    ? 'text-green-600 dark:text-green-400 line-through' 
                    : 'text-secondary-700 dark:text-secondary-300'
                }`}>
                  {item.item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="btn-primary flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Checklist
            </button>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Safety Guidelines
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Critical safety information for all participants
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyGuidelines.map((guideline, index) => {
              const Icon = guideline.icon
              return (
                <div key={index} className="p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                        {guideline.title}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Code of Conduct
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Professional behavior expectations during the visit
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {conductRules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {index + 1}
                  </span>
                </div>
                <p className="text-secondary-700 dark:text-secondary-300">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Contacts */}
        <div className="card mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Important Contacts
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Key personnel and emergency contacts
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Program Staff
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary-400" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-white">Dr. Sarah Johnson</p>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">Program Coordinator</p>
                    <p className="text-sm text-primary-600 dark:text-primary-400">sarah.johnson@university.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary-400" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-white">Emergency Hotline</p>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">24/7 Support</p>
                    <p className="text-sm text-primary-600 dark:text-primary-400">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Company Contacts
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                  <p className="font-medium text-secondary-900 dark:text-white">TechCorp Industries</p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">John Smith, HR Manager</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">john.smith@techcorp.com</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                  <p className="font-medium text-secondary-900 dark:text-white">GreenEnergy Solutions</p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">Maria Garcia, Operations</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">maria.garcia@greenenergy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="card">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Download Resources
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Get all the essential documents and guides for your industry visit
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Complete Guide PDF
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Safety Manual
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Company Profiles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
