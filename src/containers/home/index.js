import React from 'react'
import styled from 'styled-components';
import LayoutWrapper from '../../components/layoutWrapper';
import {
  Header,
  HeaderTitle,
  HeaderSubTitle,
} from '../../components/header';
import {
  BookList,
  BookListTitle,
  BookListItem,
  BookListImage,
  BookListItemLink,
  BookListAuthor,
} from '../../components/bookList'

const Home = () => (
  <LayoutWrapper>
    <Header>
      <HeaderTitle>
        Bookshelf
      </HeaderTitle>
      <HeaderSubTitle>
        A selection of titles that have shaped the way I think about front-end design and development.
      </HeaderSubTitle>
    </Header>
    <BookList>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/51Vo-3VoaiL.jpg" />
          <BookListTitle>
            The nature of code
          </BookListTitle>
          <br />
          <BookListAuthor>
            Dainel Shiffman
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/51v4RHM5s8L._SX358_BO1,204,203,200_.jpg" />
          <BookListTitle>
            Generative Design: Visualize, Program, and Create with Processing
          </BookListTitle>
          <br />
          <BookListAuthor>
            Hartmut Bohnacker
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/81qJb1LmkBL.jpg" />
          <BookListTitle>
            Lean UX: Designing Great Products with Agile Teams
          </BookListTitle>
          <br />
          <BookListAuthor>
            Jeff Gothelf, Josh Seiden
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/61C%2BaVo1%2BeL.jpg" />
          <BookListTitle>
            The Elements of Typographic Style: Version 4.0
          </BookListTitle>
          <br />
          <BookListAuthor>
            Bringhurst, Robert
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780961392147/the-visual-display-of-quantitative-information.jpg" />
          <BookListTitle>
            The Visual Display of Quantitative Information
          </BookListTitle>
          <br />
          <BookListAuthor>
            Tufte, Edward R.
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="http://rosenfeldmedia.com/wp-content/uploads/2015/06/designing-interface-animation-front-cover.jpg" />
          <BookListTitle>
            Designing Interface Animation: Improving the User Experience Through Animation
          </BookListTitle>
          <br />
          <BookListAuthor>
            Val Head
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images.gr-assets.com/books/1451409702l/28383248.jpg" />
          <BookListTitle>
            Deep Work: Rules for Focused Success in a Distracted World
          </BookListTitle>
          <br />
          <BookListAuthor>
            Cal Newport
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://www.penguin.co.uk/content/dam/catalogue/pim/editions/459/9780141035819/cover.jpg" />
          <BookListTitle>
            Design as Art
          </BookListTitle>
          <br />
          <BookListAuthor>
            Bruno Munari
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="http://www.ebook3000.com/upimg/allimg/150801/0206060.jpg" />
          <BookListTitle>
            CSS Secrets: Better Solutions to Everyday Web Design Problems
          </BookListTitle>
          <br />
          <BookListAuthor>
            Lea Verou
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://i.thenile.io/r1000/9781491926789.jpg" />
          <BookListTitle>
            Frontend Architecture for Design Systems: A Modern Blueprint for Scalable and Sustainable Websites
          </BookListTitle>
          <br />
          <BookListAuthor>
            Micah Godbolt
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/41BKx1AxQWL.jpg" />
          <BookListTitle>
            The Pragmatic Programmer
          </BookListTitle>
          <br />
          <BookListAuthor>
            Andrew Hunt
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/41qRRoovEWL._SX331_BO1,204,203,200_.jpg" />
          <BookListTitle>
            The Design of Everyday Things, revised and expanded edition
          </BookListTitle>
          <br />
          <BookListAuthor>
            Norman, Donald A.
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/41Y-lU6upmL._SX328_BO1,204,203,200_.jpg" />
          <BookListTitle>
            Emotional Design: Why We Love (or Hate) Everyday Things
          </BookListTitle>
          <br />
          <BookListAuthor>
            Norman, Donald A.
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://images-na.ssl-images-amazon.com/images/I/81tbr94V4IL.jpg" />
          <BookListTitle>
            Unfolding the Napkin: The Hands-On Method for Solving Complex Problems with Simple Pictures
          </BookListTitle>
          <br />
          <BookListAuthor>
            Roam, Dan
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
      <BookListItem>
        <BookListItemLink>
          <BookListImage src="https://mitpress.mit.edu/sites/default/files/9780262134729_0.jpg" />
          <BookListTitle>
            The Laws of Simplicity (Simplicity: Design, Technology, Business, Life)
          </BookListTitle>
          <br />
          <BookListAuthor>
            Maeda, John
          </BookListAuthor>
        </BookListItemLink>
      </BookListItem>
    </BookList>
    <Header>
      <HeaderTitle>
      </HeaderTitle>
      <HeaderSubTitle>
        Fin.
      </HeaderSubTitle>
    </Header>
  </LayoutWrapper>
);

export default Home;
