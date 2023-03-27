import { Link, useLocation } from 'react-router-dom'
import Hero from './Hero'
import Detail from './Details'
import Pagination from '../Pagination'
import Context from './Context'
import { urlFor } from '../../hooks/sanity'
import getCaseStudy from '../../hooks/getCaseStudy'

export default function CaseStudy() {
  const { pathname } = useLocation()
  const { context, details, hero, index, link, otherDetails, outcomes } =
    getCaseStudy(pathname).caseStudy
  const { length } = getCaseStudy(pathname)

  return (
    <>
      <Hero hero={hero} />
      <Context
        context={context}
        outcomes={outcomes}
        otherDetails={otherDetails}
      />

      <ul>
        {details?.map((item) => (
          <Detail
            key={item._key}
            imageUrl={urlFor(item.asset._ref).toString()}
            text={item.caption}
          ></Detail>
        ))}
      </ul>

      <p className="text-center text-xl">
        Check out the{' '}
        <Link to={link?.url} target="_blank">
          <span className="underline underline-offset-2">{link?.text}</span>
        </Link>{' '}
        for yourself.
      </p>

      <Pagination length={length} id={index} />
    </>
  )
}
