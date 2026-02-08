import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";
import { useEffect, useState } from "react";

const Book = ({ book }) => {
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      setTimeout(() => {
        setImg(image);
        setIsLoading(false);
      }, 300);
    };
  }, [book.url]);

  return (
    <div className="book">
      {isLoading ? (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book_img--wrapper"></figure>
            <img src={img.src} alt="" className="book__img" />
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />

          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      )}
    </div>
  );
};

export default Book;