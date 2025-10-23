import { TrendingUp, Users, BarChart3, Award } from "lucide-react";

const InvestorSection = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Scalable Technology",
      description: "Built on cloud-native architecture that scales effortlessly from startups to enterprises.",
    },
    {
      icon: Users,
      title: "Strong Research Team",
      description: "Led by PhDs and industry veterans with 50+ years of combined AI experience.",
    },
    {
      icon: BarChart3,
      title: "High Market Growth",
      description: "Targeting a $500B AI market with 40% projected annual growth through 2030.",
    },
    {
      icon: Award,
      title: "Early Enterprise Traction",
      description: "Already trusted by Fortune 500 companies with 95% customer retention rate.",
    },
  ];

  return (
    <section id="investors" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Why Choose <span className="gradient-text">VisionAI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just building technology — we're creating the future of intelligent business operations.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Investment CTA */}
          <div className="glass-card p-12 rounded-2xl border-primary/30 text-center space-y-6">
            <h3 className="text-3xl font-bold gradient-text">Join Our Growth Story</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're raising our Series A to accelerate product development and market expansion. Partner with us to revolutionize the AI industry.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">$5M</div>
                <div className="text-sm text-muted-foreground">Target Raise</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">300%</div>
                <div className="text-sm text-muted-foreground">YoY Growth</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
