import React from 'react';

export default function Terms() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="mb-16 border-b border-hc-white/10 pb-8">
        <h1 className="font-heading text-4xl md:text-6xl text-hc-white uppercase tracking-tighter mb-4">
          Terms of Service
        </h1>
        <p className="font-mono text-sm text-hc-white/60 tracking-widest uppercase">Effective Date: March 2026</p>
      </div>

      <div className="space-y-12 font-mono text-sm md:text-base text-hc-white/80 leading-relaxed font-light">
        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">1. Terms of Engagement</h2>
          <p>By accessing Hordeman.co, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our site or services.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">2. Intellectual Property</h2>
          <p>All content, designs, concepts, structural architectures, and visual identity systems displayed on this site are the exclusive intellectual property of Hordeman.co unless otherwise specifically noted. Unauthorized reproduction, distribution, or derivative use is strictly prohibited.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">3. Project Protocols</h2>
          <p>Specific project engagements are governed by individual contracts and Statements of Work (SOW) which supersede these general terms in the event of any conflict regarding deliverables, timelines, and compensation.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">4. Limitation of Liability</h2>
          <p>Hordeman.co shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services, or any content provided within this digital environment.</p>
        </section>

        <section>
          <h2 className="text-xl text-hc-white uppercase tracking-widest font-bold mb-6">5. Modifications</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Continued use of the site following any changes constitutes acceptance of the new Terms.</p>
        </section>
      </div>
    </main>
  );
}
