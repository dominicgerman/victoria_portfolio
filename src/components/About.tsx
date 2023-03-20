import { Link } from 'react-router-dom'

type Props = {}

export default function About({}: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 my-8">
        <p className="text-lg max-w-lg">
          Currently a product designer in the world of fintech, I’m a systems
          thinker who is passionate about people and how they move through the
          world. I enjoy improving digital experiences through research,
          effective communication and mindful execution. I believe in continuous
          learning and creative problem solving - so much so that I recently
          started mentoring at Designlab.{' '}
        </p>
        <p className="text-lg max-w-lg">
          If you’re wondering what I’m all about, I’m obsessed with all things
          art & design, I love biking and running in the summer, and teaching
          our{' '}
          <Link to="https://www.instagram.com/aussieboi_koda/">
            mini aussie
          </Link>
          new tricks. Our favorite pandemic hobby has been growing herbs in our
          community garden, harvesting said herbs, and using them to garnish
          delicious at-home craft cocktails.
        </p>
      </div>
      <div className="flex">
        <div>
          <h3 className="text-4xl mb-8">Skills</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-2xl">Experience design</li>
            <li className="text-2xl">UX Research</li>
            <li className="text-2xl">Information Architecture</li>
            <li className="text-2xl">Data Analytics</li>
            <li className="text-2xl">Prototyping</li>
            <li className="text-2xl">HTML + CSS</li>
            <li className="text-2xl">Brand Identity</li>
          </ul>
        </div>
        <div>
          <h3 className="text-4xl mb-8">Select clients</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-2xl">JP Morgan Chase</li>
            <li className="text-2xl">M1</li>
            <li className="text-2xl">Designlab</li>
            <li className="text-2xl">United Airlines</li>
            <li className="text-2xl">Northern Trust</li>
            <li className="text-2xl">Morningstar</li>
            <li className="text-2xl">Utah Olympic Legacy Foundation</li>
            <li className="text-2xl">Australia Zoo</li>
          </ul>
        </div>
        <div>
          <h3 className="text-4xl mb-8">Say hello</h3>
          <p className="text-2xl">
            Looking to get in touch? I would love to hear from you, feel free to
            <Link
              to="#"
              className="underline underline-offset-2 text-2xl"
              onClick={(e) => {
                window.location.href =
                  'mailto:victoriamiagerman@gmail.com?subject=Hello'
                e.preventDefault()
              }}
            >
              {' '}
              send me a message
            </Link>
            .{' '}
          </p>
        </div>
      </div>
    </>
  )
}
