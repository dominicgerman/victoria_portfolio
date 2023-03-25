type Props = {
  children: any
}

export default function Layout({ children }: Props) {
  return (
    <div className="mx-6 md:mx-16 my-6 md:my-10 font-body leading-snug bg-main">
      {children}
    </div>
  )
}
