document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".smooth-scroll");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});


function submitComment() {
    let name = document.getElementById("nameInput").value.trim();
    let comment = document.getElementById("commentBox").value.trim();
    let commentList = document.getElementById("commentList");

    if (name === "" || comment === "") {
        alert("Please enter your name and comment before submitting.");
        return;
    }

    let commentCard = document.createElement("div");
    commentCard.classList.add("comment-card");
    commentCard.innerHTML = `
        <strong>${name}</strong>
        <p>${comment}</p>
        <span class="comment-time">${new Date().toLocaleString()}</span>
    `;

    commentList.prepend(commentCard);

    document.getElementById("nameInput").value = "";
    document.getElementById("commentBox").value = "";
}

