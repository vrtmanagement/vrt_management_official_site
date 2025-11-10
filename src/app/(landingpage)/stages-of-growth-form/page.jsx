'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2, User, Mail, Building2, Users, DollarSign } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'



export default function Page() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    revenue: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setForm((prev) => ({ ...prev, employees: value }))
  }

  const handleRevenueChange = (value) => {
    setForm((prev) => ({ ...prev, revenue: value }))
  }

  const validate = () => {
    if (!form.name.trim()) { toast.error('Name is required'); return false }
    if (!form.email.trim()) { toast.error('Email is required'); return false }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { toast.error('Enter a valid email'); return false }
    if (!form.company.trim()) { toast.error('Company name is required'); return false }
    if (!form.employees) { toast.error('Please select number of employees'); return false }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const payload = {
        name: form.name,
        email: form.email,
        companyName: form.company,
        numberOfEmployees: form.employees,
        revenue: form.revenue || undefined,
      }
      const res = await axios.post('/api/sogform', payload)
      if (res.status === 201) {
        toast.success('Submitted! We will send you the assessment to your email shortly.')
        setTimeout(() => {
          router.push('/sog')
        }, 3000)
      } else {
        toast.error(res.data?.error || 'Something went wrong. Please try again.')
      }
      setForm({ name: '', email: '', company: '', employees: '', revenue: '' })
    } catch (err) {
      if (err?.response?.status === 409) {
        toast.error('This email is already registered. Please use a different email.')
      } else if (err?.response?.data?.error) {
        toast.error(err.response.data.error)
      } else {
        toast.error('Network error. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }                   

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -right-16 w-[420px] h-[420px] bg-gradient-to-br from-[#DC143C]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-[320px] h-[320px] bg-gradient-to-tr from-slate-200/60 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1
            style={{ fontFamily: 'Merriweather, serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight"
          >
            Discover your growth stage
          </h1>
          <p
            style={{ fontFamily: 'Inter, serif' }}
            className="mt-3 text-neutral-700 text-base md:text-lg max-w-2xl mx-auto"
          >
            Share your details, we will email your assessment.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: 'Inter, serif' }}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-slate-700">Full name <span className="text-[#DC143C]">*</span></Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="pl-10 h-12 bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-700">Company Email Address <span className="text-[#DC143C]">*</span></Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="pl-10 h-12 bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-slate-700">Company name <span className="text-[#DC143C]">*</span></Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Enter your company"
                  value={form.company}
                  onChange={handleChange}
                  className="pl-10 h-12 bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees" className="text-sm font-medium text-slate-700">Number of employees <span className="text-[#DC143C]">*</span></Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 z-10" />
                <Select value={form.employees} onValueChange={handleSelectChange} disabled={isSubmitting}>
                  <SelectTrigger className="pl-10 h-12 bg-white border-slate-300 text-slate-900 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300">
                    <SelectItem value="1-10" className="text-slate-900">Stage 1: 1-10 Employees</SelectItem>
                    <SelectItem value="10-19" className="text-slate-900">Stage 2: 10-19 Employees</SelectItem>
                    <SelectItem value="20-34" className="text-slate-900">Stage 3: 20-34 Employees</SelectItem>
                    <SelectItem value="35-57" className="text-slate-900">Stage 4: 35-57 Employees</SelectItem>
                    <SelectItem value="58-95" className="text-slate-900">Stage 5: 58-95 Employees</SelectItem>
                    <SelectItem value="96-160" className="text-slate-900">Stage 6: 96-160 Employees</SelectItem>
                    <SelectItem value="161-500" className="text-slate-900">Stage 7: 161-500 Employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-sm font-medium text-slate-700">Revenue (Optional)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 z-10" />
                <Select value={form.revenue} onValueChange={handleRevenueChange} disabled={isSubmitting}>
                  <SelectTrigger className="pl-10 h-12 bg-white border-slate-300 text-slate-900 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg">
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300">
                    <SelectItem value="less than 1 Million" className="text-slate-900">Less than 1 Million</SelectItem>
                    <SelectItem value="1M to 2M" className="text-slate-900">1M to 2M</SelectItem>
                    <SelectItem value="2M to 3M" className="text-slate-900">2M to 3M</SelectItem>
                    <SelectItem value="3M to 4M" className="text-slate-900">3M to 4M</SelectItem>
                    <SelectItem value="4M to 5M" className="text-slate-900">4M to 5M</SelectItem>
                    <SelectItem value="5M to above" className="text-slate-900">5M to above</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold bg-[#DC143C] hover:bg-[#b31234] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Continue'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}


