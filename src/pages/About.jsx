import { Link } from 'react-router-dom'
import { company, milestones, stats, yearsInBusiness } from '../data/company.js'

const values = [
  { icon: '🎯', color: 'var(--royal)', title: '고객 중심', desc: '고객의 비즈니스 성공이 우리의 기준입니다.' },
  { icon: '🔧', color: 'var(--green)', title: '기술력', desc: '20년 노하우와 최신 기술의 결합.' },
  { icon: '🤝', color: 'var(--red)', title: '신뢰', desc: '99% 재계약률이 증명하는 책임감.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumb">HOME / 회사소개</div>
          <h1>20년 한 길, IT 파트너 {company.name}</h1>
          <p>{company.foundedLabel} 창업 이래 변함없이 고객의 곁에서 IT 솔루션을 제공해 왔습니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">About us</span>
            <h2>기술로 비즈니스의 꿈을 현실로</h2>
            <p>
              {company.name}({company.nameKo})는 {company.foundedLabel} 컴퓨터 판매와
              소프트웨어 개발을 시작으로 출발했습니다. 지난 {yearsInBusiness}년 동안 하드웨어 공급,
              맞춤형 프로그램 개발, 웹 구축, 시스템 운영에 이르는 전 영역에서 전문성을 쌓아 왔습니다.
            </p>
            <p>
              우리는 단순한 외주 개발사가 아니라, 고객의 비즈니스를 함께 고민하고 성장시키는
              디지털 파트너를 지향합니다.
            </p>
            <ul className="value-list">
              {values.map((v) => (
                <li key={v.title}>
                  <span className="vico" style={{ background: v.color }}>{v.icon}</span>
                  <span>
                    <strong>{v.title}</strong>
                    <span>{v.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {stats.map((s) => (
                <div className="stat" key={s.label} style={{
                  background: 'var(--surface-2)', padding: '28px 16px', borderRadius: 'var(--radius)',
                }}>
                  <div className="num">{s.value}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">History</span>
            <h2>걸어온 길</h2>
            <p>작은 컴퓨터 판매점에서 종합 IT 기업으로 성장하기까지.</p>
          </div>
          <div className="timeline">
            {milestones.map((m) => (
              <div className="tl-item" key={m.year}>
                <div className="tl-year">{m.year}</div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>{company.name}와 함께하세요</h2>
            <p>축적된 경험과 검증된 기술로 고객의 성공을 함께 만들어 갑니다.</p>
            <Link to="/contact" className="btn btn-primary">상담 신청하기 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
