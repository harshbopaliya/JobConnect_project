import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  MapPin,
  Users,
  Star,
  Globe,
  Clock,
  Briefcase,
  DollarSign,
  Calendar,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const CompanyDetail = () => {
  const { id } = useParams();

  // In a real app, this would fetch company details from an API
  const company = {
    id: parseInt(id || "1"),
    name: "TechCorp Solutions",
    industry: "Information Technology",
    description:
      "TechCorp Solutions is a leading technology company specializing in web and mobile application development. We work with clients from startups to Fortune 500 companies, delivering high-quality software solutions. Founded in 2010, our team of experts is passionate about creating innovative products that solve real-world problems.",
    mission:
      "Our mission is to transform businesses through technology and deliver exceptional digital experiences that drive growth and success for our clients.",
    location: "San Francisco, CA",
    employeeCount: "1000-5000",
    founded: "2010",
    website: "https://techcorpsolutions.com",
    email: "careers@techcorpsolutions.com",
    rating: 4.7,
    reviews: 245,
    benefits: [
      "Competitive salary and equity packages",
      "Health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible work hours and remote options",
      "Professional development stipend",
      "Generous paid time off",
      "Parental leave",
      "Company retreats and team building events",
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative teams with flat hierarchy",
      "Emphasis on work-life balance",
      "Continuous learning and growth",
      "Diversity and inclusion as core values",
    ],
    jobs: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120K - $150K",
        posted: "2 days ago",
        isRemote: true,
      },
      {
        id: 2,
        title: "Backend Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130K - $160K",
        posted: "3 days ago",
        isRemote: false,
      },
      {
        id: 3,
        title: "Product Manager",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$110K - $140K",
        posted: "1 week ago",
        isRemote: false,
      },
      {
        id: 4,
        title: "DevOps Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$125K - $155K",
        posted: "5 days ago",
        isRemote: true,
      },
    ],
    logo: "https://via.placeholder.com/80",
    coverImage: "https://via.placeholder.com/1200x300",
    socialMedia: {
      facebook: "https://facebook.com/techcorp",
      twitter: "https://twitter.com/techcorp",
      linkedin: "https://linkedin.com/company/techcorp",
      instagram: "https://instagram.com/techcorp",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-jobconnect-navy py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-white mb-4">
            <Link to="/companies" className="hover:underline">
              Companies
            </Link>
            <span className="mx-2">/</span>
            <span className="opacity-80">{company.name}</span>
          </div>
        </div>
      </div>

      {/* Company Cover Image + Logo */}
      <div className="bg-gray-200 h-52 md:h-64 lg:h-80 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div className="bg-white py-6 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end">
            <div className="bg-white p-3 rounded-lg shadow-lg -mt-20 mr-6 z-10">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-md">
                <Building className="h-12 w-12 text-jobconnect-navy" />
              </div>
            </div>

            <div className="flex-grow mt-4 md:mt-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{company.name}</h1>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3">{company.industry}</span>
                    <div className="flex items-center">
                      <Star size={16} className="mr-1 text-yellow-500" />
                      <span>
                        {company.rating} ({company.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex space-x-3">
                  <a
                    href={company.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin size={18} />
                    </Button>
                  </a>
                  <a
                    href={company.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter size={18} />
                    </Button>
                  </a>
                  <a
                    href={company.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook size={18} />
                    </Button>
                  </a>
                  <a
                    href={company.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram size={18} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="jobs">Open Jobs</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits & Culture</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">
                        About {company.name}
                      </h2>
                      <p className="text-gray-700 mb-6">
                        {company.description}
                      </p>

                      <h3 className="text-lg font-semibold mb-3">
                        Our Mission
                      </h3>
                      <p className="text-gray-700 mb-6">{company.mission}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="flex flex-col space-y-6">
                          <div className="flex items-start">
                            <MapPin
                              size={18}
                              className="mr-3 mt-1 text-jobconnect-teal"
                            />
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-gray-600">
                                {company.location}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Users
                              size={18}
                              className="mr-3 mt-1 text-jobconnect-teal"
                            />
                            <div>
                              <p className="font-medium">Company Size</p>
                              <p className="text-gray-600">
                                {company.employeeCount} employees
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-6">
                          <div className="flex items-start">
                            <Globe
                              size={18}
                              className="mr-3 mt-1 text-jobconnect-teal"
                            />
                            <div>
                              <p className="font-medium">Website</p>
                              <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-jobconnect-teal hover:underline"
                              >
                                {company.website.replace("https://", "")}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Calendar
                              size={18}
                              className="mr-3 mt-1 text-jobconnect-teal"
                            />
                            <div>
                              <p className="font-medium">Founded</p>
                              <p className="text-gray-600">{company.founded}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="jobs">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-6">
                        Open Positions at {company.name}
                      </h2>

                      <div className="space-y-4">
                        {company.jobs.map((job) => (
                          <Card
                            key={job.id}
                            className="overflow-hidden hover:shadow-md transition-shadow"
                          >
                            <CardContent className="p-0">
                              <div className="flex flex-col md:flex-row border-l-4 border-jobconnect-teal">
                                <div className="flex-grow p-4">
                                  <Link
                                    to={`/jobs/${job.id}`}
                                    className="text-lg font-semibold hover:text-jobconnect-teal transition-colors"
                                  >
                                    {job.title}
                                  </Link>

                                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 mt-2">
                                    <div className="flex items-center">
                                      <MapPin
                                        size={14}
                                        className="mr-1 text-jobconnect-teal"
                                      />
                                      <span>{job.location}</span>
                                      {job.isRemote && (
                                        <Badge
                                          variant="outline"
                                          className="ml-2 bg-green-50 text-green-600 border-green-200"
                                        >
                                          Remote
                                        </Badge>
                                      )}
                                    </div>

                                    <div className="flex items-center">
                                      <DollarSign
                                        size={14}
                                        className="mr-1 text-jobconnect-teal"
                                      />
                                      <span>{job.salary}</span>
                                    </div>

                                    <div className="flex items-center">
                                      <Briefcase
                                        size={14}
                                        className="mr-1 text-jobconnect-teal"
                                      />
                                      <span>{job.type}</span>
                                    </div>

                                    <div className="flex items-center">
                                      <Clock
                                        size={14}
                                        className="mr-1 text-jobconnect-teal"
                                      />
                                      <span>Posted {job.posted}</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center justify-end p-4 bg-gray-50">
                                  <Link to={`/jobs/${job.id}`}>
                                    <Button className="bg-jobconnect-navy">
                                      View Job
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="benefits">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">
                          Benefits & Perks
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {company.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start">
                              <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">
                          Company Culture
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {company.culture.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Company Overview
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Industry</span>
                      <span className="font-medium">{company.industry}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Company size</span>
                      <span className="font-medium">
                        {company.employeeCount}
                      </span>
                    </div>

                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Founded</span>
                      <span className="font-medium">{company.founded}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Open jobs</span>
                      <span className="font-medium">{company.jobs.length}</span>
                    </div>

                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center">
                        <Star size={16} className="mr-1 text-yellow-500" />
                        <span className="font-medium">{company.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Globe
                        size={18}
                        className="mr-3 mt-1 text-jobconnect-teal"
                      />
                      <div>
                        <p className="font-medium">Website</p>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-jobconnect-teal hover:underline"
                        >
                          {company.website.replace("https://", "")}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail
                        size={18}
                        className="mr-3 mt-1 text-jobconnect-teal"
                      />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href={`mailto:${company.email}`}
                          className="text-jobconnect-teal hover:underline"
                        >
                          {company.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin
                        size={18}
                        className="mr-3 mt-1 text-jobconnect-teal"
                      />
                      <div>
                        <p className="font-medium">Location</p>
                        <p>{company.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-jobconnect-navy">
                      Browse All Jobs
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

export default CompanyDetail;
