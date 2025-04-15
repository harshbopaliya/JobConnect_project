
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-jobconnect-navy to-jobconnect-navy/80 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
      
      <div className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-jobconnect-navy">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select an inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows={6} 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="bg-jobconnect-orange hover:bg-opacity-90">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-jobconnect-navy">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Our Location</p>
                        <p className="text-gray-600">
                          123 Job Street, Career City
                          <br />
                          Opportunity State, 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Phone Number</p>
                        <p className="text-gray-600">
                          <a href="tel:+11234567890" className="hover:text-jobconnect-teal">
                            +1 (123) 456-7890
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Email Address</p>
                        <p className="text-gray-600">
                          <a href="mailto:info@jobconnect.com" className="hover:text-jobconnect-teal">
                            info@jobconnect.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 h-10 w-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="font-medium">Working Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Weekend: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-jobconnect-navy">Frequently Asked Questions</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-jobconnect-navy">How do I create an account?</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        You can create an account by clicking on the "Register" button in the top navigation and following the prompts.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-jobconnect-navy">Is JobConnect free for job seekers?</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Yes, JobConnect is completely free for job seekers to create profiles and apply for jobs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-jobconnect-navy">How do I post a job as an employer?</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Employers can register for an employer account and then access the job posting dashboard to create new listings.
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <Link to="/faq" className="text-jobconnect-teal hover:underline text-sm font-medium">
                        View all FAQs
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
