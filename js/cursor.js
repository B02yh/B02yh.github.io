var CURSOR;Math.lerp=(e,t,s)=>(1-s)*e+s*t;const getStyle2=(e,t)=>{try{return window.getComputedStyle?window.getComputedStyle(e)[t]:e.currentStyle[t]}catch(e){}return""},map=new Map;map.set("red","rgb(241, 71, 71)"),map.set("orange","rgb(241, 162, 71)"),map.set("yellow","rgb(241, 238, 71)"),map.set("purple","rgb(179, 71, 241)"),map.set("blue","rgb(102, 204, 255)"),map.set("gray","rgb(226, 226, 226)"),map.set("green","rgb(57, 197, 187)"),map.set("whitegray","rgb(241, 241, 241)"),map.set("pink","rgb(237, 112, 155)"),map.set("black","rgb(0, 0, 0)"),map.set("darkblue","rgb(97, 100, 159)"),map.set("heoblue","rgb(66, 90, 239)");class Cursor{constructor(){this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}move(e,t){this.cursor.style.left=`${e}px`,this.cursor.style.top=`${t}px`}create(){this.cursor||(this.cursor=document.createElement("div"),this.cursor.id="cursor",this.cursor.classList.add("hidden"),document.body.append(this.cursor));var e=document.getElementsByTagName("*");for(let t=0;t<e.length;t++)"pointer"==getStyle2(e[t],"cursor")&&this.pt.push(e[t].outerHTML);var t=map.get("green");document.body.appendChild(this.scr=document.createElement("style")),this.scr.innerHTML="* {cursor: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='1.0' fill='"+t+"'/></svg>\") 4 4, auto}"}refresh(){this.scr.remove(),this.cursor.classList.remove("hover"),this.cursor.classList.remove("active"),this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}init(){document.onmouseover=e=>this.pt.includes(e.target.outerHTML)&&this.cursor.classList.add("hover"),document.onmouseout=e=>this.pt.includes(e.target.outerHTML)&&this.cursor.classList.remove("hover"),document.onmousemove=e=>{null==this.pos.curr&&this.move(e.clientX-8,e.clientY-8),this.pos.curr={x:e.clientX-8,y:e.clientY-8},this.cursor.classList.remove("hidden")},document.onmouseenter=e=>this.cursor.classList.remove("hidden"),document.onmouseleave=e=>this.cursor.classList.add("hidden"),document.onmousedown=e=>this.cursor.classList.add("active"),document.onmouseup=e=>this.cursor.classList.remove("active")}render(){this.pos.prev?(this.pos.prev.x=Math.lerp(this.pos.prev.x,this.pos.curr.x,.15),this.pos.prev.y=Math.lerp(this.pos.prev.y,this.pos.curr.y,.15),this.move(this.pos.prev.x,this.pos.prev.y)):this.pos.prev=this.pos.curr,requestAnimationFrame((()=>this.render()))}}CURSOR=new Cursor;