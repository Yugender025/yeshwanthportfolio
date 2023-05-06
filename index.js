
  // select all the navbar links
const navLinks = document.querySelector('.nav-link');

// iterate over the navbar links
navLinks.forEach((link) => {
  // add a click event listener to each link
  link.addEventListener('click', (e) => {
    // prevent the default behavior of the link
    e.preventDefault();

    // get the href attribute of the clicked link
    const href = link.getAttribute('href');

    // use the href value to select the corresponding section
    const section = document.querySelector(href);
    function scrollToFooter() {
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
      }
    // scroll to the selected section
   
  });
});
