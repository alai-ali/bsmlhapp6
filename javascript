// ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
var U = { name:'', huid:'', photo:'', qrt:0.01, qrnc:0, invs:[], lv:1, dark:false };

// ══════════════════════════════════
// РЕГИСТРАЦИЯ
// ══════════════════════════════════

function toggleLang() {
  document.getElementById('lang-menu').classList.toggle('open');
}

function setLang(l) {
  var t = { RU:'РЕГИСТРАЦИЯ', EN:'REGISTRATION', KZ:'ТІРКЕЛУ' };
  document.getElementById('reg-title').innerText = t[l] || 'РЕГИСТРАЦИЯ';
  document.getElementById('lang-menu').classList.remove('open');
}

async function startCam() {
  var name = document.getElementById('inp-name').value.trim();
  if (!name) { toast('⚠️ Введите имя'); return; }
  U.name = name;
  showScreen('scr-cam');
  try {
    var stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    document.getElementById('video').srcObject = stream;
  } catch (e) {
    // Камера недоступна — идём на NFC
    showScreen('scr-nfc');
  }
}

function takePhoto() {
  var v = document.getElementById('video');
  var c = document.getElementById('canvas');
  c.width = v.videoWidth;
  c.height = v.videoHeight;
  c.getContext('2d').drawImage(v, 0, 0);
  U.photo = c.toDataURL();
  if (v.srcObject) v.srcObject.getTracks().forEach(function(t){ t.stop(); });
  showScreen('scr-nfc');
}

function activateNFC() {
  document.getElementById('nfc-status').innerText = 'ОЖИДАНИЕ ЧИПА...';
  setTimeout(toApp, 2000);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}

function toApp() {
  // Генерируем HUID
  U.huid = Math.random().toString(36).substr(2, 8).toUpperCase();
  var huidFull = 'BSM-KZ-2025-' + U.huid;

  // Заполняем профиль
  document.getElementById('prof-name').innerText = U.name;
  document.getElementById('prof-huid').innerText = 'HUID: ' + huidFull;
  document.getElementById('set-name').innerText = U.name;
  document.getElementById('set-huid').innerText = 'HUID: ' + huidFull;
  document.getElementById('card-name').innerText = U.name.toUpperCase();

  // Фото
  if (U.photo) {
    document.getElementById('prof-photo').src = U.photo;
    document.getElementById('set-av').innerHTML = '<img src="'+U.photo+'" style="width:100%;height:100%;object-fit:cover;border-radius:8px">';
  }

  // QR код
  var qd = encodeURIComponent('BSMLH:' + huidFull + ':' + U.name);
  document.getElementById('qr-img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + qd;
  document.getElementById('qr-txt').innerText = huidFull;

  // Скрываем экраны регистрации
  document.querySelectorAll('.screen').forEach(function(s){ s.style.display = 'none'; });

  // Показываем приложение
  document.getElementById('app').style.display = 'flex';

  loadChats();
  updateBalances();
}

// ══════════════════════════════════
// НАВИГАЦИЯ
// ══════════════════════════════════

function switchTab(name, title) {
  var tabs = ['chat', 'maps', 'hub', 'prof'];
  tabs.forEach(function(t) {
    document.getElementById('tab-' + t).style.display = t === name ? 'block' : 'none';
    document.getElementById('nav-' + t).classList.toggle('active', t === name);
  });
  document.getElementById('hdr-title').innerText = title;
}

function openPage(id) {
  document.getElementById(id).classList.add('open');
}

function closePage(id) {
  document.getElementById(id).classList.remove('open');
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ══════════════════════════════════
// ЧАТ
// ══════════════════════════════════

function loadChats() {
  var chats = [
    { n: 'Alex Chen',     a: '🤖', m: 'Secure connection active',  t: '14:23' },
    { n: 'Sarah Kim',     a: '🎨', m: 'Patent approved! 🎉',       t: '12:41' },
    { n: 'Ahmed',         a: '🌙', m: 'Готов к лицензированию',    t: '11:05' },
    { n: 'Li Wei',        a: '🐲', m: 'BSMLH is amazing!',         t: 'Вчера' },
    { n: 'BSMLH Oracle',  a: '🛡️', m: 'Система работает стабильно', t: 'Вчера' }
  ];
  document.getElementById('chat-list').innerHTML = chats.map(function(x) {
    return '<div class="chat-item" onclick="toast(\'💬 Чат с ' + x.n + '\')">' +
      '<div class="chat-av">' + x.a + '</div>' +
      '<div class="chat-info">' +
        '<div class="chat-row"><span class="chat-name">' + x.n + '</span><span class="chat-time">' + x.t + '</span></div>' +
        '<div class="chat-msg">' + x.m + '</div>' +
      '</div></div>';
  }).join('');
}

// ══════════════════════════════════
// ПАТЕНТ
// ══════════════════════════════════

function selLv(n) {
  U.lv = n;
  [1, 2, 3].forEach(function(i) {
    document.getElementById('lv' + i).classList.toggle('sel', i === n);
  });
}

function fixInv() {
  var title = document.getElementById('inv-title').value.trim();
  if (!title) { toast('⚠️ Введите название'); return; }

  toast('📱 Приложите NFC карту...');

  setTimeout(function() {
    var qrt = [1, 5, 10][U.lv - 1];
    var inv = {
      title: title,
      lv: U.lv,
      ipc: document.getElementById('inv-ipc').value || 'N/A',
      date: new Date().toLocaleDateString('ru-RU'),
      id: 'INV-' + Math.random().toString(36).substr(2, 6).toUpperCase()
    };

    U.invs.unshift(inv);
    U.qrt = Math.round((U.qrt + qrt) * 100) / 100;

    // Очищаем форму
    document.getElementById('inv-title').value = '';
    document.getElementById('inv-desc').value = '';
    document.getElementById('inv-ipc').value = '';

    renderInvs();
    updateBalances();
    addHistory('🛠 Изобретение L' + U.lv, '+' + qrt + ' QRT');
    toast('✅ Зафиксировано! +' + qrt + ' QRT');
  }, 1500);
}

function renderInvs() {
  document.getElementById('inv-list').innerHTML = U.invs.map(function(x) {
    return '<div class="inv-item">' +
      '<span class="inv-badge">Level ' + x.lv + '</span>' +
      '<h4>' + x.title + '</h4>' +
      '<p>' + x.id + ' · ' + x.date + '</p>' +
      '</div>';
  }).join('');
}

// ══════════════════════════════════
// БАЛАНСЫ
// ══════════════════════════════════

function updateBalances() {
  var q = U.qrt.toFixed(2);
  var r = U.qrnc;
  var tier = r === 0 ? '⚪ Новый' : r <= 100 ? '🟢 Активный' : r <= 500 ? '🔵 Надёжный' : r <= 2000 ? '🟣 Доверенный' : '⭐ Легенда';

  document.getElementById('mini-qrt').innerText = q;
  document.getElementById('mini-qrnc').innerText = r;
  document.getElementById('mini-tier').innerText = tier;
  document.getElementById('w-qrt').innerText = q;
  document.getElementById('w-qrnc').innerText = r;
  document.getElementById('card-bal').innerText = q;
  document.getElementById('card-mini').innerText = q + ' QRT';
  document.getElementById('qrnc-bar').style.width = Math.min((r / 100) * 100, 100) + '%';
}

function addHistory(reason, amount) {
  var list = document.getElementById('hist-list');
  var div = document.createElement('div');
  div.className = 'hist-row';
  div.innerHTML = '<span>' + reason + '</span><span class="green">' + amount + '</span>';
  list.insertBefore(div, list.firstChild);
}

// ══════════════════════════════════
// ТЁМНАЯ ТЕМА
// ══════════════════════════════════

function toggleDark() {
  U.dark = !U.dark;
  document.getElementById('app').style.background = U.dark ? '#1a1a1a' : '#ededed';
  document.getElementById('dark-val').innerText = U.dark ? 'Вкл' : 'Выкл';
  toast(U.dark ? '🌙 Тёмная тема' : '☀️ Светлая тема');
}

// ══════════════════════════════════
// ТОСТ (уведомление)
// ══════════════════════════════════

var toastTimer;
function toast(msg) {
  var el = document.getElementById('toast-el');
  el.innerText = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { el.classList.remove('show'); }, 2200);
}

// Закрытие меню языка при клике вне
document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-btn')) {
    document.getElementById('lang-menu').classList.remove('open');
  }
});
