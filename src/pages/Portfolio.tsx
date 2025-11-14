import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile-placeholder.jpg";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import caseStudy4 from "@/assets/case-study-4.jpg";
import { ArrowRight, CheckCircle2, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative py-24 md:py-40 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(31, 75, 153, 0.95) 0%, rgba(42, 157, 143, 0.95) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-primary-foreground mb-8">
                Learning Experience Designer | Turning Complex Problems Into Scalable Solutions
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl">
                Specializing in user-centric design, data storytelling, SaaS product enablement, 
                and cross-functional collaboration to drive measurable business impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="focus-visible-ring shadow-lg hover:shadow-xl transition-shadow">
                  <a href="#work">
                    View Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 focus-visible-ring backdrop-blur-sm">
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <h2 className="mb-8">About Me</h2>
                <div className="space-y-6 text-foreground text-lg">
...
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl ring-4 ring-primary/10">
                    <img
                      src={profileImage}
                      alt="Professional portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
                    10+ Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="py-24 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="mb-6">Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore case studies showcasing strategic learning solutions, cross-functional 
                collaboration, and measurable business impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <CaseStudyCard
                title="UI Migration Workshop Program"
                description="Redesigned multi-session workshop program driving +18% page views through cross-functional engineering partnership at Dayforce."
                image={caseStudy1}
                link="/case-study/ui-migration"
                metric="+18% Views"
              />
              <CaseStudyCard
                title="Reporting & Analytics Learning Program"
                description="Business-aligned enablement program designed to drive adoption of critical reporting and analytics features."
                image={caseStudy2}
                link="/case-study/analytics-program"
              />
              <CaseStudyCard
                title="LXP Integration Product Work"
                description="Led content architecture, requirements gathering, and workflow design for Learning Experience Platform integration."
                image={caseStudy3}
                link="/case-study/lxp-integration"
              />
              <CaseStudyCard
                title="Customer Success Skills Enablement Program"
                description="Consultative analysis and multi-phase training program designed to improve rapport-building, communication quality, and CSAT outcomes for Customer Success Advocates."
                image={caseStudy4}
                link="/case-study/customer-success"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="mb-6">Skills & Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive toolkit for creating impactful learning experiences and driving 
                product adoption.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Learning Strategy",
                "Instructional Design for SaaS",
                "Product-Aligned Enablement",
                "Data Storytelling",
                "Content Architecture",
                "Cross-Functional Influence",
                "AI-Powered Content Development",
                "User-Centric Design",
              ].map((skill) => (
                <Card key={skill} className="p-6 bg-gradient-card hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-lg font-medium text-foreground">{skill}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="mb-6">Get In Touch</h2>
                <p className="text-xl text-muted-foreground">
                  Let's discuss how we can work together to create impactful learning experiences.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-8 shadow-lg border-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="focus-visible-ring"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="focus-visible-ring"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="focus-visible-ring"
                        aria-required="true"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full focus-visible-ring shadow-md hover:shadow-lg transition-shadow">
                      Send Message
                    </Button>
                  </form>
                </Card>
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                    <div className="space-y-6">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-foreground hover:text-primary transition-colors focus-visible-ring p-3 -ml-3 rounded-lg hover:bg-muted/50"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="text-lg">LinkedIn Profile</span>
                      </a>
                      <a
                        href="mailto:contact@example.com"
                        className="flex items-center gap-4 text-foreground hover:text-primary transition-colors focus-visible-ring p-3 -ml-3 rounded-lg hover:bg-muted/50"
                      >
                        <Mail className="h-6 w-6" />
                        <span className="text-lg">contact@example.com</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="lg" asChild className="w-full focus-visible-ring border-2 shadow-sm hover:shadow-md transition-shadow">
                      <a href="/resume.pdf" download>
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
