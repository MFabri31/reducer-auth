import { Link, useParams } from "react-router-dom";

const Product = ({ props }) => {
  return (
    <div style={{ width: "18rem" }}>
      <div>
        <h1>Product Title</h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link className="btn btn-outline-dark" to="/products">
          Go products
        </Link>
      </div>
    </div>
  );
};

export default Product;
