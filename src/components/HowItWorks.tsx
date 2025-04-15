
import { Search, FileCheck, Briefcase, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-jobconnect-teal" />,
      title: "Search Jobs",
      description: "Browse through thousands of job listings matching your skills and preferences."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-jobconnect-teal" />,
      title: "Apply Online",
      description: "Submit your application with just a few clicks. Track your applications from your dashboard."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-jobconnect-teal" />,
      title: "Get Interviews",
      description: "Companies review your profile and reach out for interviews if you're a good match."
    },
    {
      icon: <Award className="h-12 w-12 text-jobconnect-teal" />,
      title: "Land Your Dream Job",
      description: "Accept the best offer and start your new career journey with confidence."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jobconnect-navy">How JobConnect Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Finding your next career opportunity is simple with our streamlined process. Follow these easy steps to land your dream job.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-jobconnect-teal/10 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                
                {/* Connector line between steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-60px)] h-[2px] bg-gray-200">
                    <div className="absolute right-0 top-[-4px] w-3 h-3 rotate-45 border-t-2 border-r-2 border-gray-200"></div>
                  </div>
                )}
                
                {/* Step number */}
                <div className="absolute top-0 right-[calc(50%-40px)] w-6 h-6 rounded-full bg-jobconnect-orange text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-jobconnect-navy">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
