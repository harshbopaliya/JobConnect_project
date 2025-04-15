
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { UserPlus, Building, LogIn } from 'lucide-react';

const Register = () => {
  const [userType, setUserType] = useState('jobseeker');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companySize: '',
    industry: '',
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle registration
    console.log('Registration data:', { userType, ...formData });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">Create Your Account</CardTitle>
                <CardDescription>
                  Join JobConnect to unlock your career potential
                </CardDescription>
              </CardHeader>
              
              <Tabs defaultValue="jobseeker" onValueChange={setUserType} className="px-6 pt-2">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="jobseeker" className="flex items-center gap-2">
                    <UserPlus size={16} /> Job Seeker
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-2">
                    <Building size={16} /> Employer
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="jobseeker">
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                          id="password" 
                          name="password"
                          type="password" 
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input 
                          id="confirmPassword" 
                          name="confirmPassword"
                          type="password" 
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={formData.agreeTerms}
                          onCheckedChange={handleCheckboxChange}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{' '}
                          <Link to="/terms" className="text-jobconnect-teal hover:underline">
                            Terms of Service
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy" className="text-jobconnect-teal hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col">
                      <Button type="submit" className="w-full bg-jobconnect-navy mb-4">
                        <UserPlus className="mr-2 h-4 w-4" /> Create Account
                      </Button>
                      
                      <p className="text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-jobconnect-teal hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </CardFooter>
                  </form>
                </TabsContent>
                
                <TabsContent value="employer">
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input 
                          id="companyName" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Input 
                          id="industry" 
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="companySize">Company Size</Label>
                        <Input 
                          id="companySize" 
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                          id="password" 
                          name="password"
                          type="password" 
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={formData.agreeTerms}
                          onCheckedChange={handleCheckboxChange}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{' '}
                          <Link to="/terms" className="text-jobconnect-teal hover:underline">
                            Terms of Service
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy" className="text-jobconnect-teal hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col">
                      <Button type="submit" className="w-full bg-jobconnect-teal mb-4">
                        <Building className="mr-2 h-4 w-4" /> Register as Employer
                      </Button>
                      
                      <p className="text-sm text-center text-gray-600">
                        Already have an employer account?{' '}
                        <Link to="/login" className="text-jobconnect-teal hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </CardFooter>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
