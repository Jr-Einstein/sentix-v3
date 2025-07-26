import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatUpload } from "@/components/ChatUpload";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  Globe,
  Lock,
  Zap,
  ArrowRight
} from "lucide-react";

export const WorkflowBuilderSection = () => {
  const [isPublic, setIsPublic] = useState(true);

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
              <Zap className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Pentesting Workflow Builder
                </span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Upload questionnaires, describe requirements, and let AI design custom penetration testing workflows with n8n automation
            </p>
          </div>
          
          {/* Chat Upload Interface */}
          <div className="mb-8">
            <ChatUpload />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
                <span className="hidden sm:inline">Enterprise-grade security analysis</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Powered by n8n & LLM
              </div>
              <Link to="/dashboard">
                <Button variant="hero" className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/80 hover:to-blue-500/80">
                  Launch Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};