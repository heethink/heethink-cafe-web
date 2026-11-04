# ☕ heethink cafe (희띵크 카페)

당근(Daangn)의 **SEED Design System**([daangn/seed-design](https://github.com/daangn/seed-design)) 디자인 토큰 및 UI/UX 원칙을 기반으로 제작된 모던 스페셜티 카페 & 로스터리 웹사이트입니다.

---

## 🌟 주요 기능 및 특징

1. **SEED Design System 토큰 & 컴포넌트**
   - 당근 고유의 캐롯 오렌지(`--seed-palette-carrot-500`, `#ff6f0f`), 웜 그레이 컬러 팔레트 적용
   - Pretendard 타이포그래피 스케일 및 직관적 시맨틱 토큰 적용
   - SEED 필터 칩(Chip), 둥근 카드(Radius 16px), 하단 바텀 시트(Bottom Sheet) 인터랙션 구현

2. **인터랙티브 메뉴 & 장바구니 시스템**
   - 카테고리별 실시간 필터링 (시그니처 / 에스프레소 & 필터 / 논커피 & 티 / 수제 베이커리)
   - 음료별 ICE / HOT 실시간 옵션 선택
   - 당근 스타일의 바텀 시트 장바구니 및 수량 조절
   - 모의 주문 결제 및 영수증 모달 출력

3. **1초 커피 취향 테스트 (Coffee Matcher)**
   - 달콤크림 / 묵직고소 / 산뜻과일향 중 끌리는 취향을 선택하면 맞춤 메뉴 즉시 추천

4. **카페 앰비언스 백색소음 플레이어 (Web Audio API)**
   - 상단 앱바에서 카페 특유의 부드러운 핑크 노이즈(백색소음)를 언제든지 켜고 끌 수 있는 기능 내장 (외부 음원 파일 불필요)

5. **성수동 동네 단골 후기 & 향기 지수**
   - 당근마켓의 '매너온도' 및 '동네생활' 리뷰 감성을 재해석한 희띵크 향기 지수(98.5°C)와 이웃 리얼 후기

6. **테이블 & 미팅룸 예약 폼**
   - 날짜, 시간, 인원수 선택 후 즉시 예약 피드백 알림

---

## 🚀 실행 방법

### 방법 1. 브라우저에서 바로 열기
- [index.html](file:///Users/heethink/Downloads/sample/index.html) 또는 [public/index.html](file:///Users/heethink/Downloads/sample/public/index.html) 파일을 웹 브라우저(Chrome, Safari 등)에서 더블 클릭하여 바로 열 수 있습니다.

### 방법 2. Node.js Express 서버로 실행
```bash
npm install
npm start
# http://localhost:3300 접속
```
