import React from 'react';
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
            We are committed to ensuring your privacy and protecting any personal information you share with us.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us, such as when you contact us through our website.
            We also automatically collect certain information about your device, including:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit on our website</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Improve our website and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Respond to your inquiries</li>
            <li>Send you updates or information you've requested</li>
          </ul>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings,
            but this may affect the functionality of our website.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content
            of these websites.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
            revision date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at joeheupler@berkeley.edu.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 