// Floating heart notes
const notes = ["I love you","you are the best","you+me=perfect","my pyara chikna","my favourite laugh","forever and ever"];
const floatingContainer = document.getElementById("floatingHearts");

for(let i=0;i<notes.length;i++){
  let heart = document.createElement("div");
  heart.className = "heart-note";
  heart.innerText = notes[i];
  heart.style.left = Math.random()*100 + "%";
  heart.style.top = Math.random()*100 + "%";
  floatingContainer.appendChild(heart);
}

// Envelope click
document.getElementById("envelope").addEventListener("click",function(){
  this.classList.add("open");
  setTimeout(()=>{
    document.getElementById("photoDisplay").src="photo2.jpg";
    setInterval(()=>{
      let current = document.getElementById("photoDisplay").src.includes("photo1.jpg")?"photo2.jpg":"photo1.jpg";
      document.getElementById("photoDisplay").src=current;
    },3000);
  },1000);
});

// Typewriter
const message = "Here's the drawing baby ji, a caricature, ab kuch khas chize aati jati to nhi mujhe, to thoda sa budha, thoda sa chalak, muche rkh k chikna nhi rhne deta khudko isliy bohot sari muche, koshish ki thi zada appropriate bnau, lekin fir skill issue aa jata h, but leaving everything aside, let me tell you one little thing, that I lovee youu sooo mucchhhh LAADI";
let index=0;
function typeWriter(){
  if(index<message.length){
    document.getElementById("typewriter").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter,50);
  }
}
window.addEventListener("scroll",()=>{
  if(window.scrollY > window.innerHeight){
    typeWriter();
  }
});

// Starry heart background
const canvas = document.getElementById("starryBackground");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars=[];
for(let i=0;i<100;i++){
  stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1});
}
function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="pink";
  for(let s of stars){
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}
animateStars();