type Props = { image: string; text: string }

export default function Detail({ image, text }: Props) {
  return (
    <div className="max-w-5xl mx-auto mb-28">
      <div className="drop-shadow-sm">
        <img src={image} alt="" className="w-full rounded-2xl" />
      </div>
      <p className="text-xl text-center py-4 drop-shadow-sm">{text}</p>
    </div>
  )
}
