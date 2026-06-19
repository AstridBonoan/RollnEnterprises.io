import logoImg from '../assets/logo.png'

export default function Logo({ className = '', showText = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImg}
        alt=""
        className="h-full w-full object-contain"
        aria-hidden={showText ? true : undefined}
      />
      {showText && (
        <span className="bg-gradient-to-r from-bronze-light via-white to-bronze-light bg-clip-text text-base font-bold tracking-tight text-transparent sm:text-lg">
          RollnEnterprises
        </span>
      )}
    </span>
  )
}
