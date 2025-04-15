import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Search,
  MapPin,
  Briefcase,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

// Sample companies data (in a real app, this would come from an API)
// const companiesData = [
//   {
//     id: 1,
//     name: "TechCorp Solutions",
//     industry: "Information Technology",
//     description: "Leading technology company specializing in web and mobile application development. We work with clients from startups to Fortune 500 companies.",
//     location: "San Francisco, CA",
//     employeeCount: "1000-5000",
//     rating: 4.7,
//     reviews: 245,
//     openJobs: 12,
//     logo: "https://via.placeholder.com/60",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Creative Designs Inc.",
//     industry: "Design & Creative",
//     description: "Award-winning design agency focused on creating beautiful and functional digital experiences for global brands and innovative startups.",
//     location: "New York, NY",
//     employeeCount: "50-200",
//     rating: 4.5,
//     reviews: 126,
//     openJobs: 5,
//     logo: "https://via.placeholder.com/60",
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "Cloud Systems",
//     industry: "Information Technology",
//     description: "Cloud infrastructure and DevOps services provider helping organizations build, deploy, and scale their applications securely and efficiently.",
//     location: "Austin, TX",
//     employeeCount: "500-1000",
//     rating: 4.3,
//     reviews: 187,
//     openJobs: 8,
//     logo: "https://via.placeholder.com/60",
//     featured: false,
//   },
//   {
//     id: 4,
//     name: "Innovative Products",
//     industry: "Product & Project Management",
//     description: "Product development company focused on bringing innovative solutions to market. We combine design thinking with cutting-edge technology.",
//     location: "Seattle, WA",
//     employeeCount: "200-500",
//     rating: 4.6,
//     reviews: 156,
//     openJobs: 6,
//     logo: "https://via.placeholder.com/60",
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "Finance Experts LLC",
//     industry: "Finance & Accounting",
//     description: "Financial services firm providing accounting, tax, and advisory services to businesses and individuals across multiple industries.",
//     location: "Chicago, IL",
//     employeeCount: "200-500",
//     rating: 4.2,
//     reviews: 98,
//     openJobs: 4,
//     logo: "https://via.placeholder.com/60",
//     featured: false,
//   },
//   {
//     id: 6,
//     name: "Health Innovations",
//     industry: "Healthcare",
//     description: "Healthcare technology company developing solutions to improve patient care, optimize clinical workflows, and reduce healthcare costs.",
//     location: "Boston, MA",
//     employeeCount: "1000-5000",
//     rating: 4.4,
//     reviews: 215,
//     openJobs: 10,
//     logo: "https://via.placeholder.com/60",
//     featured: true,
//   },
// ];

interface Company {
  id: string;
  industry_name: string;
  job_count: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  employee_count: string;
  location: string;
  founded_year: string;
  created_at: string;
  updated_at: string;
  industry: string;
}

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(companies);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/companies/");
      if (response.status !== 200) {
        toast.error("Failed to fetch companies");
        return;
      }

      setCompanies(() => response.data as Company[]);
      setFilteredCompanies(() => response.data as Company[]);
      toast.success("Companies fetched successfully");
    };

    fetchData();
  }, []);

  // Filter companies based on current tab and search query
  // const filteredCompanies = companies.filter(company => {
  //   const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //                         company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //                         company.location.toLowerCase().includes(searchQuery.toLowerCase());

  //   if (currentTab === 'featured') {
  //     return matchesSearch && company.featured;
  //   }

  //   return matchesSearch;
  // });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-jobconnect-navy py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Browse Companies
          </h1>
          <p className="text-gray-300 mb-6">
            Discover top employers and explore their open positions
          </p>

          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex-grow p-2">
              <div className="flex items-center px-3">
                <Search size={20} className="text-gray-400 mr-2" />
                <Input
                  type="text"
                  placeholder="Search companies by name, industry, or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 focus-visible:ring-0"
                />
              </div>
            </div>
            <div className="bg-jobconnect-teal p-2">
              <Button className="bg-jobconnect-teal hover:bg-opacity-90 h-full">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="all" onValueChange={setCurrentTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Companies</TabsTrigger>
              <TabsTrigger value="featured">Featured Companies</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCompanies.length <= 0 ? (
                  <div>No Companies Found</div>
                ) : (
                  filteredCompanies.map((company) => (
                    <Card
                      key={company.id}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                            <Building className="h-8 w-8 text-jobconnect-navy" />
                          </div>

                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-semibold hover:text-jobconnect-teal transition-colors">
                                  <Link to={`/companies/${company.id}`}>
                                    {company.name}
                                  </Link>
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {company.industry}
                                </p>
                              </div>

                              {/* {company.featured && (
                                <Badge className="bg-jobconnect-orange border-0">
                                  Featured
                                </Badge>
                              )} */}
                            </div>

                            <p className="text-gray-600 my-3 line-clamp-2">
                              {company.description}
                            </p>

                            <div className="grid grid-cols-2 gap-y-2 text-sm mt-4">
                              <div className="flex items-center">
                                <MapPin
                                  size={16}
                                  className="mr-2 text-jobconnect-teal"
                                />
                                <span>{company.location}</span>
                              </div>

                              <div className="flex items-center">
                                <Users
                                  size={16}
                                  className="mr-2 text-jobconnect-teal"
                                />
                                <span>{company.employee_count} employees</span>
                              </div>

                              {/* <div className="flex items-center">
                                <Star
                                  size={16}
                                  className="mr-2 text-jobconnect-teal"
                                />
                                <span>
                                  {company.rating} ({company.reviews} reviews)
                                </span>
                              </div> */}

                              <div className="flex items-center">
                                <Briefcase
                                  size={16}
                                  className="mr-2 text-jobconnect-teal"
                                />
                                <span>{company.job_count} open positions</span>
                              </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                              <Link to={`/companies/${company.id}`}>
                                <Button
                                  variant="outline"
                                  className="text-jobconnect-navy border-jobconnect-teal hover:bg-jobconnect-teal hover:text-white"
                                >
                                  View Profile{" "}
                                  <ArrowRight size={16} className="ml-2" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {filteredCompanies.length === 0 && (
                <div className="text-center py-10">
                  <Building size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    No companies found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or browse all companies
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="featured">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCompanies.map((company) => (
                  <Card
                    key={company.id}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                          <Building className="h-8 w-8 text-jobconnect-navy" />
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold hover:text-jobconnect-teal transition-colors">
                                <Link to={`/companies/${company.id}`}>
                                  {company.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-600">
                                {company.industry}
                              </p>
                            </div>

                            {/* {company.featured && ( <Badge className="bg-jobconnect-orange border-0">
                                Featured
                              </Badge>
                            )} */}
                          </div>

                          <p className="text-gray-600 my-3 line-clamp-2">
                            {company.description}
                          </p>

                          <div className="grid grid-cols-2 gap-y-2 text-sm mt-4">
                            <div className="flex items-center">
                              <MapPin
                                size={16}
                                className="mr-2 text-jobconnect-teal"
                              />
                              <span>{company.location}</span>
                            </div>

                            <div className="flex items-center">
                              <Users
                                size={16}
                                className="mr-2 text-jobconnect-teal"
                              />
                              <span>{company.employee_count} employees</span>
                            </div>

                            {/* <div className="flex items-center">
                              <Star
                                size={16}
                                className="mr-2 text-jobconnect-teal"
                              />
                              <span>
                                {company.} ({company.reviews} reviews)
                              </span>
                            </div> */}

                            <div className="flex items-center">
                              <Briefcase
                                size={16}
                                className="mr-2 text-jobconnect-teal"
                              />
                              <span>{company.job_count} open positions</span>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-end">
                            <Link to={`/companies/${company.id}`}>
                              <Button
                                variant="outline"
                                className="text-jobconnect-navy border-jobconnect-teal hover:bg-jobconnect-teal hover:text-white"
                              >
                                View Profile{" "}
                                <ArrowRight size={16} className="ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredCompanies.length === 0 && (
                <div className="text-center py-10">
                  <Building size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    No featured companies found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or browse all companies
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Companies;
