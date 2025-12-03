import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import ScrollReveal from '../components/animated/ScrollReveal';
import MagneticButton from '../components/animated/MagneticButton';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

// Utils
import { CONTACT_INFO } from '../utils/constants';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFAQ, setShowFAQ] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setIsSubmitting(false);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const toggleFAQ = (index) => {
    setShowFAQ((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        'Most projects take 4-8 weeks from kickoff to launch, depending on scope. We work efficiently without sacrificing quality, and can often accommodate urgent timelines if needed.',
    },
    {
      question: 'Do you work with startups?',
      answer:
        'Absolutely! We love working with ambitious startups. We offer flexible engagement models and can scale our services as your business grows.',
    },
    {
      question: "What's your pricing structure?",
      answer:
        'Our pricing is transparent and based on project scope. Most projects range from £5k to £50k+. We offer both project-based and retainer options. Book a call to discuss your specific needs.',
    },
    {
      question: 'Do you offer retainer services?',
      answer:
        'Yes! Many of our clients work with us on an ongoing retainer basis for continuous optimization, content creation, and strategic support. Retainers start at £3k/month.',
    },
  ];

  return (
    <div className="bg-charcoal pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6">Let's Talk</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-h1 text-cream mb-6">
              Let's Create Something Incredible
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-gray-soft">
              Whether you're ready to scale or just exploring, we'd love to hear from you
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <ScrollReveal>
            <Card padding="xl">
              <h2 className="font-heading text-h3 text-cream mb-6">Send us a message</h2>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="text-green-500" size={32} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-body text-gray-soft">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <Input
                      label="Name *"
                      placeholder="Your name"
                      error={errors.name?.message}
                      {...register('name')}
                    />

                    <Input
                      label="Email *"
                      type="email"
                      placeholder="you@company.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />

                    <Input
                      label="Company"
                      placeholder="Your company name"
                      {...register('company')}
                    />

                    <div>
                      <label className="block mb-2 text-sm font-heading font-semibold text-cream">
                        Service Interest *
                      </label>
                      <select
                        {...register('service')}
                        className="w-full px-4 py-3 bg-navy border-2 border-navy rounded-lg font-body text-cream focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="all">Not sure / Multiple</option>
                        <option value="seo">SEO & Search Marketing</option>
                        <option value="social">Social Media Management</option>
                        <option value="branding">Brand Identity & Strategy</option>
                        <option value="web">Web Design & Development</option>
                        <option value="strategy">Marketing Strategy</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-heading font-semibold text-cream">
                        Budget Range *
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-3 bg-navy border-2 border-navy rounded-lg font-body text-cream focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                      >
                        <option value="">Select a budget range</option>
                        <option value="under5k">Under £5,000</option>
                        <option value="5k-15k">£5,000 - £15,000</option>
                        <option value="15k-30k">£15,000 - £30,000</option>
                        <option value="30k-50k">£30,000 - £50,000</option>
                        <option value="50k+">£50,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                      )}
                    </div>

                    <TextArea
                      label="Message *"
                      rows={6}
                      placeholder="Tell us about your project..."
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    <MagneticButton className="w-full">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message <Send className="ml-2" size={18} />
                          </>
                        )}
                      </Button>
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <Card padding="lg">
                <h3 className="font-heading text-xl font-semibold text-cream mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-coral/30 transition-colors">
                      <Mail className="text-coral" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-soft mb-1">Email</div>
                      <div className="text-body text-cream group-hover:text-coral transition-colors">
                        {CONTACT_INFO.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-coral/30 transition-colors">
                      <Phone className="text-coral" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-soft mb-1">Phone</div>
                      <div className="text-body text-cream group-hover:text-coral transition-colors">
                        {CONTACT_INFO.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-coral" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-soft mb-1">Location</div>
                      <div className="text-body text-cream">{CONTACT_INFO.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-coral" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-soft mb-1">Office Hours</div>
                      <div className="text-body text-cream">{CONTACT_INFO.hours}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card padding="lg" className="bg-cream text-charcoal">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Prefer to chat first?
                </h3>
                <p className="text-body text-gray-soft mb-6">
                  Book a free 30-minute strategy call to discuss your goals and see if we're a good fit.
                </p>
                <Button href="#" variant="secondary" size="md">
                  Schedule a Call
                </Button>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-h2 text-cream mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card hoverable={false} padding="md" className="cursor-pointer">
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <h3 className="font-heading text-lg font-semibold text-cream pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`text-coral transform transition-transform ${
                        showFAQ[i] ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </div>
                  </button>

                  <AnimatePresence>
                    {showFAQ[i] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-body text-gray-soft mt-4 pt-4 border-t border-cream/10">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
