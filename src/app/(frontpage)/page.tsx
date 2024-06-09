import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageDropdown from '@/components/LanguageDropdown'
import InfoBox from '@/components/organism/InfoBox'
import SectionTitle from '@/components/molecules/SectionTitle'
import AboutSection from '@/components/organism/AboutSection'
import ProduceWorkSection from '@/components/organism/ProduceWorkSection'
import CarouselHero from '@/components/organism/CarouselHero'
import PortofolioSection from '@/components/organism/PortofolioSection'
import TestimonialSection from '@/components/organism/TestimonialSection'

export default function Home() {
    const t = useTranslations('Index')
    return (
        <div>
            <CarouselHero />
            <br /><br />
            <InfoBox />

            <AboutSection />

            <ProduceWorkSection />

            <PortofolioSection />

            <AboutSection />

            <TestimonialSection/>
        </div>
    )
}
