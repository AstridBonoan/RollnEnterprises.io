import logoIcon from '../assets/logo-icon.png'
import logoEmblem from '../assets/logo-emblem.png'

export default function Logo({ variant = 'icon', className = '' }) {
  const src = variant === 'emblem' ? logoEmblem : logoIcon

  return (
    <img
      src={src}
      alt=""
      className={`object-contain ${className}`}
      aria-hidden="true"
    />
  )
}
