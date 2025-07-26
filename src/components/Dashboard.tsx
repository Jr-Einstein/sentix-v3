import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Zap, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Target, 
  Brain, 
  FileText,
  Users,
  Server,
  Network,
  Eye,
  Download,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

interface ScanProgress {
  phase: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  details: string;
}

interface DashboardProps {
  isScanning: boolean;
  scanTarget?: string;
  onStartScan: (target: string) => void;
}

export const Dashboard = ({ isScanning, scanTarget, onStartScan }: DashboardProps) => {
  const [scanPhases, setScanPhases] = useState<ScanProgress[]>([
    { phase: "Reconnaissance", status: 'pending', progress: 0, details: "Port scanning and service detection" },
    { phase: "Vulnerability Assessment", status: 'pending', progress: 0, details: "CVE matching and exploit analysis" },
    { phase: "AI Analysis", status: 'pending', progress: 0, details: "Gemini-powered threat intelligence" },
    { phase: "Reporting", status: 'pending', progress: 0, details: "Executive summary and remediation" }
  ]);

  const [metrics, setMetrics] = useState({
    openPorts: 0,
    vulnerabilities: 0,
    services: 0,
    aiConfidence: 0,
    shodanHits: 0,
    remediationActions: 0
  });

  const [riskScore, setRiskScore] = useState(0);
  const [activityFeed, setActivityFeed] = useState<string[]>([]);

  // Simulate real-time progress updates
  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanPhases(prev => {
        const updated = [...prev];
        const currentPhase = updated.find(p => p.status === 'running') || updated.find(p => p.status === 'pending');
        
        if (currentPhase) {
          if (currentPhase.progress < 100) {
            currentPhase.progress += Math.random() * 15;
            if (currentPhase.progress >= 100) {
              currentPhase.progress = 100;
              currentPhase.status = 'completed';
              
              // Start next phase
              const nextIndex = updated.findIndex(p => p === currentPhase) + 1;
              if (nextIndex < updated.length) {
                updated[nextIndex].status = 'running';
              }
            }
          } else if (currentPhase.status === 'pending') {
            currentPhase.status = 'running';
          }
        }
        
        return updated;
      });

      // Update metrics
      setMetrics(prev => ({
        openPorts: Math.min(prev.openPorts + Math.floor(Math.random() * 3), 23),
        vulnerabilities: Math.min(prev.vulnerabilities + Math.floor(Math.random() * 2), 12),
        services: Math.min(prev.services + Math.floor(Math.random() * 2), 15),
        aiConfidence: Math.min(prev.aiConfidence + Math.floor(Math.random() * 5), 87),
        shodanHits: Math.min(prev.shodanHits + Math.floor(Math.random() * 2), 8),
        remediationActions: Math.min(prev.remediationActions + Math.floor(Math.random() * 2), 6)
      }));

      // Update risk score
      setRiskScore(prev => Math.min(prev + Math.random() * 3, 74));

      // Add activity feed items
      const activities = [
        "Port scan completed - 23 open ports found",
        "Service version detection completed",
        "Vulnerability database updated",
        "AI analysis initiated",
        "Threat intelligence lookup completed",
        "Executive summary generated"
      ];
      
      if (Math.random() > 0.7) {
        const newActivity = activities[Math.floor(Math.random() * activities.length)];
        setActivityFeed(prev => [
          `${new Date().toLocaleTimeString()} | ${newActivity}`,
          ...prev.slice(0, 9)
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isScanning]);

  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case "Reconnaissance": return <Network className="h-5 w-5" />;
      case "Vulnerability Assessment": return <Shield className="h-5 w-5" />;
      case "AI Analysis": return <Brain className="h-5 w-5" />;
      case "Reporting": return <FileText className="h-5 w-5" />;
      default: return <Activity className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'running': return 'text-blue-400';
      case 'failed': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'running': return <Activity className="h-4 w-4 text-blue-400 animate-pulse" />;
      case 'failed': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  if (!isScanning) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Pre-scan landing - simplified workflow builder */}
        <div className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    AI Security Platform
                  </span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade AI-powered penetration testing automation with n8n workflows and Gemini intelligence
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-md border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Launch AI Pentest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter target IP, domain, or CIDR range..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          const target = (e.target as HTMLInputElement).value;
                          if (target) onStartScan(target);
                        }
                      }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Quick Scan</Badge>
                    <Badge variant="outline">Deep Analysis</Badge>
                    <Badge variant="outline">Custom Workflow</Badge>
                  </div>
                  <Button 
                    onClick={() => onStartScan("demo.target.com")} 
                    className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/80 hover:to-blue-500/80"
                    size="lg"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Launch AI Pentest
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">AI Pentest Active</h1>
                <p className="text-sm text-muted-foreground">Target: {scanTarget}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </Button>
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Restart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Executive Overview */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  Executive Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-red-400">{Math.round(riskScore)}%</div>
                    <p className="text-sm text-muted-foreground">High Risk Detected</p>
                  </div>
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${riskScore}, 100`}
                        className="text-red-400"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-red-400">{Math.round(riskScore)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{metrics.openPorts}</div>
                  <p className="text-sm text-muted-foreground">Open Ports</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">{metrics.vulnerabilities}</div>
                  <p className="text-sm text-muted-foreground">Vulnerabilities</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{metrics.services}</div>
                  <p className="text-sm text-muted-foreground">Services</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{metrics.aiConfidence}%</div>
                  <p className="text-sm text-muted-foreground">AI Confidence</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">{metrics.shodanHits}</div>
                  <p className="text-sm text-muted-foreground">Shodan Hits</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{metrics.remediationActions}</div>
                  <p className="text-sm text-muted-foreground">Remediation</p>
                </CardContent>
              </Card>
            </div>

            {/* Progress Tracker */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" />
                  Real-Time Progress Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {scanPhases.map((phase, index) => (
                    <div key={phase.phase} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getPhaseIcon(phase.phase)}
                          <div>
                            <h4 className={`font-medium ${getStatusColor(phase.status)}`}>
                              {phase.phase}
                            </h4>
                            <p className="text-sm text-muted-foreground">{phase.details}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(phase.status)}
                          <span className="text-sm font-medium">{Math.round(phase.progress)}%</span>
                        </div>
                      </div>
                      <Progress value={phase.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Activity Feed */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Activity Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {activityFeed.map((activity, index) => (
                    <div key={index} className="text-sm p-2 bg-background rounded border-l-2 border-primary">
                      {activity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">n8n Workflow</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Gemini API</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Shodan API</span>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">Limited</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Docker Health</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">Healthy</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Interim Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Community Workflows
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Export Raw Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};