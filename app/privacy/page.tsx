export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            At Secure Video Player, we take your privacy seriously. This privacy policy describes how we handle your data
            when you use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <p>
            We do not collect, store, or process any personal information. All video processing is done entirely
            client-side in your browser.
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>No video data is stored on our servers</li>
            <li>No user information is collected</li>
            <li>No cookies are used for tracking</li>
            <li>No analytics or user behavior tracking</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Video Processing</h2>
          <p>
            Videos are processed entirely in your browser using client-side JavaScript. No video data is ever transmitted
            to our servers or stored permanently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            Since we don't collect or store any data, there's no risk of data breaches or unauthorized access to your
            information. Your videos remain private and are automatically deleted when you close the browser tab.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us through our GitHub repositories at{' '}
            <a
              href="https://github.com/MdSagorMunshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ryan Shelby
            </a>{' '}
            or{' '}
            <a
              href="http://github.com/MdSagorMunshi/Secure-Video-Player"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              http://github.com/MdSagorMunshi/Secure-Video-Player
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}