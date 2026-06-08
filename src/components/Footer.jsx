import { Link } from 'react-router-dom'
import { company } from '../data/company.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <div className="brand">
            <span className="logo-mark" aria-hidden="true"></span>
            {company.name}
          </div>
          <p>{company.description}</p>
        </div>

        <div>
          <h5>바로가기</h5>
          <ul>
            <li><Link to="/about">회사소개</Link></li>
            <li><Link to="/services">서비스</Link></li>
            <li><Link to="/portfolio">포트폴리오</Link></li>
            <li><Link to="/contact">문의하기</Link></li>
          </ul>
        </div>

        <div>
          <h5>연락처</h5>
          <ul>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={`tel:${company.phone}`}>{company.phone}</a></li>
            <li>{company.address}</li>
            <li>설립 {company.foundedLabel}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} {company.name}. All rights reserved.</span>
        <span>{company.nameKo} · 컴퓨터 판매 · 프로그램 개발 · 웹개발</span>
      </div>
    </footer>
  )
}
