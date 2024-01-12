import styled from 'styled-components'
import { Card } from '~/components/LibraryFilters'
import Link from 'next/link'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import { Wrapper } from '~/styles/styles'

const Support = () => {
  return (
    <>
      <Navbar/>
      <Wrapper>
      <Card>
        <h2>Kio ĝi estas?</h2>
        <p>Sonlibroj estos longdaŭre aktiva kaj almenaŭ unu libro estos aldonita al la libraro ĉiumonate. </p>
        <p>Se vi taksas nian laboron grava kaj povus subteni nin por daŭrigi la ekziston de ĉi tiu retpaĝo, ni tre ege dankus vin! Por iĝi subtenanto, oni nur bezonas surklaki la ligilon <Link href="https://www.patreon.com/sonlibroj" target="_blank">patreon.com/sonlibroj</Link> kaj krei konton ĉe Patreon. Depende de la monata monsumo ricevita de subtenantoj, eblos al ni ankaŭ plibonigi ĉi tiun retpaĝon estontece.</p>

        <h2>Aboneblecoj monate</h2>
        <SupportOptions>
          <p><b>$1</b> - Vi havos aliron al nia Patreon-fluo.</p>
          <p><b>$5</b> - Vi havos aliron al nia Patreon-fluo kaj via nomo aperos ĉe la malsupra listo de subtenantoj laŭ via permeso.</p>
          <p><b>$10</b> - Vi havos aliron al nia Patreon-fluo, via nomo aperos ĉe la malsupra listo de subtenantoj laŭ via permeso, kaj vi povas elekti la ĝenron de la legota libro.</p>
          <p><b>$30</b> - Vi havos aliron al nia Patreon-fluo, via nomo aperos ĉe la malsupra listo de subtenantoj laŭ via permeso, kaj vi povos elekti legotan libron. Aldone, se vi konsentos, via nomo estos menciita je ĝia PDF-dosiero! &#x1F600;</p>
        </SupportOptions>

        <div className="supporters">
          <h2>Listo de subtenantoj</h2>
          <p>Ankoraŭ ne estas nomoj ĉi tie &#128577;</p>
        </div>
      </Card> 
      </Wrapper>
      <Footer/>  
    </>
  )
}

const SupportOptions = styled.div`
    p:not(:last-child) {
      margin-bottom: 10px;
    }
`

export default Support