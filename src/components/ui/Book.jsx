import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book_img--wrapper"></figure>
        <img src={book.url} alt="" className="book__img" />
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price 
      orignalPrice={book.orignalPrice}
      salePrice={book.salePrice}
      />
    </div>
  );
};

export default Book;
