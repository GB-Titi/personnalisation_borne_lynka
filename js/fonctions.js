var loadHeader = function(event) {
    var output = document.getElementById('img_header');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      // URL.revokeObjectURL(output.src) // free memory
    }
    //console.log(output.src)
  };

var loadCarre = function(event) {
    var output = document.getElementById('img_carre');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      // URL.revokeObjectURL(output.src) // free memory
    }
   // console.log(output.src)
  };