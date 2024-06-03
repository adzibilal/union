import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Image from 'next/image'
import TeamItem from '../molecules/TeamItem'

const OurTeam = () => {
    const team = [
        {
            name: 'John Doe',
            role: 'CEO',
            image: '/images/team-1.jpg'
        },
        {
            name: 'Jane Doe',
            role: 'CTO',
            image: '/images/team-2.jpg'
        },
        {
            name: 'John Doe',
            role: 'CEO',
            image: '/images/team-3.jpg'
        },
        {
            name: 'Jane Doe',
            role: 'CTO',
            image: '/images/team-4.jpg'
        },
        {
            name: 'John Doe',
            role: 'CEO',
            image: '/images/team-5.jpg'
        },
        {
            name: 'Jane Doe',
            role: 'CTO',
            image: '/images/team-6.jpg'
        },
    ]
    return (
        <div className='max-container'>
            <SectionTitle subTitle='Our Team' title='We Work With Team' />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-center pt-20'>
                {team.map((item, index) => (
                   <TeamItem key={index} index={index} name={item.name} role={item.role} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default OurTeam
