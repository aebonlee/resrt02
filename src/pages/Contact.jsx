import { useState } from 'react'
import { company } from '../data/company.js'

const info = [
  { icon: '✉️', title: '이메일', value: company.email, href: `mailto:${company.email}` },
  { icon: '📞', title: '전화', value: company.phone, href: `tel:${company.phone}` },
  { icon: '📍', title: '주소', value: company.address },
  { icon: '🕒', title: '운영시간', value: '평일 09:00 - 18:00' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumb">HOME / 문의</div>
          <h1>프로젝트를 시작해 볼까요?</h1>
          <p>궁금한 점이나 의뢰하실 내용을 남겨주시면 빠르게 답변드리겠습니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Contact info</span>
            <h2 style={{ fontSize: '1.6rem', marginBottom: 24 }}>연락처 안내</h2>
            {info.map((i) => (
              <div className="info-item" key={i.title}>
                <span className="iico">{i.icon}</span>
                <span>
                  <strong>{i.title}</strong>
                  {i.href
                    ? <a href={i.href} style={{ color: 'var(--muted)' }}>{i.value}</a>
                    : <span>{i.value}</span>}
                </span>
              </div>
            ))}
          </div>

          <div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="field">
                  <label htmlFor="name">이름 / 회사명</label>
                  <input id="name" type="text" required placeholder="홍길동 / (주)드림" />
                </div>
                <div className="field">
                  <label htmlFor="email">이메일</label>
                  <input id="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="type">문의 유형</label>
                <select id="type" defaultValue="">
                  <option value="" disabled>선택하세요</option>
                  <option>프로그램 개발</option>
                  <option>웹 개발</option>
                  <option>컴퓨터 판매 · 구축</option>
                  <option>유지보수 · 컨설팅</option>
                  <option>기타</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="msg">문의 내용</label>
                <textarea id="msg" required placeholder="프로젝트 개요나 요청사항을 자유롭게 적어주세요." />
              </div>
              {sent && (
                <div className="form-note">
                  ✓ 문의가 접수되었습니다. (데모 — 실제 전송은 백엔드 연동 시 동작합니다)
                </div>
              )}
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
