import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <div className="justify-content-center my-5">
        <div md={4}>
          <div style={{ width: "18rem" }}>
            <div>
              <h1>Product Title</h1>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link className="btn btn-outline-dark" to="/product">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
