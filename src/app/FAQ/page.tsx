import '../styles/faq.css';
import FAQContainer from './FAQContainer';
import ContactUs from './ContactUs';
import HowToUse from './HowToUse';
import ScrollToTop from './ScrollToTop';

export default function Container() {
  return (
    <div className="container">
      <h1>
        자주 묻는 질문 <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
      <FAQContainer />
      <ContactUs />
      <HowToUse />
      <div className="app-info">
        <h2>
          <em>기아 비즈 App</em> 지금 만나보세요!
        </h2>
        <a
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          target="_blank"
          className="gp"
          rel="noreferrer"
        >
          Google Play
        </a>
        <a
          href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
          target="_blank"
          className="as"
          rel="noreferrer"
        >
          App Store
        </a>
      </div>
      <ScrollToTop />
    </div>
  );
}
