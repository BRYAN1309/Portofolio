import React from 'react';
import Header from '@/components/common/Header';
import SimpleHero from '@/components/sections/SimpleHero';
import SimpleAbout from '@/components/sections/SimpleAbout';
import SimpleExperience from '@/components/sections/SimpleExperience';
import SimpleSkills from '@/components/sections/SimpleSkills';
import SimpleProjects from '@/components/sections/SimpleProjects';
import SimpleCertificates from '@/components/sections/SimpleCertificates';
import SimpleOrganizations from '@/components/sections/SimpleOrganizations';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <SimpleHero />
        <SimpleAbout />
        <SimpleExperience />
        <SimpleSkills />
        <SimpleProjects />
        <SimpleCertificates />
        <SimpleOrganizations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
