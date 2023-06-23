
let css = document.createElement('style');

var styles=`#con{
    width: 370px;
    height: 250px;
    visibility:hidden;
    border-radius: 20px;
    position: fixed; 
    top:200px;
    left:470px;
    box-shadow: 5px 5px 15px #645f5f;
}
#title{
    text-align: center;
    font-size: 25px;
    font-weight: 800;
   color:#000000;
}
#des{
    margin-left: 10px;
}
#text{
    width: 230px;
    height: 30px;
    border-radius: 10px;
    margin-left: 5px;
    outline: none;
    border: 2px solid #000000;
}
#button{
    width: 100px;
    height: 30px;
    border-radius: 5px;
    margin-left: 10px;
   background-color:#000000;
    color:white;
}

#close{
    width: 30px;
    height: 30px;
    border-radius:50%;
   background-color:rgb(214, 54, 54);
    color:#000000;
    font-size: 20px;
    outline:none;
    border:none;
    margin-left:340px;
}

`

css.appendChild(document.createTextNode(styles));
document.getElementsByTagName("head")[0].appendChild(css);


const container = document.createElement("div");
container.id = "con";

const close = document.createElement("button");
close.id = "close";
close.innerHTML="&times;"

const title = document.createElement("p");
title.id = "title";
title.innerHTML="🎉 Refer & Get 10% Offer"

const des = document.createElement("p");
des.id = "des";
des.innerHTML="Invite your friends to get ₹100 off For each friend you refer youll get 20% offer"

var input = document.createElement("input");
input.type = "text"
input.placeholder='Enter The Email'
input.id="text"
const btn = document.createElement("button");
btn.id = "button";
btn.innerHTML='get 10% off';


document.body.appendChild(container);
container.appendChild(close);
container.appendChild(title);
container.appendChild(des);
container.appendChild(input);
container.appendChild(btn);

const url=window.location.href;
  const parts = url.split('/');
  const thank=parts.at(-1)

  if(thank=='thank_you'){
    container.style.visibility='visible';
  }

  
  close.addEventListener("click",()=>{
     container.style.visibility ="hidden"
  })

  btn.addEventListener("click",async(e)=>{
 
   
   if(btn.innerHTML="get 10% off"){
   e.preventDefault()
    let res= await fetch("/apps/app/s/store_data",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*',
        'ngrok-skip-browser-warning':'69420'
      },
    body: JSON.stringify({
      email:text.value
      })
  
    })
     // console.log(text.value)
     let rsu=await res.json()
      let val=rsu?.msg;
      text.value=val;
      btn.innerHTML="copy"}
      if(btn.innerHTML="copy"){
        navigator.clipboard.writeText(text.value)
        btn.innerHTML="copied"
        
      }
      
     
         
   })
