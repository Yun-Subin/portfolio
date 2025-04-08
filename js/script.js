window.addEventListener("load", () => {
  const articles = document.querySelectorAll("article");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal .modal-txt span");
  // console.log(closeBtn);

  articles.forEach((article) => {
    article.addEventListener("mouseenter", (e) => {
      //    article.querySelector("video").play();
      e.currentTarget.querySelector("video").play();
    });

    article.addEventListener("mouseleave", (e) => {
      e.currentTarget.querySelector("video").pause();
    });
    article.addEventListener("click", (e) => {
      let description = e.currentTarget.querySelector("p").innerText;
      let videoSrc = e.currentTarget.querySelector("video").getAttribute("src");
      //    console.log(videoSrc);

      modal.querySelector("p").innerText = description;
      modal.querySelector("video").setAttribute("src", videoSrc);

      modal.querySelector("video").play();
      modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      //    modal.querySelector("video").src = "";
      modal.querySelector("video").pause();
    });
  });
});
