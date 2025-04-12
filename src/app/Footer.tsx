import Link from 'next/link';
import './styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="innerFooter">
        <div className="copyright">© 2023 KIA CORP. All Rights Reserved.</div>
        <div className="information">
          <div className="util">
            <Link href="https://privacy.kia.com/overview/full-policy">
              <button type="button">
                <b>개인정보 처리방침</b>
              </button>
            </Link>
            <button type="button">이용약관</button>
          </div>
          <address>
            <span>서울특별시 서초구 헌릉로 12 기아㈜</span>
            <span>대표: 송호성, 최준영</span>
            <span>사업자등록번호: 119-81-02316</span>
            <span>통신판매번호: 2006-07935</span>
            <span>고객센터: 1833-4964</span>
            <span>
              제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
      </div>
    </footer>
  );
}
