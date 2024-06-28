import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Image from 'next/image'
import TeamItem from '../molecules/TeamItem'
import { useTranslations } from 'next-intl'

const OurTeam = () => {
    const team = [
        {
            name: 'Heli Kusmayadi, ST',
            role: 'Direktur',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Irwansyah',
            role: 'Wakil Direktur',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Marasal Haloho',
            role: 'Manajer Pemasaran',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Irpan',
            role: 'Manajer Proyek',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Rizki',
            role: 'Desain Grafis',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Endang Slihanda, ST',
            role: 'Arsitek',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Dadang',
            role: 'Supervisor',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Azwar Efendi',
            role: 'Logistik',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Fitri Nur Ilah',
            role: 'Manajer ADM/Keuangan',
            image: '/assets/images/team/19.webp'
        },
        {
            name: 'Farid Fadillah',
            role: 'Manajer ADM/Keuangan',
            image: '/assets/images/team/2.webp'
        },
        {
            name: 'Sherlyn Vira Wantika',
            role: 'Designer Interior',
            image: '/assets/images/team/sherlyn-new.jpg'
        },
        {
            name: 'Hana Dwi Puspitasari',
            role: 'Designer Interior',
            image: '/assets/images/team/hana-cropped.jpg'
        },
    ]

    const t = useTranslations('OurTeam')
    return (
        <div className='max-container'>
            <SectionTitle subTitle={t('title')} title={t('subtitle')} />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-center pt-20'>
                {team.map((item, index) => (
                    <TeamItem
                        key={index}
                        index={index}
                        name={item.name}
                        role={item.role}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurTeam
