'use client'

import Image from 'next/image'
import { useTheme } from './ThemeProvider'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* SPARK Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 md:mb-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
              <Image
                src={theme === 'dark' ? '/SPK_WHITE.png' : '/SPK_BLACK.png'}
                alt="SPARK Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary-900 dark:text-white">
                SPARK
              </h3>
              <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                Industry Visit Coordination
              </p>
            </div>
          </div>

          {/* Copyright and Info */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
              © 2025 RV College of Engineering
            </p>
            <p className="text-xs text-secondary-500 dark:text-secondary-500 mt-1">
              Integral Coach Factory Industry Visit Guide
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-secondary-500 dark:text-secondary-500 space-y-2 md:space-y-0">
            <p className="text-center md:text-left">
              For queries and support, contact Team SPARK
            </p>
            <p className="text-center md:text-right">
              Built with ❤️ for the ICF Industry Visit 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
