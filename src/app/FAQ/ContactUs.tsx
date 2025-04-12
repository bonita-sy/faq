'use client';

import Image from 'next/image';

export default function ContactUs() {
  return (
    <div>
      <h2 className="heading-2">서비스 문의</h2>
      <div className="inquiry-info">
        <a
          className="btn-xxlg btn-tertiary"
          href="/files/proposal.e465bf89a6a3066e69af.pdf"
          download="기아 비즈 서비스 제안서"
        >
          <Image
            className="ic download"
            src="/ic_download.svg"
            alt="download"
            width={48}
            height={48}
            priority
          />
          <span>서비스 제안서 다운로드</span>
        </a>
        <a
          className="btn-xxlg btn-tertiary"
          href="https://wiblebiz.kia.com/Counsel"
        >
          <Image
            className="ic write"
            src="/ic_write.svg"
            alt="write"
            width={48}
            height={48}
            priority
          />
          <span>상담문의 등록하기</span>
        </a>
        <a
          className="btn-xxlg btn-tertiary"
          href="https://pf.kakao.com/_xfLxjdb"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="ic talk"
            src="/ic_talk.svg"
            alt="talk"
            width={48}
            height={48}
            priority
          />
          <span>
            카톡으로 문의하기 <em>ID : 기아 비즈</em>
          </span>
        </a>
      </div>
    </div>
  );
}
