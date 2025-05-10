"use client"

import type React from "react"

import { useState } from "react"

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    notifications: true,
    marketingEmails: false,
    theme: "dark",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the settings to an API
    alert("Settings saved!")
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Profile Settings</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 rounded bg-gray-900"
                />
                <label htmlFor="notifications" className="ml-2 block text-sm text-gray-300">
                  Enable event notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketingEmails"
                  name="marketingEmails"
                  checked={formData.marketingEmails}
                  onChange={handleChange}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 rounded bg-gray-900"
                />
                <label htmlFor="marketingEmails" className="ml-2 block text-sm text-gray-300">
                  Receive marketing emails
                </label>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Appearance</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="dark"
                      name="theme"
                      value="dark"
                      checked={formData.theme === "dark"}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 bg-gray-900"
                    />
                    <label htmlFor="dark" className="ml-2 block text-sm text-gray-300">
                      Dark
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="light"
                      name="theme"
                      value="light"
                      checked={formData.theme === "light"}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 bg-gray-900"
                    />
                    <label htmlFor="light" className="ml-2 block text-sm text-gray-300">
                      Light
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
