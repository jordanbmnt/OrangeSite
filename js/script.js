   const floater = document.getElementById("Ellipse");
   const sec01 = document.getElementsByClassName("sec01");
   const sec04 = document.getElementsByClassName("sec04");
   console.log(sec01)
//    testing[0].style.borderRadius = ((parseInt(this.scrollY))/100)*360;
//     console.log(testing[0].style.borderRadius);
    window.addEventListener("scroll", function(event){
        var scroll = this.scrollY;
        var height = (sec04[0].offsetHeight);
        if(scroll < height){
             floater.attributes.fill.value = "#EE5B3C";
         }else if(scroll < (height * 3)){
             floater.attributes.fill.value = "#24333F";
         }else{
             floater.attributes.fill.value = "#F0FEE4";
         }
    }, 0.1)