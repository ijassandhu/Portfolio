// Function to toggle the menu visibility
function handleMenu() {
  var navDialog = document.getElementById('nav-dialog');
  navDialog.classList.toggle('hidden');
}

// Add event listeners to close the menu when a navigation link is clicked
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', () => {
      var navDialog = document.getElementById('nav-dialog');
      navDialog.classList.add('hidden');
  });
});


var typed = new Typed(".auto-type", {
  strings: ["Web Designer.", "Frontend Developer."],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

function resumeLink() {
  window.open(
    "https://drive.google.com/file/d/100qi6B1dIMfbv46oqScUC1BQVyKTpJm7/view?usp=drivesdk"
  );
}

let mybutton= document.getElementById('backToTop')
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});