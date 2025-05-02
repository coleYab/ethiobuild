import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const LegalPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Legal Policies</h1>
          <p className="mt-2 text-sm text-gray-600">Last updated: May 2, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Privacy Policy */}
          <AccordionItem value="privacy" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left text-lg font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none">
              Privacy Policy
            </AccordionTrigger>
            <AccordionContent className="p-4 border-t border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1. Introduction</h3>
                  <p className="mt-2 text-gray-600">
                    Your privacy is our priority. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">2. Information We Collect</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Personal Information: Name, email address, and contact details provided during account creation or inquiries.</li>
                    <li>Usage Data: Information about your interactions with our services, including IP addresses, browser type, and page views.</li>
                    <li>Cookies and Tracking: Data collected via cookies to enhance user experience (see Cookie Policy for details).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">3. How We Use Your Information</h3>
                  <p className="mt-2 text-gray-600">
                    We use your information to:
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Provide and improve our services.</li>
                    <li>Communicate with you about updates or support inquiries.</li>
                    <li>Analyze usage trends to enhance user experience.</li>
                    <li>Comply with legal and regulatory obligations.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">4. Your Rights</h3>
                  <p className="mt-2 text-gray-600">
                    You have the right to access, correct, or delete your personal data. Contact us at{' '}
                    <a href="mailto:privacy.ethiobuild@gmail.com" className="text-blue-600 hover:underline">
                      privacy.ethiobuild@gmail.com
                    </a>{' '}
                    to exercise these rights.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Terms of Service */}
          <AccordionItem value="tos" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left text-lg font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none">
              Terms of Service
            </AccordionTrigger>
            <AccordionContent className="p-4 border-t border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1. Acceptance of Terms</h3>
                  <p className="mt-2 text-gray-600">
                    By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">2. User Responsibilities</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Provide accurate and complete information during registration.</li>
                    <li>Maintain the confidentiality of your account credentials.</li>
                    <li>Refrain from unauthorized access, distribution of malware, or any illegal activities.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">3. Termination</h3>
                  <p className="mt-2 text-gray-600">
                    We may suspend or terminate your account for violations of these terms. You may terminate your account by contacting{' '}
                    <a href="mailto:privacy.ethiobuild@gmail.com" className="text-blue-600 hover:underline">
                    support.ethiobuild@gmail.com
                    </a>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">4. Changes to Terms</h3>
                  <p className="mt-2 text-gray-600">
                    We may update these terms periodically. Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Cookie Policy */}
          <AccordionItem value="cookie" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left text-lg font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none">
              Cookie Policy
            </AccordionTrigger>
            <AccordionContent className="p-4 border-t border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">1. What Are Cookies?</h3>
                  <p className="mt-2 text-gray-600">
                    Cookies are small text files stored on your device to enhance your browsing experience, such as remembering preferences or login details.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">2. Types of Cookies We Use</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Essential Cookies: Required for core website functionality.</li>
                    <li>Analytics Cookies: Track usage patterns to improve our services.</li>
                    <li>Preference Cookies: Save your settings for a personalized experience.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">3. Managing Cookies</h3>
                  <p className="mt-2 text-gray-600">
                    You can disable cookies via your browser settings. Note that disabling essential cookies may impact site functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">4. Consent</h3>
                  <p className="mt-2 text-gray-600">
                    By using our site, you consent to our use of cookies as outlined. Withdraw consent by adjusting your browser settings.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
};

export default LegalPolicies;