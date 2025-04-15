
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, DollarSign, Building, Bookmark } from 'lucide-react';

// Sample job data (in a real app, this would come from an API)
const featuredJobs = [
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
  {
    id: 2,
    title: "UX/UI Designer",
    company: "Creative Designs Inc.",
    location: "New York, NY",
    salary: "$90K - $110K",
    type: "Full-time",
    posted: "3 days ago",
    logo: "https://via.placeholder.com/40",
    isRemote: false,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Austin, TX",
    salary: "$130K - $160K",
    type: "Full-time",
    posted: "1 day ago",
    logo: "https://via.placeholder.com/40",
    isRemote: true,
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Innovative Products",
    location: "Seattle, WA",
    salary: "$110K - $140K",
    type: "Full-time",
    posted: "5 days ago",
    logo: "https://via.placeholder.com/40",
    isRemote: false,
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-jobconnect-lightgray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">Featured Job Opportunities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover top opportunities from leading companies. These featured positions are updated regularly to bring you the best opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="job-card group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-jobconnect-navy" />
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-jobconnect-orange">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-jobconnect-navy transition-colors">
                  <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4">{job.company}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
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
              </CardContent>
              
              <CardFooter className="bg-gray-50 px-6 py-3">
                <Link to={`/jobs/${job.id}`} className="w-full">
                  <Button variant="outline" className="w-full border-jobconnect-teal text-jobconnect-navy hover:bg-jobconnect-teal hover:text-white">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/jobs">
            <Button className="bg-jobconnect-navy hover:bg-opacity-90">
              Browse All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
