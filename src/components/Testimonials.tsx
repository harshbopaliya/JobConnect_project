
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Software Developer",
    company: "TechCorp Solutions",
    image: "https://via.placeholder.com/60",
    quote: "JobConnect helped me find my dream job in just two weeks! The platform is incredibly user-friendly and the job recommendations were spot-on for my skills and experience."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Manager",
    company: "Global Brands Inc.",
    image: "https://via.placeholder.com/60",
    quote: "After struggling to find relevant opportunities for months, I discovered JobConnect. The quality of job listings and the ability to track my applications in one place made all the difference."
  },
  {
    id: 3,
    name: "Jessica Williams",
    position: "UX Designer",
    company: "Creative Designs Inc.",
    image: "https://via.placeholder.com/60",
    quote: "As a creative professional, finding the right culture fit is crucial. JobConnect's detailed company profiles helped me find an employer that truly values design thinking."
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Project Manager",
    company: "Innovative Products",
    image: "https://via.placeholder.com/60",
    quote: "The seamless application process and interview scheduling through JobConnect saved me so much time. I was able to focus on preparing for interviews rather than managing the job hunt."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  
  const goToPrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex(Math.min(testimonials.length - 3, currentIndex + 1));
  };

  return (
    <section className="py-16 bg-gradient-to-r from-jobconnect-navy to-jobconnect-navy/90 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from job seekers who found their perfect career match through JobConnect.
          </p>
        </div>
        
        <div className="relative">
          {/* Mobile testimonials (slider) */}
          <div className="md:hidden">
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Quote className="h-10 w-10 text-jobconnect-teal opacity-50" />
                </div>
                <p className="text-center mb-6 text-gray-200">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 mb-3">
                    {/* Image placeholder */}
                  </div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-300">{testimonials[currentIndex].position}</p>
                  <p className="text-xs text-jobconnect-teal">{testimonials[currentIndex].company}</p>
                </div>
                
                <div className="flex justify-center mt-6 space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-gray-500 text-white hover:bg-white/20"
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-gray-500 text-white hover:bg-white/20"
                    onClick={() => setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1))}
                    disabled={currentIndex === testimonials.length - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Desktop testimonials (grid) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-0 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-start mb-4">
                    <Quote className="h-8 w-8 text-jobconnect-teal opacity-50" />
                  </div>
                  <p className="mb-6 text-gray-200 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                      {/* Image placeholder */}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.position}</p>
                      <p className="text-xs text-jobconnect-teal">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Desktop navigation arrows */}
          <div className="hidden md:flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-500 text-white hover:bg-white/20"
              onClick={goToPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-500 text-white hover:bg-white/20"
              onClick={goToNext}
              disabled={currentIndex >= testimonials.length - 3}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
