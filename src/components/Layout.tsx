type Props = {
  children: any
}

export default function Layout({ children }: Props) {
  return <div className="mx-16 my-10 font-serif">{children}</div>
}
