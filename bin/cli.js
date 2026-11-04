#!/usr/bin/env node

/**
 * heethink cafe - Interactive Terminal CLI
 * Powered by Daangn SEED Design System Spirit
 */

const readline = require('readline');
const { exec } = require('child_process');

const BANNER = `
\x1b[38;2;255;111;15m       (  )   (   )  )
        ) (   )  (  (
        ( )  (    ) )
       _____________
      <_____________> ====\x1b[0m
\x1b[38;2;184;107;59m      |             |     /
      |  heethink   |____/
      |    cafe     |
      |_____________|\x1b[0m
\x1b[90m===================================================\x1b[0m
\x1b[1m☕ heethink cafe (희띵크 카페) — Terminal CLI v1.0.0\x1b[0m
\x1b[38;2;255;111;15m[SEED Design]\x1b[0m 성수동 2가 ∙ 생각이 머무는 공간
\x1b[90m===================================================\x1b[0m
`;

const MENU_ITEMS = [
  { name: '희띵크 크림 라떼 (시그니처)', price: '6,500원', desc: '수제 흑임자 생크림과 진한 에스프레소' },
  { name: '솔티드 카라멜 아인슈페너', price: '6,800원', desc: '게랑드 소금과 진한 수제 카라멜 단짠' },
  { name: '에티오피아 예가체프 G1 (핸드드립)', price: '7,000원', desc: '자스민 꽃향기와 청량한 복숭아 산미' },
  { name: 'heethink 딥 로스트 아메리카노', price: '4,800원', desc: '다크초콜릿 향과 묵직한 바디감' },
  { name: '오트 플랫화이트', price: '5,800원', desc: '귀리 우유와 리스트레또 더블샷' },
  { name: '제주 유기농 말차 포레스트', price: '6,500원', desc: '제주 유기농 말차와 오트밀크' },
  { name: '바닐라빈 프랑스 까눌레', price: '3,800원', desc: '럼과 바닐라빈 겉바속촉 보르도 정통' },
  { name: '흑임자 바스크 치즈케이크', price: '7,500원', desc: '끼리 크림치즈와 국내산 흑임자 꾸덕함' }
];

function printMenu() {
  console.log('\n\x1b[1m📋 heethink cafe 추천 메뉴판\x1b[0m');
  console.log('\x1b[90m---------------------------------------------------\x1b[0m');
  MENU_ITEMS.forEach((item, idx) => {
    console.log(`\x1b[33m[${idx + 1}]\x1b[0m \x1b[1m${item.name}\x1b[0m — \x1b[38;2;255;111;15m${item.price}\x1b[0m`);
    console.log(`    \x1b[90m↳ ${item.desc}\x1b[0m`);
  });
  console.log('\x1b[90m---------------------------------------------------\x1b[0m\n');
}

function openUrl(url) {
  console.log(`\n🚀 브라우저를 엽니다: \x1b[36m${url}\x1b[0m\n`);
  const startCmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  exec(`${startCmd} ${url}`);
}

function showReviews() {
  console.log('\n\x1b[1m🧡 성수동 이웃 단골 후기 (희띵크 향기 지수: 98.5°C)\x1b[0m');
  console.log('\x1b[90m---------------------------------------------------\x1b[0m');
  console.log('🦊 \x1b[1m성수동토박이\x1b[0m (단골 8개월차): "주말마다 크림 라떼 마시러 와요. 조용히 책 읽기 최고의 아지트!"');
  console.log('☕ \x1b[1m커피러버민지\x1b[0m (단골 1년차): "핸드드립 예가체프 진심 감동. 까눌레 겉바속촉 미쳤습니다."');
  console.log('🌿 \x1b[1m초록식물집사\x1b[0m (단골 5개월차): "테라스 좌석 햇살이 너무 예쁘고 반려동물 동반 가능해서 좋아요!"');
  console.log('\x1b[90m---------------------------------------------------\x1b[0m\n');
}

function showPrompt(rl) {
  console.log(`
\x1b[1m선택할 작업의 번호를 입력해주세요:\x1b[0m
  \x1b[32m1)\x1b[0m 📋 메뉴 목록 보기
  \x1b[32m2)\x1b[0m 🌐 Vercel 라이브 웹사이트 열기
  \x1b[32m3)\x1b[0m 🖥️ 로컬 웹 서버 실행 (http://localhost:3300)
  \x1b[32m4)\x1b[0m 🧡 동네 단골 후기 & 향기 지수 확인
  \x1b[32m5)\x1b[0m 🐙 GitHub 저장소 열기
  \x1b[32m0)\x1b[0m 🚪 종료
`);

  rl.question('\x1b[38;2;255;111;15mheethink-cafe > \x1b[0m', (ans) => {
    const choice = ans.trim();
    switch (choice) {
      case '1':
        printMenu();
        showPrompt(rl);
        break;
      case '2':
        openUrl('https://heethink-cafe.vercel.app');
        showPrompt(rl);
        break;
      case '3':
        console.log('\n☕ 로컬 Express 서버를 시작합니다...');
        require('../server.js');
        setTimeout(() => openUrl('http://localhost:3300'), 1000);
        break;
      case '4':
        showReviews();
        showPrompt(rl);
        break;
      case '5':
        openUrl('https://github.com/heethink/heethink-cafe-web');
        showPrompt(rl);
        break;
      case '0':
      case 'q':
      case 'exit':
        console.log('\n오늘도 향기롭고 평온한 하루 되세요! ☕\n');
        rl.close();
        process.exit(0);
        break;
      default:
        console.log('\x1b[31m올바른 번호를 선택해주세요.\x1b[0m');
        showPrompt(rl);
        break;
    }
  });
}

function main() {
  console.clear();
  console.log(BANNER);

  const args = process.argv.slice(2);
  if (args.includes('--open') || args.includes('-o')) {
    openUrl('https://heethink-cafe.vercel.app');
    process.exit(0);
  }
  if (args.includes('--menu') || args.includes('-m')) {
    printMenu();
    process.exit(0);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  showPrompt(rl);
}

main();
