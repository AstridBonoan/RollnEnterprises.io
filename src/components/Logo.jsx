import logo from '../assets/logo.png'

export default function Logo({ className = '' }) {
  return (
    <img
      src={logo}
      alt="Rolln Enterprises — Technology for mobility and life"
      className={`object-contain ${className}`}
    />
  )
}
