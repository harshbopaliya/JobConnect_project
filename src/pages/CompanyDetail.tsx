// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Building,
//   MapPin,
//   Users,
//   Briefcase,
//   Globe,
//   Calendar,
//   ArrowLeft,
// } from "lucide-react";

// interface Company {
//   id: string;
//   name: string;
//   logo: string | null;
//   website: string | null;
//   description: string;
//   employee_count: string;
//   location: string;
//   founded_year: number | null;
//   industry_name: string;
//   job_count: number;
// }

// const CompanyDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const [company, setCompany] = useState<Company | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompany = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/api/companies/${id}/`
//         );
//         setCompany(response.data);
//       } catch (error) {
//         console.error("Error fetching company details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchCompany();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-600">Loading company details...</p>
//       </div>
//     );
//   }

//   if (!company) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-red-500">Company not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <div className="container mx-auto px-6 py-10">
//         <Link
//           to="/companies"
//           className="text-jobconnect-teal flex items-center mb-6"
//         >
//           <ArrowLeft className="mr-2" size={18} />
//           Back to Companies
//         </Link>

//         <Card>
//           <CardContent className="p-6">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mr-6 mb-4 md:mb-0">
//                 {company.logo ? (
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="w-full h-full object-contain"
//                   />
//                 ) : (
//                   <Building className="w-10 h-10 text-jobconnect-navy" />
//                 )}
//               </div>

//               <div className="flex-grow">
//                 <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
//                 <p className="text-sm text-gray-600 mb-1">
//                   {company.industry_name}
//                 </p>
//                 <p className="text-gray-700">{company.description}</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-sm">
//               <div className="flex items-center">
//                 <MapPin className="mr-2 text-jobconnect-teal" />
//                 <span>{company.location}</span>
//               </div>
//               <div className="flex items-center">
//                 <Users className="mr-2 text-jobconnect-teal" />
//                 <span>{company.employee_count} employees</span>
//               </div>
//               <div className="flex items-center">
//                 <Briefcase className="mr-2 text-jobconnect-teal" />
//                 <span>{company.job_count} open positions</span>
//               </div>
//               <div className="flex items-center">
//                 <Calendar className="mr-2 text-jobconnect-teal" />
//                 <span>Founded in {company.founded_year || "N/A"}</span>
//               </div>
//               {company.website && (
//                 <div className="flex items-center col-span-2">
//                   <Globe className="mr-2 text-jobconnect-teal" />
//                   <a
//                     href={company.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-jobconnect-teal hover:underline"
//                   >
//                     {company.website.replace("https://", "")}
//                   </a>
//                 </div>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CompanyDetail;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  MapPin,
  Users,
  Briefcase,
  Globe,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

interface Company {
  id: string;
  name: string;
  logo: string | null;
  website: string | null;
  description: string;
  employee_count: string;
  location: string;
  founded_year: number | null;
  industry_name: string;
  job_count: number;
}

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/companies/${id}/`
        );
        setCompany(response.data);
        toast.success("Company details loaded successfully");
      } catch (error) {
        console.error("Error fetching company details:", error);
        toast.error("Failed to load company details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCompany();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-600">Loading company details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Building size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-red-500 font-semibold">Company not found.</p>
            <Link
              to="/companies"
              className="text-jobconnect-teal hover:underline mt-4 inline-block"
            >
              Return to Companies
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-6 py-10 flex-grow">
        <Link
          to="/companies"
          className="text-jobconnect-teal flex items-center mb-6"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Companies
        </Link>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mr-6 mb-4 md:mb-0">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Building className="w-10 h-10 text-jobconnect-navy" />
                )}
              </div>

              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                <p className="text-sm text-gray-600 mb-1">
                  {company.industry_name}
                </p>
                <p className="text-gray-700">{company.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-sm">
              <div className="flex items-center">
                <MapPin className="mr-2 text-jobconnect-teal" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 text-jobconnect-teal" />
                <span>{company.employee_count} employees</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="mr-2 text-jobconnect-teal" />
                <span>{company.job_count} open positions</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 text-jobconnect-teal" />
                <span>Founded in {company.founded_year || "N/A"}</span>
              </div>
              {company.website && (
                <div className="flex items-center col-span-2">
                  <Globe className="mr-2 text-jobconnect-teal" />
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jobconnect-teal hover:underline"
                  >
                    {company.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyDetail;
