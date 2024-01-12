import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '~/components/Navbar';
import { Main } from '~/components/RecentlyAdded';
import { useRouter } from 'next/router';
import { Books, BookProps } from '~/utils/data';
import Footer from '~/components/Footer';

const Book = () => {
  const { query } = useRouter();
  const bookId = query.id as string;
  const [book, setBook] = useState<BookProps>();

  useEffect(() => {
    if (bookId) {
      const currentBook = Books.find((b) => b.id === parseInt(bookId));
      setBook(currentBook);
    }
  }, [bookId]);

  return (
    <>
      <Navbar />
      <Main>
        <div className="container">
          <h2>{book?.title}</h2>
          <div>
            <div className="content">
              <div>
                <img src={book?.urlCover} alt={book?.alt} />
                <div className="download">
                  <a href={book?.urlDownload} download>
                    Elŝuti libron
                  </a>
                  <a href={book?.urlDownload} download>
                    <img className="icon" src="/icons/download.svg" alt="Butono por elŝuti la libron" />
                  </a>
                </div>
              </div>
              <div>
                <h3>{book?.title}</h3>
                <p>{book?.description}</p>

                <audio preload="metadata" src={book?.urlAudio} controls/>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Book;
