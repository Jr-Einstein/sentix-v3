import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PentestDashboard } from "@/components/PentestDashboard";
import { WorkflowBuilderSection } from "@/components/WorkflowBuilderSection";

const DashboardPage = () => {
  const [scanData, setScanData] = useState<{
    target: string;
    scanType: string;
    isActive: boolean;
  } | null>(null);

  const handleLaunchScan = (target: string, scanType: string) => {
    setScanData({
      target,
      scanType,
      isActive: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {scanData?.isActive ? (
        <div className="pt-20">
          <PentestDashboard 
            scanTarget={scanData.target} 
            isActive={scanData.isActive} 
          />
        </div>
      ) : (
        <div className="pt-20">
          <div className="py-16 px-4 sm:px-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
                  Ready to Start Your Pentest?
                </h2>
              </div>
              <WorkflowBuilderSection onLaunchScan={handleLaunchScan} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;