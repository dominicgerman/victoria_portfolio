import { Link } from 'react-router-dom'
import db from '../assets/db.json'

export default function Home() {
  return (
    <div>
      <h2 className="text-6xl max-w-4xl my-32">
        A lifelong Chicago native, I am currently a Product Design Lead at
        JPMorgan Chase.
      </h2>
      <div className="work grid grid-cols-2 text-4xl max-w-4xl">
        <h3>Work</h3>
        <div className="flex flex-col gap-7">
          {db.caseStudies.map((item) => (
            <Link key={item.id} to={`./case-study-${item.id}`}>
              <span>🔒 {item.hero.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
