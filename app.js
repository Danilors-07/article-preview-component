const linkBTN = document.querySelector(".link");
const shareBox = document.querySelector(".share-box");
const shareArrow = document.querySelector(".share-arrow");


linkBTN.addEventListener("click", function () {
    // console.log(linkBTN.className);

    if (linkBTN.classList.contains("icon-black")) {

        linkBTN.classList.remove("icon-black");
        shareBox.style.display = "none";
        shareArrow.style.display = "none";
    } else {

        linkBTN.classList.add("icon-black");
        shareBox.style.display = "flex";
        shareArrow.style.display = "block";
    }

})