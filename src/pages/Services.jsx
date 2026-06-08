import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { services } from '../data/company.js'

const process = [
  { step: '01', title: '상담 · 분석', desc: '요구사항을 듣고 현황을 분석해 최적의 방향을 제안합니다.' },
  { step: '02', title: '설계 · 기획', desc: '구조와 일정을 설계하고 명확한 산출물을 정의합니다.' },
  { step: '03', title: '개발 · 구축', desc: '검증된 기술 스택으로 견고하게 구현합니다.' },
  { step: '04', title: '운영 · 지원', desc: '배포 이후에도 안정적인 운영을 책임집니다.' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumb">HOME / 서비스</div>
          <h1>IT의 처음부터 끝까지</h1>
          <p>하드웨어 공급, 소프트웨어 개발, 웹 구축, 운영 지원을 하나의 파트너에게 맡기세요.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Process</span>
            <h2>프로젝트 진행 방식</h2>
            <p>체계적인 4단계 프로세스로 완성도 높은 결과를 만듭니다.</p>
          </div>
          <div className="card-grid">
            {process.map((p) => (
              <div className="svc-card" key={p.step}>
                <div className="num" style={{
                  fontSize: '2rem', fontWeight: 800, color: 'var(--royal)', marginBottom: 8,
                }}>{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>어떤 서비스가 필요하신가요?</h2>
            <p>요구사항을 알려주시면 가장 합리적인 방안을 제안해 드립니다.</p>
            <Link to="/contact" className="btn btn-primary">견적 · 상담 문의 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
