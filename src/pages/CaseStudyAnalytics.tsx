import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudyImage from "@/assets/case-study-2.jpg";

const CaseStudyAnalytics = () => {
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
              <h1 className="mb-6">Reporting & Analytics Learning Program</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Business-aligned enablement program designed to drive adoption of critical reporting 
                and analytics features across diverse user segments.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-20 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <img
              src={caseStudyImage}
              alt="Reporting and Analytics Learning Program overview"
              className="w-full rounded-xl shadow-xl mb-16"
            />

            {/* Problem Section */}
            <section className="mb-16">
              <h2 className="mb-8">The Challenge</h2>
              <Card className="p-10 bg-gradient-card border-2 shadow-lg">
                <p className="text-lg text-foreground leading-relaxed">
                  A powerful reporting and analytics suite was being underutilized despite significant 
                  product investment. User research revealed that while the features existed, customers 
                  didn't understand when to use them, how they connected to business outcomes, or what 
                  insights they could uncover. The product team needed a learning solution that would 
                  translate technical capabilities into business value and drive feature adoption.
                </p>
              </Card>
            </section>

            {/* Approach Section */}
            <section className="mb-16">
              <h2 className="mb-8">Strategic Approach</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Business-First Learning Design</h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Shifted the narrative from "how the tool works" to "what business questions you can 
                    answer." Interviewed executive stakeholders to understand their decision-making needs 
                    and reverse-engineered learning paths that started with business outcomes and ended 
                    with technical execution.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Persona-Based Content Strategy</h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Created distinct learning tracks for three primary personas: business analysts, 
                    HR leaders, and system administrators. Each track emphasized different use cases, 
                    complexity levels, and success metrics relevant to that role's responsibilities.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Data Storytelling Framework</h3>
                  <p className="text-foreground leading-relaxed text-lg">
                    Developed a storytelling framework that taught users not just to generate reports, 
                    but to extract insights and communicate findings to stakeholders. Included templates, 
                    best practices for visualization, and sample narratives for common business scenarios.
                  </p>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-16">
              <h2 className="mb-8">Measurable Impact</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <Card className="p-8 bg-secondary/5 border-2 border-secondary/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">45%</div>
                      <p className="text-foreground">Increase in active users of analytics features</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
                      <p className="text-foreground">Growth in custom report creation month-over-month</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      NPS score for analytics features improved from 42 to 68
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Learning content became the most-viewed resource in product documentation
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
                      <strong className="text-heading">Lead with business value:</strong> Users care more 
                      about what they can achieve than how features work technically.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Personalization drives engagement:</strong> Tailoring 
                      content to specific personas significantly improved completion rates.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Teach insights, not just tools:</strong> The data 
                      storytelling framework transformed users from report generators to strategic advisors.
                    </span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="inline-block border-t border-border pt-8">
                <p className="text-muted-foreground mb-4">Want to drive adoption for your product?</p>
                <Button size="lg" asChild className="focus-visible-ring">
                  <a href="/#contact">Get In Touch</a>
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

export default CaseStudyAnalytics;
