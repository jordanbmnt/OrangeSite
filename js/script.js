   const floater = document.getElementById("Ellipse");
    console.log(floater.attributes.fill.value);
    console.log(window.innerWidth)
    window.addEventListener("scroll", function(event){
        var scroll = this.scrollY;
        if(window.innerWidth < 700){
            if(scroll < 900){
                floater.attributes.fill.value = "#EE5B3C";
            }else if(scroll < 2750){
                floater.attributes.fill.value = "#24333F";
            }else if(scroll < 4000){
                floater.attributes.fill.value = "#F0FEE4";
            }
        }
    })