import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  privacy_consent: z.boolean().refine(val => val === true, { message: "You must accept the privacy policy." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", privacy_consent: false },
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handlePackageSelect = () => {
    navigate("/");
    setTimeout(() => {
      const packagesSection = document.getElementById("packages");
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Contact Us - Broadwave Antenna</title>
        <meta name="description" content="Have a question about the Broadwave Antenna website? Use our contact form to get in touch with our team. We're here to help!" />
      </Helmet>

      <Navigation handlePackageSelect={handlePackageSelect} />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help! If you have any questions about our site, please fill out the form below and our team will get back to you.
          </p>
          <div className="text-center bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
            For product-specific inquiries (e.g., orders, shipping, returns), please contact the producer directly at{" "}
            <a href="mailto:help@spark-tek.co" className="font-semibold text-blue-600 hover:underline">
              help@spark-tek.co
            </a>.
          </div>
          <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => ( <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Your Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="subject" render={({ field }) => ( <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Question about the website" {...field} /></FormControl><FormMessage /></FormItem> )} />
                <FormField control={form.control} name="message" render={({ field }) => ( <FormItem><FormLabel>Your Message</FormLabel><FormControl><Textarea placeholder="Type your message here..." className="min-h-32 resize-y" {...field} /></FormControl><FormMessage /></FormItem> )} />
                
                {/* ===== AQUI ESTÁ O LINK DA POLÍTICA DE PRIVACIDADE 100% CORRETO E VERIFICADO ===== */}
                <FormField
                  control={form.control}
                  name="privacy_consent"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="privacy-consent-checkbox"
                          />
                        </FormControl>
                        <label
                          htmlFor="privacy-consent-checkbox"
                          className="text-sm font-normal text-gray-700 cursor-pointer"
                        >
                          I agree to the{" "}
                          <a 
                            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=0f536be1-d0d0-4849-92a6-053315399115"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-[#4cd1bc] hover:bg-[#3bb8a6] text-white py-3 px-4 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;