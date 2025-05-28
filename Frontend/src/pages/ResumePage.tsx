
import { useEffect } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ResumeSection } from "@/components/ResumeSection";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Resume</h1>
            <Button variant="outline" disabled className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              View Only
            </Button>
          </div>
          
          <div className="glass-card p-8 md:p-12">
            <ResumeSection />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResumePage;
