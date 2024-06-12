import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Image from 'next/image'
import TeamItem from '../molecules/TeamItem'

const OurTeam = () => {
    const team = [
        {
            name: 'Heli Kusmayadi, ST',
            role: 'Direktur',
            image: '/images/team-heli.jpg'
        },
        {
            name: 'Irwansyah',
            role: 'Wakil Direktur',
            image: '/images/team-irwansyah.jpg'
        },
        {
            name: 'Marasal Haloho',
            role: 'Manajer Pemasaran',
            image: '/images/team-marasal.jpg'
        },
        {
            name: 'Irpan',
            role: 'Manajer Proyek',
            image: '/images/team-irpan.jpg'
        },
        {
            name: 'Rizki',
            role: 'Desain Grafis',
            image: '/images/team-rizki.jpg'
        },
        {
            name: 'Endang Slihanda, ST',
            role: 'Arsitek',
            image: '/images/team-endang.jpg'
        },
        {
            name: 'Dadang',
            role: 'Supervisor',
            image: '/images/team-dadang.jpg'
        },
        {
            name: 'Azwar Efendi',
            role: 'Logistik',
            image: '/images/team-azwar.jpg'
        },
        {
            name: 'Fitri Nur Ilah',
            role: 'Manajer ADM/Keuangan',
            image: '/images/team-fitri.jpg'
        },
        {
            name: 'Farid Fadillah',
            role: 'Manajer ADM/Keuangan',
            image: '/images/team-farid.jpg'
        }
    ]

    return (
        <div className='max-container'>
            <SectionTitle subTitle='Our Team' title='We Work With Team' />
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
