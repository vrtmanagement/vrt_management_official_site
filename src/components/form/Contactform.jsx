"use client";

import { useState } from "react";
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
import { Loader2, User, Mail, Building2, Users, Globe } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    numberOfEmployees: "",
    website: "",
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
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
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
      const response = await axios.post("/api/egaform", {
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        numberOfEmployees: formData.numberOfEmployees,
        website: formData.website || undefined,
      });

      if (response.status === 201) {
        toast.success("Thank you! Your information has been submitted successfully.");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          numberOfEmployees: "",
          website: "",
        });
      } else {
        // Handle specific error cases
        const errorMessage = response.data?.error || "Something went wrong. Please try again.";

        // Check if it's a duplicate email error
        if (response.status === 409 && errorMessage.includes("Email already exists")) {
          toast.error("This email address is already registered. Please use a different email address.");
          // Clear the email field to help user enter a new one
          setFormData(prev => ({ ...prev, email: "" }));
        } else {
          toast.error(errorMessage);
        }
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
    <div className="w-full bg-white rounded-xl shadow-2xl p-8 border border-gray-200 h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h2>
        <p className="text-gray-600">Join our exclusive program and transform your business</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="pl-10 h-11 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 h-11 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
            Company Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Acme Inc"
              value={formData.companyName}
              onChange={handleInputChange}
              className="pl-10 h-11 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
              disabled={isSubmitting}
            />
          </div>
        </div>


        <div className="space-y-2">
          <Label htmlFor="numberOfEmployees" className="text-sm font-medium text-gray-700">
            Number of Employees <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <Select
              value={formData.numberOfEmployees}
              onValueChange={handleSelectChange}
              disabled={isSubmitting}
            >
              <SelectTrigger className="pl-10 h-11 bg-white border-gray-300 text-gray-900 focus:border-red-500 focus:ring-red-500">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="1-10" className="text-gray-900 hover:bg-gray-100">Stage 1: 1-10 employees</SelectItem>
                <SelectItem value="11-19" className="text-gray-900 hover:bg-gray-100">Stage 2: 11-19 employees</SelectItem>
                <SelectItem value="20-34" className="text-gray-900 hover:bg-gray-100">Stage 3: 20-34 employees</SelectItem>
                <SelectItem value="35-57" className="text-gray-900 hover:bg-gray-100">Stage 4: 35-57 employees</SelectItem>
                <SelectItem value="58-95" className="text-gray-900 hover:bg-gray-100">Stage 5: 58-95 employees</SelectItem>
                <SelectItem value="96-160" className="text-gray-900 hover:bg-gray-100">Stage 6: 96-160 employees</SelectItem>
                <SelectItem value="161-500" className="text-gray-900 hover:bg-gray-100">Stage 7: 161-500 employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="text-sm font-medium text-gray-700">
            Website <span className="text-gray-500 text-xs">(Optional)</span>
          </Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://www.company.com"
              value={formData.website}
              onChange={handleInputChange}
              className="pl-10 h-11 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
              disabled={isSubmitting}
            />
          </div>
        </div>


        <div className="mt-auto pt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get Instant Access <span className="ml-2">→</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}