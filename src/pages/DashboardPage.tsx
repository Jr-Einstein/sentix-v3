import { Navbar } from "@/components/Navbar";
import { PentestDashboard } from "@/components/PentestDashboard";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PentestDashboard 
          scanTarget="192.168.1.100" 
          isActive={true} 
        />
      </div>
    </div>
  );
};

export default DashboardPage;