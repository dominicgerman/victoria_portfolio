type Props = {
  title: string
  role: {
    title: string
    dates: string
  }
  description: string
  img: string
}

export default function Hero({ title, role, description, img }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-16 my-20">
      <div className="flex flex-col gap-10 justify-center">
        <strong className="text-xl">
          {role.title} | {role.dates}
        </strong>
        <h2 className="text-5xl">{title}</h2>
        <p className="text-2xl">{description}</p>
      </div>
      <div className="justify-self-center">
        <img
          src={`http://localhost:1337${img}`}
          alt="pic"
          className="rounded-2xl max-h-128"
        />
      </div>
    </div>
  )
}
