let card=document.getElementById("cardid");
let s=document.getElementById("sumid");
let mes=document.getElementById("messageId");

let lost=document.getElementById("lostel")
let message=""
let isAlive=true;
let Blackjack=false;

    let cards=[]
    let sum= 0

function random(){
    let ran=Math.floor(Math.random()*13) +1;
   if(ran > 10){
    return 10
   }
   else if(ran === 1){
    return 11
   }
   else{
    return ran
   }
}

function render(){
    card.textContent="Cards : ";
    for(let i=0;i<cards.length;i++){
        card.textContent+=cards[i]+" ";
    }
    s.textContent="Sum : "+sum;
    if(sum<21){
        message="You can draw another card😊"
      }else if(sum ===21){
          message="You have got a BlackJack!! 👌"
          Blackjack=true;
      }else{
       message="you have lost 😒"
       isAlive=false;
      }
      mes.textContent=message;
}

function start(){

    
    let firstCard=random()
    let secondCard=random()
    cards=[firstCard,secondCard]
    sum= firstCard+ secondCard
    render()
}

function reset(){
    cards=[];
    sum= 0;
    Blackjack=false;
    isAlive=true;
    render()
    lost.textContent=""

}

function newCard(){
    if(Blackjack === false && isAlive ===true){
        let newCard=random()
        sum=sum+newCard;
         cards.push(newCard);
     
       render()
    }
    else{
      lost.textContent="YOU CAN'T DRAW MORE CARDS "
    }

}
