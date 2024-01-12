import theme from '~/styles/theme'
import styled from "styled-components"
import Link from 'next/link'
import {BookProps} from '~/utils/data'

type recentlyAdded = {
  book:BookProps;
}

const RecentlyAdded = ({book}:recentlyAdded) => {
  return (
      <Main>
        <div className="container">
        <h2>Laste aldonita</h2>  
          <div>
            <div className="content">
              <img src={book.urlCover} alt={book.alt} />
              <div>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <Link href={`/books/${book.id}/${book.slug}`}>
                  <Button>Aŭskultu nun</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Main>
  )
}

export const Main = styled.main`
  color: ${theme.colors.primary};
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 245px);

  @media (max-width: 600px) {
    min-height: calc(100vh - 165px);
  }
  
  .container {
    margin: 0 auto;
}

  .container > h2 {
    font-size: clamp(2.2rem, 4vw, 3rem); 
    margin: 120px 0 30px;
    text-align: center;

    @media (max-width: 640px) {
    margin: 20px 0;
  }
}
  
  .container > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .content {
    text-align: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid grey;
    display: flex;
    flex-wrap: wrap;
    font-size: 2rem;
    justify-content: center;
    gap: 50px;
    padding: 30px;
    width: 40vw;

    @media (max-width: 1440px) {
        width: 60vw;
    }

    @media (max-height: 1024px) {
      gap: 10px;
    }

    @media (max-width: 425px) {
      width: 90vw;
    }
  }

  .content > div {
    width: 600px;

    @media (max-width: 1280px) {
      width: 560px;
    }
  }

  .content > div > h2 {
    margin-bottom: 10px;
    font-size: 2rem;

    @media (max-height: 812px) {
      display: none;
    }
  }

  .content p {
    color: ${theme.colors.paragraph};
    font-size: 1.5rem;
    line-height: 20px;
    width: auto;

    @media (max-height: 568px) {
      display: none;
    }
  }

  .download {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a[download] {
    color: #FFFFFF;
    font-size: 1.7rem;
  }

  audio {
    margin-top: 20px;
  }

  img {
    cursor: pointer;
    width: 200px;

    @media (max-height: 786px) {
      width: 150px;
    }
  }

  .icon {
    width: 30px;
  }
`

export const Button = styled.button`
    background-color: ${theme.colors.secondary};
    border: none;
    border-radius: 37px;
    color: ${theme.colors.primary};
    cursor: pointer;
    font-size: 1.6rem;
    height: 45px;
    margin-top: 20px;
    padding: 10px;
    width: 135px;

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.background};
  }
`

export default RecentlyAdded