'use client';

import translations, { type Lang } from "../i18n";

export default function Landing({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const otherLangUrl = lang === "ar" ? "/en" : "/";

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.partner, href: "#partner" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const arStyles = `
    body { font-family: 'Noto Kufi Arabic', 'Cairo', 'Poppins', 'Inter', sans-serif; }
    #hero-area .container .row div:nth-child(1) { order: 2; }
    #hero-area .container .row div:nth-child(2) { order: 1; }
    .header-content h1, .header-content p { text-align: right; }
    .header-content .button { display: flex; justify-content: flex-end; }
    .header-eight .header-content h1 span { margin: 0 16px 0 0; }
    #information-text .button { justify-content: flex-end; }
    #pricing .section-title-five .container .row { display: flex; align-items: center; justify-content: flex-end; }
    #pricing .section-title-five .container .row div:nth-child(1) { order: 2; }
    #pricing .section-title-five .container .row div:nth-child(2) { order: 1; }
    .section-title-five .container .row div .content p { line-height: 172%; }
    .section-title-five .container .row div .content h2,
    .section-title-five .container .row div .content p,
    .pricing-style-fourteen .table-head h2,
    .pricing-style-fourteen .table-head p { text-align: right; }
    #information-text > * { text-align: right; padding-right: 20px; }
    .footer-area .footer-top .container .inner-content .row { display: flex; align-items: center; justify-content: space-between; }
    .footer-area .footer-top .container .inner-content .row div:nth-child(1) { order: 2; }
    .footer-area .footer-top .container .inner-content .row div:nth-child(2) { order: 1; }
    .footer-area .footer-top .container .inner-content .row div:nth-child(1) .footer-widget { padding-right: 0; }
    .footer-area .footer-top .container .inner-content .row div:nth-child(2) .footer-widget { padding-left: 0; }
    .footer-eleven .f-about p { text-align: right; }
    .footer-widget .sidebar-social ul { justify-content: flex-start; }
    .select-selected, .select-items > div, #mobile_number, #loan_amount { text-align: right; }
    .select-selected:after { right: auto; left: 32px; }
    #select_loan_type .select-items div { justify-content: flex-end; }
    #select_loan_type .select-items div::before { margin-right: 0px; margin-left: 40px; order: 2; }
    #select_bank .select-items div { justify-content: flex-end; }
    #select_bank .select-items div::before { margin-right: 0px; margin-left: 40px; order: 2; }
  `;

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      lang={lang}
      style={{ position: 'relative' }}
    >
      {lang === 'ar' && <style dangerouslySetInnerHTML={{ __html: arStyles }} />}
      <img
        src="/assets/images/Assets/bg-shape.svg"
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: -1, display: 'block', pointerEvents: 'none' }}
      />

    {/*====== NAVBAR NINE PART START ======*/}
    <section className="navbar-area navbar-nine">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="/assets/images/Assets/logo-tamawal-registered.svg" alt="Logo" />
              </a>
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
              aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation"><span className="toggler-icon"></span><span className="toggler-icon"></span><span className="toggler-icon"></span></button> */}
              {/* <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine"><ul className="navbar-nav me-auto"><li className="nav-item"><a className="page-scroll active" href="#hero-area">Home</a></li><li className="nav-item"><a className="page-scroll" href="#services">Services</a></li><li className="nav-item"><a className="page-scroll" href="#pricing">Pricing</a></li><li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li></ul></div> */}
              <div className="navbar-btn d-lg-inline-block">
                {/* d-none */}
                <a className="menu-bar" href="index-en.html">
                  <span style={{ margin: "0px 0", fontSize: "16px" }}>En</span>
                </a>
              </div>
            </nav>
            {/* navbar */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
    {/*====== NAVBAR NINE PART ENDS ======*/}
    {/* Start header Area */}
    <section id="hero-area" className="header-area header-eight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="header-content">
              <h1 dir="rtl">وضعك<span></span>  
                <br /> المادي أفضل <br /> مع تموّل®
              </h1>
              <p dir="rtl">
                تموّل® وسيط التمويل الرقمي لجميع أنواع القروض والذي يساعدك في الحصول على التمويل من الجهات التمويلية بطريقة ميسرة وأقل تكلفة.</p>
              <div className="button">
                <a href="#call-action" className="btn primary-btn">مستعد؟! <span></span>
                </a>
                {/* <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                className="glightbox video-button"><span className="btn icon-btn rounded-full"><i className="lni lni-play"></i></span><span className="text">Watch Intro</span></a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="header-image">
              <img src="/assets/images/Assets/illustration-main-sa.svg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End header Area */}
    {/* Start About Area */}
    <section id="about" className="about-area about-fourteen">
      {/*======  Start Section Title Five ======*/}
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12" id="figure-area">
              <div className="figure" style={{  }}>
                <img src="/assets/images/Assets/illustration-arab-man.svg" alt="#" />
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-12">
              <div className="information row">
                <div className="col-lg-8 col-md-12 col-12" id="information-text">
                  <h2 dir="rtl">مهمة تموّل® هي توفير خيارات متعددة للحصول على أفضل عروض للتمويل </h2>
                  <p dir="rtl">تموّل® تقدم خيارات متنوعة من القروض الشخصية، بطاقات الائتمان، تمويل السيارات، والتمويل العقاري من الجهات التمويلية المرخصة من خلال نظام موثوق وبشكل فوري!</p>
                  <div className="button">
                    <a href="about.html" className="btn primary-btn">عن تمول</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12" id="floating-card">
                  {/* <img src="/assets/images/Assets/icon-values-Integrated.svg" alt="#" /> */}
                  <div id="slider" style={{ width: "150px", height: "150px" }}>
                    {/* <a href="#" className="control_next">></a><a href="#" className="control_prev"><</a> */}
                    <ul style={{ width: "450px", marginLeft: "-150px", left: "-12.3144px" }}><li>
                        <img src="/assets/images/Assets/icon-values-Integrated.svg" alt="#" />
                      </li>
                      <li style={{ background: "none" }}>
                        <img src="/assets/images/Assets/icon-values-Reliable.svg" alt="#" />
                      </li>
                      <li>
                        <img src="/assets/images/Assets/icon-values-Easy.svg" alt="#" />
                      </li>
                      
                    </ul>
                  </div>
                  <div id="slider-list">
                    <ul><li className="active" id="value-1" rel="1">سهل</li>
                      <li id="value-2" rel="2">مترابط</li>
                      <li id="value-3" rel="3">موثوق</li>
                      
                    </ul>
                  </div>
                  <style dangerouslySetInnerHTML={{ __html: `
                    #slider-list {
                      width: 226px;
                      height: 144px;
                    }
                  ` }} />
                  <div className="button">
                    <a dir="rtl" href="about.html" className="btn primary-btn">عن تموّل®</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Area */}
    {/* ====================== PRICING ====================== */}
    {/* Start Pricing  Area */}
    <section id="pricing" className="pricing-area pricing-fourteen">
      {/*======  Start Section Title Five ======*/}
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="content">
                {/* <h6>Pricing</h6> */}
                <h2 dir="rtl">لماذا تختار  تموّل®</h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              <div className="content">
                <p dir="rtl">إيماناً برؤيتنا و إستراتيجيتنا القوية، فنحن نعلم تماماً إلى أين نتجه وكيف ومتى سنصل، وسيكون تقديم قيمة مضافة لعملائنا دائماً عجلة القيادة لدينا</p>
              </div>
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/*======  End Section Title Five ======*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
                <img src="/assets/images/Assets/vp-Trustworthy.svg" alt="#" />
                {/* <h6 className="title">Starter</h4> */}
                <p dir="rtl">نحترم ونحمي سياسة خصوصية العملاء</p>
                <h2 dir="rtl">جدير بالثقة</h2>
                {/* <div className="price"><h2 className="amount"><span className="currency">$</span>0<span className="duration">/mo </span></h2></div> */}
              </div>
              {/* <div className="light-rounded-buttons"><a href="javascript:void(0)" className="btn primary-btn-outline">
                Start free trial
              </a></div><div className="table-content"><ul className="table-list"><li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li><li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li><li><i className="lni lni-checkmark-circle deactive"></i> Morbi leo risus.</li><li><i className="lni lni-checkmark-circle deactive"></i> Excepteur sint occaecat velit.</li></ul></div> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
                <img src="/assets/images/Assets/vp-Secure.svg" alt="#" />
                {/* <h6 className="title">Starter</h4> */}
                <p dir="rtl">بيئة آمنة بالكامل للبيانات والمعلومات</p>
                <h2 dir="rtl">آمن </h2>
                {/* <div className="price"><h2 className="amount"><span className="currency">$</span>0<span className="duration">/mo </span></h2></div> */}
              </div>
              {/* <div className="light-rounded-buttons"><a href="javascript:void(0)" className="btn primary-btn-outline">
                Start free trial
              </a></div><div className="table-content"><ul className="table-list"><li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li><li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li><li><i className="lni lni-checkmark-circle deactive"></i> Morbi leo risus.</li><li><i className="lni lni-checkmark-circle deactive"></i> Excepteur sint occaecat velit.</li></ul></div> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
                <img src="/assets/images/Assets/vp-Accurate.svg" alt="#" />
                {/* <h6 className="title">Exclusive</h4> */}
                <p dir="rtl">نقدم المخطط الصحيح للمنتجات المناسبة</p>
                <h2 dir="rtl">دقيق</h2>
                {/* <div className="price"><h2 className="amount"><span className="currency">$</span>99<span className="duration">/mo </span></h2></div> */}
              </div>
              {/* <div className="light-rounded-buttons"><a href="javascript:void(0)" className="btn primary-btn">
                Start free trial
              </a></div><div className="table-content"><ul className="table-list"><li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li><li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li><li><i className="lni lni-checkmark-circle"></i> Morbi leo risus.</li><li><i className="lni lni-checkmark-circle deactive"></i> Excepteur sint occaecat velit.</li></ul></div> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
                <img src="/assets/images/Assets/vp-Connectivity.svg" alt="#" />
                {/* <h6 className="title">Premium</h4> */}
                <p dir="rtl">نربطك بالعديد من المؤسسات المالية</p>
                <h2 dir="rtl">متصل</h2>
                {/* <div className="price"><h2 className="amount"><span className="currency">$</span>150<span className="duration">/mo </span></h2></div> */}
              </div>
              {/* <div className="light-rounded-buttons"><a href="javascript:void(0)" className="btn primary-btn-outline">
                Start free trial
              </a></div><div className="table-content"><ul className="table-list"><li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li><li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li><li><i className="lni lni-checkmark-circle"></i> Morbi leo risus.</li><li><i className="lni lni-checkmark-circle"></i> Excepteur sint occaecat velit.</li></ul></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End Pricing  Area */}
    {/* Start IMAGE Area */}
    <style dangerouslySetInnerHTML={{ __html: `
      .image-call-action .container .row {
        margin-bottom: -2px;
      }

      .image-call-action img {
        width: 100%;
        height: 100%;
      }
    ` }} />
    <section id="image-call-action" className="image-call-action">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <style dangerouslySetInnerHTML={{ __html: `
              #big-image-span-tablet {
                display: none;
              }

              #big-image-span-mobile {
                display: none;
              }
            ` }} />
            <img id="big-image-span-desktop" src="./assets/images/Assets/big-image-span---desktop.png" alt="Tamawal Mobile App" />
            <img id="big-image-span-tablet" src="./assets/images/Assets/big-image-span---tablet.png" alt="Tamawal Mobile App" />
            <img id="big-image-span-mobile" src="./assets/images/Assets/big-image-span---mobile.png" alt="Tamawal Mobile App" />
          </div>
        </div>
      </div>
    </section>
    {/* End IMAGE Area */}
    {/* Start Cta Area */}
    <section id="call-action" className="call-action">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
            <div className="inner-content">
              <h2 dir="rtl">قاعدين نجهز شيء كبييير، سجل الآن! وراح نبلغك أول ما يجهز! </h2>
              <p dir="rtl">سجل معلوماتك في الأسفل وراح يجيك إشعار مبكر مننا أول ما نطلق الخدمة!</p>
              {/* <div className="light-rounded-buttons"><a href="javascript:void(0)" className="btn primary-btn-outline">Get Started</a></div> */}
            </div>
          </div>

          <div className="col-xl-12 col-xl-12 col-lg-12 col-md-12" id="showForm-block">
            <div className="button text-center rounded-buttons">
              <button type="submit" className="btn primary-btn rounded-full" id="showForm" onClick={() => { (window as any).showForm() }} dir="rtl">سجل الان!</button>
              {/*   */}
            </div>
            <div className="button text-center rounded-buttons" style={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="btn primary-btn-outline rounded-full" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <i className="lni lni-play-store"></i> Google Play
              </a>
              <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="btn primary-btn-outline rounded-full" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <i className="lni lni-app-store"></i> App Store
              </a>
            </div>
          </div>

          <div className="col-xl-12 col-xl-12 col-lg-12 col-md-12" id="myForm-block">
            <div className="contact-form-wrapper">
              {/* <div className="row"><div className="col-xl-10 col-lg-8 mx-auto"><div className="section-title text-center"><span> Get in Touch </span><h2>
                    Ready to Get Started
                  </h2><p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    quiblanditiis praesentium
                  </p></div></div></div> */}
              <form className="contact-form" method="POST" encType="multipart/form-data" id="myForm" style={{ display: "none" }}>
                <input type="hidden" name="language" id="language" value="sa" />
                {/* <div className="row"> */}
                <div className="col-md-12" id="input_mobile_number">
                  <div className="iti iti--allow-dropdown iti--separate-dial-code"><div className="iti__flag-container"><div className="iti__selected-flag" role="combobox" aria-controls="iti-0__country-listbox" aria-owns="iti-0__country-listbox" aria-expanded="false" tabIndex={0} title="Saudi Arabia (&#x202B;المملكة العربية السعودية&#x202C;&lrm;): +966" aria-activedescendant="iti-0__item-sa-preferred"><div className="iti__flag iti__sa"></div><div className="iti__selected-dial-code">+966</div><div className="iti__arrow"></div></div><ul className="iti__country-list iti__hide" id="iti-0__country-listbox" role="listbox" aria-label="List of countries"><li className="iti__country iti__preferred iti__active" tabIndex={-1} id="iti-0__item-sa-preferred" role="option" data-dial-code="966" data-country-code="sa" aria-selected="true"><div className="iti__flag-box"><div className="iti__flag iti__sa"></div></div><span className="iti__country-name">Saudi Arabia (&#x202B;المملكة العربية السعودية&#x202C;&lrm;)</span><span className="iti__dial-code">+966</span></li><li className="iti__country iti__preferred" tabIndex={-1} id="iti-0__item-ae-preferred" role="option" data-dial-code="971" data-country-code="ae" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ae"></div></div><span className="iti__country-name">United Arab Emirates (&#x202B;الإمارات العربية المتحدة&#x202C;&lrm;)</span><span className="iti__dial-code">+971</span></li><li className="iti__country iti__preferred" tabIndex={-1} id="iti-0__item-qa-preferred" role="option" data-dial-code="974" data-country-code="qa" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__qa"></div></div><span className="iti__country-name">Qatar (&#x202B;قطر&#x202C;&lrm;)</span><span className="iti__dial-code">+974</span></li><li className="iti__country iti__preferred" tabIndex={-1} id="iti-0__item-bh-preferred" role="option" data-dial-code="973" data-country-code="bh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bh"></div></div><span className="iti__country-name">Bahrain (&#x202B;البحرين&#x202C;&lrm;)</span><span className="iti__dial-code">+973</span></li><li className="iti__country iti__preferred" tabIndex={-1} id="iti-0__item-kw-preferred" role="option" data-dial-code="965" data-country-code="kw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kw"></div></div><span className="iti__country-name">Kuwait (&#x202B;الكويت&#x202C;&lrm;)</span><span className="iti__dial-code">+965</span></li><li className="iti__country iti__preferred" tabIndex={-1} id="iti-0__item-om-preferred" role="option" data-dial-code="968" data-country-code="om" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__om"></div></div><span className="iti__country-name">Oman (&#x202B;عُمان&#x202C;&lrm;)</span><span className="iti__dial-code">+968</span></li><li className="iti__divider" role="separator" aria-disabled="true"></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-af" role="option" data-dial-code="93" data-country-code="af" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__af"></div></div><span className="iti__country-name">Afghanistan (&#x202B;افغانستان&#x202C;&lrm;)</span><span className="iti__dial-code">+93</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-al" role="option" data-dial-code="355" data-country-code="al" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__al"></div></div><span className="iti__country-name">Albania (Shqipëri)</span><span className="iti__dial-code">+355</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-dz" role="option" data-dial-code="213" data-country-code="dz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__dz"></div></div><span className="iti__country-name">Algeria (&#x202B;الجزائر&#x202C;&lrm;)</span><span className="iti__dial-code">+213</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-as" role="option" data-dial-code="1" data-country-code="as" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__as"></div></div><span className="iti__country-name">American Samoa</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ad" role="option" data-dial-code="376" data-country-code="ad" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ad"></div></div><span className="iti__country-name">Andorra</span><span className="iti__dial-code">+376</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ao" role="option" data-dial-code="244" data-country-code="ao" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ao"></div></div><span className="iti__country-name">Angola</span><span className="iti__dial-code">+244</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ai" role="option" data-dial-code="1" data-country-code="ai" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ai"></div></div><span className="iti__country-name">Anguilla</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ag" role="option" data-dial-code="1" data-country-code="ag" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ag"></div></div><span className="iti__country-name">Antigua and Barbuda</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ar" role="option" data-dial-code="54" data-country-code="ar" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ar"></div></div><span className="iti__country-name">Argentina</span><span className="iti__dial-code">+54</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-am" role="option" data-dial-code="374" data-country-code="am" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__am"></div></div><span className="iti__country-name">Armenia (Հայաստան)</span><span className="iti__dial-code">+374</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-aw" role="option" data-dial-code="297" data-country-code="aw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__aw"></div></div><span className="iti__country-name">Aruba</span><span className="iti__dial-code">+297</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-au" role="option" data-dial-code="61" data-country-code="au" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__au"></div></div><span className="iti__country-name">Australia</span><span className="iti__dial-code">+61</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-at" role="option" data-dial-code="43" data-country-code="at" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__at"></div></div><span className="iti__country-name">Austria (Österreich)</span><span className="iti__dial-code">+43</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-az" role="option" data-dial-code="994" data-country-code="az" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__az"></div></div><span className="iti__country-name">Azerbaijan (Azərbaycan)</span><span className="iti__dial-code">+994</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bs" role="option" data-dial-code="1" data-country-code="bs" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bs"></div></div><span className="iti__country-name">Bahamas</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bh" role="option" data-dial-code="973" data-country-code="bh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bh"></div></div><span className="iti__country-name">Bahrain (&#x202B;البحرين&#x202C;&lrm;)</span><span className="iti__dial-code">+973</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bd" role="option" data-dial-code="880" data-country-code="bd" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bd"></div></div><span className="iti__country-name">Bangladesh (বাংলাদেশ)</span><span className="iti__dial-code">+880</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bb" role="option" data-dial-code="1" data-country-code="bb" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bb"></div></div><span className="iti__country-name">Barbados</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-by" role="option" data-dial-code="375" data-country-code="by" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__by"></div></div><span className="iti__country-name">Belarus (Беларусь)</span><span className="iti__dial-code">+375</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-be" role="option" data-dial-code="32" data-country-code="be" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__be"></div></div><span className="iti__country-name">Belgium (België)</span><span className="iti__dial-code">+32</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bz" role="option" data-dial-code="501" data-country-code="bz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bz"></div></div><span className="iti__country-name">Belize</span><span className="iti__dial-code">+501</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bj" role="option" data-dial-code="229" data-country-code="bj" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bj"></div></div><span className="iti__country-name">Benin (Bénin)</span><span className="iti__dial-code">+229</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bm" role="option" data-dial-code="1" data-country-code="bm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bm"></div></div><span className="iti__country-name">Bermuda</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bt" role="option" data-dial-code="975" data-country-code="bt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bt"></div></div><span className="iti__country-name">Bhutan (འབྲུག)</span><span className="iti__dial-code">+975</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bo" role="option" data-dial-code="591" data-country-code="bo" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bo"></div></div><span className="iti__country-name">Bolivia</span><span className="iti__dial-code">+591</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ba" role="option" data-dial-code="387" data-country-code="ba" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ba"></div></div><span className="iti__country-name">Bosnia and Herzegovina (Босна и Херцеговина)</span><span className="iti__dial-code">+387</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bw" role="option" data-dial-code="267" data-country-code="bw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bw"></div></div><span className="iti__country-name">Botswana</span><span className="iti__dial-code">+267</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-br" role="option" data-dial-code="55" data-country-code="br" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__br"></div></div><span className="iti__country-name">Brazil (Brasil)</span><span className="iti__dial-code">+55</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-io" role="option" data-dial-code="246" data-country-code="io" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__io"></div></div><span className="iti__country-name">British Indian Ocean Territory</span><span className="iti__dial-code">+246</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-vg" role="option" data-dial-code="1" data-country-code="vg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__vg"></div></div><span className="iti__country-name">British Virgin Islands</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bn" role="option" data-dial-code="673" data-country-code="bn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bn"></div></div><span className="iti__country-name">Brunei</span><span className="iti__dial-code">+673</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bg" role="option" data-dial-code="359" data-country-code="bg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bg"></div></div><span className="iti__country-name">Bulgaria (България)</span><span className="iti__dial-code">+359</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bf" role="option" data-dial-code="226" data-country-code="bf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bf"></div></div><span className="iti__country-name">Burkina Faso</span><span className="iti__dial-code">+226</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bi" role="option" data-dial-code="257" data-country-code="bi" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bi"></div></div><span className="iti__country-name">Burundi (Uburundi)</span><span className="iti__dial-code">+257</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kh" role="option" data-dial-code="855" data-country-code="kh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kh"></div></div><span className="iti__country-name">Cambodia (កម្ពុជា)</span><span className="iti__dial-code">+855</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cm" role="option" data-dial-code="237" data-country-code="cm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cm"></div></div><span className="iti__country-name">Cameroon (Cameroun)</span><span className="iti__dial-code">+237</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ca" role="option" data-dial-code="1" data-country-code="ca" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ca"></div></div><span className="iti__country-name">Canada</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cv" role="option" data-dial-code="238" data-country-code="cv" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cv"></div></div><span className="iti__country-name">Cape Verde (Kabu Verdi)</span><span className="iti__dial-code">+238</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bq" role="option" data-dial-code="599" data-country-code="bq" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bq"></div></div><span className="iti__country-name">Caribbean Netherlands</span><span className="iti__dial-code">+599</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ky" role="option" data-dial-code="1" data-country-code="ky" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ky"></div></div><span className="iti__country-name">Cayman Islands</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cf" role="option" data-dial-code="236" data-country-code="cf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cf"></div></div><span className="iti__country-name">Central African Republic (République centrafricaine)</span><span className="iti__dial-code">+236</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-td" role="option" data-dial-code="235" data-country-code="td" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__td"></div></div><span className="iti__country-name">Chad (Tchad)</span><span className="iti__dial-code">+235</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cl" role="option" data-dial-code="56" data-country-code="cl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cl"></div></div><span className="iti__country-name">Chile</span><span className="iti__dial-code">+56</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cn" role="option" data-dial-code="86" data-country-code="cn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cn"></div></div><span className="iti__country-name">China (中国)</span><span className="iti__dial-code">+86</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cx" role="option" data-dial-code="61" data-country-code="cx" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cx"></div></div><span className="iti__country-name">Christmas Island</span><span className="iti__dial-code">+61</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cc" role="option" data-dial-code="61" data-country-code="cc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cc"></div></div><span className="iti__country-name">Cocos (Keeling) Islands</span><span className="iti__dial-code">+61</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-co" role="option" data-dial-code="57" data-country-code="co" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__co"></div></div><span className="iti__country-name">Colombia</span><span className="iti__dial-code">+57</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-km" role="option" data-dial-code="269" data-country-code="km" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__km"></div></div><span className="iti__country-name">Comoros (&#x202B;جزر القمر&#x202C;&lrm;)</span><span className="iti__dial-code">+269</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cd" role="option" data-dial-code="243" data-country-code="cd" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cd"></div></div><span className="iti__country-name">Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)</span><span className="iti__dial-code">+243</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cg" role="option" data-dial-code="242" data-country-code="cg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cg"></div></div><span className="iti__country-name">Congo (Republic) (Congo-Brazzaville)</span><span className="iti__dial-code">+242</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ck" role="option" data-dial-code="682" data-country-code="ck" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ck"></div></div><span className="iti__country-name">Cook Islands</span><span className="iti__dial-code">+682</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cr" role="option" data-dial-code="506" data-country-code="cr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cr"></div></div><span className="iti__country-name">Costa Rica</span><span className="iti__dial-code">+506</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ci" role="option" data-dial-code="225" data-country-code="ci" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ci"></div></div><span className="iti__country-name">Côte d’Ivoire</span><span className="iti__dial-code">+225</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-hr" role="option" data-dial-code="385" data-country-code="hr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__hr"></div></div><span className="iti__country-name">Croatia (Hrvatska)</span><span className="iti__dial-code">+385</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cu" role="option" data-dial-code="53" data-country-code="cu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cu"></div></div><span className="iti__country-name">Cuba</span><span className="iti__dial-code">+53</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cw" role="option" data-dial-code="599" data-country-code="cw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cw"></div></div><span className="iti__country-name">Curaçao</span><span className="iti__dial-code">+599</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cy" role="option" data-dial-code="357" data-country-code="cy" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cy"></div></div><span className="iti__country-name">Cyprus (Κύπρος)</span><span className="iti__dial-code">+357</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-cz" role="option" data-dial-code="420" data-country-code="cz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__cz"></div></div><span className="iti__country-name">Czech Republic (Česká republika)</span><span className="iti__dial-code">+420</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-dk" role="option" data-dial-code="45" data-country-code="dk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__dk"></div></div><span className="iti__country-name">Denmark (Danmark)</span><span className="iti__dial-code">+45</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-dj" role="option" data-dial-code="253" data-country-code="dj" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__dj"></div></div><span className="iti__country-name">Djibouti</span><span className="iti__dial-code">+253</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-dm" role="option" data-dial-code="1" data-country-code="dm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__dm"></div></div><span className="iti__country-name">Dominica</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-do" role="option" data-dial-code="1" data-country-code="do" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__do"></div></div><span className="iti__country-name">Dominican Republic (República Dominicana)</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ec" role="option" data-dial-code="593" data-country-code="ec" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ec"></div></div><span className="iti__country-name">Ecuador</span><span className="iti__dial-code">+593</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-eg" role="option" data-dial-code="20" data-country-code="eg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__eg"></div></div><span className="iti__country-name">Egypt (&#x202B;مصر&#x202C;&lrm;)</span><span className="iti__dial-code">+20</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sv" role="option" data-dial-code="503" data-country-code="sv" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sv"></div></div><span className="iti__country-name">El Salvador</span><span className="iti__dial-code">+503</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gq" role="option" data-dial-code="240" data-country-code="gq" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gq"></div></div><span className="iti__country-name">Equatorial Guinea (Guinea Ecuatorial)</span><span className="iti__dial-code">+240</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-er" role="option" data-dial-code="291" data-country-code="er" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__er"></div></div><span className="iti__country-name">Eritrea</span><span className="iti__dial-code">+291</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ee" role="option" data-dial-code="372" data-country-code="ee" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ee"></div></div><span className="iti__country-name">Estonia (Eesti)</span><span className="iti__dial-code">+372</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-et" role="option" data-dial-code="251" data-country-code="et" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__et"></div></div><span className="iti__country-name">Ethiopia</span><span className="iti__dial-code">+251</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-fk" role="option" data-dial-code="500" data-country-code="fk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__fk"></div></div><span className="iti__country-name">Falkland Islands (Islas Malvinas)</span><span className="iti__dial-code">+500</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-fo" role="option" data-dial-code="298" data-country-code="fo" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__fo"></div></div><span className="iti__country-name">Faroe Islands (Føroyar)</span><span className="iti__dial-code">+298</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-fj" role="option" data-dial-code="679" data-country-code="fj" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__fj"></div></div><span className="iti__country-name">Fiji</span><span className="iti__dial-code">+679</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-fi" role="option" data-dial-code="358" data-country-code="fi" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__fi"></div></div><span className="iti__country-name">Finland (Suomi)</span><span className="iti__dial-code">+358</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-fr" role="option" data-dial-code="33" data-country-code="fr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__fr"></div></div><span className="iti__country-name">France</span><span className="iti__dial-code">+33</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gf" role="option" data-dial-code="594" data-country-code="gf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gf"></div></div><span className="iti__country-name">French Guiana (Guyane française)</span><span className="iti__dial-code">+594</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pf" role="option" data-dial-code="689" data-country-code="pf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pf"></div></div><span className="iti__country-name">French Polynesia (Polynésie française)</span><span className="iti__dial-code">+689</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ga" role="option" data-dial-code="241" data-country-code="ga" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ga"></div></div><span className="iti__country-name">Gabon</span><span className="iti__dial-code">+241</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gm" role="option" data-dial-code="220" data-country-code="gm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gm"></div></div><span className="iti__country-name">Gambia</span><span className="iti__dial-code">+220</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ge" role="option" data-dial-code="995" data-country-code="ge" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ge"></div></div><span className="iti__country-name">Georgia (საქართველო)</span><span className="iti__dial-code">+995</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-de" role="option" data-dial-code="49" data-country-code="de" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__de"></div></div><span className="iti__country-name">Germany (Deutschland)</span><span className="iti__dial-code">+49</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gh" role="option" data-dial-code="233" data-country-code="gh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gh"></div></div><span className="iti__country-name">Ghana (Gaana)</span><span className="iti__dial-code">+233</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gi" role="option" data-dial-code="350" data-country-code="gi" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gi"></div></div><span className="iti__country-name">Gibraltar</span><span className="iti__dial-code">+350</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gr" role="option" data-dial-code="30" data-country-code="gr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gr"></div></div><span className="iti__country-name">Greece (Ελλάδα)</span><span className="iti__dial-code">+30</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gl" role="option" data-dial-code="299" data-country-code="gl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gl"></div></div><span className="iti__country-name">Greenland (Kalaallit Nunaat)</span><span className="iti__dial-code">+299</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gd" role="option" data-dial-code="1" data-country-code="gd" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gd"></div></div><span className="iti__country-name">Grenada</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gp" role="option" data-dial-code="590" data-country-code="gp" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gp"></div></div><span className="iti__country-name">Guadeloupe</span><span className="iti__dial-code">+590</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gu" role="option" data-dial-code="1" data-country-code="gu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gu"></div></div><span className="iti__country-name">Guam</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gt" role="option" data-dial-code="502" data-country-code="gt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gt"></div></div><span className="iti__country-name">Guatemala</span><span className="iti__dial-code">+502</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gg" role="option" data-dial-code="44" data-country-code="gg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gg"></div></div><span className="iti__country-name">Guernsey</span><span className="iti__dial-code">+44</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gn" role="option" data-dial-code="224" data-country-code="gn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gn"></div></div><span className="iti__country-name">Guinea (Guinée)</span><span className="iti__dial-code">+224</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gw" role="option" data-dial-code="245" data-country-code="gw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gw"></div></div><span className="iti__country-name">Guinea-Bissau (Guiné Bissau)</span><span className="iti__dial-code">+245</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gy" role="option" data-dial-code="592" data-country-code="gy" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gy"></div></div><span className="iti__country-name">Guyana</span><span className="iti__dial-code">+592</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ht" role="option" data-dial-code="509" data-country-code="ht" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ht"></div></div><span className="iti__country-name">Haiti</span><span className="iti__dial-code">+509</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-hn" role="option" data-dial-code="504" data-country-code="hn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__hn"></div></div><span className="iti__country-name">Honduras</span><span className="iti__dial-code">+504</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-hk" role="option" data-dial-code="852" data-country-code="hk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__hk"></div></div><span className="iti__country-name">Hong Kong (香港)</span><span className="iti__dial-code">+852</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-hu" role="option" data-dial-code="36" data-country-code="hu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__hu"></div></div><span className="iti__country-name">Hungary (Magyarország)</span><span className="iti__dial-code">+36</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-is" role="option" data-dial-code="354" data-country-code="is" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__is"></div></div><span className="iti__country-name">Iceland (Ísland)</span><span className="iti__dial-code">+354</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-in" role="option" data-dial-code="91" data-country-code="in" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__in"></div></div><span className="iti__country-name">India (भारत)</span><span className="iti__dial-code">+91</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-id" role="option" data-dial-code="62" data-country-code="id" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__id"></div></div><span className="iti__country-name">Indonesia</span><span className="iti__dial-code">+62</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ir" role="option" data-dial-code="98" data-country-code="ir" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ir"></div></div><span className="iti__country-name">Iran (&#x202B;ایران&#x202C;&lrm;)</span><span className="iti__dial-code">+98</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-iq" role="option" data-dial-code="964" data-country-code="iq" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__iq"></div></div><span className="iti__country-name">Iraq (&#x202B;العراق&#x202C;&lrm;)</span><span className="iti__dial-code">+964</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ie" role="option" data-dial-code="353" data-country-code="ie" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ie"></div></div><span className="iti__country-name">Ireland</span><span className="iti__dial-code">+353</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-im" role="option" data-dial-code="44" data-country-code="im" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__im"></div></div><span className="iti__country-name">Isle of Man</span><span className="iti__dial-code">+44</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-il" role="option" data-dial-code="972" data-country-code="il" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__il"></div></div><span className="iti__country-name">Israel (&#x202B;ישראל&#x202C;&lrm;)</span><span className="iti__dial-code">+972</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-it" role="option" data-dial-code="39" data-country-code="it" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__it"></div></div><span className="iti__country-name">Italy (Italia)</span><span className="iti__dial-code">+39</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-jm" role="option" data-dial-code="1" data-country-code="jm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__jm"></div></div><span className="iti__country-name">Jamaica</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-jp" role="option" data-dial-code="81" data-country-code="jp" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__jp"></div></div><span className="iti__country-name">Japan (日本)</span><span className="iti__dial-code">+81</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-je" role="option" data-dial-code="44" data-country-code="je" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__je"></div></div><span className="iti__country-name">Jersey</span><span className="iti__dial-code">+44</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-jo" role="option" data-dial-code="962" data-country-code="jo" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__jo"></div></div><span className="iti__country-name">Jordan (&#x202B;الأردن&#x202C;&lrm;)</span><span className="iti__dial-code">+962</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kz" role="option" data-dial-code="7" data-country-code="kz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kz"></div></div><span className="iti__country-name">Kazakhstan (Казахстан)</span><span className="iti__dial-code">+7</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ke" role="option" data-dial-code="254" data-country-code="ke" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ke"></div></div><span className="iti__country-name">Kenya</span><span className="iti__dial-code">+254</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ki" role="option" data-dial-code="686" data-country-code="ki" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ki"></div></div><span className="iti__country-name">Kiribati</span><span className="iti__dial-code">+686</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-xk" role="option" data-dial-code="383" data-country-code="xk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__xk"></div></div><span className="iti__country-name">Kosovo</span><span className="iti__dial-code">+383</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kw" role="option" data-dial-code="965" data-country-code="kw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kw"></div></div><span className="iti__country-name">Kuwait (&#x202B;الكويت&#x202C;&lrm;)</span><span className="iti__dial-code">+965</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kg" role="option" data-dial-code="996" data-country-code="kg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kg"></div></div><span className="iti__country-name">Kyrgyzstan (Кыргызстан)</span><span className="iti__dial-code">+996</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-la" role="option" data-dial-code="856" data-country-code="la" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__la"></div></div><span className="iti__country-name">Laos (ລາວ)</span><span className="iti__dial-code">+856</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lv" role="option" data-dial-code="371" data-country-code="lv" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lv"></div></div><span className="iti__country-name">Latvia (Latvija)</span><span className="iti__dial-code">+371</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lb" role="option" data-dial-code="961" data-country-code="lb" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lb"></div></div><span className="iti__country-name">Lebanon (&#x202B;لبنان&#x202C;&lrm;)</span><span className="iti__dial-code">+961</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ls" role="option" data-dial-code="266" data-country-code="ls" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ls"></div></div><span className="iti__country-name">Lesotho</span><span className="iti__dial-code">+266</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lr" role="option" data-dial-code="231" data-country-code="lr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lr"></div></div><span className="iti__country-name">Liberia</span><span className="iti__dial-code">+231</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ly" role="option" data-dial-code="218" data-country-code="ly" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ly"></div></div><span className="iti__country-name">Libya (&#x202B;ليبيا&#x202C;&lrm;)</span><span className="iti__dial-code">+218</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-li" role="option" data-dial-code="423" data-country-code="li" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__li"></div></div><span className="iti__country-name">Liechtenstein</span><span className="iti__dial-code">+423</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lt" role="option" data-dial-code="370" data-country-code="lt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lt"></div></div><span className="iti__country-name">Lithuania (Lietuva)</span><span className="iti__dial-code">+370</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lu" role="option" data-dial-code="352" data-country-code="lu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lu"></div></div><span className="iti__country-name">Luxembourg</span><span className="iti__dial-code">+352</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mo" role="option" data-dial-code="853" data-country-code="mo" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mo"></div></div><span className="iti__country-name">Macau (澳門)</span><span className="iti__dial-code">+853</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mk" role="option" data-dial-code="389" data-country-code="mk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mk"></div></div><span className="iti__country-name">Macedonia (FYROM) (Македонија)</span><span className="iti__dial-code">+389</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mg" role="option" data-dial-code="261" data-country-code="mg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mg"></div></div><span className="iti__country-name">Madagascar (Madagasikara)</span><span className="iti__dial-code">+261</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mw" role="option" data-dial-code="265" data-country-code="mw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mw"></div></div><span className="iti__country-name">Malawi</span><span className="iti__dial-code">+265</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-my" role="option" data-dial-code="60" data-country-code="my" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__my"></div></div><span className="iti__country-name">Malaysia</span><span className="iti__dial-code">+60</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mv" role="option" data-dial-code="960" data-country-code="mv" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mv"></div></div><span className="iti__country-name">Maldives</span><span className="iti__dial-code">+960</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ml" role="option" data-dial-code="223" data-country-code="ml" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ml"></div></div><span className="iti__country-name">Mali</span><span className="iti__dial-code">+223</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mt" role="option" data-dial-code="356" data-country-code="mt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mt"></div></div><span className="iti__country-name">Malta</span><span className="iti__dial-code">+356</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mh" role="option" data-dial-code="692" data-country-code="mh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mh"></div></div><span className="iti__country-name">Marshall Islands</span><span className="iti__dial-code">+692</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mq" role="option" data-dial-code="596" data-country-code="mq" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mq"></div></div><span className="iti__country-name">Martinique</span><span className="iti__dial-code">+596</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mr" role="option" data-dial-code="222" data-country-code="mr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mr"></div></div><span className="iti__country-name">Mauritania (&#x202B;موريتانيا&#x202C;&lrm;)</span><span className="iti__dial-code">+222</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mu" role="option" data-dial-code="230" data-country-code="mu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mu"></div></div><span className="iti__country-name">Mauritius (Moris)</span><span className="iti__dial-code">+230</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-yt" role="option" data-dial-code="262" data-country-code="yt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__yt"></div></div><span className="iti__country-name">Mayotte</span><span className="iti__dial-code">+262</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mx" role="option" data-dial-code="52" data-country-code="mx" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mx"></div></div><span className="iti__country-name">Mexico (México)</span><span className="iti__dial-code">+52</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-fm" role="option" data-dial-code="691" data-country-code="fm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__fm"></div></div><span className="iti__country-name">Micronesia</span><span className="iti__dial-code">+691</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-md" role="option" data-dial-code="373" data-country-code="md" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__md"></div></div><span className="iti__country-name">Moldova (Republica Moldova)</span><span className="iti__dial-code">+373</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mc" role="option" data-dial-code="377" data-country-code="mc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mc"></div></div><span className="iti__country-name">Monaco</span><span className="iti__dial-code">+377</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mn" role="option" data-dial-code="976" data-country-code="mn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mn"></div></div><span className="iti__country-name">Mongolia (Монгол)</span><span className="iti__dial-code">+976</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-me" role="option" data-dial-code="382" data-country-code="me" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__me"></div></div><span className="iti__country-name">Montenegro (Crna Gora)</span><span className="iti__dial-code">+382</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ms" role="option" data-dial-code="1" data-country-code="ms" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ms"></div></div><span className="iti__country-name">Montserrat</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ma" role="option" data-dial-code="212" data-country-code="ma" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ma"></div></div><span className="iti__country-name">Morocco (&#x202B;المغرب&#x202C;&lrm;)</span><span className="iti__dial-code">+212</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mz" role="option" data-dial-code="258" data-country-code="mz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mz"></div></div><span className="iti__country-name">Mozambique (Moçambique)</span><span className="iti__dial-code">+258</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mm" role="option" data-dial-code="95" data-country-code="mm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mm"></div></div><span className="iti__country-name">Myanmar (Burma) (မြန်မာ)</span><span className="iti__dial-code">+95</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-na" role="option" data-dial-code="264" data-country-code="na" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__na"></div></div><span className="iti__country-name">Namibia (Namibië)</span><span className="iti__dial-code">+264</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-nr" role="option" data-dial-code="674" data-country-code="nr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__nr"></div></div><span className="iti__country-name">Nauru</span><span className="iti__dial-code">+674</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-np" role="option" data-dial-code="977" data-country-code="np" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__np"></div></div><span className="iti__country-name">Nepal (नेपाल)</span><span className="iti__dial-code">+977</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-nl" role="option" data-dial-code="31" data-country-code="nl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__nl"></div></div><span className="iti__country-name">Netherlands (Nederland)</span><span className="iti__dial-code">+31</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-nc" role="option" data-dial-code="687" data-country-code="nc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__nc"></div></div><span className="iti__country-name">New Caledonia (Nouvelle-Calédonie)</span><span className="iti__dial-code">+687</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-nz" role="option" data-dial-code="64" data-country-code="nz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__nz"></div></div><span className="iti__country-name">New Zealand</span><span className="iti__dial-code">+64</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ni" role="option" data-dial-code="505" data-country-code="ni" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ni"></div></div><span className="iti__country-name">Nicaragua</span><span className="iti__dial-code">+505</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ne" role="option" data-dial-code="227" data-country-code="ne" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ne"></div></div><span className="iti__country-name">Niger (Nijar)</span><span className="iti__dial-code">+227</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ng" role="option" data-dial-code="234" data-country-code="ng" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ng"></div></div><span className="iti__country-name">Nigeria</span><span className="iti__dial-code">+234</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-nu" role="option" data-dial-code="683" data-country-code="nu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__nu"></div></div><span className="iti__country-name">Niue</span><span className="iti__dial-code">+683</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-nf" role="option" data-dial-code="672" data-country-code="nf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__nf"></div></div><span className="iti__country-name">Norfolk Island</span><span className="iti__dial-code">+672</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kp" role="option" data-dial-code="850" data-country-code="kp" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kp"></div></div><span className="iti__country-name">North Korea (조선 민주주의 인민 공화국)</span><span className="iti__dial-code">+850</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mp" role="option" data-dial-code="1" data-country-code="mp" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mp"></div></div><span className="iti__country-name">Northern Mariana Islands</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-no" role="option" data-dial-code="47" data-country-code="no" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__no"></div></div><span className="iti__country-name">Norway (Norge)</span><span className="iti__dial-code">+47</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-om" role="option" data-dial-code="968" data-country-code="om" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__om"></div></div><span className="iti__country-name">Oman (&#x202B;عُمان&#x202C;&lrm;)</span><span className="iti__dial-code">+968</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pk" role="option" data-dial-code="92" data-country-code="pk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pk"></div></div><span className="iti__country-name">Pakistan (&#x202B;پاکستان&#x202C;&lrm;)</span><span className="iti__dial-code">+92</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pw" role="option" data-dial-code="680" data-country-code="pw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pw"></div></div><span className="iti__country-name">Palau</span><span className="iti__dial-code">+680</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ps" role="option" data-dial-code="970" data-country-code="ps" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ps"></div></div><span className="iti__country-name">Palestine (&#x202B;فلسطين&#x202C;&lrm;)</span><span className="iti__dial-code">+970</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pa" role="option" data-dial-code="507" data-country-code="pa" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pa"></div></div><span className="iti__country-name">Panama (Panamá)</span><span className="iti__dial-code">+507</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pg" role="option" data-dial-code="675" data-country-code="pg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pg"></div></div><span className="iti__country-name">Papua New Guinea</span><span className="iti__dial-code">+675</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-py" role="option" data-dial-code="595" data-country-code="py" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__py"></div></div><span className="iti__country-name">Paraguay</span><span className="iti__dial-code">+595</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pe" role="option" data-dial-code="51" data-country-code="pe" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pe"></div></div><span className="iti__country-name">Peru (Perú)</span><span className="iti__dial-code">+51</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ph" role="option" data-dial-code="63" data-country-code="ph" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ph"></div></div><span className="iti__country-name">Philippines</span><span className="iti__dial-code">+63</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pl" role="option" data-dial-code="48" data-country-code="pl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pl"></div></div><span className="iti__country-name">Poland (Polska)</span><span className="iti__dial-code">+48</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pt" role="option" data-dial-code="351" data-country-code="pt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pt"></div></div><span className="iti__country-name">Portugal</span><span className="iti__dial-code">+351</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pr" role="option" data-dial-code="1" data-country-code="pr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pr"></div></div><span className="iti__country-name">Puerto Rico</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-qa" role="option" data-dial-code="974" data-country-code="qa" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__qa"></div></div><span className="iti__country-name">Qatar (&#x202B;قطر&#x202C;&lrm;)</span><span className="iti__dial-code">+974</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-re" role="option" data-dial-code="262" data-country-code="re" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__re"></div></div><span className="iti__country-name">Réunion (La Réunion)</span><span className="iti__dial-code">+262</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ro" role="option" data-dial-code="40" data-country-code="ro" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ro"></div></div><span className="iti__country-name">Romania (România)</span><span className="iti__dial-code">+40</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ru" role="option" data-dial-code="7" data-country-code="ru" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ru"></div></div><span className="iti__country-name">Russia (Россия)</span><span className="iti__dial-code">+7</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-rw" role="option" data-dial-code="250" data-country-code="rw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__rw"></div></div><span className="iti__country-name">Rwanda</span><span className="iti__dial-code">+250</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-bl" role="option" data-dial-code="590" data-country-code="bl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__bl"></div></div><span className="iti__country-name">Saint Barthélemy</span><span className="iti__dial-code">+590</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sh" role="option" data-dial-code="290" data-country-code="sh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sh"></div></div><span className="iti__country-name">Saint Helena</span><span className="iti__dial-code">+290</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kn" role="option" data-dial-code="1" data-country-code="kn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kn"></div></div><span className="iti__country-name">Saint Kitts and Nevis</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lc" role="option" data-dial-code="1" data-country-code="lc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lc"></div></div><span className="iti__country-name">Saint Lucia</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-mf" role="option" data-dial-code="590" data-country-code="mf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__mf"></div></div><span className="iti__country-name">Saint Martin (Saint-Martin (partie française))</span><span className="iti__dial-code">+590</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-pm" role="option" data-dial-code="508" data-country-code="pm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__pm"></div></div><span className="iti__country-name">Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</span><span className="iti__dial-code">+508</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-vc" role="option" data-dial-code="1" data-country-code="vc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__vc"></div></div><span className="iti__country-name">Saint Vincent and the Grenadines</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ws" role="option" data-dial-code="685" data-country-code="ws" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ws"></div></div><span className="iti__country-name">Samoa</span><span className="iti__dial-code">+685</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sm" role="option" data-dial-code="378" data-country-code="sm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sm"></div></div><span className="iti__country-name">San Marino</span><span className="iti__dial-code">+378</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-st" role="option" data-dial-code="239" data-country-code="st" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__st"></div></div><span className="iti__country-name">São Tomé and Príncipe (São Tomé e Príncipe)</span><span className="iti__dial-code">+239</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sa" role="option" data-dial-code="966" data-country-code="sa" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sa"></div></div><span className="iti__country-name">Saudi Arabia (&#x202B;المملكة العربية السعودية&#x202C;&lrm;)</span><span className="iti__dial-code">+966</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sn" role="option" data-dial-code="221" data-country-code="sn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sn"></div></div><span className="iti__country-name">Senegal (Sénégal)</span><span className="iti__dial-code">+221</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-rs" role="option" data-dial-code="381" data-country-code="rs" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__rs"></div></div><span className="iti__country-name">Serbia (Србија)</span><span className="iti__dial-code">+381</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sc" role="option" data-dial-code="248" data-country-code="sc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sc"></div></div><span className="iti__country-name">Seychelles</span><span className="iti__dial-code">+248</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sl" role="option" data-dial-code="232" data-country-code="sl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sl"></div></div><span className="iti__country-name">Sierra Leone</span><span className="iti__dial-code">+232</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sg" role="option" data-dial-code="65" data-country-code="sg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sg"></div></div><span className="iti__country-name">Singapore</span><span className="iti__dial-code">+65</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sx" role="option" data-dial-code="1" data-country-code="sx" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sx"></div></div><span className="iti__country-name">Sint Maarten</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sk" role="option" data-dial-code="421" data-country-code="sk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sk"></div></div><span className="iti__country-name">Slovakia (Slovensko)</span><span className="iti__dial-code">+421</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-si" role="option" data-dial-code="386" data-country-code="si" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__si"></div></div><span className="iti__country-name">Slovenia (Slovenija)</span><span className="iti__dial-code">+386</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sb" role="option" data-dial-code="677" data-country-code="sb" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sb"></div></div><span className="iti__country-name">Solomon Islands</span><span className="iti__dial-code">+677</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-so" role="option" data-dial-code="252" data-country-code="so" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__so"></div></div><span className="iti__country-name">Somalia (Soomaaliya)</span><span className="iti__dial-code">+252</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-za" role="option" data-dial-code="27" data-country-code="za" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__za"></div></div><span className="iti__country-name">South Africa</span><span className="iti__dial-code">+27</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-kr" role="option" data-dial-code="82" data-country-code="kr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__kr"></div></div><span className="iti__country-name">South Korea (대한민국)</span><span className="iti__dial-code">+82</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ss" role="option" data-dial-code="211" data-country-code="ss" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ss"></div></div><span className="iti__country-name">South Sudan (&#x202B;جنوب السودان&#x202C;&lrm;)</span><span className="iti__dial-code">+211</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-es" role="option" data-dial-code="34" data-country-code="es" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__es"></div></div><span className="iti__country-name">Spain (España)</span><span className="iti__dial-code">+34</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-lk" role="option" data-dial-code="94" data-country-code="lk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__lk"></div></div><span className="iti__country-name">Sri Lanka (ශ්&zwj;රී ලංකාව)</span><span className="iti__dial-code">+94</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sd" role="option" data-dial-code="249" data-country-code="sd" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sd"></div></div><span className="iti__country-name">Sudan (&#x202B;السودان&#x202C;&lrm;)</span><span className="iti__dial-code">+249</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sr" role="option" data-dial-code="597" data-country-code="sr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sr"></div></div><span className="iti__country-name">Suriname</span><span className="iti__dial-code">+597</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sj" role="option" data-dial-code="47" data-country-code="sj" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sj"></div></div><span className="iti__country-name">Svalbard and Jan Mayen</span><span className="iti__dial-code">+47</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sz" role="option" data-dial-code="268" data-country-code="sz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sz"></div></div><span className="iti__country-name">Swaziland</span><span className="iti__dial-code">+268</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-se" role="option" data-dial-code="46" data-country-code="se" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__se"></div></div><span className="iti__country-name">Sweden (Sverige)</span><span className="iti__dial-code">+46</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ch" role="option" data-dial-code="41" data-country-code="ch" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ch"></div></div><span className="iti__country-name">Switzerland (Schweiz)</span><span className="iti__dial-code">+41</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-sy" role="option" data-dial-code="963" data-country-code="sy" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__sy"></div></div><span className="iti__country-name">Syria (&#x202B;سوريا&#x202C;&lrm;)</span><span className="iti__dial-code">+963</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tw" role="option" data-dial-code="886" data-country-code="tw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tw"></div></div><span className="iti__country-name">Taiwan (台灣)</span><span className="iti__dial-code">+886</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tj" role="option" data-dial-code="992" data-country-code="tj" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tj"></div></div><span className="iti__country-name">Tajikistan</span><span className="iti__dial-code">+992</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tz" role="option" data-dial-code="255" data-country-code="tz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tz"></div></div><span className="iti__country-name">Tanzania</span><span className="iti__dial-code">+255</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-th" role="option" data-dial-code="66" data-country-code="th" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__th"></div></div><span className="iti__country-name">Thailand (ไทย)</span><span className="iti__dial-code">+66</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tl" role="option" data-dial-code="670" data-country-code="tl" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tl"></div></div><span className="iti__country-name">Timor-Leste</span><span className="iti__dial-code">+670</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tg" role="option" data-dial-code="228" data-country-code="tg" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tg"></div></div><span className="iti__country-name">Togo</span><span className="iti__dial-code">+228</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tk" role="option" data-dial-code="690" data-country-code="tk" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tk"></div></div><span className="iti__country-name">Tokelau</span><span className="iti__dial-code">+690</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-to" role="option" data-dial-code="676" data-country-code="to" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__to"></div></div><span className="iti__country-name">Tonga</span><span className="iti__dial-code">+676</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tt" role="option" data-dial-code="1" data-country-code="tt" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tt"></div></div><span className="iti__country-name">Trinidad and Tobago</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tn" role="option" data-dial-code="216" data-country-code="tn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tn"></div></div><span className="iti__country-name">Tunisia (&#x202B;تونس&#x202C;&lrm;)</span><span className="iti__dial-code">+216</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tr" role="option" data-dial-code="90" data-country-code="tr" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tr"></div></div><span className="iti__country-name">Turkey (Türkiye)</span><span className="iti__dial-code">+90</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tm" role="option" data-dial-code="993" data-country-code="tm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tm"></div></div><span className="iti__country-name">Turkmenistan</span><span className="iti__dial-code">+993</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tc" role="option" data-dial-code="1" data-country-code="tc" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tc"></div></div><span className="iti__country-name">Turks and Caicos Islands</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-tv" role="option" data-dial-code="688" data-country-code="tv" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__tv"></div></div><span className="iti__country-name">Tuvalu</span><span className="iti__dial-code">+688</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-vi" role="option" data-dial-code="1" data-country-code="vi" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__vi"></div></div><span className="iti__country-name">U.S. Virgin Islands</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ug" role="option" data-dial-code="256" data-country-code="ug" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ug"></div></div><span className="iti__country-name">Uganda</span><span className="iti__dial-code">+256</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ua" role="option" data-dial-code="380" data-country-code="ua" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ua"></div></div><span className="iti__country-name">Ukraine (Україна)</span><span className="iti__dial-code">+380</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ae" role="option" data-dial-code="971" data-country-code="ae" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ae"></div></div><span className="iti__country-name">United Arab Emirates (&#x202B;الإمارات العربية المتحدة&#x202C;&lrm;)</span><span className="iti__dial-code">+971</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-gb" role="option" data-dial-code="44" data-country-code="gb" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__gb"></div></div><span className="iti__country-name">United Kingdom</span><span className="iti__dial-code">+44</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-us" role="option" data-dial-code="1" data-country-code="us" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__us"></div></div><span className="iti__country-name">United States</span><span className="iti__dial-code">+1</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-uy" role="option" data-dial-code="598" data-country-code="uy" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__uy"></div></div><span className="iti__country-name">Uruguay</span><span className="iti__dial-code">+598</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-uz" role="option" data-dial-code="998" data-country-code="uz" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__uz"></div></div><span className="iti__country-name">Uzbekistan (Oʻzbekiston)</span><span className="iti__dial-code">+998</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-vu" role="option" data-dial-code="678" data-country-code="vu" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__vu"></div></div><span className="iti__country-name">Vanuatu</span><span className="iti__dial-code">+678</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-va" role="option" data-dial-code="39" data-country-code="va" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__va"></div></div><span className="iti__country-name">Vatican City (Città del Vaticano)</span><span className="iti__dial-code">+39</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ve" role="option" data-dial-code="58" data-country-code="ve" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ve"></div></div><span className="iti__country-name">Venezuela</span><span className="iti__dial-code">+58</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-vn" role="option" data-dial-code="84" data-country-code="vn" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__vn"></div></div><span className="iti__country-name">Vietnam (Việt Nam)</span><span className="iti__dial-code">+84</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-wf" role="option" data-dial-code="681" data-country-code="wf" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__wf"></div></div><span className="iti__country-name">Wallis and Futuna (Wallis-et-Futuna)</span><span className="iti__dial-code">+681</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-eh" role="option" data-dial-code="212" data-country-code="eh" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__eh"></div></div><span className="iti__country-name">Western Sahara (&#x202B;الصحراء الغربية&#x202C;&lrm;)</span><span className="iti__dial-code">+212</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ye" role="option" data-dial-code="967" data-country-code="ye" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ye"></div></div><span className="iti__country-name">Yemen (&#x202B;اليمن&#x202C;&lrm;)</span><span className="iti__dial-code">+967</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-zm" role="option" data-dial-code="260" data-country-code="zm" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__zm"></div></div><span className="iti__country-name">Zambia</span><span className="iti__dial-code">+260</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-zw" role="option" data-dial-code="263" data-country-code="zw" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__zw"></div></div><span className="iti__country-name">Zimbabwe</span><span className="iti__dial-code">+263</span></li><li className="iti__country iti__standard" tabIndex={-1} id="iti-0__item-ax" role="option" data-dial-code="358" data-country-code="ax" aria-selected="false"><div className="iti__flag-box"><div className="iti__flag iti__ax"></div></div><span className="iti__country-name">Åland Islands</span><span className="iti__dial-code">+358</span></li></ul></div><input type="text" name="mobile_number" id="mobile_number" placeholder="&nbsp;&nbsp;رقم الهاتف المحمول" onInput={(e) => { const self = e.currentTarget; self.value = self.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); }} required autoComplete="off" data-intl-tel-input-id="0" style={{ paddingLeft: "97px" }} /></div>
                  {/* <span>+966</span> */}
                </div>

                <div className="clsmobilemsg clserror"></div>

                <div className="col-md-12 custom-select" id="select_job_category">
                  <select name="job_category" id="job_category" required>
                    <option value="">حدد فئة الوظيفة</option>
                    <option value="government">قطاع حكومي</option>
                    <option value="semigovernment">قطاع شبه حكومي</option>
                    <option value="private">قطاع خاص</option>
					          <option value="retirement">متقاعد</option>					
                    <option value="others">آخرى</option>
                    {/* <option value="consulting">مستشار</option>
                    <option value="construction">بناء</option>
                    <option value="oil_gas">النفط والغاز</option>
                    <option value="it">تكنولوجيا المعلومات</option>
                    <option value="hospitality">ضيافة</option>
                    <option value="medical">طبي</option>
                    <option value="engineering">هندسة</option> */}
                  </select>
                  {/* <div className="select-selected">حدد فئة الوظيفة</div>
                  <div className="select-items select-hide">
                    <div>قطاع حكومي</div>
                    <div>قطاع شبه حكومي</div>
                    <div>قطاع خاص</div>
                    <div>متقاعد</div>
                    <div>آخرى</div>
                  </div> */}
                <div className="select-selected">حدد فئة الوظيفة</div><div className="select-items select-hide"><div>قطاع حكومي</div><div>قطاع شبه حكومي</div><div>قطاع خاص</div><div>متقاعد</div><div>آخرى</div></div></div>

                <div className="col-md-12 clsjobothers" id="wrapper_job_category_others" style={{ display: "none" }}>
                  <input type="text" style={{ textAlign: "right" }} name="job_category_others" id="job_category_others" className="" placeholder="فئة الوظيفه" />
                </div>

                <div className="clsjobmsg clserror"></div>

                {/* </div> */}
                {/* <div className="row"> */}
                <div className="col-md-12 custom-select" id="select_loan_type">
                  <select name="loan_type" id="loan_type" required>
                    <option value="">اختر نوع القرض</option>
                    <option value="personal_loan">قرض شخصي</option>
                    <option value="credit_card_loan">قرض بطاقة الائتمان</option>
                    <option value="car_loan">قرض السيارة</option>
                    <option value="mortgage_loan">القرض العقاري</option>
					          <option value="personal_financing_buyout">سداد مديونية</option>
                  </select>
                  {/* <div className="select-selected">اختر نوع القرض</div>
                  <div className="select-items select-hide">
                    <div>قرض شخصي</div>
                    <div>قرض بطاقة الائتمان</div>
                    <div>قرض السيارة</div>
                    <div>القرض العقاري</div>
                    <div>سداد مديونية</div>
                  </div> */}
                <div className="select-selected">اختر نوع القرض</div><div className="select-items select-hide"><div>قرض شخصي</div><div>قرض بطاقة الائتمان</div><div>قرض السيارة</div><div>القرض العقاري</div><div>سداد مديونية</div></div></div>

                <div className="clsloanmsg clserror"></div>

                <div className="col-md-12">
                  <input type="text" size={18} maxLength={18} name="loan_amount" id="loan_amount" className="clsnos" placeholder="أدخل مبلغ القرض الخاص بك" onInput={(e) => { const self = e.currentTarget; self.value = self.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); }} required />
                </div>

                <div className="clsamountmsg clserror"></div>

                <div className="col-md-12 custom-select" id="select_bank">
                  <select name="bank" id="bank" required>
                    <option value="">حدد البنك الذي تتعامل معه</option>
                    {/* <option value="local_bank">البنك المحلي</option> */}
                    <option value="saudi_national_bank">البنك الوطني السعودي</option>
                    <option value="al_rajhi_bank">مصرف الراجحي</option>
                    <option value="riyadh_bank ">بنك الرياض</option>
                    <option value="the_saudi_british_bank">البنك السعودي البريطاني</option>
                    <option value="arab_national_bank">البنك العربي الوطني</option>
                    <option value="banque_saudi_fransi">البنك السعودي الفرنسي</option>
                    <option value="saudi_investment_bank">البنك السعودي للاستثمار</option>
                    <option value="bank_aljazira">بنك الجزيرة</option>
                    <option value="bank_albilad">بنك البلاد</option>
                    <option value="gib_sa">بنك الخليج الدولي (GIB-SA)</option>
                    <option value="alinma_bank">مصرف الانماء</option>
                  </select>
                  {/* <div className="select-selected">حدد البنك الذي تتعامل معه</div>
                  <div className="select-items select-hide">
                    <div>البنك الوطني السعودي</div>
                    <div>مصرف الراجحي</div>
                    <div>بنك الرياض</div>
                    <div>البنك السعودي البريطاني</div>
                    <div>البنك العربي الوطني</div>
                    <div>البنك السعودي الفرنسي</div>
                    <div>البنك السعودي للاستثمار</div>
                    <div>بنك الجزيرة</div>
                    <div>بنك البلاد</div>
                    <div>بنك الخليج الدولي (GIB-SA)</div>
                    <div>مصرف الانماء</div>
                  </div> */}
                <div className="select-selected">حدد البنك الذي تتعامل معه</div><div className="select-items select-hide"><div>البنك الوطني السعودي</div><div>مصرف الراجحي</div><div>بنك الرياض</div><div>البنك السعودي البريطاني</div><div>البنك العربي الوطني</div><div>البنك السعودي الفرنسي</div><div>البنك السعودي للاستثمار</div><div>بنك الجزيرة</div><div>بنك البلاد</div><div>بنك الخليج الدولي (GIB-SA)</div><div>مصرف الانماء</div></div></div>

                <div className="clsbankmsg clserror"></div>

                <div className="col-md-12">
                  <input style={{ textAlign: "right" }} size={14} maxLength={14} type="text" className="clsnos" name="salary" id="salary" placeholder="راتبك" onInput={(e) => { const self = e.currentTarget; self.value = self.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); }} required />
                </div>

                <div className="clssalarymsg clserror"></div>

                {/* </div> */}
                {/* <div className="row"><div className="col-12"><textarea name="message" id="message" placeholder="Type Message" rows={5}></textarea></div></div> */}

                {/* <div className="g-recaptcha brochure__form__captcha" data-sitekey="YOUR SITE KEY"></div> */}

                <div className="row" id="submit-button-span">
                  <div className="col-12">
                    <div className="button text-center rounded-buttons">
                      <a href="javascript:;" className="join" id="hideForm" onClick={(e) => { e.preventDefault(); (window as any).hideForm() }}><span></span></a>
                      <button type="submit" className="btn primary-btn rounded-full" id="btnSubmit" onClick={() => { (window as any).submitForm() }}> تعديل كلمة "تقديم" <span></span></button>
                      {/*   */}
                    </div>
                  </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: `
                  #submit-button-span > div .button a {
                    order: 2;
                  }
                  #submit-button-span > div .button button {
                    order: 1;
                  }
                ` }} />
              </form>

              <h2 id="root"></h2>

              <div className="contact-greeting-box" id="greeting" style={{ display: "none" }}>
                <img src="/assets/images/Assets/illustration-mail-box.svg" alt="#" className="image-before" />
                <h2><span>تهنئة</span><br /> أنت مدرج كعميل لدينا</h2>
                <p>تمت إضافة بياناتك إلى قائمة عملائنا. يحق لك الوصول المبكر إلى خدماتنا ، وسوف نتصل بك عندما نكون مستعدين للانطلاق</p>
                <img src="./Tamawal-sa_files/thumb-up.svg" alt="#" className="image-after" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Cta Area */}
    {/* ========================= map-section end ========================= */}
    {/* <section className="map-section map-style-9"><div className="map-container"><object style={{ border: "0", height: "500px", width: "100%" }}
        data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"></object></div></div></section> */}
    {/* ========================= map-section end ========================= */}
    {/* Start Footer Area */}
    <footer className="footer-area footer-eleven">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="inner-content-footer">
            <div className="row">

              <div className="col-lg-3 col-md-3 col-12 footer-logo-note-area">
                {/* XXXX */}
                <div className="footer-widget f-about">
                  <a className="navbar-brand" href="index.html">
                    <img src="/assets/images/Assets/logo-tamawal-registered-white.svg" alt="Logo" />
                  </a>
                </div>
                {/* End XXXX */}
                <span className="footer-note ar dark"><span className="badge-footer ar dark"></span>شركة تموّل® لوساطة التمويل الرقمي 
                  وتحت إشراف سعودي
                  البنك المركزي</span>
              </div>

              <div className="col-lg-9 col-md-9 col-12 footer-border-bottom ar">
                <div className="row">

              <div className="col-lg-3 col-md-3 col-12">
                {/* Single Widget */}
                <div className="footer-widget f-about">
                  <p className="footer-block">
                    <span className="footer-list-head">معلومات عنا</span>
                    </p><ul>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/about-en.html#about-area">من نحن</a>
                      </li>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/about-en.html#product">منتجاتنا</a>
                      </li>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/about-en.html#value-area">قيمنا</a>
                      </li>
                    </ul>
                  <p></p>
                </div>
                {/* End Single Widget */}
              </div>

              <div className="col-lg-3 col-md-3 col-12">
                {/* Single Widget */}
                <div className="footer-widget f-about">
                  <p className="footer-block">
                    <span className="footer-list-head">قانوني</span>
                    </p><ul>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/terms-en.html">الأحكام والشروط</a>
                      </li>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/protection-data-en.html">حماية البيانات والخصوصية</a>
                      </li>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/protection-customer-en.html">مبادئ حماية العملاء</a>
                      </li>
                    </ul>
                  <p></p>
                </div>
                {/* End Single Widget */}
              </div>

              <div className="col-lg-3 col-md-3 col-12">
                {/* Single Widget */}
                <div className="footer-widget f-about">
                  <p className="footer-block">
                    <span className="footer-list-head">اتخاذ إجراءات</span>
                    </p><ul>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/about-en.html#partner-area">كن شريكا</a>
                      </li>
                      <li>
                        <a className="footer-list-body ar" href="https://tamawal-sa.web.app/index-en.html#call-action">كن عميلا</a>
                      </li>
                    </ul>
                  <p></p>
                  <p className="footer-block footer-block-rows">
                    <span className="footer-list-head">وسائل التواصل الاجتماعي</span>
                    </p><ul>
                      <li>
                        <a className="footer-list-body ar" href="https://www.linkedin.com/company/tamawal/">
                          <span>tamawal inc</span>
                          <i className="icon-social icon-social-linkedin ar"></i>
                        </a>
                      </li>
                      <li>
                        <a className="footer-list-body ar" href="https://twitter.com/tamawal_sa?lang=ar">
                          <span>tamawal</span>
                          <i className="icon-social icon-social-twitter-x ar"></i>
                        </a>
                      </li>
                    </ul>
                  <p></p>
                </div>
                {/* End Single Widget */}
              </div>

              <div className="col-lg-3 col-md-3 col-12" id="footer-form-trigger">
                {/* Single Widget */}
                <div className="footer-widget f-about">
                  <p className="footer-block">
                    <span className="footer-list-head">رسالة سريعة</span>
                    </p><ul className="ar">
                      <li>
                        <span className="footer-list-body ar" style={{ fontSize: "13px" }}>يمكنك تقديم اقتراحات أو شكوى لتحسين تموّل</span>
                      </li>
                      <li>
                        <a className="footer-list-body footer-button-ghost" href="https://tamawal-sa.web.app/send-message.html">ارسل رسالة</a>
                        {/* <a id="footer-form-open" className="footer-list-body footer-button-ghost" href="javascript:void(0)">ارسل رسالة</a> */}
                      </li>
                      <li>
                        <a href="https://tamawal-sa.web.app/faq.html" className="btn ghost-btn dark ar" dir="rtl"> الأسئلة الشائعة &nbsp; <span className="dark ar"></span> </a>
                      </li>
                    </ul>
                  <p></p>
                </div>
                {/* End Single Widget */}
              </div>

                </div>

                <div className="row" id="footer-form-row" style={{ display: "none" }}>

                  <div className="col-lg-9 col-md-9 col-12">

                  <form className="footer-form ar" method="POST" encType="multipart/form-data" id="myForm" onSubmit={(e) => { e.preventDefault(); (window as any).footerForm() }}>

                    <input type="hidden" name="language" id="language" value="en" />

                    <div className="row radio-row radio-row---dark ar">
                      <label className="radio-inline">
                        <input type="radio" name="optradio" className="form-check-input" value="complaints" />&nbsp;&nbsp;شكاوي
                      </label>
                      <label className="radio-inline">
                        <input type="radio" name="optradio" className="form-check-input" value="suggestions" defaultChecked />&nbsp;&nbsp;اقتراحات
                      </label>
                    </div>

                    <div className="row">

                      <div className="col-lg-4 col-md-4 col-12 ar" id="footer_form_action">

                      <button type="submit" className="btn primary-btn rounded-full" id="btnSubmit" onClick={() => { (window as any).submitForm() }}>ارسل طلب</button>
                      
                      <a href="javascript:void(0)" className="join" id="footer-form-close" onClick={(e) => { e.preventDefault(); (window as any).hideForm() }}>الغاء</a>

                      </div>

                      <div className="col-lg-4 col-md-4 col-12">
                      
                      <div className="col-md-12" id="footer_input_mobile_number">
                        <input type="text" name="footer_mobile_number" id="footer_mobile_number" placeholder="متحرك" onInput={(e) => { const self = e.currentTarget; self.value = self.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); }} required />
                      </div>
                      <div className="clsmobilemsg clserror"></div>
                      
                      <div className="col-md-12" id="footer_input_message">
                        <input type="text" name="footer_message" id="footer_message" placeholder="رسالة" required />
                      </div>
                      <div className="clsmessagemsg clserror"></div>

                      </div>

                      <div className="col-lg-4 col-md-4 col-12">
                    
                        <div className="col-md-12" id="footer_input_name">
                          <input type="text" name="footer_name" id="footer_name" placeholder="اسم" required />
                        </div>
                        <div className="clsnamemsg clserror"></div>
                        
                        <div className="col-md-12" id="footer_input_email">
                          <input type="text" name="footer_email" id="footer_email" placeholder="بريد إلكتروني" required />
                        </div>
                        <div className="clsemailmsg clserror"></div>
  
                        </div>

                    </div>

                  </form>

                  <script dangerouslySetInnerHTML={{ __html: `
                    function footerForm() {
                      alert("بيانات النموذج هي"
                      +"\\n"
                      + document.querySelector('input[name="optradio"]:checked').value
                      +" : "+"فئة"
                      +"\\n"
                      + document.getElementById("footer_name").value
                      +" : "+"اسم"
                      +"\\n"
                      + document.getElementById("footer_email").value
                      +" : "+"بريد إلكتروني"
                      +"\\n"
                      + document.getElementById("footer_mobile_number").value
                      +" : "+"رقم الهاتف المحمول"
                      +"\\n"
                      + document.getElementById("footer_message").value
                      +" : "+"رسالة"
                      );
                    }
                  ` }} />

                </div>

                <div className="col-lg-3 col-md-3 col-12">
                  {/* Single Widget */}
                  <div className="footer-widget f-about">
                    <p className="footer-block">
                      <span className="footer-list-head">رسالة سريعة</span>
                      </p><ul className="ar">
                        <li>
                          <span className="footer-list-body ar" style={{ fontSize: "13px" }}>يمكنك تقديم اقتراحات أو شكوى لتحسين تموّل</span>
                        </li>
                        <li style={{ marginTop: "100px" }}>
                          <a href="https://tamawal-sa.web.app/faq.html" className="btn ghost-btn dark ar" dir="rtl"> الأسئلة الشائعة &nbsp; <span className="dark ar"></span> </a>
                        </li>
                      </ul>
                    <p></p>
                  </div>
                  {/* End Single Widget */}
                </div>

                </div>
                


                <div className="row">

                  <div className="col-lg-3 col-md-3 col-12">
                    {/* Single Widget */}
                    <div className="footer-widget f-about">
                      <p className="footer-block">
                        <span className="footer-list-head">اتصل بنا</span>
                        </p><ul className="f-dark">
                          <li>
                            <a className="footer-list-body ar" href="mailto:info@tamawal.sa">
                              <span>info@tamawal.sa</span>
                              <i className="icon-general icon-general-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a className="footer-list-body ar" href="tel:20115123870">
                              <span>(+2) 011 512 3870</span>
                              <i className="icon-general icon-general-phone"></i>
                            </a>
                          </li>
                          <li>
                            <a className="footer-list-body ar" href="tel:28001000276">
                              <span>(+2) 800 100 0276</span>
                              <i className="icon-general icon-general-phone"></i>
                            </a>
                          </li>
                        </ul>
                      <p></p>
                    </div>
                    {/* End Single Widget */}
                  </div>

                  <div className="col-lg-3 col-md-3 col-12">
                    {/* Single Widget */}
                    <div className="footer-widget f-about">
                      <p className="footer-block">
                        <span className="footer-list-head">عنوان</span>
                        </p><ul>
                          <li>
                            <a className="footer-list-body ar" href="https://maps.app.goo.gl/gGkocAix4rLogDTRA" style={{ fontSize: "14px" }}>
                              <div className="row">
                                <div className="col-lg-10 col-md-10 col-10">
                                  <span>التكنولوجيا المالية السعودية | مركز الملك عبدالله المالي</span>
                                </div>
                                <div className="col-lg-2 col-md-2 col-2">
                                  <i className="icon-general icon-general-location-pin"></i>
                                </div>
                              </div>
                          </a>
                          </li>
                        </ul>
                      <p></p>
                    </div>
                    {/* End Single Widget */}
                  </div>

                  <div className="col-lg-3 col-md-3 col-12">
                    {/* Single Widget */}
                    <div className="footer-widget f-about">
                      <p className="footer-block">
                        <span className="footer-list-head">ساعات العمل</span>
                        </p><ul>
                          <li>
                            <span className="footer-list-body ar">09:00 – 17:00</span>
                          </li>
                        </ul>
                      <p></p>
                      <br />
                      <p className="footer-block">
                        <span className="footer-list-head">أيام العمل</span>
                        </p><ul>
                          <li>
                            <span className="footer-list-body ar">الأحد هينجا الخميس</span>
                          </li>
                        </ul>
                      <p></p>
                    </div>
                    {/* End Single Widget */}
                  </div>

                </div>
              </div>

              {/*
              <div className="col-lg-2 col-md-2 col-12">
                < !-- Single Widget -- >
                <div className="footer-widget newsletter">
                  < !-- <h5>Subscribe</h5><p>Subscribe to our newsletter for the latest updates</p><form action="#" method="get" target="_blank" className="newsletter-form"><input name="EMAIL" placeholder="Email address" required="required" type="email" /><div className="button"><button className="sub-btn"><i className="lni lni-envelope"></i></button></div></form> */}
                  <div className="sidebar-social align-items-center justify-content-center">
                    {/* <h5 className="social-title">Follow Us On</h5> -- >
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/company/tamawal/">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/tamawal_sa?lang=ar">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      < !-- <li>
                        <a href="https://www.facebook.com/tamawalinc">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li> -- >
                      <li>
                        <a href="https://www.instagram.com/tamawalinc/">
                          <i className="lni lni-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  < !-- sidebar social -- >
                </div>
                < !-- End Single Widget -- >
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
      {/*/ End Footer Top */}
      {/* Start Footer Bottom */}
      <div className="footer-bottom footer-bottom---dark">
        <div className="container">
          <p>شركة تمول للوساطة الرقمية وخاضعة تحت رقابة و إشراف البنك المركزى السعودى : 00 / ن م / 00000</p>
        </div>
      </div>
      {/*/ End Footer Bottom */}
    </footer>
    {/*/ End Footer Area */}
    {/* <div className="made-in-ayroui mt-4"><a href="https://ayroui.com" target="_blank" rel="nofollow"><img style={{ width: "220px" }} src="/assets/images/ayroui.svg" /></a></div> */}
    <a href="#hero-area" className="scroll-top btn-hover">
      <i className="lni lni-chevron-up"></i>
    </a>
    {/*====== js ======*/}
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/glightbox.min.js"></script>
    <script src="/assets/js/main.js"></script>
    <script src="/assets/js/tiny-slider.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossOrigin="anonymous"></script>
    <script src="/assets/js/simple-mask-money.js"></script>
    <script src="/assets/js/custom.js"></script>
    {/* <script dangerouslySetInnerHTML={{ __html: `
      document.querySelector("#mobile_number").style.paddingLeft = "200px";
    ` }} /> */}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-price-format/2.2.0/jquery.priceformat.min.js"></script>
    
    <script type="text/javascript"></script>
    
    <script dangerouslySetInnerHTML={{ __html: `
        $(document).ready(function (){


            
          $("#footer-form-open").click(function (){
            $("#footer-form-trigger").css("display", "none");
            $("#footer-form-row").css("display", "flex");
            $(".badge-footer").css("width", "200px");
            $(".badge-footer").css("height", "200px");
            $(".badge-footer").css("top", "-220px");
          });

        $("#footer-form-close").click(function (){
          $("#footer-form-trigger").css("display", "flex");
          $("#footer-form-row").css("display", "none");
          $(".badge-footer").css("width", "100px");
          $(".badge-footer").css("height", "100px");
          $(".badge-footer").css("top", "-120px");
          });




            $(".join").click(function (){
                $('html, body').animate({
                    scrollTop: $("#join").offset().top - 100
                }, 2000);
            });
        });
        
        /*
        $(window).bind("load", function() {
           $('html, body').animate({
                    scrollTop: $("#join").offset().top - 100
                }, 2000);
        });
        */
        
    ` }} />
    
    <script dangerouslySetInnerHTML={{ __html: `
      const root = document.getElementById('root');

      const showFormBlockElement = document.getElementById('showForm-block');
      const myFormBlockElement = document.getElementById('showForm-block');
      const myFormElement = document.getElementById('myForm');
      const greetingElement = document.getElementById('greeting');

      const mobile_number = document.getElementById('mobile_number');
      const loan_amount = document.getElementById('loan_amount');

      function onSubmit() {

        event.preventDefault();
        
        var input = document.querySelector("#mobile_number");
        var iti = window.intlTelInputGlobals.getInstance(input);
        var countryCode = iti.getSelectedCountryData().dialCode;

        select_job_category = $("#job_category option:selected").val();
        select_loan_type = $("#loan_type option:selected").val();
        select_bank = $("#bank option:selected").val();

        job_category_others = $("#job_category_others").val();
        if(select_job_category=='others') {
          select_job_category = job_category_others;
        }
        
        //FormData Object
        const formData = new FormData()
        formData.append('language', language.value)
        formData.append('mobile_number', countryCode + mobile_number.value)
        formData.append('select_job_category', select_job_category.value)
        formData.append('select_loan_type', select_loan_type.value)
        formData.append('loan_amount', loan_amount.value)
        formData.append('select_bank', select_bank.value)
        formData.append('salary', salary.value)

        $('#root').html('');
        var img = document.createElement('img');
        img.src = 'assets/images/Assets/Spinner.gif';
        root.appendChild(img);

        valid = true;
        reqmsg = 'هذه الخانة مطلوبه';
        amountrange = 'يجب أن يكون مبلغ القرض أكبر من 1000 ريال سعودي وأقل من 2 مليون ريال سعودي';
        invalidmobile = 'نرجو ادخال رقم جوال صحيح';
        alreadyexists  = 'رقم الهاتف المحمول مستخدم بالفعل ، يرجى المحاولة برقم آخر';
        
        validmobile = 'نرجوا ادخال رقم جوال صحيح';
        loanamountmsg  = 'نرجوا ادخال مبلغ التمويل المطلوب بشكل الصحيح';
        salarymsg   = 'نرجوا ادخال الراتب الصحيح';
        bankmsg = 'نامل تحديد البنك من القائمة';
        
        jobcategorymsg = 'الرجاء تحديد فئة الوظيفة من القوائم';
        loantypemsg = 'الرجاء تحديد نوع القرض من القوائم';
        
        $('.clserror').html('');
        
        //alert(salary.value);
        salaryamt = salary.value;
        let salaryamount = salaryamt.replace("SAR ", "");
        //alert(salaryamount);
        if(salaryamount == '' || salaryamount <= 0)
        {
            valid = false;
            $('.clssalarymsg').html(salarymsg);
        }
        
        if(select_bank == '')
        {
            valid = false;
            $('.clsbankmsg').html(bankmsg);
        }
        
        
        loanamt = loan_amount.value;
        let loanamount = loanamt.replace("SAR ", "");
        
        if(loanamount == 0)
        {
            valid = false;
            $('.clsamountmsg').html(loanamountmsg);
            
        }
        else if(loanamount < 1000 || loanamount > 2000000)
        {
            valid = false;
            $('.clsamountmsg').html(amountrange);
            
        }
        
        
        
        if(select_loan_type == '')
        {
            valid = false;
            $('.clsloanmsg').html(loantypemsg);
            
        }
        
        if(select_job_category == '')
        {
            valid = false;
            $('.clsjobmsg').html(jobcategorymsg);
            
        }
        
        if(mobile_number.value == '')
        {
            valid = false;
            $('.clsmobilemsg').html(validmobile);
        }
        else
        {
              let fieldValue = countryCode + mobile_number.value;
              let pattern = /^(009665|9665|\\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
              if (pattern.test(fieldValue)) {
                 $.ajax({
                      url: 'mobile.php',
                      data: formData,
                      type: 'POST',
                      processData: false,
                      contentType: false,
                      success: function (data) {
                        if(data == '1')
                        {
                          valid = false;
                          $('.clsmobilemsg').html(alreadyexists);
                        }  
                      },
                      error: function (err) {
                        root.innerHTML = 'Data Send Failed!'
                      },
                    });
              } else {
                $('.clsmobilemsg').html(invalidmobile);
                
              }
        }
        
        $('#root').html('');
        
        if(valid == true)
        {
            // AJAX
            $.ajax({
              url: 'post.php',
              data: formData,
              type: 'POST',
              processData: false,
              contentType: false,
              success: function (data) {
                console.log(data)
                // root.innerHTML = 'Data Send Successfully!'
                //root.removeChild(img);
                showGreeting()
              },
              error: function (err) {
                root.innerHTML = 'Data Send Failed!'
              },
            });
        }    

        /*
        // AJAX
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          data: formData,
          type: 'POST',
          processData: false,
          contentType: false,
          success: function (data) {
            console.log(data)
            // root.innerHTML = 'Data Send Successfully!'
            root.removeChild(img);
            showGreeting()
          },
          error: function (err) {
            root.innerHTML = 'Data Send Failed!'
          },
        })
        */

      }

      function showForm() {
        showFormBlockElement.style.display = 'none';
        myFormElement.style.display = 'block';
      }
      function hideForm() {
        myFormElement.style.display = 'none';
        showFormBlockElement.style.display = 'block';
      }

      function showGreeting() {
        myFormElement.style.display = 'none';
        showFormBlockElement.style.display = 'none';
        greetingElement.style.display = 'flex';
      }

      $(document).ready(function(){
        myFormElement.style.display = 'none';
        greetingElement.style.display = 'none';
        /*
        SimpleMaskMoney.setMask('#loan_amount',{
            prefix: '',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: '.',
            thousandsSeparator: ',',
            emptyOrInvalid: () => {
              return this.SimpleMaskMoney.args.fixed
                ? \`\${this.SimpleMaskMoney.args.decimalSeparator}\`
                : \`\${this.SimpleMaskMoney.args.decimalSeparator}\`;
            }
        });
        */

      });

    ` }} />
    
    <style dangerouslySetInnerHTML={{ __html: `
        .clserror
        {
            text-align:right;
            color:red;
            padding-bottom:10px;
            margin-top:-10px;
        }
    ` }} />
    
    {/* <script dangerouslySetInnerHTML={{ __html: `

    //===== close navbar-collapse when a  clicked
    let navbarTogglerNine = document.querySelector(
      ".navbar-nine .navbar-toggler"
    );
    navbarTogglerNine.addEventListener("click", function () {
      navbarTogglerNine.classList.toggle("active");
    });

    // ==== left sidebar toggle
    let sidebarLeft = document.querySelector(".sidebar-left");
    let overlayLeft = document.querySelector(".overlay-left");
    let sidebarClose = document.querySelector(".sidebar-close .close");

    overlayLeft.addEventListener("click", function () {
      sidebarLeft.classList.toggle("open");
      overlayLeft.classList.toggle("open");
    });
    sidebarClose.addEventListener("click", function () {
      sidebarLeft.classList.remove("open");
      overlayLeft.classList.remove("open");
    });

    // ===== navbar nine sideMenu
    let sideMenuLeftNine = document.querySelector(".navbar-nine .menu-bar");

    sideMenuLeftNine.addEventListener("click", function () {
      sidebarLeft.classList.add("open");
      overlayLeft.classList.add("open");
    });

    //========= glightbox
    GLightbox({
      'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube or local
      'width': 900,
      'autoplayVideos': true,
    });

  ` }} /> */}
    {/* <div id="message"><h2>Tamawal</h2><h1>Firebase Hosting Setup Complete</h1><p>You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something extraordinary!</p><a target="_blank" href="https://firebase.google.com/docs/hosting/">Open Hosting Documentation</a></div><p id="load">Firebase SDK Loading&hellip;</p> */}
    <script dangerouslySetInnerHTML={{ __html: `
      document.addEventListener('DOMContentLoaded', function() {
        // const loadEl = document.querySelector('#load');
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
        // firebase.firestore().doc('/foo/bar').get().then(() => { });
        // firebase.functions().httpsCallable('yourFunction')().then(() => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        // firebase.analytics(); // call to activate
        // firebase.analytics().logEvent('tutorial_completed');
        // firebase.performance(); // call to activate
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        try {
          let app = firebase.app();
          let features = ['auth', 'database', 'firestore', 'functions', 'messaging', 'storage', 'analytics', 'remoteConfig', 'performance', ].filter(feature => typeof app[feature] === 'function');
          // loadEl.textContent = \`Firebase SDK loaded with \${features.join(', ')}\`;
        } catch (e) {
          console.error(e);
          // loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
        }
      });
    ` }} />
    <style dangerouslySetInnerHTML={{ __html: `
      .iti--allow-dropdown input, .iti--allow-dropdown input[type=text], .iti--allow-dropdown input[type=tel], .iti--separate-dial-code input, .iti--separate-dial-code input[type=text], .iti--separate-dial-code input[type=tel] {
        padding-right: 48px;
        /* padding-right: 128px; */
      }
    ` }} />
  
    </div>
  );
}

