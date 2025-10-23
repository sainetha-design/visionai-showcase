import { Target, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="gradient-text">VisionAI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are a team of innovators developing AI solutions that enhance productivity and transform industries.
            </p>
          </div>

          {/* Mission, Vision, Goals Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="glass-card p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300 group animate-slide-up">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize AI technology and empower businesses of all sizes to leverage intelligent automation for sustainable growth and innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-8 rounded-2xl space-y-4 hover:border-accent/50 transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted AI partner, setting new standards in intelligent decision-making and business transformation.
              </p>
            </div>

            {/* Goals */}
            <div className="glass-card p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deliver cutting-edge AI solutions, achieve 10x market expansion, and build lasting partnerships with forward-thinking enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
