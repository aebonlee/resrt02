// Google Material Symbols (Rounded) 래퍼 — 모노크롬 아이콘
export default function Icon({ name, fill = false, className = '', style }) {
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
