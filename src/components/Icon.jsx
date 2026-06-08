import { ICON_SET, FA_MAP } from '../theme/iconSet.js'

// 아이콘 래퍼 — ICON_SET 값에 따라 Material Symbols / Font Awesome 렌더링
export default function Icon({ name, fill = false, className = '', style }) {
  if (ICON_SET === 'fontawesome') {
    const fa = FA_MAP[name] || 'fa-circle'
    return (
      <i
        className={`fa-solid ${fa}${className ? ' ' + className : ''}`}
        style={style}
        aria-hidden="true"
      />
    )
  }

  return (
    <span
      className={`material-symbols-rounded${fill ? ' fill' : ''}${className ? ' ' + className : ''}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
