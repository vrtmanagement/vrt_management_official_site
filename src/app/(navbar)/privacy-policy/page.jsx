import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900  font-serif mt-10">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Privacy Policy Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                At VRT Management Group, we respect your privacy. We collect personal information such as your name, 
                email address, phone number, or company details solely to provide you with the resources you've requested. 
                This may include our "Hiring Guide," business guides, or invitations to events and strategy sessions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We may occasionally send you helpful updates or insights about leadership, business growth, 
                and hiring best practices. You can unsubscribe at any time by clicking the unsubscribe link in our emails.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We never sell, rent, or share your personal information with third parties. Your data is 
                stored securely and used only for communication directly related to VRT Management Group services.
              </p>

              <p className="text-gray-700 leading-relaxed">
                If you have any questions about how we handle your data, contact us at{" "}
                <a 
                  href="mailto:coachrajesh@vrt9.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  coachrajesh@vrt9.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;