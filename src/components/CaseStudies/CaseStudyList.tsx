import { useContext } from 'react'
import CaseStudyContext from '../utils/CaseStudyContext'
import { Link, useLocation } from 'react-router-dom'

type Props = {}

export default function CaseStudyList({ isLoading }: any) {
  const { pathname } = useLocation()
  const data = useContext(CaseStudyContext)

  const style = `grid grid-cols-2 text-4xl max-w-4xl transition-opacity duration-1000 ${
    !isLoading ? 'opacity-100' : 'opacity-0'
  } ${pathname === '/case-studies' ? 'mt-36 mx-8' : ''}`
  return (
    <>
      <div className={style}>
        <h3>Work</h3>
        <div className="flex flex-col gap-7">
          {data?.map((item: any) => (
            <Link key={item._id} to={`/case-studies/${item.index}`}>
              <span>
                {pathname === '/case-studies' ? '→' : '🔒'} {item.hero.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
