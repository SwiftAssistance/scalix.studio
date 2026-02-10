import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Scalix Studios | Berkshire Digital Agency"
        description="Get in touch with Scalix Studios, your local web design and SEO agency in Windsor, Berkshire. Let's discuss your project and how we can help your business grow."
        keywords="contact digital agency, berkshire web design contact, seo agency windsor, get a quote, scalix studios contact"
        canonical="https://www.scalixstudios.co.uk/contact"
      />

      <ParticleHero className="py-20 md:py-32">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Get In Touch</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">We&apos;re here to answer any questions you may have. Reach out to us and we&apos;ll respond as soon as we can.</p>
      </ParticleHero>

      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8">Based in the heart of Windsor, we&apos;re proud to serve businesses throughout Berkshire and the Thames Valley. Feel free to visit, call, or email us.</p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl text-indigo-600 mt-1 mr-4" />
                    <div><h3 className="font-bold text-lg">Our Address</h3><p className="text-slate-600">Barry Avenue, Windsor, SL4 5JA</p></div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-2xl text-indigo-600 mt-1 mr-4" />
                    <div><h3 className="font-bold text-lg">Email Us</h3><a href="mailto:info@scalixstudios.co.uk" className="text-slate-600 hover:text-indigo-600 transition-colors">info@scalixstudios.co.uk</a></div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-2xl text-indigo-600 mt-1 mr-4" />
                    <div><h3 className="font-bold text-lg">Call Us</h3><a href="tel:01753257401" className="text-slate-600 hover:text-indigo-600 transition-colors">01753 257401</a></div>
                  </div>
                </div>
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.29969185108!2d-0.6148386842320146!3d51.48161197963073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767addc8b98139%3A0x6b742844b207865c!2sBarry%20Ave%2C%20Windsor%20SL4%205JA%2C%20UK!5e0!3m2!1sen!2sus!4v1678886475653!5m2!1sen!2sus" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Scalix Studios Location"></iframe>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
