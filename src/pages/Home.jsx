import React from 'react';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';
import Narrative from '../components/Narrative';
import Services from '../components/Services';
import Methodology from '../components/Methodology';
import ProjectCarousel from '../components/ProjectCarousel';
import LetsTalk from '../components/LetsTalk';

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientMarquee />
      <Narrative />
      <Services />
      <ProjectCarousel 
        subtitleOverride="Digital Operations Log"
        titleOverride="Recent Deployments" 
      />
      <Methodology />
      <LetsTalk />
    </main>
  );
}
