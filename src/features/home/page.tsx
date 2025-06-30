import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import HeroSection from './components/HeroSection';
import Services from '../service/page';
import { faqs, services } from '../../../contans';
import About from '../about/page';
import GooglePreview from '@/features/home/components/GooglePreview';
import FAQ from './components/FAQ';
import Art from './components/Art';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeComponent = () => {
    return (
        <main>
            <HeroSection />
            <Services service={services} />
            <About />
            <GooglePreview />
            <Art />
            <FAQ faq={faqs} />
        </main>
    );
};

export default HomeComponent;