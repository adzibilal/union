import PageHeader from '@/components/organism/PageHeader'
import PortofolioList from '@/components/organism/portofolio/PortofolioList'
import React from 'react'

const PortofolioPage = () => {
    return (
        <div>
            <PageHeader
                title='Portofolio'
                subtitle='List of our work that we have done.'
            />

            <PortofolioList />
        </div>
    )
}

export default PortofolioPage
