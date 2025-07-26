import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChatUpload } from "@/components/ChatUpload";
import { PentestDashboard } from "@/components/PentestDashboard";
import { 
  AlertTriangle, 
  Globe,
  Lock,
  Zap,
  Target,
  Rocket,
  Shield
} from "lucide-react";

interface WorkflowBuilderSectionProps {
  onLaunchScan?: (target: string, scanType: string) => void;
}

export const WorkflowBuilderSection = ({ onLaunchScan }: WorkflowBuilderSectionProps = {}) => {
  const [isPublic, setIsPublic] = useState(true);
  const [scanTarget, setScanTarget] = useState("");
  const [scanType, setScanType] = useState("quick");
  const [isScanning, setIsScanning] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState("");

  const handleLaunchScan = () => {
    if (!scanTarget.trim()) return;
    
    setIsScanning(true);
    onLaunchScan?.(scanTarget, scanType);
  };

  // If scanning is active, show the dashboard
  if (isScanning) {
    return <PentestDashboard scanTarget={scanTarget} isActive={isScanning} />;
  }

  return (
    <div className="py-16 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Transitional Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Ready to Build Your Workflow?
          </h2>
        </div>

        {/* Workflow Builder Card */}
        <Card className="max-w-4xl mx-auto p-6 lg:p-8 bg-card/80 backdrop-blur-md border-border">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-n8n-purple to-cyber-blue bg-clip-text text-transparent">
                  AI Pentesting Platform
                </span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade penetration testing automation powered by AI and n8n workflows
            </p>
          </div>
          
          {/* Scan Configuration */}
          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Target (IP/Domain/CIDR)</label>
                <div className="relative">
                  <Target className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="192.168.1.100 or example.com"
                    value={scanTarget}
                    onChange={(e) => setScanTarget(e.target.value)}
                    className="pl-10 led-strip-glow"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Scan Type</label>
                <Select value={scanType} onValueChange={setScanType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quick">Quick Scan (15-30 min)</SelectItem>
                    <SelectItem value="deep">Deep Scan (2-4 hours)</SelectItem>
                    <SelectItem value="custom">Custom Workflow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Notifications (Optional)</label>
              <Input
                placeholder="security@company.com"
                value={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.value)}
              />
            </div>
            
            {/* Chat Upload Interface */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Additional Requirements (Optional)
              </label>
              <ChatUpload />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant={isPublic ? "default" : "secondary"}
                size="sm"
                onClick={() => setIsPublic(!isPublic)}
                className="bg-secondary hover:bg-secondary/80"
              >
                {isPublic ? <Globe className="h-4 w-4 mr-2" /> : <Lock className="h-4 w-4 mr-2" />}
                {isPublic ? "Public Workflow" : "Private Workflow"}
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="h-4 w-4" />
                <span>Enterprise-grade security analysis</span>
              </div>
            </div>
            
            <Button
              onClick={handleLaunchScan}
              disabled={!scanTarget.trim()}
              size="lg"
              className="bg-gradient-to-r from-primary to-n8n-purple hover:from-primary/90 hover:to-n8n-purple/90 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Launch AI Pentest
            </Button>
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Powered by n8n Workflows • Google Gemini AI • AWS Infrastructure
          </div>
        </Card>
      </div>
    </div>
  );
};