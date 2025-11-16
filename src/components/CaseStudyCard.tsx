import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  metric?: string;
}

const CaseStudyCard = ({ title, description, image, link, metric }: CaseStudyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group focus-within:ring-2 focus-within:ring-ring border-2 hover:border-primary/20 bg-gradient-card">
      <Link to={link} className="block focus:outline-none">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Metric Badge */}
          {metric && (
            <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
              {metric}
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-3 text-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{description}</p>
          <Button variant="link" className="p-0 h-auto group/button focus-visible-ring text-base">
            <span className="group-hover/button:underline">View Case Study</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-2" />
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default CaseStudyCard;
