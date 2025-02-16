document.addEventListener("DOMContentLoaded", function() {
  let count = 0;
  const but =document.getElementById("but");
  const countic =document.getElementById("countic");

  but.addEventListener("click", function(){
      count += 1; 
      countic.textContent = count;

      if(count >= 15){
          but.disabled = true;
          this.textContent = "Не нажимай"
      }
  });



      let count1 = 15;
      const display = document.getElementById('timer');
      const reset = document.getElementById('reset');
      let interval;

      function startTimer() {
        interval = setInterval(function () {
          count1--;
          display.textContent = count1;

          if (count1 <= 0) {
            clearInterval(interval);
            display.textContent = "Время вышло";
          }
        }, 1000);
      }

      reset.addEventListener('click', function () {
        clearInterval(interval);
        count1 = 10;
        display.textContent = count1;
        startTimer();
      });

      startTimer();

      let ct = 0;
      let intervalic;
 
      const sb = document.getElementById("sb")
      const st = document.getElementById("st")
      const re = document.getElementById("re")
 
      sb.addEventListener("click", function(){
         if(!intervalic){
             intervalic = setInterval(function(){
                 ct++;
                 tm.textContent = ct;
             }, 1000)
         }
      });
 
      st.addEventListener("click", function(){
         clearInterval(intervalic);
         intervalic = null;
      });
 
      re.addEventListener("click", function(){
         clearInterval(intervalic);
         intervalic = null;
         ct = 0;
         tm.textContent = ct;
      });

});