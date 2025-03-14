function ProductValidation() {
  const [productName, setProductName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [productNameError, setProductNameError] = React.useState("");
  const [quantityError, setQuantityError] = React.useState("");
  const [productNameTouched, setProductNameTouched] = React.useState(false);
  const [quantityTouched, setQuantityTouched] = React.useState(false);

  const isFormValid = () => {
    return productName && quantity && productNameTouched && quantityTouched;
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
    if (productNameTouched) {
      setProductNameError(e.target.value ? "" : "Product name is required");
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    if (quantityTouched) {
      setQuantityError(e.target.value ? "" : "Quantity is required");
    }
  };

  const handleProductNameBlur = () => {
    setProductNameTouched(true);
    setProductNameError(productName ? "" : "Product name is required");
  };

  const handleQuantityBlur = () => {
    setQuantityTouched(true);
    setQuantityError(quantity ? "" : "Quantity is required");
  };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={handleProductNameChange}
              onBlur={handleProductNameBlur}
              data-testid="name-input"
              className={`white large outlined ${
                productNameError ? "error" : ""
              }`}
              placeholder="Product name"
            />
            {productNameError && (
              <p
                className="error-text form-hint"
                data-testid="name-input-error"
              >
                {productNameError}
              </p>
            )}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={handleQuantityChange}
              onBlur={handleQuantityBlur}
              className={`white large outlined ${
                quantityError ? "error" : ""
              }`}
              placeholder="Quantity"
            />
            {quantityError && (
              <p
                className="error-text form-hint"
                data-testid="quantity-input-error"
              >
                {quantityError}
              </p>
            )}
          </label>
          <button
            className="mt-50"
            type="submit"
            data-testid="submit-button"
            disabled={!isFormValid()}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

ReactDOM.render(<ProductValidation />, document.getElementById("root"));
