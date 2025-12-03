import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import SplitText from '../components/animated/SplitText';
import ScrollReveal from '../components/animated/ScrollReveal';
import MagneticButton from '../components/animated/MagneticButton';
import LiquidBlob from '../components/animated/LiquidBlob';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

// Data
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import { testimonials } from '../data/testimonials';

// Animations
import { fadeInUp, staggerContainer, staggerContainerFast } from '../utils/animations';

const Home = () => {
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured).slice(0, 3);
  const processSteps = [
    { number: '01', title: 'Discovery', description: 'We dive deep into your business, audience, and goals.' },
    { number: '02', title: 'Strategy', description: 'We craft a data-driven plan tailored to your objectives.' },
    { number: '03', title: 'Creation', description: 'Our team brings your vision to life with exceptional craft.' },
    { number: '04', title: 'Launch', description: 'We deploy with precision and monitor every metric.' },
    { number: '05', title: 'Growth', description: 'We optimize continuously, scaling what works.' },
  ];

  return (
    <div className="bg-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Blobs */}
        <LiquidBlob color="coral" size="xlarge" className="top-0 right-0 opacity-20" />
        <LiquidBlob color="gold" size="large" className="bottom-0 left-0 opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6">Berkshire's Premier Creative Agency</Badge>
            </motion.div>

            <h1 className="font-display text-display text-cream mb-6">
              <SplitText>We Scale Ambitious Brands</SplitText>
            </h1>

            <ScrollReveal delay={0.3}>
              <p className="text-body-lg text-gray-soft max-w-3xl mx-auto mb-12">
                Strategy. Design. Marketing. Results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton>
                  <Button href="/contact" size="lg">
                    Start Your Growth Journey <ArrowRight className="ml-2" size={20} />
                  </Button>
                </MagneticButton>
                <Button href="/work" variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="mt-16 flex items-center justify-center gap-12 text-sm text-gray-soft">
                <div>
                  <div className="text-3xl font-display font-bold text-coral mb-1">50+</div>
                  <div>Brands Scaled</div>
                </div>
                <div className="h-12 w-px bg-gray-soft/30" />
                <div>
                  <div className="text-3xl font-display font-bold text-coral mb-1">340%</div>
                  <div>Avg. Growth</div>
                </div>
                <div className="h-12 w-px bg-gray-soft/30" />
                <div>
                  <div className="text-3xl font-display font-bold text-coral mb-1">5★</div>
                  <div>Client Rating</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-coral rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-coral rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-cream text-charcoal">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-h1 max-w-4xl mb-12">
              Your Brand Deserves More Than Generic Marketing
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg">
                We're Scalix Studios—a creative agency obsessed with results. We combine data-driven strategy with standout design to help ambitious brands break through the noise and scale sustainably.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                {[
                  'No cookie-cutter solutions',
                  'No empty promises',
                  'Just creative work that works',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-coral flex-shrink-0" size={24} />
                    <span className="text-body-lg font-heading font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <ScrollReveal>
                <h2 className="font-display text-h2 text-cream mb-4">Featured Work</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-body text-gray-soft">Results that speak louder than words</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <Button href="/work" variant="ghost">
                View All <ArrowRight className="ml-2" size={18} />
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study, i) => (
              <ScrollReveal key={study.id} delay={i * 0.1}>
                <Link to={`/work#${study.id}`}>
                  <Card hoverable className="group">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-navy">
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex gap-2 mb-3">
                      {study.category.map((cat) => (
                        <Badge key={cat} variant="gold">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-heading text-h4 text-cream mb-2 group-hover:text-coral transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-body text-gray-soft mb-4">{study.industry}</p>
                    <div className="text-coral font-heading font-semibold">
                      {study.results[0].metric} {study.results[0].label}
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display text-h2 text-cream mb-4">
                End-to-End Creative & Strategic Support
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-gray-soft max-w-2xl mx-auto">
                From SEO that actually ranks to branding that resonates, we handle every element of your growth journey.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={i * 0.1}>
                  <Card hoverable padding="lg" className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-coral/20 flex items-center justify-center mb-4">
                      <Icon className="text-coral" size={24} />
                    </div>
                    <h3 className="font-heading text-h4 text-cream mb-3">{service.title}</h3>
                    <p className="text-body text-gray-soft mb-4">{service.shortDescription}</p>
                    <Link
                      to="/services"
                      className="text-coral font-heading font-semibold inline-flex items-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display text-h2 text-cream mb-4">Our Process</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-gray-soft max-w-2xl mx-auto">
                A proven framework that transforms ambitious ideas into measurable results
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-coral">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-soft">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-cream text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display text-h2 mb-4">Trusted by Ambitious Brands</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-gray-soft max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <ScrollReveal key={testimonial.id} delay={i * 0.1}>
                <Card hoverable className="h-full bg-white">
                  <p className="text-body text-charcoal mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-heading font-semibold text-charcoal">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-soft">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <LiquidBlob color="coral" size="xlarge" className="top-0 right-0 opacity-20" />
        <LiquidBlob color="gold" size="large" className="bottom-0 left-0 opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-h1 text-cream mb-6">Ready to Scale?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-gray-soft mb-12">
                Let's build something incredible together. Book a free strategy call and discover how we can transform your brand.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <MagneticButton>
                <Button href="/contact" size="lg">
                  Start Your Growth Journey <ArrowRight className="ml-2" size={20} />
                </Button>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
