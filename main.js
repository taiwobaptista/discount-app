let opt1js = document.getElementById("opt1");
let opt2js = document.getElementById("opt2");
let opt3js = document.getElementById("opt3");

let priceSelect1js = document.getElementById("priceSelect1");
let priceSelect2js = document.getElementById("priceSelect2");
let priceSelect3js = document.getElementById("priceSelect3");

let calcjs = document.getElementById("btnCalc");
let calcjs1 = document.getElementById("btnCalc1");
let calcjs2 = document.getElementById("btnCalc2");

calcjs.style.display = "none";
calcjs1.style.display = "none";
calcjs2.style.display = "none";

priceSelect1js.style.display = "none";
priceSelect2js.style.display = "none";
priceSelect3js.style.display = "none";

opt1js.addEventListener("click", choose1)
function choose1(p) {  
      p.preventDefault();    
priceSelect1js.style.display = "block";    
priceSelect2js.style.display = "none";   
priceSelect3js.style.display = "none";

    calcjs.style.display = "block";   
     calcjs1.style.display = "none";    
     calcjs2.style.display = "none";
}


opt2js.addEventListener("click", choose2)
function choose2(p) {  
      p.preventDefault();
    calcjs.style.display = "none";    
    calcjs1.style.display = "block";    
    calcjs2.style.display = "none";

    priceSelect1js.style.display = "none";    
    priceSelect2js.style.display = "block";    
    priceSelect3js.style.display = "none";
}
opt3js.addEventListener("click", choose3)
function choose3(p) {    p.preventDefault();
    calcjs.style.display = "none";   
     calcjs1.style.display = "none";   
    calcjs2.style.display = "block";

    priceSelect1js.style.display = "none";    
    priceSelect2js.style.display = "none";    
    priceSelect3js.style.display = "block";
}

let newopt1 = opt1js.value;if (opt1js.value == 1000) {
let calcjs = document.getElementById("btnCalc");
calcjs.addEventListener("click", calculateCake)
function calculateCake(e) {e.preventDefault();    
    let name = document.getElementById("nameInput").value;     
    let outputa = document.getElementById("output1");    
    let outputb = document.getElementById("output2") ;     
    let quantity = document.getElementById("quantityInput").value;

        let tenPercentDiscount    = newopt1*quantity*0.1;        
        let twentyPercentDiscount = newopt1*quantity*0.2;        
        let thirtyPercentDiscount = newopt1*quantity*0.3;        
        let fourtyPercentDiscount = newopt1*quantity*0.4;        
        let tenPercentDiscountPrice = newopt1*quantity-tenPercentDiscount;        
        let twentyPercentDiscountPrice = newopt1*quantity-twentyPercentDiscount;        
        let thirtyPercentDiscountPrice = newopt1*quantity-thirtyPercentDiscount;        
        let fourtyPercentDiscountPrice = newopt1*quantity-fourtyPercentDiscount;

    if(quantity>=1 && quantity<=3){           
     outputa.innerHTML = ` welcome ${name} the Price of one cake is ${newopt1}`;                    
     outputb.innerHTML = ` you bought ${quantity} cakes and your discount is ${tenPercentDiscount} and your discounted price is ${tenPercentDiscountPrice}`;                }               
     
     else if(quantity>=4 && quantity<=6){
     outputa.innerHTML = ` welcome ${name} the Price of one cake is ${newopt1}`;                    
     outputb.innerHTML = ` you bought ${quantity} cakes and your discount is ${twentyPercentDiscount} and your discounted price is ${twentyPercentDiscountPrice}`;                                   }               
     
     else if(quantity>=7 && quantity<=8){
     outputa.innerHTML = ` welcome ${name} the Price of one cake is ${newopt1}`;                    
     outputb.innerHTML = ` you bought ${quantity} cakes and your discount is ${thirtyPercentDiscount} and your discounted price is ${thirtyPercentDiscountPrice}`;                                    }               
     
     else if(quantity>=9 && quantity<=10){
     outputa.innerHTML = ` welcome ${name} the Price of one cake is ${newopt1}`;                    
     outputb.innerHTML = ` you bought ${quantity} cakes and your discount is ${fourtyPercentDiscount} and your discounted price is ${fourtyPercentDiscountPrice}`;                                   }              
      
     else{ outputa.innerHTML = ` welcome ${name} the Price of one cake is ${newopt1}`;                   
        outputb.innerHTML = ` you entered an invalid quantity of ${quantity}...please enter a quantity between 1 and 10`;                
     }
                }
}


let newopt2 = opt2js.value;if (opt2js.value == 500) {
let calcjs1 = document.getElementById("btnCalc1");

calcjs1.addEventListener("click", calculateGroundnut)
function calculateGroundnut(e) { 
       e.preventDefault();
    let name = document.getElementById("nameInput").value;     
    let outputa = document.getElementById("output1");    
    let outputb = document.getElementById("output2") ;     
    let quantity = document.getElementById("quantityInput").value;

        let tenPercentDiscount    = newopt2*quantity*0.1;        
        let twentyPercentDiscount = newopt2*quantity*0.2;        
        let thirtyPercentDiscount = newopt2*quantity*0.3;        
        let fourtyPercentDiscount = newopt2*quantity*0.4;        
        let tenPercentDiscountPrice = newopt2*quantity-tenPercentDiscount;        
        let twentyPercentDiscountPrice = newopt2*quantity-twentyPercentDiscount;       
         let thirtyPercentDiscountPrice = newopt2*quantity-thirtyPercentDiscount;        
         let fourtyPercentDiscountPrice = newopt2*quantity-fourtyPercentDiscount ;
            if(quantity>=1 && quantity<=3)
            {  outputa.innerHTML = ` welcome ${name} the Price of one bottle of Gnut is ${newopt2}`;              
              outputb.innerHTML = ` you bought ${quantity} bottles of Gnut and your discount is ${tenPercentDiscount} and your discounted price is ${tenPercentDiscountPrice}`;            }           
              
              else if(quantity>=4 && quantity<=6){
                outputa.innerHTML = ` welcome ${name} the Price of one bottle of  Gnut is ${newopt2}`;               
                 outputb.innerHTML = ` you bought ${quantity} bottles of Gnut and your discount is ${twentyPercentDiscount} and your discounted price is ${twentyPercentDiscountPrice}`;                           }           
                  
                 else if(quantity>=7 && quantity<=8){
                outputa.innerHTML = ` welcome ${name} the Price of one bottle of Gnut is ${newopt2}`;              
                  outputb.innerHTML = ` you bought ${quantity}  bottles of Gnut and your discount is ${thirtyPercentDiscount} and your discounted price is ${thirtyPercentDiscountPrice}`;                            }           
                   
                  else if(quantity>=9 && quantity<=10){
                outputa.innerHTML = ` welcome ${name} the Price of one bottle of Gnut is ${newopt2}`;              
              outputb.innerHTML = ` you bought ${quantity}  bottles of Gnut and your discount is ${fourtyPercentDiscount} and your discounted price is ${fourtyPercentDiscountPrice}`;                           }           
               
              else{ outputa.innerHTML = ` welcome ${name} the Price of one bottle of Gnut is ${newopt2}`;                outputb.innerHTML = ` you entered an invalid quantity of ${quantity}...please enter a quantity between 1 and 10`;            }
   }
}


let newopt3 = opt3js.value;if (opt3js.value == 200) {

let calcjs2 = document.getElementById("btnCalc2");calcjs2.addEventListener("click", calculateIcecreame)
function calculateIcecreame(e) {    e.preventDefault();
    let name = document.getElementById("nameInput").value;     
    let outputa = document.getElementById("output1");    
    let outputb = document.getElementById("output2") ;     let quantity = document.getElementById("quantityInput").value;
        let tenPercentDiscount    = newopt3*quantity*0.1;        
        let twentyPercentDiscount = newopt3*quantity*0.2;        
        let thirtyPercentDiscount = newopt3*quantity*0.3;        let fourtyPercentDiscount = newopt3*quantity*0.4;        
        
        let tenPercentDiscountPrice = newopt3*quantity-tenPercentDiscount;        
        
        let twentyPercentDiscountPrice = newopt3*quantity-twentyPercentDiscount;        
        let thirtyPercentDiscountPrice = newopt3*quantity-thirtyPercentDiscount;        
        let fourtyPercentDiscountPrice = newopt3*quantity-fourtyPercentDiscount;
            if(quantity>=1 && quantity<=3){ 
            outputa.innerHTML = ` welcome ${name} the Price of one cup of icecreame is ${newopt3}`;               
            outputb.innerHTML = ` you bought ${quantity}  cup of icecreame and your discount is ${tenPercentDiscount} and your discounted price is ${tenPercentDiscountPrice}`;            }           
           
            else if(quantity>=4 && quantity<=6){
                outputa.innerHTML = ` welcome ${name} the Price of  one cup of icecreame is ${newopt3}`;               
                
                outputb.innerHTML = ` you bought ${quantity}  cup of icecreame and your discount is ${twentyPercentDiscount} and your discounted price is ${twentyPercentDiscountPrice}`;                          
                }            
                else if(quantity>=7 && quantity<=8){
                outputa.innerHTML = ` welcome ${name} the Price of  one cup of icecreame is ${newopt3}`;                
                outputb.innerHTML = ` you bought ${quantity}   cup of icecreame and your discount is ${thirtyPercentDiscount} and your discounted price is ${thirtyPercentDiscountPrice}`;                           
                }            
                else if(quantity>=9 && quantity<=10){
                outputa.innerHTML = ` welcome ${name} the Price of one cup of icecreame is ${newopt3}`;  

                 outputb.innerHTML = ` you bought ${quantity}  cup of icecreame and your discount is ${fourtyPercentDiscount} and your discounted price is ${fourtyPercentDiscountPrice}`;                          
                 }            
                else{ outputa.innerHTML = ` welcome ${name} the Price of  one cup of icecreame is ${newopt3}`;               
                 outputb.innerHTML = ` you entered an invalid quantity of ${quantity}...please enter a quantity between 1 and 10`;            }
   }
}