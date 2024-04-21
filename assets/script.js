// const dropdowns = Document.querySelectorAll('.dropdown')
// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.menu');
//     const options = dropdown.querySelectorAll('.menu li');
//     const selected = dropdown.querySelector('.selected');

// select.addEventList('click', () => {
//     select.classList.toggle('select-clicked');
//     caret.classList.toggle('caret-rotate');
//     menu.classList.toggle('menu-open');
// });
// options.forEach(option => {
//     option.addEventListener('click', () => {
//         selected.innerText = option.innerText;
//         select.classList.remove('select-clicked');
//         caret.classList.remove('caret-rotate');
//         menu.classList.remove('menu-open');
//         options.forEach(option => {
//             option.classList.remove('active');
//         });
//         option.classList.add('active');
//     });
// });
// });

$(function () {
  let firstIcon = $(".first-header");

  firstIcon.on("click", function () {
    $(".first-dropdown").toggle();
  });

  let secondIcon = $(".second-header");

  secondIcon.on("click", function () {
    $(".second-dropdown").toggle();
  });

  const languages = document.querySelectorAll(".first-dropdown li");
  const exchange = document.querySelectorAll(".second-dropdown li");

  languages.forEach(item => {
    item.addEventListener("click", function() {
        const image = this.firstElementChild.src;
        const name = this.lastElementChild.innerText;

        const firstHeader = document.querySelector(".first-header");
        
        firstHeader.querySelector("img").src = image;
        firstHeader.querySelector("span").innerText = name;

        document.querySelector(".first-dropdown").style.display = "none";
    });
  });

    exchange.forEach((item) => {
      item.addEventListener("click", function () {
        const image = this.firstElementChild.src;
        const name = this.lastElementChild.innerText;

        const secondHeader = document.querySelector(".second-header");

        secondHeader.querySelector("img").src = image;
        secondHeader.querySelector("span").innerText = name;

        document.querySelector(".second-dropdown").style.display =
          "none";
      });
    });
});
