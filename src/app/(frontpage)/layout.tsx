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

            {/* Add your footer component here */}
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default FrontpageLayout;