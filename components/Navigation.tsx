'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  Sun, 
  Moon, 
  Menu, 
  X,
  Home,
  Calendar,
  FileText,
  HelpCircle,
  MapPin
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Instructions', href: '/instructions', icon: FileText },
  { name: 'Questions', href: '/questions', icon: HelpCircle },
  { name: 'Arrival & Departure', href: '/arrival-departure', icon: MapPin },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md border-b border-secondary-200 dark:border-secondary-700">
      <div className="max-w-7xl mx-auto px-0 pr-2 sm:pr-3 lg:pr-4">
        <div className="flex items-center justify-between h-24">
          {/* Left Section: RV Logo + SPARK Logo + Title */}
          <div className="flex-shrink-0 flex items-center mr-6">
            <Link href="/" className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              {/* RV Logo */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                <Image
                  src={theme === 'dark' ? '/RVCE_White.png' : '/RVCE_BLACK.png'}
                  alt="RVCE Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* SPARK Logo */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image
                  src="/spark.svg"
                  alt="SPARK Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xs sm:text-sm lg:text-base font-bold text-secondary-900 dark:text-white hidden lg:block">
                Industry Visit Guide
              </span>
            </Link>
          </div>

          {/* Center Section: Navigation Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link flex items-center space-x-1 text-sm lg:text-base ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    <Icon className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="hidden lg:inline">{item.name}</span>
                    <span className="lg:hidden">{item.name?.split(' ')[0] || item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right Section: Theme Toggle and Credits */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0 ml-8">
            <a
              href="https://linktr.ee/Kavin_Krishnan_C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Credits
            </a>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-secondary-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="https://linktr.ee/Kavin_Krishnan_C"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center text-sm font-medium text-secondary-700 dark:text-secondary-300"
            >
              Credits
            </a>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-secondary-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
            {/* Mobile Navigation Links */}
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link flex items-center space-x-3 px-4 py-3 rounded-lg min-h-[44px] ${
                    isActive ? 'active bg-primary-50 dark:bg-primary-900/20' : 'hover:bg-secondary-100 dark:hover:bg-secondary-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
