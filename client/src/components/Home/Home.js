import { HomeStyled } from "./HomeStyled";

const Home = () => {
  return (
    <HomeStyled>
      <div className="home-container">
        <div className="home-greeting article-container">
          <h2>Welcome to Middle-earth</h2>
          <p>
            Middle-earth is the fictional setting of much of the English writer
            J. R. R. Tolkien's fantasy. The term is equivalent to the Miðgarðr
            of Norse mythology and Middangeard in Old English works, including
            Beowulf. Middle-earth is the human-inhabited world, that is, the
            central continent of the Earth, in Tolkien's imagined mythological
            past. Tolkien's most widely read works, The Hobbit and The Lord of
            the Rings, are set entirely in Middle-earth. "Middle-earth" has also
            become a short-hand term for Tolkien's legendarium, his large body
            of fantasy writings, and for the entirety of his fictional world.
          </p>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
