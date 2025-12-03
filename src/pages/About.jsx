import { ArrowRight, Target, Users, TrendingUp, Heart } from 'lucide-react';

// Components
import ScrollReveal from '../components/animated/ScrollReveal';
import MagneticButton from '../components/animated/MagneticButton';
import LiquidBlob from '../components/animated/LiquidBlob';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Data-Driven Creativity',
      description: 'We blend beautiful design with hard metrics. Every creative decision is informed by data, tested rigorously, and optimized for results.',
    },
    {
      icon: Users,
      title: 'Transparent Partnership',
      description: 'No smoke and mirrors. We believe in open communication, honest feedback, and collaborative decision-making every step of the way.',
    },
    {
      icon: TrendingUp,
      title: 'Relentless Optimization',
      description: 'We don\'t set and forget. We continuously monitor, test, and refine to ensure you\'re always getting the best possible results.',
    },
    {
      icon: Heart,
      title: 'Invested in Your Success',
      description: 'Your wins are our wins. We\'re not just vendors—we\'re partners who genuinely care about helping you achieve your goals.',
    },
  ];

  const processSteps = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      description: 'We immerse ourselves in your business, industry, and audience. Through workshops, research, and audits, we uncover opportunities and define clear objectives.',
      deliverables: ['Competitive analysis', 'Audience research', 'Current state audit', 'Opportunity mapping'],
    },
    {
      phase: 'Strategy',
      duration: '1-2 weeks',
      description: 'We craft a comprehensive, data-driven strategy tailored to your goals. This becomes our roadmap for everything that follows.',
      deliverables: ['Strategic framework', 'Channel recommendations', 'Content strategy', 'Success metrics & KPIs'],
    },
    {
      phase: 'Creation',
      duration: '3-6 weeks',
      description: 'Our team brings your vision to life with exceptional craft. We maintain close collaboration, gathering feedback and iterating quickly.',
      deliverables: ['Design assets', 'Website development', 'Content creation', 'Campaign materials'],
    },
    {
      phase: 'Launch',
      duration: '1 week',
      description: 'We deploy with precision, ensuring everything is optimized, tested, and ready to perform. We monitor closely and address any issues immediately.',
      deliverables: ['Quality assurance', 'Final optimizations', 'Launch execution', 'Initial monitoring'],
    },
    {
      phase: 'Growth',
      duration: 'Ongoing',
      description: 'Post-launch, we continuously monitor performance, run experiments, and optimize based on real data. We scale what works and pivot away from what doesn\'t.',
      deliverables: ['Performance monitoring', 'A/B testing', 'Continuous optimization', 'Monthly reporting'],
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Founder & Creative Director',
      bio: '15+ years leading creative strategies for ambitious brands.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Strategy',
      bio: 'Ex-consultant turned agency strategist. Data is her love language.',
    },
    {
      name: 'James Chen',
      role: 'Lead Developer',
      bio: 'Full-stack wizard who builds fast, beautiful, conversion-optimized sites.',
    },
    {
      name: 'Emma Wilson',
      role: 'Social Media Director',
      bio: 'Grew 5 brands from 0 to 50k+ followers. Storytelling specialist.',
    },
    {
      name: 'Marcus Johnson',
      role: 'SEO Lead',
      bio: 'Former Google consultant. Obsessed with ranking #1.',
    },
    {
      name: 'Olivia Taylor',
      role: 'Brand Designer',
      bio: 'Award-winning designer who creates identities that last.',
    },
  ];

  return (
    <div className="bg-charcoal pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative">
        <LiquidBlob color="coral" size="large" className="top-0 right-0 opacity-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <Badge className="mb-6">Berkshire's Creative Powerhouse</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-h1 text-cream mb-6">We're Scalix Studios</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-gray-soft mb-8">
              A creative studio obsessed with results
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-h2 text-cream mb-6">Our Story</h2>
                <p className="text-body text-gray-soft mb-4">
                  Scalix Studios was born from a simple frustration: too many agencies deliver beautiful work that doesn't deliver results. Or worse, they chase metrics that don't actually matter to the business.
                </p>
                <p className="text-body text-gray-soft mb-4">
                  We started in 2019 with a different philosophy: combine world-class creativity with rigorous data analysis. Make every decision intentional. Measure everything that matters.
                </p>
                <p className="text-body text-gray-soft">
                  Today, we're proud to partner with ambitious brands across the UK and beyond—from funded startups to established enterprises—helping them scale sustainably through strategy, design, and marketing that works.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card padding="lg" className="bg-navy">
                <h3 className="font-heading text-xl font-semibold text-cream mb-6">Why Berkshire?</h3>
                <p className="text-body text-gray-soft mb-4">
                  We're based in Berkshire because it's home—but our reach is global. We work with clients across the UK, Europe, and beyond.
                </p>
                <p className="text-body text-gray-soft">
                  Being outside London gives us the advantage of lower overheads (which we pass on to you) while maintaining the same world-class standards as any top-tier London agency.
                </p>

                <div className="mt-8 pt-8 border-t border-cream/10">
                  <div className="text-3xl font-display font-bold text-coral mb-2">50+</div>
                  <div className="text-sm text-gray-soft">Brands scaled since 2019</div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream text-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display text-h2 mb-4">Our Values</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-gray-soft">
                These principles guide every decision we make
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card hoverable={false} padding="lg" className="bg-white h-full">
                    <div className="w-12 h-12 rounded-lg bg-coral/20 flex items-center justify-center mb-4">
                      <Icon className="text-coral" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                      {value.title}
                    </h3>
                    <p className="text-body text-gray-soft">{value.description}</p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display text-h2 text-cream mb-4">Meet the Team</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-gray-soft">
                Senior-level experts who care deeply about your success
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card hoverable padding="lg" className="text-center">
                  <div className="w-24 h-24 rounded-full bg-navy mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-coral">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-cream mb-1">
                    {member.name}
                  </h3>
                  <div className="text-coral text-sm mb-3">{member.role}</div>
                  <p className="text-sm text-gray-soft">{member.bio}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Deep Dive Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display text-h2 text-cream mb-4">Our Process</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-gray-soft">
                A proven five-phase framework that transforms ambitious ideas into measurable results
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card hoverable={false} padding="lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                        <span className="text-xl font-display font-bold text-coral">
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-heading text-xl font-semibold text-cream">
                          {step.phase}
                        </h3>
                        <Badge variant="gold">{step.duration}</Badge>
                      </div>
                      <p className="text-body text-gray-soft mb-4">{step.description}</p>
                      <div>
                        <div className="text-sm font-heading font-semibold text-cream mb-2">
                          Deliverables:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, j) => (
                            <Badge key={j} variant="cream">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-h1 text-cream mb-6">Work With Us</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-gray-soft mb-12">
                Ready to partner with a team that's as invested in your success as you are? Let's talk about your goals and how we can help you achieve them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton>
                  <Button href="/contact" size="lg">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </Button>
                </MagneticButton>
                <Button href="/work" variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
