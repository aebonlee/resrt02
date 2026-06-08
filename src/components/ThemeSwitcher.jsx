import { useState, useRef, useEffect } from 'react'
import { useTheme, PALETTES } from '../theme/useTheme.js'

export default function ThemeSwitcher() {
  const { mode, toggleMode, palette, setPalette } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // 바깥 클릭 시 팔레트 메뉴 닫기
  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div className="theme-tools" ref={ref}>
      {/* 다크/라이트 전환 */}
      <button
        className="theme-btn"
        onClick={toggleMode}
        aria-label={mode === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
        title={mode === 'dark' ? '라이트 모드' : '다크 모드'}
      >
        {mode === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* 컬러 팔레트 선택 */}
      <div className="palette-wrap">
        <button
          className="theme-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="컬러 팔레트 변경"
          aria-expanded={open}
          title="컬러 변경"
        >
          🎨
        </button>

        {open && (
          <div className="palette-menu" role="menu">
            <span className="palette-title">컬러 테마</span>
            <div className="palette-dots">
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  className={`palette-dot ${palette === p.id ? 'active' : ''}`}
                  style={{ background: p.color }}
                  onClick={() => { setPalette(p.id); setOpen(false) }}
                  aria-label={p.label}
                  title={p.label}
                >
                  {palette === p.id ? '✓' : ''}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
