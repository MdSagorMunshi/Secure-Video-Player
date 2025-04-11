export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Secure Video Player, you accept and agree to be bound by the terms and provisions
            of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            Secure Video Player is a client-side video player that allows users to upload and play video files securely
            without server-side storage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>You are responsible for any content you upload</li>
            <li>You agree not to upload any malicious or harmful content</li>
            <li>You agree not to use the service for any illegal purposes</li>
            <li>You understand that uploaded videos are temporary and will be deleted automatically</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p>
            The service, including its original content, features, and functionality, is owned by Ryan Shelby and
            is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            The service is provided &quot;as is&quot; without any warranties. We are not responsible for any data loss or
            damages that may occur while using the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any changes by updating
            the date at the top of this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please visit our GitHub repository at{' '}
            <a
              href="https://github.com/MdSagorMunshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://github.com/MdSagorMunshi
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}