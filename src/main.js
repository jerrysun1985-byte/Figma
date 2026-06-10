import './styles.css';

document.querySelector('#app').innerHTML = `
  <main class="site-shell">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="/" aria-label="Studio home">
        <span class="brand-mark"></span>
        <span>Design Co.</span>
      </a>
      <div class="nav-links">
        <a href="#work">作品</a>
        <a href="#services">服務</a>
        <a href="#contact">聯絡</a>
      </div>
    </nav>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Brand, Web, Product</p>
        <h1 id="hero-title">打造讓品牌被記住的數位體驗</h1>
        <p class="hero-text">
          從策略、視覺系統到網站落地，我們把 Figma 概念轉成可以部署、可以成長的品牌介面。
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#contact">開始合作</a>
          <a class="button secondary" href="#work">查看作品</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Design preview">
        <div class="preview-toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="preview-grid">
          <div class="preview-card large"></div>
          <div class="preview-card accent"></div>
          <div class="preview-card dark"></div>
          <div class="preview-card pale"></div>
        </div>
      </div>
    </section>

    <section class="section" id="work">
      <div>
        <p class="eyebrow">Selected Work</p>
        <h2>從概念到上線，一次整理好</h2>
      </div>
      <div class="work-grid">
        <article>
          <span>01</span>
          <h3>品牌網站</h3>
          <p>以清楚的訊息層級與視覺節奏，建立第一眼信任感。</p>
        </article>
        <article>
          <span>02</span>
          <h3>產品介面</h3>
          <p>把使用者流程轉成可操作、可測試、可交付的體驗。</p>
        </article>
        <article>
          <span>03</span>
          <h3>設計系統</h3>
          <p>建立色彩、字級、元件規則，讓後續迭代更穩定。</p>
        </article>
      </div>
    </section>

    <section class="services" id="services">
      <p class="eyebrow">Services</p>
      <h2>策略與製作一起推進</h2>
      <ul>
        <li>Figma Make 原型整理與前端實作</li>
        <li>響應式網站設計與 Netlify 部署</li>
        <li>GitHub 版本管理與持續部署設定</li>
      </ul>
    </section>

    <section class="contact" id="contact">
      <p class="eyebrow">Next Step</p>
      <h2>準備連上 Netlify</h2>
      <p>
        這個專案已包含 GitHub 與 Netlify 所需的基本設定。取得 Figma Make 匯出原始碼後，
        可直接替換目前的 `src` 內容並重新部署。
      </p>
    </section>
  </main>
`;
