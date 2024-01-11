import React from 'react';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import LibraryFilters from '~/components/LibraryFilters';
import BookCards from '~/components/BookCards';
import { Card } from '~/components/LibraryFilters';
import { BookProps } from '~/utils/data';
 
const Library = () => {
  return (
    <>
      <Navbar />
      <LibraryFilters >
        {(filteredBooks: BookProps[]) => (
          <Card>
            <div className="bookcards-grid">
              {filteredBooks.map((book, index) => (
                <BookCards key={index} book={book} />
                ))}
            </div>
          </Card>
        )}
      </LibraryFilters>
      <Footer />
    </>
  );
};

export default Library;
