'use client'

import { useState } from 'react'
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle,
  Send,
  Bot,
  User
} from 'lucide-react'

export default function Questions() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m here to help with your industry visit questions. What would you like to know?',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')

  const faqData = [
    {
      id: 1,
      question: 'What should I bring to the industry visit?',
      answer: 'You should bring your student ID, signed permission forms, notebook and pen, fully charged mobile phone, and dress in business casual attire. A complete checklist is available in the Instructions section.'
    },
    {
      id: 2,
      question: 'What is the dress code for the visits?',
      answer: 'Business casual attire is required. This includes dress pants or skirts, collared shirts or blouses, and closed-toe shoes. Avoid jeans, t-shirts, or overly casual clothing.'
    },
    {
      id: 3,
      question: 'Can I take photos during the facility tours?',
      answer: 'Photography is generally not allowed without explicit permission from company representatives. Some areas may have strict no-photography policies for security reasons.'
    },
    {
      id: 4,
      question: 'What happens if I\'m late for departure?',
      answer: 'Please arrive 15 minutes early for all departures. If you\'re running late, contact the program coordinator immediately. The bus will not wait for late arrivals.'
    },
    {
      id: 5,
      question: 'Are meals provided during the visits?',
      answer: 'Lunch is typically provided at company cafeterias, but it\'s recommended to bring some money or a packed lunch as backup. Dietary restrictions should be communicated in advance.'
    },
    {
      id: 6,
      question: 'What if I have a medical emergency?',
      answer: 'In case of a medical emergency, immediately inform your group supervisor or any company representative. Emergency contact numbers are provided in your instruction packet.'
    },
    {
      id: 7,
      question: 'Can I ask questions during the tours?',
      answer: 'Yes! Questions are encouraged during designated Q&A sessions. Please wait for appropriate times to ask questions and be respectful of the presenter\'s time.'
    },
    {
      id: 8,
      question: 'What should I do if I get separated from my group?',
      answer: 'Stay calm and contact your group supervisor immediately. Do not wander around the facility alone. Wait at a designated meeting point if one has been established.'
    }
  ]

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      type: 'user' as const,
      message: newMessage,
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    setNewMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        type: 'bot' as const,
        message: 'Thank you for your question! I\'m processing your request and will provide a helpful response shortly. In the meantime, you might find the answer in our FAQ section above.',
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Questions & Support
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Find answers to common questions or chat with our AI assistant for instant help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Quick answers to common questions
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      className="w-full px-4 py-4 text-left bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="font-medium text-secondary-900 dark:text-white">
                        {faq.question}
                      </span>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-secondary-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-secondary-400" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-4 py-4 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
                        <p className="text-secondary-600 dark:text-secondary-400">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="space-y-6">
            <div className="card h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    AI Assistant
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Get instant help with your questions
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 space-y-4 mb-6 max-h-96 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                        )}
                        {message.type === 'user' && (
                          <User className="w-4 h-4 mt-1 flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-sm">{message.message}</p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' 
                              ? 'text-primary-100' 
                              : 'text-secondary-500 dark:text-secondary-400'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 px-4 py-2 bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="btn-primary px-4 py-2"
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 card">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Contact our support team for personalized assistance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">
                  Program Coordinator
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">
                  Dr. Sarah Johnson
                </p>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  sarah.johnson@university.edu
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">
                  Emergency Hotline
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">
                  24/7 Support
                </p>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  +1 (555) 987-6543
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">
                  Technical Support
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">
                  IT Helpdesk
                </p>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  support@university.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
