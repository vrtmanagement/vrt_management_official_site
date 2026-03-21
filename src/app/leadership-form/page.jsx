// "use client";

// import { useMemo, useState } from "react";
// import axios from "axios";
// import { Loader2, Mail, User, Building2, Users, Globe, CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const EMPLOYEE_OPTIONS = [
//   "Stage 1: 1-10 employees",
//   "Stage 2: 11-19 employees",
//   "Stage 3: 20-34 employees",
//   "Stage 4: 35-57 employees",
//   "Stage 5: 58-95 employees",
//   "Stage 6: 96-160 employees",
//   "Stage 7: 161-500 employees",
// ];

// const EMPTY_FORM = {
//   name: "",
//   email: "",
//   companyName: "",
//   numberOfEmployees: "",
//   website: "",
// };

// const MAX_LEN = 40;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const NAME_START_REGEX = /^[A-Za-z]/;

// export default function LeadershipFormPage() {
//   const [formData, setFormData] = useState(EMPTY_FORM);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const canSubmit = useMemo(() => !isSubmitting, [isSubmitting]);

//   const validateField = (key, value) => {
//     const trimmed = String(value || "").trim();

//     if (key === "name") {
//       if (!trimmed) return "Full name is required.";
//       if (!NAME_START_REGEX.test(trimmed)) {
//         return "Name should not start with special characters or numbers.";
//       }
//       if (trimmed.length > MAX_LEN) return "Upto 40 characters only.";
//     }

//     if (key === "email") {
//       if (!trimmed) return "Email address is required.";
//       if (trimmed.length > MAX_LEN) return "Upto 40 characters only.";
//       if (!trimmed.includes("@") || !EMAIL_REGEX.test(trimmed)) {
//         return "Please enter a valid email address with @ symbol.";
//       }
//     }

//     if (key === "companyName") {
//       if (!trimmed) return "Company name is required.";
//       if (trimmed.length > MAX_LEN) return "Upto 40 characters only.";
//     }

//     if (key === "numberOfEmployees") {
//       if (!trimmed) return "Number of employees is required.";
//       if (!EMPLOYEE_OPTIONS.includes(trimmed)) return "Please select a valid employee stage.";
//     }

//     return "";
//   };

//   const validateForm = () => {
//     const nextErrors = {
//       name: validateField("name", formData.name),
//       email: validateField("email", formData.email),
//       companyName: validateField("companyName", formData.companyName),
//       numberOfEmployees: validateField("numberOfEmployees", formData.numberOfEmployees),
//     };

//     setErrors(nextErrors);
//     return !Object.values(nextErrors).some(Boolean);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     if (["name", "email", "companyName"].includes(name) && value.length > MAX_LEN) {
//       setErrors((prev) => ({ ...prev, [name]: "Upto 40 characters only." }));
//       return;
//     }

//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleEmployeesChange = (value) => {
//     setFormData((prev) => ({ ...prev, numberOfEmployees: value }));
//     setErrors((prev) => ({ ...prev, numberOfEmployees: validateField("numberOfEmployees", value) }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     try {
//       const response = await axios.post("/api/leadership-form", formData);
//       if (response.status === 201) {
//         setIsSubmitted(true);
//         setFormData(EMPTY_FORM);
//         setErrors({});
//       }
//     } catch (error) {
//       const status = error?.response?.status;
//       const message = error?.response?.data?.error || "Something went wrong. Please try again.";

//       if (status === 409) {
//         setErrors((prev) => ({ ...prev, email: "Email already in use." }));
//       } else if (message.toLowerCase().includes("email")) {
//         setErrors((prev) => ({ ...prev, email: message }));
//       } else {
//         setErrors((prev) => ({ ...prev, form: message }));
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] px-4 py-16 md:py-24">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-16 right-10 h-48 w-48 md:h-80 md:w-80 rounded-full bg-[#DC143C]/10 blur-3xl" />
//         <div className="absolute bottom-8 left-8 h-48 w-48 md:h-96 md:w-96 rounded-full bg-slate-200/40 blur-3xl" />
//       </div>

//       <div className="relative mx-auto w-full max-w-3xl">
//         <div className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.2)] backdrop-blur-xl">
//           {isSubmitted ? (
//             <div className="p-8 md:p-12 text-center">
//               <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
//                 <CheckCircle2 className="h-10 w-10 text-green-600" />
//               </div>
//               <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Submission Successful</h1>
//               <p className="mt-3 text-slate-600">
//                 Thank you for submitting the Leadership Registration Form.
//               </p>
//               <p className="mt-2 text-slate-600">
//                 We have sent a confirmation email and the Hiring Ebook PDF to your email address.
//               </p>
//             </div>
//           ) : (
//             <div className="p-6 md:p-10">
//               <div className="mb-8">
//                 <h1 className="inline-flex rounded-full border border-[#DC143C]/30 bg-[#DC143C]/10 px-4 py-2 text-lg md:text-xl font-semibold uppercase tracking-wide text-[#DC143C]">
//                   Leadership Form
//                 </h1>
//               </div>

//               <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                 <div className="md:col-span-1">
//                   <Label htmlFor="name" className="text-slate-800">
//                     Full Name <span className="text-red-600">*</span>
//                   </Label>
//                   <div className="relative mt-2">
//                     <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Enter your full name"
//                       className="h-12 rounded-xl border-slate-300 pl-10 focus-visible:ring-[#DC143C]"
//                       disabled={!canSubmit}
//                     />
//                   </div>
//                   {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
//                 </div>

//                 <div className="md:col-span-1">
//                   <Label htmlFor="email" className="text-slate-800">
//                     Email Address <span className="text-red-600">*</span>
//                   </Label>
//                   <div className="relative mt-2">
//                     <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Enter your email address"
//                       className="h-12 rounded-xl border-slate-300 pl-10 focus-visible:ring-[#DC143C]"
//                       disabled={!canSubmit}
//                     />
//                   </div>
//                   <p className="mt-1 text-xs text-slate-500">
//                     Give your correct email address, we&apos;ll share leadership form to this email.
//                   </p>
//                   {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
//                 </div>

//                 <div className="md:col-span-1">
//                   <Label htmlFor="companyName" className="text-slate-800">
//                     Company Name <span className="text-red-600">*</span>
//                   </Label>
//                   <div className="relative mt-2">
//                     <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//                     <Input
//                       id="companyName"
//                       name="companyName"
//                       value={formData.companyName}
//                       onChange={handleInputChange}
//                       placeholder="Enter your company name"
//                       className="h-12 rounded-xl border-slate-300 pl-10 focus-visible:ring-[#DC143C]"
//                       disabled={!canSubmit}
//                     />
//                   </div>
//                   {errors.companyName ? (
//                     <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
//                   ) : null}
//                 </div>

//                 <div className="md:col-span-1">
//                   <Label htmlFor="numberOfEmployees" className="text-slate-800">
//                     Number of Employees <span className="text-red-600">*</span>
//                   </Label>
//                   <div className="relative mt-2">
//                     <Users className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />
//                     <Select
//                       value={formData.numberOfEmployees}
//                       onValueChange={handleEmployeesChange}
//                       disabled={!canSubmit}
//                     >
//                       <SelectTrigger className="h-12 rounded-xl border-slate-300 pl-10 focus:ring-[#DC143C]">
//                         <SelectValue placeholder="Select employee stage" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {EMPLOYEE_OPTIONS.map((option) => (
//                           <SelectItem key={option} value={option}>
//                             {option}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   {errors.numberOfEmployees ? (
//                     <p className="mt-1 text-sm text-red-600">{errors.numberOfEmployees}</p>
//                   ) : null}
//                 </div>

//                 <div className="md:col-span-2">
//                   <Label htmlFor="website" className="text-slate-800">
//                     Website (Optional)
//                   </Label>
//                   <div className="relative mt-2">
//                     <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//                     <Input
//                       id="website"
//                       name="website"
//                       value={formData.website}
//                       onChange={handleInputChange}
//                       placeholder="https://yourcompany.com"
//                       className="h-12 rounded-xl border-slate-300 pl-10 focus-visible:ring-[#DC143C]"
//                       disabled={!canSubmit}
//                     />
//                   </div>
//                 </div>

//                 {errors.form ? (
//                   <div className="md:col-span-2">
//                     <p className="text-sm text-red-600">{errors.form}</p>
//                   </div>
//                 ) : null}

//                 <div className="md:col-span-2 pt-2">
//                   <Button
//                     type="submit"
//                     disabled={!canSubmit}
//                     className="h-12 w-full rounded-xl bg-[#DC143C] text-base font-semibold text-white transition hover:bg-[#b50f32]"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                         Submitting...
//                       </>
//                     ) : (
//                       "Submit Leadership Form"
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useMemo, useState } from "react";
import axios from "axios";
import {
  Loader2,
  Mail,
  User,
  Building2,
  Users,
  Globe,
  CheckCircle2,
  Award,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

/** Premium leadership hero — served from `public/ega/leadership/` */
const LEADERSHIP_HERO_BG = "/ega/leadership/business-people-board-room-meeting.jpg";
/** Brand accent — matches reference (crimson red on dark boardroom) */
const ACCENT = "#DC143C";

const EMPLOYEE_OPTIONS = [
  "Stage 1: 1-10 employees",
  "Stage 2: 11-19 employees",
  "Stage 3: 20-34 employees",
  "Stage 4: 35-57 employees",
  "Stage 5: 58-95 employees",
  "Stage 6: 96-160 employees",
  "Stage 7: 161-500 employees",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  companyName: "",
  numberOfEmployees: "",
  website: "",
};

const MAX_LEN = 40;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_START_REGEX = /^[A-Za-z]/;

const BENEFITS = [
  {
    icon: Award,
    title: "Expert Insights",
    desc: "Learn best practices from Rajesh Tedla who has 39+ years of global experience and expertise helping with entrepreneurs and small and medium business owners.",
  },
  {
    icon: TrendingUp,
    title: "Scale faster -Through Masterclass",
    desc: "Fill the details to get invited to Entrepreneur excellence Master class and learn the exact frameworks that take teams from 10 to 500+ without chaos, burnout, or losing culture.",
  },
  {
    icon: BookOpen,
    title: "Your Free E-Book on Leadership",
    desc: "Become the next level leader your team appreciates by learning the best practices in the E book and Entrepreneur excellence masterclass.",
  },
];

export default function LeadershipFormPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = useMemo(() => !isSubmitting, [isSubmitting]);

  const validateField = (key, value) => {
    const trimmed = String(value || "").trim();
    if (key === "name") {
      if (!trimmed) return "Full name is required.";
      if (!NAME_START_REGEX.test(trimmed))
        return "Name should not start with special characters or numbers.";
      if (trimmed.length > MAX_LEN) return "Upto 40 characters only.";
    }
    if (key === "email") {
      if (!trimmed) return "Email address is required.";
      if (trimmed.length > MAX_LEN) return "Upto 40 characters only.";
      if (!trimmed.includes("@") || !EMAIL_REGEX.test(trimmed))
        return "Please enter a valid email address with @ symbol.";
    }
    if (key === "companyName") {
      if (!trimmed) return "Company name is required.";
      if (trimmed.length > MAX_LEN) return "Upto 40 characters only.";
    }
    if (key === "numberOfEmployees") {
      if (!trimmed) return "Number of employees is required.";
      if (!EMPLOYEE_OPTIONS.includes(trimmed))
        return "Please select a valid employee stage.";
    }
    return "";
  };

  const validateForm = () => {
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      companyName: validateField("companyName", formData.companyName),
      numberOfEmployees: validateField(
        "numberOfEmployees",
        formData.numberOfEmployees
      ),
    };
    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (
      ["name", "email", "companyName"].includes(name) &&
      value.length > MAX_LEN
    ) {
      setErrors((prev) => ({ ...prev, [name]: "Upto 40 characters only." }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleEmployeesChange = (value) => {
    setFormData((prev) => ({ ...prev, numberOfEmployees: value }));
    setErrors((prev) => ({
      ...prev,
      numberOfEmployees: validateField("numberOfEmployees", value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/leadership-form", formData);
      if (response.status === 201) {
        setIsSubmitted(true);
        setFormData(EMPTY_FORM);
        setErrors({});
      }
    } catch (error) {
      const status = error?.response?.status;
      const message =
        error?.response?.data?.error ||
        "Something went wrong. Please try again.";
      if (status === 409) {
        setErrors((prev) => ({ ...prev, email: "Email already in use." }));
      } else if (message.toLowerCase().includes("email")) {
        setErrors((prev) => ({ ...prev, email: message }));
      } else {
        setErrors((prev) => ({ ...prev, form: message }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
    }),
  };

  const inputClass =
    "pl-10 h-11 rounded-xl border-gray-300 bg-white text-black placeholder:text-gray-500 focus-visible:border-[#DC143C]/50 focus-visible:ring-[#DC143C]/25";

    if (isSubmitted) {
      return (
        <div className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-[#f9fafb] px-4 py-4 md:py-6 mt-10">
          {/* Soft background accents */}
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_40%)]" />

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative w-full max-w-3xl rounded-3xl border border-emerald-500/25 bg-white p-5 shadow-[0_24px_80px_rgba(16,185,129,0.12)] md:p-7"
          >
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

            {/* Success Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white shadow-[0_10px_24px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>

            {/* Heading */}
            <h1 className="text-center text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
              Thank you for submitting the{" "}
              <span className="text-[#DC143C]">Leadership form!</span>
            </h1>

            {/* Main Message */}
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
              Your decision to take this step speaks volumes about your ambition and your commitment to growth. Among countless people who think about leveling up, you choose to act and that's exactly what sets true entrepreneurs apart.
            </p>

            {/* Info Section */}
            <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-4">
              <p className="text-base font-medium text-gray-900 md:text-lg">
                You will receive the following in your email within{" "}
                <span className="font-semibold text-[#DC143C]">24–48 hours</span>:
              </p>

              {/* List with icons */}
              <div className="mt-3 space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-[#DC143C]/10 p-1.5">
                    <BookOpen className="h-5 w-5 text-[#DC143C]" />
                  </div>
                  <p className="text-base text-gray-700 md:text-lg">
                    Entrepreneur Excellence e-book on Leadership
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-[#DC143C]/10 p-1.5">
                    <Award className="h-5 w-5 text-[#DC143C]" />
                  </div>
                  <p className="text-base text-gray-700 md:text-lg">
                    Entrepreneur Excellence Masterclass registration link
                  </p>
                </div>
              </div>
            </div>

            {/* Closing text */}
            <p className="mt-4 text-base text-gray-700 md:text-lg">
              Please keep an eye on your email inbox for the details.
            </p>

            <p className="mt-2 text-base font-medium text-gray-900 md:text-lg">
              We look forward to supporting your growth as an entrepreneur.
            </p>
          </motion.div>
        </div>
      );
    }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-black">
      {/* Background image removed per request
      <img
        src={LEADERSHIP_HERO_BG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/52 via-black/35 to-black/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-[#DC143C]/10 to-black/15"
        aria-hidden
      />
      */}

      {/* Centered layout: LEFT copy · RIGHT form */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full  items-center justify-center px-4 pt-20 lg:pt-24">
      <div className="grid w-full max-w-7xl mx-auto grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center justify-items-center gap-10 lg:gap-12">
          {/* ───── Left: marketing content ───── */}
          <div className="order-1 flex w-full justify-center lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DC143C]/40 bg-white px-4 py-1.5 text-sm font-semibold text-black shadow-md">
                <Award className="h-4 w-4 text-[#DC143C]" />
                Leadership Program
              </span>

              <h1 className="mb-4 text-4xl md:text-5xl xl:text-[3.25rem] font-black leading-[1.1] tracking-tight text-black">
                Stop Leading <span className="text-red-600 italic">on Instinct.</span>{" "}
                <span className="md:whitespace-nowrap">
                  Start Leading{" "}
                  <span className="text-red-600 italic">with Precision.</span>
                </span>
              </h1>

              <p className="mb-6 text-lg md:text-xl text-black font-medium">
                Entrepreneurs who scale aren't smarter, they're better
                equipped. Join 1,424+ Businesses who stopped guessing and
                started growing their organizations with a proven leadership
                framework and tools built for real-world results.
              </p>

              <div className="mb-8 space-y-4 text-left">
                {BENEFITS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#DC143C]/35 bg-[#DC143C]/20 shadow-md backdrop-blur-sm">
                      <item.icon className="h-5 w-5 text-[#DC143C]" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-black">
                        {item.title}
                      </h2>
                      <p className="text-md text-black font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ───── Right: form (centered in column) ───── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
           className="order-2 flex w-full justify-center lg:order-2"
          >
         <div className="mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] lg:max-w-none">
            <div
              className="h-1.5 bg-gradient-to-r from-[#DC143C] via-[#ff3355] to-[#8b0000] shadow-[0_0_24px_rgba(220,20,60,0.45)]"
              style={{ boxShadow: `0 0 28px ${ACCENT}55` }}
            />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="p-10 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-black">
                    Submission Successful
                  </h2>
                  <p className="leading-relaxed text-black">
                    Thank you for submitting the Leadership Registration Form.
                  </p>
                  <p className="mt-2 leading-relaxed text-black">
                    You will receive a masterclass invite link along with the
                    leadership document.
                  </p>
                </motion.div>
              ) : (
                <div className="p-2.5 sm:px-10">
                  <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mb-4 text-center"
                  >
                    <h2 className="text-2xl font-bold tracking-tight text-black">
                      Register Now
                    </h2>
                    <p className="mt-1 text-sm text-black">
                      Fill in your details to get started
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <motion.div
                      custom={1}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <Label
                        htmlFor="name"
                        className="mb-1.5 block text-md font-medium text-black"
                      >
                        Full Name <span className="text-[#DC143C]">*</span>
                      </Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={inputClass}
                          disabled={!canSubmit}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      custom={2}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <Label
                        htmlFor="email"
                        className="mb-1.5 block text-md font-medium text-black"
                      >
                        Official Email Address <span className="text-[#DC143C]">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClass}
                          disabled={!canSubmit}
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Give your correct email address, we&apos;ll share
                        leadership document to this email.
                      </p>
                      {errors.email && (
                        <p className="mt-0.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      custom={3}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <Label className="mb-1.5 block text-md font-medium text-black">
                        Number of Employees{" "}
                        <span className="text-[#DC143C]">*</span>
                      </Label>
                      <div className="relative">
                      <Users className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <Select
                          value={formData.numberOfEmployees}
                          onValueChange={handleEmployeesChange}
                          disabled={!canSubmit}
                        >
                          <SelectTrigger
                            className="w-full min-h-11 h-11 pl-10 rounded-xl border-gray-300 bg-white text-black data-[placeholder]:text-gray-500 focus:ring-2 focus:ring-[#DC143C]/40"
                          >
                            <SelectValue placeholder="Select employee range"   className="text-black" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border-gray-200 bg-white text-black">
                            {EMPLOYEE_OPTIONS.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="rounded-lg focus:bg-gray-100 focus:text-black"
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {errors.numberOfEmployees && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.numberOfEmployees}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      custom={4}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <Label
                        htmlFor="companyName"
                        className="mb-1.5 block text-md font-medium text-black"
                      >
                        Company Name <span className="text-[#DC143C]">*</span>
                      </Label>
                      <div className="relative">
                        <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder="Acme Inc."
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={inputClass}
                          disabled={!canSubmit}
                        />
                      </div>
                      {errors.companyName && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.companyName}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      custom={5}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <Label
                        htmlFor="website"
                        className="mb-1.5 block text-md font-medium text-black"
                      >
                        Website{" "}
                        <span className="font-normal text-black">
                          (Optional)
                        </span>
                      </Label>
                      <div className="relative">
                        <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                        <Input
                          id="website"
                          name="website"
                          placeholder="https://company.com"
                          value={formData.website}
                          onChange={handleInputChange}
                          className={inputClass}
                          disabled={!canSubmit}
                        />
                      </div>
                    </motion.div>

                    {errors.form && (
                      <div className="rounded-xl border border-rose-300/50 bg-rose-500/20 p-3">
                        <p className="text-sm text-red-600">{errors.form}</p>
                      </div>
                    )}

                    <motion.div
                      custom={6}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="pt-1"
                    >
                      <Button
                        type="submit"
                        disabled={!canSubmit}
                        className="h-12 w-full rounded-xl border-0 bg-[#DC143C] text-base font-semibold text-white shadow-[0_10px_30px_rgba(220,20,60,0.35)] hover:bg-[#b01028]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Leadership Form"
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  <p className="mt-3 text-center text-xs text-black">
                    Your information is secure and will never be shared with
                    third parties.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
