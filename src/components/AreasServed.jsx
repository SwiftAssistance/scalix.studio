import { Link } from 'react-router-dom'

const areaList = [
  { name: 'Windsor', slug: 'windsor' },
  { name: 'Slough', slug: 'slough' },
  { name: 'Reading', slug: 'reading' },
  { name: 'Maidenhead', slug: 'maidenhead' },
  { name: 'Bracknell', slug: 'bracknell' },
  { name: 'Wokingham', slug: 'wokingham' },
  { name: 'Ascot', slug: 'ascot' },
  { name: 'Staines', slug: 'staines-upon-thames' },
  { name: 'Egham', slug: 'egham' },
  { name: 'Henley', slug: 'henley-on-thames' },
  { name: 'Marlow', slug: 'marlow' },
  { name: 'High Wycombe', slug: 'high-wycombe' },
]

export default function AreasServed({ service }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-3 text-center animate-on-scroll">Areas We Serve</h2>
        <p className="text-slate-500 text-sm text-center mb-8 animate-on-scroll">Expert {service} across Berkshire, the Thames Valley, and beyond.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {areaList.map((area) => (
            <Link key={area.slug} to={`/areas/${area.slug}`} className="bg-white rounded-full px-5 py-2.5 text-sm font-medium border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {service} {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
