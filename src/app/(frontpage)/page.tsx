import Image from "next/image";
import {useTranslations} from 'next-intl';
import LanguageDropdown from "@/components/LanguageDropdown";
import InfoBox from "@/components/organism/InfoBox";
import SectionTitle from "@/components/molecules/SectionTitle";
import AboutSection from "@/components/organism/AboutSection";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div>
      <h1>Home</h1>
      <p>{t('title')}</p>
      <LanguageDropdown />
      
      <InfoBox />

      <AboutSection />
    </div>
  );
}
