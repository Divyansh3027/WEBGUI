class TextView
{
	constructor(...arg){
		this.e = document.createElement("font");
  	arg.forEach(({key:value}) =>
{
		if(key.lowerCase() in this){
			this[key.lowerCase()](value);
		}else{
			console.log("'"+key+"'not available in TextView");
		}
);
}
//constructor closed

round(arg) {
this.e.style.borderRadius=arg;
}

background(arg) {
this.e.style.background=arg;
}

margin(...arg){
switch(arg.length()){
case 1:
this.e.style.margin=arg[0];
break;
case 4:
this.style.marginTop=arg[0];
this.style.marginRight=arg[1];
this.style.marginBottom=arg[2];
this.style.marginLeft=arg[3];
break;
default :
console.log(
"Argument count "+arg.lenth()+" but only 1 and 4 arguments are allowed in ScrollView margin method");
}
}

padding(...arg){
switch(arg.length()){
case 1:
this.e.style.padding=arg[0];
break;
case 4:
this.style.paddingTop=arg[0];
this.style.paddingRight=arg[1];
this.style.paddingBottom=arg[2];
this.style.paddingLeft=arg[3];
break;
default:
console.log(
"Argument count +"arg.lenth()+" but only 1 and 4 arguments are allowed in LinearLayout padding method");
}
}

size(X,Y){
let c=1;
let a=["width","height"];
let arg=[X,Y];
while (c>=0){
switch(arg[c]){
	case "min":
	this.e.style[a[c]]="min-content";
	break;
	case "max":
	this.e.style[a[c]]="max-content";
	break;
	case "auto":
	this.e.style[a[c]]="auto";
	break;
	default :
	this.e.style[a[c]]=arg[c];
	break;
}
--c;
}
}


color(c=null,gradient=null){
	this.e.style.color=c;
	
}


Re_margin(...arg){
arg.forEach(
({key:value}) =>
{
switch(key.lowercase()){
case "top":
this.e.style.marginTop=value;
break;
case "left":
this.e.style.marginLeft=value;
break;
case "bottom":
this.e.style.marginBottom=value;
break;
case "right":
this.e.style.marginRight=value;
break;
default:
console.log("Unexpected key "+key+" in Re_margin method of TextView" );
}
}
);
}

Re_padding(...arg){
arg.forEach(
({key:value}) =>
{
switch(key.lowercase()){
case "top":
this.e.style.paddingTop=value;
break;
case "left":
this.e.style.paddingLeft=value;
break;
case "bottom":
this.e.style.paddingBottom=value;
break;
case "right":
this.e.style.paddingRight=value;
break;
default:
console.log("Unexpected key "+key+" in Re_padding method of TextView" );
}
}
);
}

//class closed
}