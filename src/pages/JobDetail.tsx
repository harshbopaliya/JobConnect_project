
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Briefcase, Clock, DollarSign, Building, Bookmark, Share2, Globe, Users, Calendar } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  
  // In a real app, this would fetch job details from an API
  const job = {
    id: parseInt(id || "1"),
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$120K - $150K",
    type: "Full-time",
    posted: "2 days ago",
    deadline: "30 days from now",
    experience: "3-5 years",
    level: "Senior",
    description: "We are looking for a Senior Frontend Developer to join our team. The ideal candidate will have experience with React, TypeScript, and modern frontend development practices.",
    requirements: [
      "3+ years of experience with React and TypeScript",
      "Experience with state management (Redux, Context API, etc.)",
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with responsive design and mobile-first development",
      "Knowledge of frontend build tools and module bundlers",
    ],
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and frontend libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance",
      "Collaborate with the design team to implement visual elements",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "401(k) matching",
    ],
    aboutCompany: "TechCorp Solutions is a leading technology company specializing in web and mobile application development. We work with clients from startups to Fortune 500 companies, delivering high-quality software solutions.",
    companySize: "1000-5000 employees",
    industry: "Information Technology",
    website: "https://techcorpsolutions.com",
    isRemote: true,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-jobconnect-navy py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-white mb-4">
            <Link to="/jobs" className="hover:underline">Browse Jobs</Link>
            <span className="mx-2">/</span>
            <span className="opacity-80">{job.title}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                        <Building className="h-8 w-8 text-jobconnect-navy" />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
                        <Link to={`/companies/${1}`} className="text-jobconnect-teal hover:underline">
                          {job.company}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-jobconnect-teal" />
                      <span>{job.location}</span>
                      {job.isRemote && (
                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 border-green-200">
                          Remote
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-2 text-jobconnect-teal" />
                      <span>{job.salary}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2 text-jobconnect-teal" />
                      <span>{job.type}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-jobconnect-teal" />
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Button className="w-full bg-jobconnect-orange hover:bg-opacity-90 text-lg py-6">
                      Apply Now
                    </Button>
                  </div>
                  
                  <Tabs defaultValue="description">
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="requirements">Requirements</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      <TabsTrigger value="company">Company</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="requirements" className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Experience Level</h4>
                          <p>{job.experience}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Career Level</h4>
                          <p>{job.level}</p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="benefits" className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Benefits & Perks</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.benefits.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="company" className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">About {job.company}</h3>
                        <p className="text-gray-700 mb-4">{job.aboutCompany}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start">
                            <Users size={18} className="mr-3 mt-1 text-jobconnect-teal" />
                            <div>
                              <p className="font-medium">Company Size</p>
                              <p className="text-gray-600">{job.companySize}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Briefcase size={18} className="mr-3 mt-1 text-jobconnect-teal" />
                            <div>
                              <p className="font-medium">Industry</p>
                              <p className="text-gray-600">{job.industry}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Globe size={18} className="mr-3 mt-1 text-jobconnect-teal" />
                            <div>
                              <p className="font-medium">Website</p>
                              <a href={job.website} className="text-jobconnect-teal hover:underline" target="_blank" rel="noopener noreferrer">
                                {job.website.replace('https://', '')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Job Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center mr-3">
                        <Calendar size={18} className="text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Date Posted</p>
                        <p className="font-medium">{job.posted}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center mr-3">
                        <Clock size={18} className="text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Deadline</p>
                        <p className="font-medium">{job.deadline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center mr-3">
                        <Briefcase size={18} className="text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Job Type</p>
                        <p className="font-medium">{job.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-jobconnect-teal/10 flex items-center justify-center mr-3">
                        <DollarSign size={18} className="text-jobconnect-teal" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Salary Range</p>
                        <p className="font-medium">{job.salary}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Share This Job</h3>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Email
                    </Button>
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

export default JobDetail;
