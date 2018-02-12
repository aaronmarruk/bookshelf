import styled from 'styled-components';

export const BookList = styled.div`
  display: grid;
  margin: 0 auto;

  margin: 0 auto;
  margin-top: 70px;
  max-width: 1100px;
  background-color: #fff;
  color: #444;
  grid-gap: 2.5%;
  grid-row-gap: 72px;
  align-items: baseline;
  display: grid;
  grid-template-columns: repeat(2,1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(3,1fr);
  }
  @media (min-width: 840px) {
    grid-template-columns: repeat(4,1fr);
  }
  @media (min-width: 1020px) {
    grid-template-columns: repeat(5,1fr);
  }

  grid-row-gap: 72px;
`;


export const BookListTitle = styled.span`

  font-size: 12px;
  margin: 0;
  font-weight: 700;
`;

export const BookListItem = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  &:hover ${BookListTitle} {
    color: blue;
  }
`;

export const BookListImage = styled.img`
  max-width: 100%;
  vertical-align: baseline;
  box-shadow: 8px 4px 16px 0px rgba(0,0,0,0.08);
  border: 1px solid #c7c7c7;
  margin-bottom: 4px;
`;

export const BookListItemLink = styled.a`
  position: relative;
  font-size: 12px;
  display: block;
  height: 100%;
`;

export const BookListAuthor = styled.span`
  color: #888;
  font-size: 12px;
  margin: 0;
  font-weight: 400;
  font-style: italic;
`;

export default BookList;
