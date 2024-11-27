deleteButton = document.getElementById('deleteStudentButton');

// add an event listener to delete the last row/student on double clicking the deleteButton


button = document.getElementById('addStudentButton');
// add an event listener to style the button on click


function showNewStudentForm(){
// display the form on clicking the button
}

function validateForm(){
        var name = document.getElementById('name').value;
        var student id = document.getElementById('student id').value;
        var Age = document.getElementById('Age').value;
        var email = document.getElementById('Email').value;

        var namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var student idPattern = /^[a-zA-Z0-9]{7}$/;


        if (!namePattern.test(name)) {
            alert("Invalid person's name")
        }

        if (!student idPattern.test(student id)) {
            alert('Invalid student ID');
        }
       

        if (!AgePattern.test(Age)) {
            alert('Invalid age');
            
        }
        if (!emailPattern.test(email)) {
            alert('Invalid email address.')
            
        }

        return false;
    }
    // validate your form
    // regex for name: /^[A-Za-z]+(?: [A-Za-z]+)*$/  allows names habving one or more words with one white spaces in between
    // regex for email:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // regex for student id: /^[a-zA-Z0-9]{7}$/  accepts alphanumeric values of 7 characters


