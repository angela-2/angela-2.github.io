!function(t){function e(i){if(s[i])return s[i].exports;var a=s[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){s(1),s(2),s(3),t.exports=s(4)},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=document.getElementById("canvas"),a=i.getContext("2d"),o="rgba(0, 255, 255, 1)";i.width=window.innerWidth,i.height=window.innerHeight,i.style.display="block";var n={number:Math.round(i.width*i.height/1250),array:[]},d=function t(){var e=this;s(this,t),this.x=Math.random()*i.width,this.y=Math.random()*i.height,this.xSpeed=.6*(-.5+Math.random()),this.ySpeed=.6*(-.5+Math.random()),this.radius=Math.random(),this.create=function(){a.fillStyle=o,a.strokeStyle=o,a.beginPath(),a.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),a.fill()},this.animate=function(){e.y<0||e.y>i.height?e.ySpeed=-e.ySpeed:(e.x<0||e.x>i.width)&&(e.xSpeed=-e.xSpeed),e.x+=e.xSpeed,e.y+=e.ySpeed}},c=function(){for(var t=0;t<n.number;t++){n.array.push(new d);var e=n.array[t];e.create()}};c();var l=function t(){a.clearRect(0,0,i.width,i.height);for(var e in n.array)n.array[e].animate(),n.array[e].create();requestAnimationFrame(t)};l(),window.addEventListener("resize",function(){a.clearRect(0,0,i.width,i.height),i.width=window.innerWidth,i.height=window.innerHeight,n.number=Math.round(i.width*i.height/1250),n.array=[],c()},!0)},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=s(3),o=i(a),n=document.getElementById("about"),d=document.getElementById("projects"),c=document.querySelector("body"),l=document.getElementById("largeImageDiv"),r=document.getElementById("contact"),h=document.getElementById("abt"),u=document.getElementById("prj"),m=document.getElementById("con"),p=document.getElementById("aboutDiv"),v=document.getElementById("projectDiv"),f=document.getElementById("contactDiv"),L=document.getElementById("nav"),w=document.getElementById("projectList"),y=document.getElementById("home-header"),g=document.getElementById("footer"),b=document.getElementById("heading"),j="",k=!1,E=[],I=[],x=!1,T=!1,B=!1,S="",D=document.getElementById("tooltip"),H=document.getElementById("tooltipText");h.onmouseover=function(){n.classList.remove("hidden"),n.classList.add("show")},h.onmouseout=function(){x||n.classList.remove("show")},u.onmouseenter=function(){d.classList.remove("hidden"),d.classList.add("show")},u.onmouseleave=function(){x||d.classList.remove("show")},m.onmouseover=function(){r.classList.remove("hidden"),r.classList.add("show")},m.onmouseout=function(){x||r.classList.remove("show")},l.onclick=function(){l.classList.remove("showImage"),l.classList.add("hideImage")};var M=function(t){var e=document.getElementById("imageDiv");l.classList.remove("hideImage"),l.classList.add("showImage"),e.src=t},C=function(t){if(t.images){if(E.indexOf(t.title)>-1)return;E.push(t.title),t.images.map(function(e){var s=document.createElement("img"),i=t.images.indexOf(e);s.setAttribute("src",e),s.setAttribute("alt",t.title+" - image"),s.setAttribute("id",t.title+"-"+i),s.onclick=function(){M(e)},document.getElementById("images-"+t.title).appendChild(s)})}if(t.tech){if(I.indexOf(t.title)>-1)return;I.push(t.title),t.tech.map(function(e){var s=document.createElement("div");e.text?(s.innerHTML=e.text+"<p>"+e.name+"</p>",s.setAttribute("class","techList")):s.innerHTML="<div class='techList'><i class=\"techIcon homeIcon prjFont "+e.id+'" aria-hidden="true"></i>'+e.name+"</div>",document.getElementById("techList-"+t.title).appendChild(s)})}},A=function(){B=!0,o.default.map(function(t){var e=document.createElement("li"),s=document.createElement("div"),i=o.default.indexOf(t),a="",n="",d="",c="",l="",r="",h="";0!==i&&(a="<p class='previous'><a href=#/projects/"+o.default[i-1].title+"><i class='fa fa-chevron-left projectNav' aria-hidden='true'></i></a></p>"),i!==o.default.length-1&&(n="<p class='next'><a href=#/projects/"+o.default[i+1].title+"><i class='fa fa-chevron-right projectNav' aria-hidden=\"true\"></i></a></p>"),t.description&&(d=t.description),t.link&&(c="<p class='dLink'><a href="+t.link+" target=\"_blank\"><button class='codeBtn'>View Website</button></a></p>"),t.link&&"api-projects"===t.id&&(c="<div class='col-left api-left'><p><a target=\"_blank\" href="+t.link[0].link+">"+t.link[0].name+"</a></p><p><a href="+t.link[1].link+">"+t.link[1].name+"</a></p><p><a href="+t.link[2].link+">"+t.link[2].name+"</a></p><p><a href="+t.link[3].link+">"+t.link[3].name+"</a></p></div>\n\t\t\t\t\t<div class='col-right api-right'><p><a target=\"_blank\" href="+t.code[0]+">Code</a></p><p><a href="+t.code[1]+">Code</a></p><p><a href="+t.code[2]+">Code</a></p><p><a href="+t.code[3]+">Code</a></p></div>"),t.code&&"api-projects"!==t.id&&(l="<p class='cLink'><a href="+t.code+" target=\"_blank\"><button class='codeBtn'>View Code</button></a></p>"),t.codepen&&(l="<p class='pLink'><a href="+t.codepen+" target=\"_blank\"><button class='codeBtn'>View Code & Demo</button></a></p>"),"api-projects"!==t.id&&(r="<div class='codeLink'>\n\t\t\t\t\t\t\t"+l+"\n\t\t\t\t\t\t\t"+c+"\n\t\t\t\t\t\t</div>"),"api-projects"===t.id&&(r="<div class='api-CodeLink container'>\n\t\t\t\t\t\t\t"+c+"\n\t\t\t\t\t\t</div>"),h=t.svg?t.svg:"<div class='project-svg'></div>",e.setAttribute("id",t.id),e.setAttribute("class","project"),w.appendChild(e),document.getElementById(t.id).innerHTML="<a href=#/projects/"+t.title+">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='projectDiv' id="+t.listId+">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='overlay'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class='text type'>"+t.type+"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class='text title'>"+t.name+"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class='text listDescription'>"+t.listDescription+"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class='text listTech'>"+t.listTech+'</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\'text read\'>See More</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\'arrows\'><i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>',s.setAttribute("id",t.title),s.setAttribute("class","projectPanel displayHide"),b.appendChild(s);var u=document.getElementById(t.title);u.innerHTML="<div class='titleBar'>\n\t\t\t\t\t\t\t\t\t<div class='titleContainer'>\n\t\t\t\t\t\t\t\t\t\t<div class='prjBtns'>\n\t\t\t\t\t\t\t\t\t\t\t"+n+"\n\t\t\t\t\t\t\t\t\t\t\t"+a+"\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class='prjTitle'>"+t.name+"</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='scrollDiv'>\n\t\t\t\t\t\t\t\t\t<div class='projectIcon'>\n\t\t\t\t\t\t\t\t\t\t"+h+"\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='description'>\n\t\t\t\t\t\t\t\t\t\t<p>"+d+"</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t"+r+"\n\t\t\t\t\t\t\t\t\t<div class='toolbox'>\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t<h3 class='techTitle'>Built With</h3>\n\t\t\t\t\t\t\t\t\t\t<div class='button container projectTech' id='techList-"+t.title+"'>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='project-images' id=\"images-"+t.title+"\"></div>\n\t\t\t\t\t\t\t  \t\t<a href=#/projects><button class='codeBtn'>View All Projects</button></a>\n\t\t\t\t\t\t\t  \t <div>"})},P=function(t,e){H.innerHTML=t,D.classList.add("show"),D.classList.remove("hide"),"Error"===e?D.classList.add("error"):D.classList.add("success"),setTimeout(function(){D.classList.add("hide"),D.classList.remove("show"),D.classList.remove("error"),D.classList.remove("success")},3e3)},_=function(){x?(c.scrollTop=0,c.classList.add("no-scroll")):(c.classList.remove("no-scroll"),c.scrollTop=0)},O=window.location.hash.split("/"),N=function(t){var e=[];for(var s in o.default)o.default[s].title===t&&e.push(s);return e},V=function(t){"about"===t?(p.classList.remove("showDiv"),n.classList.remove("show"),setTimeout(function(){"about"!==S&&(p.classList.remove("displayShow"),p.classList.add("displayHide"))},900)):"projects"===t?(v.classList.remove("showDiv"),d.classList.remove("show"),setTimeout(function(){"projects"!==S&&(v.classList.remove("displayShow"),v.classList.add("displayHide"))},900)):"contact"===t&&(f.classList.remove("showDiv"),r.classList.remove("show"),setTimeout(function(){"contact"!==S&&(f.classList.remove("displayShow"),f.classList.add("displayHide"))},900))},W=function(){if(O[1]&&""!==O[1])switch(O[1]){case"about":S="about",setTimeout(function(){x=!0,_(),F(),p.classList.add("displayShow"),p.classList.remove("displayHide"),setTimeout(function(){p.classList.add("showDiv"),n.classList.remove("hidden"),n.classList.add("show")},20)},500);break;case"projects":if(B||A(),S="projects",setTimeout(function(){x=!0,_(),F(),v.classList.add("displayShow"),v.classList.remove("displayHide"),setTimeout(function(){v.classList.add("showDiv"),d.classList.remove("hidden"),d.classList.add("show")},20)},500),O[2]&&!T){var t=N(O[2]);if(void 0===t[0])window.location.hash="/projects",P("Page does not exist.","Error");else{var e=t[0];C(o.default[e]),j=document.getElementById(O[2]),j.classList.add("displayShow"),j.classList.remove("displayHide"),setTimeout(function(){T=!0,j.classList.add("showDiv")},750)}}break;case"contact":S="contact",setTimeout(function(){x=!0,_(),F(),f.classList.add("displayShow"),f.classList.remove("displayHide"),setTimeout(function(){f.classList.add("showDiv"),r.classList.remove("hidden"),r.classList.add("show")},20)},500);break;default:window.location.hash="",P("Page does not exist.","Error")}else console.log(O)},q=function(t){switch(t){case"about":p.classList.remove("showDiv"),n.classList.add("hidden"),n.classList.remove("show"),setTimeout(function(){"about"!==S&&(p.classList.remove("displayShow"),p.classList.add("displayHide"))},600);break;case"projects":B||A(),v.classList.remove("showDiv"),d.classList.add("hidden"),d.classList.remove("show"),setTimeout(function(){"projects"!==S&&(v.classList.remove("displayShow"),v.classList.add("displayHide"))},600);break;case"contact":f.classList.remove("showDiv"),r.classList.add("hidden"),r.classList.remove("show"),setTimeout(function(){"contact"!==S&&(f.classList.remove("displayShow"),f.classList.add("displayHide"))},600);break;default:j.classList.remove("showDiv"),setTimeout(function(){j.classList.add("displayHide"),j.classList.remove("displayShow"),j=""},600),T=!1}},F=function(){if(!k&&x)y.classList.remove("hideNav"),g.classList.add("fNav"),L.classList.remove("hidden"),L.classList.add("show"),k=!0;else{if(k&&x)return;k&&!x&&(L.classList.remove("show"),k=!1)}},R=function(){var t=window.location.hash.split("/");if(t[1]&&""!==t[1]&&"/"!==t[1])switch(t[1]){case"about":""!==S&&q(S),""!==j&&T&&q(j),x=!0,_(),F(),S="about",p.classList.add("displayShow"),p.classList.remove("displayHide"),setTimeout(function(){p.classList.add("showDiv"),n.classList.remove("hidden"),n.classList.add("show")},50);break;case"projects":if(B||A(),""!==S&&"projects"!==S&&q(S),t[2]&&!T){var e=N(t[2]);void 0===e[0]?(window.location.hash="/projects",P("Page does not exist.","Error")):(j=document.getElementById(t[2]),T=!0,j.classList.add("displayShow"),j.classList.remove("displayHide"),setTimeout(function(){j.classList.add("showDiv")},50),C(o.default[e]))}else if(""!==j&&T&&!t[2])q(j);else if(t[2]&&T&&t[2]!==j){var s=N(t[2]);if(void 0===s[0])window.location.hash="/projects",P("Page does not exist.","Error");else{var i=[];i.push(j),j.classList.remove("showDiv"),setTimeout(function(){i[0].classList.remove("displayShow"),i[0].classList.add("displayHide")},600),j=document.getElementById(t[2]),C(o.default[s]),j.classList.add("displayShow"),j.classList.remove("displayHide"),setTimeout(function(){j.classList.add("showDiv")},50)}}x=!0,_(),F(),S="projects",v.classList.add("displayShow"),v.classList.remove("displayHide"),setTimeout(function(){v.classList.add("showDiv"),d.classList.remove("hidden"),d.classList.add("show")},50);break;case"contact":""!==S&&"contact"!==S&&q(S),""!==j&&T&&q(j),x=!0,_(),F(),S="contact",f.classList.add("displayShow"),f.classList.remove("displayHide"),setTimeout(function(){r.classList.remove("hidden"),r.classList.add("show"),f.classList.add("showDiv")},50);break;default:""!==j&&T&&q(j),x=!1,_(),F(),V(S),S="",window.location.hash="",P("Page does not exist.","Error")}else""!==j&&T&&q(j),x=!1,_(),F(),V(S),S=""};window.onhashchange=R,W()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=[];e.default=s},function(t,e){}]);