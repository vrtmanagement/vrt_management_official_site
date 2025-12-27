"use client";

import React, { useState } from 'react';
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
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        companyEmail: "",
        companyName: "",
        numberOfEmployees: "",
        revenue: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        if (!formData.companyEmail.trim()) {
            toast.error("Company email is required");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
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
            
            const response = await axios.post("/api/egaworkshop", {
                fullName: formData.fullName,
                companyEmail: formData.companyEmail,
                companyName: formData.companyName,
                numberOfEmployees: formData.numberOfEmployees,
                revenue: formData.revenue || undefined,
            });
            console.log('formData', formData);
            if (response.status === 201) {
                setIsSubmitted(true);
                toast.success("Thank you! Your information has been submitted successfully.");
            } else {
                const errorMessage = response.data?.error || "Something went wrong. Please try again.";
                toast.error(errorMessage);
            }
        } catch (error) {
            if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Network error. Please check your connection and try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 bg-white relative">
            <div className="max-w-4xl mx-auto px-6">
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-4xl md:text-5xl  text-red-600  mb-4"
                                style={{ fontFamily: "ebgaramond, serif" }}>
                                Let&apos;s discuss your business.
                            </h2>
                            <p className="text-black/60">
                                Fill out the form below to get in touch with us.
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-16 rounded-sm shadow-sm border border-black/10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold tracking-widest text-black/60">
                                    Full Name
                                </Label>
                                <Input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-black/10 p-3 rounded-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                    placeholder="Jane Doe"
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold tracking-widest text-black/60">
                                    Company Name
                                </Label>
                                <Input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-black/10 p-3 rounded-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                    placeholder="Acme Inc"
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-bold  tracking-widest text-black/60">
                                Company Email
                            </Label>
                            <Input
                                type="email"
                                name="companyEmail"
                                value={formData.companyEmail}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-black/10 p-3 rounded-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder="jane@company.com"
                                disabled={isSubmitting}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-bold tracking-widest text-black/60">
                                Number of Employees
                            </Label>
                            <Select
                                value={formData.numberOfEmployees}
                                onValueChange={handleSelectChange}
                                disabled={isSubmitting}
                            >
                                <SelectTrigger className="w-full bg-white border border-black/10 p-3 rounded-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all">
                                    <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-black/10">
                                    <SelectItem value="1-10" className="text-black hover:bg-red-50"> Stage 1: 1-10 employees</SelectItem>
                                    <SelectItem value="11-19" className="text-black hover:bg-red-50"> Stage 2: 11-19 employees</SelectItem>
                                    <SelectItem value="20-34" className="text-black hover:bg-red-50"> Stage 3: 20-34 employees</SelectItem>
                                    <SelectItem value="35-57" className="text-black hover:bg-red-50"> Stage 4: 35-57 employees</SelectItem>
                                    <SelectItem value="58-95" className="text-black hover:bg-red-50"> Stage 5: 58-95 employees</SelectItem>
                                    <SelectItem value="96-160" className="text-black hover:bg-red-50"> Stage 6: 96-160 employees</SelectItem>
                                    <SelectItem value="161-500" className="text-black hover:bg-red-50"> Stage 7: 161-500 employees</SelectItem>
                                    <SelectItem value="500+" className="text-black hover:bg-red-50">500+ employees</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-bold tracking-widest text-black/60">
                                Revenue <span className="text-black/40 font-normal">(Optional)</span>
                            </Label>
                            <Input
                                type="text"
                                name="revenue"
                                value={formData.revenue}
                                onChange={handleInputChange}
                                className="w-full bg-white border border-black/10 p-3 rounded-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder="e.g., $1M - $5M"
                                disabled={isSubmitting}
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-red-600 text-white py-4 rounded-sm font-medium tracking-wide hover:bg-red-700 hover:shadow-lg transition-all"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
                                    Submitting...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                            </Button>
                        </form>
                    </div>
                    </>
                ) : (
                    <div className="bg-white p-8 md:p-16 rounded-sm shadow-sm border border-black/10">
                        <div className="text-center space-y-6">
                            <div className="flex justify-center">
                                <div className="rounded-full bg-red-50 p-4">
                                    <CheckCircle2 className="h-16 w-16 text-red-600" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-serif text-4xl md:text-5xl text-red-600 mb-4"
                                    style={{ fontFamily: "ebgaramond, serif" }}>
                                    Thank You!
                                </h2>
                                <p className="text-black/70 text-lg max-w-2xl mx-auto">
                                    We&apos;ve received your information and will get back to you soon.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;