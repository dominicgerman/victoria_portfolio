import { Link } from 'react-router-dom'
import insta from '../assets/insta.png'
import dribble from '../assets/dribble.png'
import linkedin from '../assets/linkedin.png'
import db from '../assets/db.json'

export default function About() {
  const { content, skills, clients, contact } = db.about
  return (
    <>
      <div className="flex flex-col gap-4 my-24">
        {content.map((el) => (
          <p key={el.id} className="text-lg max-w-xl">
            {el.text}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h3 className="text-4xl mb-8">{skills.heading}</h3>
          <ul className="flex flex-col gap-4">
            {skills.items.map((item) => (
              <li key={item} className="text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-4xl mb-8">{clients.heading}</h3>
          <ul className="flex flex-col gap-4">
            {clients.items.map((item) => (
              <li key={item} className="text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-4xl mb-8">{contact.heading}</h3>
          <p className="text-2xl mb-8">
            {contact.content}
            <Link
              to="#"
              className="underline underline-offset-2 text-2xl"
              onClick={(e) => {
                window.location.href = `${contact.link.url}`
                e.preventDefault()
              }}
            >
              {' '}
              {contact.link.text}
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
