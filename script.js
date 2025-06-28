window.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    const profileTextDiv = document.querySelector(".user-profile .profile-text");
    if (profileTextDiv) {
      for (const node of profileTextDiv.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = currentUser.Username + " ";
          break; 
        }
      }
    }
  }
});


function exit(){
    window.location.replace("auth.html");
}