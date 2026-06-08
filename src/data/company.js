// 회사 기본 정보 — 한 곳에서 관리
export const company = {
  name: 'DreamIT Biz',
  nameKo: '드림아이티비즈',
  tagline: '기술로 비즈니스의 꿈을 현실로',
  founded: '2003-09-23',
  foundedLabel: '2003년 9월 23일',
  email: 'contact@dreamitbiz.com',
  phone: '02-0000-0000',
  address: '서울특별시',
  description:
    '2003년 창업 이래 컴퓨터 판매, 프로그램 개발, 웹개발을 한 자리에서 제공해 온 IT 전문 기업입니다.',
}

export const yearsInBusiness = new Date().getFullYear() - 2003

export const services = [
  {
    id: 'software',
    icon: 'terminal',
    title: '프로그램 개발',
    desc: '업무 자동화, 맞춤형 솔루션, 데스크톱·서버 애플리케이션까지 요구사항에 꼭 맞는 소프트웨어를 설계·개발합니다.',
    points: ['맞춤형 SI / 솔루션', '업무 자동화', '유지보수 & 운영'],
    accent: 'var(--royal)',
  },
  {
    id: 'web',
    icon: 'language',
    title: '웹 개발',
    desc: '반응형 웹사이트, 웹 애플리케이션, 쇼핑몰, 관리자 시스템을 최신 기술 스택으로 빠르고 견고하게 구축합니다.',
    points: ['반응형 웹사이트', 'React / SPA', '쇼핑몰 · CMS'],
    accent: 'var(--royal-light)',
  },
  {
    id: 'hardware',
    icon: 'computer',
    title: '컴퓨터 판매 · 구축',
    desc: '20년 노하우로 사무용·개발용·서버 장비를 합리적으로 공급하고 네트워크 구축까지 책임집니다.',
    points: ['PC · 서버 공급', '네트워크 구축', '사후 기술지원'],
    accent: 'var(--green)',
  },
  {
    id: 'consulting',
    icon: 'shield',
    title: '유지보수 · 컨설팅',
    desc: '안정적인 운영을 위한 모니터링, 보안 점검, IT 인프라 컨설팅을 제공합니다.',
    points: ['시스템 운영', '보안 점검', 'IT 컨설팅'],
    accent: 'var(--red)',
  },
]

export const stats = [
  { value: `${yearsInBusiness}+`, label: '년의 업력' },
  { value: '500+', label: '완료 프로젝트' },
  { value: '200+', label: '고객사' },
  { value: '99%', label: '재계약률' },
]

export const milestones = [
  { year: '2003', title: '창업', desc: '컴퓨터 판매 및 소프트웨어 개발 사업 시작.' },
  { year: '2008', title: '웹 개발 본격화', desc: '기업 홈페이지 · 웹 솔루션 사업 확대.' },
  { year: '2014', title: '솔루션 사업부 신설', desc: '맞춤형 SI · 업무 자동화 솔루션 라인업 강화.' },
  { year: '2019', title: '클라우드 전환', desc: '클라우드 기반 서비스 구축 및 운영 역량 확보.' },
  { year: `${new Date().getFullYear()}`, title: '지속 성장', desc: 'React 등 최신 스택 기반 디지털 파트너로 도약.' },
]

export const projects = [
  { id: 1, title: '제조사 ERP 구축', category: '솔루션', color: 'var(--royal)' },
  { id: 2, title: '브랜드 쇼핑몰 리뉴얼', category: '웹', color: 'var(--royal-light)' },
  { id: 3, title: '공공기관 예약 시스템', category: '웹앱', color: 'var(--green)' },
  { id: 4, title: '병원 EMR 연동 개발', category: '솔루션', color: 'var(--red)' },
  { id: 5, title: '사옥 네트워크 인프라', category: '인프라', color: 'var(--navy-2)' },
  { id: 6, title: '교육 플랫폼 개발', category: '웹앱', color: 'var(--royal)' },
]
