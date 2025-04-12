'use client';

import { useEffect, useRef, useState } from 'react';

export default function FAQContainer() {
    const [showButton, setShowButton] = useState(false);
    const [buttonBottom, setButtonBottom] = useState(40);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowButton(scrollY > 80);

            const footerTop = window.document.getElementsByTagName("footer")[0].getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop < windowHeight) {
                const overlap = windowHeight - footerTop;
                setButtonBottom(40 + overlap);
            } else {
                setButtonBottom(40);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showButton && (
                <div className='inner'>
                    <button
                        className='top'
                        onClick={scrollToTop}
                        style={{
                            bottom: `${buttonBottom}px`,
                        }}
                    >상단으로</button>
                </div>
            )}
        </div>
    );
};