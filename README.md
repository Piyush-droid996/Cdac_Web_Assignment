# Cdac_Web_Assignment
# Responsive Login Page

## Overview
This project is a responsive login page built using **HTML**, **CSS**, and **JavaScript**. It integrates with an open login API for authentication and includes form validations, mobile responsiveness, and additional user-friendly features.

### Icons:
- ![HTML5 Badge](https://img.shields.io/badge/HTML5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3 Badge](https://img.shields.io/badge/CSS3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript Badge](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black)

## Project Explanation
This project demonstrates a modern and responsive login form that follows good design principles. It includes user input validation and interacts with an open API for login. The form layout adapts to different screen sizes, making it functional across both web and mobile devices.

### Project Breakdown:
1. **HTML (Structure)**: 
    - Defines the form, input fields (email/username and password), and submit button.
    - Additional features like "Remember Me" checkbox and "Show/Hide" password toggle are also structured here.
  
2. **CSS (Styling)**: 
    - Responsible for the visual layout, including the form’s alignment, button design, font styles, and responsiveness.
    - Media queries are used to adjust the layout for various screen sizes.
    - Flexbox and other CSS techniques ensure a responsive, mobile-friendly design.

3. **JavaScript (Functionality)**:
    - **Client-Side Validation**: JavaScript ensures that the form is validated before submission:
      - Email field checks for a valid format.
      - Password field checks that it meets the required criteria (e.g., length).
    - **API Integration**: Sends a POST request to an open login API and handles the response to either display a success or error message.
    - **Bonus Features**:
      - Show/Hide password functionality implemented for better user experience.
      - A loading spinner displays while waiting for the API response.

## Features
- **Responsive Design**: The form works seamlessly on both web and mobile screens.
- **Form Fields**:
  - Username/Email field with validation.
  - Password field with validation and show/hide functionality.
- **Client-Side Validation**:
  - Email field checks for empty input and correct format.
  The password field requires at least 6 characters.
- **API Integration**:
  - A POST request is sent to an open API with the username/email and password.
  - Based on the response, appropriate messages (success or error) are shown.
- **Additional Features**:
  - "Remember Me" checkbox.
  - Loading spinner to indicate API call is in progress.

## Demo
You can view the live demo of this project here: [Live Demo](https://piyush-droid996.github.io/Cdac_Web_Assignment/)

## Installation
To run this project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Piyush-droid996/Cdac_Web_Assignment.git
Navigate to the Project Directory:
cd login-page
Open index.html in your browser: Simply open the index.html file in a web browser to view the login page.
Usage
Enter a valid email/username and password.
Click "Submit".
If valid, the form sends a POST request to:

https://jsonplaceholder.typicode.com/posts
A success or error message is displayed depending on the API response.
Technologies Used
HTML5: For structuring the page content.
CSS3: For styling the form and making it responsive across devices.
JavaScript: For form validation, API integration, and user interactions (show/hide password, loading spinner).
Responsive Design
The page layout is made responsive using media queries and flexbox.
Tested across multiple devices to ensure a smooth experience on mobile and desktop.
