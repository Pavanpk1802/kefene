function validate() {
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
          if (username === password && username.length >= 2) {
              alert("Login Successful");
              window.localStorage.setItem("loginStatus", "true")
              // window.location.href = "orders.html";
              window.location.href = "order.html"; // Redirecting to other page.             
          }
          else if(username === password && username.length <2) {
              alert("Please enter at least 2 characters")
          }
          else {
              alert("Please enter valid credentials!");
          }
      }
      let status =  window.localStorage.getItem("loginStatus");
      if(status == "true"){
          window.location.href = "order.html";
      }