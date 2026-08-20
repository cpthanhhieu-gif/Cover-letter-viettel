import { BackToTop } from "./BackToTop";
import { ViettelInsightModal } from "./ViettelInsightModal";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main data-content-version="viettel-letter-2026-08-19-v2">
      <nav className="nav shell" aria-label="Điều hướng chính">
        <a className="brand" href="#top" aria-label="Về đầu trang"><span>H.</span><strong>CÙ PHẠM THÀNH HIẾU</strong></a>
        <div className="nav-meta"><span>UX/UI DESIGNER</span><a href="#contact">Trao đổi cùng Hiếu <Arrow /></a></div>
      </nav>
      <section className="hero shell" id="top">
        <p className="hero-label">THƯ ỨNG TUYỂN · UX/UI DESIGNER · VIETTEL DIGITAL</p>
        <div className="hero-layout">
          <div className="hero-content">
            <h1>Cù Phạm Thành Hiếu<br /><em>UX/UI Designer</em></h1>
            <div className="letter-wrap">
            <div className="letter letter-full">
              <p>Kính gửi Anh/Chị phụ trách tuyển dụng Viettel Digital,<br />Em tên là <strong>Cù Phạm Thành Hiếu</strong>, ứng tuyển vị trí <strong>UX/UI Designer</strong> tại Viettel Digital.</p>
              <p>Tại team Precart của Mobile World Group, em phụ trách UX/UI end-to-end cho TGDĐ, Điện Máy Xanh và TopZone: phân tích yêu cầu cùng PO/BA, xây dựng user flow, wireframe, high-fidelity UI, prototype, bàn giao và UI Audit sau lập trình. Một cải tiến trong hành trình mua SIM đã đưa CTR từ 0,8% lên 1,2%, tăng engagement 15% và giảm bounce rate 10%. Em cũng từng thực hiện thiết kế cho sản phẩm tài chính (Financial Product) — kinh nghiệm này giúp em tiếp cận tốt với đặc thù UX ngành Fintech mà Viettel Digital đang tập trung phát triển.</p>
              <p>Trước đó, em thiết kế giao diện cảm ứng cho thiết bị tương tác (touchscreen/HMI) tại Softworld Vietnam và các sản phẩm Web, Mobile, CRM tại LIVEN Technology. Nền tảng này giúp em cân bằng nhu cầu người dùng, giới hạn kỹ thuật, accessibility và guideline; đồng thời tự tin trao đổi với khách hàng, đối tác để thống nhất yêu cầu và kiểm soát chất lượng đầu ra.</p>
              <p>Những năng lực trong <a href="https://hieuu.webflow.io/" target="_blank" rel="noreferrer">portfolio của em</a> phù hợp trực tiếp với vị trí:</p>
              <ul>
                <li><strong>Thiết kế và kiểm soát chất lượng:</strong> hoàn thiện user flow, wireframe, prototype; kiểm tra giao diện sau triển khai và đảm bảo tuân thủ guideline.</li>
                <li><strong>Design System:</strong> xây dựng Atomic Design System, UI Kit, component library và style guide dùng chung cho Web/App.</li>
                <li><strong>Phối hợp và tư vấn:</strong> làm việc đa chức năng theo quy trình Agile (Jira, Confluence), trình bày phương án và thống nhất giải pháp với stakeholder, khách hàng và đối tác.</li>
                <li><strong>Visual &amp; AI-First:</strong> kinh nghiệm thiết kế banner, campaign; chủ động dùng AI hỗ trợ UX research, phát triển phương án UI, prototype và tài liệu hóa component, đồng thời kiểm chứng chất lượng đầu ra.</li>
              </ul>
              <p>Em mong có cơ hội trao đổi thêm về cách em có thể đóng góp vào việc chuẩn hóa trải nghiệm và nâng cao chất lượng thiết kế trong hệ sinh thái sản phẩm của Viettel Digital. Xin cảm ơn Anh/Chị đã dành thời gian xem xét hồ sơ.</p>
              <p>Trân trọng,<br /><strong>Cù Phạm Thành Hiếu</strong></p>
            </div>
            <div className="hero-actions"><a className="button primary" href="/Cu-Pham-Thanh-Hieu-UIUX-Designer-CV.pdf" target="_blank" rel="noreferrer">Xem CV <Arrow /></a><a className="button secondary" href="https://hieuu.webflow.io/" target="_blank" rel="noreferrer">Xem portfolio <Arrow /></a><ViettelInsightModal /></div>
            </div>
          </div>
          <figure className="hero-art">
            <img src="/viettel-red-flower-transparent.png" alt="Hoa 3D màu đỏ" />
          </figure>
        </div>
      </section>

      <section className="experience-section">
        <div className="shell experience-grid">
          <header><span>02 — EXPERIENCE</span><h2>Đi qua toàn bộ<br />vòng đời sản phẩm.</h2></header>
          <div className="timeline">
            <article><time>2026 — HIỆN TẠI</time><div><h3>UX/UI Designer · Feature Owner</h3><strong>MOBILE WORLD GROUP · PRECART</strong><p>Phụ trách UX/UI end-to-end cho TGDD, Điện Máy Xanh và TopZone; từ yêu cầu, nghiên cứu, user flow, UI đến phối hợp triển khai và đo lường.</p></div></article>
            <article><time>2025 — 2026</time><div><h3>UX/UI Designer</h3><strong>SOFTWORLD VIETNAM</strong><p>Thiết kế giao diện cảm ứng HMI, thực hiện UX Research và phối hợp đa chức năng để đưa giải pháp vào vận hành.</p></div></article>
            <article><time>2023 — 2025</time><div><h3>UX/UI Designer</h3><strong>LIVEN TECHNOLOGY</strong><p>Thiết kế web, mobile và CRM; tập trung responsive, accessibility và trải nghiệm nhất quán.</p></div></article>
            <article><time>2021 — 2025</time><div><h3>Visual Designer</h3><strong>LIVEN TECHNOLOGY</strong><p>Phát triển hệ thống nhận diện, chiến dịch truyền thông và thiết kế thị giác cho nhiều ngành hàng.</p></div></article>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-grid"><div><span>03 — LET&apos;S TALK</span><h2>Sẵn sàng cho<br />cuộc trao đổi.</h2></div><div className="contact-links"><a className="email-link" href="mailto:cpthanhhieu@gmail.com?subject=Trao đổi về vị trí UX/UI Designer tại Viettel Digital">cpthanhhieu@gmail.com <Arrow /></a><a href="tel:+84935522285">093 552 2285</a><a href="https://www.linkedin.com/in/hieuu/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://hieuu.webflow.io/" target="_blank" rel="noreferrer">Portfolio <Arrow /></a><a href="/Cu-Pham-Thanh-Hieu-UIUX-Designer-CV.pdf" target="_blank">Mở CV <Arrow /></a></div></div>
        <div className="shell footer-note"><span>UX/UI DESIGNER APPLICATION · VIETTEL DIGITAL · 2026</span><span>DESIGNED WITH INTENT</span></div>
      </footer>

      <nav className="bottom-nav" aria-label="Dự án tiêu biểu">
        <BackToTop />
        <div className="bottom-nav__links">
          <span className="bottom-nav__mark" aria-hidden="true">H.</span>
          <a href="/Cu-Pham-Thanh-Hieu-UIUX-Designer-CV.pdf" target="_blank" rel="noreferrer">Xem CV <Arrow /></a>
          <a href="https://hieuu.webflow.io/" target="_blank" rel="noreferrer">Xem portfolio <Arrow /></a>
          <span className="bottom-nav__divider" aria-hidden="true" />
          <a href="https://vi-mwg.vercel.app/" target="_blank" rel="noreferrer">Vi-MWG <Arrow /></a>
          <a href="https://hieuu.webflow.io/project/sim-dmx" target="_blank" rel="noreferrer">SIM DMX <Arrow /></a>
          <a href="https://hieuu.webflow.io/atomic-design-system-ui-kit" target="_blank" rel="noreferrer">Design System <Arrow /></a>
        </div>
      </nav>
    </main>
  );
}
