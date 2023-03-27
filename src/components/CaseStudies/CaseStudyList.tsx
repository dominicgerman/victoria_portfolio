import { useContext } from 'react'
import CaseStudyContext from '../../hooks/CaseStudyContext'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../utils/Auth'

type CaseStudy = {
  _id: string
  index: number
  hero: {
    title: string
  }
}

export default function CaseStudyList() {
  const { pathname } = useLocation()
  const { user } = useAuth()
  const data: [] = useContext(CaseStudyContext)

  const style = `text-3xl md:text-4xl max-w-4xl mb-32 ${
    pathname === '/case-studies'
      ? 'my-20 md:mt-36 md:mx-8'
      : 'block md:grid grid-cols-2'
  } `
  return (
    <>
      <div className={style}>
        <h3 className="mb-8 md:mb-16">Work</h3>
        <div className="flex flex-col gap-7">
          {data?.map((item: CaseStudy) => (
            <Link key={item._id} to={`/case-studies/${item.index}`}>
              <span className="underline underline-offset-8 decoration-1">
                {user ? '🔓' : '🔒'} {item.hero.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
