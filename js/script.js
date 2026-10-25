// ==================== DARK/LIGHT THEME ====================

// Get the theme toggle button from the HTML.
const themeToggle = document.getElementById("theme-toggle");

// Check whether the user previously selected dark mode.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Change the theme when the button is clicked.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save the selected theme so it remains after refreshing the page.
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});


// ==================== CONTACT FORM ====================

// Get the contact form and the paragraph used for feedback.
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// The assignment does not require a backend, so prevent actual submission
// and display a confirmation message instead.
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");

    formMessage.textContent =
        `Thank you, ${nameInput.value}! Your message has been received.`;

    contactForm.reset();
});


// ==================== CURRENT YEAR ====================

// Automatically display the current year in the footer.
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();

// Project filtering and live search

const assignment2Projects =
    document.querySelectorAll(".project-card");

const assignment2FilterButtons =
    document.querySelectorAll(".filter-button");

const assignment2Search =
    document.getElementById("project-search");

const assignment2Status =
    document.getElementById("project-status");

let assignment2SelectedFilter = "all";

function filterAssignment2Projects() {
    const searchText =
        assignment2Search.value.toLowerCase().trim();

    let visibleProjects = 0;

    assignment2Projects.forEach(function (project) {
        const category = project.dataset.category;
        const title = project.dataset.title;

        const categoryMatches =
            assignment2SelectedFilter === "all" ||
            category === assignment2SelectedFilter;

        const searchMatches =
            title.includes(searchText);

        if (categoryMatches && searchMatches) {
            project.classList.remove("is-hidden");
            visibleProjects++;
        } else {
            project.classList.add("is-hidden");
        }
    });

    if (visibleProjects === 0) {
        assignment2Status.textContent =
            "No projects found. Try another search.";
    } else {
        assignment2Status.textContent =
            visibleProjects + " project(s) displayed.";
    }
}

assignment2FilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        assignment2SelectedFilter =
            button.dataset.filter;

        assignment2FilterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        filterAssignment2Projects();
    });
});

assignment2Search.addEventListener(
    "input",
    filterAssignment2Projects
);

filterAssignment2Projects();


// Expandable project details

const assignment2DetailsButtons =
    document.querySelectorAll(".details-button");

assignment2DetailsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;
        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        button.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        details.hidden = isExpanded;

        button.textContent =
            isExpanded ? "View details" : "Hide details";
    });
});

// assignment2
// Improved contact form validation

// Contact form feedback and character counter

const assignment2Form =
    document.getElementById("contact-form");

const assignment2Name =
    document.getElementById("name");

const assignment2Email =
    document.getElementById("email");

const assignment2Message =
    document.getElementById("message");

const assignment2FormMessage =
    document.getElementById("form-message");

const assignment2MessageCounter =
    document.getElementById("message-counter");

const assignment2MessageFeedback =
    document.getElementById("message-feedback");

assignment2Message.addEventListener("input", function () {
    const characterCount =
        assignment2Message.value.length;

    assignment2MessageCounter.textContent =
        characterCount + " / 500 characters";

    if (characterCount === 0) {
        assignment2MessageFeedback.textContent =
            "Please write a message.";
        assignment2MessageFeedback.className = "error";
    } else if (characterCount < 10) {
        assignment2MessageFeedback.textContent =
            "Your message should contain at least 10 characters.";
        assignment2MessageFeedback.className = "error";
    } else {
        assignment2MessageFeedback.textContent =
            "Your message length is acceptable.";
        assignment2MessageFeedback.className = "success";
    }
});

assignment2Form.addEventListener("submit", function (event) {
    event.preventDefault();

    assignment2Name.classList.remove("invalid");
    assignment2Email.classList.remove("invalid");
    assignment2Message.classList.remove("invalid");

    const nameValue =
        assignment2Name.value.trim();

    const emailValue =
        assignment2Email.value.trim();

    const messageValue =
        assignment2Message.value.trim();

    const validEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (nameValue === "") {
        assignment2Name.classList.add("invalid");

        assignment2FormMessage.textContent =
            "Please enter your name.";

        assignment2FormMessage.className = "error";

        assignment2Name.focus();
        return;
    }

    if (!validEmail) {
        assignment2Email.classList.add("invalid");

        assignment2FormMessage.textContent =
            "Please enter a valid email address.";

        assignment2FormMessage.className = "error";

        assignment2Email.focus();
        return;
    }

    if (messageValue.length < 10) {
        assignment2Message.classList.add("invalid");

        assignment2FormMessage.textContent =
            "Your message must contain at least 10 characters.";

        assignment2FormMessage.className = "error";

        assignment2Message.focus();
        return;
    }

    assignment2FormMessage.textContent =
        "Thank you, " + nameValue +
        "! Your message has been sent successfully.";

    assignment2FormMessage.className = "success";

    assignment2MessageFeedback.textContent =
        "Your message is ready to send.";

    assignment2MessageFeedback.className = "success";

    assignment2Form.reset();

    assignment2MessageCounter.textContent =
        "0 / 500 characters";
});
