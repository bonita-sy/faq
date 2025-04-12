'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './styles/header.css';

export default function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={atTop ? 'header no-shadow' : 'header'}>
      <div className="inner">
        <a className="logo" href="https://wiblebiz.kia.com/">
          <Image
            src="/logo_kiabiz.svg"
            alt="kia biz logo"
            width={140}
            height={80}
            priority
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/https://wiblebiz.kia.com/Guide">서비스 소개</a>
            </li>
            <li>
              <a href="/FAQ">자주 묻는 질문</a>
            </li>
            <li>
              <a href="/https://wiblebiz.kia.com/News">새소식</a>
            </li>
            <li>
              <a href="/https://wiblebiz.kia.com/Counsel">상담문의</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
