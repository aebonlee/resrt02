import { Link } from 'react-router-dom'
import { projects } from '../data/company.js'

export default function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumb">HOME / 포트폴리오</div>
          <h1>함께 만든 결과들</h1>
          <p>다양한 산업의 고객과 함께한 프로젝트의 일부를 소개합니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {projects.map((p) => (
              <article className="pf-card" key={p.id}>
                <div className="pf-thumb" style={{ background: p.color }}>
                  {p.category === '웹' || p.category === '웹앱' ? '🌐'
                    : p.category === '인프라' ? '🖥️' : '⚙️'}
                </div>
                <div className="pf-body">
                  <div className="cat">{p.category}</div>
                  <h3>{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="cta-band">
            <h2>다음 성공 사례의 주인공은 당신입니다</h2>
            <p>아이디어만 있다면 충분합니다. 나머지는 저희가 함께 완성합니다.</p>
            <Link to="/contact" className="btn btn-primary">프로젝트 시작하기 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
