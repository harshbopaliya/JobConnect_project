
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserPlus, Building, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Seekers CTA */}
          <div className="bg-gradient-to-br from-jobconnect-navy to-jobconnect-navy/80 rounded-xl p-8 text-white shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <UserPlus className="h-8 w-8 text-jobconnect-teal" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center">For Job Seekers</h3>
            <p className="text-gray-300 mb-6 text-center">
              Create a free account to apply for jobs, save favorites, and get personalized job recommendations based on your skills and preferences.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-jobconnect-teal flex-shrink-0" />
                <span>Access thousands of verified job listings</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-jobconnect-teal flex-shrink-0" />
                <span>Create a professional profile to showcase your skills</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-jobconnect-teal flex-shrink-0" />
                <span>Track all your applications in one dashboard</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-jobconnect-teal flex-shrink-0" />
                <span>Get notified about new matching opportunities</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Link to="/register">
                <Button className="bg-jobconnect-teal hover:bg-opacity-90 px-8">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Employers CTA */}
          <div className="bg-gradient-to-br from-jobconnect-teal to-jobconnect-teal/80 rounded-xl p-8 text-white shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center">For Employers</h3>
            <p className="text-gray-100 mb-6 text-center">
              Post jobs, find qualified candidates, and manage your recruitment process efficiently with our employer tools and services.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-white flex-shrink-0" />
                <span>Post unlimited job listings with our subscription plans</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-white flex-shrink-0" />
                <span>Access our database of qualified candidates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-white flex-shrink-0" />
                <span>Manage and track applicants with our ATS tools</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-white flex-shrink-0" />
                <span>Build your employer brand with a company profile</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Link to="/employer/register">
                <Button className="bg-jobconnect-navy hover:bg-opacity-90 px-8">
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
