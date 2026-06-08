# DreamIT Biz — 회사 소개 웹사이트 (resrt02)

IT 개발 회사 **DreamIT Biz**의 공식 회사 소개 사이트입니다.
컴퓨터 판매 · 프로그램 개발 · 웹개발을 제공하는 종합 IT 기업을 컨셉으로 한 React 기반 샘플 사이트입니다.

## 회사 컨셉
- **업종**: 컴퓨터 판매 & 프로그램 개발 & 웹개발
- **설립**: 2003년 9월 23일

## 디자인 컬러
| 구분 | 색상 | HEX |
|------|------|-----|
| 주컬러 | 다크블루 | `#0a1931` |
| 주컬러 | 로열블루 | `#2451d6` / `#4169e1` |
| 포인트 | 다크그린 | `#15803d` |
| 포인트 | 다크레드 | `#991b1b` |

## 기술 스택
- React 19 + Vite 8
- react-router-dom (HashRouter, GitHub Pages SPA 대응)
- 순수 CSS (CSS 변수 기반 테마)

## 페이지 구성
- `/` 홈 — Hero · 통계 · 서비스 요약 · CTA
- `/about` 회사소개 — 연혁 타임라인 · 핵심가치
- `/services` 서비스 — 4대 서비스 · 진행 프로세스
- `/portfolio` 포트폴리오 — 프로젝트 갤러리
- `/contact` 문의 — 연락처 · 문의 폼

## 개발

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드
npm run deploy   # gh-pages 배포
```

## 배포
- GitHub Pages (gh-pages 브랜치 수동 배포)
- URL: https://aebonlee.github.io/resrt02/
