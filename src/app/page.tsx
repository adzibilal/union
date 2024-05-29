import Image from "next/image";
import {useTranslations} from 'next-intl';
import LanguageDropdown from "@/components/LanguageDropdown";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div>
      <h1>Home</h1>
      <p>{t('title')}</p>
      <LanguageDropdown />
    </div>
  );
}
