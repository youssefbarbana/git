window.onload=function(){
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("numberPlace"),
        submitBtn = document.getElementById("submit"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; 
           numberPlace.innerText = number ; 
           
        }
        
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerText = number ; 
        }     
        
    }
    submitBtn.onclick = function(){
        alert("you choice : " + number);
    }
    
}

    
    
    
    

    