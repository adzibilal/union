import AboutSection from '@/components/organism/AboutSection'
import OurTeam from '@/components/organism/OurTeam'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <PageHeader 
                title='About Us'
                subtitle='We are a creative agency that focus on delivering the best digital solution for our client.'
            />
            <AboutSection />
            <OurTeam />
        </div>
    )
}

export default AboutPage
