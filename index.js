
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
    z-index:5;
}
#th_title{
    text-align: center;
    font-size: 25px;
    font-weight: 800;
   //color:#000000;
}
#th_des{
    margin-left: 20px;
    margin-top:20px;
}
#text{
    width: 230px;
    height: 30px;
    border-radius: 10px;
    margin-left: 15px;
    margin-top:30px;
    outline: none;
    border: 2px solid #000000;
}
#button{
    width: 100px;
    height: 30px;
    border-radius: 5px;
    margin-left: 10px;
  // background-color:#000000;
   // color:white;
}

#close{
    width: 30px;
    height: 30px;
    border-radius:50%;
   background-color:rgb(214, 54, 54);
    color:#000000;
    font-size:15px;
    font-weight:500;
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

const th_title = document.createElement("p");
th_title.id = "th_title";
th_title.innerHTML=""

const th_des = document.createElement("p");
th_des.id = "th_des";
th_des.innerHTML=""

var input = document.createElement("input");
input.type = "text"
input.placeholder='Enter The Email'
input.id="text"
const th_btn = document.createElement("button");
th_btn.id = "button";
th_btn.innerHTML='';


document.body.appendChild(container);
container.appendChild(close);
container.appendChild(th_title);
container.appendChild(th_des);
container.appendChild(input);
container.appendChild(th_btn);

const url=window.location.href;
  const parts = url.split('/');
  const thank=parts.at(-1)

  if(thank=='thank_you'){
    container.style.visibility='visible';
  }

  
  close.addEventListener("click",()=>{
     container.style.visibility ="hidden"
  })

  const th_email= document.getElementById("text");
  const th_button= document.getElementById("button");
  const th_con= document.getElementById("con");

  th_btn.addEventListener("click",async(e)=>{
 
   
   if(th_btn.innerHTML="get 10% off"){
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
      email:th_email.value
      })
  
    })
     // console.log(text.value)
     let rsu=await res.json()
      let val=rsu?.msg;
      th_email.value=val;
     th_btn.innerHTML="copy"}
      if(th_btn.innerHTML="copy"){
        navigator.clipboard.writeText(th_email.value)
        th_btn.innerHTML="copied"
        
      } 
         
   })



   async function getui(){
    let res= await fetch("/apps/app/s/get_store_ui",
    {
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*',
        'ngrok-skip-browser-warning':'69420'
      }})
    res=await res.json()
    const en=res[0].enable;
     if(en==true){
       console.log(res)
       th_title.innerHTML=res[0].title;
       th_des.innerHTML=res[0].des;
       th_button.innerHTML=res[0].btn_text;
       th_title.style.color=res[0].text_color;
       th_des.style.color=res[0].text_color;
       th_button.style.color=res[0].text_color;
       th_con.style.backgroundColor=res[0].popup_bg;
       th_button.style.backgroundColor=res[0].btn_bg;
      
     }
     else{
      container.style.visibility="hidden";
     }
    
      }
    
    
      
      getui()
    
    
    
    
    
    
    
    
    
