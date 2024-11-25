 let userCount=0;
 let compCount=0;
 const choicess = document.querySelectorAll(".choice");
 const para =document.querySelector('#msg');
 const score=document.querySelector("#Score")
 const user_score=document.querySelector("#user");
 const comp_score=document.querySelector("#comp")
 const restartbtn=document.querySelector("#restart")
 const darkModeBtn=document.querySelector("#mode");
 let lightmode=true;
 darkModeBtn.addEventListener('click',()=>{
  if(lightmode){
    document.body.classList.remove("lightmode");
    document.body.classList.add("darkmode");
    lightmode=false;
  }
  else{
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
    lightmode=true;
  }

 })
 const showWinner= (userWin,userChoice,compChoice) =>{
   if (userWin){
    para.innerHTML=`You Win. Your ${userChoice} beats ${compChoice}`;
    para.style.backgroundColor="green";
    userCount++;
    user_score.innerHTML=userCount;
   }
   else{
    para.innerHTML=`You Lost.${compChoice} beats Your ${userChoice}`;
    para.style.backgroundColor="red";
    compCount++;
    comp_score.innerHTML=compCount

   }
   checkGameOver();
 }
 const checkGameOver = () => { if (userCount === 5 || compCount === 5) 
  { choicess.forEach(choice => { choice.removeEventListener("click", playGame); }); 
  if (userCount === 5) { para.innerHTML = `Game Over! You won the series!`; 
    para.style.backgroundColor = "green"; 
    restartbtn.style.display="inline";
    restartbtn.addEventListener('click',()=>{
    location.reload();
  }
)} 
 else { para.innerHTML = `Game Over! The computer won the series!`;
   para.style.backgroundColor = "red"; 
   restartbtn.style.display="inline";
   restartbtn.addEventListener('click',()=>{
    location.reload();
  }
)
  } } };

const DrawGame=()=>{
   para.innerHTML=`Game was Draw`;
   para.style.backgroundColor="rgb(40, 40, 51)";
   
}

 const genCompChoice=()=>{
    const arrChoice=["Rock","Paper","Scissor"];
    const idx= Math.floor(Math.random()*3);
    return arrChoice[idx]
 }
 const playGame=(userChoice)=>{
  if (userCount === 5 || compCount === 5) { return;}
    console.log("user choice is ", userChoice);
    //generating computer choice
   const compChoice=genCompChoice();
   console.log("Computer Choice is ",compChoice);
   if (userChoice==compChoice) {
    DrawGame();
   }
   else {
    let userWin=true;
      if(userChoice==="Rock"){
        userWin=compChoice==="Paper"? false:true;
      }
      else if (userChoice==="Paper") {
        userWin=compChoice==="Scissor"? false:true;
        
      }
      else {
        userWin=compChoice==="Rock"? false:true;
      }
      showWinner(userWin,userChoice,compChoice);
      
   }

 }
 choicess.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
    
 });