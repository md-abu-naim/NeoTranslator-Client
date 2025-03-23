import React from 'react';

const Footer = () => {
    return (
        <div className="py-6 bg-base-300 shadow-sm">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center p-2 text-2xl font-bold">NeoTranslator</h1>
            </div>
            <footer className="footer footer-center">
                <aside>
                    <p><span className='font-medium'>NeoTranslator</span> can make mistakes. Check important info.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;