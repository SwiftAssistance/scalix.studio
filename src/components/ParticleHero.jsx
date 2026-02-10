import { useRef, useEffect, useCallback } from 'react'

export default function ParticleHero({ children, className = 'min-h-[90vh]' }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef(null)
  const animRef = useRef(null)

  const initParticles = useCallback((width, height) => {
    const count = 800
    const particles = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.5 + 0.2,
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      if (!particlesRef.current) {
        particlesRef.current = initParticles(rect.width, rect.height)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particlesRef.current) {
        p.x += p.vx + (mx - 0.5) * 0.15
        p.y += p.vy + (my - 0.5) * 0.15

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.o})`
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [initParticles])

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current.x = (e.clientX - rect.left) / rect.width
    mouseRef.current.y = (e.clientY - rect.top) / rect.height
  }, [])

  return (
    <header
      className={`${className} flex items-center justify-center text-center p-4 relative overflow-hidden`}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>
      <div className="container mx-auto max-w-4xl z-10 px-4 relative">
        {children}
      </div>
    </header>
  )
}
