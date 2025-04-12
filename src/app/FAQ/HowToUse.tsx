'use client';

import Image from 'next/image';

export default function HowToUse() {
  return (
    <div>
      <h2 className="heading-2">이용 프로세스 안내</h2>
      <ol className="process-info">
        <li>
          <Image
            className="ic process-1"
            src="/ic_process01.svg"
            alt="문의 등록록"
            width={48}
            height={48}
            priority
          />
          <span>
            <strong>문의 등록</strong>
            <em>
              상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
            </em>
          </span>
        </li>
        <li>
          <Image
            className="ic process-2"
            src="/ic_process02.svg"
            alt="관리자 설정"
            width={48}
            height={48}
            priority
          />
          <span>
            <strong>관리자 설정</strong>
            <em>관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.</em>
          </span>
        </li>
        <li>
          <Image
            className="ic process-3"
            src="/ic_process03.svg"
            alt="임직원 가입"
            width={48}
            height={48}
            priority
          />
          <span>
            <strong>임직원 가입</strong>
            <em>이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.</em>
          </span>
        </li>
        <li>
          <i className="ic process-4"></i>
          <Image
            className="ic process-4"
            src="/ic_process04.svg"
            alt="서비스 이용"
            width={48}
            height={48}
            priority
          />
          <span>
            <strong>서비스 이용</strong>
            <em>이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!</em>
          </span>
        </li>
      </ol>
    </div>
  );
}
