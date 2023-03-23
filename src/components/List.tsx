import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CaseStudyContext from './utils/CaseStudyContext'

export default function List() {
  const data = useContext(CaseStudyContext)

  console.log(data)

  return (
    <div className="work grid grid-cols-2 text-4xl max-w-4xl">
      <h3>Work</h3>
      <div className="flex flex-col gap-7">
        {data?.map((item: any, i: number) => (
          <Link key={item._id} to={`./case-studies/${item._id}`}>
            <span>🔒 {item.hero.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
