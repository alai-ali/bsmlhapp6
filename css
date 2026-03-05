:root {
  --gold: #f6851b;
  --green: #07c160;
  --neon: #00f2ff;
  --dark: #1a1a1a;
  --bg: #ededed;
  --white: #fff;
  --border: #e5e5e5;
  --text: #000;
  --gray: #888;
}
* { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,'SF Pro Display',sans-serif; -webkit-tap-highlight-color:transparent; }
body { background:#000; color:#fff; height:100vh; overflow:hidden; position:fixed; width:100%; }

/* ЗАСТАВКА */
#splash { position:fixed; inset:0; z-index:9999; background:#000; display:flex; flex-direction:column; align-items:center; justify-content:center; animation:fadeOut 0.5s forwards 2.5s; pointer-events:none; }
@keyframes fadeOut { to { opacity:0; visibility:hidden; } }
.s-logo { font-size:60px; margin-bottom:15px; }
.s-title { font-size:48px; font-weight:900; letter-spacing:12px; }
.s-sub { font-size:10px; color:#aaa; margin-top:12px; text-align:center; max-width:280px; text-transform:uppercase; letter-spacing:1px; }

/* ЭКРАНЫ РЕГИСТРАЦИИ */
.screen { position:absolute; inset:0; display:none; flex-direction:column; align-items:center; justify-content:center; padding:30px; background:#000; z-index:1000; }
.screen.active { display:flex; }
.lang-btn { position:absolute; top:20px; right:20px; font-size:28px; cursor:pointer; z-index:10; }
.lang-menu { position:absolute; top:40px; right:0; background:#1a1a1a; border:1px solid #333; border-radius:12px; display:none; flex-direction:column; width:120px; overflow:hidden; }
.lang-menu div { padding:12px; text-align:center; border-bottom:1px solid #333; cursor:pointer; }
.lang-menu div:last-child { border-bottom:none; }
.lang-menu div:hover { background:#222; }
.lang-menu.open { display:flex; }
.reg-logo { font-size:60px; margin-bottom:20px; }
h2 { font-size:22px; letter-spacing:2px; margin-bottom:25px; }
.inp { background:#111; border:1px solid #333; padding:16px; color:#fff; border-radius:12px; width:100%; max-width:300px; margin-bottom:15px; outline:none; font-size:15px; }
.inp::placeholder { color:#555; }
.btn-gold { background:var(--gold); color:#000; border:none; padding:16px; border-radius:12px; font-weight:bold; width:100%; max-width:300px; cursor:pointer; font-size:15px; }
.btn-gold:active { opacity:0.85; }
.hint { color:#888; font-size:13px; margin-bottom:15px; }
#video { width:240px; height:240px; border-radius:50%; object-fit:cover; border:3px solid var(--gold); transform:scaleX(-1); margin-bottom:25px; }

/* NFC */
.nfc-ring { width:110px; height:110px; border:2px solid var(--neon); border-radius:22px; display:flex; align-items:center; justify-content:center; font-size:48px; margin-bottom:20px; position:relative; overflow:hidden; }
.nfc-scan { position:absolute; width:100%; height:2px; background:var(--neon); top:0; animation:scan 2s linear infinite; }
@keyframes scan { to { top:100%; } }
#nfc-status { height:24px; color:var(--neon); font-size:14px; margin-bottom:20px; }
.skip-link { margin-top:15px; color:#555; font-size:13px; text-decoration:underline; cursor:pointer; }

/* ПРИЛОЖЕНИЕ */
#app { display:none; height:100vh; flex-direction:column; background:var(--bg); position:absolute; inset:0; color:var(--text); }
header { height:56px; background:var(--dark); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:17px; flex-shrink:0; }
#content { flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch; }
.tab-view { min-height:100%; }
#tab-maps iframe { width:100%; height:100%; border:0; display:block; }

/* NAV */
nav { height:80px; padding-bottom:20px; display:flex; justify-content:space-around; align-items:center; border-top:0.5px solid #ddd; background:#f7f7f7; flex-shrink:0; }
.nav-btn { display:flex; flex-direction:column; align-items:center; gap:3px; color:#999; font-size:10px; font-weight:600; cursor:pointer; padding:5px 12px; }
.nav-btn span { font-size:22px; }
.nav-btn.active { color:var(--green); }

/* ЧАТ */
.chat-item { display:flex; align-items:center; padding:12px 15px; background:var(--white); border-bottom:0.5px solid var(--border); cursor:pointer; }
.chat-item:active { background:#f5f5f5; }
.chat-av { width:48px; height:48px; background:#eee; border-radius:8px; margin-right:12px; font-size:24px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.chat-info { flex:1; }
.chat-row { display:flex; justify-content:space-between; margin-bottom:3px; }
.chat-name { font-weight:500; font-size:15px; }
.chat-time { font-size:11px; color:#b2b2b2; }
.chat-msg { font-size:13px; color:#b2b2b2; }

/* HUB */
#tab-hub { padding:15px; }
.patent-btn { background:var(--dark); color:var(--gold); border:1px solid var(--gold); padding:20px; border-radius:15px; text-align:center; font-weight:bold; font-size:15px; margin-bottom:12px; cursor:pointer; }
.patent-btn:active { opacity:0.85; }
.hub-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.hub-tile { background:var(--white); padding:25px 10px; border-radius:12px; text-align:center; font-weight:bold; font-size:12px; border:1px solid #eee; cursor:pointer; }
.hub-tile:active { background:#f0f0f0; }

/* ПРОФИЛЬ */
.prof-head { background:var(--white); padding:30px 20px; display:flex; align-items:center; margin-bottom:8px; position:relative; }
#prof-photo { width:64px; height:64px; border-radius:10px; object-fit:cover; margin-right:15px; flex-shrink:0; }
.prof-info h2 { font-size:19px; margin-bottom:3px; }
.prof-info p { font-size:13px; color:var(--gray); }
.verified { font-size:12px; color:var(--green); }
.qr-btn { position:absolute; right:20px; font-size:22px; cursor:pointer; color:var(--gray); }
.token-row { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:0 8px; margin-bottom:8px; }
.token-card { background:var(--white); border-radius:12px; padding:15px; text-align:center; cursor:pointer; }
.token-card:active { background:#f5f5f5; }
.t-label { font-size:10px; color:var(--gray); text-transform:uppercase; letter-spacing:1px; margin-bottom:5px; }
.t-val { font-size:22px; font-weight:bold; }
.t-val.gold { color:var(--gold); }
.t-val.green { color:var(--green); }
.t-tier { font-size:10px; color:#aaa; margin-top:3px; }

/* МЕНЮ */
.menu-group { background:var(--white); margin-bottom:8px; border-top:0.5px solid #ddd; border-bottom:0.5px solid #ddd; }
.menu-item { display:flex; align-items:center; padding:14px 20px; cursor:pointer; position:relative; }
.menu-item:active { background:#f5f5f5; }
.menu-item:not(:last-child)::after { content:''; position:absolute; left:55px; right:0; bottom:0; height:0.5px; background:#eee; }
.mi-icon { width:24px; margin-right:14px; font-size:20px; }
.mi-text { flex:1; font-size:16px; }
.mi-val { font-size:14px; color:var(--gray); margin-right:6px; }
.mi-val.green { color:var(--green); }
.mi-arrow { color:#ccc; font-size:16px; }

/* СТРАНИЦЫ */
.page { position:fixed; inset:0; background:var(--bg); z-index:6000; display:none; flex-direction:column; }
.page.open { display:flex; }
.page-header { height:56px; background:var(--dark); color:#fff; display:flex; align-items:center; padding:0 15px; font-weight:600; font-size:17px; flex-shrink:0; }
.back { font-size:28px; margin-right:12px; cursor:pointer; line-height:1; }
.page-body { flex:1; overflow-y:auto; padding:15px; -webkit-overflow-scrolling:touch; }

/* SERVICES */
.svc-grid { display:grid; grid-template-columns:repeat(4,1fr); background:var(--white); border-radius:12px; padding:10px; }
.svc-item { display:flex; flex-direction:column; align-items:center; padding:14px 4px; cursor:pointer; }
.svc-item:active { opacity:0.6; }
.svc-ico { width:46px; height:46px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:5px; }
.svc-item span { font-size:10px; color:#333; }

/* FAVORITES */
.fav-item { background:var(--white); border-radius:12px; padding:15px; margin-bottom:10px; display:flex; align-items:center; gap:15px; cursor:pointer; font-size:28px; }
.fav-item:active { background:#f5f5f5; }
.fav-item b { display:block; font-size:15px; margin-bottom:3px; }
.fav-item p { font-size:12px; color:var(--gray); }

/* MOMENTS */
.moment { background:var(--white); border-radius:12px; margin-bottom:12px; overflow:hidden; }
.mo-head { display:flex; align-items:center; padding:12px 15px; gap:10px; }
.mo-av { width:40px; height:40px; border-radius:8px; background:#eee; font-size:20px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.mo-head b { font-size:14px; }
.mo-head p { font-size:11px; color:#aaa; }
.mo-img { height:160px; display:flex; align-items:center; justify-content:center; font-size:50px; }
.mo-text { padding:10px 15px; font-size:14px; color:#333; line-height:1.5; }
.mo-foot { display:flex; gap:20px; padding:10px 15px; border-top:0.5px solid #eee; }
.mo-foot span { font-size:13px; color:var(--gray); cursor:pointer; }

/* CARDS */
.card-visual { background:linear-gradient(135deg,#1a1a2e,#0f3460); border-radius:18px; padding:25px; margin-bottom:15px; color:#fff; }
.cv-top { display:flex; justify-content:space-between; font-size:11px; color:#aaa; letter-spacing:2px; }
.cv-num { font-size:17px; letter-spacing:3px; margin:15px 0; }
.cv-bot { display:flex; justify-content:space-between; align-items:flex-end; }
.cv-bot small { font-size:10px; color:#aaa; display:block; margin-bottom:3px; }
.cv-bal { font-size:24px; font-weight:bold; color:var(--gold); }
.offer-item { background:var(--white); border-radius:12px; padding:15px; margin-bottom:10px; display:flex; align-items:center; gap:15px; cursor:pointer; font-size:28px; }
.offer-item:active { background:#f5f5f5; }
.offer-item b { display:block; font-size:13px; margin-bottom:3px; }
.offer-item p { font-size:11px; color:var(--gray); }

/* STICKERS */
.s-group-title { font-size:12px; color:var(--gray); margin-bottom:8px; padding-left:2px; }
.sticker-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; background:var(--white); padding:15px; border-radius:12px; margin-bottom:12px; }
.sticker-grid div { font-size:36px; text-align:center; padding:8px; border-radius:8px; cursor:pointer; }
.sticker-grid div:active { background:#f0f0f0; }

/* SETTINGS */
.set-prof { background:var(--white); padding:20px; display:flex; align-items:center; gap:15px; cursor:pointer; margin-bottom:8px; }
.set-prof:active { background:#f5f5f5; }
.set-av { width:56px; height:56px; border-radius:8px; background:#f0f0f0; font-size:28px; display:flex; align-items:center; justify-content:center; flex-shrink:0; overflow:hidden; }
.set-prof div b, #set-name { font-size:17px; font-weight:500; }
.btn-exit { background:none; border:1px solid #ff3b30; color:#ff3b30; padding:14px 40px; border-radius:12px; font-size:15px; cursor:pointer; }

/* PATENT */
.form-card { background:var(--white); border-radius:12px; padding:20px; }
.form-card h3 { font-size:16px; margin-bottom:15px; color:var(--text); }
.form-inp { width:100%; background:#f5f5f5; border:1px solid #e0e0e0; padding:14px; color:var(--text); border-radius:10px; margin-bottom:10px; outline:none; font-size:14px; }
.form-inp::placeholder { color:#aaa; }
textarea.form-inp { min-height:90px; resize:none; }
.level-row { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:15px; }
.lv { border:2px solid #eee; border-radius:10px; padding:12px 6px; text-align:center; cursor:pointer; font-size:13px; }
.lv b { display:block; font-size:12px; margin-bottom:3px; }
.lv small { color:var(--gray); }
.lv.sel { border-color:var(--gold); background:#fff8f0; }
.lv.sel small { color:var(--gold); }
.btn-dark { background:var(--dark); color:var(--gold); border:1px solid var(--gold); padding:15px; border-radius:12px; font-weight:bold; width:100%; cursor:pointer; font-size:14px; }
.btn-dark:active { opacity:0.85; }
.inv-item { background:var(--white); border-radius:10px; padding:14px; margin-bottom:8px; border-left:4px solid var(--gold); }
.inv-badge { display:inline-block; background:var(--gold); color:#fff; font-size:10px; padding:2px 7px; border-radius:8px; margin-bottom:5px; }
.inv-item h4 { font-size:14px; margin-bottom:3px; }
.inv-item p { font-size:12px; color:var(--gray); }

/* WALLET */
.qrt-card { background:linear-gradient(135deg,#0f0f0f,var(--dark)); border:1px solid var(--gold); border-radius:18px; padding:25px; margin-bottom:15px; text-align:center; }
.qc-label { font-size:11px; color:#888; text-transform:uppercase; letter-spacing:2px; margin-bottom:8px; }
.qc-amount { font-size:44px; font-weight:900; color:var(--gold); }
.qc-sub { font-size:12px; color:#555; margin-top:4px; }
.qrnc-card { background:var(--white); border-radius:12px; padding:18px; margin-bottom:12px; font-size:14px; color:var(--text); }
.bar-track { background:#eee; border-radius:10px; height:10px; overflow:hidden; margin-top:10px; }
.bar-fill { height:100%; background:linear-gradient(90deg,var(--green),var(--neon)); border-radius:10px; transition:width 0.5s; }
.hist-card { background:var(--white); border-radius:12px; padding:15px; }
.hist-card h4 { font-size:14px; margin-bottom:12px; color:var(--text); }
.hist-row { display:flex; justify-content:space-between; align-items:center; padding:11px 0; border-bottom:0.5px solid #eee; font-size:13px; color:var(--text); }
.hist-row:last-child { border-bottom:none; }
.hist-row .green { color:var(--green); font-weight:bold; }

/* МОДАЛКИ */
.modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.88); z-index:8000; align-items:center; justify-content:center; }
.modal.open { display:flex; }
.modal-box { background:var(--white); border-radius:20px; padding:25px; width:90%; max-width:340px; color:var(--text); }
.modal-title { font-size:17px; font-weight:bold; margin-bottom:20px; text-align:center; }
.modal-close { text-align:center; margin-top:18px; color:var(--gray); cursor:pointer; font-size:14px; }
.app-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:15px; }
.app-item { display:flex; flex-direction:column; align-items:center; font-size:11px; color:#333; text-decoration:none; cursor:pointer; }
.app-item img { width:50px; height:50px; margin-bottom:6px; border-radius:12px; }
.scan-box { width:240px; height:240px; border:2px solid var(--neon); border-radius:12px; overflow:hidden; position:relative; }
.scan-line { position:absolute; width:100%; height:2px; background:var(--neon); top:0; animation:scan 2s linear infinite; }

/* ТОСТ */
#toast-el { position:fixed; top:70px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.82); color:#fff; padding:11px 20px; border-radius:20px; font-size:13px; z-index:9999; opacity:0; pointer-events:none; transition:opacity 0.2s; white-space:nowrap; }
#toast-el.show { opacity:1; }
