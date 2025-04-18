// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { BriefcaseBusiness, Target, Users, BookOpen, Award, BarChart3, HeartHandshake, Clock, Building, Globe } from 'lucide-react';

// const About = () => {
//   const teamMembers = [
//     {
//       name: "John Smith",
//       position: "CEO & Founder",
//       bio: "John has over 15 years of experience in the recruitment industry and founded JobConnect with a vision to transform how people find jobs.",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       name: "Sarah Johnson",
//       position: "Chief Technology Officer",
//       bio: "With a background in full-stack development and AI, Sarah leads our technology initiatives to create innovative job search solutions.",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       name: "Michael Chen",
//       position: "Head of Product",
//       bio: "Michael combines his experience in UX design and product management to ensure JobConnect delivers the best possible user experience.",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       name: "Jessica Williams",
//       position: "Head of Marketing",
//       bio: "Jessica brings her extensive experience in digital marketing to help connect job seekers and employers with JobConnect's platform.",
//       image: "https://via.placeholder.com/150"
//     }
//   ];

//   const values = [
//     {
//       icon: <Target className="h-8 w-8 text-jobconnect-teal" />,
//       title: "User-Centric Focus",
//       description: "We put our users first in everything we do, constantly improving our platform based on feedback and needs."
//     },
//     {
//       icon: <HeartHandshake className="h-8 w-8 text-jobconnect-teal" />,
//       title: "Integrity & Trust",
//       description: "We believe in transparency and honesty in all our operations, building trust with both job seekers and employers."
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-jobconnect-teal" />,
//       title: "Continuous Innovation",
//       description: "We're committed to constantly evolving our platform with new technologies and features that enhance the job search experience."
//     },
//     {
//       icon: <Users className="h-8 w-8 text-jobconnect-teal" />,
//       title: "Diversity & Inclusion",
//       description: "We champion diversity in the workplace and strive to create equal opportunities for all job seekers."
//     }
//   ];

//   const stats = [
//     {
//       icon: <BriefcaseBusiness className="h-8 w-8 text-white" />,
//       value: "10,000+",
//       label: "Jobs Posted Monthly"
//     },
//     {
//       icon: <Building className="h-8 w-8 text-white" />,
//       value: "5,000+",
//       label: "Companies Trust Us"
//     },
//     {
//       icon: <Users className="h-8 w-8 text-white" />,
//       value: "2M+",
//       label: "Registered Users"
//     },
//     {
//       icon: <Award className="h-8 w-8 text-white" />,
//       value: "95%",
//       label: "Satisfaction Rate"
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-jobconnect-navy to-jobconnect-navy/80 text-white py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About JobConnect</h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             We're on a mission to connect talent with opportunity, making the job search process more efficient and effective for everyone.
//           </p>
//         </div>
//       </div>

//       {/* Our Story Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className="md:w-1/2">
//               <h2 className="text-3xl font-bold mb-6 text-jobconnect-navy">Our Story</h2>
//               <p className="text-gray-700 mb-4">
//                 JobConnect was founded in 2020 with a simple but powerful idea: to transform the way people find jobs and companies hire talent. Our founder, having experienced the frustrations of the traditional job search process, saw an opportunity to create a platform that would make finding the right job or candidate more efficient and enjoyable.
//               </p>
//               <p className="text-gray-700 mb-4">
//                 What started as a small startup has grown into a comprehensive career platform serving millions of job seekers and thousands of employers globally. We've built a team of passionate professionals who are committed to innovation and excellence in everything we do.
//               </p>
//               <p className="text-gray-700">
//                 Today, JobConnect is not just a job board but a career ecosystem that provides resources, tools, and connections to help professionals at every stage of their career journey. We're proud of what we've built, but we're even more excited about what comes next.
//               </p>
//             </div>

//             <div className="md:w-1/2 flex justify-center">
//               <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg relative overflow-hidden">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <BriefcaseBusiness size={80} className="text-jobconnect-teal opacity-20" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gradient-to-r from-jobconnect-teal to-jobconnect-teal/80 text-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-gray-100">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">Our Core Values</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               These principles guide our decisions and shape our company culture as we work to transform the job search experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <Card key={index} className="text-center hover:shadow-md transition-shadow">
//                 <CardContent className="p-6">
//                   <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                     {value.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-jobconnect-navy">{value.title}</h3>
//                   <p className="text-gray-600">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">Meet Our Leadership Team</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               The talented individuals behind JobConnect who are passionate about transforming the way people find jobs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4"></div>
//                 <h3 className="text-xl font-semibold mb-1 text-jobconnect-navy">{member.name}</h3>
//                 <p className="text-jobconnect-teal mb-3">{member.position}</p>
//                 <p className="text-gray-600 text-sm">{member.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-16 bg-jobconnect-navy text-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className="md:w-1/2">
//               <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
//               <p className="text-gray-300 mb-4">
//                 At JobConnect, we envision a future where finding the right job or talent is seamless, efficient, and equitable. We're working towards a world where career opportunities are accessible to everyone, regardless of background or circumstances.
//               </p>
//               <p className="text-gray-300 mb-4">
//                 We're investing in cutting-edge technologies like AI and machine learning to create smarter matching algorithms that consider not just skills and experience, but also cultural fit and career aspirations.
//               </p>
//               <p className="text-gray-300">
//                 Our goal is to continue expanding our platform globally while maintaining our commitment to personalized service and community support, helping millions more find fulfilling careers.
//               </p>
//             </div>

//             <div className="md:w-1/2 grid grid-cols-2 gap-4">
//               <div className="bg-white/10 p-6 rounded-lg text-center">
//                 <BarChart3 size={40} className="mx-auto mb-4 text-jobconnect-teal" />
//                 <h4 className="font-semibold mb-2">Data-Driven Matching</h4>
//                 <p className="text-sm text-gray-300">Using advanced analytics to connect the right people with the right opportunities</p>
//               </div>

//               <div className="bg-white/10 p-6 rounded-lg text-center">
//                 <Globe size={40} className="mx-auto mb-4 text-jobconnect-teal" />
//                 <h4 className="font-semibold mb-2">Global Expansion</h4>
//                 <p className="text-sm text-gray-300">Bringing our platform to job seekers and employers around the world</p>
//               </div>

//               <div className="bg-white/10 p-6 rounded-lg text-center">
//                 <Users size={40} className="mx-auto mb-4 text-jobconnect-teal" />
//                 <h4 className="font-semibold mb-2">Community Building</h4>
//                 <p className="text-sm text-gray-300">Creating spaces for professionals to learn, grow, and connect</p>
//               </div>

//               <div className="bg-white/10 p-6 rounded-lg text-center">
//                 <Clock size={40} className="mx-auto mb-4 text-jobconnect-teal" />
//                 <h4 className="font-semibold mb-2">Continuous Innovation</h4>
//                 <p className="text-sm text-gray-300">Never stopping in our quest to improve the job search experience</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  BriefcaseBusiness,
  Target,
  Users,
  BookOpen,
  Award,
  BarChart3,
  HeartHandshake,
  Clock,
  Building,
  Globe,
} from "lucide-react";
import axios from "axios";

// Icon mapping
const iconMap: any = {
  Target: <Target className="h-8 w-8 text-jobconnect-teal" />,
  HeartHandshake: <HeartHandshake className="h-8 w-8 text-jobconnect-teal" />,
  BookOpen: <BookOpen className="h-8 w-8 text-jobconnect-teal" />,
  Users: <Users className="h-8 w-8 text-jobconnect-teal" />,
  BriefcaseBusiness: <BriefcaseBusiness className="h-8 w-8 text-white" />,
  Building: <Building className="h-8 w-8 text-white" />,
  Award: <Award className="h-8 w-8 text-white" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-jobconnect-teal" />,
  Clock: <Clock className="h-8 w-8 text-jobconnect-teal" />,
  Globe: <Globe className="h-8 w-8 text-jobconnect-teal" />,
};

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [values, setValues] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/about/team/")
      .then((res) => setTeamMembers(res.data));
    axios
      .get("http://localhost:8000/api/about/values/")
      .then((res) => setValues(res.data));
    axios
      .get("http://localhost:8000/api/about/stats/")
      .then((res) => setStats(res.data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-jobconnect-navy to-jobconnect-navy/80 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About JobConnect
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to connect talent with opportunity, making the
            job search process more efficient and effective for everyone.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-jobconnect-navy">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                JobConnect was founded in 2025 with a simple but powerful idea:
                to transform the way people find jobs and companies hire talent.
                Our founder, having experienced the frustrations of the
                traditional job search process, saw an opportunity to create a
                platform that would make finding the right job or candidate more
                efficient and enjoyable.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small startup has grown into a comprehensive
                career platform serving millions of job seekers and thousands of
                employers globally. We've built a team of passionate
                professionals who are committed to innovation and excellence in
                everything we do.
              </p>
              <p className="text-gray-700">
                Today, JobConnect is not just a job board but a career ecosystem
                that provides resources, tools, and connections to help
                professionals at every stage of their career journey. We're
                proud of what we've built, but we're even more excited about
                what comes next.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BriefcaseBusiness
                    size={80}
                    className="text-jobconnect-teal opacity-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-jobconnect-teal to-jobconnect-teal/80 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                  {iconMap[stat.icon] || (
                    <BriefcaseBusiness className="h-8 w-8 text-white" />
                  )}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions and shape our company culture
              as we work to transform the job search experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value: any, index: number) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    {iconMap[value.icon] || (
                      <Users className="h-8 w-8 text-jobconnect-teal" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-jobconnect-navy">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind JobConnect who are passionate
              about transforming the way people find jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1 text-jobconnect-navy">
                  {member.name}
                </h3>
                <p className="text-jobconnect-teal mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
