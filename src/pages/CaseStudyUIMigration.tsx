import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudyImage from "@/assets/case-study-1.jpg";
// Carousel slide images - Replace these paths with your actual screenshots
import slide1 from "@/assets/ui-migration-slide-1.png";
import slide2 from "@/assets/ui-migration-slide-2.png";
import slide3 from "@/assets/ui-migration-slide-3.png";

const CaseStudyUIMigration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-subtle border-b-2 border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <Button variant="ghost" asChild className="mb-8 focus-visible-ring hover:bg-muted/50">
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="max-w-4xl">
              <div className="inline-block bg-accent text-accent-foreground px-5 py-2 rounded-full font-semibold mb-6 shadow-md">
                +18% Page Views
              </div>
              <h1 className="mb-6">UI Migration Workshop Program</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Redesigned multi-session workshop program at Dayforce, driving significant engagement 
                increases through strategic cross-functional engineering partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-20 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <img
              src={caseStudyImage}
              alt="UI Migration Workshop Program overview"
              className="w-full rounded-xl shadow-xl mb-16"
            />

            {/* Problem Section */}
            <section className="mb-16">
              <h2 className="mb-8">The Challenge</h2>
              <Card className="p-10 bg-gradient-card border-2 shadow-lg">
                <p className="text-lg text-foreground leading-relaxed">
                  Dayforce was undergoing a major UI migration that required thousands of users to adapt 
                  to new interfaces and workflows. The existing learning resources were fragmented, 
                  poorly attended, and failing to drive the adoption metrics needed for successful 
                  product transition. Users were confused, support tickets were increasing, and the 
                  engineering team needed a scalable solution that could reach diverse user segments.
                </p>
              </Card>
            </section>

            {/* Approach Section */}
            <section className="mb-16">
              <h2 className="mb-8">Strategic Approach</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Cross-Functional Partnership</h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Partnered directly with the engineering team to understand technical constraints, 
                    migration timelines, and key user pain points. Conducted stakeholder interviews 
                    with product managers, UX designers, and customer success teams to align on 
                    business objectives and success metrics.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Multi-Session Program Design</h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Redesigned the workshop series from a one-time event into a progressive learning 
                    journey. Created three distinct sessions targeting different user maturity levels, 
                    each building on the previous session's concepts. Incorporated hands-on exercises, 
                    real-world scenarios, and interactive Q&A segments.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Data-Driven Content Strategy</h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Analyzed existing support ticket data, user analytics, and feedback surveys to 
                    identify the most critical learning gaps. Prioritized content based on impact and 
                    frequency of user issues. Created modular content blocks that could be remixed 
                    for different audience segments.
                  </p>
                </div>
              </div>
            </section>

            {/* Program Screenshots Carousel */}
            <section className="mb-20">
              <h2 className="mb-8 text-center">Program Interface & Content</h2>
              {/* 
                TO UPDATE CAROUSEL:
                1. Replace slide image paths in the imports at the top of this file
                2. Update the alt text below to describe each screenshot accurately
                3. Add or remove slides by modifying the slides array
              */}
              <ImageCarousel 
                slides={[
                  { 
                    src: slide1, 
                    alt: "UI Migration Workshop dashboard showing session overview and participant progress - Replace with actual workshop interface screenshot" 
                  },
                  { 
                    src: slide2, 
                    alt: "Workshop engagement metrics and analytics dashboard - Replace with actual metrics screenshot" 
                  },
                  { 
                    src: slide3, 
                    alt: "Interactive workshop content showing before-and-after UI comparisons - Replace with actual content screenshot" 
                  },
                ]}
                ariaLabel="UI Migration Workshop program screenshots"
              />
            </section>

            {/* Results Section */}
            <section className="mb-16">
              <h2 className="mb-8">Measurable Impact</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <Card className="p-8 bg-primary/5 border-2 border-primary/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">+18%</div>
                      <p className="text-foreground">Increase in page views and engagement metrics</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-secondary/5 border-secondary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">3x</div>
                      <p className="text-foreground">Sessions per user compared to previous format</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Reduced support ticket volume related to UI migration by 40%
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Established reusable workshop framework adopted by other product teams
                    </p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Key Takeaways Section */}
            <section className="mb-12">
              <h2 className="mb-6">Key Takeaways</h2>
              <Card className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Cross-functional alignment is critical:</strong> Early 
                      partnership with engineering led to technical accuracy and credibility with users.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Progressive learning works:</strong> Breaking complex 
                      topics into digestible sessions improved retention and engagement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Data should drive design:</strong> Using support data 
                      and analytics ensured we addressed real user needs, not assumptions.
                    </span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="inline-block border-t border-border pt-8">
                <p className="text-muted-foreground mb-4">Interested in similar outcomes?</p>
                <Button size="lg" asChild className="focus-visible-ring">
                  <a href="/#contact">Let's Talk</a>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyUIMigration;
