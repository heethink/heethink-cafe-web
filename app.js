/**
 * heethink cafe - Core Application Script
 * Powered by Daangn SEED Design System Interactions
 */

// 1. Menu Data
const MENU_DATA = [
  {
    id: 'c1',
    category: 'signature',
    name: '희띵크 크림 라떼',
    enName: 'heethink Cream Latte',
    price: 6500,
    desc: '수제 흑임자 생크림과 진한 에스프레소의 고소하고 달콤한 시그니처',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
    tags: ['시그니처', '달콤고소', '단골 1위'],
    temp: 'ice',
    allowTemp: true
  },
  {
    id: 'c2',
    category: 'signature',
    name: '성수 솔티드 카라멜 아인슈페너',
    enName: 'Salted Caramel Einspänner',
    price: 6800,
    desc: '프랑스 게랑드 소금과 진한 수제 카라멜, 묵직한 콜드브루의 환상적인 단짠 조화',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=80',
    tags: ['단짠조화', '크림듬뿍'],
    temp: 'ice',
    allowTemp: false
  },
  {
    id: 'c3',
    category: 'coffee',
    name: '에티오피아 예가체프 G1 (핸드드립)',
    enName: 'Ethiopia Yirgacheffe G1 Filter',
    price: 7000,
    desc: '자스민 꽃향기와 청량한 복숭아, 베리류의 화사한 산미가 돋보이는 싱글 오리진',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
    tags: ['싱글오리진', '플로럴', '산미'],
    temp: 'hot',
    allowTemp: true
  },
  {
    id: 'c4',
    category: 'coffee',
    name: 'heethink 딥 로스트 아메리카노',
    enName: 'Deep Roast Americano',
    price: 4800,
    desc: '다크초콜릿의 쌉싸름함과 묵직한 바디감, 긴 여운을 남기는 하우스 블렌드',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
    tags: ['고소한원두', '데일리추천'],
    temp: 'ice',
    allowTemp: true
  },
  {
    id: 'c5',
    category: 'coffee',
    name: '오트 플랫화이트 (Oat Flat White)',
    enName: 'Oatmilk Flat White',
    price: 5800,
    desc: '귀리 우유의 담백한 고소함과 리스트레또 더블샷의 깊은 풍미',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=700&q=80',
    tags: ['비건옵션', '속편한우유'],
    temp: 'hot',
    allowTemp: true
  },
  {
    id: 'c6',
    category: 'noncoffee',
    name: '제주 유기농 말차 포레스트',
    enName: 'Jeju Organic Matcha Latte',
    price: 6500,
    desc: '제주 어린잎 유기농 말차 가루와 오트밀크의 쌉싸름하고 깊은 조화',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=80',
    tags: ['논커피', '제주말차', '인기'],
    temp: 'ice',
    allowTemp: true
  },
  {
    id: 'c7',
    category: 'noncoffee',
    name: '자몽 허니 블랙티 에이드',
    enName: 'Grapefruit Honey Black Tea',
    price: 6300,
    desc: '생자몽 과육을 듬뿍 넣고 우려낸 프리미엄 실론 홍차의 상큼한 청량감',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    tags: ['상큼청량', '생과육듬뿍'],
    temp: 'ice',
    allowTemp: false
  },
  {
    id: 'c8',
    category: 'dessert',
    name: '바닐라빈 프랑스 까눌레',
    enName: 'Vanilla Bean Canelé',
    price: 3800,
    desc: '겉은 바삭하고 속은 럼과 바닐라빈 향이 가득 촉촉한 정통 보르도 까눌레',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    tags: ['겉바속촉', '당일생산'],
    temp: null,
    allowTemp: false
  },
  {
    id: 'c9',
    category: 'dessert',
    name: '프리미엄 흑임자 바스크 치즈케이크',
    enName: 'Black Sesame Basque Cheesecake',
    price: 7500,
    desc: '끼리 크림치즈와 국내산 흑임자로 고온에서 구워낸 꾸덕하고 촉촉한 치즈케이크',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    tags: ['글루텐프리', '꾸덕한식감'],
    temp: null,
    allowTemp: false
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('heethink_cart') || '[]');
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  updateCartUI();
  setupEventListeners();
  initAmbientSound();
});

// 2. Render Menu Items
function renderMenu() {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const filtered = currentCategory === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === currentCategory);

  container.innerHTML = filtered.map(item => `
    <article class="menu-card" data-id="${item.id}">
      <div class="card-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="card-badge-pos">
          ${item.category === 'signature' ? '<span class="seed-badge-solid brand">★ 시그니처</span>' : ''}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-title">${item.name}</h3>
          <span class="card-price">${item.price.toLocaleString()}원</span>
        </div>
        <p class="card-subtext">${item.enName}</p>
        <p class="card-desc">${item.desc}</p>
        <div class="card-tags">
          ${item.tags.map(t => `<span class="tag-pill">#${t}</span>`).join('')}
        </div>
        <div class="card-footer">
          ${item.allowTemp ? `
            <div class="temp-selector" data-id="${item.id}">
              <button class="temp-opt-btn active ice" onclick="changeTemp('${item.id}', 'ice', this)">ICE</button>
              <button class="temp-opt-btn hot" onclick="changeTemp('${item.id}', 'hot', this)">HOT</button>
            </div>
          ` : '<span></span>'}
          <button class="card-add-btn" onclick="addToCart('${item.id}')">
            담기 +
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Temperature Selection State
const selectedTemps = {};

function changeTemp(itemId, temp, btn) {
  selectedTemps[itemId] = temp;
  const parent = btn.parentElement;
  parent.querySelectorAll('.temp-opt-btn').forEach(b => {
    b.classList.remove('active');
  });
  btn.classList.add('active');
}

// 3. Cart Functions
function addToCart(itemId) {
  const product = MENU_DATA.find(p => p.id === itemId);
  if (!product) return;

  const temp = product.allowTemp ? (selectedTemps[itemId] || 'ice') : null;
  const cartKey = `${itemId}_${temp || 'default'}`;

  const existing = cart.find(i => i.key === cartKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      key: cartKey,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      temp: temp,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`🛒 "${product.name}"을(를) 장바구니에 담았습니다.`);
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const cartList = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotalAmount');

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'grid' : 'none';
  }

  if (cartTotal) {
    cartTotal.textContent = `${totalPrice.toLocaleString()}원`;
  }

  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart-view">
        <p style="font-size: 2rem; margin-bottom: 8px;">☕</p>
        <p style="font-weight: 600; color: var(--seed-color-fg-neutral);">장바구니가 비어있어요</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">heethink cafe의 맛있는 커피와 디저트를 골라보세요!</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumbnail">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-opt-text">${item.temp ? (item.temp === 'ice' ? '🧊 ICE' : '♨️ HOT') : '기본 옵션'}</p>
        <div class="cart-item-action-row">
          <span class="cart-item-price-val">${(item.price * item.quantity).toLocaleString()}원</span>
          <div class="stepper">
            <button class="stepper-btn" onclick="updateQty('${item.key}', -1)">-</button>
            <span style="font-size: 0.85rem; font-weight: 700; min-width: 16px; text-align: center;">${item.quantity}</span>
            <button class="stepper-btn" onclick="updateQty('${item.key}', 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateQty(key, delta) {
  const index = cart.findIndex(i => i.key === key);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('heethink_cart', JSON.stringify(cart));
}

// 4. Modal / Drawer Controls
function openCart() {
  document.getElementById('cartDrawerBackdrop').classList.add('active');
  document.getElementById('cartDrawer').classList.add('active');
}

function closeCart() {
  document.getElementById('cartDrawerBackdrop').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('active');
}

function checkoutOrder() {
  if (cart.length === 0) {
    showToast('장바구니가 비어 있습니다.');
    return;
  }

  const orderNum = 'HT-' + Math.floor(100000 + Math.random() * 900000);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Show receipt modal
  document.getElementById('receiptOrderNum').textContent = orderNum;
  document.getElementById('receiptItemsSummary').textContent = `${cart[0].name} ${itemCount > 1 ? `외 ${itemCount - 1}개` : ''}`;
  document.getElementById('receiptTotal').textContent = `${totalAmount.toLocaleString()}원`;

  closeCart();
  document.getElementById('receiptOverlay').classList.add('active');

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
}

function closeReceipt() {
  document.getElementById('receiptOverlay').classList.remove('active');
  showToast('주문이 접수되었습니다! 카운터에서 준비해 드릴게요.');
}

// 5. Toast Notification
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('seedToast');
  if (!toast) return;

  toast.innerHTML = `<span>💬</span><span>${message}</span>`;
  toast.classList.add('visible');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2800);
}

// 6. Interactive Coffee Finder
const finderRecommendations = {
  sweet: {
    name: '희띵크 크림 라떼',
    desc: '부드럽고 달콤한 흑임자 크림이 생각의 깊이를 더해주는 1순위 추천 메뉴!',
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80',
    id: 'c1'
  },
  heavy: {
    name: 'heethink 딥 로스트 아메리카노',
    desc: '묵직한 바디감과 다크초콜릿 향으로 집중이 필요할 때 최고의 파트너.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80',
    id: 'c4'
  },
  fruity: {
    name: '에티오피아 예가체프 G1 (핸드드립)',
    desc: '화사한 꽃향기와 은은한 복숭아 산미로 기분 좋은 리프레시를 선사합니다.',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
    id: 'c3'
  }
};

function selectTaste(type, btn) {
  document.querySelectorAll('.finder-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const rec = finderRecommendations[type];
  if (!rec) return;

  const resultBox = document.getElementById('finderResult');
  const resultImg = document.getElementById('finderResultImg');
  const resultTitle = document.getElementById('finderResultTitle');
  const resultDesc = document.getElementById('finderResultDesc');
  const resultBtn = document.getElementById('finderAddBtn');

  resultImg.src = rec.img;
  resultTitle.textContent = rec.name;
  resultDesc.textContent = rec.desc;
  resultBtn.onclick = () => addToCart(rec.id);

  resultBox.classList.add('show');
}

// 7. Event Listeners
function setupEventListeners() {
  // Category Chips
  document.querySelectorAll('.seed-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.seed-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category;
      renderMenu();
    });
  });

  // Reservation Form
  const resForm = document.getElementById('reservationForm');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const party = document.getElementById('resParty').value;

      showToast(`🎉 ${name}님, ${date} ${time} (${party}) 예약이 완료되었습니다!`);
      resForm.reset();
    });
  }
}

// 8. Ambient White Noise / Cafe Music (Web Audio API)
let audioCtx = null;
let isPlaying = false;
let noiseNode = null;
let gainNode = null;

function initAmbientSound() {
  const toggleBtn = document.getElementById('soundToggleBtn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (isPlaying) {
      stopSound();
      toggleBtn.innerHTML = '<span>☕ 카페 백색소음 듣기</span>';
      document.getElementById('soundWave').classList.remove('playing');
    } else {
      startSound();
      toggleBtn.innerHTML = '<span>⏸️ 소리 끄기</span>';
      document.getElementById('soundWave').classList.add('playing');
      showToast('🎶 차분한 카페 앰비언스 사운드가 켜졌습니다.');
    }
    isPlaying = !isPlaying;
  });
}

function startSound() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Pink noise generator for soothing cafe white noise
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = noiseBuffer;
  noiseNode.loop = true;

  // Gentle low-pass filter
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 650;

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);

  noiseNode.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  noiseNode.start(0);
}

function stopSound() {
  if (noiseNode) {
    try {
      noiseNode.stop();
      noiseNode.disconnect();
    } catch (e) {}
  }
}
