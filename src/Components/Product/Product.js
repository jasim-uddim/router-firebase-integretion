import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Product = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h1>knock knock who is?</h1>
      <h2>{user ? user.displayName : "voot"}</h2>
    </div>
  );
};

export default Product;
