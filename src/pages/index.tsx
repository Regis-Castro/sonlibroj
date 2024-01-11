import Navbar from '~/components/Navbar'
import RecentlyAdded from '~/components/RecentlyAdded'
import Footer from '~/components/Footer'
import { Books } from '~/utils/data'



export default function Home() {
  return (
    <>
      <Navbar/>
      <RecentlyAdded book={Books[Books.length-1]}/>
      <Footer/>
    </>
  )
}