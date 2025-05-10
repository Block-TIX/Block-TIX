"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Briefcase, ChevronDown, ChevronUp, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import NetworkBackground from "@/components/network-background"

// Job positions data
const openPositions = [
  {
    id: 1,
    title: "Blockchain Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for an experienced Blockchain Developer to join our team. You will be responsible for developing and implementing blockchain solutions, smart contracts, and decentralized applications.",
    requirements: [
      "Strong experience with Solana, Ethereum, or other blockchain platforms",
      "Proficiency in Rust, Solidity, or other smart contract languages",
      "Experience with Web3.js, Ethers.js, or similar libraries",
      "Understanding of cryptographic principles and consensus mechanisms",
      "Familiarity with NFT standards and token implementations",
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible remote work policy",
      "Health insurance and wellness benefits",
      "Professional development budget",
      "Opportunity to shape the future of blockchain ticketing",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "We are seeking a talented Frontend Developer to create engaging and responsive user interfaces for our blockchain ticketing platform. You will work closely with our design and backend teams to deliver seamless user experiences.",
    requirements: [
      "Strong experience with React, Next.js, and TypeScript",
      "Proficiency in modern CSS frameworks like Tailwind CSS",
      "Experience with responsive design and cross-browser compatibility",
      "Knowledge of state management solutions",
      "Understanding of Web3 frontend integration is a plus",
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible remote work policy",
      "Health insurance and wellness benefits",
      "Professional development budget",
      "Opportunity to shape the future of blockchain ticketing",
    ],
  },
  {
    id: 3,
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for a Product Manager to lead our product development efforts. You will be responsible for defining product strategy, roadmap, and features based on market research and user feedback.",
    requirements: [
      "Experience in product management for tech products",
      "Understanding of blockchain technology and Web3 ecosystem",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Experience with agile methodologies and product lifecycle management",
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible remote work policy",
      "Health insurance and wellness benefits",
      "Professional development budget",
      "Opportunity to shape the future of blockchain ticketing",
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null as File | null,
    coverLetter: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const toggleJob = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null)
    } else {
      setExpandedJob(jobId)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        position: "",
        resume: null,
        coverLetter: "",
      })
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <NetworkBackground />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300">
              Help us revolutionize the ticketing industry with blockchain technology. We're looking for passionate
              individuals to join our mission.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Open Positions</h2>

            <div className="grid gap-6">
              {openPositions.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
                >
                  <div
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      {expandedJob === job.id ? (
                        <ChevronUp className="text-gray-400" />
                      ) : (
                        <ChevronDown className="text-gray-400" />
                      )}
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t border-gray-800 pt-4 mt-2">
                        <p className="text-gray-300 mb-4">{job.description}</p>

                        <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 mb-4 text-gray-300">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="mb-1">
                              {req}
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                        <ul className="list-disc pl-5 mb-4 text-gray-300">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="mb-1">
                              {benefit}
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, position: job.title }))
                            document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                          }}
                          className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                        >
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 px-4 md:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Apply Now</h2>

            {submitSuccess ? (
              <div className="bg-green-500/20 border border-green-500 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                <p className="text-gray-300">
                  Thank you for your interest in joining BlockTix. We'll review your application and get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800"
              >
                <div className="grid gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">
                      Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a position</option>
                      {openPositions.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">
                      Resume/CV
                    </label>
                    <div className="flex items-center">
                      <label className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                        <span className="text-gray-300">
                          {formData.resume ? formData.resume.name : "Upload PDF or DOCX"}
                        </span>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-1">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tell us why you're interested in this position and what you can bring to the team..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Life at BlockTix</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                  Remote-First Culture
                </h3>
                <p className="text-gray-300">
                  We believe in hiring the best talent regardless of location. Our team works remotely across multiple
                  time zones, collaborating effectively with modern tools and practices.
                </p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                  Innovation & Growth
                </h3>
                <p className="text-gray-300">
                  We're at the forefront of blockchain technology and ticketing innovation. Join us to work on
                  cutting-edge solutions and grow your skills in a rapidly evolving industry.
                </p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                  Work-Life Balance
                </h3>
                <p className="text-gray-300">
                  We value sustainable pace and believe that balance leads to better outcomes. Flexible hours, unlimited
                  PTO, and a focus on results rather than hours worked.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
