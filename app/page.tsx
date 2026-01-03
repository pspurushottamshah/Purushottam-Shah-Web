import ParticleBackground from '@/components/background/ParticleBackground';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import HeroSection from '@/components/hero/HeroSection';
import GlobalImpactTicker from '@/components/hero/GlobalImpactTicker';
import ProjectGrid from '@/components/projects/ProjectGrid';
import CareerTimeline from '@/components/timeline/CareerTimeline';
import SkillsSection from '@/components/skills/SkillsSection';
import CertificationsSection from '@/components/skills/CertificationsSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
    return (
        <main className="relative">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* Global Impact Ticker */}
            <GlobalImpactTicker />

            {/* Project Deep-Dive */}
            <ProjectGrid />

            {/* Career Sprint Timeline */}
            <CareerTimeline />

            {/* Skills & Expertise */}
            <SkillsSection />

            {/* Certifications & Awards */}
            <CertificationsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
