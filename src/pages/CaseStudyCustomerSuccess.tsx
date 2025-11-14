import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import caseStudyImage from "@/assets/case-study-4.jpg";
import { ArrowLeft, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyCustomerSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative py-24 md:py-40 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(31, 75, 153, 0.95) 0%, rgba(42, 157, 143, 0.95) 100%), url(${caseStudyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link to="/" className="inline-flex items-center text-primary-foreground hover:text-primary-foreground/80 mb-8 transition-colors focus-visible-ring text-lg font-medium">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-primary-foreground mb-8">
                Customer Success Skills Enablement Program
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Consultative analysis and multi-phase training program designed for a client's Customer Success team. 
                Demonstrates structured discovery, root cause analysis, and behavior-based learning strategy to improve 
                rapport-building, communication quality, and CSAT outcomes for new Customer Success Advocates.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center bg-gradient-card border-2 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                <p className="text-4xl font-bold text-heading mb-3">25</p>
                <p className="text-muted-foreground text-lg">New CS Advocates</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-card border-2 shadow-lg hover:shadow-xl transition-shadow">
                <Target className="h-10 w-10 text-secondary mx-auto mb-4" />
                <p className="text-4xl font-bold text-heading mb-3">3-Phase</p>
                <p className="text-muted-foreground text-lg">Blended Program</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-card border-2 shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="h-10 w-10 text-secondary mx-auto mb-4" />
                <p className="text-4xl font-bold text-heading mb-3">CSAT</p>
                <p className="text-muted-foreground text-lg">Target Maintained</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Context</h2>
              <Card className="p-10 bg-gradient-card border-2 shadow-lg">
                <p className="text-lg text-foreground leading-relaxed">
                  The client requested a single training session for 25 new Customer Success Advocates to learn how 
                  to communicate more effectively with customers over the phone. To ensure the solution addressed the 
                  true performance gaps, I led a structured root cause analysis to clarify behaviors, metrics, and 
                  business outcomes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="py-24 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Discovery & Root Cause Analysis</h2>
              <div className="space-y-8">
                <p className="text-lg text-foreground leading-relaxed">
                  I facilitated a 1–2 hour discovery session with stakeholders to reframe the request around 
                  observable behaviors, measurable outcomes, and operational impact.
                </p>
                
                <Card className="p-8 bg-card border-2 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-heading">Key Discovery Questions</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>What behaviors indicate effective customer interaction?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>How do we measure rapport, tone, and communication quality?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Which business metrics improve when advocates interact well (CSAT, escalation, resolution rates)?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Historical data: communication challenges, early-cohort trends, escalation patterns.</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">Key Insights</h2>
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed mb-6">
                  The analysis surfaced foundational gaps:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-heading">Knowledge</h3>
                    <p className="text-muted-foreground">
                      New hires lacked exposure to the client's service mindset.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-heading">Skill</h3>
                    <p className="text-muted-foreground">
                      Variation in active listening, tone control, and rapport-building.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-heading">Environment</h3>
                    <p className="text-muted-foreground">
                      Rigid scripts limiting authenticity; intermittent technical issues (non-training gap).
                    </p>
                  </Card>
                </div>

                <Card className="p-6 bg-accent/10 border-accent">
                  <h3 className="text-xl font-semibold mb-3 text-heading">Business Goal</h3>
                  <p className="text-foreground leading-relaxed">
                    Maintain new-hire CSAT within the defined target range throughout their first six months 
                    of customer interaction.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">Proposed Solution</h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                A multi-phase blended program titled <strong>Building Customer Connections and Trust</strong>, 
                designed to enable lasting behavior change rather than one-time exposure.
              </p>

              <Card className="p-6 mb-8 bg-background">
                <h3 className="text-xl font-semibold mb-4 text-heading">Learning Outcomes</h3>
                <p className="text-muted-foreground mb-4">Using a live or simulated call:</p>
                <ol className="space-y-3 text-foreground list-decimal list-inside">
                  <li>
                    Advocates establish rapport and trust in the first minute using tone, phrasing, and 
                    conversational techniques.
                  </li>
                  <li>
                    Advocates use active listening behaviors—paraphrasing, summarizing, confirming—to 
                    accurately identify customer needs before proposing solutions.
                  </li>
                </ol>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-heading">Program Structure</h3>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-heading">
                        Onboarding → First Contact
                      </h4>
                      <p className="text-sm font-medium text-secondary mb-3">
                        Goal: Build foundational knowledge and readiness
                      </p>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong className="text-foreground">Modalities:</strong> eLearning, workshops, scenario discussions</p>
                        <p><strong className="text-foreground">Evaluation:</strong> Knowledge checks + instructor observations</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-heading">
                        First Contact → Proficiency
                      </h4>
                      <p className="text-sm font-medium text-secondary mb-3">
                        Goal: Apply skills in real customer interactions
                      </p>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong className="text-foreground">Modalities:</strong> Role-plays, simulations, live-call observations</p>
                        <p><strong className="text-foreground">Evaluation:</strong> QA checklist—greetings, tone, rapport, emotional acknowledgment, uncovering needs, accuracy, resolution, closing</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-heading">
                        Proficiency → Continuous Development
                      </h4>
                      <p className="text-sm font-medium text-secondary mb-3">
                        Goal: Maintain results and deepen expertise
                      </p>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong className="text-foreground">Modalities:</strong> AI-triggered remediation, microlearning reinforcement, peer feedback, coaching</p>
                        <p><strong className="text-foreground">Evaluation:</strong> Ongoing QA + CSAT trend analysis</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">Impact</h2>
              <Card className="p-8 bg-gradient-subtle border-secondary">
                <p className="text-lg text-foreground leading-relaxed">
                  This case study demonstrates a <strong>data-informed, consultative learning strategy</strong> grounded 
                  in behavioral outcomes, performance metrics, and reinforcement—ensuring training translates into 
                  measurable improvements in customer communication and satisfaction.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Interested in Similar Solutions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how structured learning strategy can drive measurable business outcomes for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="focus-visible-ring">
                  <Link to="/#contact">Get In Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="focus-visible-ring">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    View More Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyCustomerSuccess;
