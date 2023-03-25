type Props = { imageUrl: string; text: string }

export default function Detail({ imageUrl, text }: Props) {
  return (
    <div className="max-w-5xl mx-auto mb-28">
      <div className="drop-shadow-sm">
        <img src={imageUrl} alt="" className="w-full rounded-2xl" />
      </div>
      <p className="text-xl text-center py-4 drop-shadow-sm font-accent">
        {text}
      </p>
    </div>
  )
}
