function openMenu(event, menuName) {
    // Hide all menu content
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tablink');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked menu content and highlight the tab
    document.getElementById(menuName).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  
  
const namein=document.getElementById("Name");
const people=document.getElementById("People");
const messages=document.getElementById("Message");
const Date=document.getElementById("date");
const Bton=document.getElementById("bton");

Bton.onclick =function(){
const nameval=namein.value;
const peopleval=people.value;
const messageval=messages.value;
const dateval=Date.value;
console.log("Name:",nameval);
console.log("People:",peopleval);
console.log("Message:",messageval);
console.log("Date:",dateval);
}
function handleLogin(event) {
    event.preventDefault(); // Prevents the default form submission
const uname=document.getElementById("username");
const unameval=uname.value;
console.log("UserName:",unameval);
const pass=document.getElementById("password");
const passval=pass.value;
console.log("UserName:",unameval);
    // Add a redirection to the index page with a query parameter
    window.location.href = "index.html?message=login_successful";
}
const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get("message"); // Get the "message" parameter
        const mainContent = document.getElementById("main-content");

        console.log("Message from URL:", message);
        // If the message is "login_successful", show the popup
        if (message === "login_successful") {
            
            const popup = document.getElementById("popup");
            popup.style.display = "block"; // Show the popup
mainContent.classList.add("blur");
            // Hide the popup after 3 seconds
            setTimeout(() => {
                popup.style.display = "none";
                mainContent.classList.remove("blur");
            }, 1000);
        }