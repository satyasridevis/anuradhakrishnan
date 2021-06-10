
// PROGRESS BAR

/*window.onscroll = function()
{
  myFunction()
};

function myFunction()
{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll/ height) * 100;
  document.getElementById('myBar').style.width = scrolled + "%";
}*/

// HEADER COLOR CHANGE DURING SCROLL
window.onscroll = () => {
  const header = document.querySelector('header');
  if(this.scrollY <= 10) 
  header.className = ''; 
  else 
  header.className = 'scroll';
};

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction()
 {
   if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
   {
     document.getElementById('button').style.display = "block";
   }
   else
     {
       document.getElementById('button').style.display = "none";
      }
   }
 // When the user clicks on the button, scroll to the top of the document
 
 function topFunction()
 {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 