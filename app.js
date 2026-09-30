// Get the button and result div
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Add click event to the button
calculateBtn.addEventListener("click", function () {

    // Read values using .value
    const studentName = document.getElementById("studentName").value;
    const marksInput = document.getElementById("marks").value;

    // Check if marks are empty
    if (marksInput === "") {
        result.textContent = "Please enter marks.";
        result.className = "error";
        return;
    }

    // Convert marks to Number
    const marks = Number(marksInput);

    // Check if marks are out of range
    if (marks < 0 || marks > 100) {
        result.textContent = "Please enter marks between 0 and 100.";
        result.className = "error";
        return;
    }

    // Check if student name is empty
    if (studentName.trim() === "") {
        result.textContent = "Please enter the student name.";
        result.className = "error";
        return;
    }

    // Variable for grade
    let grade;

    // Assign grade using if / else if / else
    if (marks >= 85) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Display result using template literal
    result.textContent = `${studentName} scored ${marks} → Grade ${grade}`;

    // Green for pass and red for fail
    if (grade === "F") {
        result.className = "fail";
    } else {
        result.className = "pass";
    }
});
