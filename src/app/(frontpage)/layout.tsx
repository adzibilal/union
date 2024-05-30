import Footer from '@/components/organism/Footer';
import Navbar from '@/components/organism/Navbar';
import React from 'react';

const FrontpageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Navbar />

            {/* Add your main content component here */}
            <main>
                {children}
            </main>

           <Footer />
        </div>
    );
};

export default FrontpageLayout;