const termsAndConditionsList = [
  {
    id: 1,
    text: "You authorize DOSINK MARKETING TECH CO. LTD. to contact you using the information provided for service discussions, proposals, or consultation purposes.",
  },
  {
    id: 2,
    text: "All personal and business information you provide will be kept confidential. We will not sell, rent, or share your data with third parties without your prior consent, except as required by law.",
  },
  {
    id: 3,
    text: "Submission of this form does not constitute a formal agreement or contract. A separate, signed contract will be required before any work begins.",
  },
  {
    id: 4,
    text: "Any ideas, designs, or documents you submit remain your intellectual property. Similarly, any materials or concepts shared by us before a formal agreement are protected under copyright and must not be reused or distributed without our permission.",
  },
  {
    id: 5,
    text: "Advice or suggestions provided in response to your inquiry are for informational purposes only and do not represent final project strategies or technical solutions.",
  },
  {
    id: 6,
    text: "You confirm that the information submitted is accurate and up to date. Any misleading or false data may result in disqualification from service consideration.",
  },
  {
    id: 7,
    text: "Please avoid including passwords, private credentials, or sensitive internal data in this form. If required, we will provide a secure communication channel.",
  },
  {
    id: 8,
    text: "We reserve the right to refuse service for projects that involve illegal activities, hate speech, or violate ethical or legal standards.",
  },
  {
    id: 9,
    text: "We are not liable for any direct or indirect losses arising from your use of this form or delay in responses, especially in urgent or time-sensitive situations.",
  },
];

export const TermsAndConditions = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-background rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <div className="rounded-lg p-6">
              <ul className="space-y-4">
                {termsAndConditionsList ? (
                  termsAndConditionsList.map((element) => (
                    <li className="flex gap-3" key={element.id}>
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {element.text}
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Privacy Policy</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-blue-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m0 0c-1.1 0-2 .9-2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 0c-1.1 0-2-.9-2-2s2-4 2-4m4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
                  />
                </svg>
                <p>
                  <strong>Last Updated:</strong> May 23, 2025
                </p>
              </div>
              <p className="bg-blue-50 p-4 rounded-lg">
                DOSINK MARKETING TECH CO., LTD. is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and
                disclose your personal information when you visit our website
                and use our services as a technology consultant and Salesforce
                partner.
              </p>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  2.1 Information We Collect
                </h3>
                <p className="mt-2">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>
                    <strong>Information You Provide Directly:</strong>
                    <ul className="list-circle pl-6 space-y-1 mt-1">
                      <li>
                        Contact information (such as your name, email address,
                        phone number, company name) when you contact us through
                        the Site, subscribe to our newsletter, or request
                        information about our services.
                      </li>
                      <li>Information you submit through forms on our Site.</li>
                      <li>
                        Any other information you voluntarily provide to us.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Information We Collect Automatically:</strong>
                    <ul className="list-circle pl-6 space-y-1 mt-1">
                      <li>
                        <strong>Log Data:</strong> Your IP address, browser
                        type, operating system, referring website, pages you
                        visited on our Site, and the dates/times of your visit.
                      </li>
                      <li>
                        <strong>Cookies and Similar Technologies:</strong> We
                        may use cookies, web beacons, and other tracking
                        technologies to collect information about your browsing
                        activities on our Site. You can manage your cookie
                        preferences through your browser settings.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Information from Other Sources:</strong>
                    <ul className="list-circle pl-6 space-y-1 mt-1">
                      <li>
                        As a Salesforce partner, we may receive information
                        about you from Salesforce in connection with the
                        services we provide. This information will be treated in
                        accordance with this Privacy Policy.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  2.2 How We Use Your Information
                </h3>
                <p className="mt-2">
                  We may use your personal information for the following
                  purposes:
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>To provide and maintain our Site and services.</li>
                  <li>To respond to your inquiries and requests.</li>
                  <li>
                    To communicate with you about our services, updates, and
                    promotional materials (where permitted by law).
                  </li>
                  <li>To personalize your experience on our Site.</li>
                  <li>
                    To analyze how our Site is used and to improve its
                    functionality.
                  </li>
                  <li>For marketing and advertising purposes.</li>
                  <li>To fulfill our obligations as a Salesforce partner.</li>
                  <li>
                    For any other purpose disclosed to you at the time we
                    collect your information or with your consent.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C9.886 12.938 10.5 11.908 10.5 10.5c0-1.657-1.343-3-3-3S4.5 8.843 4.5 10.5c0 1.408.614 2.438 1.816 2.842M15.5 10.5c0 1.408.614 2.438 1.816 2.842M12 18.5a6 6 0 01-6-6M12 18.5a6 6 0 006-6"
                    />
                  </svg>
                  2.3 How We Share Your Information
                </h3>
                <p className="mt-2">
                  We may share your personal information with:
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party companies
                    that provide services on our behalf, such as website
                    hosting, data analysis, email delivery, marketing, and
                    customer service. These service providers are contractually
                    obligated to protect your information.
                  </li>
                  <li>
                    <strong>Salesforce:</strong> As a Salesforce partner, we may
                    share information with Salesforce in connection with the
                    services we provide. Their use of your information is
                    governed by their own privacy policies.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of all or a portion of our
                    assets, your personal information may be transferred to the
                    acquiring entity.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your
                    personal information if required to do so by law or in
                    response to valid legal process (e.g., a subpoena or court
                    order).
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share your
                    information with third parties when we have your consent to
                    do so.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  2.4 Your Choices
                </h3>
                <p className="mt-2">
                  You have certain choices regarding your personal information:
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>
                    <strong>Access and Correction:</strong> You may have the
                    right to access and update the personal information we hold
                    about you. Please contact us using the information below to
                    exercise this right.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You can opt out of receiving
                    marketing communications from us by following the
                    unsubscribe instructions in our emails or by contacting us
                    directly.
                  </li>
                  <li>
                    <strong>Cookies:</strong> You can typically control cookies
                    through your browser settings.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  2.5 Data Security
                </h3>
                <p className="mt-2 bg-blue-50 p-4 rounded-lg">
                  We take reasonable measures to protect your personal
                  information from unauthorized access, use, or disclosure.
                  However, no method of transmission over the internet or
                  electronic storage is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  2.6 International Transfers
                </h3>
                <p className="mt-2">
                  Your personal information may be transferred to and maintained
                  on computers located outside of your state, province, country,
                  or other governmental jurisdiction where the data protection
                  laws may differ than those from your jurisdiction. If you are
                  located outside Thailand, and choose to provide information to
                  us, please note that we may transfer the information,
                  including Personal Information, to Thailand and process it
                  there.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  2.7 Children's Privacy
                </h3>
                <p className="mt-2">
                  Our Site and services are not directed to children under the
                  age of 16. We do not knowingly collect personal information
                  from children under this age. If you become aware that a child
                  has provided us with personal information, please contact us,
                  and we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  2.8 Links to Other Websites
                </h3>
                <p className="mt-2">
                  Our Site may contain links to third-party websites. We are not
                  responsible for the privacy practices or the content of those
                  websites. We encourage you to review the privacy policies of
                  any third-party sites you visit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  2.9 Changes to This Privacy Policy
                </h3>
                <p className="mt-2">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new Privacy
                  Policy on this page and updating the "Last Updated" date. We
                  encourage you to review this Privacy Policy periodically for
                  any changes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  2.10 Contact Us
                </h3>

                <p className="mt-2">
                  If you have any questions or concerns about this Privacy
                  Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-2 bg-blue-50 p-4 rounded-lg">
                  <p className="text-center">
                    DOSINK MARKETING TECH CO., LTD.
                    <br />
                    Soi Inthamara 4, Samsennai, Phayathai, Bangkok 10400
                    Thailand
                    <br />
                    dpo@dosink.com
                    <br />
                    +66 82 206 7085
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
