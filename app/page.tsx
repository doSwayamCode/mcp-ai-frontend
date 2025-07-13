import { EmailSubscription } from "@/components/email-subscription"
import { CompanyTicker } from "@/components/company-ticker"
import { FloatingOrbs } from "@/components/floating-orbs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <FloatingOrbs />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 sm:px-6 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-heading font-medium text-green-400">💼 100% Free Forever</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-200 to-green-400 bg-clip-text text-transparent leading-tight">
              GharWalePuchenge
            </h1>

            {/* Hindi Tagline */}
            <div className="mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl lg:text-2xl text-yellow-400 font-heading font-semibold mb-2">
                Kaam mila ya memes hi bhej raha hai?
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
              isliye get the latest internship opportunities delivered straight to your inbox.{" "}
              <span className="text-green-400 font-semibold">Completely free</span> & ab internship ka jawab bhi ‘haan’ hoga!
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">Direct to Email</h3>
                <p className="text-gray-400 text-sm">Fresh internship opportunities delivered daily to your inbox</p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">100% Free</h3>
                <p className="text-gray-400 text-sm">No subscription fees, no hidden costs - completely free forever</p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">Latest Updates</h3>
                <p className="text-gray-400 text-sm">Be the first to know about new internship openings</p>
              </div>
            </div>

            {/* Email Subscription Component */}
            <EmailSubscription />

            {/* Stats Section */}
            <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-green-400 mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-blue-400 mb-2">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-purple-400 mb-2">Daily</div>
                  <div className="text-xs sm:text-sm text-gray-400">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-yellow-400 mb-2">Free</div>
                  <div className="text-xs sm:text-sm text-gray-400">Forever</div>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-8 font-medium">Helping students find their dream internships</p>

              {/* Company Ticker */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-4 font-medium">Featured companies hiring interns</p>
                <CompanyTicker />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left font-medium">© 2025 Intern Wala. All rights reserved.</p>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="font-medium">Made with love by</span>
                <a
                  href="https://github.com/doSwayamCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-blue-400 transition-colors duration-200 hover:scale-105 transform"
                >
                  Swayam
                </a>
              </div>
            </div>

            {/* Additional Footer Info */}
            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-gray-600 font-medium">
                Connecting students with opportunities • No spam, just opportunities • Unsubscribe anytime
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
