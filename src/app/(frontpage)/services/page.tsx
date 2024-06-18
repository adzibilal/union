import ServiceItem from '@/components/molecules/ServiceItem';
import PageHeader from '@/components/organism/PageHeader';
import TestimonialSection from '@/components/organism/TestimonialSection';
import { useTranslations } from 'next-intl';
import React from 'react';
import { BiBrush, BiCube, BiPhoneCall, BiPlusMedical, BiTrophy, BiSolidSchool } from 'react-icons/bi';


interface ServicesItem {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    link: string;
}

const ServicesPage = () => {
    const t = useTranslations('ServicesPage');

    const services: ServicesItem[] = [
        {
            title: t('services.0.title'),
            description: t('services.0.description'),
            image: '/assets/images/service/consultation.jpg',
            icon: <BiPhoneCall />,
            link: '/contact'
        },
        {
            title: t('services.1.title'),
            description: t('services.1.description'),
            image: '/assets/images/service/style.jpg',
            icon: <BiBrush />,
            link: '/contact'
        },
        {
            title: t('services.2.title'),
            description: t('services.2.description'),
            image: '/assets/images/service/3d.jpg',
            icon: <BiCube />,
            link: '/contact'
        },
        {
            title: t('services.3.title'),
            description: t('services.3.description'),
            image: '/assets/images/service/safetyfirst.jpg',
            icon: <BiPlusMedical />,
            link: '/contact'
        },
        {
            title: t('services.4.title'),
            description: t('services.4.description'),
            image: '/assets/images/service/professional.jpg',
            icon: <BiTrophy />,
            link: '/contact'
        },
        {
            title: t('services.5.title'),
            description: t('services.5.description'),
            image: '/assets/images/service/architectural.jpg',
            icon: <BiSolidSchool />,
            link: '/contact'
        }
    ];

    return (
        <div>
            <PageHeader
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <div className='max-container'>
                <div className='my-10 flex flex-col gap-10'>
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            index={index + 1}
                            {...service}
                        />
                    ))}
                </div>

                <TestimonialSection />
            </div>
        </div>
    );
}

export default ServicesPage;
