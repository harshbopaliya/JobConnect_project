// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// interface JobApplicantsCount {
//   [jobId: string]: number;
// }

// const EmployerDashboard = () => {
//   const [jobApplicantsCount, setJobApplicantsCount] =
//     useState<JobApplicantsCount>({});
//   const [loading, setLoading] = useState<boolean>(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobApplicantsCount = async () => {
//       try {
//         // Make a request to the employer dashboard API
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_BASE_URL}/api/employer/dashboard/`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//             },
//           }
//         );

//         // Set the response data (applicants count per job)
//         setJobApplicantsCount(response.data.job_applicants_count);
//       } catch (error) {
//         console.error("Error fetching dashboard data", error);
//         // Redirect to login if an error occurs (e.g., token expired)
//         navigate("/login");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobApplicantsCount();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-grow bg-gray-50 py-12">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto">
//             <Card className="border-0 shadow-lg">
//               <CardHeader className="bg-jobconnect-navy text-white rounded-t-lg">
//                 <CardTitle className="text-2xl">Employer Dashboard</CardTitle>
//                 <CardDescription className="text-gray-300">
//                   View the number of applicants for each of your posted jobs.
//                 </CardDescription>
//               </CardHeader>

//               <CardContent>
//                 <div className="space-y-4">
//                   {Object.keys(jobApplicantsCount).length === 0 ? (
//                     <div>No jobs posted yet or no applicants</div>
//                   ) : (
//                     Object.entries(jobApplicantsCount).map(([jobId, count]) => (
//                       <div
//                         key={jobId}
//                         className="flex justify-between items-center"
//                       >
//                         <div>Job ID: {jobId}</div>
//                         <div>{count} Applicants</div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </CardContent>

//               <div className="flex justify-center mb-4">
//                 <Button
//                   onClick={() => navigate("/employer/jobs")}
//                   className="bg-jobconnect-teal text-white hover:bg-jobconnect-teal/90"
//                 >
//                   View All Jobs
//                 </Button>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EmployerDashboard;
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Search,
//   MapPin,
//   Briefcase,
//   Clock,
//   DollarSign,
//   Building,
//   Bookmark,
//   Filter,
//   LogOut,
// } from "lucide-react";

// // Sample job data (replace this with API call if needed)
// const jobListings = [
//   {
//     id: 1,
//     title: "Senior Frontend Developer",
//     company: "TechCorp Solutions",
//     location: "San Francisco, CA",
//     salary: "$120K - $150K",
//     type: "Full-time",
//     posted: "2 days ago",
//     logo: "https://via.placeholder.com/40",
//     isRemote: true,
//   },
//   // Add more jobs here...
// ];

// const EmployerDashboard = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [jobType, setJobType] = useState("");

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="bg-white shadow">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-jobconnect-navy">
//             JobConnect
//           </Link>
//           <div className="flex gap-4">
//             <Button variant="ghost" onClick={handleLogout}>
//               <LogOut className="h-4 w-4 mr-2" /> Logout
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-jobconnect-navy py-8">
//         <div className="container mx-auto px-6">
//           <h1 className="text-3xl font-bold mb-4 text-white">Dashboard</h1>
//           <p className="text-gray-300 mb-6">
//             Find your next opportunity from our extensive job listings
//           </p>

//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="col-span-2">
//                 <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
//                   <Search size={20} className="text-gray-400 mr-2" />
//                   <Input
//                     type="text"
//                     placeholder="Job title, keywords, or company"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="border-0 p-0 focus-visible:ring-0 bg-transparent"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
//                   <MapPin size={20} className="text-gray-400 mr-2" />
//                   <Input
//                     type="text"
//                     placeholder="City, state, or remote"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="border-0 p-0 focus-visible:ring-0 bg-transparent"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Select value={jobType} onValueChange={setJobType}>
//                   <SelectTrigger className="border rounded bg-gray-50">
//                     <SelectValue placeholder="Job Type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="full-time">Full-time</SelectItem>
//                     <SelectItem value="part-time">Part-time</SelectItem>
//                     <SelectItem value="contract">Contract</SelectItem>
//                     <SelectItem value="internship">Internship</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="md:col-span-4">
//                 <Button className="w-full bg-jobconnect-orange hover:bg-opacity-90">
//                   Search Jobs
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex-grow bg-gray-50 py-8">
//         <div className="container mx-auto px-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg font-semibold">
//               Found {jobListings.length} jobs
//             </h2>
//             <Button variant="outline" className="flex items-center">
//               <Filter size={16} className="mr-2" /> Filter
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {jobListings.map((job) => (
//               <Card key={job.id} className="hover:shadow-md transition-shadow">
//                 <CardContent className="p-6">
//                   <div className="flex flex-col md:flex-row md:items-center">
//                     <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mb-4 md:mb-0 md:mr-6">
//                       <Building className="h-6 w-6 text-jobconnect-navy" />
//                     </div>

//                     <div className="flex-grow md:mr-6">
//                       <Link
//                         to={`/jobs/${job.id}`}
//                         className="text-xl font-semibold hover:text-jobconnect-teal transition-colors"
//                       >
//                         {job.title}
//                       </Link>
//                       <p className="text-gray-600 mb-2">{job.company}</p>

//                       <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 mt-3">
//                         <div className="flex items-center">
//                           <MapPin
//                             size={14}
//                             className="mr-1 text-jobconnect-teal"
//                           />
//                           <span>{job.location}</span>
//                           {job.isRemote && (
//                             <Badge
//                               variant="outline"
//                               className="ml-2 bg-green-50 text-green-600 border-green-200"
//                             >
//                               Remote
//                             </Badge>
//                           )}
//                         </div>

//                         <div className="flex items-center">
//                           <DollarSign
//                             size={14}
//                             className="mr-1 text-jobconnect-teal"
//                           />
//                           <span>{job.salary}</span>
//                         </div>

//                         <div className="flex items-center">
//                           <Briefcase
//                             size={14}
//                             className="mr-1 text-jobconnect-teal"
//                           />
//                           <span>{job.type}</span>
//                         </div>

//                         <div className="flex items-center">
//                           <Clock
//                             size={14}
//                             className="mr-1 text-jobconnect-teal"
//                           />
//                           <span>Posted {job.posted}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-center mt-4 md:mt-0">
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="text-gray-400 hover:text-jobconnect-orange mr-2"
//                       >
//                         <Bookmark className="h-5 w-5" />
//                       </Button>
//                       <Link to={`/jobs/${job.id}`}>
//                         <Button className="bg-jobconnect-navy">View Job</Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="flex justify-center mt-8">
//             <Button variant="outline" className="mx-1">
//               Previous
//             </Button>
//             <Button
//               variant="outline"
//               className="mx-1 bg-jobconnect-navy text-white"
//             >
//               1
//             </Button>
//             <Button variant="outline" className="mx-1">
//               2
//             </Button>
//             <Button variant="outline" className="mx-1">
//               3
//             </Button>
//             <Button variant="outline" className="mx-1">
//               Next
//             </Button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default EmployerDashboard;
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
  Plus,
  FileText,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

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
  // Add more...
];

const EmployerDashboard = () => {
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
      {/* Top Navbar */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-jobconnect-navy">
            JobConnect
          </Link>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => navigate("/employer/post-job")}
            >
              <Plus className="h-4 w-4 mr-1" /> Post Job
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-jobconnect-navy text-white py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Welcome, Employer</h1>
          <p className="text-gray-300">
            Post jobs, manage applications and find the right talent fast.
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <BriefcaseBusiness className="text-jobconnect-navy w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Total Jobs</p>
                <p className="text-lg font-semibold">4</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <Users className="text-jobconnect-navy w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Total Applicants</p>
                <p className="text-lg font-semibold">34</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <FileText className="text-jobconnect-navy w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Interviews Scheduled</p>
                <p className="text-lg font-semibold">5</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-2 flex items-center border rounded px-3 py-2 bg-gray-50">
                <Search size={20} className="text-gray-400 mr-2" />
                <Input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 p-0 focus-visible:ring-0 bg-transparent"
                />
              </div>
              <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
                <MapPin size={20} className="text-gray-400 mr-2" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 p-0 focus-visible:ring-0 bg-transparent"
                />
              </div>
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
            <Button className="mt-4 w-full bg-jobconnect-orange hover:bg-opacity-90">
              Search Jobs
            </Button>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {jobListings.length > 0
                ? `Your Posted Jobs (${jobListings.length})`
                : "No Jobs Found"}
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
                        className="text-xl font-semibold hover:text-jobconnect-teal"
                      >
                        {job.title}
                      </Link>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                        <div className="flex items-center">
                          <MapPin
                            size={14}
                            className="mr-1 text-jobconnect-teal"
                          />
                          {job.location}
                          {job.isRemote && (
                            <Badge className="ml-2 bg-green-50 text-green-600 border-green-200">
                              Remote
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center">
                          <DollarSign
                            size={14}
                            className="mr-1 text-jobconnect-teal"
                          />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Briefcase
                            size={14}
                            className="mr-1 text-jobconnect-teal"
                          />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Clock
                            size={14}
                            className="mr-1 text-jobconnect-teal"
                          />
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                      <Button variant="ghost" size="icon" className="mr-2">
                        <Bookmark className="h-5 w-5 text-gray-400 hover:text-jobconnect-orange" />
                      </Button>
                      <Link to={`/jobs/${job.id}`}>
                        <Button className="bg-jobconnect-navy text-white">
                          View Job
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button className="mx-1 bg-jobconnect-navy text-white">1</Button>
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

export default EmployerDashboard;
