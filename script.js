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


Full Details and Explanation:

React Component ProductValidation:
Defines a functional React component named ProductValidation.
State Management (Using useState Hook):
productName: Stores the value of the product name input.
quantity: Stores the value of the quantity input.
productNameError: Stores the error message for the product name input.
quantityError: Stores the error message for the quantity input.
productNameTouched: Tracks whether the product name input has been blurred.
quantityTouched: Tracks whether the quantity input has been blurred.
isFormValid Function:
Checks if the form is valid (both inputs have values and have been touched).
Event Handlers:
handleProductNameChange: Updates the productName state and validates the input if it has been touched.
handleQuantityChange: Updates the quantity state and validates the input if it has been touched.
handleProductNameBlur: Sets the productNameTouched state to true and validates the input.
handleQuantityBlur: Sets the quantityTouched state to true and validates the input.
JSX (Component Structure):
Returns the JSX that represents the form.
Includes input fields for product name and quantity.
Includes error message elements that are conditionally rendered based on the error state.
Includes a submit button that is disabled if the form is not valid.
data-testid Attributes:
Includes the required data-testid attributes for testing:
name-input
quantity-input
submit-button
name-input-error
quantity-input-error
Conditional Rendering of Error Messages:
Error message paragraphs (<p>) are only rendered if the corresponding error state variable (productNameError or quantityError) has a value.
Submit Button disabled Attribute:
The submit button's disabled attribute is bound to the result of !isFormValid(), ensuring that it is disabled when the form is not valid.
Rendering the Component:
ReactDOM.render(<ProductValidation />, document.getElementById("root")); renders the ProductValidation component into the div element with the ID "root" in the HTML.





