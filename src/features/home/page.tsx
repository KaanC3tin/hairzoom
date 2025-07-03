import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import HeroSection from './components/HeroSection';
import { faqs, gallery, services } from '../../../contants';
import GooglePreview from '@/features/home/components/GooglePreview';
import FAQ from './components/FAQ';
import Services from './components/Services';
import Galeria from './components/Gallery';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeComponent = () => {
    return (
        <main>
            <HeroSection />
            <Services service={services} />
            <GooglePreview />
            <About />
            <FAQ faq={faqs} />
            <Galeria images={gallery} />
        </main>
    );
};

export default HomeComponent;