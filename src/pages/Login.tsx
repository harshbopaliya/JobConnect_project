
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
import { LogIn, UserPlus, Building } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('jobseeker');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log('Login attempt:', { email, password, userType, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-2 bg-jobconnect-navy text-white rounded-t-lg">
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription className="text-gray-300">
                  Sign in to your JobConnect account
                </CardDescription>
              </CardHeader>
              
              <Tabs defaultValue="jobseeker" onValueChange={setUserType} className="px-6 pt-4">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="jobseeker" className="flex items-center gap-2 data-[state=active]:bg-jobconnect-teal data-[state=active]:text-white">
                    <UserPlus size={16} /> Job Seeker
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-2 data-[state=active]:bg-jobconnect-orange data-[state=active]:text-white">
                    <Building size={16} /> Employer
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="jobseeker">
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="password">Password</Label>
                          <Link to="/forgot-password" className="text-xs text-jobconnect-teal hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="remember" 
                          checked={rememberMe}
                          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col">
                      <Button type="submit" className="w-full bg-jobconnect-teal hover:bg-jobconnect-teal/90 mb-4">
                        <LogIn className="mr-2 h-4 w-4" /> Sign In
                      </Button>
                      
                      <p className="text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-jobconnect-teal hover:underline">
                          Create an account
                        </Link>
                      </p>
                    </CardFooter>
                  </form>
                </TabsContent>
                
                <TabsContent value="employer">
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="employer-email">Email</Label>
                        <Input 
                          id="employer-email" 
                          type="email" 
                          placeholder="company@email.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="employer-password">Password</Label>
                          <Link to="/forgot-password" className="text-xs text-jobconnect-orange hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="employer-password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="employer-remember" 
                          checked={rememberMe}
                          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        />
                        <Label htmlFor="employer-remember" className="text-sm">Remember me</Label>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col">
                      <Button type="submit" className="w-full bg-jobconnect-orange hover:bg-jobconnect-orange/90 mb-4">
                        <LogIn className="mr-2 h-4 w-4" /> Employer Sign In
                      </Button>
                      
                      <p className="text-sm text-center text-gray-600">
                        Don't have an employer account?{' '}
                        <Link to="/employer/register" className="text-jobconnect-orange hover:underline">
                          Register as employer
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

export default Login;
