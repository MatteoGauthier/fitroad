window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  document.querySelector(".frame-back").style.transform = `translateY(${distance * .1}px)`;
  document.querySelector(".frame-front").style.transform = `translateY(${distance * 0.3}px)`;
//   setTimeout(() => {
//     document.querySelector("section h3").classList.add("animate-me");
//   }, 400);
});
