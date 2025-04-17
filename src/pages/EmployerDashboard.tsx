import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface JobApplicantsCount {
  [jobId: string]: number;
}

const EmployerDashboard = () => {
  const [jobApplicantsCount, setJobApplicantsCount] =
    useState<JobApplicantsCount>({});
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobApplicantsCount = async () => {
      try {
        // Make a request to the employer dashboard API
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/employer/dashboard/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        // Set the response data (applicants count per job)
        setJobApplicantsCount(response.data.job_applicants_count);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
        // Redirect to login if an error occurs (e.g., token expired)
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchJobApplicantsCount();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-jobconnect-navy text-white rounded-t-lg">
                <CardTitle className="text-2xl">Employer Dashboard</CardTitle>
                <CardDescription className="text-gray-300">
                  View the number of applicants for each of your posted jobs.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {Object.keys(jobApplicantsCount).length === 0 ? (
                    <div>No jobs posted yet or no applicants</div>
                  ) : (
                    Object.entries(jobApplicantsCount).map(([jobId, count]) => (
                      <div
                        key={jobId}
                        className="flex justify-between items-center"
                      >
                        <div>Job ID: {jobId}</div>
                        <div>{count} Applicants</div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>

              <div className="flex justify-center mb-4">
                <Button
                  onClick={() => navigate("/employer/jobs")}
                  className="bg-jobconnect-teal text-white hover:bg-jobconnect-teal/90"
                >
                  View All Jobs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;
