# -gps-web-app
Markdown

# Product Validation Form

This project is a simple React application that implements a product validation form. It demonstrates basic form handling, input validation, and conditional rendering of error messages.

## Features

-   Product name input field with validation.
-   Quantity input field with validation.
-   Error messages displayed when inputs are invalid.
-   Submit button that is disabled until the form is valid.
-   Uses `data-testid` attributes for testing.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Open `index.html` in your browser:**

    Simply open the `index.html` file in your preferred web browser.

## Project Structure

product-validation-form/
├── index.html
├── style.css
└── script.js
└── README.md


-   `index.html`: The main HTML file that sets up the React environment.
-   `style.css`: Contains the CSS styles for the form.
-   `script.js`: Contains the React component code.
-   `README.md`: This file, providing information about the project.

## Usage

1.  Open the `index.html` file in your browser.
2.  Enter a product name and quantity.
3.  If you blur an input field without entering a value, an error message will appear.
4.  The submit button will be enabled when both input fields have values and have been "touched" (blurred).

## `data-testid` Attributes

The following `data-testid` attributes are used for testing:

-   `name-input`: The product name input field.
-   `quantity-input`: The quantity input field.
-   `submit-button`: The submit button.
-   `name-input-error`: The container for the product name error message.
-   `quantity-input-error`: The container for the quantity error message.

## Note

-   The CSS styling is for visual purposes only and is not tested.
-   The provided `data-testid` attributes, classes, and IDs should not be changed.
-   This project uses React from a CDN and Babel standalone for simplicity. In a production environment, you would typically use a build tool like Webpack or Parcel.

## Author

Your Name (or your GitHub username)
Explanation of Sections:

# Product Validation Form:
The title of the project.
## Features:
Lists the key features of the application.
## Getting Started:
Provides instructions on how to clone and run the project.
## Project Structure:
Describes the file structure of the project.
## Usage:
Explains how to use the application.
## data-testid Attributes:
Lists the required data-testid attributes and their purposes.
## Note:
Provides important notes about the project, such as the fact that CSS is not tested and that data-testid attributes should not be changed.
## Author:
S.VINOD KUMAR
