'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactService, ContactFormData } from "@/lib/contact/contact-service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const response = await contactService.submitForm(data);
    
    setIsSubmitting(false);
    if (response.success) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className="border-green-200 bg-green-50 shadow-sm">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received</h3>
          <p className="text-gray-600 max-w-md">
            Thank you for reaching out. We&apos;ve received your project details and will be in touch within 24 hours to schedule a discovery call.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-gray-200 bg-white shadow-xl shadow-gray-200/50">
      <CardContent className="p-8 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
              <Input id="name" placeholder="John Doe" {...register("name", { required: true })} className={errors.name ? "border-red-500" : ""} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" placeholder="john@company.com" {...register("email", { required: true })} className={errors.email ? "border-red-500" : ""} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company / Organization (Optional)</Label>
            <Input id="company" placeholder="Acme Inc." {...register("company")} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val: string | null) => { if(val) setValue("projectType", val as ContactFormData["projectType"]) }} required>
                <SelectTrigger className={errors.projectType ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-web-app">AI Web Application</SelectItem>
                  <SelectItem value="automation">Internal Automation System</SelectItem>
                  <SelectItem value="startup-mvp">Startup MVP Development</SelectItem>
                  <SelectItem value="desktop-app">Desktop Application</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budgetRange">Budget Range <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val: string | null) => { if(val) setValue("budgetRange", val as ContactFormData["budgetRange"]) }} required>
                <SelectTrigger className={errors.budgetRange ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select budget..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Desired Timeline (Optional)</Label>
            <Select onValueChange={(val: string | null) => { if(val) setValue("timeline", val as ContactFormData["timeline"]) }}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP (Urgent)</SelectItem>
                <SelectItem value="1-2-months">1-2 Months</SelectItem>
                <SelectItem value="3-6-months">3-6 Months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description <span className="text-red-500">*</span></Label>
            <Textarea 
              id="description" 
              placeholder="Tell us about your business challenge and what you're looking to build..." 
              className={`min-h-[150px] resize-y ${errors.description ? "border-red-500" : ""}`}
              {...register("description", { required: true })}
            />
          </div>

          {submitStatus === 'error' && (
            <div className="p-4 rounded-md bg-red-50 text-red-600 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm">There was an error submitting your form. Please try again or email us directly.</p>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full h-14 text-base rounded-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
            ) : (
              "Submit Project Inquiry"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
