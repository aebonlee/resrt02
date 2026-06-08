import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { company, services, stats, yearsInBusiness } from '../data/company.js'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">
              <Icon name="auto_awesome" /> Since 2003 · {yearsInBusiness}년의 IT 파트너
            </span>
            <h1>
              기술로 비즈니스의<br />
              <span className="accent">꿈을 현실로</span> 만듭니다
            </h1>
            <p className="lead">
              {company.name}는 컴퓨터 판매부터 프로그램 개발, 웹개발까지
              IT의 처음과 끝을 함께하는 종합 IT 솔루션 기업입니다.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">프로젝트 상담하기 →</Link>
              <Link to="/services" className="btn btn-ghost">서비스 살펴보기</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-grid2">
              <div className="hero-card">
                <div className="dot"><Icon name="terminal" /></div>
                <h4>프로그램 개발</h4>
                <p>맞춤형 솔루션</p>
              </div>
              <div className="hero-card">
                <div className="dot"><Icon name="language" /></div>
                <h4>웹 개발</h4>
                <p>반응형 · SPA</p>
              </div>
              <div className="hero-card">
                <div className="dot"><Icon name="computer" /></div>
                <h4>컴퓨터 판매</h4>
                <p>PC · 서버 공급</p>
              </div>
              <div className="hero-card">
                <div className="dot"><Icon name="shield" /></div>
                <h4>유지보수</h4>
                <p>안정적 운영</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>한 곳에서 끝내는 IT 서비스</h2>
            <p>하드웨어 공급부터 소프트웨어 개발, 운영까지 모든 단계를 책임집니다.</p>
          </div>
          <div className="card-grid">
            {services.map((s) => (
              <div className="svc-card" key={s.id}>
                <div className="svc-icon" style={{ background: s.accent }}>
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-points">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>새로운 프로젝트를 준비 중이신가요?</h2>
            <p>20년 이상 축적된 노하우로 가장 합리적인 방법을 제안해 드립니다. 부담 없이 문의하세요.</p>
            <Link to="/contact" className="btn btn-primary">무료 상담 신청 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
