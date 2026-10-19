# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio web application developed using HTML, CSS, and JavaScript.

The application contains four main content sections:

1. About
2. Skills
3. Projects
4. Contact

The website is designed to provide a simple and clear presentation of personal information, technical skills, projects, and contact options.

## 2. Project Architecture

The project separates structure, presentation, and behavior into different files.

- `index.html` contains the structure and content.
- `css/styles.css` contains the visual design and responsive layout.
- `js/script.js` contains interactive behavior.
- `docs/` contains project documentation.

This separation makes the project easier to read, maintain, and extend.

## 3. HTML Structure

The website uses semantic HTML elements including:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<form>`
- `<footer>`

Semantic HTML provides a clearer document structure and helps improve accessibility and maintainability.

The navigation links use section IDs to allow users to move directly to different areas of the page.

The Projects section contains two project cards. Each project includes a title, short description, technologies used, and an inline SVG illustration. The SVG illustrations provide lightweight visual representations of the projects without requiring external image files.

## 4. CSS Design

The stylesheet provides the visual design for the website.

### Flexbox

Flexbox is used for components such as the navigation bar, project illustrations, and content alignment.

### CSS Grid

CSS Grid is used for the skills and projects layouts.

### Responsive Design

Media queries adjust the layout at different screen widths.

The main breakpoints are:

- Above 900px: desktop layout
- 601px to 900px: tablet-oriented layout
- 600px and below: mobile layout

On desktop screens, the skills section displays multiple columns and the projects are displayed side by side.

On tablet screens, the skills layout changes to two columns and the projects change to a single-column layout.

On mobile screens, the skills and projects use a single-column layout. Navigation and spacing are also adjusted to fit smaller screens.

### Project Illustrations

The project cards use inline SVG graphics for their visual elements. CSS controls the size, spacing, background, and responsive behavior of these illustrations.

Using SVG keeps the graphics lightweight and allows them to scale to different screen sizes without losing quality.

## 5. JavaScript Functionality

### Theme Toggle

The theme toggle allows users to switch between light and dark modes.

JavaScript adds or removes the `dark-mode` class from the document body. CSS rules associated with this class change the website colors.

### Theme Persistence

The selected theme is stored using the browser's `localStorage`.

When the page loads, JavaScript checks for a previously saved theme and applies it when appropriate.

### Contact Form

The contact form contains:

- Name
- Email
- Message

Because the assignment does not require a backend, JavaScript prevents the form from performing a real server submission. Instead, a confirmation message is displayed to the user after valid form submission.

The form fields also use HTML validation through attributes such as `required` and the `email` input type.

### Dynamic Copyright Year

JavaScript uses the `Date` object to retrieve the current year and automatically display it in the footer.

## 6. Accessibility

The website includes several accessibility considerations:

- Semantic HTML elements
- Form labels connected to their input fields
- Clear heading hierarchy
- Keyboard-focus styles
- An accessible label for the theme toggle
- Accessible descriptions for project illustrations
- A status region for contact-form feedback

These features help make the interface easier to understand and navigate.

## 7. Performance

The project uses plain HTML, CSS, and JavaScript without large external frameworks or libraries.

The project illustrations use inline SVG graphics, which are lightweight and do not require additional external image requests.

This keeps the application lightweight and reduces unnecessary dependencies.

## 8. Browser Compatibility

The project uses standard HTML5, CSS, SVG, and JavaScript features supported by modern web browsers.

The responsive layout is designed for desktop, tablet, and mobile screen sizes.

The website should be tested using browser resizing or browser developer tools to confirm that the layout and interactive features work correctly at different screen sizes.

## 9. Future Development

This portfolio provides a foundation that can be expanded in future assignments.

Possible future additions include:

- Additional projects
- Screenshots of completed projects
- Live project links
- GitHub repository links
- Additional skills
- Animations
- A deployed version of the portfolio

# Assignment 2 Technical Documentation

## Assignment 2 Overview

Assignment 2 improves the Assignment 1 portfolio by adding interactive features using JavaScript. The original sections, design, skills, projects, and contact form were preserved and enhanced.

## New Interactive Features

### Project Filtering

Each project has a category such as `web` or `java`.

The filter buttons allow users to display:

- All projects
- Web projects
- Java projects

JavaScript checks each project category and hides projects that do not match the selected filter.

### Live Project Search

A search field allows users to search for projects while typing.

The search compares the entered text with each project title. Matching projects remain visible, while nonmatching projects are hidden.

If no project matches the search, the website displays:

```text
No projects found. Try another search.