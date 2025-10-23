import productDemo from "@/assets/product-demo.jpg";
import { Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const capabilities = [
    "Automated data analysis and reporting",
    "Natural language query processing",
    "Predictive analytics and forecasting",
    "Real-time decision recommendations",
  ];

  return (
    <section id="demo" className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              See <span className="gradient-text">VisionAI</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how VisionAI transforms business intelligence with intuitive AI-powered insights.
            </p>
          </div>

          {/* Demo Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
              <div className="relative glass-card rounded-2xl overflow-hidden border-primary/20">
                <img 
                  src={productDemo} 
                  alt="VisionAI Dashboard" 
                  className="w-full h-auto"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="hero" size="lg" className="rounded-full w-20 h-20 p-0">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Capabilities List */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Key Capabilities</h3>
                <p className="text-muted-foreground">
                  VisionBot delivers enterprise-grade AI functionality that seamlessly integrates with your workflow:
                </p>
              </div>

              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 glass-card p-4 rounded-lg hover:border-primary/30 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="hero" size="lg">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
