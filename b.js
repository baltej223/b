
Object.defineProperty(String.prototype, "id", {
  value() {
    if (this.slice(0,1).includes("#")){
     return true;
    }
    else{
      return false;
    }
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(String.prototype, "class", {
  value() {
    if (this.slice(0,1).includes(".")){
     return true;
    }
    else{
      return false;
    }
  },
  writable: true,
  configurable: true,
});
function get(x,y){
if(x.id()){
  //an id
  x = x.replace("#","");
   return document.getElementById(x);
}
 if(x.class()){
  //its a class
  x = x.replace(".","");
  if (y != null){
    return document.getElementsByClassName(x)[y];
 }
}
else {
   //tag name
   if(y != null){
     return document.getElementsByTagName(x)[y];
   }
   else{
    console.log('index not provided');
   }
 }
}

function call(call_funcion){
setTimeout(call_funcion,1);
}
function hide(ids,Index){
if (ids.class()){
  if (index != null | undefined){
    return document.getElementsByClassName(idOrClass)[Index].style.display="none"; 
  }
  else{
    console.error("index of clas not provided at hide()");
  }
}
if(ids.id()){
  return document.getElementById(idOrClass).style.display="none";
}
}
function unhide(hg){
  hb.style.display="block";
}
function del(del){
  del.outerHTML=null;
}
function createElement(element,iClass){
  var ele = document.createElement(element);
  if (iClass.class()){
    ele.setAttribute("class",iClass.replace(".",""));
    document.body.appendChild(ele);    
  }
  if (iClass.id()){
    ele.setAttribute("id",iClass.replace("#",""));
    document.body.appendChild(ele);
  }
}
function print(x,y,z) {
  //usage print("what to write" , "<id>|class" ,"index if class");
  if (y.id()){
    y = y.replace("#","");
    document.getElementById(y).innerHTML=x;
  }
  if (y.class()){
    y = y.replace(".","");
    document.getElementsByClassName(y)[z].innerHTML=x;}
if(z === undefined){ 
  var ejo = document.getElementsByClassName(y);
  for (var i = 0; i < ejo.length; i++) {
    ejo[i].innerHTML = x;
}
}
}

Object.defineProperty(Element.prototype, "hide", {
  value() {
      this.style.display = "none";
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(Element.prototype, "del", {
  value() {
      this.outerHTML=null;
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(Element.prototype, "unhide", {
  value() {
    this.style.display = "block";
  },
  writable: true,
  configurable: true,
});

window.onresize = resize;
function resize(func)
{
 call(func);
}
Object.defineProperty(Element.prototype, "center", {
  value() {
    this.style.marginLeft='auto';
    this.style.marginRight='auto';
    this.style.textAlign = "center";
  },
  writable: true,
  configurable: true,
});
Object.defineProperty(Element.prototype, "left", {
  value() {
    this.style.float='left';
  },
  writable: true,
  configurable: true,
});
Object.defineProperty(Element.prototype, "right", {
  value() {
    this.style.float='right';
  },
  writable: true,
  configurable: true,
});
Object.defineProperty(String.prototype, "replaceAll", {
  value(what,wf) {
    let aaa = this.split(what);
    return aaa.join(wf);
  },
  writable: true,
  configurable: true,
});
Object.defineProperty(Element.prototype, "print", {
  value(thD) {
    this.innerHTML=thD;
  },
  writable: true,
  configurable: true,
});
Object.defineProperty(Object.prototype, "get", {
  value(bfb) {
    return get(bfb);
  },
  writable: true,
  configurable: true,
});
function quadEq(a,b,c){
    return `${Number(-b+Math.sqrt(b*b-4*a*c))/(2*a)},${Number(-b-Math.sqrt(b*b-4*a*c))/(2*a)}`;
  }
  Object.defineProperty(Element.prototype, "injectHTML", {
    value(htM) {
      var d2 = `${this.innerHTML}\n ${htM}`;
      this.innerHTML = d2;
    },
    writable: true,
    configurable: true,
  });
//created by BALTEJ SINGH.
