import React, { useState, useEffect, ReactNode } from 'react';
import theme from '~/styles/theme';
import styled from 'styled-components';
import { GeneralFilters, CategoryFilters } from '~/utils/data';
import { Books, BookProps } from '~/utils/data';
import { handleSortAToZ, handleSortZToA, handleSortNewDate, handleSortOldDate } from '~/utils/sorts';
import { Wrapper } from '~/styles/styles';

type LibraryFiltersProps = {
  children: (filteredBooks: BookProps[]) => ReactNode;
};

function LibraryFilters({ children }: LibraryFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredBooks, setFilteredBooks] = useState<BookProps[]>(Books);
  const [ordering, setOrdering] = useState<string | null>(null)

  const handleLabelClick = (filter: string) => {
    setSelectedCategory((prevCategory) => {
      return prevCategory === filter ? null : filter;
    });
  };

  const handleLabelOrderClick = (filter: string) => {
    setOrdering((prevCategory) => {
      return prevCategory === filter ? null : filter;
    });
  };

  useEffect(() => {
    let updatedFilteredBooks = Books.filter((book) =>
      selectedCategory ? book.categories.includes(selectedCategory) : true
    ).sort((current, next) => {
        if(ordering === "a-z") {
          return handleSortAToZ(current, next)
        }

        if(ordering === "z-a") {
          return handleSortZToA(current, next)
        }

        if(ordering === "plej novaj") {
          return handleSortNewDate(current, next)
        }

        if(ordering === "plej malnovaj") {
          return handleSortOldDate(current, next)
        }

        return 0
    })
    
    setFilteredBooks(updatedFilteredBooks);
  }, [selectedCategory, ordering]);
  
  return (
    <Wrapper>
      <Card>
          <div className="filters-grid">
          {GeneralFilters.map((filter, filterIndex) => (
            <div key={filterIndex}>
              <HiddenCheckbox
                type="radio"
                id={filter}
                key={filterIndex}
                value={filter}
                checked={ordering === filter }/>

              <StyledLabel
                htmlFor={filter}
                isChecked={ordering !== null && ordering === filter}
                onClick={() => handleLabelOrderClick(filter)}>
                {filter}
              </StyledLabel>
            </div>
          ))}
          </div>
  
          <div className="filters-grid" >
          {CategoryFilters.map((filter, filterIndex) => (
            <div key={filterIndex}>
              <HiddenCheckbox
                type="radio"
                id={filter}
                key={filterIndex}
                value={filter}
                checked={selectedCategory === filter }

              />
              <StyledLabel
                htmlFor={filter}
                isChecked={selectedCategory !== null && selectedCategory === filter}
                onClick={() => handleLabelClick(filter)}
              >
                {filter}
              </StyledLabel>
            </div>
          ))}
          </div>
      </Card>

      {children(filteredBooks)}
    </Wrapper>
  );
}

export const Card = styled.section`
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  margin: 40px auto;
  width: 69vw;

  @media (max-width: 1024px) {
    width: 95vw;
  }

  h2 {
    font-size: 2rem;
    margin: 40px 0 5px;

    @media (max-height: 640px) {
    margin: 20px 0 5px;
  }

    @media (max-width: 320px) {
      margin: 7px auto 0;
    }
}

  p {
    font-size: clamp(1.5rem, 4vw, 1.6rem);
    line-height: 25px;
  }

  b {
    color: ${theme.colors.filter};
  }

  a {
    color: #FFFFFF;
  }

  .filters-grid {
    display: grid;
    grid-template: repeat(2, 25px) / repeat(5, 140px);
    width: 670px;
    margin: auto;

    @media (max-width: 688px) {
      width: 470px;
      grid-template: repeat(2, 25px) / repeat(4, 120px);
      grid-row-gap: 15px;
    }
    
    @media (max-width: 600px) {
      width: 240px;
      grid-column-gap: 30px;
      grid-template: repeat(3, 25px) / repeat(2, 100px);
    }
  }

  .bookcards-grid {
    display: grid;
    flex-wrap: wrap;
    font-size: 1.8rem;
    grid-row-gap: 50px;
    grid-template: repeat(2, auto) / repeat(5, auto);
    margin: 50px auto 80px;

    @media (max-width: 1440px) {
      grid-template: repeat(2, auto) / repeat(3, auto);
    }

    @media (max-width: 688px) {
      grid-template: repeat(2, auto) / repeat(2, auto);
    }

    @media (max-width: 414px) {
      grid-template: repeat(1, auto) / repeat(1, auto);
    }
  }

  img {
    text-align: center;
    width: 80%;
    height: auto;
  }

  .supporters {
    height: auto;

    @media (max-height: 896px) {
      height: 25vh;
    }
  }

  .icon {
    margin-right: 5px;
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledLabel = styled.label<{ isChecked: boolean }>`
  align-items: center;
  border: 1px solid ${(props) => (props.isChecked ?  `${theme.colors.filter}` : `${theme.colors.primary}`)};
  border-radius: 35px;
  color: ${(props) => (props.isChecked ?  `${theme.colors.filter}` : `${theme.colors.primary}`)};
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  height: 30px;
  justify-content: center;
  width: 110px;
`;

export default LibraryFilters;