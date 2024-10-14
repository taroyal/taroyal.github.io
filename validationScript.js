   let inputelement = document.getElementById(InputField)

        // Invalid input: display error message 
        function validateForm() {
          alert("I am here");
          

          var regex = /^[a-zA-Z0-9]+$/g;
          let inputvalue = inputelement.value;
          let results = regex.test(inputvalue);
          if  (results ==false) {
        alert("Only contains alphanumeric characters. No punctuation or spaces!");
          } else {
         alert ("I am alert box")
         } document.getElementById("myBtn").addEventListener("click", displayAlert);
      }
       