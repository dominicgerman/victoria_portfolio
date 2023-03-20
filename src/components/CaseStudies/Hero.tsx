import pic from '../../assets/notebook.jpg'

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
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <span>
          {role.title} | {role.dates}
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <img src={pic} alt="pic" />
      </div>
    </div>
  )
}
