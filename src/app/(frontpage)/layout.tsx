import FloatingWaButton from '@/components/molecules/FloatingWaButton';
import Footer from '@/components/organism/Footer';
import Navbar from '@/components/organism/Navbar';
import UnderConstruction from '@/components/organism/UnderConstruction';
import React from 'react';

const FrontpageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Navbar />

            <main>
                {children}
            </main>

            <FloatingWaButton />

           <Footer />
           {/* <UnderConstruction /> */}
        </div>
    );
};

export default FrontpageLayout;