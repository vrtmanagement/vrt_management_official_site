"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Building2, Users, DollarSign, ArrowRight, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

export default function TriMetrixForm() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    numberOfEmployees: "",
    revenue: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, numberOfEmployees: value }));
  };

  const handleRevenueChange = (value) => {
    setFormData((prev) => ({ ...prev, revenue: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.companyName.trim()) {
      toast.error("Company name is required");
      return false;
    }
    if (!formData.numberOfEmployees) {
      toast.error("Please select number of employees");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/trimetrix-form", {
        name: formData.name,
        email: formData.email,
        companyName: formData.companyName,
        numberOfEmployees: formData.numberOfEmployees,
        revenue: formData.revenue || undefined,
      });

      if (response.status === 201) {
        toast.success("Thank you! We'll be in touch soon.");

        setFormData({
          name: "",
          email: "",
          companyName: "",
          numberOfEmployees: "",
          revenue: "",
        });
      } else {
        const errorMessage = response.data?.error || "Something went wrong. Please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      if (error.response?.status === 409 && error.response?.data?.error?.includes("Email already exists")) {
        toast.error("This email address is already registered. Please use a different email address.");
        setFormData(prev => ({ ...prev, email: "" }));
      } else if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  


  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center py-16 mt-4 sm:py-20">
      {/* Rectangular Border Pattern Background */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Subtle accent gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-50/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50/30 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto" ref={formRef}>
          {/* Form Card - Premium Design */}
          <div
            className={`relative bg-white rounded-xl shadow-sm hover:shadow-xl p-8 sm:p-10 md:p-12 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Subtle gradient from top-right */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ fontFamily: 'Merriweather, serif', transitionDelay: '200ms' }}
                >
                  Get Started With
                  <br />
                  <span className="text-red-600">TriMetrix HD</span>
                </h1>
                <p
                  className={`text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ fontFamily: 'Lato, sans-serif', transitionDelay: '400ms' }}
                >
                  Fill in your details below and our team will reach out to schedule your personalized consultation.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div
                  className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Full Name <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors duration-300" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-12 h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:ring-red-600 rounded-lg transition-all duration-300"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div
                  className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Company Email Address <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors duration-300" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:ring-red-600 rounded-lg transition-all duration-300"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                {/* Company Name Field */}
                <div
                  className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <Label htmlFor="companyName" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Company Name <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors duration-300" />
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="pl-12 h-14 bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:ring-red-600 rounded-lg transition-all duration-300"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                {/* Number of Employees Field */}
                <div
                  className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '1200ms' }}
                >
                  <Label htmlFor="numberOfEmployees" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Number of Employees <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative group">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors duration-300 z-10" />
                    <Select value={formData.numberOfEmployees} onValueChange={handleSelectChange} disabled={isSubmitting}>
                      <SelectTrigger className="pl-12 h-14 bg-white border-2 border-gray-200 text-gray-900 focus:border-red-600 focus:ring-red-600 rounded-lg">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        <SelectItem value="1-10" className="text-gray-900 hover:bg-gray-100">Stage 1: 1-10 Employees</SelectItem>
                        <SelectItem value="10-19" className="text-gray-900 hover:bg-gray-100">Stage 2: 10-19 Employees</SelectItem>
                        <SelectItem value="20-34" className="text-gray-900 hover:bg-gray-100">Stage 3: 20-34 Employees</SelectItem>
                        <SelectItem value="35-57" className="text-gray-900 hover:bg-gray-100">Stage 4: 35-57 Employees</SelectItem>
                        <SelectItem value="58-95" className="text-gray-900 hover:bg-gray-100">Stage 5: 58-95 Employees</SelectItem>
                        <SelectItem value="96-160" className="text-gray-900 hover:bg-gray-100">Stage 6: 96-160 Employees</SelectItem>
                        <SelectItem value="161-500" className="text-gray-900 hover:bg-gray-100">Stage 7: 161-500 Employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Revenue Field */}
                <div
                  className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: '1400ms' }}
                >
                  <Label htmlFor="revenue" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Revenue (Optional)
                  </Label>
                  <div className="relative group">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors duration-300 z-10" />
                    <Select value={formData.revenue} onValueChange={handleRevenueChange} disabled={isSubmitting}>
                      <SelectTrigger className="pl-12 h-14 bg-white border-2 border-gray-200 text-gray-900 focus:border-red-600 focus:ring-red-600 rounded-lg">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        <SelectItem value="less than 1 Million" className="text-gray-900 hover:bg-gray-100">Less than 1 Million</SelectItem>
                        <SelectItem value="1M to 2M" className="text-gray-900 hover:bg-gray-100">1M to 2M</SelectItem>
                        <SelectItem value="2M to 3M" className="text-gray-900 hover:bg-gray-100">2M to 3M</SelectItem>
                        <SelectItem value="3M to 4M" className="text-gray-900 hover:bg-gray-100">3M to 4M</SelectItem>
                        <SelectItem value="4M to 5M" className="text-gray-900 hover:bg-gray-100">4M to 5M</SelectItem>
                        <SelectItem value="5M to above" className="text-gray-900 hover:bg-gray-100">5M to above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <div
                  className={`pt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: '1600ms' }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-base sm:text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:scale-[1.02] transition-all duration-300 rounded-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Footer Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p
                  className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  By submitting this form, you agree to receive communication from VRT Management Group. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
