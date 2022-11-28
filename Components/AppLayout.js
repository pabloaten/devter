import Link from "next/link"


const AppLayout = ({children}) => {
  return (
    <div >
        <Link href="/tarjetas">Clanero</Link>
        {children}</div>
  )
}

export default AppLayout