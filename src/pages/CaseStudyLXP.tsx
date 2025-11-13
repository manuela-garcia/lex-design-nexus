import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudyImage from "@/assets/case-study-3.jpg";

const CaseStudyLXP = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-subtle border-b border-border">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6 focus-visible-ring">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="max-w-4xl">
              <h1 className="mb-4">LXP Integration Product Work</h1>
              <p className="text-xl text-muted-foreground">
                Led content architecture, requirements gathering, and workflow design for a complex 
                Learning Experience Platform integration initiative.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <img
              src={caseStudyImage}
              alt="LXP Integration Product Work overview"
              className="w-full rounded-lg shadow-lg mb-12"
            />

            {/* Problem Section */}
            <section className="mb-12">
              <h2 className="mb-6">The Challenge</h2>
              <Card className="p-8 bg-muted/50">
                <p className="text-lg text-foreground leading-relaxed">
                  The organization needed to integrate a new Learning Experience Platform with existing 
                  HRIS systems, content repositories, and authentication infrastructure. The integration 
                  involved complex data flows, multiple stakeholder groups with competing priorities, 
                  and significant technical constraints. Success required clear requirements, structured 
                  content architecture, and workflows that balanced technical feasibility with user needs.
                </p>
              </Card>
            </section>

            {/* Approach Section */}
            <section className="mb-12">
              <h2 className="mb-6">Strategic Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-heading">Comprehensive Requirements Gathering</h3>
                  <p className="text-foreground leading-relaxed">
                    Facilitated cross-functional workshops with IT, HR, L&D, and security teams to 
                    document technical requirements, business constraints, and user expectations. Created 
                    detailed requirement matrices that linked business objectives to technical specifications 
                    and user stories.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-heading">Content Architecture Design</h3>
                  <p className="text-foreground leading-relaxed">
                    Designed a scalable content taxonomy that could accommodate current learning materials 
                    while supporting future growth. Mapped existing content to new structures, identified 
                    metadata standards, and created governance processes for content creation and maintenance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-heading">Workflow & Process Documentation</h3>
                  <p className="text-foreground leading-relaxed">
                    Documented end-to-end workflows for content ingestion, user provisioning, completion 
                    tracking, and reporting. Created process flows, decision trees, and handoff documents 
                    that could be used by both technical teams implementing the integration and operational 
                    teams managing it post-launch.
                  </p>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-12">
              <h2 className="mb-6">Measurable Impact</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">100%</div>
                      <p className="text-foreground">Stakeholder alignment on requirements and architecture</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-secondary/5 border-secondary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">30%</div>
                      <p className="text-foreground">Reduction in project timeline through clear requirements</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Content architecture supported 5,000+ learning assets without rework
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Workflow documentation became template for future integrations
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
                      <strong className="text-heading">Clear requirements save time:</strong> Investing 
                      upfront in thorough requirements prevented costly rework during implementation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Architecture must scale:</strong> Designing for 
                      future growth from the start proved critical as content volume expanded rapidly.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <strong className="text-heading">Documentation drives consistency:</strong> Detailed 
                      workflow documentation enabled smooth handoffs and reduced operational errors.
                    </span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="inline-block border-t border-border pt-8">
                <p className="text-muted-foreground mb-4">Need help with your next integration?</p>
                <Button size="lg" asChild className="focus-visible-ring">
                  <a href="/#contact">Discuss Your Project</a>
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

export default CaseStudyLXP;
