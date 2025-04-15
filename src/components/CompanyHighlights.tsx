
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Globe, ArrowRight } from 'lucide-react';

// Sample companies (in a real app, this would come from an API)
const companies = [
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Information Technology",
    employees: "1000-5000",
    location: "San Francisco, CA",
    jobCount: 12,
  },
  {
    id: 2,
    name: "Creative Designs Inc.",
    industry: "Design & Creative",
    employees: "50-200",
    location: "New York, NY",
    jobCount: 5,
  },
  {
    id: 3,
    name: "Cloud Systems",
    industry: "Information Technology",
    employees: "500-1000",
    location: "Austin, TX",
    jobCount: 8,
  },
  {
    id: 4,
    name: "Innovative Products",
    industry: "Product & Project Management",
    employees: "200-500",
    location: "Seattle, WA",
    jobCount: 6,
  },
  {
    id: 5,
    name: "Finance Experts LLC",
    industry: "Finance & Accounting",
    employees: "200-500",
    location: "Chicago, IL",
    jobCount: 4,
  },
  {
    id: 6,
    name: "Health Innovations",
    industry: "Healthcare",
    employees: "1000-5000",
    location: "Boston, MA",
    jobCount: 10,
  },
];

const CompanyHighlights = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">Top Hiring Companies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover industry-leading companies actively hiring top talent. Explore their opportunities and find your perfect fit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-jobconnect-teal/10 rounded-full flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-jobconnect-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      <Link to={`/companies/${company.id}`} className="hover:text-jobconnect-teal transition-colors">
                        {company.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500">{company.industry}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start">
                    <Users size={16} className="mr-2 mt-0.5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Company Size</p>
                      <p className="text-sm">{company.employees}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe size={16} className="mr-2 mt-0.5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm">{company.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="bg-jobconnect-teal/10 text-jobconnect-teal px-3 py-1 rounded-full text-sm">
                    {company.jobCount} Open Jobs
                  </div>
                  
                  <Link to={`/companies/${company.id}`} className="text-jobconnect-navy hover:text-jobconnect-teal transition-colors flex items-center text-sm font-medium">
                    View Profile <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/companies">
            <Button className="bg-jobconnect-navy hover:bg-opacity-90">
              View All Companies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
