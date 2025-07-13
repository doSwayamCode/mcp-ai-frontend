"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeEmail } from "@/app/actions/subscribe"
import { CheckCircle, Loader2, Mail } from "lucide-react"

export function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const result = await subscribeEmail(email)

      if (result.success) {
        setIsSuccess(true)
        setEmail("")
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto px-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-400">Welcome to Intern Wala! 🎉</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            You're all set! We'll send you the latest internship opportunities directly to your inbox.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300">
        <div className="flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-blue-400 mr-2" />
          <h2 className="text-xl sm:text-2xl font-bold">Get Internships Daily</h2>
        </div>
        <p className="text-gray-400 mb-6 text-sm sm:text-base text-center">
          Join thousands of students getting internship alerts. No spam, just opportunities!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/60 focus:ring-blue-400/20 h-12 text-base"
              disabled={isLoading}
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 h-12 rounded-xl transition-all duration-200 transform hover:scale-105 text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe for Free
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
          By subscribing, you'll receive daily internship updates.
          <br />
          <span className="text-green-400">100% free • No spam • Unsubscribe anytime</span>
        </p>
      </div>
    </div>
  )
}
