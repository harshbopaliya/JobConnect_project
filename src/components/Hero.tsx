
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to the search results page with query params
    console.log('Searching for:', { jobTitle, location });
  };

  return (
    <div className="relative bg-gradient-to-r from-jobconnect-navy to-jobconnect-navy/80 text-white py-20">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Find Your Dream Job <span className="text-jobconnect-teal">Today</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect with thousands of employers and opportunities. Your next career move is just a click away.
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white p-3 rounded-lg shadow-lg flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center border rounded px-3 py-2 bg-gray-50">
              <Search size={20} className="text-gray-400 mr-2" />
              <Input
                type="text"
                placeholder="Job title, keywords, or company"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="border-0 p-0 focus-visible:ring-0 bg-transparent text-black"
              />
            </div>
            
            <div className="flex-1 flex items-center border rounded px-3 py-2 bg-gray-50">
              <MapPin size={20} className="text-gray-400 mr-2" />
              <Input
                type="text"
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 p-0 focus-visible:ring-0 bg-transparent text-black"
              />
            </div>
            
            <Button type="submit" className="bg-jobconnect-orange hover:bg-opacity-90 px-8 py-2">
              Search Jobs
            </Button>
          </form>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-jobconnect-teal text-3xl font-bold mb-2">10,000+</div>
            <div className="text-gray-200">Job Listings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-jobconnect-teal text-3xl font-bold mb-2">5,000+</div>
            <div className="text-gray-200">Companies Hiring</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-jobconnect-teal text-3xl font-bold mb-2">2M+</div>
            <div className="text-gray-200">Happy Job Seekers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
