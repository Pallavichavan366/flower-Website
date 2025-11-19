document.getElementById("contact").addEventListener("submit", function(e) {
  
  const Name = document.getElementById("Name").value.trim();
  const Age = document.getElementById("Age").value.trim();
  const Gender = document.getElementById("Gender").value.trim();
  const email = document.getElementById("Email").value.trim();
  const Phone = document.getElementById("Phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (Name === "" || Age === "" || Gender === "" || email === "" || Phone === "") {
    errorMsg.innerText = "❌ All fields are required!";
    errorMsg.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.innerText = "❌ Please enter a valid email!";
    errorMsg.style.color = "red";
    return;
  }

  // Clear error message if all good
  errorMsg.innerText = "";

  alert("✅ Form submitted successfully!");

  // Optionally clear form
  document.getElementById("contact").reset();
}); 