document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.stopPropagation();
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  });