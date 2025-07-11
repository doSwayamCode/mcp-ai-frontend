"use client"

import { 
  SiGoogle, 
  SiAmazon, 
  SiMeta, 
  SiApple, 
  SiNetflix, 
  SiUber, 
  SiAirbnb, 
  SiSpotify, 
  SiAdobe 
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'

const companies = [
  { name: 'Google', icon: SiGoogle, color: 'text-blue-500' },
  { name: 'Microsoft', icon: FaMicrosoft, color: 'text-blue-400' },
  { name: 'Amazon', icon: SiAmazon, color: 'text-orange-500' },
  { name: 'Meta', icon: SiMeta, color: 'text-blue-600' },
  { name: 'Apple', icon: SiApple, color: 'text-gray-300' },
  { name: 'Netflix', icon: SiNetflix, color: 'text-red-500' },
  { name: 'Uber', icon: SiUber, color: 'text-gray-100' },
  { name: 'Airbnb', icon: SiAirbnb, color: 'text-red-400' },
  { name: 'Spotify', icon: SiSpotify, color: 'text-green-500' },
  { name: 'Adobe', icon: SiAdobe, color: 'text-red-600' },
]

export function CompanyTicker() {
  return (
    <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-xl py-4 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex animate-scroll">
        {/* First set of companies */}
        {companies.map((company, index) => {
          const IconComponent = company.icon
          return (
            <div
              key={`first-${index}`}
              className="flex items-center gap-3 mx-8 whitespace-nowrap"
            >
              <IconComponent className={`w-6 h-6 ${company.color}`} />
              <span className="text-lg font-semibold text-white/80">{company.name}</span>
            </div>
          )
        })}
        
        {/* Duplicate set for seamless loop */}
        {companies.map((company, index) => {
          const IconComponent = company.icon
          return (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 mx-8 whitespace-nowrap"
            >
              <IconComponent className={`w-6 h-6 ${company.color}`} />
              <span className="text-lg font-semibold text-white/80">{company.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
