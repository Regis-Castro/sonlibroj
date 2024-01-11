import styled from "styled-components"
import theme from '~/styles/theme'
import { BookProps } from "~/utils/data"
import { Button } from '~/components/RecentlyAdded'
import Link from 'next/link'

type bookCards = {
  book:BookProps;
}

const BookCards = ({book}:bookCards) => {
  return (
        <Bookcard> 
          <img src={book.urlCover} alt={book.alt}/>
          <div>
            <h4>{book.title}</h4>
            <p>{book.date}</p>
            <Link href={`/books/${book.id}/${book.slug}`}><Button>Aŭskultu nun</Button></Link>
           </div>
        </Bookcard>
)}

export const Bookcard = styled.div`
    border: 1px solid ${theme.colors.primary};
    border-radius: 3px;
    margin: auto;
    padding: 20px;
    text-align: center;
    width: 228px;

    p {
      font-size: 1.2rem;
    }
`

export default BookCards