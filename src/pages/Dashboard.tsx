import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Building,
  Bookmark,
  Filter,
  LogOut,
} from "lucide-react";

// Sample job data (replace this with API call if needed)
const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$120K - $150K",
    type: "Full-time",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40",
    isRemote: true,
  },
  // Add more jobs here...
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-jobconnect-navy">
            JobConnect
          </Link>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-jobconnect-navy py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4 text-white">Dashboard</h1>
          <p className="text-gray-300 mb-6">
            Find your next opportunity from our extensive job listings
          </p>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-2">
                <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
                  <Search size={20} className="text-gray-400 mr-2" />
                  <Input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 p-0 focus-visible:ring-0 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
                  <MapPin size={20} className="text-gray-400 mr-2" />
                  <Input
                    type="text"
                    placeholder="City, state, or remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-0 p-0 focus-visible:ring-0 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="border rounded bg-gray-50">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-4">
                <Button className="w-full bg-jobconnect-orange hover:bg-opacity-90">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">
              Found {jobListings.length} jobs
            </h2>
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" /> Filter
            </Button>
          </div>

          <div className="space-y-4">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                      <Building className="h-6 w-6 text-jobconnect-navy" />
                    </div>

                    <div className="flex-grow md:mr-6">
                      <Link
                        to={`/jobs/${job.id}`}
                        className="text-xl font-semibold hover:text-jobconnect-teal transition-colors"
                      >
                        {job.title}
                      </Link>
                      <p className="text-gray-600 mb-2">{job.company}</p>

                      <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 mt-3">
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

                    <div className="flex items-center mt-4 md:mt-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-jobconnect-orange mr-2"
                      >
                        <Bookmark className="h-5 w-5" />
                      </Button>
                      <Link to={`/jobs/${job.id}`}>
                        <Button className="bg-jobconnect-navy">View Job</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button
              variant="outline"
              className="mx-1 bg-jobconnect-navy text-white"
            >
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
