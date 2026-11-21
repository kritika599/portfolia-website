const themeBtn=document.getElementById("themeBtn");
const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light"){document.body.classList.add("light");themeBtn.textContent="🌙";}
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  const light=document.body.classList.contains("light");
  themeBtn.textContent=light?"🌙":"☀️";
  localStorage.setItem("portfolio-theme",light?"light":"dark");
});

const menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

document.getElementById("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const output=document.getElementById("formMessage");
  if(!name||!email||!message){output.textContent="Please fill in all fields.";output.style.color="#ff7373";return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){output.textContent="Please enter a valid email address.";output.style.color="#ff7373";return;}
  output.textContent="Message submitted successfully!";output.style.color="#4ade80";
  e.target.reset();
});