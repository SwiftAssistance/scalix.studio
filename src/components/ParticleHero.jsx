export default function ParticleHero({ children, className = 'min-h-[90vh]' }) {
  return (
    <header className={`${className} flex items-center justify-center text-center p-4 relative overflow-hidden`}>
      {/* Animated gradient background — pure CSS, no canvas, instant LCP */}
      <div className="absolute inset-0 z-[1] hero-gradient">
        {/* Floating orbs for depth */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 hero-grid" />
      </div>
      <div className="container mx-auto max-w-4xl z-10 px-4 relative">
        {children}
      </div>
    </header>
  )
}
