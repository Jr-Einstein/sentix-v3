import { ChevronLeft, Home } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
  showBack?: boolean;
}

export const Breadcrumb = ({ 
  items = [], 
  showHome = true, 
  showBack = true 
}: BreadcrumbProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // Auto-generate breadcrumbs based on current path if none provided
  const generateBreadcrumbs = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    if (pathParts.includes('workflows')) {
      breadcrumbs.push({ label: 'Workflows', href: '/workflows' });
    }
    if (pathParts.includes('platform')) {
      breadcrumbs.push({ label: 'Platform', href: '/platform' });
    }
    if (pathParts.includes('features')) {
      breadcrumbs.push({ label: 'Features', href: '/features' });
    }
    if (pathParts.includes('pricing')) {
      breadcrumbs.push({ label: 'Pricing', href: '/pricing' });
    }

    return breadcrumbs;
  };

  const allItems = items.length > 0 ? items : generateBreadcrumbs();

  return (
    <nav className="flex items-center gap-2 py-4" aria-label="Breadcrumb">
      <div className="flex items-center gap-2">
        {showBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="h-8 w-8 p-0 hover:bg-white/10"
            aria-label="Go back"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        
        {showHome && (
          <Link
            to="/"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        )}
      </div>

      {allItems.length > 0 && (
        <>
          <span className="text-muted-foreground">/</span>
          <ol className="flex items-center gap-2">
            {allItems.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <span className="text-muted-foreground">/</span>}
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}
    </nav>
  );
};