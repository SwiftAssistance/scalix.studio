import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Components
import ScrollReveal from '../components/animated/ScrollReveal';
import MagneticButton from '../components/animated/MagneticButton';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

// Data
import { services } from '../data/services';

// Animations
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

const Services = () => {
  return (
    <div className="bg-charcoal pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">Full-Service Creative Agency</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-h1 text-cream mb-6">Services That Scale</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-gray-soft">
              End-to-end creative and strategic support designed to help ambitious brands break through the noise and scale sustainably.
            </p>
          </ScrollReveal>
        </div>

        {/* Service Icons Grid */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-navy transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-coral/20 flex items-center justify-center group-hover:bg-coral/30 transition-colors">
                    <Icon className="text-coral" size={24} />
                  </div>
                  <span className="text-sm text-center text-gray-soft group-hover:text-cream transition-colors">
                    {service.title.split('&')[0].trim()}
                  </span>
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Service Details Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${isEven ? 'bg-navy' : 'bg-charcoal'}`}
          >
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <ScrollReveal variant={isEven ? slideInLeft : slideInRight}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-16 h-16 rounded-xl bg-coral/20 flex items-center justify-center mb-6">
                      <Icon className="text-coral" size={32} />
                    </div>

                    <h2 className="font-display text-h2 text-cream mb-4">{service.title}</h2>
                    <p className="text-body-lg text-gray-soft mb-8">{service.description}</p>

                    <div className="flex gap-4 mb-8">
                      <MagneticButton>
                        <Button href="/contact">Discuss This Service</Button>
                      </MagneticButton>
                      <Button href="/work" variant="ghost">
                        View Results
                      </Button>
                    </div>

                    <div className="inline-flex items-center gap-3 px-4 py-3 bg-coral/10 rounded-lg">
                      <div className="text-coral font-mono text-sm font-semibold">
                        {service.caseStudyStat}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* What's Included + Benefits */}
                <ScrollReveal
                  variant={isEven ? slideInRight : slideInLeft}
                  delay={0.2}
                >
                  <Card padding="lg" className={isEven ? 'lg:order-1' : ''}>
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-semibold text-cream mb-4">
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        {service.whatsIncluded.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-coral flex-shrink-0 mt-1" size={18} />
                            <span className="text-body text-gray-soft">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-semibold text-cream mb-4">
                        Results & Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                            <span className="text-body text-gray-soft">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Scalix Section */}
      <section className="py-24 bg-cream text-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-h2 mb-12 text-center">Why Scalix?</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <Card hoverable={false} padding="lg" className="bg-white h-full">
                  <h3 className="font-heading text-xl font-semibold text-coral mb-3">
                    Typical Agency Approach
                  </h3>
                  <ul className="space-y-2 text-gray-soft">
                    <li>• Cookie-cutter templates and strategies</li>
                    <li>• Junior team members executing your project</li>
                    <li>• Slow turnaround times (4-6 weeks)</li>
                    <li>• Unclear pricing and hidden costs</li>
                    <li>• Minimal communication and updates</li>
                    <li>• Vanity metrics over real results</li>
                  </ul>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card hoverable={false} padding="lg" className="bg-charcoal h-full border-2 border-coral">
                  <h3 className="font-heading text-xl font-semibold text-coral mb-3">
                    The Scalix Difference
                  </h3>
                  <ul className="space-y-2 text-cream">
                    <li>• Bespoke strategies tailored to your goals</li>
                    <li>• Senior-level attention on every project</li>
                    <li>• Fast execution without sacrificing quality</li>
                    <li>• Transparent pricing with no surprises</li>
                    <li>• Weekly updates and open communication</li>
                    <li>• Obsessed with metrics that matter</li>
                  </ul>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-body-lg text-gray-soft mb-8">
                  Ready to experience the difference? Let's talk about your goals.
                </p>
                <MagneticButton>
                  <Button href="/contact" size="lg">
                    Start Your Growth Journey <ArrowRight className="ml-2" size={20} />
                  </Button>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-h2 text-cream mb-12">
                Trusted by Ambitious Brands Across Industries
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
                {/* Placeholder for client logos */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-navy rounded-lg flex items-center justify-center"
                  >
                    <span className="text-gray-soft text-sm">Client Logo</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-h1 text-cream mb-6">
                Let's Build Your Growth Plan
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-gray-soft mb-12">
                Every great partnership starts with a conversation. Tell us about your goals, and we'll show you how we can help you achieve them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <MagneticButton>
                <Button href="/contact" size="lg">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
