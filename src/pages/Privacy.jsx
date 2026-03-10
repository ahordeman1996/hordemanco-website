import React from 'react';

export default function Privacy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="mb-16 border-b border-hc-white/10 pb-8">
        <h1 className="font-heading text-4xl md:text-6xl text-hc-white uppercase tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-sm text-hc-white/60 tracking-widest uppercase">Last Updated: March 2026</p>
      </div>

      <div className="space-y-12 font-mono text-sm md:text-base text-hc-white/80 leading-relaxed font-light">
        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">1. Information Collection</h2>
          <p>We collect information that you provide directly to us when you communicate with us via email, social media, or other communication channels. This may include your name, email address, company information, and any other details you choose to provide.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">2. Use of Information</h2>
          <p>We use the information we collect to communicate with you, provide our structural identity and creative services, maintain our operations, and improve our digital presence.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the personal information we collect and process. However, no digital transmission is entirely secure, and we cannot guarantee absolute data security.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">4. Third-Party Services</h2>
          <p>We may use third-party analytics and hosting services that collect standard internet log information and details of visitor behavior patterns. This information is processed in a way that does not identify anyone personally.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">5. Contact Configuration</h2>
          <p>If you have any questions about this Privacy Policy, please initiate communication through our secure channel at alexander@hordeman.com.</p>
        </section>
      </div>
    </main>
  );
}
