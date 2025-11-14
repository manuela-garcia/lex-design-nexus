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
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-ring border-2 hover:border-primary/20 bg-gradient-card">
      <Link to={link} className="block focus:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${title} case study thumbnail`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heading/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {metric && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {metric}
            </div>
          )}
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-3 text-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{description}</p>
          <Button variant="link" className="p-0 h-auto group/button focus-visible-ring text-base">
            <span className="group-hover/button:underline">Read Case Study</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-2" />
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default CaseStudyCard;
