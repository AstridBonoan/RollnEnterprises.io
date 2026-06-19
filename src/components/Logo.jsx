import logoImg from '../assets/logo.png'

export default function Logo({ className = 'h-10 w-auto sm:h-11' }) {
  return (
    <img
      src={logoImg}
      alt="Rolln Enterprises — Technology for Mobility & Life"
      className={`object-contain ${className}`}
    />
  )
}
