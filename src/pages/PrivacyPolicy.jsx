import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy & Cookie Policy | Scalix Studios"
        description="Learn about how Scalix Studios collects, uses, and protects your data, and how we use cookies to improve your website experience."
        canonical="https://www.scalixstudios.co.uk/privacy-policy"
        noindex={true}
      />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <header className="text-center border-b pb-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Privacy & Cookie Policy</h1>
              <p className="mt-4 text-lg text-gray-500">Last Updated: 10 September 2025</p>
            </header>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p>Welcome to Scalix Studios. We are committed to protecting your privacy and handling your data in an open and transparent manner. This policy details how we collect, use, and safeguard your personal information and explains our use of cookies.</p>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">1. Information We Collect</h2>
                <p className="mb-4">We may collect personal information that you voluntarily provide to us when you fill out a contact or quote form, or communicate with us via email. This may include:</p>
                <ul className="list-disc list-inside mb-4 pl-4">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your phone number (optional)</li>
                  <li>Details about your project or inquiry</li>
                </ul>
                <p>We also collect non-personal information automatically as you navigate the site, such as your IP address, browser type, and operating system, through the use of cookies.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">2. How We Use Your Information</h2>
                <p className="mb-4">The information we collect is used for the following purposes:</p>
                <ul className="list-disc list-inside mb-4 pl-4">
                  <li>To respond to your inquiries and provide you with a quote or information.</li>
                  <li>To improve our website and services by analyzing how our site is used.</li>
                  <li>To communicate with you about our services, if you have opted in.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">3. Cookie Policy</h2>
                <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">What Are Cookies?</h3>
                <p className="mb-4">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the site owners.</p>
                <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">How We Use Cookies</h3>
                <p className="mb-4">We use cookies for a few key purposes:</p>
                <ul className="list-disc list-inside mb-4 pl-4">
                  <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They include, for example, cookies that remember your cookie consent choices.</li>
                  <li><strong>Analytics & Performance Cookies:</strong> These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website.</li>
                  <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website, enabling us to remember your preferences.</li>
                </ul>
                <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">Your Choices Regarding Cookies</h3>
                <p>When you first visit our site, you are presented with a choice to accept or decline cookies. If you decline, we will only use essential cookies. You can also control cookies through your browser settings.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">4. Data Security</h2>
                <p>We are committed to ensuring that your information is secure. We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online to prevent unauthorized access or disclosure.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">5. Your Rights</h2>
                <p>You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, and to request the deletion of your personal data. Please contact us using the details below to exercise these rights.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">6. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-800">7. Contact Us</h2>
                <p className="mb-4">If you have any questions about this privacy policy or our data practices, please contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:info@scalixstudios.co.uk" className="text-blue-600 hover:underline">info@scalixstudios.co.uk</a><br /><strong>Address:</strong> Barry Avenue, Windsor, SL4 5JA</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
