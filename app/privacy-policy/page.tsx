"use client";

import ThankTopBar from "@/components/thanknavbar";
import React from "react";

export default function SimplePrivacyPolicyPage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <ThankTopBar />

      <section
        className="w-full bg-white py-8 sm:py-8 max-[470px]:py-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="h-1 w-16 bg-[#d3315c] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>

              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    1.1 Personal Information
                  </h3>
                  <p className="text-gray-600 mb-2">
                    At AdGro Hair, we may collect the following personal
                    information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Your name, phone number, and email address</li>
                    <li>
                      Hair and scalp concerns shared during consultations
                    </li>
                    <li>Appointment history and treatment preferences</li>
                    <li>
                      Medical information relevant to hair or scalp treatments
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    1.2 Non-Personal Information
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We may also collect general information to improve our
                    services:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Browser type, device details, and IP address</li>
                    <li>Website usage data via analytics tools</li>
                    <li>
                      Anonymous insights related to hair treatment preferences
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-3">
                Your information helps us deliver high-quality hair care
                services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Schedule and manage hair treatment appointments</li>
                <li>Provide personalized hair and scalp care solutions</li>
                <li>
                  Process payments for hair restoration and treatment services
                </li>
                <li>Send appointment reminders and aftercare guidance</li>
                <li>Enhance treatment quality and service delivery</li>
                <li>Comply with applicable medical and legal obligations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Protect Your Data
              </h2>
              <p className="text-gray-600 mb-3">
                We take strong measures to safeguard your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encrypted storage of personal and medical data</li>
                <li>Limited access to sensitive client information</li>
                <li>Routine system audits and security updates</li>
                <li>Strict confidentiality of hair treatment records</li>
                <li>Staff training on privacy and data protection</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-600 mb-3">
                We respect your privacy and only share information when
                necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  With internal hair specialists for treatment coordination
                </li>
                <li>
                  With payment partners for secure transaction processing
                </li>
                <li>To meet legal or regulatory requirements</li>
                <li>In medical emergency situations if required</li>
              </ul>

              <div className="mt-4 p-4 bg-[#d3315c]/10 rounded-lg border border-[#d3315c]/20">
                <p className="text-gray-700 font-semibold text-center">
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Your Rights & Choices
              </h2>
              <p className="text-gray-600 mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal and treatment records</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of non-essential personal data</li>
                <li>Opt out of promotional communications</li>
                <li>Withdraw consent where applicable</li>
                <li>Understand how your data is used</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies and Website Tracking
              </h2>
              <p className="text-gray-600 mb-3">
                Our website uses cookies to improve your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p className="text-gray-600 mt-3">
                You may disable cookies in your browser settings, though some
                features may be affected.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-gray-600">
                Our website may include links to external hair care or medical
                resources. We are not responsible for the privacy practices of
                third-party websites.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-gray-600 mb-3">
                This Privacy Policy may be updated periodically to reflect
                changes in practices or regulations.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <span className="font-medium">Effective Date:</span> January 1,
                  2024
                  <br />
                  <span className="font-medium">Last Updated:</span> January 1,
                  2024
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contact AdGro Hair
              </h2>
              <p className="text-gray-600 mb-4">
                For privacy-related questions or requests, contact us:
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-2 font-medium">
                  AdGro Hair Clinic – Rajajinagar
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Address:</span> New No.117, 2nd
                  Floor, 1st Main Road, near Dr Rajkumar Rd, below Kapoor&apos;s
                  Cafe, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +91 89706 56789
                </p>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-[#d3315c]/10 to-[#d3315c]/5 rounded-lg border border-[#d3315c]/20">
                <p className="text-center text-gray-700 text-lg">
                  <span className="font-bold text-[#d3315c]">
                    AdGro Hair:
                  </span>{" "}
                  Dedicated to protecting your privacy while helping you regain
                  healthier, fuller hair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
