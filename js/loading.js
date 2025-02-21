
 const loader = document.getElementById('preloader');
 const content = document.getElementById('middle');


 document.body.classList.add('loading');

 window.addEventListener('load', function () {
     document.body.classList.remove('loading');
     loader.style.display = 'none';
     content.style.display = 'block';
 });


  