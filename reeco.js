   
   // Get references to the "T" and "C" elements
   const approveTick = document.getElementById('approveTick');
   const warningCross = document.getElementById('warningCross');

   // Add click event listeners
   approveTick.addEventListener('click', function() {
       alert('Product Approved');
   });

   warningCross.addEventListener('click', function() {
       alert('Product Missing');
   });