import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import ScrollReveal from '../components/animated/ScrollReveal';
import MagneticButton from '../components/animated/MagneticButton';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

// Data
import { caseStudies } from '../data/caseStudies';
import { SERVICE_CATEGORIES } from '../utils/constants';

// Animations
import { fadeInUp, staggerContainerFast } from '../utils/animations';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCaseStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category.includes(activeFilter));

  return (
    <div className="bg-charcoal pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">Portfolio</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-h1 text-cream mb-6">Work That Works</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-gray-soft">
              Results-driven campaigns and creative work that helped ambitious brands scale
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-coral text-charcoal shadow-glow'
                    : 'bg-navy text-cream hover:bg-navy/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerFast}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredCaseStudies.map((study, i) => (
              <motion.a
                key={study.id}
                href={`#${study.id}`}
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card hoverable className="group h-full">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-navy">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
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
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Detailed Case Studies */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-h2 text-cream mb-4">Featured Case Studies</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-gray-soft">
              Deep dives into our most impactful work
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {caseStudies.slice(0, 4).map((study, index) => (
            <div key={study.id} id={study.id}>
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-navy mb-6">
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {study.testimonial && (
                      <Card hoverable={false} padding="md" className="bg-navy">
                        <p className="text-body text-gray-soft italic mb-4">
                          "{study.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-coral">
                              {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-heading font-semibold text-cream text-sm">
                              {study.testimonial.author}
                            </div>
                            <div className="text-xs text-gray-soft">{study.testimonial.role}</div>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.category.map((cat) => (
                        <Badge key={cat} variant="gold">
                          {cat}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="font-display text-h2 text-cream mb-2">{study.title}</h3>
                    <p className="text-body text-coral mb-6">{study.industry} • {study.year}</p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-cream mb-2">
                          The Challenge
                        </h4>
                        <p className="text-body text-gray-soft">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-heading text-lg font-semibold text-cream mb-2">
                          Our Solution
                        </h4>
                        <p className="text-body text-gray-soft">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, i) => (
                        <Card key={i} hoverable={false} padding="md" className="bg-navy text-center">
                          <div className="text-2xl font-display font-bold text-coral mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-soft">{result.label}</div>
                        </Card>
                      ))}
                    </div>

                    {/* Services Used */}
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <Badge key={service} variant="cream">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {index < 3 && <div className="border-t border-navy my-16" />}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-h2 text-cream text-center mb-16">
                Results Across All Clients
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: '50+', label: 'Brands Scaled' },
                { metric: '340%', label: 'Avg. Traffic Increase' },
                { metric: '£2.4M+', label: 'Revenue Generated' },
                { metric: '98%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-display font-bold text-coral mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-body text-gray-soft">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-h1 text-cream mb-6">
                Your Brand Could Be Next
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-gray-soft mb-12">
                Ready to see similar results for your brand? Let's discuss your goals and create a tailored strategy that delivers.
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

export default Work;
