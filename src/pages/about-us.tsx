import { Card } from '~/components/LibraryFilters'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import Link from 'next/link'
import { Wrapper } from '~/styles/styles'

const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <Wrapper>
      <Card>
        <h2>Retpaĝo</h2>
        <p>Sonlibroj estas retpaĝo kie oni produktas kaj kolektas registraĵojn de voĉlegitaj libroj en esperanto. Nia projekto celas helpi homojn lerni esperanton ĉar ni konsideras, ke aŭskultado kaj legado de libroj havas gravan rolon tiucele.</p>
        
        <h2>Teamo</h2>
        <p>Rangel: financoj, voĉregistrado kaj muntado, retpoŝtadreso</p>
        <p>Regis: programado, voĉregistrado.</p>
        <p>Suelem: dezajno, uzantsperto, prilaboro de PDF-dosieroj, sociaj retoj</p>

        <h2>Kunlaboro</h2>
        <p>Se vi volas kunlabori sendante viajn sonlibrojn, bonvolu skribi al <Link href="mailto:sonlibroj@gmail.com">sonlibroj@gmail.com</Link></p>
      </Card> 
      </Wrapper>
      <Footer/>  
    </>
  )
}

export default AboutUs