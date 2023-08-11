//start of syntax of accordion
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  //end of syntax of accordion





//smooth scrolling effect where clicking on a link scrolls to a specific section on the same page.
  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute("href");
        const targetSection = document.querySelector(targetSectionId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  
//fcontact form

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "becauseezme@gmail.com",
    Password : "12013680ibarra",
    To : 'johnlloydibarra2005@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Contact Inquiry",
    Body : "name: " + document.getElementById("name").value
    + "email: " + document.getElementById("name").value 
    + "Phone: " + document.getElementById("phone").value,
}).then(
  message => alert("Messege Send Succesfuly")
);
}


//2nd method
//SecureToken : "4f5b7881-a7e3-4b82-8fb1-9ff95ecab053",

 
const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message").value;
  
  const body = "Name: " + name +
               "<br/> Email: " + email +
               "<br/> Password: " + password +
               "<br/> Message: " + message;

  Email.send({
    SecureToken: "4f5b7881-a7e3-4b82-8fb1-9ff95ecab053",
    To: 'johnlloydibarra2005@gmail.com',
    From: "johnlloydibarra135@gmail.com",
    Subject: "New Contact Inquiry",
    Body: body
  }).then(
    message => alert(message)
  );
});







