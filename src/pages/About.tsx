import { Link } from 'react-router-dom'
import insta from '../assets/insta.png'
import dribble from '../assets/dribble.png'
import linkedin from '../assets/linkedin.png'
import { useQuery } from 'react-query'
import { client } from '../components/utils/sanity'

export default function About() {
  const { data, isLoading, isError, error } = useQuery('about', async () => {
    try {
      const response = await client.fetch('*[_type == "about"]')
      return response
    } catch (error) {
      console.error(error)
    }
  })

  if (isLoading) return <h2>Loading</h2>

  // @ts-ignore
  if (isError) return <h2>{error.message}</h2>

  const { content, clients, skills } = data[0]

  return (
    <>
      <div className="flex flex-col gap-4 my-24">
        {content?.map((el: string, i: number) => (
          <p key={i} className="text-lg max-w-xl">
            {el}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h3 className="text-4xl mb-8">Skills</h3>
          <ul className="flex flex-col gap-4">
            {skills.map((item: string) => (
              <li key={item} className="text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-4xl mb-8">Select clients</h3>
          <ul className="flex flex-col gap-4">
            {clients?.map((item: string) => (
              <li key={item} className="text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-4xl mb-8">Say hello</h3>
          <p className="text-2xl mb-8">
            Looking to get in touch? I would love to hear from you, feel free to{' '}
            <Link
              to="#"
              className="underline underline-offset-2 text-2xl"
              onClick={(e) => {
                window.location.href =
                  'mailto:victoriamiagerman@gmail.com?subject=Hello'
                e.preventDefault()
              }}
            >
              get it touch
            </Link>
            .{' '}
          </p>
          <div className="flex gap-4">
            <Link to="https://www.instagram.com/toriamia/">
              <img src={insta} alt="" height={20} width={20} />
            </Link>
            <Link to="https://www.linkedin.com/in/victoriapalacios/">
              {' '}
              <img src={linkedin} alt="" height={20} width={20} />
            </Link>
            <Link to="https://dribbble.com/toriamia">
              <img src={dribble} alt="" height={20} width={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
