import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Hero from './Hero'
import Detail from './Details'
import Pagination from '../Pagination'
import Context from './Context'
import CaseStudyContext from '../utils/CaseStudyContext'
import { urlFor } from '../utils/sanity'
import { CaseStudyProps } from './CaseStudy.types'

export default function CaseStudy() {
  const { pathname } = useLocation()
  const data = useContext(CaseStudyContext)

  const {
    context,
    details,
    hero,
    index,
    link,
    otherDetails,
    outcomes,
  }: CaseStudyProps = data.filter(
    (el: CaseStudyProps) => el.index.toString() === pathname.slice(-1)
  )[0]

  return (
    <>
      <Hero hero={hero} />
      <Context
        context={context}
        outcomes={outcomes}
        otherDetails={otherDetails}
      />

      <ul>
        {details.map((item) => (
          <Detail
            key={item._key}
            imageUrl={urlFor(item.asset._ref).toString()}
            text={item.caption}
          ></Detail>
        ))}
      </ul>

      <p className="text-center text-xl">
        Check out the{' '}
        <Link to={link.url}>
          <span className="underline underline-offset-2">{link.text}</span>
        </Link>{' '}
        for yourself.
      </p>

      <Pagination length={data.length} id={index} />
    </>
  )
}
