import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Hero from './Hero'
import Detail from './Details'
import Pagination from '../Pagination'
import Context from './Context'
import CaseStudyContext from '../utils/CaseStudyContext'

export default function CaseStudy() {
  // const { pathname } = useLocation()

  const data = useContext(CaseStudyContext)

  return (
    <>
      {
        /* <Hero
        title={hero.Title}
        role={hero.Role}
        description={hero.Description}
        img={hero.image.data.attributes.formats.large.url}
      /> */
        <Context context={data[0].context} />
        /* <ul>
        {details.map((item: { id: number; text: string; image: any }) => (
          <Detail
            key={item.id}
            image={item.image.data.attributes.formats.large.url}
            text={item.text}
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
      <Pagination length={length} id={id} /> */
      }
    </>
  )
}
