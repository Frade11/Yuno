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

const posts={
  1: {
      id: 1,
      icon: "./images/recomend-icon-2.jpg",
      nickname: "Furina Fan",
      image: "./images/post-1.jpg",
      likes: 456,
      description: "LOOK AT THIS PHOTO,ITS AMAZING!!!"
  },
  2: {
      id: 2,
      icon: "./images/recomend-icon-3.jpg",
      nickname: "Furu kuru",
      image: "./images/post-2.jpg",
      likes: 34059,
      description: "See you tomorow Stella <3"
  }
}

function DisplayPosts(mainSectionId,items){
    const section = document.getElementById(mainSectionId);
    if(!section) return;

    section.innerHTML = items.map(post =>`
        <div class="post-data">
            <div class="author">
                <img src="${post.icon}" alt="user_icon">
                <span>${post.nickname}</span>
            </div>
            <div class="post-image">
                <img src="${post.image}">
            </div>
            <div class="post-description">
                <span class="material-symbols-outlined">favorite</span>
                <h4>${post.likes}</h4>
                <h3>${post.description}</h3>
            </div>
        </div>
      `).join('');
}
 document.addEventListener("DOMContentLoaded", () => {
  DisplayPosts("mainSectionId", Object.values(posts));
});
