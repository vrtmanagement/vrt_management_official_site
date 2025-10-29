"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, User, Mail, Download, ArrowRight, Building2, Users } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const HiringEbookForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    numberOfEmployees: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, numberOfEmployees: value }));
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
      toast.error("Number of employees is required");
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
      // Make API call to store data in database
      const response = await axios.post("/api/lban-form", {
        name: formData.name,
        email: formData.email,
        companyName: formData.companyName,
        numberOfEmployees: formData.numberOfEmployees,
      });

      if (response.status === 201) {
        // Store user data in localStorage for quiz page
        // localStorage.setItem('lban_user_data', JSON.stringify({
        //   name: formData.name,
        //   email: formData.email,
        //   companyName: formData.companyName,
        //   numberOfEmployees: formData.numberOfEmployees,
        //   submittedAt: new Date().toISOString()
        // }));
        
        // Show success message
        toast.success("Thank you! Your Hiring Ebook will be sent to your email shortly.");
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          companyName: "",
          numberOfEmployees: "",
        });
        
        // Redirect to quiz page after a short delay
        // setTimeout(() => {
        //   router.push('/lban/quiz');
        // }, 1500);
      } else {
        // Handle specific error cases
        const errorMessage = response.data?.error || "Something went wrong. Please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      if (error.response?.status === 409 && error.response?.data?.error?.includes("Email already exists")) {
        toast.error("This email address is already registered. Please use a different email address.");
        // Clear the email field to help user enter a new one
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white flex items-center justify-center px-4 pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#DC143C]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-md w-full">
        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
          {/* Header */}
          <div className="text-center mb-8">
           
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Get Your Free Hiring Ebook
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Learn the essential strategies for building high-performing teams and transform your hiring process with our comprehensive guide.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                Full Name <span className="text-[#DC143C]">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 h-12 bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email Address <span className="text-[#DC143C]">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 h-12 bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <p className="text-xs text-slate-500">
                We'll send the Hiring Ebook to this email address
              </p>
            </div>

            {/* Company Name Field */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium text-slate-700">
                Company Name <span className="text-[#DC143C]">*</span>
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="pl-10 h-12 bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            {/* Number of Employees Field */}
            <div className="space-y-2">
              <Label htmlFor="numberOfEmployees" className="text-sm font-medium text-slate-700">
                Number of Employees <span className="text-[#DC143C]">*</span>
              </Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 z-10" />
                <Select
                  value={formData.numberOfEmployees}
                  onValueChange={handleSelectChange}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="pl-10 h-12 bg-white border-slate-300 text-slate-900 focus:border-[#DC143C] focus:ring-[#DC143C] rounded-lg">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-300">
                    <SelectItem value="1-10" className="text-slate-900 hover:bg-slate-100">Stage 1: 1-10 employees</SelectItem>
                    <SelectItem value="11-19" className="text-slate-900 hover:bg-slate-100">Stage 2: 11-19 employees</SelectItem>
                    <SelectItem value="20-34" className="text-slate-900 hover:bg-slate-100">Stage 3: 20-34 employees</SelectItem>
                    <SelectItem value="35-57" className="text-slate-900 hover:bg-slate-100">Stage 4: 35-57 employees</SelectItem>
                    <SelectItem value="58-95" className="text-slate-900 hover:bg-slate-100">Stage 5: 58-95 employees</SelectItem>
                    <SelectItem value="96-160" className="text-slate-900 hover:bg-slate-100">Stage 6: 96-160 employees</SelectItem>
                    <SelectItem value="161-500" className="text-slate-900 hover:bg-slate-100">Stage 7: 161-500 employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-slate-500">
                Help us understand your company size for better insights
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-base font-semibold bg-[#DC143C] hover:bg-[#B00000] text-white shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending Ebook...
                </>
              ) : (
                <>
           
                  Next
                  <ArrowRight className="mr-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-[#DC143C] font-semibold text-center leading-relaxed">
              Please provide your correct email address as we will send you the Hiring Ebook directly to your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringEbookForm;