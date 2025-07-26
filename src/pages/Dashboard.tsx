import { useState } from "react";
import { Dashboard as DashboardComponent } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const DashboardPage = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanTarget, setScanTarget] = useState<string>("");

  const handleStartScan = (target: string) => {
    setScanTarget(target);
    setIsScanning(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DashboardComponent 
        isScanning={isScanning}
        scanTarget={scanTarget}
        onStartScan={handleStartScan}
      />
      {!isScanning && <Footer />}
    </div>
  );
};

export default DashboardPage;