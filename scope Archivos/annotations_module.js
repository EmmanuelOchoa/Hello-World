(function(g){var window=this;var Uoa=function(a,b,c,d){var e=a||window.document;return g.Lk(e,b,function(a){var b=g.nf(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})},m4=function(a,b,c,d){return Uoa(a,b,c,function(a){return g.lh(a,d)})},n4=function(a,b){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);
var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e},o4=function(a){var b=g.pm(a.g).Ua(),b=new g.Bf(0,0,b.width,b.height);
if(a.B.o&&!g.N1(a)){if(g.V(a.g).jc){var c=g.n1(a)?69:48;b.top+=c;b.height-=c}a.A&&(b.height-=g.n1(a.A.A)?72:50)}return b},p4=function(a){var b={};
void 0!==a.g?b.trackingParams=a.g:(b.veType=a.A,null!=a.o&&(b.veCounter=a.o));return b},q4=function(a){a.V("cardstatechange",g.ym(a)&&g.zm(a)?1:0)},Voa=function(a,b,c,d){c=(0,g.z)(c,d||a.o);
b=m4(b,"change",c,"iv-card-poll-choice-input");a.g.push(b)},Woa=function(a,b,c){c=(0,g.z)(c,a.o);
b=g.Nk(b,"mouseleave",c);a.g.push(b);return b},r4=function(a){if(window.document.createEvent){var b=window.document.createEvent("HTMLEvents");
b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=window.document.createEventObject(),a.fireEvent("onclick",b)},t4=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in s4?s4[c]:n4(a,c)},u4=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;
return c?n4(a,c):0},Xoa=function(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.Ed(d),b.apply(void 0,arguments))},a)},v4=function(a,b){g.Vc.call(this);
this.Fj=a;this.wp=b;this[g.wc]=!1},w4=function(a,b){var c=":"+(g.kw.getInstance().g++).toString(36);
b.setAttribute("result",c);a.appendChild(b);return c},x4=function(a,b,c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",a);
b&&g.Gb(b,function(a,b){d.setAttribute(b,a)});
for(var e=2;e<arguments.length;e++)d.appendChild(arguments[e]);return d},C4=function(a,b,c,d){v4.call(this,a,b);
a=this.wp;b=this.na();c?(b.setAttribute("stroke",c.g),b.setAttribute("stroke-opacity",c.o),c=c.vb(),g.y(c)&&-1!=c.indexOf("px")?b.setAttribute("stroke-width",(0,window.parseFloat)(c)/Yoa(a)):b.setAttribute("stroke-width",c)):b.setAttribute("stroke","none");this.fill=d;c=this.wp;a=this.na();if(d instanceof y4)a.setAttribute("fill",d.H),a.setAttribute("fill-opacity",d.J);else if(d instanceof z4){b="lg-"+d.C+"-"+d.F+"-"+d.D+"-"+d.G+"-"+d.g+"-"+d.o;var e=b in c.o?c.o[b]:null;if(!e){var e=A4(c,"linearGradient",
{x1:d.C,y1:d.F,x2:d.D,y2:d.G,gradientUnits:"userSpaceOnUse"}),f="stop-color:"+d.g;g.ua(d.A)&&(f+=";stop-opacity:"+d.A);f=A4(c,"stop",{offset:"0%",style:f});e.appendChild(f);f="stop-color:"+d.o;g.ua(d.B)&&(f+=";stop-opacity:"+d.B);d=A4(c,"stop",{offset:"100%",style:f});e.appendChild(d);e=B4(c,b,e)}a.setAttribute("fill","url(#"+e+")")}else a.setAttribute("fill","none")},Zoa=function(a,b){return b},$oa=function(a,b){var c=w4(a,x4("feOffset",{"in":b,
dx:"-7",dy:"-7"})),c=w4(a,x4("feGaussianBlur",{"in":c,stdDeviation:"3"})),c=w4(a,x4("feColorMatrix",{"in":c,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"})),d=w4(a,x4("feColorMatrix",{"in":b,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"})),d=w4(a,x4("feGaussianBlur",{"in":d,stdDeviation:"1"})),c=w4(a,x4("feComposite",{operator:"out","in":c,in2:d}));return w4(a,x4("feComposite",{operator:"over","in":b,in2:c}))},apa=function(a,b){var c=w4(a,x4("feGaussianBlur",
{"in":b,
stdDeviation:"1.8"})),c=w4(a,x4("feDiffuseLighting",{"in":c,surfaceScale:"4",diffuseConstant:"1"},x4("feDistantLight",{azimuth:"270",elevation:"15","lighting-color":"white"}))),c=w4(a,x4("feComposite",{"in":c,in2:b,operator:"in"}));return w4(a,x4("feComposite",{in2:c,"in":b,operator:"arithmetic",k2:1,k3:.5,k4:0}))},D4=function(a,b,c,d){C4.call(this,a,b,c,d)},E4=function(a,b){v4.call(this,a,b)},F4=function(){},H4=function(){G4||(G4=new g.Id(400),G4.start());
return G4},cpa=function(a){var b=[];
bpa(a,function(a,d){switch(a){case 0:b.push("M");Array.prototype.push.apply(b,d);break;case 1:b.push("L");Array.prototype.push.apply(b,d);break;case 2:b.push("C");Array.prototype.push.apply(b,d);break;case 3:var c=d[3];b.push("A",d[0],d[1],0,180<Math.abs(c)?1:0,0<c?1:0,d[4],d[5]);break;case 4:b.push("Z")}});
return b.join(" ")},I4=function(a,b,c,d){C4.call(this,a,b,c,d)},J4=function(a,b){v4.call(this,a,b)},K4=function(a,b,c,d,e){g.lw.call(this,e);
this.width=a;this.height=b;this.A=c||null;this.O=d||null},Yoa=function(a){var b=a.ci();
return b?b.width/(a.A?new g.we(a.A,a.O):a.ci()).width:0},y4=function(a,b){this.H=a;
this.J=null==b?1:b},z4=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=g.p(k)?k:null;this.B=g.p(l)?l:null},L4=function(a,b,c){var d=(c="xy"==c||"yy"==c)?360:640;
return(d+((c?a.height:a.width)-d)*b)/d},M4=function(a,b,c){var d=(c="xx"==c||"xy"==c)?640:360;
return(d+((c?a.width:a.height)-d)*b)/d},N4=function(a){a=a.replace(/^(https?:)?\/\//,"");
a=a.split("/",1);return!a||1>a.length||!a[0]?[]:a[0].toLowerCase().split(".").reverse()},dpa=function(a){return(new g.pd(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,
_c:{jsl:{h:a.gapiHintParams}},callback:b},d=g.va(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||g.$b(d,{_c:{jsl:{h:g.dh("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||g.dh("GAPI_HINT_OVERRIDE")){var e=g.Mh(window.document.location.href).gapi_jsh;e&&g.$b(d,{_c:{jsl:{h:e}}})}g.lu("client",d)}catch(f){g.ih(f)}})).then(function(){})},epa=function(a){var b={};
a.analyticsChannelData&&(b.analyticsDatas=(0,g.R)(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}},fpa=function(a){var b=x4("filter",{filterUnits:"userSpaceOnUse"}),c="SourceGraphic";
(0,g.H)(a,function(a){a:{switch(a){case "bevel":a=apa;break a;case "dropshadow":a=$oa;break a}a=Zoa}c=a(b,c)});
return b},O4=function(a,b,c,d,e){K4.call(this,a,b,c,d,e);
this.o={};this.N=g.sc&&!g.pc(526);this.J=new g.Fv(this)},A4=function(a,b,c){a=a.H.g.createElementNS("http://www.w3.org/2000/svg",b);
c&&P4(a,c);return a},P4=function(a,b){for(var c in b)a.setAttribute(c,b[c])},Q4=function(a,b,c,d){b=A4(a,"path",{d:cpa(b)});
c=new I4(b,a,c,d);a.C.na().appendChild(c.na())},B4=function(a,b,c){if(b in a.o)return a.o[b];
var d="_svgdef_"+gpa++;c.setAttribute("id",d);a.o[b]=d;a.G.appendChild(c);return d},R4=function(){this.za=[];
this.Ka=[];this.Vd=[]},S4=function(a,b,c){0==g.Ya(a.za)?a.Vd.length-=2:(a.za.push(0),a.Ka.push(1));
a.Vd.push(b,c);a.xd=a.Te=[b,c]},T4=function(a,b,c,d){var e=a.xd[0]-b*Math.cos(d*Math.PI/180)+b*Math.cos((d+90)*Math.PI/180),f=a.xd[1]-c*Math.sin(d*Math.PI/180)+c*Math.sin((d+90)*Math.PI/180);
a.za.push(3);a.Ka.push(1);a.Vd.push(b,c,d,90,e,f);a.ik=!1;a.xd=[e,f]},bpa=function(a,b){for(var c=a.Vd,d=0,e=0,f=a.za.length;e<f;e++){var k=a.za[e],l=hpa[k]*a.Ka[e];
b(k,c.slice(d,d+l));d+=l}},U4=function(a,b,c,d,e,f,k,l,m,n,q){this.x=a;
this.y=b;this.rk=c;this.A=d;this.t=e;this.H=f;this.C=k;this.D=l;this.B=m;this.o=n;this.g=q},X4=function(a,b){var c=V4(b,W4(a,new g.Bf(a.x,a.y,a.rk,a.A),b.g)),d=b.g,e=c.clone();
d&&!d.contains(c)&&(c.width<d.width?e.left=g.pe(c.left,d.left,d.left+d.width-c.width):(e.left=d.left,e.width=d.width),c.height<d.height?e.top=g.pe(c.top,d.top,d.top+d.height-c.height):(e.top=d.top,e.height=d.height));return e},W4=function(a,b,c){var d=a.C,e=a.D,f=a.g?a.g:"xy",k=M4(c,a.B,f);
a=L4(c,a.o,f);var f=640*b.width*k/100,l=360*b.height*a/100;return new g.Bf(0==d?640*b.left*k/100:0<d?d:c.width+d-f,0==e?360*b.top*a/100:0<e?e:c.height+e-l,f,l)},ipa=function(a,b,c,d){this.value=a;
this.target=b;this.showLinkIcon=c;this.g=d},Y4=function(a){return a.value?a.value:null},jpa=function(a){if(null==a)return 0;
if("never"==a)return-1;a=a.split(":");if(3<a.length)return 0;var b=0,c=1;(0,g.H)(a,function(a){a=(0,window.parseFloat)(a);0>a&&(c=-c);b=60*b+Math.abs(a)});
return c*b},Z4=function(a,b){return g.y(a)?(0,window.parseFloat)(a):b},$4=function(a,b){return"true"==a||"false"==a?"true"==a:b},a5=function(a,b,c){for(var d in b)if(b[d]==a)return a;
return c},b5=function(a){return g.y(a)?a:""},d5=function(a){this.g=a||g.mq();
c5||(c5=dpa(this.g))},kpa=function(a,b,c,d){var e={path:"/youtubei/"+a.g.innertubeApiVersion+"/"+b,
headers:{"X-Goog-Visitor-Id":g.dh("VISITOR_DATA")},method:"POST",body:g.wf(c)},f=(0,g.z)(a.B,a);c5.then(function(){f();g.u("gapi.client.request")(e).execute(d||g.w)})},e5=function(a,b,c){b.eventTimeMs=Math.round((0,g.Ol)());
b.lactMs=g.Xk();c&&(b.clientData=epa(c));g.Qq({endpoint:"log_interaction",Ux:b},a)},lpa=function(a){return g.$a(a,function(a){return"dropshadow"==a})?new g.Af(0,7,7,0):new g.Af(0,0,0,0)},mpa=function(a){a=(0,g.$e)(a,function(a){return a in f5});
g.wb(a,function(a,c){return f5[a]-f5[c]});
return a},g5=function(a,b,c){this.A=a;
this.g=b;this.o=null==c?1:c},h5=function(a,b,c){this.id=a;
this.timestamp=b.timestamp||0;this.type=b.card_type;this.teaserText=b.teaser_text;this.teaserDurationMs=b.teaser_duration_ms;this.startMs=b.start_ms;this.autoOpen=b.auto_open||!1;this.pd=b.session_data||{};this.Pb=c;this.sponsored=b.sponsored||!1;a=b.tracking||{};this.o={SG:a.impression,click:a.click,close:a.close,bN:a.teaser_impression,ir:a.teaser_click};b=b.tracking_params||{};this.C=new g.iq(b.card);this.F=new g.iq(b.teaser);this.D=new g.iq(b.icon)},npa=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=k;this.B=l},i5=function(a,b,c,d,e,f,k,l,m,n,q,t,v){U4.call(this,a,b,c,d,e,l,m,n,q,t,v);
this.F=f;this.G=k},j5=function(a,b){if(!a)return null;
var c=Z4(a.x,0),d=Z4(a.y,0),e=Z4(a.w,0),f=Z4(a.h,0),k=jpa(a.t),l=Z4(a.scaleSlope,1);return b(c,d,e,f,k,Z4(a.d,0),Z4(a.px,0),Z4(a.py,0),Z4(a.scaleSlopeX,l),Z4(a.scaleSlopeY,l),a5(a.scaleDimension,opa,"xy"))},ppa=function(a,b,c){c=c.replace(/\/(u|b)\/[0-9]+/g,"");
var d=/^[0-9]+$/;a&&d.test(a)&&(c="/b/"+a+c);b&&d.test(b)&&(c="/u/"+b+c);return c},k5=function(a){var b;
(b=a)&&!(b=1<a.length?"/"==a.charAt(0)&&"/"!=a.charAt(1):"/"==a)&&(b=N4(a),b="com"==b[0]&&"youtube"==b[1]||"be"==b[0]&&"youtu"==b[1]);return b?-1==a.indexOf("/redirect?"):!1},l5=function(a){if(!a)return null;
var b=b5(a.value);if(!b)return null;var c=a5(a.target,qpa,"current");return null==c?null:new ipa(b,c,$4(a.show_link_icon,!0),null!=a.pause_on_navigation?a.pause_on_navigation:!0)},m5=function(a,b,c,d,e){a=(0,window.parseFloat)(a);
if(null!=a&&!(0,window.isNaN)(a)){if(d)return g.pe(a,b,c);if(a>=b&&a<=c)return a}return e},n5=function(a,b){if(null==a)return b;
var c=(0,window.parseInt)(a,0);if((0,window.isNaN)(c))return b;c=c.toString(16);return"#"+"000000".substring(0,6-c.length)+c},o5=function(a,b){g.cc.call(this,a);
this.x=b.o[0];this.y=b.o[1];this.z=b.o[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.F;this.state=b.g},p5=function(a){a=g.ya(a);
delete g.Zv[a];g.Tb(g.Zv)&&g.Xv&&g.Xv.stop()},q5=function(){return g.Eh("enable_youtubei_innertube")?g.Xq:d5},r5=function(a){return new g.Bf(a.left,a.top,a.right-a.left,a.bottom-a.top)},rpa=function(a,b){var c=a.top-b.y,d=b.x-a.left-a.width,e=b.y-a.top-a.height,f=a.left-b.x,k=Math.max(c,d,e,f);
if(0>k)return"i";switch(k){case c:return"t";case d:return"r";case e:return"b";case f:return"l"}return"i"},s5=function(a,b,c){if(c.length&&(b=g.Ee("g",void 0,b),b.length)){var d=mpa(c);
if(d){c="effects:"+(d?d.join("|"):"");var e=c in a.o?a.o[c]:null;e?a=e:(d=fpa(d),a=0<d.childNodes.length?B4(a,c,d):null)}else a=null;a&&b[0].setAttribute("filter","url(#"+a+")")}},t5=function(a,b){var c=g.Cf(a);
c.expand(lpa(b));return r5(c)},u5=function(a,b,c,d){var e=a.F;
e?a=new z4(e.C*b/100,e.F*c/100,e.D*b/100,e.G*c/100,e.g,e.o,e.A,e.B):(b=a.o,a=new y4(a.bgColor,d?Math.max(b,.9):b));return a},v5=function(a,b,c){var d=new R4;
S4(d,a.left+b+c,a.top+c);d.uc(a.left+a.width-b-c,a.top+c);T4(d,b,b,-90);d.uc(a.left+a.width-c,a.top+a.height-b-c);T4(d,b,b,0);d.uc(a.left+b+c,a.top+a.height-c);T4(d,b,b,90);d.uc(a.left+c,a.top+b+c);T4(d,b,b,180);d.close();return d},w5=function(){this.g=!1;
this.C=this.o=null},x5=function(a,b,c){a.o?(a.o.setSize(b,c),a.o.clear()):(b=new O4(b,c,void 0,void 0,void 0),a.o=b,a.o.dm(),a.C=g.N("DIV"),b=a.o.na(),a.C.appendChild(b));
return a.o},y5=function(a,b){this.start=a<b?a:b;
this.end=a<b?b:a},z5=function(a,b){var c="ivTriggerCondition:"+a;
return b?c+":"+b:c},spa=function(a){this.merchant=g.F(a.merchant);
this.price=g.F(a.price)},A5=function(a,b,c){h5.call(this,a,b,c);
this.imageUrl=b.image_url;this.displayDomain=b.display_domain;this.showLinkIcon=b.show_link_icon;this.g=b.button_icon_url;this.title=b.title;this.customMessage=b.custom_message;this.url=l5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url});this.A=null;b.signin_url&&(this.A=l5({target:"current",value:b.signin_url}));this.H=b.signin_title||null;this.G=b.signin_message||null},tpa=function(a,b){this.state=a;
this.g=b},upa=function(a,b,c,d){this.type=a;
this.o=b;this.g=c;this.A=d},B5=function(a){return a.o&&a.o.length?a.o[0]:a.g&&a.g.length?a.g[0]:a.A&&a.A.length?a.A[0]:null},vpa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x){this.A=a;
this.bgColor=b;this.C=c;this.g=d;this.o=e;this.G=f;this.B=k;this.textAlign=l;this.textSize=m;this.D=n;this.padding=q;this.effects=t;this.cornerRadius=v;this.F=x},wpa=function(a){if(!a)return null;
var b=Z4(a.sx,0),c=Z4(a.sy,0);return j5(a,function(a,e,f,k,l,m,n,q,t,v,x){return new i5(a,e,f,k,l,b,c,m,n,q,t,v,x)})},C5=function(a){return a?j5(a,function(a,c,d,e,f,k,l,m,n,q,t){return new U4(a,c,d,e,f,k,l,m,n,q,t)}):null},D5=function(a,b){return b?b:k5(a)?"current":"new"},E5=function(a,b,c,d){(a=Y4(a))?k5(a)?d=g.Ph(a,{feature:"iv",
src_vid:c,annotation_id:b}):(a?(b=N4(a),b="com"==b[0]&&"google"==b[1]&&"plus"==b[2]):b=!1,b&&d?(d=g.A(ppa,d.pageId,d.zc),a=new g.lg(a),g.pg(a,d(a.A)),d=a.toString()):d=a):d=null;return d},xpa=function(a){function b(a){return(0,g.$e)(a.split(/ +/),function(a){return""!=a})}
return null==a?[]:b(a)},ypa=function(a){function b(a){return null!=a&&!(0,window.isNaN)(a)}
return(a=a?new g.Af((0,window.parseFloat)(a.top),(0,window.parseFloat)(a.right),(0,window.parseFloat)(a.bottom),(0,window.parseFloat)(a.left)):null)&&b(a.top)&&b(a.right)&&b(a.bottom)&&b(a.left)?a:null},F5=function(a,b){if(null==a)return null;
if(g.sa(a)){var c=[];(0,g.H)(a,function(a){(a=b(a))&&c.push(a)});
return c}var d=b(a);return d?[d]:[]},G5=function(a){var b=/.+/;
return g.y(a)&&null!=b&&null!=a&&a.match(b)?a:""},H5=function(a){return g.ra(a)&&a.length?a[0]:a},I5=function(a,b,c,d){g.$v.call(this);
if(!g.ra(a)||!g.ra(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.A=a;this.G=b;this.duration=c;this.D=d;this.o=[];this.progress=this.F=0;this.C=null},K5=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);
a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.F=1E3/(b-a.C);a.C=b;J5(a,a.progress);1==a.progress?(a.g=0,p5(a),a.od(),a.Vj()):a.ob()&&a.yq()},J5=function(a,b){g.va(a.D)&&(b=a.D(b));
a.o=Array(a.A.length);for(var c=0;c<a.A.length;c++)a.o[c]=(a.G[c]-a.A[c])*b+a.A[c]},L5=function(a){var b=g.er()||"",c=q5();
e5(c,{click:{csn:b,visualElement:p4(a)}},void 0)},M5=function(a){return"rtl"==g.fk(a,"direction")},N5=function(){w5.call(this);
this.B=0},O5=function(a,b,c){this.g={};
this.o=!1;this.C="ivTrigger:"+a;this.A=c;zpa(b,function(a,b){var c=z5(b.state,b.g);this.A.subscribe(c,(0,g.z)(this.B,this,c,a));this.g[c]=a},this)},P5=function(a,b,c,d,e){I5.call(this,b,c,d,e);
this.element=a},Q5=function(a,b,c){h5.call(this,a,b,c);
this.J=b.image_url;this.B=b.badge_symbol||"";this.priceText=b.price_text||"";this.title=b.title;this.g=b.meta_info;this.G=!!b.is_paygated;this.H=!!b.user_has_entitlement;this.url=l5({target:b.target||"new",value:b.url})},R5=function(a,b,c){h5.call(this,a,b,c);
this.G=b.image_url;this.videoDuration=b.video_duration||null;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.B=!!b.is_live_now;this.url=l5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},S5=function(a,b,c){A5.call(this,a,b,c);
this.J=b.ypc_item_type;this.B=b.ypc_item_id;this.L=b.ypc_flow_type},T5=function(a,b,c){A5.call(this,a,b,c);
this.offers=[];a=b.offers||[];for(b=0;b<a.length;b++)this.offers.push(new spa(a[b]))},U5=function(a,b,c){h5.call(this,a,b,c);
this.B=this.id.replace(/[^a-z0-9-]/gi,"-");this.title=b.title;this.choices=b.choices;this.g=b.hasOwnProperty("old_vote")?b.old_vote:null;this.A=null;b.signin_url&&(this.A=l5({target:"current",value:b.signin_url}));this.G=b.hasOwnProperty("xsrf_token")?b.xsrf_token:null},V5=function(a,b,c){h5.call(this,a,b,c);
this.B=b.image_url;this.playlistVideoCount=b.playlist_video_count;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.url=l5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},W5=function(a,b){return g.z3&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())},X5=function(a,b,c){A5.call(this,a,b,c);
this.J=b.ypc_flow_type;this.B=b.innertube_request_params},Y5=function(a,b,c){h5.call(this,a,b,c);
this.channelId=b.channel_id;this.customMessage=b.custom_message;this.profileImageUrl=b.image_url;this.title=b.title;this.g=b.meta_info;this.url=l5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},Apa=function(a,b,c,d){this.g=a||[];
this.A=b||[];this.B=c;this.o=d;this.value=!1},zpa=function(a,b,c){(0,g.H)(a.g,g.A(b,!1),c);
(0,g.H)(a.A,g.A(b,!0),c)},Z5=function(a){if(!a)return null;
var b=a5(a.state,Bpa);a=G5(a.ref);return b?new tpa(b,a):null},Cpa=function(a,b){this.o=a;
this.g=b},Epa=function(a){if(!a)return null;
var b=a5(a.type,Dpa,"rect"),c=F5(a.rectRegion,C5),d=F5(a.anchoredRegion,wpa);a=F5(a.shapelessRegion,C5);return new upa(b,c,d,a)},$5=function(a){if(!a)return null;
var b=n5(a.fgColor,"#1A1A1A"),c=n5(a.bgColor,"#FFF"),d=n5(a.borderColor,"#000"),e=m5(a.borderWidth,0,5,!1,0),f=m5(a.bgAlpha,0,1,!1,.8),k=n5(a.highlightFontColor,"#F2F2F2"),l=m5(a.highlightWidth,0,5,!1,3),m=b5(a.textAlign),n=m5(a.textSize,3.3,30.1,!0,3.6107),q=b5(a.fontWeight),t=ypa(a.padding),v=xpa(a.effects),x=m5(a.cornerRadius,0,10,!0,0);if(a=H5(a.gradient)){var B=m5(a.x1,0,100,!0,0),E=m5(a.y1,0,100,!0,0),K=m5(a.x2,0,100,!0,100),I=m5(a.y2,0,100,!0,100),Qa=n5(a.color1,"#FFF"),Qb=n5(a.color2,"#000");
a=new npa(B,E,K,I,Qa,Qb,m5(a.opacity1,0,100,!0,100),m5(a.opacity2,0,100,!0,0))}else a=null;return new vpa(b,c,d,e,f,k,l,m,n,q,t,v,x,a)},Fpa=function(a,b,c){this.type=a;
this.trigger=b;this.url=c},a6=function(a,b){this.oa=a;
this.context=b;this.zr=!1;this.N=0},b6=function(a,b,c,d,e,f){b=new g.Nm(b,c,{id:d});
b.namespace="annotations_module";e&&(b.g||(b.g=new g.If)).subscribe("onEnter",e,a);f&&(b.g||(b.g=new g.If)).subscribe("onExit",f,a);g.Bm(a.context.o,[b])},Gpa=function(a){return(0,g.G)()-a.N},Hpa=function(a,b,c,d,e,f,k,l){var m=(0,g.z)(function(){l&&this.context.o.rd();
g.mv(b,"current"==c?"_top":void 0,d)},a);
"new"==c&&(m(),m=null);var n={};n.interval=Gpa(a);c6(a.context.logger,e,m,n,f,k);k5(b)||(a=d.itct)&&L5(new g.iq(a))},Ipa=function(a,b,c){c=(0,g.R)(c,function(a){return p4(a)});
e5(a,{visibilityUpdate:{csn:b,visualElements:c}})},Mpa=function(a){var b=g.fk(a,"fontSize"),c;
c=(c=b.match(Jpa))&&c[0]||null;if(b&&"px"==c)return(0,window.parseInt)(b,10);if(g.Me){if(String(c)in Kpa)return n4(a,b);if(a.parentNode&&1==a.parentNode.nodeType&&String(c)in Lpa)return a=a.parentNode,c=g.fk(a,"fontSize"),n4(a,b==c?"1em":b)}c=g.N("SPAN",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});a.appendChild(c);b=c.offsetHeight;g.Ye(c);return b},Opa=function(a,b){Npa(a,function(c){return new O5(a.id,c,b)})},d6=function(a,b){return b?new g.Bf(a.x+
b.left,a.y+b.top,b.width,b.height):null},e6=function(){N5.call(this)},f6=function(){w5.call(this)},g6=function(){w5.call(this)},h6=function(a,b,c){a6.call(this,a,b);
this.annotation=c;this.isActive=!1},i6=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");
P5.apply(this,arguments)},j6=function(a,b,c){this.g=a;
this.A=b;this.C=c;this.B=new g.Nt(null)},Qpa=function(a,b){var c=["ul",
"",{role:"radiogroup"}];(0,g.H)(b.choices,function(a){c.push(["li",b.B+"-"+a.index.toString(),["label","",["input","iv-card-poll-choice-input",{type:"checkbox",role:"radio",name:b.B+a.index.toString(),value:a.index.toString(),"data-poll-choice-index":a.index.toString()}],["span","iv-card-poll-choice-text",["span","iv-card-poll-choice-percent"],k6(this,"span",void 0,a.desc)]],["div","iv-card-poll-result",["div","iv-card-poll-result-bar"]]])},a);
var d={};b.A&&(d["aria-label"]=g.Q("YTP_DRAWER_POLL_TITLE_ARIA_LABEL",{POLL_TITLE:b.title}));var e=["iv-card","iv-card-poll"],d=[["div","iv-card-content",k6(a,"h2",d,b.title),["form","",["fieldset","",c]]]];b.A&&(e.push("iv-card-unavailable"),d.push(["div",["iv-card-sign-in"],["h2","",g.Q("YTP_DRAWER_POLL_SIGNIN_TITLE")],["a",["iv-card-sign-in-button","iv-button"],{href:Y4(b.A)},["span",["iv-button-content"],g.Q("YTP_SIGN_IN")]]]));e=new g.W(["div",e].concat(d));d=e.element;Ppa(b,d);Voa(a.g.g,d,g.A(a.F,
b),a);(0,g.H)(g.Fe("iv-card-poll-choice-input",d),function(a){this.g.g.T(a,"focus",g.A(this.o,!0));this.g.g.T(a,"blur",g.A(this.o,!1))},a);
b.A&&a.A(g.M("iv-card-sign-in-button",d),b.A,b.id,b.pd,b.Pb,b.o.click,5);return e},o6=function(a,b,c,d){var e=l6(a,b.url,b.id),f=b.displayDomain?["div",
"iv-card-image-text",b.displayDomain]:"",k=Rpa(a,b),l=["iv-card"];b.A&&l.push("iv-card-unavailable");e=["div",l,["a","iv-click-target",{href:e},m6(b.imageUrl,f),["div","iv-card-content",k6(a,"h2",void 0,b.title),k]]];b.A&&(e=e.concat([["div",["iv-card-sign-in"],k6(a,"h2",void 0,b.H||""),["p","",b.G],["a",["iv-card-sign-in-button","iv-button"],{href:Y4(b.A)},k6(a,"span","iv-button-content",g.Q("YTP_SIGN_IN"))]]]));e=new g.W(e);n6(a,e,b,c,d);return e},Spa=function(a,b,c){var d=l6(a,b.url,b.id),e=["yt-badge",
"standalone-ypc-badge-renderer-icon",b.H?"standalone-ypc-badge-renderer-icon-purchased":"standalone-ypc-badge-renderer-icon-available"],f={},e=b.G&&b.B?["span",e,f,b.B]:"";c=["div",["iv-card",c],["a","iv-click-target",{href:d},m6(b.J,e?["div","iv-card-image-text",e,b.priceText]:""),["div","iv-card-content",["h2","iv-card-primary-link",b.title],p6(a,b)]]];c=new g.W(c);n6(a,c,b);return c},q6=function(a,b){return b.customMessage?k6(a,"div","iv-card-message",b.customMessage):""},m6=function(a,b){var c=
["div",
"iv-card-image",{style:"background-image: url("+a+");"}];b&&c.push(b);return c},p6=function(a,b){if(!b.g||0==b.g.length)return"";
var c=["ul","iv-card-meta-info"];(0,g.H)(b.g,function(a){c.push(k6(this,"li","",a))},a);
return c},k6=function(a,b,c,d){c?g.y(c)?c={"class":c}:g.ra(c)&&(c={"class":c.join(" ")}):c={};
c.dir=g.Ot(a.B,d);return[b,c,d]},Rpa=function(a,b){if(!b.customMessage)return"";
var c=["iv-card-action","iv-card-primary-link"],d={};b.g&&(c.push("iv-card-action-icon"),d.style="background-image: url("+b.g+");");d.dir=g.Ot(a.B,b.customMessage);c=["div",c,d,["span","",b.customMessage]];b.showLinkIcon&&(c.push("\u00a0"),c.push(["span","iv-card-link-icon"]));return c},Ppa=function(a,b){var c=0;
(0,g.H)(a.choices,function(a){c+=a.count});
for(var c=c||1,d=0;d<a.choices.length;d++){var e=a.choices[d],f=g.M(a.B+"-"+e.index.toString(),b),e=e.count/c;null==a.g&&(e=0);g.P(f.getElementsByTagName("label")[0],"iv-card-poll-choice-checked",a.g==d);f.getElementsByTagName("input")[0].checked=a.g==d;g.gf(g.M("iv-card-poll-choice-percent",f),g.Q("YTP_DRAWER_POLL_PERCENT",{PERCENT:Math.floor(100*e).toFixed(0)}));g.Zj(g.M("iv-card-poll-result-bar",f),"transform","scaleX("+e.toFixed(2)+")")}g.P(b,"iv-card-poll-voted",null!=a.g);g.P(b,"iv-card-poll-expanded",
null!=a.g&&1<a.choices.length)},Tpa=function(a,b,c,d){d?(c&&a.g.videoData.Da||a.g.o.rd(),a.g.o.isFullscreen()&&g.rm(a.g.o),c6(a.g.logger,b.Pb,d,void 0,b.o.click,5)):b.url&&a.C(b.url,b.id,b.pd,b.Pb,b.o.click||[],5)},l6=function(a,b,c){return b?E5(b,c,a.g.videoData.videoId,a.g.C):null},n6=function(a,b,c,d,e){c.A&&Upa(a,g.Fe("iv-card-sign-in-button",b.element),c,c.A,e);
c.url&&Upa(a,g.Fe("iv-click-target",b.element),c,c.url,d)},Upa=function(a,b,c,d,e){(0,g.H)(b,function(a){if(e){var b=(0,g.z)(function(a){a.stopPropagation();
a.preventDefault();e();return!1},this);
this.g.g.T(a,"click",b)}else d&&this.A(a,d,c.id,c.pd,c.Pb,c.o.click,5)},a)},Vpa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x,B){this.id=a;
this.author=b;this.type=c;this.style=d;this.B=e;this.o=f;this.A=k||[];this.F=l||[];this.g=m;this.D=n;this.C=q;this.htmlBlob=v;this.data=x;this.Pb=B},r6=function(a){return(a=Wpa(a,function(a){return"openUrl"==a.type&&null!=a.url}))?a.url:null},t6=function(a){return s6(a,function(a){return"click"==a.trigger})},s6=function(a,b){return(0,g.wh)(a.A,b,void 0)},Xpa=function(a,b,c){(0,g.H)(a.A,b,c)},Wpa=function(a,b){return g.$a(a.A,b,void 0)},Ypa=function(a,b,c){(0,g.H)(a.F,b,c)},Npa=function(a,b){(0,g.R)(a.F,
b,void 0)},u6=function(a){return(a=Zpa(a))?B5(a):null},Zpa=function(a){a.o?(a=a.o,a=a.g.length?a.g[0]:null):a=null;
return a},$pa=function(a,b){var c=u6(a);
return c&&b?L4(b,c.o,c.g?c.g:"xy"):1},aqa=function(a){if(!a)return null;
var b=F5(a.condition,Z5),c=F5(a.notCondition,Z5),d=$4(a.show_delay,!1);a=$4(a.hide_delay,!1);return b||c?new Apa(b,c,d,a):null},bqa=function(a,b){this.g=a;
this.o=b||null},V4=function(a,b){var c;
c=a.o?X4(a.o,new bqa(a.g)):a.g;var d=b.clone(),e=c.left;c=c.top;e instanceof g.te?(d.left+=e.x,d.top+=e.y):(d.left+=e,g.ua(c)&&(d.top+=c));return d},eqa=function(a){if(!a)return null;
var b=a5(a.type,cqa),c=a5(a.trigger,dqa),d=l5(H5(a.url));H5(a.subscribeData);return b?new Fpa(b,c,d):null},fqa=function(a){return 3*a*a-2*a*a*a},gqa=function(a){return Math.pow(a,3)},hqa=function(a,b){return(b&8&&M5(a)?b^4:b)&-9},v6=function(a){var b=g.er()||"";
Ipa(q5(),b,a)},iqa=function(a,b,c,d){b={csn:b,
parentVisualElement:p4(c),visualElements:(0,g.R)(d,function(a){return p4(a)})};
e5(a,{attachChild:b},void 0)},jqa=function(a){var b=0;
-1!=a.indexOf("h")&&(a=a.split("h"),b=3600*a[0],a=a[1]);-1!=a.indexOf("m")&&(a=a.split("m"),b=60*a[0]+b,a=a[1]);-1!=a.indexOf("s")?(a=a.split("s"),b=1*a[0]+b):b=1*a+b;return b},w6=function(a,b){b.match(/\sstyle\s*=/);
a.innerHTML=b},x6=function(a,b,c){this.A=a;
this.annotation=b;this.g=c;this.o=null;this.C=this.isVisible=!1;Opa(b,a)},kqa=function(a){a.A.unsubscribe("resize",a.D,a);
a.A.unsubscribe("onVideoAreaChange",a.B,a)},y6=function(a){a.o&&(a.o.stop(),a.o=null)},lqa=function(a,b,c,d,e){this.g=a;
this.ba=b;this.D=c;this.ga=d;this.ea=e;this.N=!1;this.F=new g.fl(this);this.P=this.C=this.G=this.O=this.o=null;this.ca=!1;this.da=this.J=this.L=null;this.xq=new g.iw(this.FP,100,this);this.H=new g.Md(this.Cv,500,this);this.X=this.A=this.B=null},mqa=function(a,b){var c=(0,g.z)(function(a,c,f){c=f?z6(this,c,(0,g.z)(f,this)):z6(this,c);
this.F.T(b,a,c)},a);
c("mouseover","d",a.uA);c("mouseout","c",a.Hg);c("click","a");c("touchend","a")},nqa=function(a){if(a.g.C){var b;
s6(a.g,function(a){return"close"==a.type})?b=a.o:(a.B=g.N("DIV","annotation-close-button"),g.S(a.B,!1),g.hh(a.B,"annotation_id",a.g.id),a.o.appendChild(a.B),b=a.B);
var c=function(a){a.stopPropagation()};
a.F.T(b,"click",z6(a,"b",c));a.F.T(b,"touchend",z6(a,"b",c))}},z6=function(a,b,c){return(0,g.z)(function(a){if(this.ea)c&&c(a);
else if(a.event.target instanceof window.Element){var d=a.event.target;g.S(d,!1);try{var f=window.document.elementFromPoint(a.event.clientX,a.event.clientY);if(g.pf(f,"annotation")){var k=window.document.createEvent("MouseEvent");k.initMouseEvent(a.event.type,a.event.bubbles,a.event.cancelable,a.event.view,a.event.detail,a.event.screenX,a.event.screenY,a.event.clientX,a.event.clientY,a.event.ctrlKey,a.event.altKey,a.event.shiftKey,a.event.metaKey,a.event.button,a.event.relatedTarget);f.dispatchEvent(k)}}finally{g.S(d,
!0)}}d=g.uk(a.target);a=new g.te(a.clientX,a.clientY);"c"==b&&d.contains(a)||this.ga.V(b,this.g)},a)},B6=function(a){if(a.o||a.A){var b=u6(a.g);
if(b){var c=A6(a);if(a.o){var b=X4(b,c),d=g.aZ(g.pm(a.D));g.sk(a.o,b.width,b.height);g.hk(a.o,b.left,b.top);a.O=new g.Bf(d.left+b.left,d.top+b.top,b.width,b.height);var e;e=(e=u6(a.g))&&d?M4(d,e.B,e.g?e.g:"xy"):1;var f=$pa(a.g,d),d=a.g.g;d.padding?d=d.padding:(d="speech"==a.g.style?1.6:.8,d=new g.Af(d,d,d,d));d=new g.Af(360*d.top*f/100,640*d.right*e/100,360*d.bottom*f/100,640*d.left*e/100);a.C&&(d.right+=1.5*c.g.height/100);a.o.style.padding=d.top+"px "+d.right+"px "+d.bottom+"px "+d.left+"px";"label"==
a.g.style&&a.G&&(a.G.style.padding=a.o.style.padding);var d=c.g,k=!1,l=0,m=0,n;n=g.aZ(g.pm(a.D));var q=o4(a.D.app.A.G);g.Df(n,q)?n=null:(q.top+=20,q.height-=40,"player_relative"!=a.g.D&&(q.left-=n.left,q.top-=n.top),n=q);n&&(l=n.top-(b.top+b.height),m=b.top-(n.top+n.height),k=0<l||0<m);if(k&&n){d=n;e=l;var f=m,t;a.C&&(m=oqa(a,23,b,e,f),a.B&&(t=43-m.width,0<t&&(b.left+m.left-t>d.left&&(m.left-=t),m.width+=t)),t=m,g.sk(a.C,m.width,m.height),g.hk(a.C,m.left,m.top));a.B&&(t?b=new g.te(t.left+t.width-
23-18,a.ca?t.top+2:t.top+t.height-18-2):(t=oqa(a,18,b,e,f),b=new g.te(t.left,t.top),g.sk(a.B,t.width,t.height)),g.hk(a.B,b));a.P=new g.Bf(a.O.left+t.left,a.O.top+t.top,t.width,t.height);a.L=a.F.T(g.pm(a.D),"mousemove",a.ZJ)}else a.C&&(t=e/f*d.height*4.2/100,t=new g.we(t,t),"highlight"==a.g.type||"label"==a.g.style?(e=1.5*d.height/100,t=new g.Bf(b.width-t.width-e,b.height-t.height-e,t.width,t.height)):t=new g.Bf(b.width-t.width-3*d.height/100,(b.height-t.height)/2,t.width,t.height),g.sk(a.C,t.width,
t.height),g.hk(a.C,t.left,t.top)),a.B&&(t=9<=d.left+d.width-(b.left+b.width),e=9<=b.top-d.top,g.hk(a.B,t&&e?new g.te(b.width-9,-9):t?new g.te(b.width-9,45<b.height?9:b.height-9):e?new g.te(45<b.width?b.width-9-18:-9,-9):b.width/d.width>b.height/d.height?new g.te(45<b.width?b.width-9-18:-9,b.height-9):new g.te(-9,45<b.height?9:b.height-9)))}a.A&&a.A.A(a.g,c);if(a.o){c=a.o;b=a.g.g;c.style.color="highlightText"==a.g.style?b.G:b.A;t=g.aZ(g.pm(a.D));c.style.fontSize=360*b.textSize*$pa(a.g,t)/100+"px";
t=a.g.style;c.style.textAlign=b.textAlign?b.textAlign:"title"==t||"highlightText"==t?"center":"left";b.D&&(c.style.fontWeight=b.D);a=a.o;c=a.style.overflow;t=(b=g.M("annotation-link-icon",a))?g.wk(b):!1;e=(d=g.M("annotation-close-button",a))?g.wk(d):!1;t&&g.S(b,!1);e&&g.S(d,!1);m=f="";if(l=g.M("inner-text",a))f=l.style.overflow,m=l.style.position,l.style.overflow="visible",l.style.position="static";a.style.overflow="scroll";if(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth){n=k=Mpa(a);
for(var q=5,v=Math.floor(k/2);v;)a.scrollHeight<=a.offsetHeight&&a.scrollWidth<=a.offsetWidth?(q=n,n=Math.min(n+v,k)):n=Math.max(n-v,q),v=Math.floor(v/2),a.style.fontSize=n+"px";n!=q&&(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth)&&(a.style.fontSize=q+"px")}a.style.overflow=c;l&&(l.style.overflow=f,l.style.position=m);e&&g.S(d,!0);t&&g.S(b,!0)}}}},oqa=function(a,b,c,d,e){var f=0<e;
b=new g.Bf(0,c.height-b,Math.max(c.width,b),b);0<d&&(b.top=c.height,20<d&&(b.height+=d-20),g.O(a.o,"annotation-extend-down"));f&&(b.top=-b.height,20<e&&(c=e-20,b.top-=c,b.height+=c),g.O(a.o,"annotation-extend-up"),a.ca=!0);return b},C6=function(a){return"label"!=a.g.style||a.A.g},A6=function(a){var b;
b=g.aZ(g.pm(a.D));if("player_relative"==a.g.D){var c=g.pm(a.D).Ua();b=new g.Bf(-b.left,-b.top,c.width,c.height)}else b=new g.Bf(0,0,b.width,b.height);return new bqa(b,a.X?u6(a.X):null)},D6=function(a,b,c){h6.call(this,a,b,c);
this.F=this.B=this.G=!1;this.D=5E3;this.A=null;this.mj=g.N("DIV","iv-promo-contents");this.g=this.o=this.fd=null;this.C=new g.Md(function(){this.fd.setAttribute("aria-hidden",!0);g.S(this.o,!1);g.S(this.g,!0)},700,this)},pqa=function(a){var b=a.annotation.data,c;
if("cta"==a.annotation.style)c=6;else if("video"==a.annotation.style||"playlist"==a.annotation.style)c=7;a.D=b.collapse_delay_ms||a.D;var d=["iv-promo","iv-promo-inactive"];a.na().setAttribute("aria-hidden",!0);a.na().setAttribute("aria-label",g.Q("YTP_INVIDEO_PROMOTION_ARIA_LABEL"));a.na().tabIndex=0;var e=r6(a.annotation),f;if(b.image_url){f=g.N("DIV",["iv-promo-img","iv-click-target"]);var k=g.N("IMG",{src:b.image_url,"aria-hidden":"true"});f.appendChild(k);b.video_duration&&!b.is_live?(k=g.N("SPAN",
"iv-promo-video-duration",b.video_duration),f.appendChild(k)):b.playlist_length&&(k=g.N("SPAN","iv-promo-playlist-length",b.playlist_length.toString()),f.appendChild(k));e&&a.Ri(f,e,a.annotation.id,b.session_data,a.annotation.Pb,void 0,c)}e?a.fd=g.N("A",{href:Y4(e),"class":"iv-promo-txt"}):a.fd=g.N("DIV","iv-promo-txt");var l,m,n,q;switch(a.annotation.style){case "cta":case "website":l=g.N("P",null,g.N("STRONG",null,b.text_line_1));m=g.N("P",null,g.N("SPAN","iv-promo-link",b.text_line_2));b.text_line_3&&
(d.push("iv-promo-website-card-cta"),n=g.N("P",null,g.N("SPAN","iv-promo-action-text",b.text_line_3)));g.O(a.fd,"iv-click-target");e&&a.Ri(a.fd,e,a.annotation.id,b.session_data,a.annotation.Pb,void 0,c);break;case "playlist":case "video":l=g.N("P",null,g.N("SPAN",null,b.text_line_1));m=g.N("P",null,g.N("STRONG",null,b.text_line_2));b.is_live&&(l=m,m=g.N("SPAN",["yt-badge","iv-promo-badge-live"],g.Q("YTP_LIVE_NOW")));g.O(a.fd,"iv-click-target");e&&a.Ri(a.fd,e,a.annotation.id,b.session_data,a.annotation.Pb,
void 0,c);d.push("iv-promo-video");break;case "vote":l=g.N("P",null,g.N("STRONG",null,b.text_line_1)),m=g.N("P",null,g.N("SPAN",null,b.text_line_2)),q=g.N("DIV","iv-promo-button-container"),c=g.N("BUTTON",["iv-button","iv-promo-button"],g.N("SPAN","iv-button-content",b.button_text)),a.context.g.T(c,"click",function(a){a.stopPropagation();c6(this.context.logger,this.annotation.Pb,null,{contest_vote:"1"},(b.tracking||{}).vote);a=this.annotation.data;this.fd=g.M("iv-promo-txt",this.mj);var c=g.M("iv-promo-button-container",
this.mj),d=g.N("DIV",["iv-promo-txt","iv-click-target"]),e=g.N("P",null,g.N("STRONG",null,a.text_line_3)),f=g.N("P",null,a.text_line_4);g.Ue(d,e,f);g.Ye(c);g.Ze(d,this.fd);g.nh(this.na(),"iv-promo-with-button");(c=r6(this.annotation))&&this.Ri(d,c,this.annotation.id,a.session_data,this.annotation.Pb)},a),q.appendChild(c),d.push("iv-promo-with-button")}l&&a.fd.appendChild(l);
m&&a.fd.appendChild(m);n&&a.fd.appendChild(n);a.mj.appendChild(a.fd);q&&a.mj.appendChild(q);l=g.N("DIV","iv-promo-actions");a.g=g.N("BUTTON",["iv-promo-expand","ytp-button"]);a.g.title=g.Q("YTP_EXPAND");a.context.g.T(a.g,"click",g.A(a.Cp,5E3),a);l.appendChild(a.g);g.S(a.g,!1);a.context.g.T(a.na(),"mouseover",a.rF,a);a.context.g.T(a.na(),"mouseout",a.qF,a);a.context.g.T(a.na(),"touchend",g.A(a.Cp,5E3),a);a.o=g.N("BUTTON",["iv-promo-close","ytp-button"]);a.o.title=g.Q("YTP_CLOSE");a.context.g.T(a.o,
"click","cta"==a.annotation.style&&b.text_line_3?a.gF:a.IP,a);l.appendChild(a.o);g.mh(a.na(),d);f&&g.Te(a.na(),f);g.Te(a.na(),a.mj);g.Te(a.na(),l)},qqa=function(a){a.B||a.F||a.A||(g.O(a.na(),"iv-promo-collapsed"),a.B=!0,a.C.start())},rqa=function(a){a.C.stop();
a.B&&(g.oh(a.na(),["iv-promo-collapsed","iv-promo-collapsed-no-delay"]),a.B=!1,a.fd&&a.fd.removeAttribute("aria-hidden"),g.S(a.g,!1),g.S(a.o,!0))},sqa=function(a,b){a.A||(a.A=g.Kd(function(){E6(this);
qqa(this)},b,a))},E6=function(a){a.A&&(g.Ld(a.A),a.A=null)},F6=function(a,b,c){h6.call(this,a,b,c);
this.H=b;this.o=null;this.F=!1;this.A=null;this.B=!1;this.G=0;this.g=this.D=this.C=null},G6=function(a,b,c){a6.call(this,b,c);
this.aa=a;this.L=null;this.xm=this.Qa=this.B=this.ka=!1;this.la=null;this.Eo=new g.Md(g.w,c.C.useTabletControls?4E3:3E3);this.ga=new g.Md(g.w);this.C=new j6(c,(0,g.z)(this.Ri,this),(0,g.z)(this.Am,this));a=["div","iv-drawer",["div","iv-drawer-header",{"aria-role":"heading"},["span","iv-drawer-header-text"],["button",["iv-drawer-close-button","ytp-button"],{"aria-label":g.Q("YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL"),tabindex:"0"}]],["div","iv-drawer-content"]];this.H=new g.W(a);this.D=this.H.element;this.ea=
new g.wv(this.H,330);this.gb=g.M("iv-drawer-header-text",this.D);this.A=g.M("iv-drawer-content",this.D);a=["iv-drawer-teaser"];a.push("iv-exp-cards-teaser-prominent");a=["div",a,["div","iv-drawer-teaser-box"],["div","iv-drawer-teaser-text"],["button","iv-drawer-open-button",{"aria-label":g.Q("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-haspopup":"true"},["span"]]];new g.W(a);this.o=[];this.da=this.J=this.F=this.O=this.g=null;this.ca=[];b6(this,0,1E3*c.videoData.lengthSeconds,"",this.VD,this.xE);this.G=this.ba=
this.P=null},yqa=function(a,b){var c=b&&b.data&&b.data.card_type;
if(c&&tqa[c]){c=new tqa[c](b.id,b.data,b.Pb);a.ka||(g.mh(a.na(),["html5-stop-propagation","iv-drawer-manager"]),g.Hm(a.aa,a.D,6),uqa(a),a.J=g.M("ytp-cards-button"),a.da=g.M("iv-drawer-close-button",a.D),a.ka=!0);vqa(a,c.id);var d=wqa(a,c);if(d){var e={Yb:c,Ko:d.element,mw:!1},f=xqa(a,e);g.qb(a.o,f,0,e);d.Ja(a.A,f);a.sl();c.autoOpen?b6(a,c.startMs,0x8000000000000,c.id,g.A(a.PM,e)):(d=1E3*a.context.o.getCurrentTime(),5E3>d&&d>c.startMs&&a.Hy(e),b6(a,c.startMs,c.startMs+1,c.id,g.A(a.Hy,e)),H6(a))}}},
zqa=function(a,b){b.data.autoOpenMs&&b6(a,b.data.autoOpenMs,0x8000000000000,"",a.GP);
b.data.autoCloseMs&&b6(a,b.data.autoCloseMs,0x8000000000000,"",a.Bl);var c=b.data.headerText;g.gf(a.gb,c);a.J&&a.J.setAttribute("title",c);b.data.eventId&&(a.L=b.data.eventId);a.P=new g.iq(b.data.trackingParams);a.G=new g.iq(b.data.closeTrackingParams);a.ba=new g.iq(b.data.iconTrackingParams)},vqa=function(a,b){var c=Aqa(a,b);
c&&(c==a.g&&(a.g=null),a.aa.Rz(c.Yb.id),g.Ye(c.Ko),g.jb(a.o,c),a.sl(),H6(a))},K6=function(a,b,c,d){if(!a.B){a.ea.show();
a.O=new g.Md(function(){g.O(this.context.o.getRootNode(),"ytp-iv-drawer-open")},0,a);
a.O.start();a.B=!0;a.N=(0,g.G)();I6(a.context.logger,a.L,7,void 0,d&&d.Yb?d.Yb.Pb:void 0);a.P&&a.G&&v6([a.P,a.G]);var e={TRIGGER_TYPE:b};(0,g.H)(a.o,function(a){a.mw||(a.mw=!0,J6(this.context.logger,a.Yb.Pb,a.Yb.o.SG,e));v6([a.Yb.C])},a);
q4(a.aa);c&&(a.F=new g.Md(function(){this.X=this.J;this.da.focus()},330,a),a.F.start())}},uqa=function(a){a.context.g.T(g.M("iv-drawer-close-button",a.D),"click",a.qE,a);
a.context.g.T(a.A,"touchend",function(){this.Eo.start()},a);
a.context.g.T(a.A,"scroll",a.CE,a);a.la=g.Lk(a.A,"mousewheel",(0,g.z)(a.HP,a));a.context.A.subscribe("onHideControls",function(){this.xm=!0},a);
a.context.A.subscribe("onShowControls",function(){this.xm=!1},a);
a.context.A.subscribe("onVideoAreaChange",function(){this.xm=g.lh(this.aa.getRootNode(),"ytp-autohide")},a);
a.ca.push(g.Mi("iv-teaser-shown",a.lH,a));a.ca.push(g.Mi("iv-teaser-clicked",a.kH,a))},wqa=function(a,b){switch(b.type){case "simple":return o6(a.C,b);
case "collaborator":var c=a.C,d=["div",["iv-card","iv-card-channel"],["a",["iv-click-target","g-hovercard"],{href:l6(c,b.url,b.id),"data-ytid":b.channelId},m6(b.profileImageUrl),["div","iv-card-content",q6(c,b),["h2","iv-card-primary-link",b.title],p6(c,b)]]],d=new g.W(d);n6(c,d,b);return d;case "donation":return c=a.C,d=(0,g.z)(c.D,c,b),o6(c,b,d,d);case "episode":return Spa(a.C,b,"iv-card-episode");case "movie":return Spa(a.C,b,"iv-card-movie");case "playlist":return c=a.C,d=["div",["iv-card","iv-card-playlist"],
["a","iv-click-target",{href:l6(c,b.url,b.id)},m6(b.B,["div","iv-card-image-overlay",["span","iv-card-playlist-video-count",b.playlistVideoCount.toString()]]),["div","iv-card-content",q6(c,b),k6(c,"h2","iv-card-primary-link",b.title),p6(c,b)]]],d=new g.W(d),n6(c,d,b),d;case "poll":return Qpa(a.C,b);case "productListing":var c=a.C,d=l6(c,b.url,b.id),e=!g.eb(b.offers),f=["iv-card"],k="",l=Rpa(c,b);e&&(f.push("iv-card-product-listing"),k="iv-card-primary-link",l=b.offers[0],e=["div",null],l.price&&e.push(["div",
"iv-card-offer-price",l.price]),l.merchant&&e.push(["div","iv-card-offer-merchant",l.merchant]),l=e);e=b.sponsored?["div","iv-card-sponsored",g.Q("YTP_SPONSORED"),["div","iv-ad-info-container",["div","iv-ad-info","{{adInfo}}"],["div","iv-ad-info-icon-container",["div","iv-ad-info-icon"],["div","iv-ad-info-callout"]]]]:"";d=["div",f,{tabindex:"0"},["a",["iv-card-image","iv-click-target"],{style:"background-image: url("+b.imageUrl+");",href:d,"aria-hidden":"true",tabindex:"-1"}],["div","iv-card-content",
e,["a","iv-click-target",{href:d},k6(c,"h2",k,b.title),l]]];d=new g.W(d);f=g.Re("span");g.gf(f,g.Q("YTP_SPONSORED_PRODUCT_INFO"));d.Gc(f,"adInfo");n6(c,d,b);return d;case "tip":return c=a.C,d=(0,g.z)(c.G,c,b),o6(c,b,d,d);case "video":return c=a.C,d=l6(c,b.url,b.id),f=b.videoDuration?["span","iv-card-video-duration",b.videoDuration]:"",k=b.B?["span",["yt-badge","yt-badge-live"],g.Q("YTP_LIVE_NOW")]:"",d=["div",["iv-card","iv-card-video"],["a","iv-click-target",{href:d},m6(b.G,f),["div","iv-card-content",
q6(c,b),k6(c,"h2","iv-card-primary-link",b.title),p6(c,b),k]]],d=new g.W(d),n6(c,d,b),d}return null},xqa=function(a,b){if(0==a.o.length)return 0;
var c=g.ab(a.o,function(a){return b.Yb.startMs>a.Yb.startMs||b.Yb.startMs==a.Yb.startMs&&b.Yb.timestamp>=a.Yb.timestamp?!0:!1});
return-1==c?0:c+1},Bqa=function(a){return a.g?"productListing"==a.g.Yb.type:(0,g.vj)(a.o,function(a){return"productListing"==a.Yb.type})},H6=function(a){g.P(a.aa.getRootNode(),"ytp-cards-shopping-active",Bqa(a))},Cqa=function(a,b){if(a.H.g){var c=new I5([0,
a.A.scrollTop],[0,b.Ko.offsetTop],600,fqa);g.Hv(a.context.B,c,"animate",function(a){this.A.scrollTop=a.y},void 0,a);
g.Hv(a.context.B,c,"finish",function(a){this.A.scrollTop=a.y},void 0,a);
c.play()}else a.H.Fb(!0),a.A.scrollTop=b.Ko.offsetTop,a.H.Fb(!1)},L6=function(a){return a.g&&a.g.Yb?a.g.Yb:a.o[0]&&a.o[0].Yb?a.o[0].Yb:null},Aqa=function(a,b){return g.$a(a.o,function(a){return a.Yb.id==b},a)},Fqa=function(a){if(!a)return null;
var b=G5(a.id),c=G5(a.author),d=a5(a.type,Dqa),e=a5(a.style,M6),f=b5(H5(a.TEXT)),k=b5(a.data),k=0!=k.length?g.sf(k):{},l;var m=H5(a.segment);m?(G5(m.timeRelative),l=G5(m.spaceRelative),l=(m=F5(m.movingRegion,Epa))?new Cpa(l,m):null):l=null;var m=F5(a.action,eqa),n=F5(a.trigger,aqa),q=$5(H5(a.appearance));q||(q=$5({}));var t=a5(a.coordinate_system,Eqa,"video_relative"),v=$4(a.closeable,!0),x=b5(a.html_blob);a=b5(a.log_data);return b&&d?new Vpa(b,c,d,e,f,l,m,n,q,t,v,0,x,k,a):null},Gqa=function(a,b,
c,d,e,f,k){this.g=a;
this.B=b;this.C=c;this.videoData=d;this.logger=e;this.o=f;this.A=k},Hqa=function(a){this.aa=a;
this.g={}},J6=function(a,b,c,d){if(b){var e=N6(a,b);
a.g[b]=e["p-time"];e["iv-event"]=e.link||e["l-class"]||e["link-id"]?2:7;b=O6(a,"cta_annotation_shown",e,c);P6(a,e,Iqa(b,d))}},c6=function(a,b,c,d,e,f){if(b){var k=N6(a,b);
k["iv-event"]=3;k["i-time"]=a.g[b]||"";g.$b(k,d||{});b=O6(a,"cta_annotation_clicked",k,e);P6(a,k,b,c,f)}},Q6=function(a,b){if(b){var c=N6(a,b);
c["iv-event"]=4;c["i-time"]=a.g[b]||"";var d=O6(a,"cta_annotation_closed",c);P6(a,c,d)}},Iqa=function(a,b){return b?(0,g.R)(a,g.A(function(a,b){return g.fw(b,a)},b||{})):a},O6=function(a,b,c,d){d=g.nb(d||[]);
if(30==c["a-type"]){a:{c=c["a-id"];a=a.aa.getVideoData();if(a.Gt){if((b=a.Gt[b])&&g.r3.test(b)){a=g.Ea("[ANNOTATION_ID]");0<=b.indexOf("[ANNOTATION_ID]")?b=b.replace("[ANNOTATION_ID]",c):0<=b.indexOf(a)&&(b=b.replace(a,c));break a}}else if(a.Hi){b=g.Oh(a.Hi,{label:b,value:"a_id="+c});break a}b=""}b&&d.push(b)}return d},P6=function(a,b,c,d,e){var f=1,k,l=-1;
if(d){var m=!1;k=function(){f--;f||m||((0,window.clearTimeout)(l),m=!0,d())};
l=(0,window.setTimeout)(function(){m=!0;d()},1E3)}(0,g.H)(c||[],function(a){f++;
g.Xi(a,k)});
e&&(f++,0!=e&&a.aa.Hh(e,k));Jqa(a,b,k)},N6=function(a,b){var c={};
if(b){var d=new g.sg(b);(0,g.H)(d.tb(),function(a){c[a]=(0,window.escape)(d.get(a,""))})}c["p-time"]=a.aa.getCurrentTime().toFixed(2);
c.ps=g.V(a.aa).o;return c},I6=function(a,b,c,d,e){e=N6(a,e);
e["iv-event"]=c;b&&(e.ei=b);e["a-id"]||(e["a-id"]="card:drawer");e["a-type"]=51;P6(a,e,d)},R6=function(a,b,c,d){c&&(c=N6(a,c),c["iv-event"]=b,P6(a,c,d))},Jqa=function(a,b,c){g.wm(a.aa,"iv",b,c)},Kqa=function(a){a=Y4(a);
a=a.replace(/https?:\/\//g,"");return k5(a)?(a=g.Mh(a))&&a.v?a.v:null:null},Lqa=function(a){a=Y4(a);
if(!a)return null;a=a.replace(/https?:\/\//g,"");var b;(b=!k5(a))||(b=g.Wf(g.Vf(a)[5]||null)||"",b=b.split("/"),b="/"+(1<b.length?b[1]:""),b="/watch"!=b);if(b)return null;b=g.Mh(a);if(!b||!b.v)return null;if(b.t)return jqa(b.t);a=a.split("#",2);return!a||2>a.length?null:(a=g.Kh(a[1]))&&a.t?jqa(a.t):-1},Mqa=function(a,b,c,d,e,f,k){a=a.clone();
var l=hqa(b,c);c=g.tk(b);k=k?k.clone():c.clone();a=g.Nv(a,k,l,d,e,f);if(a.status&496)return a.status;g.hk(b,g.Gf(a.rect));k=g.Ff(a.rect);g.xe(c,k)||(d=k,f=g.Ie(g.Ce(g.Ae(b)).g),!g.Me||g.pc("10")||f&&g.pc("8")?(b=b.style,g.Wj?b.MozBoxSizing="border-box":g.sc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(d.width,0)+"px",b.height=Math.max(d.height,0)+"px"):(e=b.style,f?(g.Me?(f=u4(b,"paddingLeft"),c=u4(b,"paddingRight"),k=u4(b,"paddingTop"),l=u4(b,"paddingBottom"),f=new g.Af(k,
c,l,f)):(f=g.ek(b,"paddingLeft"),c=g.ek(b,"paddingRight"),k=g.ek(b,"paddingTop"),l=g.ek(b,"paddingBottom"),f=new g.Af((0,window.parseFloat)(k),(0,window.parseFloat)(c),(0,window.parseFloat)(l),(0,window.parseFloat)(f))),g.Me&&!g.qc(9)?(c=t4(b,"borderLeft"),k=t4(b,"borderRight"),l=t4(b,"borderTop"),b=t4(b,"borderBottom"),b=new g.Af(l,k,b,c)):(c=g.ek(b,"borderLeftWidth"),k=g.ek(b,"borderRightWidth"),l=g.ek(b,"borderTopWidth"),b=g.ek(b,"borderBottomWidth"),b=new g.Af((0,window.parseFloat)(l),(0,window.parseFloat)(k),
(0,window.parseFloat)(b),(0,window.parseFloat)(c))),e.pixelWidth=d.width-b.left-f.left-f.right-b.right,e.pixelHeight=d.height-b.top-f.top-f.bottom-b.bottom):(e.pixelWidth=d.width,e.pixelHeight=d.height)));return a.status},S6=function(a){return"creator-endscreen-editor"===a},Nqa=function(a,b){function c(a){return a.baseUrl}
function d(a){if(a&&a.runs)return(0,g.R)(a.runs,function(a){return a.text}).join("")}
function e(a){var b=[];a.videoId&&b.push("v="+a.videoId);a.playlistId&&b.push("list="+a.playlistId);a.startTimeSeconds&&b.push("t="+a.startTimeSeconds);return"/watch?"+b.join("&")}
var f={};f.startMs=(0,window.parseInt)(a.startMs,10);f.impressionUrls=(0,g.R)(a.impressionUrls||[],c);f.skip=a.skipEndscreen;f.visualElement=new g.iq(a.trackingParams);f.elements=(0,g.R)(a.elements||[],function(a,f){var k=a.endscreenElementRenderer,l={},q=k.style,t=k.endpoint;l.id="element-"+f;l.type=q;l.title=d(k.title);l.metadata=d(k.metadata);l.callToAction=d(k.callToAction);l.Xo=k.image;l.ll=k.animatedImage;l.left=(0,window.parseFloat)(k.left);l.width=(0,window.parseFloat)(k.width);l.top=(0,window.parseFloat)(k.top);
l.aspectRatio=(0,window.parseFloat)(k.aspectRatio);l.startMs=(0,window.parseInt)(k.startMs,10);l.endMs=(0,window.parseInt)(k.endMs,10);t&&(l.pd={itct:t.click_tracking_params},l.clickUrls=(0,g.R)(t.loggingUrls||[],c));k.title.accessibility&&(l.hj=k.title.accessibility.accessibilityData.label);l.impressionUrls=(0,g.R)(k.impressionUrls||[],c);l.Dv=(0,g.R)(k.hovercardShowUrls||[],c);l.visualElement=new g.iq(k.trackingParams);if("VIDEO"==q)t&&(l.targetUrl=e(t.watchEndpoint)),l.Oj=!1,l.lk=b,l.videoDuration=
d(k.videoDuration);else if("PLAYLIST"==q)l.targetUrl=e(t.watchEndpoint),l.Oj=!1,l.lk=b,l.playlistLength=d(k.playlistLength);else if("CHANNEL"==q)if(q=t.browseEndpoint.browseId,l.channelId=q,l.targetUrl="/channel/"+q,l.Oj=!1,l.lk="new",l.lq=!!k.hovercardButton,l.lq){l.htmlBlob=k.htmlBlob;var k=k.hovercardButton.subscribeButtonRenderer,v;k.subscribed?(v=d(k.subscriberCountWithUnsubscribeText),q=d(k.subscriberCountText)):(v=d(k.subscriberCountText),q=d(k.subscriberCountWithSubscribeText));t=d(k.unsubscribedButtonText);
t.match(/[0-9]/)||v&&"0"!==v&&(t+=" "+v);v=d(k.subscribedButtonText);v.match(/[0-9]/)||q&&(v+=" "+q);l.subscribeButton={subscribed:k.subscribed,feature:"endscreen",subscribeText:t,unsubscribeText:v,enabled:k.enabled}}else l.subscribersText=d(k.subscribersText);else"WEBSITE"==q&&(l.targetUrl=t.urlEndpoint.url,l.Oj=!0,l.lk="new",l.Ev=k.icon.thumbnails[0].url);return l});
return f},Oqa=function(a){var b={};
b.startMs=a.startMs;b.impressionUrls=a.impressionUrls;b.skip=a.skip||!1;b.visualElement=new g.iq(a.trackingParams);b.elements=(0,g.R)(a.elements||[],function(a){var b={};b.id=a.id;b.type=a.type;b.title=a.title;b.metadata=a.metadata;b.callToAction=a.callToAction;b.imageUrl=a.imageUrl;b.Xo=a.displayImages;b.ll=a.animatedDisplayImages;b.Ev=a.iconUrl;b.left=a.left;b.width=a.width;b.top=a.top;b.aspectRatio=a.aspectRatio;b.startMs=a.startMs;b.endMs=a.endMs;b.videoDuration=a.videoDuration;b.playlistLength=
a.playlistLength;b.channelId=a.channelId;b.htmlBlob=a.htmlBlob;b.subscribeButton=a.subscribeButton;b.subscribersText=a.subscribersText;b.lq=a.isSubscribe;b.targetUrl=a.targetUrl;b.Oj="WEBSITE"==b.type;b.pd=a.sessionData||[];b.lk=a.targetTab;b.hj=a.accessibilityStr;b.WG=a.isPlaceholder;b.impressionUrls=a.impressionUrls;b.Dv=a.hoverUrls;b.VY=a.dismissUrls;b.clickUrls=a.clickUrls;b.visualElement=new g.iq(b.pd.itct);return b});
return b},Pqa=function(){var a=g.dh("ROOT_VE_TYPE",void 0);
return a?new g.iq(void 0,a,void 0):null},Sqa=function(a,b,c){if(!(a.nodeName in Qqa))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in Rqa)b.push(Rqa[a.nodeName]);else for(a=a.firstChild;a;)Sqa(a,b,c),a=a.nextSibling},Tqa=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Tqa(a,b,c,d))return!0;
a=a.nextSibling}return!1},T6=function(a){g.nu.call(this,a);
this.G=0;this.A={};this.H={};this.Ya=new Hqa(a);this.D=new g.bo(this);g.L(this,this.D);this.D.W(this.g,"onVideoAreaChange",(0,g.z)(this.V,this,"onVideoAreaChange"));this.D.W(this.g,"onHideControls",(0,g.z)(this.V,this,"onHideControls"));this.D.W(this.g,"onShowControls",(0,g.z)(this.V,this,"onShowControls"));this.D.W(this.g,"resize",(0,g.z)(this.V,this,"resize"));this.D.W(this.g,"presentingplayerstatechange",(0,g.z)(this.V,this,"presentingplayerstatechange"));this.subscribe("onHideControls",this.wJ,
this);this.subscribe("onShowControls",this.fL,this);this.subscribe("presentingplayerstatechange",this.CK,this);this.subscribe("resize",this.Eq,this);this.subscribe("d",this.eP,this);this.subscribe("c",this.Hg,this);this.subscribe("a",this.hI,this);this.subscribe("b",this.II,this);g.V(this.g).G.subscribe("vast_info_card_add",this.Nx,this);this.g.addEventListener("crn_annotations_module",this.gA,this);this.g.addEventListener("crx_annotations_module",this.hA,this);this.J=g.N("DIV",["video-legacy-annotations",
"html5-stop-propagation"]);this.O=g.N("DIV","video-custom-annotations");this.B=new g.W(["div",["ytp-player-content","ytp-iv-player-content"]]);g.L(this,this.B);g.Hm(this.g,this.B.element,5);this.B.ma();this.C=new g.W(["div",["ytp-iv-video-content"]]);g.L(this,this.C);a=g.N("DIV","video-annotations",this.J,this.O);this.C.element.appendChild(a);this.F=this.o=null;this.L=[];a=g.V(this.g);var b=this.g.getVideoData();(1!=(a.eh||b.eh)||b.uz)&&null===a.G.get(b.videoId)||this.load()},Uqa=function(a,b){for(var c=
{},d=0;d<b.attributes.length;d++){var e=b.attributes[d];
c[e.name]=e.nodeValue}for(d=0;d<b.childNodes.length;d++)if(e=b.childNodes[d],e.tagName){var f;if(c[e.tagName])f=c[e.tagName];else if("html_blob"==e.tagName||"data"==e.tagName){g.V(a.g).experiments.g("text_content_for_xml_node_value")&&e.textContent?c[e.tagName]=e.textContent.trim():0<e.childNodes.length&&(f=e.childNodes[0].nodeValue,c[e.tagName]="string"==typeof f?f.trim():f);continue}else f=[],c[e.tagName]=f;e&&"TEXT"==e.tagName?1==e.childNodes.length&&3==e.childNodes[0].nodeType?f.push(e.childNodes[0].nodeValue):
f.push(""):e&&f.push(Uqa(a,e))}return c},Vqa=function(a,b,c){return!(a.loaded&&a.G==b&&a.g.getVideoData().videoId==c)},Xqa=function(a,b){var c=Wqa(a,b);
if(!c&&"marker"!=b.type)return null;Ypa(b,function(a){a=(0,g.z)(this.BL,this,b.id,a);this.subscribe("ivTrigger:"+b.id,a)},a);
return new x6(a.ba,b,c)},Yqa=function(a,b){var c=T6.o(),d=null;
switch(b.type){case "branding":if(g.V(a.g).Zg)break;a.B.element.appendChild(c);d=new F6(c,U6(a),b);break;case "promotion":g.Hm(a.g,c,5),d=new D6(c,U6(a),b)}d&&d.cn();return d},ara=function(a){var b=a.g.getVideoData();
if(b.Lh){var c=g.V(a.g),d=c.G.get(b.videoId);if(d){var e={format:"XML",Fc:{}};c.experiments.g("disable_iv_cors")||(e.method="POST",e.withCredentials=!0);"gaming"==c.o&&(e.Fc.gaming="1");e.od=(0,g.z)(function(a,b,c){Vqa(this,a,b)||(a=g.pi(c)&&c.responseXML?c.responseXML:null)&&V6(this,a)},a,a.G,b.videoId);
g.sq()&&(e.od=Zqa(a,e.od));e.Ob={ic_only:"1"};$qa(e,d);g.Ui(b.Lh,e)}}},$qa=function(a,b){a.method="POST";
a.Ob=a.Ob||{};b.gh&&(a.Ob.ic_xml=b.gh);b.Zi&&(a.Ob.ic_track=b.Zi)},bra=function(a){var b=new g.W(["div"]);
g.S(b.element,!1);var c=new G6(a.g,b.element,U6(a));b.Ja(a.B.element);c.cn();return c},U6=function(a){a.F||(a.F=new Gqa(new g.fl(a),new g.Fv(a),g.V(a.g),a.g.getVideoData(),a.Ya,a.g,a.ba));
return a.F},V6=function(a,b){var c=!1;
cra(b);for(var d=b.getElementsByTagName("annotation"),e=0;e<d.length;e++){var f=Uqa(a,d[e]),k=null;try{k=Fqa(f)}catch(l){}k&&(T6.A(k)?(f=Yqa(a,k))&&(a.H[k.id]=f):T6.B(k)?(a.o||(a.o=bra(a)),"card"==k.type?yqa(a.o,k):zqa(a.o,k),c=!0):(f=Xqa(a,k))&&(a.A[k.id]=f))}c&&(q4(a.g),a.Eq());g.Gb(a.A,function(a){if(a.g){var b=a.annotation;(a=a.g)&&b.o&&b.o.o&&(b=this.A[b.o.o])&&(a.X=b.annotation)}},a)},cra=function(a){if((a=a.getElementsByTagName("annotations"))&&!(1>a.length)){var b=a[0].getAttribute("itct");
if(b&&(a=g.er())){var c=Pqa();c&&(b=[new g.iq(b)],iqa(q5(),a,c,b))}}},era=function(a,b,c,d){d?dra(a,b,c):W6(a,b,c)},W6=function(a,b,c){if(b=a.A[b])y6(b),c&&c.o?(a=(0,g.z)(a.Av,a,b),b.o=new g.Md(a,2E3),b.o.start()):a.Av(b)},dra=function(a,b,c){if(b=a.A[b])y6(b),c&&c.B?(a=(0,g.z)(a.Sy,a,b),b.o=new g.Md(a,2E3),b.o.start()):a.Sy(b)},fra=function(a,b,c){if("new"==b.target)return!1;
var d=Y4(b);if(!d)return!1;d=d.replace(/https?:\/\//g,"");if(!k5(d))return!1;d=g.Mh(d);if(d.list||d.p)return!1;b=Kqa(b);if(!b)return!1;if(c==b)return!0;a=g.V(a.g);return a.C&&a.ub?!0:!1},Wqa=function(a,b){if(gra(b)){var c=b.C||s6(b,function(a){return"click"==a||"rollOut"==a||"rollOut"==a});
return new lqa(b,(0,g.z)(a.J.appendChild,a.J),a.g,a.ba,c)}return null},gra=function(a){if("highlight"==a.type||"widget"==a.type)return!0;
if("text"==a.type)for(var b in M6)if(a.style==M6[b])return!0;return!1},X6=function(a,b,c,d){a.V(z5(b,d),c,d)},Zqa=function(a,b){return(0,g.z)(function(){if(!this.isDisposed()){var a=Array.prototype.slice.call(arguments,0);
a.unshift(b);b=g.A.apply(window,a);this.L.push(g.tq(b,1,void 0))}},a)},Y6=function(a,b,c,d,e,f,k){var l,m;
if(l=c.offsetParent){var n="HTML"==l.tagName||"BODY"==l.tagName;n&&"static"==g.fk(l,"position")||(m=g.lk(l),n||(n=(n=M5(l))&&g.Wj?-l.scrollLeft:!n||g.Ws&&g.pc("8")||"visible"==g.fk(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,m=g.ve(m,new g.te(n,l.scrollTop))))}l=m||new g.te;m=g.uk(a);(n=g.mk(a))&&g.Ef(m,r5(n));var n=g.Ce(a),q=g.Ce(c);if(n.g!=q.g){var t=n.g.body,q=g.ok(t,g.rf(q)),q=g.ve(q,g.lk(t));!g.Me||g.qc(9)||g.Ie(n.g)||(q=g.ve(q,g.Ne(n.g)));m.left+=q.x;m.top+=q.y}a=hqa(a,
b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new g.te(b,m.top+(a&1?m.height:0));b=g.ve(b,l);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;k&&(v=g.mk(c))&&(v.top-=l.y,v.right-=l.x,v.bottom-=l.y,v.left-=l.x);return Mqa(b,c,d,f,v,k,void 0)},Z6=function(a,b,c,d,e,f,k){this.date=g.ua(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,k||0):new Date(a&&a.getTime?a.getTime():(0,g.G)())},$6=function(a){g.nu.call(this,a);
this.o=null;this.F=!1;this.B=null;this.A={};this.D={};this.C=null;this.J=!1;this.L=null;this.O=g.V(this.g).experiments.g("enable_creator_endscreen_moving_thumbs_on_hover");this.G=[];this.P=g.V(this.g).experiments.g("enable_creator_endscreen_html5_renderers");a=g.V(a).g;this.N="embedded"==a||"profilepage"==a;this.H=new g.Nt(null);this.g.addEventListener("crn_creatorendscreen",this.iA,this);this.g.addEventListener("crx_creatorendscreen",this.jA,this);this.load()},a7=function(a,b){g.Em(a.g,"creatorendscreen");
a.C&&(a.C.dispose(),a.C=null);for(var c in a.A){var d=a.A[c];d.dispose()}a.A={};a.D={};0<a.G.length&&(a.G.forEach(function(a){a.dispose()}),a.G.length=0);
if((a.o=b)&&b.elements){hra(a);c=[];d=new g.Nm(b.startMs,0x7ffffffffffff,{id:"ytp-ce-in-endscreen",namespace:"creatorendscreen"});c.push(d);a.C=new g.W(["div","ytp-ce-shadow"]);g.Hm(a.g,a.C.element,5);for(var e=0;e<b.elements.length;++e){var f=b.elements[e],d=ira(a,f);a.A[f.id]=d;a.D[f.id]=f;g.Hm(a.g,d.element,5);var k=new g.Nm(f.startMs,f.endMs,{id:"ytp-ce-element-"+f.id,namespace:"creatorendscreen"});c.push(k);jra(a,d,f)}g.Bm(a.g,c);a.Wr()}},hra=function(a){var b=Pqa();
if(b){var c=g.er()||"";a=[a.o.visualElement];iqa(q5(),c,b,a)}},ira=function(a,b){var c=null;
switch(b.type){case "VIDEO":c=["div",["ytp-ce-element","ytp-ce-video"],{tabindex:0,"aria-label":b.hj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",b7(c7(a,b,!1)),["div","ytp-ce-covering-animated-image",b7(c7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-video-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Ot(a.H,b.title||"")},b.title],["div","ytp-ce-video-duration",b.videoDuration]]];
c=new g.W(c);break;case "PLAYLIST":c=["div",["ytp-ce-element","ytp-ce-playlist"],{tabindex:0,"aria-label":b.hj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",b7(c7(a,b,!1)),["div","ytp-ce-covering-animated-image",b7(c7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-playlist-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Ot(a.H,b.title||"")},b.title],["div","ytp-ce-playlist-count",
["div","ytp-ce-playlist-icon"],["div","ytp-ce-playlist-count-text",b.playlistLength]]]];c=new g.W(c);break;case "CHANNEL":var c=["div",["ytp-ce-element","ytp-ce-channel",b.lq?"ytp-ce-channel-this":"ytp-ce-channel-that"],{tabindex:0,"aria-label":b.hj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",
["div","ytp-ce-expanding-overlay-body-padding",["a",["ytp-ce-channel-title","ytp-ce-link"],b.title,{href:b.targetUrl,target:"_blank",tabindex:"-1",dir:g.Ot(a.H,b.title||"")}],b.htmlBlob||b.subscribeButton?["div","ytp-ce-subscribe-container",["div","ytp-ce-channel-subscribe"]]:"",b.subscribersText?["div","ytp-ce-channel-subscribers-text",b.subscribersText]:"",b.metadata?["div",["ytp-ce-channel-metadata","yt-ui-ellipsis","yt-ui-ellipsis-3"],b.metadata]:""]]]],["div","ytp-ce-expanding-image",b7(c7(a,
b,!1))]],c=new g.W(c),d=g.Ee("div","ytp-ce-channel-subscribe",c.element)[0];if(b.subscribeButton){g.O(d,"ytp-ce-subscribe-button");var e=new g.yu(b.subscribeButton.subscribeText,b.subscribeButton.unsubscribeText,b.subscribeButton.enabled,b.channelId,!!b.subscribeButton.subscribed,b.subscribeButton.feature,null,a.g);d.appendChild(e.element);a.G.push(e)}else b.htmlBlob&&w6(d,b.htmlBlob);break;case "WEBSITE":c=["div",["ytp-ce-element","ytp-ce-website"],{tabindex:0,"aria-label":b.hj,"aria-hidden":!0},
["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",["div","ytp-ce-expanding-overlay-body-padding",["div","ytp-ce-website-title",{dir:g.Ot(a.H,b.title||"")},b.title],["div","ytp-ce-website-metadata",b.metadata],["a",["ytp-ce-website-goto","ytp-ce-link"],b.callToAction,{href:b.targetUrl,target:"_blank",tabindex:"-1"}]]]]],
["div","ytp-ce-expanding-image",b7(c7(a,b,!1))],["div","ytp-ce-expanding-icon",b7(b.Ev)]],c=new g.W(c)}b.WG&&g.O(c.element,"ytp-ce-placeholder");return c},kra=function(a,b,c){a.O&&(a=g.M("ytp-ce-covering-animated-image",b.element))&&(a.style.display=c?"block":"none")},b7=function(a){return a?{style:"background-image: url("+a+")"}:{}},c7=function(a,b,c){var d;
b.Xo&&(d=b.Xo.thumbnails);!S6(g.V(a.g).o)&&a.L&&b.ll&&b.ll.thumbnails&&(!a.O||c)&&(d=b.ll.thumbnails);return d?d[d.length-1].url:null},jra=function(a,b,c){b.T("mouseenter",(0,g.z)(a.Vr,a,b,c));
b.T("mouseleave",(0,g.z)(a.kA,a,b,c));b.T("click",(0,g.z)(function(a){g.O(a.element,"ytp-ce-element-hover")},a,b));
b.T("click",(0,g.z)(a.gx,a,c));b.T("keypress",(0,g.z)(a.gx,a,c));b.T("focus",(0,g.z)(function(a,b){g.O(a.element,"ytp-ce-force-expand");this.Vr(a,b)},a,b,c));
b.T("blur",(0,g.z)(function(a,b){g.nh(a.element,"ytp-ce-force-expand");this.kA(a,b)},a,b,c));
b.T("touchstart",(0,g.z)(a.Vr,a,b,c));var d=g.M("ytp-ce-expanding-overlay-hider",b.element);d&&b.W(d,"touchstart",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();g.nh(b.element,"ytp-ce-element-hover");g.nh(b.element,"ytp-ce-force-expand")});
var e=(0,g.z)(function(a,b,c){c=g.af(c);(0,g.H)(c,function(c){e(c);g.mf(c)&&(a.W(c,"focus",(0,g.z)(function(a,b){g.O(a.element,"ytp-ce-force-expand");d7(this,b.id,!0)},this,a,b)),a.W(c,"click",(0,g.z)(function(a,b){g.O(a.element,"ytp-ce-force-expand");
d7(this,b.id,!0);this.J=!0},this,a,b)),a.W(c,"blur",(0,g.z)(function(a,b){this.J?(this.J=!1,a.element.focus()):(g.nh(a.element,"ytp-ce-force-expand"),d7(this,b.id,!1))},this,a,b)))},this)},a,b,c);
e(b.element)},d7=function(a,b,c){g.P(a.C.element,"ytp-ce-shadow-show",c);
for(var d in a.A)d!=b&&g.P(a.A[d].element,"ytp-ce-element-shadow-show",c)},e7=function(a,b,c){function d(){k||(f++,f==e.length&&(l.stop(),c&&c()))}
if(!b||S6(g.V(a.g).o))c&&c();else{var e=lra(a,b),f=0,k=!1,l=new g.Md(function(){k=!0;c&&c()},1E3,a);
l.start();for(a=0;a<e.length;a++)g.Xi(e[a],d)}},f7=function(a,b,c){e7(a,b.clickUrls,c);
b.Oj&&L5(b.visualElement)},lra=function(a,b){for(var c=a.g.getVideoData().clientPlaybackNonce,d=a.g.getCurrentTime().toFixed(2),c={CPN:c,
AD_CPN:c,MT:d},d=[],e=0;e<b.length;e++)d.push(mra(b[e],c));return d},mra=function(a,b){return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g,function(a){var c=(0,window.unescape)(a),c=c.substring(1,c.length-1);
return b[c]?(0,window.escape)(b[c]):a})},nra=function(a,b){var c=new window.Image;
c.onload=(0,g.z)(function(){this.L=0<c.width&&0<c.height;b()},a);
c.onerror=(0,g.z)(function(){this.L=!1;b()},a);
c.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},g7=function(a){return(a=g.De(a))?g.wk(a)&&!g.lh(a,"hid"):!1},ora=function(){g.P(window.document.body,"hide-players",!1);
(0,g.H)(g.Fe("preserve-players"),function(a){g.nh(a,"preserve-players")})},h7=function(a,b){a=g.De(a);
b=g.De(b);return!!g.nf(a,function(a){return a===b},!0,void 0)},i7=function(a){var b=a.__yt_uid_key;
b||(b=(0,g.d3)(),a.__yt_uid_key=b);return b},pra=function(a,b){var c=g.Ee(a,null,b);
return c.length?c[0]:null},j7=function(a,b){a&&(a.dataset?delete a.dataset[g.fh(b)]:a.removeAttribute("data-"+b))},k7=function(a){if(g.b3&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");
else{var b=[];Sqa(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");g.b3||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},l7=function(a,b){var c=[];
return Tqa(a,b,c,!0)?c[0]:void 0},m7=function(a){g.jq.call(this,1,arguments);
this.g=a},n7=function(a,b,c,d,e){g.jq.call(this,2,arguments);
this.source=e||null},qra=function(a,b,c){g.jq.call(this,1,arguments);
this.g=a;this.o=b},o7=function(a,b,c,d,e,f,k){g.jq.call(this,1,arguments);
this.g=d||null;this.source=k||null},p7=function(a,b,c){var d;
switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return g.nf(c,function(a){return g.lh(a,b)},!0,d)},r7=function(a){var b="mouseover"==a.type&&"mouseenter"in q7||"mouseout"==a.type&&"mouseleave"in q7,c=a.type in q7||b;
if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=q7[b],d;for(d in c.o){var e=p7(b,d,a.target);e&&!g.nf(a.relatedTarget,function(a){return a==e},!0)&&c.V(d,e,b,a)}}if(b=q7[a.type])for(d in b.o)(e=p7(a.type,d,a.target))&&b.V(d,e,a.type,a)}},s7=function(a){this.C=a;
this.F={};this.H=[];this.G=[]},Z=function(a,b){return"yt-uix"+(a.C?"-"+a.C:"")+(b?"-"+b:"")},t7=function(a,b,c){a.H.push(g.Mi(b,c,a))},u7=function(a,b,c){a.G.push(g.Iq(b,c,a))},v7=function(){s7.call(this,"button");
this.g=null;this.A=[];this.o={}},rra=function(a,b,c,d,e){var f=g7(c),k=9==d.keyCode;
k||32==d.keyCode||13==d.keyCode?(d=w7(a,c))?(b=g.cf(d),"a"==b.tagName.toLowerCase()?g.jv(b.href):r4(b)):k&&x7(a,b):f?27==d.keyCode?(w7(a,c),x7(a,b)):e(b,c,d):(a=g.lh(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(r4(b),d.preventDefault()))},w7=function(a,b){var c=Z(a,"menu-item-highlight"),d=g.M(c,b);
d&&g.nh(d,c);return d},sra=function(a,b,c){g.O(c,Z(a,"menu-item-highlight"));
var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+g.ya(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)},tra=function(a,b,c,d){var e=b.length;
a=(0,g.cb)(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a},y7=function(a,b){var c=b.iframeMask;
c||(c=window.document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),g.el(c),b.iframeMask=c);return c},z7=function(a,b,c,d){var e=g.pf(b,Z(a,"group")),f=!!a.va(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,k=8,l=g.uk(b);
if(g.lh(b,Z(a,"reverse"))){f=8;k=9;l=l.top+"px";try{c.style.maxHeight=l}catch(q){}}g.lh(b,"flip")&&(g.lh(b,Z(a,"reverse"))?(f=12,k=13):(f=13,k=12));var m;a.va(b,"button-has-sibling-menu")?m=g.kk(e):a.va(b,"button-menu-root-container")&&(m=ura(a,b));g.Me&&!g.pc("8")&&(m=null);var n;m&&(n=g.uk(m),n=new g.Af(-n.top,n.left,n.top,-n.left));m=new g.te(0,1);g.lh(b,Z(a,"center-menu"))&&(m.x-=Math.round((g.tk(c).width-g.tk(b).width)/2));d&&(m.y+=g.Ne(window.document).y);if(a=y7(a,b))b=g.tk(c),a.style.width=
b.width+"px",a.style.height=b.height+"px",Y6(e,f,a,k,m,n,197),d&&g.Zj(a,"position","fixed");Y6(e,f,c,k,m,n,197)},ura=function(a,b){if(a.va(b,"button-menu-root-container")){var c=a.va(b,"button-menu-root-container");
return g.pf(b,c)}return window.document.body},x7=function(a,b){if(b){var c=A7(a,b);
if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");g.el(c);a.Qh(b,"button-menu-action",!1);var d=y7(a,b),e=i7(c).toString();delete a.o[e];g.ti(function(){d&&d.parentNode&&(g.el(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=g.pf(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));g.oh(b,f);g.Pi("yt-uix-button-menu-hide",b);(0,g.gl)(a.A);a.A.length=0}},vra=function(a,b,c){var d=Z(a,"menu-item-selected");
(0,g.H)(g.Fe(d,b),function(a){g.nh(a,d)});
g.O(c.parentNode,d)},A7=function(a,b){if(!b.widgetMenu){var c=a.va(b,"button-menu-id"),c=c&&g.De(c),d=Z(a,"menu");
c?g.mh(c,[d,Z(a,"menu-external")]):c=g.M(d,b);b.widgetMenu=c}return b.widgetMenu},wra=function(a,b){if(a.va(b,"button-toggle")){var c=g.pf(b,Z(a,"group")),d=Z(a,"toggled"),e=g.lh(b,d);
if(c&&a.va(c,"button-toggle-group")){var f=a.va(c,"button-toggle-group");(0,g.H)(g.Fe(Z(a),c),function(a){a!=b||"optional"==f&&e?(g.nh(a,d),a.removeAttribute("aria-pressed")):(g.O(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),g.qh(b,d)}},B7=function(a){a.g&&x7(a,a.g)},C7=function(a){s7.call(this,a);
this.A=null},xra=function(a,b,c){var d=c||b,e=Z(a,"card");
c=a.qc(d);var f=g.De(Z(a,"card")+i7(d));if(f)return a=g.M(Z(a,"card-body"),f),g.ef(a,c)||(g.Ye(c),a.appendChild(c)),f;f=window.document.createElement("div");f.id=Z(a,"card")+i7(d);f.className=e;(d=a.va(d,"card-class"))&&g.mh(f,d.split(/\s+/));d=window.document.createElement("div");d.className=Z(a,"card-border");b=a.va(b,"orientation")||"horizontal";e=window.document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var k=window.document.createElement("div");k.className=
Z(a,"card-body");a=window.document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;g.Ye(c);k.appendChild(c);d.appendChild(a);d.appendChild(k);f.appendChild(e);f.appendChild(d);window.document.body.appendChild(f);return f},yra=function(a,b,c){var d=a.va(b,"orientation")||"horizontal",e=g.M(Z(a,"anchor"),b)||b,f=a.va(b,"position"),k=!!a.va(b,"force-position"),l=a.va(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==
f,q,t;
n&&m?(t=13,q=8):n&&!m?(t=12,q=9):!n&&m?(t=9,q=12):(t=8,q=13);var v=M5(window.document.body),f=M5(b);v!=f&&(t^=4);var x;d?(f=b.offsetHeight/2-12,x=new g.te(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,x=new g.te(b.offsetWidth+6,-12));var B=g.tk(c),f=Math.min(f,(d?B.height:B.width)-24-6);6>f&&(f=6,d?x.y+=12-b.offsetHeight/2:x.x+=12-b.offsetWidth/2);B=null;k||(B=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");g.P(c,b,n);g.P(c,a,m);B=Y6(e,t,c,q,x,null,B);!k&&B&&(B&48&&(n=!n,t^=4,q^=4),B&192&&(m=!m,t^=1,q^=
1),g.P(c,b,n),g.P(c,a,m),Y6(e,t,c,q,x));l&&(e=(0,window.parseInt)(c.style.top,10),k=g.Ne(window.document).y,g.Zj(c,"position","fixed"),g.Zj(c,"top",e-k+"px"));v&&(c.style.right="",e=g.uk(c),e.left=e.left||(0,window.parseInt)(c.style.left,10),k=g.Je(window),c.style.left="",c.style.right=k.width-e.left-e.width+"px");e=g.M("yt-uix-card-body-arrow",c);k=g.M("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!v&&n||v&&!n?"left":"right";e.setAttribute("style","");k.setAttribute("style","");e.style[d]=f+
"px";k.style[d]=f+"px";m=g.M("yt-uix-card-arrow",c);n=g.M("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?g.tk(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")},D7=function(a){a.A&&a.Ff(a.A)},zra=function(a){var b=a.cardMask;
b||(b=window.document.createElement("iframe"),b.src='javascript:""',g.mh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";window.document.body.appendChild(b)},E7=function(){s7.call(this,"kbd-nav")},Ara=function(a,b,c){b&&c&&(g.O(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,g.z3&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+
"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))},Bra=function(a,b){if(b){var c=g.of(b,"LI");
c&&(g.O(c,Z(a,"highlight")),F7=g.Lk(b,"blur",(0,g.z)(function(a){g.nh(a,Z(this,"highlight"));(0,g.gl)(F7)},a,c)))}},Cra=function(a){if("UL"!=a.tagName.toUpperCase())return[];
a=(0,g.$e)(g.af(a),function(a){return"LI"==a.tagName.toUpperCase()});
return(0,g.$e)((0,g.R)(a,function(a){return g7(a)?l7(a,function(a){return g.wa(a)&&1==a.nodeType?g.mf(a):!1}):!1}),function(a){return!!a})},G7=function(){s7.call(this,"menu");
this.o=this.g=null;this.A={};this.D={};this.B=null},H7=function(a){var b=G7.getInstance();
if(g.lh(a,Z(b)))return a;var c=b.Jd(a);return c?c:g.pf(a,Z(b,"content"))==b.g?b.o:null},Dra=function(a,b,c){var d=I7(a,b);
d&&g.sk(d,g.tk(c));if(c==a.g){var e=9,f=8;g.lh(b,Z(a,"reversed"))&&(e^=1,f^=1);g.lh(b,Z(a,"flipped"))&&(e^=4,f^=4);a=new g.te(0,1);d&&Y6(b,e,d,f,a,null,197);Y6(b,e,c,f,a,null,197)}},Fra=function(a,b,c){J7(a,b)&&!c?K7(a,b):(Era(a,b),!a.g||h7(b,a.g)?a.FB(b):Xoa(a.B,(0,g.z)(a.FB,a,b)))},Era=function(a,b){if(b){var c=g.pf(b,Z(a,"content"));
c&&(0,g.H)(g.Fe(Z(a),c),function(a){!h7(a,b)&&J7(this,a)&&L7(this,a)},a)}},K7=function(a,b){if(b){var c=[];
c.push(b);var d=M7(a,b);d&&(d=g.Fe(Z(a),d),d=g.nb(d),c=c.concat(d),(0,g.H)(c,function(a){J7(this,a)&&L7(this,a)},a))}},L7=function(a,b){if(b){var c=M7(a,b);
g.oh(N7(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);g.O(c,Z(a,"content-hidden"));var d=M7(a,b);d&&g.He(d,{"aria-expanded":"false"});(d=I7(a,b))&&d.parentNode&&g.Ye(d);c&&c==a.g&&(a.o.appendChild(c),a.g=null,a.o=null,a.B&&a.B.V("ROOT_MENU_REMOVED"));g.Pi("yt-uix-menu-hide",b);c=g.ya(b).toString();(0,g.gl)(a.A[c]);delete a.A[c]}},Gra=function(a,b){var c=M7(a,b);
if(c){(0,g.H)(c.children,function(a){"LI"==a.tagName&&g.He(a,{role:"menuitem"})});
g.He(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+g.ya(c),c.id=d);(c=N7(a,b))&&g.He(c,{"aria-controls":d})}},Hra=function(a,b,c){var d=M7(a,b);
d&&g.lh(b,Z(a,"checked"))&&(a=g.of(c,"LI"))&&(a=g.M("yt-ui-menu-item-checked-hid",a))&&((0,g.H)(g.Fe("yt-ui-menu-item-checked",d),function(a){g.ph(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),g.ph(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))},J7=function(a,b){var c=M7(a,b);
return c?!g.lh(c,Z(a,"content-hidden")):!1},Ira=function(a){(0,g.H)(g.Ee("UL",null,a),function(a){a.tabIndex=0;
var b=E7.getInstance();g.mh(a,[Z(b),Z(b,"list")])})},M7=function(a,b){var c=g.gh(b,"menu-content-id");
return c&&(c=g.De(c))?(g.mh(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.o?a.g:g.M(Z(a,"content"),b)},I7=function(a,b){var c=g.ya(b).toString(),d=a.D[c];
if(!d){d=g.Re("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];(0,g.H)(g.kh(b),function(a){e.push(a+"-mask")});
g.mh(d,e);a.D[c]=d}return d||null},N7=function(a,b){return g.M(Z(a,"trigger"),b)},Jra=function(a,b){return h7(b,a.g)||h7(b,a.o)},O7=function(){C7.call(this,"clickcard");
this.g={};this.o={}},P7=function(){C7.call(this,"hovercard")},Q7=function(a,b,c,d,e,f){this.g=a;
this.F=null;this.A=g.M("yt-dialog-fg",this.g)||this.g;if(a=g.M("yt-dialog-title",this.A)){var k="yt-dialog-title-"+g.ya(this.A);a.setAttribute("id",k);this.A.setAttribute("aria-labelledby",k)}this.A.setAttribute("tabindex","-1");this.J=g.M("yt-dialog-focus-trap",this.g);this.L=!1;this.B=new g.If;this.G=[];this.G.push(m4(this.g,"click",(0,g.z)(this.FI,this),"yt-dialog-dismiss"));this.G.push(g.Lk(this.J,"focus",(0,g.z)(this.PE,this),!0));Kra(this);this.O=b;this.P=c;this.N=d;this.H=e;this.X=f;this.D=
this.C=null},Lra=function(a,b){a.isDisposed()||a.B.subscribe("post-all",b)},Kra=function(a){a=g.M("yt-dialog-fg-content",a.g);
var b=[];g.Gb(Mra,function(a){b.push("yt-dialog-show-"+a)});
g.oh(a,b);g.O(a,"yt-dialog-show-content")},Nra=function(){return(0,g.wh)(g.Fe("yt-dialog"),function(a){return g7(a)})},Ora=function(a){var b=g.Ee("iframe",null,a.g);
(0,g.H)(b,function(a){var b=g.gh(a,"onload");b&&(b=g.u(b))&&g.Lk(a,"load",b);if(b=g.gh(a,"src"))a.src=b},a);
return g.nb(b)},Pra=function(a){(0,g.H)(window.document.getElementsByTagName("iframe"),function(b){-1==(0,g.cb)(a,b)&&g.O(b,"iframe-hid")})},Qra=function(){(0,g.H)(g.Fe("iframe-hid"),function(a){g.nh(a,"iframe-hid")})},Rra=function(a){g.ti((0,g.z)(function(){this.A&&this.A.focus()},a),0)},R7=function(){s7.call(this,"overlay");
this.B=this.o=this.A=this.g=null},Tra=function(a){a.B||(a.B=g.Mi("yt-uix-overlay-hide",Sra));
a.g&&Lra(a.g,function(){var a=R7.getInstance();a.A=null;a.g.dispose();a.g=null})},Ura=function(a){if(a.g){var b=a.A;
a.g.dismiss("overlayhide");b&&a.Qh(b,"overlay-hidden");a.A=null;a.o&&((0,g.gl)(a.o),a.o=null);a.g=null}},Vra=function(a,b){var c;
if(a)if(c=g.M("yt-dialog",a)){var d=g.De("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=g.pf(b,"yt-dialog"));return c},Wra=function(){var a=R7.getInstance();
if(a.A)a=g.M("yt-dialog-fg-content",a.A.overlayContentNode);else a:{if(a=g.Fe("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=g.pf(a[b],"yt-dialog");if(g7(c)){a=a[b];break a}}a=null}return a},Sra=function(){Ura(R7.getInstance())},Xra=function(a){a=g.pf(a,"yt-uix-button-subscription-container");
return g.M("yt-dialog",g.M("unsubscribe-confirmation-overlay-container",a))},Yra=function(a,b){(0,g.gl)(S7);
S7.length=0;T7[b]||(T7[b]=Xra(a));R7.getInstance().show(T7[b]);var c=Wra();return new g.pd(function(a){S7.push(m4(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})},Zra=function(a){var b=window.document.location.protocol+"//"+window.document.domain+"/post_login",b=g.eg(b,"mode","subscribe"),b=g.eg("/signin?context=popup","next",b),b=g.eg(b,"feature","sub_button");
if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=g.Mi("LOGGED_IN",function(b){g.Ni(g.dh("LOGGED_IN_PUBSUB_KEY",void 0));g.ch("LOGGED_IN",!0);a(b)});
g.ch("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((window.screen.width-375)/2,(window.screen.height-440)/2)}},$ra=function(){var a=g.dh("PLAYER_CONFIG");
return a&&a.args&&void 0!==a.args.authuser?!0:!(!g.dh("SESSION_INDEX")&&!g.dh("LOGGED_IN"))},U7=function(){s7.call(this,"tooltip");
this.g=0;this.o={}},asa=function(a,b,c){a.setData(b,"tooltip-text",c);
a=a.va(b,"content-id");(a=g.De(a))&&g.gf(a,c)},bsa=function(a,b){return a.va(b,"tooltip-text")||b.title},esa=function(a,b){if(b){var c=bsa(a,b);
if(c){var d=g.De(V7(a,b));if(!d){d=window.document.createElement("div");d.id=V7(a,b);d.className=Z(a,"tip");var e=window.document.createElement("div");e.className=Z(a,"tip-body");var f=window.document.createElement("div");f.className=Z(a,"tip-arrow");var k=window.document.createElement("div");k.setAttribute("aria-hidden","true");k.className=Z(a,"tip-content");var l=csa(a,b),m=V7(a,b,"content");k.id=m;a.setData(b,"content-id",m);e.appendChild(k);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);
var n=k7(b),m=V7(a,b,"arialabel"),f=window.document.createElement("div");g.O(f,Z(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==window.document.body.getAttribute("dir")?c+" "+n:n+" "+c;g.gf(f,n);b.setAttribute("aria-labelledby",m);m=g.Bh()||window.document.body;m.appendChild(f);m.appendChild(d);asa(a,b,c);(c=(0,window.parseInt)(a.va(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",g.O(k,Z(a,"normal-wrap")));k=g.lh(b,Z(a,"reverse"));dsa(a,
b,d,e,l,k)||dsa(a,b,d,e,l,!k);var q=Z(a,"tip-visible");g.ti(function(){g.O(d,q)},0)}}}},dsa=function(a,b,c,d,e,f){g.P(c,Z(a,"tip-reverse"),f);
var k=0;f&&(k=1);var l=g.tk(b);f=new g.te((l.width-10)/2,f?l.height:0);var m=g.lk(b);Mqa(new g.te(m.x+f.x,m.y+f.y),c,k);var m=g.Je(window),n=g.pk(c);c=g.tk(d);var q=Math.floor(c.width/2),k=!!(m.height<n.y+l.height),l=!!(n.y<l.height);f=!!(n.x<q);m=!!(m.width<n.x+q);n=(c.width+3)/-2- -5;a=a.va(b,"force-tooltip-direction");if("left"==a||f)n=-5;else if("right"==a||m)n=20-c.width-3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||
l)},V7=function(a,b,c){a=Z(a)+i7(b);
c&&(a+="-"+c);return a},csa=function(a,b){var c=null;
g.U2&&g.lh(b,Z(a,"masked"))&&((c=g.De("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),g.dl(c)):(c=window.document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Z(a,"tip-mask")));return c},fsa=function(a){var b=g.De("yt-uix-tooltip-shared-mask"),c=b&&g.nf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),g.el(b),window.document.body.appendChild(b))},W7=function(){s7.call(this,"subscription-button")},gsa=function(a,b){if(!a.va(b,"ypc-enabled"))return null;
var c=a.va(b,"ypc-item-type"),d=a.va(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}},hsa=function(a,b){var c=a.va(b,X7.xD),d=!!a.va(b,"is-subscribed"),c="-"+c,e=Y7.ZB+c;
g.P(b,Y7.YB+c,!d);g.P(b,e,d);a.va(b,X7.jC)&&!a.va(b,X7.iC)&&(c=Z(U7.getInstance()),g.P(b,c,!d),b.title=d?"":a.va(b,X7.kC));d?g.ti(function(){g.O(b,Y7.zs)},1E3):g.nh(b,Y7.zs)},isa=function(a,b){return(0,g.$e)(g.Fe(Z(a)),function(a){return b==this.va(a,"channel-external-id")},a)},jsa=function(a,b){var c=(0,g.z)(function(a){a.discoverable_subscriptions&&g.ch("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);
this.xs(b)},a);
Zra(c)},ksa=function(a,b){if(!a.va(b,"show-unsub-confirm-dialog"))return!1;
var c=a.va(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=(0,window.parseInt)(a.va(b,"subscribed-timestamp"),10),(new Z6).getTime()<1E3*(c+600))?!0:!1},s4={thin:2,
medium:4,thick:6},hpa=[2,2,6,6,0];g.C(v4,g.Vc);g.h=v4.prototype;g.h.wp=null;g.h.Fj=null;g.h.na=function(){return this.Fj};
g.h.addEventListener=function(a,b,c,d){g.Gc(this.Fj,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Pc(this.Fj,a,b,c,d)};
g.h.R=function(){v4.M.R.call(this);var a=this.Fj;if(a)if(g.xc(a))a.be&&g.Dc(a.be);else if(a=g.Jc(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)g.Qc(d[e])&&++b}};
g.C(C4,v4);C4.prototype.fill=null;var G4;g.C(D4,C4);g.C(E4,v4);var gpa=0;g.C(I4,D4);g.C(J4,E4);J4.prototype.clear=function(){g.Ve(this.na())};
J4.prototype.setSize=function(a,b){P4(this.na(),{width:a,height:b})};
g.C(K4,g.lw);K4.prototype.C=null;K4.prototype.ci=function(){return this.ge?g.tk(this.na()):g.ua(this.width)&&g.ua(this.height)?new g.we(this.width,this.height):null};
K4.prototype.resume=function(){};
g.C(y4,F4);g.C(z4,F4);var c5=null,f5={bevel:1,dropshadow:2};g.C(O4,K4);g.h=O4.prototype;g.h.dm=function(){var a=A4(this,"svg",{width:this.width,height:this.height,overflow:"hidden"}),b=A4(this,"g");this.G=A4(this,"defs");this.C=new J4(b,this);a.appendChild(this.G);a.appendChild(b);this.g=a;this.A&&(this.na().setAttribute("preserveAspectRatio","none"),this.N?this.pn():this.na().setAttribute("viewBox","0 0 "+(this.A?this.A+" "+this.O:"")))};
g.h.pn=function(){if(this.ge){var a=this.ci();if(0==a.width)this.na().style.visibility="hidden";else{this.na().style.visibility="";var b=a.width/this.A,a=a.height/this.O;this.C.na().setAttribute("transform","scale("+b+" "+a+") translate(0 0)")}}};
g.h.setSize=function(a,b){g.sk(this.na(),a,b)};
g.h.ci=function(){if(!g.Wj)return this.ge?g.tk(this.na()):O4.M.ci.call(this);var a=this.width,b=this.height,c=g.y(a)&&-1!=a.indexOf("%"),d=g.y(b)&&-1!=b.indexOf("%");if(!this.ge&&(c||d))return null;var e,f;c&&(e=this.na().parentNode,f=g.tk(e),a=(0,window.parseFloat)(a)*f.width/100);d&&(e=e||this.na().parentNode,f=f||g.tk(e),b=(0,window.parseFloat)(b)*f.height/100);return new g.we(a,b)};
g.h.clear=function(){this.C.clear();g.Ve(this.G);this.o={}};
g.h.Xh=function(){var a=this.ci();O4.M.Xh.call(this);a||this.dispatchEvent("resize");if(this.N){var a=this.width,b=this.height;"string"==typeof a&&-1!=a.indexOf("%")&&"string"==typeof b&&-1!=b.indexOf("%")&&this.J.T(H4(),"tick",this.pn);this.pn()}};
g.h.sj=function(){O4.M.sj.call(this);this.N&&this.J.Ba(H4(),"tick",this.pn)};
g.h.R=function(){delete this.o;delete this.G;delete this.C;this.J.dispose();delete this.J;O4.M.R.call(this)};
g.h=R4.prototype;g.h.Te=null;g.h.xd=null;g.h.ik=!0;g.h.clear=function(){this.za.length=0;this.Ka.length=0;this.Vd.length=0;delete this.Te;delete this.xd;delete this.ik;return this};
g.h.uc=function(a){var b=g.Ya(this.za);if(null==b)throw Error("Path cannot start with lineTo");1!=b&&(this.za.push(1),this.Ka.push(0));for(b=0;b<arguments.length;b+=2){var c=arguments[b],d=arguments[b+1];this.Vd.push(c,d)}this.Ka[this.Ka.length-1]+=b/2;this.xd=[c,d]};
g.h.close=function(){var a=g.Ya(this.za);if(null==a)throw Error("Path cannot start with close");4!=a&&(this.za.push(4),this.Ka.push(1),this.xd=this.Te);return this};
g.h.clone=function(){var a=new this.constructor;a.za=this.za.concat();a.Ka=this.Ka.concat();a.Vd=this.Vd.concat();a.Te=this.Te&&this.Te.concat();a.xd=this.xd&&this.xd.concat();a.ik=this.ik;return a};
g.h.transform=function(a){if(!this.ik)throw Error("Non-simple path");a.transform(this.Vd,0,this.Vd,0,this.Vd.length/2);this.Te&&a.transform(this.Te,0,this.Te,0,1);this.xd&&this.Te!=this.xd&&a.transform(this.xd,0,this.xd,0,1);return this};
g.h.isEmpty=function(){return 0==this.za.length};
var opa={JY:"xx",KY:"xy",OY:"yx",PY:"yy"},qpa={dT:"current",YV:"new"};d5.prototype.B=function(){var a=g.u("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.g.apiaryHost;g.D(g.F(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.yo;g.D(g.F(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=g.dh("SESSION_INDEX");a("googleapis.config/sessionIndex",b);g.u("gapi.client.setApiKey")(this.g.innertubeApiKey)};
d5.prototype.o=function(){return{context:g.nq(this.g)}};
d5.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.ti(function(){e||(e=!0,c.cd&&c.cd())},c.timeout));
kpa(this,a,b,function(a){if(!e)if(e=!0,d&&g.ri(d),a)c.Ib&&c.Ib(a);else if(c.onError)c.onError()})};
g5.prototype.vb=function(){return this.A};
g.C(i5,U4);g.C(o5,g.cc);var Jpa=/[^\d]+$/;w5.prototype.na=function(){return this.C};
w5.prototype.A=function(){};
y5.prototype.clone=function(){return new y5(this.start,this.end)};
y5.prototype.getLength=function(){return this.end-this.start};
g.C(A5,h5);var Bpa={CLOSED:"closed",nW:"playerControlShow",oD:"rollOver",rD:"shown"},Dpa={UB:"anchored",LW:"rect",gX:"shapeless"};g.C(I5,g.$v);g.h=I5.prototype;
g.h.play=function(a){if(a||0==this.g)this.progress=0,this.o=this.A;else if(this.ob())return!1;p5(this);this.startTime=a=(0,g.G)();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.C=this.startTime;this.progress||this.Fm();this.ae("play");-1==this.g&&this.ae("resume");this.g=1;var b=g.ya(this);b in g.Zv||(g.Zv[b]=this);g.Yv();K5(this,a);return!0};
g.h.stop=function(a){p5(this);this.g=0;a&&(this.progress=1);J5(this,this.progress);this.ae("stop");this.Vj()};
g.h.pause=function(){this.ob()&&(p5(this),this.g=-1,this.ae("pause"))};
g.h.R=function(){0==this.g||this.stop(!1);this.ae("destroy");I5.M.R.call(this)};
g.h.destroy=function(){this.dispose()};
g.h.gI=function(a){K5(this,a)};
g.h.yq=function(){this.ae("animate")};
g.h.ae=function(a){this.dispatchEvent(new o5(a,this))};
var Lpa={em:1,ex:1},Kpa={cm:1,"in":1,mm:1,pc:1,pt:1};g.C(N5,w5);
N5.prototype.A=function(a,b){var c=u6(a);if(c){var d=X4(c,b);if(!(0>=d.width||0>=d.height)){var e;if(e=(c=(c=Zpa(a))&&c.g?c.g:null)&&c.length?c[0]:null){var f=g.Gf(V4(b,W4(e,new g.Bf(e.F,e.G,e.rk,e.A),b.g))),k=d.clone(),c=new g.Bf(f.x,f.y,1,1),l=Math.max(k.left+k.width,c.left+c.width),m=Math.max(k.top+k.height,c.top+c.height);k.left=Math.min(k.left,c.left);k.top=Math.min(k.top,c.top);k.width=l-k.left;k.height=m-k.top;var c=a.g,k=t5(k,c.effects),l=x5(this,k.width,k.height),m=u5(c,k.width,k.height,
this.g),d=new g.Bf(d.left-k.left,d.top-k.top,d.width,d.height),n=new g.te(f.x-k.left,f.y-k.top);this.B=17*L4(b.g,e.o,e.g?e.g:"xy");e=c.cornerRadius;var f=a.g,q=this.g&&t6(a),t=q?f.g+1:f.g,q=(f=t?new g5(t,q?f.A:f.C):null)?f.vb()/2:0,t=rpa(d,n),v=this.D(d,e,n,t),x=n.x,n=n.y,B=d.width,E=d.height,K=d.left,d=d.top,I=new R4;S4(I,K+e+q,d+q);"t"==t&&(I.uc(v.start,d+q),I.uc(x,n),I.uc(v.end,d+q));I.uc(K+B-e-q,d+q);T4(I,e,e,-90);"r"==t&&(I.uc(K+B-q,v.start),I.uc(x,n),I.uc(K+B-q,v.end));I.uc(K+B-q,d+E-e-q);T4(I,
e,e,0);"b"==t&&(I.uc(v.end,d+E-q),I.uc(x,n),I.uc(v.start,d+E-q));I.uc(K+e+q,d+E-q);T4(I,e,e,90);"l"==t&&(I.uc(K+q,v.end),I.uc(x,n),I.uc(K+q,v.start));I.uc(K+q,d+e+q);T4(I,e,e,180);I.close();Q4(l,I,f,m);if(m=this.na())g.O(m,"annotation-shape"),g.O(m,"annotation-speech-shape"),g.hk(m,k.left,k.top),g.sk(m,k.width,k.height),s5(l,m,c.effects)}}}};
N5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=g.pe(c-a/2,d+b,d+e-a-b);return new y5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new y5(0,0)};
O5.prototype.B=function(a,b,c,d){this.g[a]=b?!c:c;a=g.Jb(this.g,function(a){return a});
this.o!=a&&(this.o=a,this.A.V(this.C,a,d))};
g.C(P5,I5);P5.prototype.B=g.w;P5.prototype.yq=function(){this.B();P5.M.yq.call(this)};
P5.prototype.Vj=function(){this.B();P5.M.Vj.call(this)};
P5.prototype.Fm=function(){this.B();P5.M.Fm.call(this)};
g.C(Q5,h5);g.C(R5,h5);g.C(S5,A5);g.C(T5,A5);g.C(U5,h5);g.C(V5,h5);g.C(X5,A5);g.C(Y5,h5);var dqa={Un:"click",CLOSE:"close",sU:"hidden",WW:"rollOut",oD:"rollOver",rD:"shown"},cqa={CLOSE:"close",eW:"openUrl",yD:"subscribe"};g.h=a6.prototype;g.h.cn=function(){this.context.A.subscribe("resize",this.sl,this)};
g.h.na=function(){return this.oa};
g.h.Ri=function(a,b,c,d,e,f,k){this.context.g.T(a,"click",g.A(this.Am,b,c,d,e,f||[],k||0),this);this.context.g.T(a,"touchstart",g.A(function(){this.zr=!1}),this);
this.context.g.T(a,"touchmove",g.A(function(){this.zr=!0}),this)};
g.h.Am=function(a,b,c,d,e,f,k){if(this.zr)return!1;k&&(k.stopPropagation(),k.preventDefault());(b=E5(a,b,this.context.videoData.videoId))&&Hpa(this,b,D5(b,a.target),c,d,e,f,a.g);return!1};
g.h.show=function(){this.N=(0,g.G)()};
g.h.Jn=function(){};
g.h.destroy=function(){g.Ye(this.na())};
g.h.sl=function(){};
g.C(e6,N5);e6.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=c<=d+e/2?Math.max(d+e/4-a/2,d+b):Math.min(d+3*e/4-a/2,d+e-a-b);return new y5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new y5(0,0)};
g.C(f6,w5);f6.prototype.A=function(a,b){var c=u6(a);if(c){var d=X4(c,b);if(!(0>=d.width||0>=d.height)){var c=a.g,e=t5(d,c.effects),f=x5(this,e.width,e.height),k=u5(c,d.width,d.height,this.g),d=new g.Bf(0,0,d.width,d.height),l=c.cornerRadius,m=a.g,n=this.g&&t6(a),q=n?m.g+1:m.g,n=(m=q?new g5(q,n?m.A:m.C):null)?m.vb()/2+1:0,d=v5(d,l,n);Q4(f,d,m,k);if(k=this.na())g.O(k,"annotation-shape"),g.O(k,"annotation-popup-shape"),g.hk(k,e.left,e.top),g.sk(k,e.width,e.height),s5(f,k,c.effects)}}};
g.C(g6,w5);g6.prototype.A=function(a,b){var c=u6(a);if(c){var d=X4(c,b);if(!(0>=d.width||0>=d.height)){var e=a.g,c=t5(d,e.effects),f=x5(this,c.width,c.height),k=new g.Bf(0,0,d.width,d.height),l=e.cornerRadius,d=new g5(!e.B&&this.g?1:e.B,e.bgColor),m=new y4("#000",0),n=d?d.vb()/2+1:0,k=v5(k,l,n);Q4(f,k,d,m);f=this.na();g.O(f,"annotation-shape");e=e.o;g.vk(f,this.g?Math.max(e,.9):e);g.hk(f,c.left,c.top);g.sk(f,c.width,c.height)}}};
g.C(h6,a6);h6.prototype.cn=function(){h6.M.cn.call(this);var a=this.annotation.data;"start_ms"in a&&"end_ms"in a&&b6(this,this.annotation.data.start_ms,this.annotation.data.end_ms,this.annotation.id,this.show,this.Jn)};
g.C(i6,P5);i6.prototype.B=function(){this.element.style.left=Math.round(this.o[0])+"px";this.element.style.top=Math.round(this.o[1])+"px"};
var tqa={collaborator:Y5,donation:X5,episode:Q5,movie:Q5,playlist:V5,poll:U5,productListing:T5,simple:A5,tip:S5,video:R5};j6.prototype.o=function(a,b){var c=g.of(b.target,"label");c&&g.P(c,"iv-card-poll-choice-focused",a)};
j6.prototype.F=function(a,b){var c=g.pf(b.target,"iv-card-poll");if(c)if(a.A)g.M("iv-card-sign-in-button",c).click();else{var d=(0,window.parseInt)(W5(b.target,"pollChoiceIndex"),10);if(null==a.g)a.choices[d].count++,a.g=d;else if(a.g!=d){var e=a.choices[a.g];e.count=Math.max(e.count-1,0);a.choices[d].count++;a.g=d}else e=a.choices[a.g],e.count=Math.max(e.count-1,0),a.g=null;Ppa(a,c);g.Vi(this.g.videoData.Lh,{Fc:{action_poll_vote:1},Ob:{poll_id:a.id,index:d,session_token:a.G}});c={};c["link-id"]=
d;c6(this.g.logger,a.Pb,void 0,c,a.o.click,5);L5(a.C)}};
j6.prototype.D=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");b&&(b=g.A(b,a.J,a.B));Tpa(this,a,!0,b)};
j6.prototype.G=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffers");b&&(b=g.A(b,a.J,a.B,a.L));Tpa(this,a,!1,b)};
var Eqa={uY:"video_relative",oW:"player_relative"},Dqa={XB:"branding",DS:"card",NT:"drawer",uU:"highlight",oV:"marker",EW:"promotion",TEXT:"text",FY:"widget"},M6={UB:"anchored",XB:"branding",CHANNEL:"channel",cT:"cta",vU:"highlightText",VU:"label",PLAYLIST:"playlist",yW:"popup",sX:"speech",yD:"subscribe",NX:"title",VIDEO:"video",zY:"vote",CY:"website"};Vpa.prototype.showLinkIcon=function(){return s6(this,function(a){return null!=a.url&&a.url.showLinkIcon})};
var Rqa={IMG:" ",BR:"\n"},Qqa={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};x6.prototype.show=function(){this.isVisible=!0;this.g&&(this.g.show(),this.A.subscribe("resize",this.D,this),this.A.subscribe("onVideoAreaChange",this.B,this))};
x6.prototype.destroy=function(){if(this.g){kqa(this);var a=this.g;g.hl(a.F);a.xq.dispose();a.H.dispose();a.o&&g.Ye(a.o);a.A&&a.A.na()&&g.Ye(a.A.na())}y6(this)};
x6.prototype.B=function(){B6(this.g)};
x6.prototype.D=function(){B6(this.g)};
g.h=lqa.prototype;g.h.uA=function(){this.N||(this.B&&g.S(this.B,!0),this.C&&g.S(this.C,!0),this.A&&(this.A.g=!0,g.vk(this.o,C6(this)?1:0),this.A.A(this.g,A6(this))),this.H.isActive()&&this.H.stop(),this.N=!0,this.J=Woa(this.F,g.pm(this.D),function(a){this.xq.stop();this.Hg(a)}))};
g.h.Hg=function(){this.N&&(this.P?this.H.start():this.Cv(),this.A&&(this.A.g=!1,g.vk(this.o,C6(this)?1:0),this.A.A(this.g,A6(this))),this.N=!1,this.J&&(this.F.Ba(this.J),this.J=null))};
g.h.Cv=function(){this.B&&g.S(this.B,!1);this.C&&g.S(this.C,!1)};
g.h.ZJ=function(a){this.da=a;this.xq.hi()};
g.h.FP=function(){var a=this.da,b=new g.te(a.clientX,a.clientY),c=g.lk(this.D.getRootNode()),d=d6(c,this.O),c=(this.C&&g.wk(this.C)||this.B&&g.wk(this.B))&&d6(c,this.P);d&&d.contains(b)||c&&c.contains(b)?this.uA():this.Hg(a)};
g.h.show=function(){var a=this.g.g,a=(a&&0==a.o||"title"==this.g.style||"highlightText"==this.g.style?!1:!0)&&!this.A,b=!this.o,c="widget"==this.g.type;if(a){var d=A6(this),e=null;"highlight"==this.g.type||"label"==this.g.style?e=new g6:"popup"==this.g.style?e=new f6:"anchored"==this.g.style?e=new N5:"speech"==this.g.style&&(e=new e6);e&&(e.A(this.g,d),this.A=e,d=e.na())&&(g.S(d,!1),g.O(d,"annotation-type-"+this.g.type.toLowerCase()),this.ba(d))}if(b){d=["annotation"];"highlightText"!=this.g.style||
d.push("annotation-no-mouse");d.push("annotation-type-"+this.g.type.toLowerCase());this.o=g.N("DIV",d);g.S(this.o,!1);this.g.B&&(this.G=g.N("DIV","inner-text"),"label"==this.g.style&&(g.O(this.G,"label-text"),this.G.style.backgroundColor=this.g.g.bgColor),g.gf(this.G,this.g.B),this.o.appendChild(this.G));g.hh(this.o,"annotation_id",this.g.id);this.ba(this.o);mqa(this,this.o);if(t6(this.g)&&this.g.showLinkIcon()){if(e=r6(this.g))d=this.o,e=new g.lg(Y4(e)),d.title=e.o+e.A;this.C=g.N("SPAN","annotation-link-icon");
g.S(this.C,!1);this.o.appendChild(this.C)}nqa(this);t6(this.g)||(this.o.style.cursor="default")}c&&("subscribe"==this.g.style?g.M("yt-uix-subscription-button",this.o)||w6(this.o,this.g.htmlBlob):this.g.htmlBlob&&w6(this.o,this.g.htmlBlob));if(a||b){a:{a=this.g.o.g;if(a.length&&(a=B5(a[0]))){a=a.H;break a}a=0}this.o&&(this.o.style.zIndex=a);this.A&&this.A.na()&&(this.A.na().style.zIndex=a)}g.S(this.o,!0);g.vk(this.o,C6(this)?1:0);B6(this);this.A&&this.A.na()&&g.S(this.A.na(),!0)};
g.C(D6,h6);g.h=D6.prototype;g.h.show=function(){this.isActive||(D6.M.show.call(this),this.G||(pqa(this),this.G=!0),g.S(this.na(),!0),this.annotation&&this.annotation.Pb&&J6(this.context.logger,this.annotation.Pb),g.nh(this.na(),"iv-promo-inactive"),this.na().removeAttribute("aria-hidden"),this.isActive=!0,E6(this),rqa(this),sqa(this,this.D))};
g.h.Jn=function(){this.isActive&&(g.O(this.na(),"iv-promo-inactive"),this.isActive=!1,this.na().setAttribute("aria-hidden",!0))};
g.h.Am=function(a,b,c,d,e,f,k){return this.B?!1:D6.M.Am.call(this,a,b,c,d,e,f,k)};
g.h.Cp=function(a,b){b.stopPropagation();rqa(this);sqa(this,a);this.fd.focus()};
g.h.rF=function(a){this.F=!0;this.Cp(500,a)};
g.h.qF=function(){this.F=!1;qqa(this)};
g.h.IP=function(a){a.stopPropagation();this.Jn();Q6(this.context.logger,this.annotation.Pb)};
g.h.gF=function(a){a.stopPropagation();E6(this);this.B=!0;g.O(this.na(),"iv-promo-collapsed-no-delay");this.C.start();Q6(this.context.logger,this.annotation.Pb)};
g.h.destroy=function(){this.C.dispose();D6.M.destroy.call(this)};
g.C(F6,h6);g.h=F6.prototype;g.h.YM=function(a,b,c,d){this.A.stop();if(!this.B){var e=g.tk(a);this.g||(g.rk(a,e.width),g.rk(b,e.width));g.hk(c,e.width,e.height-Math.max(Math.min(e.height,d)/2+Math.round(10),20));this.B=!0;g.S(a,!0);this.C=new g.Md(function(){g.O(this.na(),"iv-branding-active")},0,this);
this.C.start()}};
g.h.cG=function(a,b){g.nh(this.na(),"iv-branding-active");this.D=new g.Md((0,g.z)(function(){g.S(a,!1);this.g||g.rk(b,0)},this),250);
this.D.start();this.B=!1};
g.h.show=function(){if(!this.isActive){F6.M.show.call(this);if(!this.F){g.O(this.na(),"iv-branding");var a=this.annotation.data;this.G=a.image_width;this.o=g.N("IMG",{src:a.image_url,"class":"branding-img iv-click-target",width:a.image_width,height:a.image_height});g.S(this.o,!1);var b=g.N("DIV","branding-img-container",this.o);this.na().appendChild(b);var c=g.N("DIV","iv-branding-context-name");g.gf(c,a.channel_name);var d=g.N("DIV","iv-branding-context-subscribe");if(a.use_standalone_subscribe_button){if(b=
a.standalone_subscribe_button_data)this.g=new g.yu(b.subscribeText,b.unsubscribeText,!!b.enabled,a.channel_id,!!b.subscribed,b.feature,a.session_data.itct,this.H.o),this.g.Ja(d)}else this.annotation.htmlBlob?w6(d,this.annotation.htmlBlob):a.num_subscribers&&g.gf(d,a.num_subscribers);b=g.N("DIV","iv-branding-context-subscribe-caret");c=g.N("DIV","branding-context-container-inner",b,c,d);g.S(c,!1);d=g.N("DIV","branding-context-container-outer",c);g.Zj(d,"right",this.G+"px");this.na().appendChild(d);
var e=r6(this.annotation);e&&this.Ri(this.o,e,this.annotation.id,a.session_data,this.annotation.Pb);this.A=new g.Md(g.A(this.cG,c,d),500,this);this.context.g.T(this.na(),"mouseover",(0,g.z)(this.YM,this,c,d,b,a.image_height));this.context.g.T(this.na(),"mouseout",(0,g.z)(this.A.start,this.A,void 0));this.F=!0}J6(this.context.logger,this.annotation.Pb);g.S(this.na(),!0);this.isActive=!0;if(this.o){var a=this.o,f,b=g.uk(a).width,c=g.ua(void 0)?void 0:b;f=f||0;g.hk(a,c);f=new i6(a,[c,a.offsetTop],[c-
b-f,a.offsetTop],200,gqa);this.context.B.T(f,"begin",g.A(g.S,a,!0));f.play()}}};
g.h.Jn=function(){this.isActive&&(g.S(this.na(),!1),this.isActive=!1)};
g.h.destroy=function(){this.g&&(this.g.dispose(),this.g=null);F6.M.destroy.call(this)};
g.C(G6,a6);g.h=G6.prototype;g.h.isAvailable=function(){var a;if(a=!!this.o.length)(a=this.aa.getRootNode())?(a=g.tk(a),a=177<a.width&&177<a.height):a=!1;return a};
g.h.VD=function(){this.Qa&&K6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.xE=function(){(this.Qa=this.B)&&this.Bl()};
g.h.GP=function(){K6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.Bl=function(){this.B&&(g.yv(this.ea),g.nh(this.context.o.getRootNode(),"ytp-iv-drawer-open"),this.B=!1,q4(this.aa),this.F&&this.F.stop(),this.F=new g.Md(function(){this.X&&(this.X.focus(),this.X=null)},330,this),this.F.start())};
g.h.sl=function(){var a=this.isAvailable();g.S(this.na(),a);g.P(this.context.o.getRootNode(),"ytp-iv-drawer-enabled",a);q4(this.aa)};
g.h.destroy=function(){var a=g.gm(this.aa).o;a&&a.Tr(!1,void 0);this.aa.getRootNode().removeChild(this.D);g.Ni(this.ca);(0,g.gl)(this.la);this.O&&this.O.dispose();this.F&&this.F.dispose();G6.M.destroy.call(this)};
g.h.HP=function(a){this.Eo.start();a.preventDefault();a=a||window.event;var b=0;"MozMousePixelScroll"==a.type?b=0==(a.axis==a.HORIZONTAL_AXIS)?a.detail:0:window.opera?b=a.detail:b=0==a.wheelDelta%120?"WebkitTransform"in window.document.documentElement.style?window.chrome&&0==window.navigator.platform.indexOf("Mac")?a.wheelDeltaY/-30:a.wheelDeltaY/-1.2:a.wheelDelta/-1.6:a.wheelDeltaY/-3;if(a=b)this.A.scrollTop+=a};
g.h.Hy=function(a){if(!g.lh(this.aa.getRootNode(),"ytp-cards-teaser-shown")){this.g!=a&&(this.g=a,H6(this));if(g.wk(this.na())){var b;2==this.context.o.Wa()?b=1==((0,window.isNaN)(void 0)?this.context.o.Mz():void 0):(b=(0,window.isNaN)(void 0)?this.context.o.xk():void 0,b=1==b||0==b&&0===this.context.o.getCurrentTime());if(b&&a.Yb.teaserDurationMs){b={teaserText:a.Yb.teaserText,durationMs:a.Yb.teaserDurationMs};var c=g.gm(this.aa).o;c&&c.Tr(!0,b)}}this.ga.isActive()||((!this.B||!this.Eo.isActive()&&
this.xm)&&Cqa(this,a),this.ga.start(910+a.Yb.teaserDurationMs))}};
g.h.PM=function(a){this.B||(this.g=a,H6(this),Cqa(this,a),K6(this,"YOUTUBE_DRAWER_AUTO_OPEN",!1,a))};
g.h.qE=function(){this.B&&(I6(this.context.logger,this.L,4,L6(this).o.close),this.G&&L5(this.G),this.Bl())};
g.h.CE=function(){g.P(this.D,"iv-drawer-scrolled",0<this.A.scrollTop)};
g.h.lH=function(){var a=L6(this);R6(this.context.logger,8,a.Pb,a.o.bN);a&&v6([a.F,a.D])};
g.h.kH=function(a){var b=L6(this);this.g?a?(a=this.context.logger,R6(a,9,b.Pb,b.o.ir),a.aa.Hh(4,void 0),L5(b.F)):(a=this.context.logger,R6(a,12,b.Pb,b.o.ir),a.aa.Hh(4,void 0),L5(b.D)):(a=this.context.logger,I6(a,this.L,12,b.o.ir),a.aa.Hh(4,void 0),this.ba&&L5(this.ba))};
var lsa=["ytp-ce-top-left-quad","ytp-ce-top-right-quad","ytp-ce-bottom-left-quad","ytp-ce-bottom-right-quad"];g.C(T6,g.nu);T6.C="AnnotationsModule";T6.A=function(a){switch(a.type){case "branding":case "promotion":return!0}return!1};
T6.B=function(a){return"card"==a.type||"drawer"==a.type};
T6.o=function(){var a=g.N("DIV",["annotation","annotation-type-custom"]);g.S(a,!1);return a};
T6.g=function(a){switch(a){case "annotation-editor":case "live-dashboard":return!0}return!1};
g.h=T6.prototype;g.h.cP=function(a,b){if(!T6.g(g.V(this.g).o))return null;switch(a){case "loadCustomAnnotationsXml":var c=g.Rv(b);c&&V6(this,c);return!0;case "removeCustomAnnotationById":return b&&this.o&&(vqa(this.o,b),q4(this.g)),!0}return null};
g.h.dP=function(){return T6.g(g.V(this.g).o)?["loadCustomAnnotationsXml","removeCustomAnnotationById"]:[]};
g.h.Eq=function(){if(this.C){var a=g.aZ(g.pm(this.g),!0);g.sk(this.C.element,a.width,a.height);g.hk(this.C.element,a.left,a.top)}if(this.o){var b=o4(this.g.app.A.G),a=this.o,b=b.width;g.P(a.D,"iv-drawer-small",426>=b);g.P(a.D,"iv-drawer-big",1280<=b)}};
g.h.CK=function(a){g.T(a.state,2)&&(this.Fk()&&this.fA()&&2!=this.g.Wa()&&this.Ur(!1),this.Tr(!1))};
g.h.load=function(){T6.M.load.call(this);this.B.show();this.G++;var a=this.g.getVideoData(),b=a.videoId,c=(0,g.z)(this.oJ,this,b,this.G);g.sq()&&(c=Zqa(this,c));c={format:"XML",od:c,Fc:{}};a.isPharma&&(c.Fc.pharma="1");c.method="POST";c.withCredentials=!0;var d=g.V(this.g);"gaming"==d.o&&(c.Fc.gaming="1");(b=d.G.get(b))&&$qa(c,b);a.Lh&&(b=b&&b.gh,a.Ft&&!b||g.Ui(a.Lh,c));g.Hm(this.g,this.C.element,5);this.Eq()};
g.h.unload=function(){Jqa(this.Ya,{"iv-event":1});g.Em(this.g,"annotations_module");g.Gb(this.A,function(a){a.destroy()});
g.Gb(this.H,function(a){a.destroy()});
this.F=null;this.o&&(this.o.destroy(),this.o=null,q4(this.g));this.A={};this.H={};this.B.ma();T6.M.unload.call(this);this.C.detach()};
g.h.oJ=function(a,b,c){if(!Vqa(this,b,a)&&(a=g.pi(c)&&c.responseXML?c.responseXML:null)){V6(this,a);g.O(this.g.getRootNode(),"iv-module-loaded");a=[];for(var d in this.A){b=this.A[d].annotation;if(b.o)if(c=b.o,c.g.length)if(c=c.g[0].o||c.g[0].g||c.g[0].A,!c||2>c.length)c=null;else{var e=c.length-1;c=0>=c[0].t&&0>=c[e].t?null:{start:c[0].t,end:c[e].t}}else c=null;else c=null;if(e=c)if(c=1E3*e.start,e=1E3*e.end,0==c&&(c++,e++),!(e<c)){var f={id:d,namespace:"annotations_module"};"marker"==b.type&&(f.style=
"ytp-chapter-marker",f.tooltip=b.B,f.visible=!0);b=new g.Nm(c,e,f);a.push(b)}}g.Bm(this.g,a)}};
g.h.Nx=function(a){a==this.g.getVideoData().videoId&&(this.loaded?ara(this):this.load())};
g.h.gA=function(a){a=a.getId();var b=this.A[a];b&&!b.C&&(b=b.annotation,dra(this,a),J6(this.Ya,b.Pb))};
g.h.hA=function(a){W6(this,a.getId())};
g.h.Av=function(a){if(a){a.isVisible=!1;if(a.g){kqa(a);var b=a.g;b.o&&g.S(b.o,!1);b.A&&b.A.na()&&g.S(b.A.na(),!1);b.L&&(b.F.Ba(b.L),b.L=null)}X6(this,"shown",!1,a.annotation.id);this.Hl(a.annotation,"hidden")}};
g.h.Sy=function(a){a&&(a.show(),X6(this,"shown",!0,a.annotation.id),this.Hl(a.annotation,"shown"))};
g.h.BL=function(a,b,c){var d=this.A[a];if(d&&b.value!=c){b.value=c;var e=!1;Ypa(d.annotation,function(a){e|=a.value});
era(this,a,b,e)}};
g.h.hI=function(a){if(a&&a.id){var b=r6(a);if(b){var c=Y4(b);if(c){var d=(0,g.z)(this.Hl,this,a,"click"),e=this.g.getVideoData();if("new"==D5(c,b.target)||fra(this,b,e.videoId))d(),d=null;c6(this.Ya,a.Pb,d)}}}};
g.h.Hl=function(a,b){Xpa(a,function(c){if(c.trigger==b&&"openUrl"==c.type&&c.url){var d=this.g.getVideoData(),e;if(!(e=!fra(this,c.url,d.videoId))){e=Kqa(c.url);var f=Lqa(c.url);if(e){if(d.videoId==e)this.g.Nc(f||0);else{var k=U6(this).o;g.F2(k.app,e,void 0,void 0,void 0,void 0);f&&U6(this).o.wh()&&U6(this).o.Nc(f)}e=!0}else e=!1;e=!e}e&&(d=E5(c.url,a.id,d.videoId,g.V(this.g)))&&(this.g.rd(),e=D5(d,c.url.target),c=d,d="current"==e?"_top":void 0,e=g.Mh(c),f=null,"ei"in e&&(f={ei:e.ei},c=g.jg(c,"ei")),
g.mv(c,d,f))}},this)};
g.h.wJ=function(){X6(this,"playerControlShow",!1)};
g.h.fL=function(){X6(this,"playerControlShow",!0)};
g.h.eP=function(a){X6(this,"rollOver",!0,a.id)};
g.h.Hg=function(a){X6(this,"rollOver",!1,a.id)};
g.h.II=function(a){a&&a.id&&(this.A[a.id].C=!0,W6(this,a.id),Q6(this.Ya,a.Pb),this.Hl(a,"close"),X6(this,"closed",!0,a.id))};
g.h.Fk=function(){return!!this.o&&this.o.isAvailable()};
g.h.fA=function(){this.Fk();return!!this.o&&this.o.B};
g.h.Ur=function(a,b,c){this.Fk();this.o&&(b=!!b,a?g.p(c)?K6(this.o,c,b):K6(this.o,"YOUTUBE_DRAWER_AUTO_OPEN",b):this.o.Bl())};
g.h.Tr=function(a,b){this.g.V(a?"cardsteasershow":"cardsteaserhide",b)};
g.h.R=function(){g.V(this.g).G.unsubscribe("vast_info_card_add",this.Nx,this);this.g.removeEventListener("crn_annotations_module",this.gA,this);this.g.removeEventListener("crx_annotations_module",this.hA,this);g.nh(this.g.getRootNode(),"ytp-iv-drawer-open");for(var a=this.L,b=0,c=a.length;b<c;b++)g.uq(a[b]);this.L.length=0;T6.M.R.call(this)};
g.C(Z6,g.Dv);g.h=Z6.prototype;g.h.getHours=function(){return this.date.getHours()};
g.h.getMinutes=function(){return this.date.getMinutes()};
g.h.getSeconds=function(){return this.date.getSeconds()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.Zl=function(a,b){var c=g.Dv.prototype.Zl.call(this,a);return a?c+" "+g.Ma(this.getHours(),2)+":"+g.Ma(this.getMinutes(),2)+":"+g.Ma(this.getSeconds(),2)+(b?g.Ev(this):""):c+"T"+g.Ma(this.getHours(),2)+g.Ma(this.getMinutes(),2)+g.Ma(this.getSeconds(),2)+(b?g.Ev(this):"")};
g.h.toString=function(){return this.Zl()};
g.h.clone=function(){var a=new Z6(this.date);a.Kl=this.Kl;a.Ml=this.Ml;return a};
g.C($6,g.nu);g.h=$6.prototype;g.h.load=function(){$6.M.load.call(this);this.g.addEventListener("resize",this.Wr,this);var a=S6(g.V(this.g).o)?function(){}:(0,g.z)(this.LE,this);
nra(this,a)};
g.h.unload=function(){a7(this,null);this.g.removeEventListener("resize",this.Wr,this);this.B&&(this.B.abort(),this.B=null);$6.M.unload.call(this)};
g.h.fP=function(a,b){if(!S6(g.V(this.g).o))return null;var c;switch(a){case "loadCustomEndscreenRenderer":return c=Nqa(b,"new"),a7(this,c),!0;case "loadCustomEndscreenJson":return(c=Oqa(b))&&a7(this,c),!0;case "unloadCustomEndscreenJson":return a7(this,null),!0}return null};
g.h.LE=function(){var a=this.g.getVideoData(),b=a.videoId;this.B&&this.B.abort();b={method:"POST",od:(0,g.z)(this.kJ,this,b),Fc:{v:b},withCredentials:!0};this.P&&(b.Fc.r=1);"gaming"==g.V(this.g).o&&(b.Fc.gaming="1");this.N&&(b.Fc.ptype="embedded");var c=this.g.getVideoData().Cu;c&&(b.Ob={ad_tracking:c});if(a=g.Ct(a))this.B=g.Ui(a,b)};
g.h.kJ=function(a,b){var c=this.B=null;if(200==b.status){var d=b.responseText;")]}"==d.substring(0,3)&&(d=d.substring(3),c=JSON.parse(d),c=this.P?Nqa(c,this.N?"new":"current"):Oqa(c))}a7(this,c)};
g.h.Wr=function(){if(this.o&&this.o.elements){var a=this.g.Wz(),b=a.width,c=a.height;if(0!=b&&0!=c){var d=b/c,e;e=o4(this.g.app.A.G).width;for(var f=null,k=-1,l=0;l<g.v3.length;l++){var m=Math.abs(e-g.v3[l]);if(-1==k||f>=m)k=l,f=m}e=g.w3[k];for(f=0;f<this.o.elements.length;++f){var l=this.o.elements[f].id,k=this.A[l],m=this.D[l],n=m.width*d/m.aspectRatio,l=Math.round(n*c),q=a.left+Math.round(m.left*b),t=a.top+Math.round(m.top*c);g.sk(k.element,Math.round(m.width*b),l);g.hk(k.element,q,t);g.oh(k.element,
lsa);q=m.left+m.width/2;m=m.top+n/2;g.O(k.element,.5>=q&&.5>=m?"ytp-ce-top-left-quad":.5<q&&.5>=m?"ytp-ce-top-right-quad":.5>=q&&.5<m?"ytp-ce-bottom-left-quad":"ytp-ce-bottom-right-quad");g.oh(k.element,g.w3);g.O(k.element,e);(k=g.Ee("div","ytp-ce-expanding-overlay-body",k.element)[0])&&g.Zj(k,"height",l+"px")}}}};
g.h.iA=function(a){if(this.o)if("ytp-ce-in-endscreen"==a.getId())this.F=!1,this.o.skip&&1==this.g.xk()?(a=this.g,(a=g.nm(a.app,a.playerType||1))&&g.KU(a,!0),this.g.Nc(window.Infinity),this.F=!0):(e7(this,this.o.impressionUrls),v6([this.o.visualElement]));else if(!this.F){a=a.getId().substring(15);var b=this.A[a],c=this.D[a];g.O(b.element,"ytp-ce-element-show");b.element.removeAttribute("aria-hidden");e7(this,c.impressionUrls);v6([c.visualElement]);g.V(this.g).Gb&&this.g.wa("endscreenelementshown",
a)}};
g.h.jA=function(a){if("ytp-ce-in-endscreen"!=a.getId()&&!this.F){a=a.getId().substring(15);var b=this.A[a];g.nh(b.element,"ytp-ce-element-show");b.element.setAttribute("aria-hidden",!0);g.V(this.g).Gb&&this.g.wa("endscreenelementhidden",a)}};
g.h.gx=function(a,b){if(a.targetUrl&&(!b||"keypress"!=b.type||13==b.keyCode)){for(var c=b.target;c&&!g.lh(c,"ytp-ce-element");){g.lh(c,"subscribe-label")&&f7(this,a);if(g.lh(c,"ytp-ce-channel-subscribe"))return;c=g.df(c)}if(!c||g.lh(c,"ytp-ce-element-hover"))b.preventDefault(),b.stopPropagation(),b.ctrlKey||b.metaKey||"new"==a.lk?(f7(this,a),this.wy(),this.g.rd(),g.mv(a.targetUrl,void 0,a.pd)):(c=(0,g.z)(this.wy,this,g.A(g.lv,a.targetUrl,a.pd)),f7(this,a,c))}};
g.h.Vr=function(a,b){g.lh(a.element,"ytp-ce-element-hover")||(g.O(a.element,"ytp-ce-element-hover"),e7(this,b.Dv),d7(this,b.id,!0),kra(this,a,!0))};
g.h.kA=function(a,b){g.nh(a.element,"ytp-ce-element-hover");g.nh(a.element,"ytp-ce-force-expand");d7(this,b.id,!1);kra(this,a,!1)};
g.h.wy=function(a){this.g.Hh(17,a)};
g.h.R=function(){this.g.removeEventListener("crn_creatorendscreen",this.iA,this);this.g.removeEventListener("crx_creatorendscreen",this.jA,this);$6.M.R.call(this)};g.C(m7,g.jq);g.C(n7,g.jq);g.C(qra,g.jq);g.C(o7,g.jq);
var msa=new g.kq("subscription-subscribe",n7),nsa=new g.kq("subscription-subscribe-loading",m7),osa=new g.kq("subscription-subscribe-loaded",m7),psa=new g.kq("subscription-subscribe-success",qra),qsa=new g.kq("subscription-unsubscribe",o7),rsa=new g.kq("subscription-unsubscirbe-loading",m7),ssa=new g.kq("subscription-unsubscribe-loaded",m7),tsa=new g.kq("subscription-unsubscribe-success",m7),usa=new g.kq("subscription-enable-ypc",m7),vsa=new g.kq("subscription-disable-ypc",m7);var q7={},wsa="ontouchstart"in window.document;g.Lk(window.document,"blur",r7,!0);g.Lk(window.document,"change",r7,!0);g.Lk(window.document,"click",r7);g.Lk(window.document,"focus",r7,!0);g.Lk(window.document,"mouseover",r7);g.Lk(window.document,"mouseout",r7);g.Lk(window.document,"mousedown",r7);g.Lk(window.document,"keydown",r7);g.Lk(window.document,"keyup",r7);g.Lk(window.document,"keypress",r7);g.Lk(window.document,"cut",r7);g.Lk(window.document,"paste",r7);
wsa&&(g.Lk(window.document,"touchstart",r7),g.Lk(window.document,"touchend",r7),g.Lk(window.document,"touchcancel",r7));g.h=s7.prototype;g.h.Jd=function(a){return g.pf(a,Z(this))};
g.h.unregister=function(){g.Ni(this.H);this.H.length=0;g.Kq(this.G);this.G.length=0};
g.h.init=g.w;g.h.dispose=g.w;g.h.addBehavior=function(a,b,c){c=Z(this,c);var d=(0,g.z)(b,this);a in q7||(q7[a]=new g.If);q7[a].subscribe(c,d);this.F[b]=d};
g.h.removeBehavior=function(a,b,c){if(a in q7){var d=q7[a];d.unsubscribe(Z(this,c),this.F[b]);0>=d.Cc()&&(d.dispose(),delete q7[a])}delete this.F[b]};
g.h.Qh=function(a,b,c){var d=this.va(a,b);if(d&&(d=g.u(d))){var e=g.pb(arguments,2);g.qb(e,0,0,a);d.apply(null,e)}};
g.h.va=function(a,b){return g.gh(a,b)};
g.h.setData=function(a,b,c){g.hh(a,b,c)};g.C(v7,s7);g.pa(v7);g.h=v7.prototype;g.h.register=function(){this.addBehavior("click",this.BB);this.addBehavior("keydown",this.gw);this.addBehavior("keypress",this.hw);t7(this,"page-scroll",this.uF)};
g.h.unregister=function(){this.removeBehavior("click",this.BB);this.removeBehavior("keydown",this.gw);this.removeBehavior("keypress",this.hw);B7(this);this.o={};v7.M.unregister.call(this)};
g.h.BB=function(a){a&&!a.disabled&&(wra(this,a),this.click(a))};
g.h.gw=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=A7(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=l7(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.wH:"table"==e&&(f=this.vH);f&&rra(this,a,b,c,(0,g.z)(f,this))}}};
g.h.uF=function(){var a=this.o;if(0!=g.Kb(a))for(var b in a){var c=a[b],d=g.pf(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;z7(this,d,c,!0)}};
g.h.hw=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=A7(this,a),g7(a)&&c.preventDefault())};
g.h.vH=function(a,b,c){var d=w7(this,b);if(d){var e=pra("table",b);b=g.Ee("td",null,e);d=tra(d,b,g.Ee("td",null,pra("tr",e)).length,c);-1!=d&&(sra(this,a,b[d]),c.preventDefault())}};
g.h.wH=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=w7(this,b);d&&(b=(0,g.$e)(g.Ee("li",null,b),g7),sra(this,a,b[tra(d,b,1,c)]),c.preventDefault())}};
g.h.DB=function(a){if(a){var b=A7(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.va(a,"button-has-sibling-menu")?c=a.parentNode:c=ura(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=y7(this,a);d&&c.appendChild(d);(c=!!this.va(a,"button-menu-fixed"))&&(this.o[i7(a).toString()]=b);z7(this,a,b,c);g.Qi("yt-uix-button-menu-before-show",a,b);g.dl(b);
d&&g.dl(d);this.Qh(a,"button-menu-action",!0);g.O(a,Z(this,"active"));b=(0,g.z)(this.CB,this,a,!1);d=(0,g.z)(this.CB,this,a,!0);c=(0,g.z)(this.kN,this,a,void 0);this.g&&A7(this,this.g)==A7(this,a)||B7(this);g.Pi("yt-uix-button-menu-show",a);(0,g.gl)(this.A);this.A=[g.Lk(window.document,"click",d),g.Lk(window.document,"contextmenu",b),g.Lk(window,"resize",c)];this.g=a}}};
g.h.kN=function(a,b){var c=A7(this,a);if(c){b&&(b instanceof g.he?c.innerHTML=g.ie(b):g.gf(c,b));var d=!!this.va(a,"button-menu-fixed");z7(this,a,c,d)}};
g.h.Zc=function(a){return g.M(Z(this,"content"),a)};
g.h.CB=function(a,b,c){c=g.Ok(c);var d=g.pf(c,Z(this));if(d){var d=A7(this,d),e=A7(this,a);if(d==e)return}var d=g.pf(c,Z(this,"menu")),e=d==A7(this,a),f=g.lh(c,Z(this,"menu-item")),k=g.lh(c,Z(this,"menu-close"));if(!d||e&&(f||k))x7(this,a),d&&b&&this.va(a,"button-menu-indicate-selected")&&((a=g.M(Z(this,"content"),a))&&g.gf(a,k7(c)),vra(this,d,c))};
g.h.isToggled=function(a){return g.lh(a,Z(this,"toggled"))};
g.h.click=function(a){if(A7(this,a)){var b=A7(this,a);if(b){var c=g.pf(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(x7(this,c),g.ti((0,g.z)(this.DB,this,a),1)):g7(b)?x7(this,a):this.DB(a)}a.focus()}this.Qh(a,"button-action")};g.C(C7,s7);g.h=C7.prototype;g.h.Jd=function(a){var b=s7.prototype.Jd.call(this,a);return b?b:a};
g.h.register=function(){t7(this,"yt-uix-kbd-nav-move-out-done",this.Ff)};
g.h.dispose=function(){C7.M.dispose.call(this);D7(this)};
g.h.va=function(a,b){var c=C7.M.va.call(this,a,b);return c?c:(c=C7.M.va.call(this,a,"card-config"))&&(c=g.u(c))&&c[b]?c[b]:null};
g.h.show=function(a){var b=this.Jd(a);if(b){g.O(b,Z(this,"active"));var c=xra(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;yra(this,a,c);var d=Z(this,"card-visible"),e=this.va(a,"card-delegate-show")&&this.va(b,"card-action");this.Qh(b,"card-action",a);this.A=a;g.el(c);g.ti((0,g.z)(function(){e||(g.dl(c),g.Pi("yt-uix-card-show",b,a,c));zra(c);g.O(c,d);g.Pi("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
g.h.Ff=function(a){if(a=this.Jd(a)){var b=g.De(Z(this,"card")+i7(a));b&&(g.nh(a,Z(this,"active")),g.nh(b,Z(this,"card-visible")),g.el(b),this.A=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(g.Ye(b.cardMask),b.cardMask=null))}};
g.h.jN=function(a,b){var c=this.Jd(a);if(c){if(b){var d=this.qc(c);if(!d)return;b instanceof g.he?d.innerHTML=g.ie(b):g.gf(d,b)}g.lh(c,Z(this,"active"))&&(c=xra(this,a,c),yra(this,a,c),g.dl(c),zra(c))}};
g.h.isActive=function(a){return(a=this.Jd(a))?g.lh(a,Z(this,"active")):!1};
g.h.qc=function(a){var b=a.cardContentNode;if(!b){var c=Z(this,"content"),d=Z(this,"card-content");(b=(b=this.va(a,"card-id"))?g.De(b):g.M(c,a))||(b=window.document.createElement("div"));var e=b;g.nh(e,c);g.O(e,d);a.cardContentNode=b}return b};var F7;g.C(E7,s7);g.pa(E7);g.h=E7.prototype;g.h.register=function(){this.addBehavior("keydown",this.lv);t7(this,"yt-uix-kbd-nav-move-in",this.Fw);t7(this,"yt-uix-kbd-nav-move-in-to",this.OH);t7(this,"yt-uix-kbd-move-next",this.Gw);t7(this,"yt-uix-kbd-nav-move-to",this.Nl)};
g.h.unregister=function(){this.removeBehavior("keydown",this.lv);(0,g.gl)(F7)};
g.h.lv=function(a,b,c){var d=c.keyCode;if(a=g.pf(a,Z(this)))switch(d){case 13:case 32:this.Fw(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=W5(a,"kbdNavMoveOut");!c;){c=g.pf(a.parentElement,Z(this));if(!c)break a;c=W5(c,"kbdNavMoveOut")}c=g.De(c);this.Nl(c);g.Pi("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&g.lh(a,Z(this,"list")))switch(d){case 40:this.Gw(b,a);break;case 38:d=window.document.activeElement==a,a=Cra(a),b=a.indexOf(b),0>b&&!d||(b=
d?a.length-1:(a.length+b-1)%a.length,a[b].focus(),Bra(this,a[b]))}c.preventDefault()}};
g.h.Fw=function(a){var b=W5(a,"kbdNavMoveIn"),b=g.De(b);Ara(this,a,b);this.Nl(b)};
g.h.OH=function(a){Ara(this,g.qf(),a);this.Nl(a)};
g.h.Nl=function(a){if(a)if(g.mf(a))a.focus();else{var b=l7(a,function(a){return g.wa(a)&&1==a.nodeType?g.mf(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
g.h.Gw=function(a,b){var c=window.document.activeElement==b,d=Cra(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Bra(this,d[c]))};g.C(G7,s7);g.pa(G7);g.h=G7.prototype;g.h.register=function(){this.addBehavior("click",this.EB);this.addBehavior("mouseenter",this.oF);t7(this,"page-scroll",this.CF);t7(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.Jd(a);K7(this,a)});
this.B=new g.If};
g.h.unregister=function(){this.removeBehavior("click",this.EB);this.o=this.g=null;(0,g.gl)(g.Cb(g.Mb(this.A)));this.A={};g.Gb(this.D,function(a){g.Ye(a)},this);
this.D={};g.Eb(this.B);this.B=null;G7.M.unregister.call(this)};
g.h.EB=function(a,b,c){a&&(b=N7(this,a),!b.disabled&&h7(c.target,b)&&Fra(this,a))};
g.h.oF=function(a,b,c){a&&g.lh(a,Z(this,"hover"))&&h7(c.target,N7(this,a))&&Fra(this,a,!0)};
g.h.CF=function(){this.g&&this.o&&Dra(this,this.o,this.g)};
g.h.FB=function(a){if(a){var b=M7(this,a);if(b){g.Qi("yt-uix-menu-before-show",a,b);this.g?h7(a,this.g)||K7(this,this.o):(this.o=a,this.g=b,g.lh(a,Z(this,"sibling-content"))||(g.Ye(b),window.document.body.appendChild(b)),b.style.minWidth=N7(this,a).offsetWidth-2+"px");var c=I7(this,a);c&&g.We(c,b);g.nh(b,Z(this,"content-hidden"));Dra(this,a,b);g.mh(N7(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);g.Pi("yt-uix-menu-show",a);Ira(b);Gra(this,a);g.Pi("yt-uix-kbd-nav-move-in-to",b);var d=
(0,g.z)(this.oR,this,a),e=(0,g.z)(this.tH,this,a),c=g.ya(a).toString();this.A[c]=[g.Lk(b,"click",e),g.Lk(window.document,"click",d)];g.lh(a,Z(this,"indicate-selected"))&&(d=(0,g.z)(this.uH,this,a),this.A[c].push(g.Lk(b,"click",d)));g.lh(a,Z(this,"hover"))&&(a=(0,g.z)(this.nR,this,a),this.A[c].push(g.Lk(window.document,"mousemove",a)))}}};
g.h.nR=function(a,b){var c=g.Ok(b);c&&(h7(c,N7(this,a))||Jra(this,c)||L7(this,a))};
g.h.oR=function(a,b){var c=g.Ok(b);if(c){if(Jra(this,c)){var d=g.pf(c,Z(this,"content")),e=g.of(c,"LI");e&&d&&g.ef(d,e)&&g.Qi("yt-uix-menu-item-clicked",c);c=g.pf(c,Z(this,"close-on-select"));if(!c)return;d=H7(c)}K7(this,d||a)}};
g.h.tH=function(a,b){var c=g.Ok(b);c&&Hra(this,a,c)};
g.h.uH=function(a,b){var c=g.Ok(b);if(c){var d=N7(this,a);if(d&&(c=g.of(c,"LI")))if(c=k7(c).trim(),d.hasChildNodes()){var e=v7.getInstance();(d=g.M(Z(e,"content"),d))&&g.gf(d,c)}else g.gf(d,c)}};g.C(O7,C7);g.pa(O7);g.h=O7.prototype;g.h.register=function(){O7.M.register.call(this);this.addBehavior("click",this.du,"target");this.addBehavior("click",this.cu,"close")};
g.h.unregister=function(){O7.M.unregister.call(this);this.removeBehavior("click",this.du,"target");this.removeBehavior("click",this.cu,"close");for(var a in this.g)(0,g.gl)(this.g[a]);this.g={};for(a in this.o)(0,g.gl)(this.o[a]);this.o={}};
g.h.du=function(a,b,c){c.preventDefault();b=g.of(c.target,"button");b&&b.disabled||(a=(b=this.va(a,"card-target"))?g.y(b)?window.document.getElementById(b):b:a,b=this.Jd(a),this.va(b,"disabled")||(g.lh(b,Z(this,"active"))?(this.Ff(a),g.nh(b,Z(this,"active"))):(this.show(a),g.O(b,Z(this,"active")))))};
g.h.show=function(a){O7.M.show.call(this,a);var b=this.Jd(a),c=g.ya(a).toString();if(!g.gh(b,"click-outside-persists")){if(this.g[c])return;var b=g.Lk(window.document,"click",(0,g.z)(this.eu,this,a)),d=g.Lk(window,"blur",(0,g.z)(this.eu,this,a));this.g[c]=[b,d]}a=g.Lk(window,"resize",(0,g.z)(this.jN,this,a,void 0));this.o[c]=a};
g.h.Ff=function(a){O7.M.Ff.call(this,a);a=g.ya(a).toString();var b=this.g[a];b&&((0,g.gl)(b),this.g[a]=null);if(b=this.o[a])(0,g.gl)(b),delete this.o[a]};
g.h.eu=function(a,b){var c="yt-uix"+(this.C?"-"+this.C:"")+"-card",d=null;b.target&&(d=g.pf(b.target,c)||g.pf(H7(b.target),c));(d=d||g.pf(window.document.activeElement,c)||g.pf(H7(window.document.activeElement),c))||this.Ff(a)};
g.h.cu=function(a){(a=g.pf(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.Ff(a)};g.C(P7,C7);g.pa(P7);g.h=P7.prototype;g.h.register=function(){this.addBehavior("mouseenter",this.Bw,"target");this.addBehavior("mouseleave",this.Dw,"target");this.addBehavior("mouseenter",this.Cw,"card");this.addBehavior("mouseleave",this.Ew,"card")};
g.h.unregister=function(){this.removeBehavior("mouseenter",this.Bw,"target");this.removeBehavior("mouseleave",this.Dw,"target");this.removeBehavior("mouseenter",this.Cw,"card");this.removeBehavior("mouseleave",this.Ew,"card")};
g.h.Bw=function(a){if(Z7!=a){Z7&&(this.Ff(Z7),Z7=null);var b=(0,g.z)(this.show,this,a),c=(0,window.parseInt)(this.va(a,"delay-show"),10),b=g.ti(b,-1<c?c:200);this.setData(a,"card-timer",b.toString());Z7=a;a.alt&&(this.setData(a,"card-alt",a.alt),a.alt="");a.title&&(this.setData(a,"card-title",a.title),a.title="")}};
g.h.Dw=function(a){var b=(0,window.parseInt)(this.va(a,"card-timer"),10);g.ri(b);this.Jd(a).isCardHidable=!0;b=(0,window.parseInt)(this.va(a,"delay-hide"),10);b=-1<b?b:200;g.ti((0,g.z)(this.dG,this,a),b);if(b=this.va(a,"card-alt"))a.alt=b;if(b=this.va(a,"card-title"))a.title=b};
g.h.dG=function(a){this.Jd(a).isCardHidable&&(this.Ff(a),Z7=null)};
g.h.Cw=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.h.Ew=function(a){a&&this.Ff(a.cardTargetNode)};
var Z7=null;var Mra={LOADING:"loading",hC:"content",GY:"working"};g.h=Q7.prototype;
g.h.show=function(){if(!this.isDisposed()){this.F=window.document.activeElement;if(!this.N){this.o||(this.o=g.De("yt-dialog-bg"),this.o||(this.o=g.Re("div"),this.o.id="yt-dialog-bg",this.o.className="yt-dialog-bg",window.document.body.appendChild(this.o)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=g.Je(b).height,g.Ie(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.o.style.height=a+"px";g.dl(this.o)}this.Bv();a=Ora(this);Pra(a);this.C=g.Lk(window.document,"keydown",(0,g.z)(this.bH,this));a=this.g;d=g.Mi("player-added",this.Bv,this);g.hh(a,"player-ready-pubsub-key",d);this.P&&(this.D=g.Lk(window.document,"click",(0,g.z)(this.eM,this)));g.dl(this.g);this.A.setAttribute("tabindex","0");Rra(this);this.H||g.O(window.document.body,"yt-dialog-active");B7(v7.getInstance());D7(O7.getInstance());D7(P7.getInstance());
g.Pi("yt-ui-dialog-show-complete",this)}};
g.h.Bv=function(){if(!this.X){var a=this.g;g.P(window.document.body,"hide-players",!0);a&&g.P(a,"preserve-players",!0)}};
g.h.FI=function(a){a=a.currentTarget;a.disabled||(a=g.gh(a,"action")||"",this.dismiss(a))};
g.h.dismiss=function(a){if(!this.isDisposed()){this.B.V("pre-all");this.B.V("pre-"+a);g.el(this.g);D7(O7.getInstance());D7(P7.getInstance());this.A.setAttribute("tabindex","-1");Nra()||(g.el(this.o),this.H||g.nh(window.document.body,"yt-dialog-active"),ora(),Qra());this.C&&((0,g.gl)(this.C),this.C=null);this.D&&((0,g.gl)(this.D),this.D=null);var b=this.g;if(b){var c=g.gh(b,"player-ready-pubsub-key");c&&(g.Ni(c),j7(b,"player-ready-pubsub-key"))}this.B.V("post-all");g.Pi("yt-ui-dialog-hide-complete",
this);"cancel"==a&&g.Pi("yt-ui-dialog-cancelled",this);this.B&&this.B.V("post-"+a);this.F&&this.F.focus()}};
g.h.setTitle=function(a){g.gf(g.M("yt-dialog-title",this.g),a)};
g.h.bH=function(a){g.ti((0,g.z)(function(){this.O||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&g.lh(window.document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.h.eM=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.h.isDisposed=function(){return this.L};
g.h.dispose=function(){g7(this.g)&&this.dismiss("dispose");(0,g.gl)(this.G);this.G.length=0;g.ti((0,g.z)(function(){this.F=null},this),0);
this.J=this.A=null;this.B.dispose();this.B=null;this.L=!0};
g.h.PE=function(a){a.stopPropagation();Rra(this)};
g.oa("yt.ui.Dialog",Q7,void 0);g.C(R7,s7);g.pa(R7);g.h=R7.prototype;g.h.register=function(){this.addBehavior("click",this.$q,"target");this.addBehavior("click",this.GB,"close");Tra(this)};
g.h.unregister=function(){R7.M.unregister.call(this);this.removeBehavior("click",this.$q,"target");this.removeBehavior("click",this.GB,"close");this.B&&(g.Ni(this.B),this.B=null);this.o&&((0,g.gl)(this.o),this.o=null)};
g.h.$q=function(a){if(!this.g||!g7(this.g.g)){var b=this.Jd(a);a=Vra(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.va(b,"disable-shortcuts")||!1,d=!!this.va(b,"disable-outside-click-dismiss")||!1;this.g=new Q7(a,c);this.A=b;var e=g.M("yt-dialog-fg",a);if(e){var f=this.va(b,"overlay-class")||"",k=this.va(b,"overlay-style")||"default",l=this.va(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,k));f.push(Z(this,l));g.mh(e,f)}this.g.show();g.Pi("yt-uix-kbd-nav-move-to",e||
a);Tra(this);c||d||(c=(0,g.z)(function(a){g.lh(a.target,"yt-dialog-base")&&Ura(this)},this),this.o=g.Lk(g.M("yt-dialog-base",a),"click",c));
this.Qh(b,"overlay-shown");g.Pi("yt-uix-overlay-shown",b)}}};
g.h.qc=function(a){return g.M("yt-dialog-content",a.overlayContentNode||a)};
g.h.GB=function(a){a&&a.disabled||g.Pi("yt-uix-overlay-hide")};
g.h.show=function(a){this.$q(a)};var T7={},S7=[];g.oa("yt.pubsub.publish",g.Pi,void 0);g.C(U7,s7);g.pa(U7);g.h=U7.prototype;g.h.register=function(){this.addBehavior("mouseover",this.Dm);this.addBehavior("mouseout",this.yh);this.addBehavior("focus",this.Ku);this.addBehavior("blur",this.Nt);this.addBehavior("click",this.yh);this.addBehavior("touchstart",this.ez);this.addBehavior("touchend",this.ln);this.addBehavior("touchcancel",this.ln)};
g.h.unregister=function(){this.removeBehavior("mouseover",this.Dm);this.removeBehavior("mouseout",this.yh);this.removeBehavior("focus",this.Ku);this.removeBehavior("blur",this.Nt);this.removeBehavior("click",this.yh);this.removeBehavior("touchstart",this.ez);this.removeBehavior("touchend",this.ln);this.removeBehavior("touchcancel",this.ln);this.dispose();U7.M.unregister.call(this)};
g.h.dispose=function(){for(var a in this.o)this.yh(this.o[a]);this.o={}};
g.h.Dm=function(a){if(!(this.g&&1E3>(0,g.G)()-this.g)){var b=(0,window.parseInt)(this.va(a,"tooltip-hide-timer"),10);b&&(j7(a,"tooltip-hide-timer"),g.ri(b));var b=(0,g.z)(function(){esa(this,a);j7(a,"tooltip-show-timer")},this),c=(0,window.parseInt)(this.va(a,"tooltip-show-delay"),10)||0,b=g.ti(b,c);
this.setData(a,"tooltip-show-timer",b.toString());a.title&&(this.setData(a,"tooltip-text",bsa(this,a)),a.title="");b=g.ya(a).toString();this.o[b]=a}};
g.h.yh=function(a){var b=(0,window.parseInt)(this.va(a,"tooltip-show-timer"),10);b&&(g.ri(b),j7(a,"tooltip-show-timer"));b=(0,g.z)(function(){if(a){var b=g.De(V7(this,a));b&&(fsa(b),g.Ye(b),j7(a,"content-id"));b=g.De(V7(this,a,"arialabel"));g.Ye(b)}j7(a,"tooltip-hide-timer")},this);
b=g.ti(b,50);this.setData(a,"tooltip-hide-timer",b.toString());if(b=this.va(a,"tooltip-text"))a.title=b;b=g.ya(a).toString();delete this.o[b]};
g.h.Ku=function(a){this.g=0;this.Dm(a)};
g.h.Nt=function(a){this.g=0;this.yh(a)};
g.h.ez=function(a,b,c){c.changedTouches&&(this.g=0,(a=p7(b,Z(this),c.changedTouches[0].target))&&this.Dm(a))};
g.h.ln=function(a,b,c){c.changedTouches&&(this.g=(0,g.G)(),(a=p7(b,Z(this),c.changedTouches[0].target))&&this.yh(a))};g.C(W7,s7);g.pa(W7);W7.prototype.register=function(){this.addBehavior("click",this.xs);u7(this,nsa,this.lx);u7(this,osa,this.HB);u7(this,psa,this.oL);u7(this,rsa,this.lx);u7(this,ssa,this.HB);u7(this,tsa,this.CL);u7(this,usa,this.gJ);u7(this,vsa,this.cJ)};
W7.prototype.unregister=function(){this.removeBehavior("click",this.xs);W7.M.unregister.call(this)};
var Y7={zs:"hover-enabled",YB:"yt-uix-button-subscribe",ZB:"yt-uix-button-subscribed",yS:"ypc-enabled",fC:"yt-uix-button-subscription-container",gC:"yt-subscription-button-disabled-mask-container"},X7={OS:"channel-external-id",iC:"subscriber-count-show-when-subscribed",jC:"subscriber-count-tooltip",kC:"subscriber-count-title",xU:"href",GU:"insecure",Ms:"is-subscribed",kW:"parent-url",fX:"clicktracking",sD:"show-unsub-confirm-dialog",iX:"show-unsub-confirm-time-frame",xD:"style-type",jt:"subscribed-timestamp",
kt:"subscription-id",GX:"target",PD:"ypc-enabled"};g.h=W7.prototype;
g.h.xs=function(a){var b=this.va(a,"href"),c=this.va(a,"insecure"),d=$ra(),c=c&&!0;if(b)a=this.va(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.va(a,"channel-external-id"),d=this.va(a,"clicktracking"),c=gsa(this,a),e=this.va(a,"parent-url");if(this.va(a,"is-subscribed")){var f=this.va(a,"subscription-id"),k=new o7(b,f,c,a,d,e);ksa(this,a)?Yra(a,b).then(function(){g.Eq(qsa,k)}):g.Eq(qsa,k)}else g.Eq(msa,new n7(b,c,d,e))}else jsa(this,a)};
g.h.lx=function(a){this.Mh(a.g,this.Iy,!0)};
g.h.HB=function(a){this.Mh(a.g,this.Iy,!1)};
g.h.oL=function(a){this.Mh(a.g,this.Ny,!0,a.o)};
g.h.CL=function(a){this.Mh(a.g,this.Ny,!1)};
g.h.gJ=function(a){this.Mh(a.g,this.FE)};
g.h.cJ=function(a){this.Mh(a.g,this.AE)};
g.h.Ny=function(a,b,c){b?(this.setData(a,X7.Ms,"true"),c&&this.setData(a,X7.kt,c),this.va(a,X7.sD)&&(b=new Z6,this.setData(a,X7.jt,(b.getTime()/1E3).toString()))):(j7(a,X7.Ms),j7(a,X7.jt),j7(a,X7.kt));hsa(this,a)};
g.h.Iy=function(a,b){var c=g.pf(a,Y7.fC);g.P(c,Y7.gC,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
g.h.FE=function(a){var b=!!this.va(a,"ypc-item-type"),c=!!this.va(a,"ypc-item-id");!this.va(a,"ypc-enabled")&&b&&c&&(g.O(a,"ypc-enabled"),this.setData(a,X7.PD,"true"))};
g.h.AE=function(a){this.va(a,"ypc-enabled")&&(g.nh(a,"ypc-enabled"),j7(a,"ypc-enabled"))};
g.h.dE=function(a,b,c){var d=g.pb(arguments,2);(0,g.H)(a,function(a){b.apply(this,g.lb(a,d))},this)};
g.h.Mh=function(a,b,c){var d=isa(this,a);this.dE.apply(this,g.lb([d],g.pb(arguments,1)))};var $7=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};g.oa("yt.uix.widgets_",$7,void 0);window._exportCheck==g.Aa&&(g.oa("ytmod.player.annotations_module",T6,void 0),g.oa("ytmod.player.creatorendscreen",$6,void 0));var a8=W7.getInstance(),b8=Z(a8);b8 in $7||(a8.register(),t7(a8,"yt-uix-init-"+b8,a8.init),t7(a8,"yt-uix-dispose-"+b8,a8.dispose),$7[b8]=a8);})(_yt_player);
