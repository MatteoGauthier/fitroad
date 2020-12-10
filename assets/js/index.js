window.onload = function () {
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });
};
