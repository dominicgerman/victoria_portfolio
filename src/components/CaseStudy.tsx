import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Hero from './CaseStudies/Hero'
import Description from './CaseStudies/Context'
import Detail from './CaseStudies/Detail'
import Pagination from './Pagination'
import Context from './CaseStudies/Context'

export default function CaseStudy() {
  const { pathname } = useLocation()

  const id = Number(pathname.at(-1))

  const { isLoading, data } = useQuery('case-studies', () => {
    return axios.get(
      `http://localhost:1337/api/case-studies/${id}?populate=deep`
    )
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const {
    Hero: hero,
    Details: details,
    Link: link,
    Context: context,
  } = data?.data.data.attributes

  return (
    <>
      <Hero
        title={hero.Title}
        role={hero.Role}
        description={hero.Description}
        img={hero.image.data.attributes.formats.large.url}
      />
      <Context context={context} />
      <ul>
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
      <Pagination length={length} id={id} />
    </>
  )
}
