const pollRequestBtn = document.getElementById("pollRequestBtn");
let modal = document.getElementById("pollRequestModal");
let closeBtn = document.getElementsByClassName("closeBtn")[0];
pollRequestBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", sendEmail)
window.addEventListener("click", clickOutside)

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}