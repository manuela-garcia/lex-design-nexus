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
    <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 group focus-within:ring-2 focus-within:ring-ring">
      <Link to={link} className="block focus:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${title} case study thumbnail`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {metric && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {metric}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <Button variant="link" className="p-0 h-auto group/button focus-visible-ring">
            <span className="group-hover/button:underline">Read Case Study</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default CaseStudyCard;
