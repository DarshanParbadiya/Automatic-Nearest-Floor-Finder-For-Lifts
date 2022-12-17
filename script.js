let liftOne = $('.lift-one')
let liftTwo = $('.lift-two')
let up = $('#up')
let down = $('#down')
let textA = $('.text-A')
let textB = $('.text-B')

let onePosition  = 1;
let twoPosition = 1;

//floor buttons
let one = $('#one')
let two = $('#two')
let three = $('#three')
let four = $('#four')
let five = $('#five')
let six = $('#six')

//lift mover
let liftA = $('#lift-A')
let liftB = $('#lift-B')

let notice = $('.notice')

let Aselected = false;
let Bselected = false;
let i

function selectLift()
{     
     liftA.click(()=>
     { 
          liftA.toggleClass('selected')      
       
     }   
     )
     liftB.click(()=>
      { 
          liftB.toggleClass('selected')   
               
     }   
     
)

          // if(liftA.data('clicked')) {
          //      console.log($this.html())  
          //      liftA.toggleClass('selected')    
          //      return ($this.html());
          // }
          // if(liftB.data('clicked')) {
          //      console.log($this.html())
          //      liftB.toggleClass('selected')      
          //      return ($this.html());
          // }
}

selectLift()


function moveUp(){

     if(liftA.hasClass("selected")){
          Aselected = true
     }
     else{
          Aselected = false
     }

     if(liftB.hasClass("selected")){
          Bselected = true
     }
     else{
          Bselected = false
     }

     
     if(Aselected){
          i= textA.html()
          if(i>=6){
               notice.html("No further upper floors")

          }
          else{
          liftOne.css('margin-top','+=120px')
          console.log(i)
          i=Number(i)+1
          //notice.html("A going to "+ i+"th floor")
          textA.html(i)
          }   
     }
     if(Bselected){
          i= textB.html()
          if(i>=6){
               notice.html("No further upper floors")
          }
          else{
          liftTwo.css('margin-top','+=120px')
          console.log(i)
          i=Number(i)+1
          //notice.html("B going to "+ i+"th floor")
          textB.html(i)
          }   
     }


}
     

function moveDown(){

     if(liftA.hasClass("selected")){
          Aselected = true
     }
     else{
          Aselected = false
     }

     if(liftB.hasClass("selected")){
          Bselected = true
     }
     else{
          Bselected = false
     }


     if(Aselected){
          i = textA.html()
          if(i<=1){
               notice.html("No further lower floors")
          }
          else
         {
          
          liftOne.css('margin-top','-=120px')
          i=Number(i)-1
          //notice.html("A going to "+ i+"th floor")
          textA.html(i)
         }
     }
     if(Bselected){
          i = textB.html()
          if(i<=1){
               notice.html("No further lower floors")
          }
          else
         {
          liftTwo.css('margin-top','-=120px')
          i=Number(i)-1
          //notice.html("B going to "+ i+"th floor")
          textB.html(i)
         }
     }    
}

function toggler(){
     $(this).toggleClass('selected')
}

function floorSelectction(){
     one.click(toggler)
     two.click(toggler)
     three.click(toggler)
     four.click(toggler)
     five.click(toggler)
     six.click(toggler)
     
}
floorSelectction()

function findSelectedFloors(){
     if(one.hasClass('selected')){
          return one;
     }
     if(two.hasClass('selected')){
          return two;
     }
     if(three.hasClass('selected')){
          return three;
     } if(four.hasClass('selected')){
          return four;
     } if(five.hasClass('selected')){
          return five;
     } if(six.hasClass('selected')){
          return six;
     }

}

function automaticSystem(){
     let requestFloorObj = findSelectedFloors()
     let requestedFloor = Number(findSelectedFloors().html())
     //notice.html(requestedFloor)
     let Adiff = requestedFloor - Number(textA.html())
     let Bdiff = requestedFloor - Number(textB.html())
     //notice.html(Adiff+" "+Bdiff)
     if( Math.abs(Bdiff) >= Math.abs(Adiff) ){
          //notice.html(Math.abs(Adiff) +" "+ Math.abs(Bdiff))
          liftA.toggleClass('selected')
          liftB.removeClass('selected')
          Bselected = false;
          Aselected = true;
          if(Adiff > 0){
                
               for(let j = 1; j<= Adiff ;j++){
                    moveUp()
                    
               }
               
               if(Number(textA.html()) == requestedFloor){
                    //notice.html(Number(textA.html()) +" here "+ requestedFloor)
                    requestFloorObj.toggleClass('selected')
               }
          }
          else{
               for(let j = 1; j<= Math.abs(Adiff) ;j++){
                    moveDown()

               }
               if(Number(textA.html()) == requestedFloor){
                    //notice.html(Number(textA.html()) +" here "+ requestedFloor)
                    requestFloorObj.toggleClass('selected')
               }
          }
     }
     else{
          //notice.html(Math.abs(Adiff)+ " " + Math.abs(Bdiff))
          liftB.toggleClass('selected')
          liftA.removeClass('selected')
          
          Bselected = true;
          Aselected = false;
          if(Bdiff > 0){
                
               for(let j = 1; j<= Bdiff ;j++){
                    moveUp()
               }
               if(Number(textB.html()) == requestedFloor){
                    //notice.html(Number(textA.html()) +" here "+ requestedFloor)
                    requestFloorObj.toggleClass('selected')
               }
          }
          else{
               for(let j = 1; j<= Math.abs(Bdiff) ;j++){
                    moveDown()
               }
               if(Number(textB.html()) == requestedFloor){
                    //notice.html(Number(textA.html()) +" here "+ requestedFloor)
                    requestFloorObj.toggleClass('selected')
               }
          }
     }
}


up.click(moveUp)
down.click(moveDown)



function msg(){
  console.log('clicked')
}


function floorFinder(){
      
     one.click(returnNumber)
     two.click(returnNumber)
     three.click(returnNumber)
     four.click(returnNumber)
     five.click(returnNumber)
     six.click(returnNumber)
     
     
     // $("#element").click(function(){
     //      $(this).data('clicked', true);
     //  });


     //  $("#element").click(function(){
     //      var $this = $(this);
     //      if($this.data('clicked')) {
     //          func(some, other, parameters);
     //      }
     //      else {
     //          $this.data('clicked', true);
     //          func(some, parameter);
     //      }
     //  });
}

function returnNumber()
{
     var $this = $(this);
          if($this.data('clicked')) {
               console.log($this.html())  
               $this.toggleClass('selected')    
               return ($this.html());
          }
         
}

floorFinder()


let test = $('#test')


test.click(()=>{
      automaticSystem()
})