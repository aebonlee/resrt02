import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { company } from '../data/company.js'
import ThemeSwitcher from './ThemeSwitcher.jsx'

const links = [
  { to: '/', label: '홈', end: true },
  { to: '/about', label: '회사소개' },
  { to: '/services', label: '서비스' },
  { to: '/portfolio', label: '포트폴리오' },
  { to: '/contact', label: '문의' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true"></span>
          {company.name}
        </Link>

        <div className="nav-right">
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-cta">
              <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                상담 신청
              </Link>
            </li>
          </ul>

          {/* 상담 신청 버튼 뒤: 다크/라이트 + 컬러 팔레트 */}
          <ThemeSwitcher />

          <button
            className="nav-toggle"
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
