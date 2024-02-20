import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Z. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beatful Downtown Foo city, Z. Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public_addr">
          Z. Repairs <br />
          777 Foo Drive <br />
          Foo City, CA 12345 <br />
          <a href="tel:+9591234567">(959) 123-4567</a>
        </address>
        <br />
        <p>Owner: Zin Moe</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );

  return content;
};

export default Public;
