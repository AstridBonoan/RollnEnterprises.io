import logoEmblem from '../assets/logo-emblem.png'

export default function Logo({ className = '' }) {
  return (
    <img
      src={logoEmblem}
      alt=""
      className={`object-contain ${className}`}
      aria-hidden="true"
    />
  )
}
