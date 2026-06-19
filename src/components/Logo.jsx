import logoMark from '../assets/logo-mark.png'
import logoFull from '../assets/logo-full.png'

export default function Logo({ variant = 'mark', className = '' }) {
  const src = variant === 'full' ? logoFull : logoMark
  const alt =
    variant === 'full'
      ? 'RollnFitness'
      : 'Rolln Enterprises'

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
    />
  )
}
