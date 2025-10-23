import { Brain, Zap, Shield, Puzzle } from "lucide-react";

const ProductSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Insights",
      description: "Leverage machine learning to forecast trends and make proactive decisions with confidence.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Real-time Automation",
      description: "Streamline operations with intelligent automation that adapts to your business needs instantly.",
      color: "accent",
    },
    {
      icon: Shield,
      title: "Secure Cloud Integration",
      description: "Enterprise-grade security with seamless cloud integration across all major platforms.",
      color: "primary",
    },
    {
      icon: Puzzle,
      title: "Custom AI Solutions",
      description: "Tailored AI models designed specifically for your industry and business challenges.",
      color: "accent",
    },
  ];

  return (
    <section id="product" className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Our <span className="gradient-text">AI Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet VisionBot — an intelligent AI assistant designed for business automation, powered by cutting-edge machine learning technology.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isAccent = feature.color === "accent";
              
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                    isAccent 
                      ? "bg-accent/10 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20" 
                      : "bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20"
                  }`}>
                    <Icon className={`w-7 h-7 ${isAccent ? "text-accent" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Product Description */}
          <div className="glass-card p-10 rounded-2xl border-primary/30">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-center">Transform Your Business Intelligence</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                VisionBot seamlessly integrates with your existing infrastructure, providing actionable insights and automating complex workflows. Our AI continuously learns from your data, becoming more efficient and accurate over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
