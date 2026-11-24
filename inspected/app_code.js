const f4=()=>{const[t,e]=re.useState(!1);return re.useEffect(()=>{const n=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),P.jsx("nav",{className:"fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3",children:P.jsxs("div",{className:`glass max-w-7xl mx-auto rounded-2xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${t?"py-2.5 !bg-[#111113]/80":"py-3.5"}`,children:[P.jsxs("a",{href:"/",className:"text-white text-2xl font-black tracking-tight uppercase group flex items-center",children:[P.jsx("span",{className:"text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]",children:"S"}),P.jsx("span",{className:"group-hover:text-red-500 transition-colors duration-300",children:"HUBHAM"})]}),P.jsx("div",{className:"hidden md:flex items-center gap-8",children:["Projects","About","Education","Skills","Contact"].map(n=>P.jsxs("a",{href:`#${n.toLowerCase()}`,className:"relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group",children:[n,P.jsx("span",{className:"absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"})]},n))}),P.jsx("div",{className:"hidden sm:block",children:P.jsx("a",{href:"#contact",className:"glass-red inline-block px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider",children:"Let's Talk"})})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const R_="169",d4=0,c2=1,h4=2,$T=1,p4=2,Es=3,Uo=0,bi=1,ss=2,Ao=0,Zl=1,ev=2,u2=3,f2=4,m4=5,pa=100,g4=101,v4=102,_4=103,x4=104,y4=200,S4=201,M4=202,w4=203,tv=204,nv=205,E4=206,T4=207,A4=208,b4=209,C4=210,R4=211,P4=212,L4=213,D4=214,iv=0,rv=1,sv=2,mc=3,ov=4,av=5,lv=6,cv=7,qT=0,N4=1,I4=2,bo=0,U4=1,F4=2,O4=3,KT=4,k4=5,B4=6,z4=7,ZT=300,gc=301,vc=302,uv=303,fv=304,nm=306,dv=1e3,xa=1001,hv=1002,Oi=1003,V4=1004,gd=1005,Ei=1006,jm=1007,ya=1008,Gs=1009,JT=1010,QT=1011,_f=1012,P_=1013,za=1014,Ds=1015,jf=1016,L_=1017,D_=1018,_c=1020,e3=35902,t3=1021,n3=1022,$r=1023,i3=1024,r3=1025,Jl=1026,xc=1027,s3=1028,N_=1029,o3=1030,I_=1031,U_=1033,Eh=33776,Th=33777,Ah=33778,bh=33779,pv=35840,mv=35841,gv=35842,vv=35843,_v=36196,xv=37492,yv=37496,Sv=37808,Mv=37809,wv=37810,Ev=37811,Tv=37812,Av=37813,bv=37814,Cv=37815,Rv=37816,Pv=37817,Lv=37818,Dv=37819,Nv=37820,Iv=37821,Ch=36492,Uv=36494,Fv=36495,a3=36283,Ov=36284,kv=36285,Bv=36286,H4=3200,G4=3201,l3=0,W4=1,co="",Mr="srgb",jo="srgb-linear",F_="display-p3",im="display-p3-linear",pp="linear",$t="srgb",mp="rec709",gp="p3",tl=7680,d2=519,j4=512,X4=513,Y4=514,c3=515,$4=516,q4=517,K4=518,Z4=519,h2=35044,p2="300 es",Ns=2e3,vp=2001;class Nc{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let m2=1234567;const Ql=Math.PI/180,xf=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[t&255]+ti[t>>8&255]+ti[t>>16&255]+ti[t>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[n&63|128]+ti[n>>8&255]+"-"+ti[n>>16&255]+ti[n>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function kn(t,e,n){return Math.max(e,Math.min(n,t))}function O_(t,e){return(t%e+e)%e}function J4(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Q4(t,e,n){return t!==e?(n-t)/(e-t):0}function Uu(t,e,n){return(1-n)*t+n*e}function e5(t,e,n,i){return Uu(t,e,1-Math.exp(-n*i))}function t5(t,e=1){return e-Math.abs(O_(t,e*2)-e)}function n5(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function i5(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function r5(t,e){return t+Math.floor(Math.random()*(e-t+1))}function s5(t,e){return t+Math.random()*(e-t)}function o5(t){return t*(.5-Math.random())}function a5(t){t!==void 0&&(m2=t);let e=m2+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l5(t){return t*Ql}function c5(t){return t*xf}function u5(t){return(t&t-1)===0&&t!==0}function f5(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function d5(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function h5(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const du={DEG2RAD:Ql,RAD2DEG:xf,generateUUID:$a,clamp:kn,euclideanModulo:O_,mapLinear:J4,inverseLerp:Q4,lerp:Uu,damp:e5,pingpong:t5,smoothstep:n5,smootherstep:i5,randInt:r5,randFloat:s5,randFloatSpread:o5,seededRandom:a5,degToRad:l5,radToDeg:c5,isPowerOfTwo:u5,ceilPowerOfTwo:f5,floorPowerOfTwo:d5,setQuaternionFromProperEuler:h5,normalize:mi,denormalize:yl};class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,i,r,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],_=r[1],x=r[4],S=r[7],E=r[2],C=r[5],M=r[8];return s[0]=o*v+a*_+l*E,s[3]=o*m+a*x+l*C,s[6]=o*p+a*S+l*M,s[1]=c*v+u*_+f*E,s[4]=c*m+u*x+f*C,s[7]=c*p+u*S+f*M,s[2]=d*v+h*_+g*E,s[5]=d*m+h*x+g*C,s[8]=d*p+h*S+g*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xm.makeScale(e,n)),this}rotate(e){return this.premultiply(Xm.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xm=new ht;function u3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function p5(){const t=yf("canvas");return t.style.display="block",t}const g2={};function Rh(t){t in g2||(g2[t]=!0,console.warn(t))}function m5(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function g5(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function v5(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const v2=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_2=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$c={[jo]:{transfer:pp,primaries:mp,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Mr]:{transfer:$t,primaries:mp,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[im]:{transfer:pp,primaries:gp,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(_2),fromReference:t=>t.applyMatrix3(v2)},[F_]:{transfer:$t,primaries:gp,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(_2),fromReference:t=>t.applyMatrix3(v2).convertLinearToSRGB()}},_5=new Set([jo,im]),Lt={enabled:!0,_workingColorSpace:jo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_5.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$c[e].toReference,r=$c[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $c[t].primaries},getTransfer:function(t){return t===co?pp:$c[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray($c[e].luminanceCoefficients)}};function ec(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ym(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let nl;class x5{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nl===void 0&&(nl=yf("canvas")),nl.width=e.width,nl.height=e.height;const i=nl.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=nl}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ec(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ec(n[i]/255)*255):n[i]=ec(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y5=0;class f3{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y5++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($m(r[o].image)):s.push($m(r[o]))}else s=$m(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $m(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?x5.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S5=0;class Yn extends Nc{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,i=xa,r=xa,s=Ei,o=ya,a=$r,l=Gs,c=Yn.DEFAULT_ANISOTROPY,u=co){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S5++}),this.uuid=$a(),this.name="",this.source=new f3(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ZT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dv:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case hv:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dv:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case hv:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=ZT;Yn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(h+1)/2,E=(p+1)/2,C=(u+d)/4,M=(f+v)/4,A=(g+m)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=M/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=A/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=A/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M5 extends Nc{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new f3(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends M5{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class d3 extends Yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w5 extends Yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),C=Math.atan2(E,p*_);m=Math.sin(m*C)/E,a=Math.sin(a*C)/E}const S=a*_;if(l=l*m+d*S,c=c*m+h*S,u=u*m+g*S,f=f*m+v*S,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(x2.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(x2.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qm.copy(this).projectOnVector(e),this.sub(qm)}reflect(e){return this.sub(qm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qm=new H,x2=new Co;class Xf{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zr):zr.fromBufferAttribute(s,o),zr.applyMatrix4(e.matrixWorld),this.expandByPoint(zr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vd.copy(i.boundingBox)),vd.applyMatrix4(e.matrixWorld),this.union(vd)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zr),zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qc),_d.subVectors(this.max,qc),il.subVectors(e.a,qc),rl.subVectors(e.b,qc),sl.subVectors(e.c,qc),qs.subVectors(rl,il),Ks.subVectors(sl,rl),Ko.subVectors(il,sl);let n=[0,-qs.z,qs.y,0,-Ks.z,Ks.y,0,-Ko.z,Ko.y,qs.z,0,-qs.x,Ks.z,0,-Ks.x,Ko.z,0,-Ko.x,-qs.y,qs.x,0,-Ks.y,Ks.x,0,-Ko.y,Ko.x,0];return!Km(n,il,rl,sl,_d)||(n=[1,0,0,0,1,0,0,0,1],!Km(n,il,rl,sl,_d))?!1:(xd.crossVectors(qs,Ks),n=[xd.x,xd.y,xd.z],Km(n,il,rl,sl,_d))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xs=[new H,new H,new H,new H,new H,new H,new H,new H],zr=new H,vd=new Xf,il=new H,rl=new H,sl=new H,qs=new H,Ks=new H,Ko=new H,qc=new H,_d=new H,xd=new H,Zo=new H;function Km(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zo.fromArray(t,s);const a=r.x*Math.abs(Zo.x)+r.y*Math.abs(Zo.y)+r.z*Math.abs(Zo.z),l=e.dot(Zo),c=n.dot(Zo),u=i.dot(Zo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const E5=new Xf,Kc=new H,Zm=new H;class Ic{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):E5.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kc.subVectors(e,this.center);const n=Kc.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Kc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kc.copy(e.center).add(Zm)),this.expandByPoint(Kc.copy(e.center).sub(Zm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ys=new H,Jm=new H,yd=new H,Zs=new H,Qm=new H,Sd=new H,e0=new H;class rm{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ys.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,n),ys.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jm.copy(e).add(n).multiplyScalar(.5),yd.copy(n).sub(e).normalize(),Zs.copy(this.origin).sub(Jm);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yd),a=Zs.dot(this.direction),l=-Zs.dot(yd),c=Zs.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jm).addScaledVector(yd,d),h}intersectSphere(e,n){ys.subVectors(e.center,this.origin);const i=ys.dot(this.direction),r=ys.dot(ys)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,n,i,r,s){Qm.subVectors(n,e),Sd.subVectors(i,e),e0.crossVectors(Qm,Sd);let o=this.direction.dot(e0),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zs.subVectors(this.origin,e);const l=a*this.direction.dot(Sd.crossVectors(Zs,Sd));if(l<0)return null;const c=a*this.direction.dot(Qm.cross(Zs));if(c<0||l+c>o)return null;const u=-a*Zs.dot(e0);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ol.setFromMatrixColumn(e,0).length(),s=1/ol.setFromMatrixColumn(e,1).length(),o=1/ol.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T5,e,A5)}lookAt(e,n,i){const r=this.elements;return Zi.subVectors(e,n),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),Js.crossVectors(i,Zi),Js.lengthSq()===0&&(Math.abs(i.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),Js.crossVectors(i,Zi)),Js.normalize(),Md.crossVectors(Zi,Js),r[0]=Js.x,r[4]=Md.x,r[8]=Zi.x,r[1]=Js.y,r[5]=Md.y,r[9]=Zi.y,r[2]=Js.z,r[6]=Md.z,r[10]=Zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],x=i[7],S=i[11],E=i[15],C=r[0],M=r[4],A=r[8],U=r[12],y=r[1],T=r[5],I=r[9],B=r[13],V=r[2],K=r[6],G=r[10],X=r[14],F=r[3],Q=r[7],N=r[11],de=r[15];return s[0]=o*C+a*y+l*V+c*F,s[4]=o*M+a*T+l*K+c*Q,s[8]=o*A+a*I+l*G+c*N,s[12]=o*U+a*B+l*X+c*de,s[1]=u*C+f*y+d*V+h*F,s[5]=u*M+f*T+d*K+h*Q,s[9]=u*A+f*I+d*G+h*N,s[13]=u*U+f*B+d*X+h*de,s[2]=g*C+v*y+m*V+p*F,s[6]=g*M+v*T+m*K+p*Q,s[10]=g*A+v*I+m*G+p*N,s[14]=g*U+v*B+m*X+p*de,s[3]=_*C+x*y+S*V+E*F,s[7]=_*M+x*T+S*K+E*Q,s[11]=_*A+x*I+S*G+E*N,s[15]=_*U+x*B+S*X+E*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,x=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,S=u*v*c-g*f*c+g*a*h-o*v*h-u*a*p+o*f*p,E=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,C=n*_+i*x+r*S+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=_*M,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*M,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*M,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*M,e[4]=x*M,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*M,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*M,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*M,e[8]=S*M,e[9]=(g*f*s-u*v*s-g*i*h+n*v*h+u*i*p-n*f*p)*M,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*M,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*M,e[12]=E*M,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*M,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*M,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,_=l*c,x=l*u,S=l*f,E=i.x,C=i.y,M=i.z;return r[0]=(1-(v+p))*E,r[1]=(h+S)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(h-S)*C,r[5]=(1-(d+p))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+x)*M,r[9]=(m-_)*M,r[10]=(1-(d+v))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ol.set(r[0],r[1],r[2]).length();const o=ol.set(r[4],r[5],r[6]).length(),a=ol.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vr.copy(this);const c=1/s,u=1/o,f=1/a;return Vr.elements[0]*=c,Vr.elements[1]*=c,Vr.elements[2]*=c,Vr.elements[4]*=u,Vr.elements[5]*=u,Vr.elements[6]*=u,Vr.elements[8]*=f,Vr.elements[9]*=f,Vr.elements[10]*=f,n.setFromRotationMatrix(Vr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ns){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===Ns)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vp)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ns){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,v;if(a===Ns)g=(o+s)*f,v=-2*f;else if(a===vp)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ol=new H,Vr=new Ft,T5=new H(0,0,0),A5=new H(1,1,1),Js=new H,Md=new H,Zi=new H,y2=new Ft,S2=new Co;class ps{constructor(e=0,n=0,i=0,r=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return y2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y2,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S2.setFromEuler(this),this.setFromQuaternion(S2,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b5=0;const M2=new H,al=new Co,Ss=new Ft,wd=new H,Zc=new H,C5=new H,R5=new Co,w2=new H(1,0,0),E2=new H(0,1,0),T2=new H(0,0,1),A2={type:"added"},P5={type:"removed"},ll={type:"childadded",child:null},t0={type:"childremoved",child:null};class zn extends Nc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b5++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new H,n=new ps,i=new Co,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ht}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return al.setFromAxisAngle(e,n),this.quaternion.multiply(al),this}rotateOnWorldAxis(e,n){return al.setFromAxisAngle(e,n),this.quaternion.premultiply(al),this}rotateX(e){return this.rotateOnAxis(w2,e)}rotateY(e){return this.rotateOnAxis(E2,e)}rotateZ(e){return this.rotateOnAxis(T2,e)}translateOnAxis(e,n){return M2.copy(e).applyQuaternion(this.quaternion),this.position.add(M2.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(w2,e)}translateY(e){return this.translateOnAxis(E2,e)}translateZ(e){return this.translateOnAxis(T2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wd.copy(e):wd.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(Zc,wd,this.up):Ss.lookAt(wd,Zc,this.up),this.quaternion.setFromRotationMatrix(Ss),r&&(Ss.extractRotation(r.matrixWorld),al.setFromRotationMatrix(Ss),this.quaternion.premultiply(al.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A2),ll.child=e,this.dispatchEvent(ll),ll.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P5),t0.child=e,this.dispatchEvent(t0),t0.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A2),ll.child=e,this.dispatchEvent(ll),ll.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zc,e,C5),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zc,R5,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zn.DEFAULT_UP=new H(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hr=new H,Ms=new H,n0=new H,ws=new H,cl=new H,ul=new H,b2=new H,i0=new H,r0=new H,s0=new H,o0=new Vt,a0=new Vt,l0=new Vt;class br{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hr.subVectors(e,n),r.cross(Hr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hr.subVectors(r,n),Ms.subVectors(i,n),n0.subVectors(e,n);const o=Hr.dot(Hr),a=Hr.dot(Ms),l=Hr.dot(n0),c=Ms.dot(Ms),u=Ms.dot(n0),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ws.x),l.addScaledVector(o,ws.y),l.addScaledVector(a,ws.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return o0.setScalar(0),a0.setScalar(0),l0.setScalar(0),o0.fromBufferAttribute(e,n),a0.fromBufferAttribute(e,i),l0.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(o0,s.x),o.addScaledVector(a0,s.y),o.addScaledVector(l0,s.z),o}static isFrontFacing(e,n,i,r){return Hr.subVectors(i,n),Ms.subVectors(e,n),Hr.cross(Ms).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hr.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Hr.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return br.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return br.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;cl.subVectors(r,i),ul.subVectors(s,i),i0.subVectors(e,i);const l=cl.dot(i0),c=ul.dot(i0);if(l<=0&&c<=0)return n.copy(i);r0.subVectors(e,r);const u=cl.dot(r0),f=ul.dot(r0);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(cl,o);s0.subVectors(e,s);const h=cl.dot(s0),g=ul.dot(s0);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ul,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return b2.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(b2,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(cl,o).addScaledVector(ul,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},Ed={h:0,s:0,l:0};function c0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _t{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Lt.workingColorSpace){if(e=O_(e,1),n=kn(n,0,1),i=kn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=c0(o,s,e+1/3),this.g=c0(o,s,e),this.b=c0(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,n=Mr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mr){const i=h3[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this}copyLinearToSRGB(e){return this.r=Ym(e.r),this.g=Ym(e.g),this.b=Ym(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mr){return Lt.fromWorkingColorSpace(ni.copy(this),e),Math.round(kn(ni.r*255,0,255))*65536+Math.round(kn(ni.g*255,0,255))*256+Math.round(kn(ni.b*255,0,255))}getHexString(e=Mr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.fromWorkingColorSpace(ni.copy(this),n);const i=ni.r,r=ni.g,s=ni.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(ni.copy(this),n),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Mr){Lt.fromWorkingColorSpace(ni.copy(this),e);const n=ni.r,i=ni.g,r=ni.b;return e!==Mr?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qs),this.setHSL(Qs.h+e,Qs.s+n,Qs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qs),e.getHSL(Ed);const i=Uu(Qs.h,Ed.h,n),r=Uu(Qs.s,Ed.s,n),s=Uu(Qs.l,Ed.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new _t;_t.NAMES=h3;let L5=0;class qa extends Nc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L5++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Zl,this.side=Uo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tv,this.blendDst=nv,this.blendEquation=pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zl&&(i.blending=this.blending),this.side!==Uo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tv&&(i.blendSrc=this.blendSrc),this.blendDst!==nv&&(i.blendDst=this.blendDst),this.blendEquation!==pa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d2&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class B_ extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=qT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yn=new H,Td=new ke;class cr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=h2,this.updateRanges=[],this.gpuType=Ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Td.fromBufferAttribute(this,n),Td.applyMatrix3(e),this.setXY(n,Td.x,Td.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix3(e),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix4(e),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yn.fromBufferAttribute(this,n),yn.applyNormalMatrix(e),this.setXYZ(n,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yn.fromBufferAttribute(this,n),yn.transformDirection(e),this.setXYZ(n,yn.x,yn.y,yn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yl(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yl(n,this.array)),n}setX(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yl(n,this.array)),n}setY(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yl(n,this.array)),n}setW(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),i=mi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),i=mi(i,this.array),r=mi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),i=mi(i,this.array),r=mi(r,this.array),s=mi(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h2&&(e.usage=this.usage),e}}class p3 extends cr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m3 extends cr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dr extends cr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let D5=0;const _r=new Ft,u0=new zn,fl=new H,Ji=new Xf,Jc=new Xf,Nn=new H;class Fr extends Nc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D5++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u3(e)?m3:p3)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _r.makeRotationFromQuaternion(e),this.applyMatrix4(_r),this}rotateX(e){return _r.makeRotationX(e),this.applyMatrix4(_r),this}rotateY(e){return _r.makeRotationY(e),this.applyMatrix4(_r),this}rotateZ(e){return _r.makeRotationZ(e),this.applyMatrix4(_r),this}translate(e,n,i){return _r.makeTranslation(e,n,i),this.applyMatrix4(_r),this}scale(e,n,i){return _r.makeScale(e,n,i),this.applyMatrix4(_r),this}lookAt(e){return u0.lookAt(e),u0.updateMatrix(),this.applyMatrix4(u0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fl).negate(),this.translate(fl.x,fl.y,fl.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ji.setFromBufferAttribute(s),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Ji.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jc.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(Ji.min,Jc.min),Ji.expandByPoint(Nn),Nn.addVectors(Ji.max,Jc.max),Ji.expandByPoint(Nn)):(Ji.expandByPoint(Jc.min),Ji.expandByPoint(Jc.max))}Ji.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nn.fromBufferAttribute(a,c),l&&(fl.fromBufferAttribute(e,c),Nn.add(fl)),r=Math.max(r,i.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new H,l[A]=new H;const c=new H,u=new H,f=new H,d=new ke,h=new ke,g=new ke,v=new H,m=new H;function p(A,U,y){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,U),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,U),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(T),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(T),a[A].add(v),a[U].add(v),a[y].add(v),l[A].add(m),l[U].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,U=_.length;A<U;++A){const y=_[A],T=y.start,I=y.count;for(let B=T,V=T+I;B<V;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new H,S=new H,E=new H,C=new H;function M(A){E.fromBufferAttribute(r,A),C.copy(E);const U=a[A];x.copy(U),x.sub(E.multiplyScalar(E.dot(U))).normalize(),S.crossVectors(C,U);const T=S.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,T)}for(let A=0,U=_.length;A<U;++A){const y=_[A],T=y.start,I=y.count;for(let B=T,V=T+I;B<V;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new cr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C2=new Ft,Jo=new rm,Ad=new Ic,R2=new H,bd=new H,Cd=new H,Rd=new H,f0=new H,Pd=new H,P2=new H,Ld=new H;class Zt extends zn{constructor(e=new Fr,n=new B_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pd.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(f0.fromBufferAttribute(f,e),o?Pd.addScaledVector(f0,u):Pd.addScaledVector(f0.sub(n),u))}n.add(Pd)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ad.copy(i.boundingSphere),Ad.applyMatrix4(s),Jo.copy(e.ray).recast(e.near),!(Ad.containsPoint(Jo.origin)===!1&&(Jo.intersectSphere(Ad,R2)===null||Jo.origin.distanceToSquared(R2)>(e.far-e.near)**2))&&(C2.copy(s).invert(),Jo.copy(e.ray).applyMatrix4(C2),!(i.boundingBox!==null&&Jo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jo)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,E=x;S<E;S+=3){const C=a.getX(S),M=a.getX(S+1),A=a.getX(S+2);r=Dd(this,p,e,i,c,u,f,C,M,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Dd(this,o,e,i,c,u,f,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,E=x;S<E;S+=3){const C=S,M=S+1,A=S+2;r=Dd(this,p,e,i,c,u,f,C,M,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,S=m+2;r=Dd(this,o,e,i,c,u,f,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function N5(t,e,n,i,r,s,o,a){let l;if(e.side===bi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Uo,a),l===null)return null;Ld.copy(a),Ld.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ld);return c<n.near||c>n.far?null:{distance:c,point:Ld.clone(),object:t}}function Dd(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,bd),t.getVertexPosition(l,Cd),t.getVertexPosition(c,Rd);const u=N5(t,e,n,i,bd,Cd,Rd,P2);if(u){const f=new H;br.getBarycoord(P2,bd,Cd,Rd,f),r&&(u.uv=br.getInterpolatedAttribute(r,a,l,c,f,new ke)),s&&(u.uv1=br.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(u.normal=br.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};br.getNormal(bd,Cd,Rd,d.normal),u.face=d,u.barycoord=f}return u}class Uc extends Fr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dr(c,3)),this.setAttribute("normal",new Dr(u,3)),this.setAttribute("uv",new Dr(f,2));function g(v,m,p,_,x,S,E,C,M,A,U){const y=S/M,T=E/A,I=S/2,B=E/2,V=C/2,K=M+1,G=A+1;let X=0,F=0;const Q=new H;for(let N=0;N<G;N++){const de=N*T-B;for(let De=0;De<K;De++){const Ze=De*y-I;Q[v]=Ze*_,Q[m]=de*x,Q[p]=V,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(De/M),f.push(1-N/A),X+=1}}for(let N=0;N<A;N++)for(let de=0;de<M;de++){const De=d+de+K*N,Ze=d+de+K*(N+1),ie=d+(de+1)+K*(N+1),fe=d+(de+1)+K*N;l.push(De,Ze,fe),l.push(Ze,ie,fe),F+=6}a.addGroup(h,F,U),h+=F,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yc(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vi(t){const e={};for(let n=0;n<t.length;n++){const i=yc(t[n]);for(const r in i)e[r]=i[r]}return e}function I5(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g3(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const U5={clone:yc,merge:vi};var F5=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O5=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F5,this.fragmentShader=O5,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yc(e.uniforms),this.uniformsGroups=I5(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class v3 extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ns}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const eo=new H,L2=new ke,D2=new ke;class wi extends v3{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){eo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(eo.x,eo.y).multiplyScalar(-e/eo.z),eo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(eo.x,eo.y).multiplyScalar(-e/eo.z)}getViewSize(e,n){return this.getViewBounds(e,L2,D2),n.subVectors(D2,L2)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ql*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const dl=-90,hl=1;class k5 extends zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(dl,hl,e,n);r.layers=this.layers,this.add(r);const s=new wi(dl,hl,e,n);s.layers=this.layers,this.add(s);const o=new wi(dl,hl,e,n);o.layers=this.layers,this.add(o);const a=new wi(dl,hl,e,n);a.layers=this.layers,this.add(a);const l=new wi(dl,hl,e,n);l.layers=this.layers,this.add(l);const c=new wi(dl,hl,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ns)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vp)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _3 extends Yn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:gc,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B5 extends Va{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _3(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Uc(5,5,5),s=new ms({name:"CubemapFromEquirect",uniforms:yc(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:Ao});s.uniforms.tEquirect.value=n;const o=new Zt(r,s),a=n.minFilter;return n.minFilter===ya&&(n.minFilter=Ei),new k5(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const d0=new H,z5=new H,V5=new ht;class so{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=d0.subVectors(i,n).cross(z5.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(d0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||V5.getNormalMatrix(e),r=this.coplanarPoint(d0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qo=new Ic,Nd=new H;class sm{constructor(e=new so,n=new so,i=new so,r=new so,s=new so,o=new so){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ns){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-h,S-p).normalize(),i[1].setComponents(l+s,d+c,m+h,S+p).normalize(),i[2].setComponents(l+o,d+u,m+g,S+_).normalize(),i[3].setComponents(l-o,d-u,m-g,S-_).normalize(),i[4].setComponents(l-a,d-f,m-v,S-x).normalize(),n===Ns)i[5].setComponents(l+a,d+f,m+v,S+x).normalize();else if(n===vp)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qo)}intersectsSprite(e){return Qo.center.set(0,0,0),Qo.radius=.7071067811865476,Qo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qo)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nd.x=r.normal.x>0?e.max.x:e.min.x,Nd.y=r.normal.y>0?e.max.y:e.min.y,Nd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nd)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function x3(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function H5(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Yf extends Fr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*d-o;for(let x=0;x<c;x++){const S=x*f-s;g.push(S,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const x=_+c*p,S=_+c*(p+1),E=_+1+c*(p+1),C=_+1+c*p;h.push(x,S,C),h.push(S,E,C)}this.setIndex(h),this.setAttribute("position",new Dr(g,3)),this.setAttribute("normal",new Dr(v,3)),this.setAttribute("uv",new Dr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var G5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z5=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_L=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xL="gl_FragColor = linearToOutputTexel( gl_FragColor );",yL=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ML=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$L=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_D=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ND=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$D=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_N=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:G5,alphahash_pars_fragment:W5,alphamap_fragment:j5,alphamap_pars_fragment:X5,alphatest_fragment:Y5,alphatest_pars_fragment:$5,aomap_fragment:q5,aomap_pars_fragment:K5,batching_pars_vertex:Z5,batching_vertex:J5,begin_vertex:Q5,beginnormal_vertex:eL,bsdfs:tL,iridescence_fragment:nL,bumpmap_pars_fragment:iL,clipping_planes_fragment:rL,clipping_planes_pars_fragment:sL,clipping_planes_pars_vertex:oL,clipping_planes_vertex:aL,color_fragment:lL,color_pars_fragment:cL,color_pars_vertex:uL,color_vertex:fL,common:dL,cube_uv_reflection_fragment:hL,defaultnormal_vertex:pL,displacementmap_pars_vertex:mL,displacementmap_vertex:gL,emissivemap_fragment:vL,emissivemap_pars_fragment:_L,colorspace_fragment:xL,colorspace_pars_fragment:yL,envmap_fragment:SL,envmap_common_pars_fragment:ML,envmap_pars_fragment:wL,envmap_pars_vertex:EL,envmap_physical_pars_fragment:UL,envmap_vertex:TL,fog_vertex:AL,fog_pars_vertex:bL,fog_fragment:CL,fog_pars_fragment:RL,gradientmap_pars_fragment:PL,lightmap_pars_fragment:LL,lights_lambert_fragment:DL,lights_lambert_pars_fragment:NL,lights_pars_begin:IL,lights_toon_fragment:FL,lights_toon_pars_fragment:OL,lights_phong_fragment:kL,lights_phong_pars_fragment:BL,lights_physical_fragment:zL,lights_physical_pars_fragment:VL,lights_fragment_begin:HL,lights_fragment_maps:GL,lights_fragment_end:WL,logdepthbuf_fragment:jL,logdepthbuf_pars_fragment:XL,logdepthbuf_pars_vertex:YL,logdepthbuf_vertex:$L,map_fragment:qL,map_pars_fragment:KL,map_particle_fragment:ZL,map_particle_pars_fragment:JL,metalnessmap_fragment:QL,metalnessmap_pars_fragment:eD,morphinstance_vertex:tD,morphcolor_vertex:nD,morphnormal_vertex:iD,morphtarget_pars_vertex:rD,morphtarget_vertex:sD,normal_fragment_begin:oD,normal_fragment_maps:aD,normal_pars_fragment:lD,normal_pars_vertex:cD,normal_vertex:uD,normalmap_pars_fragment:fD,clearcoat_normal_fragment_begin:dD,clearcoat_normal_fragment_maps:hD,clearcoat_pars_fragment:pD,iridescence_pars_fragment:mD,opaque_fragment:gD,packing:vD,premultiplied_alpha_fragment:_D,project_vertex:xD,dithering_fragment:yD,dithering_pars_fragment:SD,roughnessmap_fragment:MD,roughnessmap_pars_fragment:wD,shadowmap_pars_fragment:ED,shadowmap_pars_vertex:TD,shadowmap_vertex:AD,shadowmask_pars_fragment:bD,skinbase_vertex:CD,skinning_pars_vertex:RD,skinning_vertex:PD,skinnormal_vertex:LD,specularmap_fragment:DD,specularmap_pars_fragment:ND,tonemapping_fragment:ID,tonemapping_pars_fragment:UD,transmission_fragment:FD,transmission_pars_fragment:OD,uv_pars_fragment:kD,uv_pars_vertex:BD,uv_vertex:zD,worldpos_vertex:VD,background_vert:HD,background_frag:GD,backgroundCube_vert:WD,backgroundCube_frag:jD,cube_vert:XD,cube_frag:YD,depth_vert:$D,depth_frag:qD,distanceRGBA_vert:KD,distanceRGBA_frag:ZD,equirect_vert:JD,equirect_frag:QD,linedashed_vert:eN,linedashed_frag:tN,meshbasic_vert:nN,meshbasic_frag:iN,meshlambert_vert:rN,meshlambert_frag:sN,meshmatcap_vert:oN,meshmatcap_frag:aN,meshnormal_vert:lN,meshnormal_frag:cN,meshphong_vert:uN,meshphong_frag:fN,meshphysical_vert:dN,meshphysical_frag:hN,meshtoon_vert:pN,meshtoon_frag:mN,points_vert:gN,points_frag:vN,shadow_vert:_N,shadow_frag:xN,sprite_vert:yN,sprite_frag:SN},Ve={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},is={basic:{uniforms:vi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:vi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:vi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:vi([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:vi([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:vi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:vi([Ve.points,Ve.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:vi([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:vi([Ve.common,Ve.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:vi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:vi([Ve.sprite,Ve.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:vi([Ve.common,Ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:vi([Ve.lights,Ve.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};is.physical={uniforms:vi([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Id={r:0,b:0,g:0},ea=new ps,MN=new Ft;function wN(t,e,n,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function v(_){let x=!1;const S=g(_);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===nm)?(u===void 0&&(u=new Zt(new Uc(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:yc(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ea.copy(x.backgroundRotation),ea.x*=-1,ea.y*=-1,ea.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ea.y*=-1,ea.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(MN.makeRotationFromEuler(ea)),u.material.toneMapped=Lt.getTransfer(S.colorSpace)!==$t,(f!==S||d!==S.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,h=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Zt(new Yf(2,2),new ms({name:"BackgroundMaterial",uniforms:yc(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:Uo,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(S.colorSpace)!==$t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,h=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(Id,g3(t)),i.buffers.color.setClear(Id.r,Id.g,Id.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:m}}function EN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,T,I,B,V){let K=!1;const G=f(B,I,T);s!==G&&(s=G,c(s.object)),K=h(y,B,I,V),K&&g(y,B,I,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(y,T,I,B),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,T,I){const B=I.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let K=V[T.id];K===void 0&&(K={},V[T.id]=K);let G=K[B];return G===void 0&&(G=d(l()),K[B]=G),G}function d(y){const T=[],I=[],B=[];for(let V=0;V<n;V++)T[V]=0,I[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:B,object:y,attributes:{},index:null}}function h(y,T,I,B){const V=s.attributes,K=T.attributes;let G=0;const X=I.getAttributes();for(const F in X)if(X[F].location>=0){const N=V[F];let de=K[F];if(de===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),N===void 0||N.attribute!==de||de&&N.data!==de.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(y,T,I,B){const V={},K=T.attributes;let G=0;const X=I.getAttributes();for(const F in X)if(X[F].location>=0){let N=K[F];N===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(N=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(N=y.instanceColor));const de={};de.attribute=N,N&&N.data&&(de.data=N.data),V[F]=de,G++}s.attributes=V,s.attributesNum=G,s.index=B}function v(){const y=s.newAttributes;for(let T=0,I=y.length;T<I;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const I=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;I[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),V[y]!==T&&(t.vertexAttribDivisor(y,T),V[y]=T)}function _(){const y=s.newAttributes,T=s.enabledAttributes;for(let I=0,B=T.length;I<B;I++)T[I]!==y[I]&&(t.disableVertexAttribArray(I),T[I]=0)}function x(y,T,I,B,V,K,G){G===!0?t.vertexAttribIPointer(y,T,I,V,K):t.vertexAttribPointer(y,T,I,B,V,K)}function S(y,T,I,B){v();const V=B.attributes,K=I.getAttributes(),G=T.defaultAttributeValues;for(const X in K){const F=K[X];if(F.location>=0){let Q=V[X];if(Q===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const N=Q.normalized,de=Q.itemSize,De=e.get(Q);if(De===void 0)continue;const Ze=De.buffer,ie=De.type,fe=De.bytesPerElement,Te=ie===t.INT||ie===t.UNSIGNED_INT||Q.gpuType===P_;if(Q.isInterleavedBufferAttribute){const pe=Q.data,Oe=pe.stride,Be=Q.offset;if(pe.isInstancedInterleavedBuffer){for(let qe=0;qe<F.locationSize;qe++)p(F.location+qe,pe.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let qe=0;qe<F.locationSize;qe++)m(F.location+qe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let qe=0;qe<F.locationSize;qe++)x(F.location+qe,de/F.locationSize,ie,N,Oe*fe,(Be+de/F.locationSize*qe)*fe,Te)}else{if(Q.isInstancedBufferAttribute){for(let pe=0;pe<F.locationSize;pe++)p(F.location+pe,Q.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let pe=0;pe<F.locationSize;pe++)x(F.location+pe,de/F.locationSize,ie,N,de*fe,de/F.locationSize*pe*fe,Te)}}else if(G!==void 0){const N=G[X];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(F.location,N);break;case 3:t.vertexAttrib3fv(F.location,N);break;case 4:t.vertexAttrib4fv(F.location,N);break;default:t.vertexAttrib1fv(F.location,N)}}}}_()}function E(){A();for(const y in i){const T=i[y];for(const I in T){const B=T[I];for(const V in B)u(B[V].object),delete B[V];delete T[I]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const I in T){const B=T[I];for(const V in B)u(B[V].object),delete B[V];delete T[I]}delete i[y.id]}function M(y){for(const T in i){const I=i[T];if(I[y.id]===void 0)continue;const B=I[y.id];for(const V in B)u(B[V].object),delete B[V];delete I[y.id]}}function A(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function TN(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)n.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==$r&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===jf&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Gs&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Ds&&!A)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:E,maxSamples:C}}function bN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new so,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,x=_*4;let S=p.clippingState||null;l.value=S,S=u(g,d,x,h);for(let E=0;E!==x;++E)S[E]=n[E];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=h;x!==v;++x,S+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function CN(t){let e=new WeakMap;function n(o,a){return a===uv?o.mapping=gc:a===fv&&(o.mapping=vc),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uv||a===fv)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new B5(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class y3 extends v3{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ul=4,N2=[.125,.215,.35,.446,.526,.582],ma=20,h0=new y3,I2=new _t;let p0=null,m0=0,g0=0,v0=!1;const la=(1+Math.sqrt(5))/2,pl=1/la,U2=[new H(-la,pl,0),new H(la,pl,0),new H(-pl,0,la),new H(pl,0,la),new H(0,la,-pl),new H(0,la,pl),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){p0=this._renderer.getRenderTarget(),m0=this._renderer.getActiveCubeFace(),g0=this._renderer.getActiveMipmapLevel(),v0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(p0,m0,g0),this._renderer.xr.enabled=v0,e.scissorTest=!1,Ud(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gc||e.mapping===vc?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),p0=this._renderer.getRenderTarget(),m0=this._renderer.getActiveCubeFace(),g0=this._renderer.getActiveMipmapLevel(),v0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:jf,format:$r,colorSpace:jo,depthBuffer:!1},r=F2(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F2(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RN(s)),this._blurMaterial=PN(s,e,n)}return r}_compileMaterial(e){const n=new Zt(this._lodPlanes[0],e);this._renderer.compile(n,h0)}_sceneToCubeUV(e,n,i,r){const a=new wi(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(I2),u.toneMapping=bo,u.autoClear=!1;const h=new B_({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),g=new Zt(new Uc,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(I2),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ud(r,_*x,p>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gc||e.mapping===vc;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=k2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O2());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ud(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,h0)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=U2[(r-s-1)%U2.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zt(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ma-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ma;m>ma&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ma}`);const p=[];let _=0;for(let M=0;M<ma;++M){const A=M/v,U=Math.exp(-A*A/2);p.push(U),M===0?_+=U:M<m&&(_+=2*U)}for(let M=0;M<p.length;M++)p[M]=p[M]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],E=3*S*(r>x-Ul?r-x+Ul:0),C=4*(this._cubeSize-S);Ud(n,E,C,3*S,2*S),l.setRenderTarget(n),l.render(f,h0)}}function RN(t){const e=[],n=[],i=[];let r=t;const s=t-Ul+1+N2.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ul?l=N2[o-t+Ul-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*h),x=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let C=0;C<h;C++){const M=C%3*2/3-1,A=C>2?0:-1,U=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];_.set(U,v*g*C),x.set(d,m*g*C);const y=[C,C,C,C,C,C];S.set(y,p*g*C)}const E=new Fr;E.setAttribute("position",new cr(_,v)),E.setAttribute("uv",new cr(x,m)),E.setAttribute("faceIndex",new cr(S,p)),e.push(E),r>Ul&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function F2(t,e,n){const i=new Va(t,e,n);return i.texture.mapping=nm,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ud(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PN(t,e,n){const i=new Float32Array(ma),r=new H(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:ma,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:z_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ao,depthTest:!1,depthWrite:!1})}function O2(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:z_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ao,depthTest:!1,depthWrite:!1})}function k2(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:z_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ao,depthTest:!1,depthWrite:!1})}function z_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LN(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uv||l===fv,u=l===gc||l===vc;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new zv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new zv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function DN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Rh("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NN(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const _=h.array;v=h.version;for(let x=0,S=_.length;x<S;x+=3){const E=_[x+0],C=_[x+1],M=_[x+2];d.push(E,C,C,M,M,E)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const E=x+0,C=x+1,M=x+2;d.push(E,C,C,M,M,E)}}else return;const m=new(u3(d)?m3:p3)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function IN(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=h[_];for(let _=0;_<v.length;_++)n.update(p,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function UN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FN(t,e,n){const i=new WeakMap,r=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let E=a.attributes.position.count*S,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*C*4*f),A=new d3(M,E,C,f);A.type=Ds,A.needsUpdate=!0;const U=S*4;for(let T=0;T<f;T++){const I=p[T],B=_[T],V=x[T],K=E*C*4*T;for(let G=0;G<I.count;G++){const X=G*U;g===!0&&(r.fromBufferAttribute(I,G),M[K+X+0]=r.x,M[K+X+1]=r.y,M[K+X+2]=r.z,M[K+X+3]=0),v===!0&&(r.fromBufferAttribute(B,G),M[K+X+4]=r.x,M[K+X+5]=r.y,M[K+X+6]=r.z,M[K+X+7]=0),m===!0&&(r.fromBufferAttribute(V,G),M[K+X+8]=r.x,M[K+X+9]=r.y,M[K+X+10]=r.z,M[K+X+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new ke(E,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ON(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class S3 extends Yn{constructor(e,n,i,r,s,o,a,l,c,u=Jl){if(u!==Jl&&u!==xc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jl&&(i=za),i===void 0&&u===xc&&(i=_c),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Oi,this.minFilter=l!==void 0?l:Oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const M3=new Yn,B2=new S3(1,1),w3=new d3,E3=new w5,T3=new _3,z2=[],V2=[],H2=new Float32Array(16),G2=new Float32Array(9),W2=new Float32Array(4);function Fc(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=z2[r];if(s===void 0&&(s=new Float32Array(r),z2[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ln(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function om(t,e){let n=V2[e];n===void 0&&(n=new Int32Array(e),V2[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;t.uniform2fv(this.addr,e),Ln(n,e)}}function zN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pn(n,e))return;t.uniform3fv(this.addr,e),Ln(n,e)}}function VN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;t.uniform4fv(this.addr,e),Ln(n,e)}}function HN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ln(n,e)}else{if(Pn(n,i))return;W2.set(i),t.uniformMatrix2fv(this.addr,!1,W2),Ln(n,i)}}function GN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ln(n,e)}else{if(Pn(n,i))return;G2.set(i),t.uniformMatrix3fv(this.addr,!1,G2),Ln(n,i)}}function WN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ln(n,e)}else{if(Pn(n,i))return;H2.set(i),t.uniformMatrix4fv(this.addr,!1,H2),Ln(n,i)}}function jN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;t.uniform2iv(this.addr,e),Ln(n,e)}}function YN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pn(n,e))return;t.uniform3iv(this.addr,e),Ln(n,e)}}function $N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;t.uniform4iv(this.addr,e),Ln(n,e)}}function qN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;t.uniform2uiv(this.addr,e),Ln(n,e)}}function ZN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pn(n,e))return;t.uniform3uiv(this.addr,e),Ln(n,e)}}function JN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;t.uniform4uiv(this.addr,e),Ln(n,e)}}function QN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(B2.compareFunction=c3,s=B2):s=M3,n.setTexture2D(e||s,r)}function eI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E3,r)}function tI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||T3,r)}function nI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||w3,r)}function iI(t){switch(t){case 5126:return kN;case 35664:return BN;case 35665:return zN;case 35666:return VN;case 35674:return HN;case 35675:return GN;case 35676:return WN;case 5124:case 35670:return jN;case 35667:case 35671:return XN;case 35668:case 35672:return YN;case 35669:case 35673:return $N;case 5125:return qN;case 36294:return KN;case 36295:return ZN;case 36296:return JN;case 35678:case 36198:case 36298:case 36306:case 35682:return QN;case 35679:case 36299:case 36307:return eI;case 35680:case 36300:case 36308:case 36293:return tI;case 36289:case 36303:case 36311:case 36292:return nI}}function rI(t,e){t.uniform1fv(this.addr,e)}function sI(t,e){const n=Fc(e,this.size,2);t.uniform2fv(this.addr,n)}function oI(t,e){const n=Fc(e,this.size,3);t.uniform3fv(this.addr,n)}function aI(t,e){const n=Fc(e,this.size,4);t.uniform4fv(this.addr,n)}function lI(t,e){const n=Fc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cI(t,e){const n=Fc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uI(t,e){const n=Fc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fI(t,e){t.uniform1iv(this.addr,e)}function dI(t,e){t.uniform2iv(this.addr,e)}function hI(t,e){t.uniform3iv(this.addr,e)}function pI(t,e){t.uniform4iv(this.addr,e)}function mI(t,e){t.uniform1uiv(this.addr,e)}function gI(t,e){t.uniform2uiv(this.addr,e)}function vI(t,e){t.uniform3uiv(this.addr,e)}function _I(t,e){t.uniform4uiv(this.addr,e)}function xI(t,e,n){const i=this.cache,r=e.length,s=om(n,r);Pn(i,s)||(t.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||M3,s[o])}function yI(t,e,n){const i=this.cache,r=e.length,s=om(n,r);Pn(i,s)||(t.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||E3,s[o])}function SI(t,e,n){const i=this.cache,r=e.length,s=om(n,r);Pn(i,s)||(t.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||T3,s[o])}function MI(t,e,n){const i=this.cache,r=e.length,s=om(n,r);Pn(i,s)||(t.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||w3,s[o])}function wI(t){switch(t){case 5126:return rI;case 35664:return sI;case 35665:return oI;case 35666:return aI;case 35674:return lI;case 35675:return cI;case 35676:return uI;case 5124:case 35670:return fI;case 35667:case 35671:return dI;case 35668:case 35672:return hI;case 35669:case 35673:return pI;case 5125:return mI;case 36294:return gI;case 36295:return vI;case 36296:return _I;case 35678:case 36198:case 36298:case 36306:case 35682:return xI;case 35679:case 36299:case 36307:return yI;case 35680:case 36300:case 36308:case 36293:return SI;case 36289:case 36303:case 36311:case 36292:return MI}}class EI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iI(n.type)}}class TI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wI(n.type)}}class AI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _0=/(\w+)(\])?(\[|\.)?/g;function j2(t,e){t.seq.push(e),t.map[e.id]=e}function bI(t,e,n){const i=t.name,r=i.length;for(_0.lastIndex=0;;){const s=_0.exec(i),o=_0.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){j2(n,c===void 0?new EI(a,t,e):new TI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new AI(a),j2(n,f)),n=f}}}class Ph{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);bI(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function X2(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CI=37297;let RI=0;function PI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function LI(t){const e=Lt.getPrimaries(Lt.workingColorSpace),n=Lt.getPrimaries(t);let i;switch(e===n?i="":e===gp&&n===mp?i="LinearDisplayP3ToLinearSRGB":e===mp&&n===gp&&(i="LinearSRGBToLinearDisplayP3"),t){case jo:case im:return[i,"LinearTransferOETF"];case Mr:case F_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Y2(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+PI(t.getShaderSource(e),o)}else return r}function DI(t,e){const n=LI(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function NI(t,e){let n;switch(e){case U4:n="Linear";break;case F4:n="Reinhard";break;case O4:n="Cineon";break;case KT:n="ACESFilmic";break;case B4:n="AgX";break;case z4:n="Neutral";break;case k4:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fd=new H;function II(){Lt.getLuminanceCoefficients(Fd);const t=Fd.x.toFixed(4),e=Fd.y.toFixed(4),n=Fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hu).join(`
`)}function FI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hu(t){return t!==""}function $2(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function q2(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vv(t){return t.replace(kI,zI)}const BI=new Map;function zI(t,e){let n=ft[e];if(n===void 0){const i=BI.get(e);if(i!==void 0)n=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vv(n)}const VI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K2(t){return t.replace(VI,HI)}function HI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Z2(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$T?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===p4?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Es&&(e="SHADOWMAP_TYPE_VSM"),e}function WI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case gc:case vc:e="ENVMAP_TYPE_CUBE";break;case nm:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vc:e="ENVMAP_MODE_REFRACTION";break}return e}function XI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qT:e="ENVMAP_BLENDING_MULTIPLY";break;case N4:e="ENVMAP_BLENDING_MIX";break;case I4:e="ENVMAP_BLENDING_ADD";break}return e}function YI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $I(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GI(n),c=WI(n),u=jI(n),f=XI(n),d=YI(n),h=UI(n),g=FI(s),v=r.createProgram();let m,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hu).join(`
`),p.length>0&&(p+=`
`)):(m=[Z2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hu).join(`
`),p=[Z2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bo?"#define TONE_MAPPING":"",n.toneMapping!==bo?ft.tonemapping_pars_fragment:"",n.toneMapping!==bo?NI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,DI("linearToOutputTexel",n.outputColorSpace),II(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hu).join(`
`)),o=Vv(o),o=$2(o,n),o=q2(o,n),a=Vv(a),a=$2(a,n),a=q2(a,n),o=K2(o),a=K2(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===p2?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,S=_+p+a,E=X2(r,r.VERTEX_SHADER,x),C=X2(r,r.FRAGMENT_SHADER,S);r.attachShader(v,E),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function M(T){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(E).trim(),V=r.getShaderInfoLog(C).trim();let K=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,C);else{const X=Y2(r,E,"vertex"),F=Y2(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+X+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||V==="")&&(G=!1);G&&(T.diagnostics={runnable:K,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(E),r.deleteShader(C),A=new Ph(r,v),U=OI(r,v)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let U;this.getAttributes=function(){return U===void 0&&M(this),U};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,CI)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RI++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=C,this}let qI=0;class KI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZI(e),n.set(e,i)),i}}class ZI{constructor(e){this.id=qI++,this.code=e,this.usedTimes=0}}function JI(t,e,n,i,r,s,o){const a=new k_,l=new KI,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,h=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,T,I,B,V){const K=B.fog,G=V.geometry,X=y.isMeshStandardMaterial?B.environment:null,F=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),Q=F&&F.mapping===nm?F.image.height:null,N=v[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const de=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,De=de!==void 0?de.length:0;let Ze=0;G.morphAttributes.position!==void 0&&(Ze=1),G.morphAttributes.normal!==void 0&&(Ze=2),G.morphAttributes.color!==void 0&&(Ze=3);let ie,fe,Te,pe;if(N){const Qe=is[N];ie=Qe.vertexShader,fe=Qe.fragmentShader}else ie=y.vertexShader,fe=y.fragmentShader,l.update(y),Te=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const Oe=t.getRenderTarget(),Be=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,We=!!y.map,ue=!!y.matcap,L=!!F,Se=!!y.aoMap,Me=!!y.lightMap,ye=!!y.bumpMap,k=!!y.normalMap,Fe=!!y.displacementMap,Pe=!!y.emissiveMap,D=!!y.metalnessMap,b=!!y.roughnessMap,q=y.anisotropy>0,le=y.clearcoat>0,he=y.dispersion>0,se=y.iridescence>0,ge=y.sheen>0,ce=y.transmission>0,Ee=q&&!!y.anisotropyMap,He=le&&!!y.clearcoatMap,me=le&&!!y.clearcoatNormalMap,Re=le&&!!y.clearcoatRoughnessMap,ze=se&&!!y.iridescenceMap,Ke=se&&!!y.iridescenceThicknessMap,Ne=ge&&!!y.sheenColorMap,ae=ge&&!!y.sheenRoughnessMap,Le=!!y.specularMap,ve=!!y.specularColorMap,z=!!y.specularIntensityMap,W=ce&&!!y.transmissionMap,$=ce&&!!y.thicknessMap,oe=!!y.gradientMap,_e=!!y.alphaMap,Ae=y.alphaTest>0,rt=!!y.alphaHash,yt=!!y.extensions;let Dt=bo;y.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Dt=t.toneMapping);const ct={shaderID:N,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:fe,defines:y.defines,customVertexShaderID:Te,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:Be,instancingColor:Be&&V.instanceColor!==null,instancingMorph:Be&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:jo,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:ue,envMap:L,envMapMode:L&&F.mapping,envMapCubeUVHeight:Q,aoMap:Se,lightMap:Me,bumpMap:ye,normalMap:k,displacementMap:h&&Fe,emissiveMap:Pe,normalMapObjectSpace:k&&y.normalMapType===W4,normalMapTangentSpace:k&&y.normalMapType===l3,metalnessMap:D,roughnessMap:b,anisotropy:q,anisotropyMap:Ee,clearcoat:le,clearcoatMap:He,clearcoatNormalMap:me,clearcoatRoughnessMap:Re,dispersion:he,iridescence:se,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:ge,sheenColorMap:Ne,sheenRoughnessMap:ae,specularMap:Le,specularColorMap:ve,specularIntensityMap:z,transmission:ce,transmissionMap:W,thicknessMap:$,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Zl&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ae,alphaHash:rt,combine:y.combine,mapUv:We&&m(y.map.channel),aoMapUv:Se&&m(y.aoMap.channel),lightMapUv:Me&&m(y.lightMap.channel),bumpMapUv:ye&&m(y.bumpMap.channel),normalMapUv:k&&m(y.normalMap.channel),displacementMapUv:Fe&&m(y.displacementMap.channel),emissiveMapUv:Pe&&m(y.emissiveMap.channel),metalnessMapUv:D&&m(y.metalnessMap.channel),roughnessMapUv:b&&m(y.roughnessMap.channel),anisotropyMapUv:Ee&&m(y.anisotropyMap.channel),clearcoatMapUv:He&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ae&&m(y.sheenRoughnessMap.channel),specularMapUv:Le&&m(y.specularMap.channel),specularColorMapUv:ve&&m(y.specularColorMap.channel),specularIntensityMapUv:z&&m(y.specularIntensityMap.channel),transmissionMapUv:W&&m(y.transmissionMap.channel),thicknessMapUv:$&&m(y.thicknessMap.channel),alphaMapUv:_e&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(k||q),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(We||_e),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Dt,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&Lt.getTransfer(y.map.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ss,flipSided:y.side===bi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function _(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function E(y){const T=v[y.type];let I;if(T){const B=is[T];I=U5.clone(B.uniforms)}else I=y.uniforms;return I}function C(y,T){let I;for(let B=0,V=u.length;B<V;B++){const K=u[B];if(K.cacheKey===T){I=K,++I.usedTimes;break}}return I===void 0&&(I=new $I(t,T,y,s),u.push(I)),I}function M(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:E,acquireProgram:C,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:U}}function QI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function e6(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function J2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Q2(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||e6),i.length>1&&i.sort(d||J2),r.length>1&&r.sort(d||J2)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function t6(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Q2,t.set(i,[o])):r>=s.length?(o=new Q2,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function n6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new _t};break;case"SpotLight":n={position:new H,direction:new H,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function i6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let r6=0;function s6(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o6(t){const e=new n6,n=i6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Ft,o=new Ft;function a(c){let u=0,f=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,_=0,x=0,S=0,E=0,C=0,M=0;c.sort(s6);for(let U=0,y=c.length;U<y;U++){const T=c[U],I=T.color,B=T.intensity,V=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*B,f+=I.g*B,d+=I.b*B;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],B);M++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,F=n.get(T);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=T.shadow.matrix,_++}i.directional[h]=G,h++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(I).multiplyScalar(B),G.distance=V,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[v]=G;const X=T.shadow;if(T.map&&(i.spotLightMap[E]=T.map,E++,X.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[v]=X.matrix,T.castShadow){const F=n.get(T);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=K,S++}v++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(I).multiplyScalar(B),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=G,m++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const X=T.shadow,F=n.get(T);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=G,g++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(B),G.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[p]=G,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==h||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==x||A.numSpotShadows!==S||A.numSpotMaps!==E||A.numLightProbes!==M)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,A.directionalLength=h,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=x,A.numSpotShadows=S,A.numSpotMaps=E,A.numLightProbes=M,i.version=r6++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const x=c[p];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function eS(t){const e=new o6(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function a6(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eS(t),e.set(r,[a])):s>=o.length?(a=new eS(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class l6 extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H4,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c6 extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const u6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d6(t,e,n){let i=new sm;const r=new ke,s=new ke,o=new Vt,a=new l6({depthPacking:G4}),l=new c6,c={},u=n.maxTextureSize,f={[Uo]:bi,[bi]:Uo,[ss]:ss},d=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:u6,fragmentShader:f6}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Fr;g.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$T;let p=this.type;this.render=function(C,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const U=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ao),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Es&&this.type===Es,V=p===Es&&this.type!==Es;for(let K=0,G=C.length;K<G;K++){const X=C[K],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();if(r.multiply(Q),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y)),F.map===null||B===!0||V===!0){const de=this.type!==Es?{minFilter:Oi,magFilter:Oi}:{};F.map!==null&&F.map.dispose(),F.map=new Va(r.x,r.y,de),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const N=F.getViewportCount();for(let de=0;de<N;de++){const De=F.getViewport(de);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),I.viewport(o),F.updateMatrices(X,de),i=F.getFrustum(),S(M,A,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===Es&&_(F,A),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(U,y,T)};function _(C,M){const A=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Va(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(M,null,A,d,v,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(M,null,A,h,v,null)}function x(C,M,A,U){let y=null;const T=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=A.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=y.uuid,B=M.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let K=V[B];K===void 0&&(K=y.clone(),V[B]=K,M.addEventListener("dispose",E)),y=K}if(y.visible=M.visible,y.wireframe=M.wireframe,U===Es?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:f[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=t.properties.get(y);I.light=A}return y}function S(C,M,A,U,y){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Es)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const B=e.update(C),V=C.material;if(Array.isArray(V)){const K=B.groups;for(let G=0,X=K.length;G<X;G++){const F=K[G],Q=V[F.materialIndex];if(Q&&Q.visible){const N=x(C,Q,U,y);C.onBeforeShadow(t,C,M,A,B,N,F),t.renderBufferDirect(A,null,B,N,C,F),C.onAfterShadow(t,C,M,A,B,N,F)}}}else if(V.visible){const K=x(C,V,U,y);C.onBeforeShadow(t,C,M,A,B,K,null),t.renderBufferDirect(A,null,B,K,C,null),C.onAfterShadow(t,C,M,A,B,K,null)}}const I=C.children;for(let B=0,V=I.length;B<V;B++)S(I[B],M,A,U,y)}function E(C){C.target.removeEventListener("dispose",E);for(const A in c){const U=c[A],y=C.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}const h6={[iv]:rv,[sv]:lv,[ov]:cv,[mc]:av,[rv]:iv,[lv]:sv,[cv]:ov,[av]:mc};function p6(t){function e(){let z=!1;const W=new Vt;let $=null;const oe=new Vt(0,0,0,0);return{setMask:function(_e){$!==_e&&!z&&(t.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){z=_e},setClear:function(_e,Ae,rt,yt,Dt){Dt===!0&&(_e*=yt,Ae*=yt,rt*=yt),W.set(_e,Ae,rt,yt),oe.equals(W)===!1&&(t.clearColor(_e,Ae,rt,yt),oe.copy(W))},reset:function(){z=!1,$=null,oe.set(-1,0,0,0)}}}function n(){let z=!1,W=!1,$=null,oe=null,_e=null;return{setReversed:function(Ae){W=Ae},setTest:function(Ae){Ae?Te(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Ae){$!==Ae&&!z&&(t.depthMask(Ae),$=Ae)},setFunc:function(Ae){if(W&&(Ae=h6[Ae]),oe!==Ae){switch(Ae){case iv:t.depthFunc(t.NEVER);break;case rv:t.depthFunc(t.ALWAYS);break;case sv:t.depthFunc(t.LESS);break;case mc:t.depthFunc(t.LEQUAL);break;case ov:t.depthFunc(t.EQUAL);break;case av:t.depthFunc(t.GEQUAL);break;case lv:t.depthFunc(t.GREATER);break;case cv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Ae}},setLocked:function(Ae){z=Ae},setClear:function(Ae){_e!==Ae&&(t.clearDepth(Ae),_e=Ae)},reset:function(){z=!1,$=null,oe=null,_e=null}}}function i(){let z=!1,W=null,$=null,oe=null,_e=null,Ae=null,rt=null,yt=null,Dt=null;return{setTest:function(ct){z||(ct?Te(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(ct){W!==ct&&!z&&(t.stencilMask(ct),W=ct)},setFunc:function(ct,Qe,Xe){($!==ct||oe!==Qe||_e!==Xe)&&(t.stencilFunc(ct,Qe,Xe),$=ct,oe=Qe,_e=Xe)},setOp:function(ct,Qe,Xe){(Ae!==ct||rt!==Qe||yt!==Xe)&&(t.stencilOp(ct,Qe,Xe),Ae=ct,rt=Qe,yt=Xe)},setLocked:function(ct){z=ct},setClear:function(ct){Dt!==ct&&(t.clearStencil(ct),Dt=ct)},reset:function(){z=!1,W=null,$=null,oe=null,_e=null,Ae=null,rt=null,yt=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,g=!1,v=null,m=null,p=null,_=null,x=null,S=null,E=null,C=new _t(0,0,0),M=0,A=!1,U=null,y=null,T=null,I=null,B=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=G>=2);let F=null,Q={};const N=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),De=new Vt().fromArray(N),Ze=new Vt().fromArray(de);function ie(z,W,$,oe){const _e=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(z,Ae),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<$;rt++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(W,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(W+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return Ae}const fe={};fe[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Te(t.DEPTH_TEST),s.setFunc(mc),Me(!1),ye(c2),Te(t.CULL_FACE),L(Ao);function Te(z){c[z]!==!0&&(t.enable(z),c[z]=!0)}function pe(z){c[z]!==!1&&(t.disable(z),c[z]=!1)}function Oe(z,W){return u[z]!==W?(t.bindFramebuffer(z,W),u[z]=W,z===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=W),z===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=W),!0):!1}function Be(z,W){let $=d,oe=!1;if(z){$=f.get(W),$===void 0&&($=[],f.set(W,$));const _e=z.textures;if($.length!==_e.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,rt=_e.length;Ae<rt;Ae++)$[Ae]=t.COLOR_ATTACHMENT0+Ae;$.length=_e.length,oe=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,oe=!0);oe&&t.drawBuffers($)}function qe(z){return h!==z?(t.useProgram(z),h=z,!0):!1}const We={[pa]:t.FUNC_ADD,[g4]:t.FUNC_SUBTRACT,[v4]:t.FUNC_REVERSE_SUBTRACT};We[_4]=t.MIN,We[x4]=t.MAX;const ue={[y4]:t.ZERO,[S4]:t.ONE,[M4]:t.SRC_COLOR,[tv]:t.SRC_ALPHA,[C4]:t.SRC_ALPHA_SATURATE,[A4]:t.DST_COLOR,[E4]:t.DST_ALPHA,[w4]:t.ONE_MINUS_SRC_COLOR,[nv]:t.ONE_MINUS_SRC_ALPHA,[b4]:t.ONE_MINUS_DST_COLOR,[T4]:t.ONE_MINUS_DST_ALPHA,[R4]:t.CONSTANT_COLOR,[P4]:t.ONE_MINUS_CONSTANT_COLOR,[L4]:t.CONSTANT_ALPHA,[D4]:t.ONE_MINUS_CONSTANT_ALPHA};function L(z,W,$,oe,_e,Ae,rt,yt,Dt,ct){if(z===Ao){g===!0&&(pe(t.BLEND),g=!1);return}if(g===!1&&(Te(t.BLEND),g=!0),z!==m4){if(z!==v||ct!==A){if((m!==pa||x!==pa)&&(t.blendEquation(t.FUNC_ADD),m=pa,x=pa),ct)switch(z){case Zl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ev:t.blendFunc(t.ONE,t.ONE);break;case u2:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f2:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ev:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case u2:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f2:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,_=null,S=null,E=null,C.set(0,0,0),M=0,v=z,A=ct}return}_e=_e||W,Ae=Ae||$,rt=rt||oe,(W!==m||_e!==x)&&(t.blendEquationSeparate(We[W],We[_e]),m=W,x=_e),($!==p||oe!==_||Ae!==S||rt!==E)&&(t.blendFuncSeparate(ue[$],ue[oe],ue[Ae],ue[rt]),p=$,_=oe,S=Ae,E=rt),(yt.equals(C)===!1||Dt!==M)&&(t.blendColor(yt.r,yt.g,yt.b,Dt),C.copy(yt),M=Dt),v=z,A=!1}function Se(z,W){z.side===ss?pe(t.CULL_FACE):Te(t.CULL_FACE);let $=z.side===bi;W&&($=!$),Me($),z.blending===Zl&&z.transparent===!1?L(Ao):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const oe=z.stencilWrite;o.setTest(oe),oe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(z){U!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),U=z)}function ye(z){z!==d4?(Te(t.CULL_FACE),z!==y&&(z===c2?t.cullFace(t.BACK):z===h4?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),y=z}function k(z){z!==T&&(K&&t.lineWidth(z),T=z)}function Fe(z,W,$){z?(Te(t.POLYGON_OFFSET_FILL),(I!==W||B!==$)&&(t.polygonOffset(W,$),I=W,B=$)):pe(t.POLYGON_OFFSET_FILL)}function Pe(z){z?Te(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function D(z){z===void 0&&(z=t.TEXTURE0+V-1),F!==z&&(t.activeTexture(z),F=z)}function b(z,W,$){$===void 0&&(F===null?$=t.TEXTURE0+V-1:$=F);let oe=Q[$];oe===void 0&&(oe={type:void 0,texture:void 0},Q[$]=oe),(oe.type!==z||oe.texture!==W)&&(F!==$&&(t.activeTexture($),F=$),t.bindTexture(z,W||fe[z]),oe.type=z,oe.texture=W)}function q(){const z=Q[F];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(z){De.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),De.copy(z))}function Ne(z){Ze.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Ze.copy(z))}function ae(z,W){let $=l.get(W);$===void 0&&($=new WeakMap,l.set(W,$));let oe=$.get(z);oe===void 0&&(oe=t.getUniformBlockIndex(W,z.name),$.set(z,oe))}function Le(z,W){const oe=l.get(W).get(z);a.get(W)!==oe&&(t.uniformBlockBinding(W,oe,z.__bindingPointIndex),a.set(W,oe))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},F=null,Q={},u={},f=new WeakMap,d=[],h=null,g=!1,v=null,m=null,p=null,_=null,x=null,S=null,E=null,C=new _t(0,0,0),M=0,A=!1,U=null,y=null,T=null,I=null,B=null,De.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Te,disable:pe,bindFramebuffer:Oe,drawBuffers:Be,useProgram:qe,setBlending:L,setMaterial:Se,setFlipSided:Me,setCullFace:ye,setLineWidth:k,setPolygonOffset:Fe,setScissorTest:Pe,activeTexture:D,bindTexture:b,unbindTexture:q,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:Re,texImage3D:ze,updateUBOMapping:ae,uniformBlockBinding:Le,texStorage2D:He,texStorage3D:me,texSubImage2D:se,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ee,scissor:Ke,viewport:Ne,reset:ve}}function tS(t,e,n,i){const r=m6(i);switch(n){case t3:return t*e;case i3:return t*e;case r3:return t*e*2;case s3:return t*e/r.components*r.byteLength;case N_:return t*e/r.components*r.byteLength;case o3:return t*e*2/r.components*r.byteLength;case I_:return t*e*2/r.components*r.byteLength;case n3:return t*e*3/r.components*r.byteLength;case $r:return t*e*4/r.components*r.byteLength;case U_:return t*e*4/r.components*r.byteLength;case Eh:case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ah:case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mv:case vv:return Math.max(t,16)*Math.max(e,8)/4;case pv:case gv:return Math.max(t,8)*Math.max(e,8)/2;case _v:case xv:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yv:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sv:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mv:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wv:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ev:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tv:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Av:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bv:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Cv:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rv:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pv:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Lv:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dv:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nv:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Iv:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Uv:case Fv:return Math.ceil(t/4)*Math.ceil(e/4)*16;case a3:case Ov:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kv:case Bv:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m6(t){switch(t){case Gs:case JT:return{byteLength:1,components:1};case _f:case QT:case jf:return{byteLength:2,components:1};case L_:case D_:return{byteLength:2,components:4};case za:case P_:case Ds:return{byteLength:4,components:1};case e3:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function g6(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,b){return h?new OffscreenCanvas(D,b):yf("canvas")}function v(D,b,q){let le=1;const he=Pe(D);if((he.width>q||he.height>q)&&(le=q/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const se=Math.floor(le*he.width),ge=Math.floor(le*he.height);f===void 0&&(f=g(se,ge));const ce=b?g(se,ge):f;return ce.width=se,ce.height=ge,ce.getContext("2d").drawImage(D,0,0,se,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+ge+")."),ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Oi&&D.minFilter!==Ei}function p(D){t.generateMipmap(D)}function _(D,b,q,le,he=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se=b;if(b===t.RED&&(q===t.FLOAT&&(se=t.R32F),q===t.HALF_FLOAT&&(se=t.R16F),q===t.UNSIGNED_BYTE&&(se=t.R8)),b===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.R8UI),q===t.UNSIGNED_SHORT&&(se=t.R16UI),q===t.UNSIGNED_INT&&(se=t.R32UI),q===t.BYTE&&(se=t.R8I),q===t.SHORT&&(se=t.R16I),q===t.INT&&(se=t.R32I)),b===t.RG&&(q===t.FLOAT&&(se=t.RG32F),q===t.HALF_FLOAT&&(se=t.RG16F),q===t.UNSIGNED_BYTE&&(se=t.RG8)),b===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.RG8UI),q===t.UNSIGNED_SHORT&&(se=t.RG16UI),q===t.UNSIGNED_INT&&(se=t.RG32UI),q===t.BYTE&&(se=t.RG8I),q===t.SHORT&&(se=t.RG16I),q===t.INT&&(se=t.RG32I)),b===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.RGB8UI),q===t.UNSIGNED_SHORT&&(se=t.RGB16UI),q===t.UNSIGNED_INT&&(se=t.RGB32UI),q===t.BYTE&&(se=t.RGB8I),q===t.SHORT&&(se=t.RGB16I),q===t.INT&&(se=t.RGB32I)),b===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&(se=t.RGBA8UI),q===t.UNSIGNED_SHORT&&(se=t.RGBA16UI),q===t.UNSIGNED_INT&&(se=t.RGBA32UI),q===t.BYTE&&(se=t.RGBA8I),q===t.SHORT&&(se=t.RGBA16I),q===t.INT&&(se=t.RGBA32I)),b===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),b===t.RGBA){const ge=he?pp:Lt.getTransfer(le);q===t.FLOAT&&(se=t.RGBA32F),q===t.HALF_FLOAT&&(se=t.RGBA16F),q===t.UNSIGNED_BYTE&&(se=ge===$t?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(D,b){let q;return D?b===null||b===za||b===_c?q=t.DEPTH24_STENCIL8:b===Ds?q=t.DEPTH32F_STENCIL8:b===_f&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===za||b===_c?q=t.DEPTH_COMPONENT24:b===Ds?q=t.DEPTH_COMPONENT32F:b===_f&&(q=t.DEPTH_COMPONENT16),q}function S(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Oi&&D.minFilter!==Ei?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function E(D){const b=D.target;b.removeEventListener("dispose",E),M(b),b.isVideoTexture&&u.delete(b)}function C(D){const b=D.target;b.removeEventListener("dispose",C),U(b)}function M(D){const b=i.get(D);if(b.__webglInit===void 0)return;const q=D.source,le=d.get(q);if(le){const he=le[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&A(D),Object.keys(le).length===0&&d.delete(q)}i.remove(D)}function A(D){const b=i.get(D);t.deleteTexture(b.__webglTexture);const q=D.source,le=d.get(q);delete le[b.__cacheKey],o.memory.textures--}function U(D){const b=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let he=0;he<b.__webglFramebuffer[le].length;he++)t.deleteFramebuffer(b.__webglFramebuffer[le][he]);else t.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)t.deleteFramebuffer(b.__webglFramebuffer[le]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=D.textures;for(let le=0,he=q.length;le<he;le++){const se=i.get(q[le]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(q[le])}i.remove(D)}let y=0;function T(){y=0}function I(){const D=y;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),y+=1,D}function B(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function V(D,b){const q=i.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(q,D,b);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+b)}function K(D,b){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Ze(q,D,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+b)}function G(D,b){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Ze(q,D,b);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+b)}function X(D,b){const q=i.get(D);if(D.version>0&&q.__version!==D.version){ie(q,D,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+b)}const F={[dv]:t.REPEAT,[xa]:t.CLAMP_TO_EDGE,[hv]:t.MIRRORED_REPEAT},Q={[Oi]:t.NEAREST,[V4]:t.NEAREST_MIPMAP_NEAREST,[gd]:t.NEAREST_MIPMAP_LINEAR,[Ei]:t.LINEAR,[jm]:t.LINEAR_MIPMAP_NEAREST,[ya]:t.LINEAR_MIPMAP_LINEAR},N={[j4]:t.NEVER,[Z4]:t.ALWAYS,[X4]:t.LESS,[c3]:t.LEQUAL,[Y4]:t.EQUAL,[K4]:t.GEQUAL,[$4]:t.GREATER,[q4]:t.NOTEQUAL};function de(D,b){if(b.type===Ds&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ei||b.magFilter===jm||b.magFilter===gd||b.magFilter===ya||b.minFilter===Ei||b.minFilter===jm||b.minFilter===gd||b.minFilter===ya)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,F[b.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,F[b.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,F[b.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,Q[b.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Oi||b.minFilter!==gd&&b.minFilter!==ya||b.type===Ds&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function De(D,b){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",E));const le=b.source;let he=d.get(le);he===void 0&&(he={},d.set(le,he));const se=B(b);if(se!==D.__cacheKey){he[se]===void 0&&(he[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[se].usedTimes++;const ge=he[D.__cacheKey];ge!==void 0&&(he[D.__cacheKey].usedTimes--,ge.usedTimes===0&&A(b)),D.__cacheKey=se,D.__webglTexture=he[se].texture}return q}function Ze(D,b,q){let le=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=t.TEXTURE_3D);const he=De(D,b),se=b.source;n.bindTexture(le,D.__webglTexture,t.TEXTURE0+q);const ge=i.get(se);if(se.version!==ge.__version||he===!0){n.activeTexture(t.TEXTURE0+q);const ce=Lt.getPrimaries(Lt.workingColorSpace),Ee=b.colorSpace===co?null:Lt.getPrimaries(b.colorSpace),He=b.colorSpace===co||ce===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let me=v(b.image,!1,r.maxTextureSize);me=Fe(b,me);const Re=s.convert(b.format,b.colorSpace),ze=s.convert(b.type);let Ke=_(b.internalFormat,Re,ze,b.colorSpace,b.isVideoTexture);de(le,b);let Ne;const ae=b.mipmaps,Le=b.isVideoTexture!==!0,ve=ge.__version===void 0||he===!0,z=se.dataReady,W=S(b,me);if(b.isDepthTexture)Ke=x(b.format===xc,b.type),ve&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Ke,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Ke,me.width,me.height,0,Re,ze,null));else if(b.isDataTexture)if(ae.length>0){Le&&ve&&n.texStorage2D(t.TEXTURE_2D,W,Ke,ae[0].width,ae[0].height);for(let $=0,oe=ae.length;$<oe;$++)Ne=ae[$],Le?z&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ne.width,Ne.height,Re,ze,Ne.data):n.texImage2D(t.TEXTURE_2D,$,Ke,Ne.width,Ne.height,0,Re,ze,Ne.data);b.generateMipmaps=!1}else Le?(ve&&n.texStorage2D(t.TEXTURE_2D,W,Ke,me.width,me.height),z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Re,ze,me.data)):n.texImage2D(t.TEXTURE_2D,0,Ke,me.width,me.height,0,Re,ze,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Le&&ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Ke,ae[0].width,ae[0].height,me.depth);for(let $=0,oe=ae.length;$<oe;$++)if(Ne=ae[$],b.format!==$r)if(Re!==null)if(Le){if(z)if(b.layerUpdates.size>0){const _e=tS(Ne.width,Ne.height,b.format,b.type);for(const Ae of b.layerUpdates){const rt=Ne.data.subarray(Ae*_e/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*_e/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Ae,Ne.width,Ne.height,1,Re,rt,0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Ne.width,Ne.height,me.depth,Re,Ne.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ke,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Ne.width,Ne.height,me.depth,Re,ze,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ke,Ne.width,Ne.height,me.depth,0,Re,ze,Ne.data)}else{Le&&ve&&n.texStorage2D(t.TEXTURE_2D,W,Ke,ae[0].width,ae[0].height);for(let $=0,oe=ae.length;$<oe;$++)Ne=ae[$],b.format!==$r?Re!==null?Le?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,Ne.width,Ne.height,Re,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?z&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ne.width,Ne.height,Re,ze,Ne.data):n.texImage2D(t.TEXTURE_2D,$,Ke,Ne.width,Ne.height,0,Re,ze,Ne.data)}else if(b.isDataArrayTexture)if(Le){if(ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Ke,me.width,me.height,me.depth),z)if(b.layerUpdates.size>0){const $=tS(me.width,me.height,b.format,b.type);for(const oe of b.layerUpdates){const _e=me.data.subarray(oe*$/me.data.BYTES_PER_ELEMENT,(oe+1)*$/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,Re,ze,_e)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,ze,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ke,me.width,me.height,me.depth,0,Re,ze,me.data);else if(b.isData3DTexture)Le?(ve&&n.texStorage3D(t.TEXTURE_3D,W,Ke,me.width,me.height,me.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,ze,me.data)):n.texImage3D(t.TEXTURE_3D,0,Ke,me.width,me.height,me.depth,0,Re,ze,me.data);else if(b.isFramebufferTexture){if(ve)if(Le)n.texStorage2D(t.TEXTURE_2D,W,Ke,me.width,me.height);else{let $=me.width,oe=me.height;for(let _e=0;_e<W;_e++)n.texImage2D(t.TEXTURE_2D,_e,Ke,$,oe,0,Re,ze,null),$>>=1,oe>>=1}}else if(ae.length>0){if(Le&&ve){const $=Pe(ae[0]);n.texStorage2D(t.TEXTURE_2D,W,Ke,$.width,$.height)}for(let $=0,oe=ae.length;$<oe;$++)Ne=ae[$],Le?z&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Re,ze,Ne):n.texImage2D(t.TEXTURE_2D,$,Ke,Re,ze,Ne);b.generateMipmaps=!1}else if(Le){if(ve){const $=Pe(me);n.texStorage2D(t.TEXTURE_2D,W,Ke,$.width,$.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,ze,me)}else n.texImage2D(t.TEXTURE_2D,0,Ke,Re,ze,me);m(b)&&p(le),ge.__version=se.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ie(D,b,q){if(b.image.length!==6)return;const le=De(D,b),he=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+q);const se=i.get(he);if(he.version!==se.__version||le===!0){n.activeTexture(t.TEXTURE0+q);const ge=Lt.getPrimaries(Lt.workingColorSpace),ce=b.colorSpace===co?null:Lt.getPrimaries(b.colorSpace),Ee=b.colorSpace===co||ge===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let oe=0;oe<6;oe++)!He&&!me?Re[oe]=v(b.image[oe],!0,r.maxCubemapSize):Re[oe]=me?b.image[oe].image:b.image[oe],Re[oe]=Fe(b,Re[oe]);const ze=Re[0],Ke=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type),ae=_(b.internalFormat,Ke,Ne,b.colorSpace),Le=b.isVideoTexture!==!0,ve=se.__version===void 0||le===!0,z=he.dataReady;let W=S(b,ze);de(t.TEXTURE_CUBE_MAP,b);let $;if(He){Le&&ve&&n.texStorage2D(t.TEXTURE_CUBE_MAP,W,ae,ze.width,ze.height);for(let oe=0;oe<6;oe++){$=Re[oe].mipmaps;for(let _e=0;_e<$.length;_e++){const Ae=$[_e];b.format!==$r?Ke!==null?Le?z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,0,0,Ae.width,Ae.height,Ke,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,ae,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,0,0,Ae.width,Ae.height,Ke,Ne,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,ae,Ae.width,Ae.height,0,Ke,Ne,Ae.data)}}}else{if($=b.mipmaps,Le&&ve){$.length>0&&W++;const oe=Pe(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,W,ae,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){Le?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re[oe].width,Re[oe].height,Ke,Ne,Re[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ae,Re[oe].width,Re[oe].height,0,Ke,Ne,Re[oe].data);for(let _e=0;_e<$.length;_e++){const rt=$[_e].image[oe].image;Le?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,0,0,rt.width,rt.height,Ke,Ne,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,ae,rt.width,rt.height,0,Ke,Ne,rt.data)}}else{Le?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ke,Ne,Re[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ae,Ke,Ne,Re[oe]);for(let _e=0;_e<$.length;_e++){const Ae=$[_e];Le?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,0,0,Ke,Ne,Ae.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,ae,Ke,Ne,Ae.image[oe])}}}m(b)&&p(t.TEXTURE_CUBE_MAP),se.__version=he.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function fe(D,b,q,le,he,se){const ge=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),Ee=_(q.internalFormat,ge,ce,q.colorSpace);if(!i.get(b).__hasExternalTextures){const me=Math.max(1,b.width>>se),Re=Math.max(1,b.height>>se);he===t.TEXTURE_3D||he===t.TEXTURE_2D_ARRAY?n.texImage3D(he,se,Ee,me,Re,b.depth,0,ge,ce,null):n.texImage2D(he,se,Ee,me,Re,0,ge,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),ye(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,he,i.get(q).__webglTexture,0,Me(b)):(he===t.TEXTURE_2D||he>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,he,i.get(q).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(D,b,q){if(t.bindRenderbuffer(t.RENDERBUFFER,D),b.depthBuffer){const le=b.depthTexture,he=le&&le.isDepthTexture?le.type:null,se=x(b.stencilBuffer,he),ge=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Me(b);ye(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,se,b.width,b.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,se,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,se,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,D)}else{const le=b.textures;for(let he=0;he<le.length;he++){const se=le[he],ge=s.convert(se.format,se.colorSpace),ce=s.convert(se.type),Ee=_(se.internalFormat,ge,ce,se.colorSpace),He=Me(b);q&&ye(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ee,b.width,b.height):ye(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,Ee,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const le=i.get(b.depthTexture).__webglTexture,he=Me(b);if(b.depthTexture.format===Jl)ye(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(b.depthTexture.format===xc)ye(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const b=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),le){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=le}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pe(b.__webglFramebuffer,D)}else if(q){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]===void 0)b.__webglDepthbuffer[le]=t.createRenderbuffer(),Te(b.__webglDepthbuffer[le],D,!1);else{const he=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer[le];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,se)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Te(b.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,he)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(D,b,q){const le=i.get(D);b!==void 0&&fe(le.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&Oe(D)}function qe(D){const b=D.texture,q=i.get(D),le=i.get(b);D.addEventListener("dispose",C);const he=D.textures,se=D.isWebGLCubeRenderTarget===!0,ge=he.length>1;if(ge||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=b.version,o.memory.textures++),se){q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)q.__webglFramebuffer[ce][Ee]=t.createFramebuffer()}else q.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)q.__webglFramebuffer[ce]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(ge)for(let ce=0,Ee=he.length;ce<Ee;ce++){const He=i.get(he[ce]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&ye(D)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ce=0;ce<he.length;ce++){const Ee=he[ce];q.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);const He=s.convert(Ee.format,Ee.colorSpace),me=s.convert(Ee.type),Re=_(Ee.internalFormat,He,me,Ee.colorSpace,D.isXRRenderTarget===!0),ze=Me(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Re,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,q.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),de(t.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)fe(q.__webglFramebuffer[ce][Ee],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else fe(q.__webglFramebuffer[ce],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(b)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let ce=0,Ee=he.length;ce<Ee;ce++){const He=he[ce],me=i.get(He);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),de(t.TEXTURE_2D,He),fe(q.__webglFramebuffer,D,He,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(He)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,le.__webglTexture),de(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)fe(q.__webglFramebuffer[Ee],D,b,t.COLOR_ATTACHMENT0,ce,Ee);else fe(q.__webglFramebuffer,D,b,t.COLOR_ATTACHMENT0,ce,0);m(b)&&p(ce),n.unbindTexture()}D.depthBuffer&&Oe(D)}function We(D){const b=D.textures;for(let q=0,le=b.length;q<le;q++){const he=b[q];if(m(he)){const se=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(he).__webglTexture;n.bindTexture(se,ge),p(se),n.unbindTexture()}}}const ue=[],L=[];function Se(D){if(D.samples>0){if(ye(D)===!1){const b=D.textures,q=D.width,le=D.height;let he=t.COLOR_BUFFER_BIT;const se=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(D),ce=b.length>1;if(ce)for(let Ee=0;Ee<b.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ee]);const He=i.get(b[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,q,le,0,0,q,le,he,t.NEAREST),l===!0&&(ue.length=0,L.length=0,ue.push(t.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ue.push(se),L.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<b.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ee]);const He=i.get(b[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Me(D){return Math.min(r.maxSamples,D.samples)}function ye(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function k(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Fe(D,b){const q=D.colorSpace,le=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==jo&&q!==co&&(Lt.getTransfer(q)===$t?(le!==$r||he!==Gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Pe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ye}function v6(t,e){function n(i,r=co){let s;const o=Lt.getTransfer(r);if(i===Gs)return t.UNSIGNED_BYTE;if(i===L_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===D_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===e3)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===JT)return t.BYTE;if(i===QT)return t.SHORT;if(i===_f)return t.UNSIGNED_SHORT;if(i===P_)return t.INT;if(i===za)return t.UNSIGNED_INT;if(i===Ds)return t.FLOAT;if(i===jf)return t.HALF_FLOAT;if(i===t3)return t.ALPHA;if(i===n3)return t.RGB;if(i===$r)return t.RGBA;if(i===i3)return t.LUMINANCE;if(i===r3)return t.LUMINANCE_ALPHA;if(i===Jl)return t.DEPTH_COMPONENT;if(i===xc)return t.DEPTH_STENCIL;if(i===s3)return t.RED;if(i===N_)return t.RED_INTEGER;if(i===o3)return t.RG;if(i===I_)return t.RG_INTEGER;if(i===U_)return t.RGBA_INTEGER;if(i===Eh||i===Th||i===Ah||i===bh)if(o===$t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Eh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Th)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ah)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Eh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Th)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ah)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pv||i===mv||i===gv||i===vv)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vv)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_v||i===xv||i===yv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_v||i===xv)return o===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sv||i===Mv||i===wv||i===Ev||i===Tv||i===Av||i===bv||i===Cv||i===Rv||i===Pv||i===Lv||i===Dv||i===Nv||i===Iv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ev)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Av)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Iv)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ch||i===Uv||i===Fv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ch)return o===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===a3||i===Ov||i===kv||i===Bv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ch)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ov)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_c?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class _6 extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x6={type:"move"};class x0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x6)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const y6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ms({vertexShader:y6,fragmentShader:S6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new Yf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w6 extends Nc{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=new M6,m=n.getContextAttributes();let p=null,_=null;const x=[],S=[],E=new ke;let C=null;const M=new wi;M.layers.enable(1),M.viewport=new Vt;const A=new wi;A.layers.enable(2),A.viewport=new Vt;const U=[M,A],y=new _6;y.layers.enable(1),y.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=x[ie];return fe===void 0&&(fe=new x0,x[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=x[ie];return fe===void 0&&(fe=new x0,x[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=x[ie];return fe===void 0&&(fe=new x0,x[ie]=fe),fe.getHandSpace()};function B(ie){const fe=S.indexOf(ie.inputSource);if(fe===-1)return;const Te=x[fe];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,c||o),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let ie=0;ie<x.length;ie++){const fe=S[ie];fe!==null&&(S[ie]=null,x[ie].disconnect(fe))}T=null,I=null,v.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,_=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Va(h.framebufferWidth,h.framebufferHeight,{format:$r,type:Gs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Te=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=m.stencil?xc:Jl,Te=m.stencil?_c:za);const Oe={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Va(d.textureWidth,d.textureHeight,{format:$r,type:Gs,depthTexture:new S3(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(ie){for(let fe=0;fe<ie.removed.length;fe++){const Te=ie.removed[fe],pe=S.indexOf(Te);pe>=0&&(S[pe]=null,x[pe].disconnect(Te))}for(let fe=0;fe<ie.added.length;fe++){const Te=ie.added[fe];let pe=S.indexOf(Te);if(pe===-1){for(let Be=0;Be<x.length;Be++)if(Be>=S.length){S.push(Te),pe=Be;break}else if(S[Be]===null){S[Be]=Te,pe=Be;break}if(pe===-1)break}const Oe=x[pe];Oe&&Oe.connect(Te)}}const G=new H,X=new H;function F(ie,fe,Te){G.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(Te.matrixWorld);const pe=G.distanceTo(X),Oe=fe.projectionMatrix.elements,Be=Te.projectionMatrix.elements,qe=Oe[14]/(Oe[10]-1),We=Oe[14]/(Oe[10]+1),ue=(Oe[9]+1)/Oe[5],L=(Oe[9]-1)/Oe[5],Se=(Oe[8]-1)/Oe[0],Me=(Be[8]+1)/Be[0],ye=qe*Se,k=qe*Me,Fe=pe/(-Se+Me),Pe=Fe*-Se;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Pe),ie.translateZ(Fe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Oe[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const D=qe+Fe,b=We+Fe,q=ye-Pe,le=k+(pe-Pe),he=ue*We/b*D,se=L*We/b*D;ie.projectionMatrix.makePerspective(q,le,he,se,D,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Q(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let fe=ie.near,Te=ie.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),y.near=A.near=M.near=fe,y.far=A.far=M.far=Te,(T!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,I=y.far);const pe=ie.parent,Oe=y.cameras;Q(y,pe);for(let Be=0;Be<Oe.length;Be++)Q(Oe[Be],pe);Oe.length===2?F(y,M,A):y.projectionMatrix.copy(M.projectionMatrix),N(ie,y,pe)};function N(ie,fe,Te){Te===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=xf*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let de=null;function De(ie,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const Te=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let pe=!1;Te.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Be=0;Be<Te.length;Be++){const qe=Te[Be];let We=null;if(h!==null)We=h.getViewport(qe);else{const L=f.getViewSubImage(d,qe);We=L.viewport,Be===0&&(e.setRenderTargetTextures(_,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(_))}let ue=U[Be];ue===void 0&&(ue=new wi,ue.layers.enable(Be),ue.viewport=new Vt,U[Be]=ue),ue.matrix.fromArray(qe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(qe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(We.x,We.y,We.width,We.height),Be===0&&(y.matrix.copy(ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(ue)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Be=f.getDepthInformation(Te[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,r.renderState)}}for(let Te=0;Te<x.length;Te++){const pe=S[Te],Oe=x[Te];pe!==null&&Oe!==void 0&&Oe.update(pe,fe,c||o)}de&&de(ie,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ze=new x3;Ze.setAnimationLoop(De),this.setAnimationLoop=function(ie){de=ie},this.dispose=function(){}}}const ta=new ps,E6=new Ft;function T6(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,g3(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),x=_.envMap,S=_.envMapRotation;x&&(m.envMap.value=x,ta.copy(S),ta.x*=-1,ta.y*=-1,ta.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ta.y*=-1,ta.z*=-1),m.envMapRotation.value.setFromMatrix4(E6.makeRotationFromEuler(ta)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A6(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(_,E);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function u(_){const x=f();_.__bindingPointIndex=x;const S=t.createBuffer(),E=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],S=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,M=S.length;C<M;C++){const A=Array.isArray(S[C])?S[C]:[S[C]];for(let U=0,y=A.length;U<y;U++){const T=A[U];if(h(T,C,U,E)===!0){const I=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let K=0;K<B.length;K++){const G=B[K],X=v(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,I+V,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(_,x,S,E){const C=_.value,M=x+"_"+S;if(E[M]===void 0)return typeof C=="number"||typeof C=="boolean"?E[M]=C:E[M]=C.clone(),!0;{const A=E[M];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return E[M]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(_){const x=_.uniforms;let S=0;const E=16;for(let M=0,A=x.length;M<A;M++){const U=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=U.length;y<T;y++){const I=U[y],B=Array.isArray(I.value)?I.value:[I.value];for(let V=0,K=B.length;V<K;V++){const G=B[V],X=v(G),F=S%E,Q=F%X.boundary,N=F+Q;S+=Q,N!==0&&E-N<X.storage&&(S+=E-N),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=X.storage}}}const C=S%E;return C>0&&(S+=E-C),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class V_{constructor(e={}){const{canvas:n=p5(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mr,this.toneMapping=bo,this.toneMappingExposure=1;const x=this;let S=!1,E=0,C=0,M=null,A=-1,U=null;const y=new Vt,T=new Vt;let I=null;const B=new _t(0);let V=0,K=n.width,G=n.height,X=1,F=null,Q=null;const N=new Vt(0,0,K,G),de=new Vt(0,0,K,G);let De=!1;const Ze=new sm;let ie=!1,fe=!1;const Te=new Ft,pe=new Ft,Oe=new H,Be=new Vt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ue(){return M===null?X:1}let L=i;function Se(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${R_}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),L===null){const j="webgl2";if(L=Se(j,R),L===null)throw Se(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Me,ye,k,Fe,Pe,D,b,q,le,he,se,ge,ce,Ee,He,me,Re,ze,Ke,Ne,ae,Le,ve,z;function W(){Me=new DN(L),Me.init(),Le=new v6(L,Me),ye=new AN(L,Me,e,Le),k=new p6(L),ye.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),Fe=new UN(L),Pe=new QI,D=new g6(L,Me,k,Pe,ye,Le,Fe),b=new CN(x),q=new LN(x),le=new H5(L),ve=new EN(L,le),he=new NN(L,le,Fe,ve),se=new ON(L,he,le,Fe),Ke=new FN(L,ye,D),me=new bN(Pe),ge=new JI(x,b,q,Me,ye,ve,me),ce=new T6(x,Pe),Ee=new t6,He=new a6(Me),ze=new wN(x,b,q,k,se,d,l),Re=new d6(x,se,ye),z=new A6(L,Fe,ye,k),Ne=new TN(L,Me,Fe),ae=new IN(L,Me,Fe),Fe.programs=ge.programs,x.capabilities=ye,x.extensions=Me,x.properties=Pe,x.renderLists=Ee,x.shadowMap=Re,x.state=k,x.info=Fe}W();const $=new w6(x,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(K,G,!1))},this.getSize=function(R){return R.set(K,G)},this.setSize=function(R,j,Z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,G=j,n.width=Math.floor(R*X),n.height=Math.floor(j*X),Z===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(K*X,G*X).floor()},this.setDrawingBufferSize=function(R,j,Z){K=R,G=j,X=Z,n.width=Math.floor(R*Z),n.height=Math.floor(j*Z),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,j,Z,ee){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,j,Z,ee),k.viewport(y.copy(N).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,j,Z,ee){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,j,Z,ee),k.scissor(T.copy(de).multiplyScalar(X).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){k.setScissorTest(De=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,j=!0,Z=!0){let ee=0;if(R){let w=!1;if(M!==null){const O=M.texture.format;w=O===U_||O===I_||O===N_}if(w){const O=M.texture.type,Y=O===Gs||O===za||O===_f||O===_c||O===L_||O===D_,J=ze.getClearColor(),te=ze.getClearAlpha(),xe=J.r,ne=J.g,we=J.b;Y?(h[0]=xe,h[1]=ne,h[2]=we,h[3]=te,L.clearBufferuiv(L.COLOR,0,h)):(g[0]=xe,g[1]=ne,g[2]=we,g[3]=te,L.clearBufferiv(L.COLOR,0,g))}else ee|=L.COLOR_BUFFER_BIT}j&&(ee|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(ee|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Ee.dispose(),He.dispose(),Pe.dispose(),b.dispose(),q.dispose(),se.dispose(),ve.dispose(),z.dispose(),ge.dispose(),$.dispose(),$.removeEventListener("sessionstart",dt),$.removeEventListener("sessionend",Ie),tt.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Fe.autoReset,j=Re.enabled,Z=Re.autoUpdate,ee=Re.needsUpdate,w=Re.type;W(),Fe.autoReset=R,Re.enabled=j,Re.autoUpdate=Z,Re.needsUpdate=ee,Re.type=w}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const j=R.target;j.removeEventListener("dispose",rt),yt(j)}function yt(R){Dt(R),Pe.remove(R)}function Dt(R){const j=Pe.get(R).programs;j!==void 0&&(j.forEach(function(Z){ge.releaseProgram(Z)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,Z,ee,w,O){j===null&&(j=qe);const Y=w.isMesh&&w.matrixWorld.determinant()<0,J=Et(R,j,Z,ee,w);k.setMaterial(ee,Y);let te=Z.index,xe=1;if(ee.wireframe===!0){if(te=he.getWireframeAttribute(Z),te===void 0)return;xe=2}const ne=Z.drawRange,we=Z.attributes.position;let be=ne.start*xe,et=(ne.start+ne.count)*xe;O!==null&&(be=Math.max(be,O.start*xe),et=Math.min(et,(O.start+O.count)*xe)),te!==null?(be=Math.max(be,0),et=Math.min(et,te.count)):we!=null&&(be=Math.max(be,0),et=Math.min(et,we.count));const Tt=et-be;if(Tt<0||Tt===1/0)return;ve.setup(w,ee,J,Z,te);let Wt,Ye=Ne;if(te!==null&&(Wt=le.get(te),Ye=ae,Ye.setIndex(Wt)),w.isMesh)ee.wireframe===!0?(k.setLineWidth(ee.wireframeLinewidth*ue()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(w.isLine){let Ue=ee.linewidth;Ue===void 0&&(Ue=1),k.setLineWidth(Ue*ue()),w.isLineSegments?Ye.setMode(L.LINES):w.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else w.isPoints?Ye.setMode(L.POINTS):w.isSprite&&Ye.setMode(L.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)Ye.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ye.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{const Ue=w._multiDrawStarts,Ct=w._multiDrawCounts,vt=w._multiDrawCount,xn=te?le.get(te).bytesPerElement:1,Pi=Pe.get(ee).currentProgram.getUniforms();for(let Bt=0;Bt<vt;Bt++)Pi.setValue(L,"_gl_DrawID",Bt),Ye.render(Ue[Bt]/xn,Ct[Bt])}else if(w.isInstancedMesh)Ye.renderInstances(be,Tt,w.count);else if(Z.isInstancedBufferGeometry){const Ue=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ct=Math.min(Z.instanceCount,Ue);Ye.renderInstances(be,Tt,Ct)}else Ye.render(be,Tt)};function ct(R,j,Z){R.transparent===!0&&R.side===ss&&R.forceSinglePass===!1?(R.side=bi,R.needsUpdate=!0,Ot(R,j,Z),R.side=Uo,R.needsUpdate=!0,Ot(R,j,Z),R.side=ss):Ot(R,j,Z)}this.compile=function(R,j,Z=null){Z===null&&(Z=R),m=He.get(Z),m.init(j),_.push(m),Z.traverseVisible(function(w){w.isLight&&w.layers.test(j.layers)&&(m.pushLight(w),w.castShadow&&m.pushShadow(w))}),R!==Z&&R.traverseVisible(function(w){w.isLight&&w.layers.test(j.layers)&&(m.pushLight(w),w.castShadow&&m.pushShadow(w))}),m.setupLights();const ee=new Set;return R.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;const O=w.material;if(O)if(Array.isArray(O))for(let Y=0;Y<O.length;Y++){const J=O[Y];ct(J,Z,w),ee.add(J)}else ct(O,Z,w),ee.add(O)}),_.pop(),m=null,ee},this.compileAsync=function(R,j,Z=null){const ee=this.compile(R,j,Z);return new Promise(w=>{function O(){if(ee.forEach(function(Y){Pe.get(Y).currentProgram.isReady()&&ee.delete(Y)}),ee.size===0){w(R);return}setTimeout(O,10)}Me.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Qe=null;function Xe(R){Qe&&Qe(R)}function dt(){tt.stop()}function Ie(){tt.start()}const tt=new x3;tt.setAnimationLoop(Xe),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(R){Qe=R,$.setAnimationLoop(R),R===null?tt.stop():tt.start()},$.addEventListener("sessionstart",dt),$.addEventListener("sessionend",Ie),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(j),j=$.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,j,M),m=He.get(R,_.length),m.init(j),_.push(m),pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ze.setFromProjectionMatrix(pe),fe=this.localClippingEnabled,ie=me.init(this.clippingPlanes,fe),v=Ee.get(R,p.length),v.init(),p.push(v),$.enabled===!0&&$.isPresenting===!0){const O=x.xr.getDepthSensingMesh();O!==null&&Je(O,j,-1/0,x.sortObjects)}Je(R,j,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(F,Q),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&ze.addToRenderList(v,R),this.info.render.frame++,ie===!0&&me.beginShadows();const Z=m.state.shadowsArray;Re.render(Z,R,j),ie===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=v.opaque,w=v.transmissive;if(m.setupLights(),j.isArrayCamera){const O=j.cameras;if(w.length>0)for(let Y=0,J=O.length;Y<J;Y++){const te=O[Y];St(ee,w,R,te)}We&&ze.render(R);for(let Y=0,J=O.length;Y<J;Y++){const te=O[Y];nt(v,R,te,te.viewport)}}else w.length>0&&St(ee,w,R,j),We&&ze.render(R),nt(v,R,j);M!==null&&(D.updateMultisampleRenderTarget(M),D.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(x,R,j),ve.resetDefaultState(),A=-1,U=null,_.pop(),_.length>0?(m=_[_.length-1],ie===!0&&me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Je(R,j,Z,ee){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ze.intersectsSprite(R)){ee&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const Y=se.update(R),J=R.material;J.visible&&v.push(R,Y,J,Z,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ze.intersectsObject(R))){const Y=se.update(R),J=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Be.copy(Y.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(J)){const te=Y.groups;for(let xe=0,ne=te.length;xe<ne;xe++){const we=te[xe],be=J[we.materialIndex];be&&be.visible&&v.push(R,Y,be,Z,Be.z,we)}}else J.visible&&v.push(R,Y,J,Z,Be.z,null)}}const O=R.children;for(let Y=0,J=O.length;Y<J;Y++)Je(O[Y],j,Z,ee)}function nt(R,j,Z,ee){const w=R.opaque,O=R.transmissive,Y=R.transparent;m.setupLightsView(Z),ie===!0&&me.setGlobalState(x.clippingPlanes,Z),ee&&k.viewport(y.copy(ee)),w.length>0&&it(w,j,Z),O.length>0&&it(O,j,Z),Y.length>0&&it(Y,j,Z),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function St(R,j,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ee.id]===void 0&&(m.state.transmissionRenderTarget[ee.id]=new Va(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?jf:Gs,minFilter:ya,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const O=m.state.transmissionRenderTarget[ee.id],Y=ee.viewport||y;O.setSize(Y.z,Y.w);const J=x.getRenderTarget();x.setRenderTarget(O),x.getClearColor(B),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),We&&ze.render(Z);const te=x.toneMapping;x.toneMapping=bo;const xe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),m.setupLightsView(ee),ie===!0&&me.setGlobalState(x.clippingPlanes,ee),it(R,Z,ee),D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let we=0,be=j.length;we<be;we++){const et=j[we],Tt=et.object,Wt=et.geometry,Ye=et.material,Ue=et.group;if(Ye.side===ss&&Tt.layers.test(ee.layers)){const Ct=Ye.side;Ye.side=bi,Ye.needsUpdate=!0,wt(Tt,Z,ee,Wt,Ye,Ue),Ye.side=Ct,Ye.needsUpdate=!0,ne=!0}}ne===!0&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O))}x.setRenderTarget(J),x.setClearColor(B,V),xe!==void 0&&(ee.viewport=xe),x.toneMapping=te}function it(R,j,Z){const ee=j.isScene===!0?j.overrideMaterial:null;for(let w=0,O=R.length;w<O;w++){const Y=R[w],J=Y.object,te=Y.geometry,xe=ee===null?Y.material:ee,ne=Y.group;J.layers.test(Z.layers)&&wt(J,j,Z,te,xe,ne)}}function wt(R,j,Z,ee,w,O){R.onBeforeRender(x,j,Z,ee,w,O),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),w.onBeforeRender(x,j,Z,ee,R,O),w.transparent===!0&&w.side===ss&&w.forceSinglePass===!1?(w.side=bi,w.needsUpdate=!0,x.renderBufferDirect(Z,j,ee,w,R,O),w.side=Uo,w.needsUpdate=!0,x.renderBufferDirect(Z,j,ee,w,R,O),w.side=ss):x.renderBufferDirect(Z,j,ee,w,R,O),R.onAfterRender(x,j,Z,ee,w,O)}function Ot(R,j,Z){j.isScene!==!0&&(j=qe);const ee=Pe.get(R),w=m.state.lights,O=m.state.shadowsArray,Y=w.state.version,J=ge.getParameters(R,w.state,O,j,Z),te=ge.getProgramCacheKey(J);let xe=ee.programs;ee.environment=R.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(R.isMeshStandardMaterial?q:b).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,xe===void 0&&(R.addEventListener("dispose",rt),xe=new Map,ee.programs=xe);let ne=xe.get(te);if(ne!==void 0){if(ee.currentProgram===ne&&ee.lightsStateVersion===Y)return Rt(R,J),ne}else J.uniforms=ge.getUniforms(R),R.onBeforeCompile(J,x),ne=ge.acquireProgram(J,te),xe.set(te,ne),ee.uniforms=J.uniforms;const we=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(we.clippingPlanes=me.uniform),Rt(R,J),ee.needsLights=Nt(R),ee.lightsStateVersion=Y,ee.needsLights&&(we.ambientLightColor.value=w.state.ambient,we.lightProbe.value=w.state.probe,we.directionalLights.value=w.state.directional,we.directionalLightShadows.value=w.state.directionalShadow,we.spotLights.value=w.state.spot,we.spotLightShadows.value=w.state.spotShadow,we.rectAreaLights.value=w.state.rectArea,we.ltc_1.value=w.state.rectAreaLTC1,we.ltc_2.value=w.state.rectAreaLTC2,we.pointLights.value=w.state.point,we.pointLightShadows.value=w.state.pointShadow,we.hemisphereLights.value=w.state.hemi,we.directionalShadowMap.value=w.state.directionalShadowMap,we.directionalShadowMatrix.value=w.state.directionalShadowMatrix,we.spotShadowMap.value=w.state.spotShadowMap,we.spotLightMatrix.value=w.state.spotLightMatrix,we.spotLightMap.value=w.state.spotLightMap,we.pointShadowMap.value=w.state.pointShadowMap,we.pointShadowMatrix.value=w.state.pointShadowMatrix),ee.currentProgram=ne,ee.uniformsList=null,ne}function kt(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ph.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Rt(R,j){const Z=Pe.get(R);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function Et(R,j,Z,ee,w){j.isScene!==!0&&(j=qe),D.resetTextureUnits();const O=j.fog,Y=ee.isMeshStandardMaterial?j.environment:null,J=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:jo,te=(ee.isMeshStandardMaterial?q:b).get(ee.envMap||Y),xe=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ne=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),we=!!Z.morphAttributes.position,be=!!Z.morphAttributes.normal,et=!!Z.morphAttributes.color;let Tt=bo;ee.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const Wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ye=Wt!==void 0?Wt.length:0,Ue=Pe.get(ee),Ct=m.state.lights;if(ie===!0&&(fe===!0||R!==U)){const Xt=R===U&&ee.id===A;me.setState(ee,R,Xt)}let vt=!1;ee.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ct.state.version||Ue.outputColorSpace!==J||w.isBatchedMesh&&Ue.batching===!1||!w.isBatchedMesh&&Ue.batching===!0||w.isBatchedMesh&&Ue.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&Ue.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&Ue.instancing===!1||!w.isInstancedMesh&&Ue.instancing===!0||w.isSkinnedMesh&&Ue.skinning===!1||!w.isSkinnedMesh&&Ue.skinning===!0||w.isInstancedMesh&&Ue.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Ue.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&Ue.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&Ue.instancingMorph===!1&&w.morphTexture!==null||Ue.envMap!==te||ee.fog===!0&&Ue.fog!==O||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==me.numPlanes||Ue.numIntersection!==me.numIntersection)||Ue.vertexAlphas!==xe||Ue.vertexTangents!==ne||Ue.morphTargets!==we||Ue.morphNormals!==be||Ue.morphColors!==et||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==Ye)&&(vt=!0):(vt=!0,Ue.__version=ee.version);let xn=Ue.currentProgram;vt===!0&&(xn=Ot(ee,j,w));let Pi=!1,Bt=!1,hi=!1;const At=xn.getUniforms(),Kn=Ue.uniforms;if(k.useProgram(xn.program)&&(Pi=!0,Bt=!0,hi=!0),ee.id!==A&&(A=ee.id,Bt=!0),Pi||U!==R){ye.reverseDepthBuffer?(Te.copy(R.projectionMatrix),g5(Te),v5(Te),At.setValue(L,"projectionMatrix",Te)):At.setValue(L,"projectionMatrix",R.projectionMatrix),At.setValue(L,"viewMatrix",R.matrixWorldInverse);const Xt=At.map.cameraPosition;Xt!==void 0&&Xt.setValue(L,Oe.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,Bt=!0,hi=!0)}if(w.isSkinnedMesh){At.setOptional(L,w,"bindMatrix"),At.setOptional(L,w,"bindMatrixInverse");const Xt=w.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),At.setValue(L,"boneTexture",Xt.boneTexture,D))}w.isBatchedMesh&&(At.setOptional(L,w,"batchingTexture"),At.setValue(L,"batchingTexture",w._matricesTexture,D),At.setOptional(L,w,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",w._indirectTexture,D),At.setOptional(L,w,"batchingColorTexture"),w._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",w._colorsTexture,D));const Xi=Z.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&Ke.update(w,Z,xn),(Bt||Ue.receiveShadow!==w.receiveShadow)&&(Ue.receiveShadow=w.receiveShadow,At.setValue(L,"receiveShadow",w.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Kn.envMap.value=te,Kn.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(Kn.envMapIntensity.value=j.environmentIntensity),Bt&&(At.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&Dn(Kn,hi),O&&ee.fog===!0&&ce.refreshFogUniforms(Kn,O),ce.refreshMaterialUniforms(Kn,ee,X,G,m.state.transmissionRenderTarget[R.id]),Ph.upload(L,kt(Ue),Kn,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ph.upload(L,kt(Ue),Kn,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(L,"center",w.center),At.setValue(L,"modelViewMatrix",w.modelViewMatrix),At.setValue(L,"normalMatrix",w.normalMatrix),At.setValue(L,"modelMatrix",w.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Xt=ee.uniformsGroups;for(let Yi=0,Or=Xt.length;Yi<Or;Yi++){const $i=Xt[Yi];z.update($i,xn),z.bind($i,xn)}}return xn}function Dn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Nt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,j,Z){Pe.get(R.texture).__webglTexture=j,Pe.get(R.depthTexture).__webglTexture=Z;const ee=Pe.get(R);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const Z=Pe.get(R);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,Z=0){M=R,E=j,C=Z;let ee=!0,w=null,O=!1,Y=!1;if(R){const te=Pe.get(R);if(te.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(L.FRAMEBUFFER,null),ee=!1;else if(te.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(te.__hasExternalTextures)D.rebindTextures(R,Pe.get(R.texture).__webglTexture,Pe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const we=R.depthTexture;if(te.__boundDepthTexture!==we){if(we!==null&&Pe.has(we)&&(R.width!==we.image.width||R.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const xe=R.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(Y=!0);const ne=Pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[j])?w=ne[j][Z]:w=ne[j],O=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?w=Pe.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?w=ne[Z]:w=ne,y.copy(R.viewport),T.copy(R.scissor),I=R.scissorTest}else y.copy(N).multiplyScalar(X).floor(),T.copy(de).multiplyScalar(X).floor(),I=De;if(k.bindFramebuffer(L.FRAMEBUFFER,w)&&ee&&k.drawBuffers(R,w),k.viewport(y),k.scissor(T),k.setScissorTest(I),O){const te=Pe.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+j,te.__webglTexture,Z)}else if(Y){const te=Pe.get(R.texture),xe=j||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,te.__webglTexture,Z||0,xe)}A=-1},this.readRenderTargetPixels=function(R,j,Z,ee,w,O,Y){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Y!==void 0&&(J=J[Y]),J){k.bindFramebuffer(L.FRAMEBUFFER,J);try{const te=R.texture,xe=te.format,ne=te.type;if(!ye.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ee&&Z>=0&&Z<=R.height-w&&L.readPixels(j,Z,ee,w,Le.convert(xe),Le.convert(ne),O)}finally{const te=M!==null?Pe.get(M).__webglFramebuffer:null;k.bindFramebuffer(L.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,j,Z,ee,w,O,Y){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Y!==void 0&&(J=J[Y]),J){const te=R.texture,xe=te.format,ne=te.type;if(!ye.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-ee&&Z>=0&&Z<=R.height-w){k.bindFramebuffer(L.FRAMEBUFFER,J);const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,O.byteLength,L.STREAM_READ),L.readPixels(j,Z,ee,w,Le.convert(xe),Le.convert(ne),0);const be=M!==null?Pe.get(M).__webglFramebuffer:null;k.bindFramebuffer(L.FRAMEBUFFER,be);const et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await m5(L,et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,O),L.deleteBuffer(we),L.deleteSync(et),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,Z=0){R.isTexture!==!0&&(Rh("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const ee=Math.pow(2,-Z),w=Math.floor(R.image.width*ee),O=Math.floor(R.image.height*ee),Y=j!==null?j.x:0,J=j!==null?j.y:0;D.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Y,J,w,O),k.unbindTexture()},this.copyTextureToTexture=function(R,j,Z=null,ee=null,w=0){R.isTexture!==!0&&(Rh("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,R=arguments[1],j=arguments[2],w=arguments[3]||0,Z=null);let O,Y,J,te,xe,ne;Z!==null?(O=Z.max.x-Z.min.x,Y=Z.max.y-Z.min.y,J=Z.min.x,te=Z.min.y):(O=R.image.width,Y=R.image.height,J=0,te=0),ee!==null?(xe=ee.x,ne=ee.y):(xe=0,ne=0);const we=Le.convert(j.format),be=Le.convert(j.type);D.setTexture2D(j,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),Tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wt=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),Ue=L.getParameter(L.UNPACK_SKIP_IMAGES),Ct=R.isCompressedTexture?R.mipmaps[w]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,J),L.pixelStorei(L.UNPACK_SKIP_ROWS,te),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,w,xe,ne,O,Y,we,be,Ct.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,w,xe,ne,Ct.width,Ct.height,we,Ct.data):L.texSubImage2D(L.TEXTURE_2D,w,xe,ne,O,Y,we,be,Ct),L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue),w===0&&j.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(R,j,Z=null,ee=null,w=0){R.isTexture!==!0&&(Rh("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,R=arguments[2],j=arguments[3],w=arguments[4]||0);let O,Y,J,te,xe,ne,we,be,et;const Tt=R.isCompressedTexture?R.mipmaps[w]:R.image;Z!==null?(O=Z.max.x-Z.min.x,Y=Z.max.y-Z.min.y,J=Z.max.z-Z.min.z,te=Z.min.x,xe=Z.min.y,ne=Z.min.z):(O=Tt.width,Y=Tt.height,J=Tt.depth,te=0,xe=0,ne=0),ee!==null?(we=ee.x,be=ee.y,et=ee.z):(we=0,be=0,et=0);const Wt=Le.convert(j.format),Ye=Le.convert(j.type);let Ue;if(j.isData3DTexture)D.setTexture3D(j,0),Ue=L.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)D.setTexture2DArray(j,0),Ue=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const Ct=L.getParameter(L.UNPACK_ROW_LENGTH),vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pi=L.getParameter(L.UNPACK_SKIP_ROWS),Bt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,te),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ne),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Ue,w,we,be,et,O,Y,J,Wt,Ye,Tt.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(Ue,w,we,be,et,O,Y,J,Wt,Tt.data):L.texSubImage3D(Ue,w,we,be,et,O,Y,J,Wt,Ye,Tt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt),w===0&&j.generateMipmaps&&L.generateMipmap(Ue),k.unbindTexture()},this.initRenderTarget=function(R){Pe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),k.unbindTexture()},this.resetState=function(){E=0,C=0,M=null,k.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===F_?"display-p3":"srgb",n.unpackColorSpace=Lt.workingColorSpace===im?"display-p3":"srgb"}}class am extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class b6 extends Yn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Oi,u=Oi,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A3 extends qa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _p=new H,xp=new H,nS=new Ft,Qc=new rm,Od=new Ic,y0=new H,iS=new H;class C6 extends zn{constructor(e=new Fr,n=new A3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_p.fromBufferAttribute(n,r-1),xp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_p.distanceTo(xp);e.setAttribute("lineDistance",new Dr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Od.copy(i.boundingSphere),Od.applyMatrix4(r),Od.radius+=s,e.ray.intersectsSphere(Od)===!1)return;nS.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(nS);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),_=u.getX(v+1),x=kd(this,e,Qc,l,p,_);x&&n.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=kd(this,e,Qc,l,v,m);p&&n.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=kd(this,e,Qc,l,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=kd(this,e,Qc,l,g-1,h);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kd(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(_p.fromBufferAttribute(o,r),xp.fromBufferAttribute(o,s),n.distanceSqToSegment(_p,xp,y0,iS)>i)return;y0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(y0);if(!(l<e.near||l>e.far))return{distance:l,point:iS.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const rS=new H,sS=new H;class R6 extends C6{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)rS.fromBufferAttribute(n,r),sS.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rS.distanceTo(sS);e.setAttribute("lineDistance",new Dr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P6 extends qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oS=new Ft,Hv=new rm,Bd=new Ic,zd=new H;class L6 extends zn{constructor(e=new Fr,n=new P6){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bd.copy(i.boundingSphere),Bd.applyMatrix4(r),Bd.radius+=s,e.ray.intersectsSphere(Bd)===!1)return;oS.copy(r).invert(),Hv.copy(e.ray).applyMatrix4(oS);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,v=h;g<v;g++){const m=c.getX(g);zd.fromBufferAttribute(f,m),aS(zd,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,v=h;g<v;g++)zd.fromBufferAttribute(f,g),aS(zd,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aS(t,e,n,i,r,s,o){const a=Hv.distanceSqToPoint(t);if(a<n){const l=new H;Hv.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class D6 extends Yn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ei,this.magFilter=s!==void 0?s:Ei,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class vs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ke:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new H,r=[],s=[],o=[],a=new H,l=new Ft;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kn(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(n===!0){let h=Math.acos(kn(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class H_ extends vs{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ke){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N6 extends H_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function G_(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Vd=new H,S0=new G_,M0=new G_,w0=new G_;class b3 extends vs{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new H){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Vd.subVectors(r[0],r[1]).add(r[0]),c=Vd);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Vd.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Vd),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),S0.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),M0.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),w0.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(S0.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),M0.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),w0.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(S0.calc(l),M0.calc(l),w0.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lS(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function I6(t,e){const n=1-t;return n*n*e}function U6(t,e){return 2*(1-t)*t*e}function F6(t,e){return t*t*e}function Fu(t,e,n,i){return I6(t,e)+U6(t,n)+F6(t,i)}function O6(t,e){const n=1-t;return n*n*n*e}function k6(t,e){const n=1-t;return 3*n*n*t*e}function B6(t,e){return 3*(1-t)*t*t*e}function z6(t,e){return t*t*t*e}function Ou(t,e,n,i,r){return O6(t,e)+k6(t,n)+B6(t,i)+z6(t,r)}class C3 extends vs{constructor(e=new ke,n=new ke,i=new ke,r=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ke){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ou(e,r.x,s.x,o.x,a.x),Ou(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class V6 extends vs{constructor(e=new H,n=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ou(e,r.x,s.x,o.x,a.x),Ou(e,r.y,s.y,o.y,a.y),Ou(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R3 extends vs{constructor(e=new ke,n=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ke){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ke){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H6 extends vs{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P3 extends vs{constructor(e=new ke,n=new ke,i=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ke){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fu(e,r.x,s.x,o.x),Fu(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G6 extends vs{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fu(e,r.x,s.x,o.x),Fu(e,r.y,s.y,o.y),Fu(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L3 extends vs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ke){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(lS(a,l.x,c.x,u.x,f.x),lS(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ke().fromArray(r))}return this}}var Gv=Object.freeze({__proto__:null,ArcCurve:N6,CatmullRomCurve3:b3,CubicBezierCurve:C3,CubicBezierCurve3:V6,EllipseCurve:H_,LineCurve:R3,LineCurve3:H6,QuadraticBezierCurve:P3,QuadraticBezierCurve3:G6,SplineCurve:L3});class W6 extends vs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gv[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Gv[r.type]().fromJSON(r))}return this}}class cS extends W6{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new R3(this.currentPoint.clone(),new ke(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new P3(this.currentPoint.clone(),new ke(e,n),new ke(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new C3(this.currentPoint.clone(),new ke(e,n),new ke(i,r),new ke(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new L3(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new H_(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const Hd=new H,Gd=new H,E0=new H,Wd=new br;class j6 extends Fr{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ql*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},h=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=Wd;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Wd.getNormal(E0),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){const x=(_+1)%3,S=f[_],E=f[x],C=Wd[u[_]],M=Wd[u[x]],A=`${S}_${E}`,U=`${E}_${S}`;U in d&&d[U]?(E0.dot(d[U].normal)<=s&&(h.push(C.x,C.y,C.z),h.push(M.x,M.y,M.z)),d[U]=null):A in d||(d[A]={index0:c[_],index1:c[x],normal:E0.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Hd.fromBufferAttribute(a,v),Gd.fromBufferAttribute(a,m),h.push(Hd.x,Hd.y,Hd.z),h.push(Gd.x,Gd.y,Gd.z)}this.setAttribute("position",new Dr(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class D3 extends cS{constructor(e){super(e),this.uuid=$a(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new cS().fromJSON(r))}return this}}const X6={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=N3(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,d,h;if(i&&(s=Z6(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)f=t[g],d=t[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return Sf(s,o,n,a,l,h,0),o}};function N3(t,e,n,i,r){let s,o;if(r===lU(t,e,n,i)>0)for(s=e;s<n;s+=i)o=uS(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=uS(s,t[s],t[s+1],o);return o&&lm(o,o.next)&&(wf(o),o=o.next),o}function Ha(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(lm(n,n.next)||sn(n.prev,n,n.next)===0)){if(wf(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Sf(t,e,n,i,r,s,o){if(!t)return;!o&&s&&nU(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?$6(t,i,r,s):Y6(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),wf(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=q6(Ha(t),e,n),Sf(t,e,n,i,r,s,2)):o===2&&K6(t,e,n,i,r,s):Sf(Ha(t),e,n,i,r,s,1);break}}}function Y6(t){const e=t.prev,n=t,i=t.next;if(sn(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,h=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&Fl(r,a,s,l,o,c,g.x,g.y)&&sn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $6(t,e,n,i){const r=t.prev,s=t,o=t.next;if(sn(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,h=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,v=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,p=Wv(h,g,e,n,i),_=Wv(v,m,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=p&&S&&S.z<=_;){if(x.x>=h&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Fl(a,u,l,f,c,d,x.x,x.y)&&sn(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Fl(a,u,l,f,c,d,S.x,S.y)&&sn(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=h&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Fl(a,u,l,f,c,d,x.x,x.y)&&sn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=_;){if(S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Fl(a,u,l,f,c,d,S.x,S.y)&&sn(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function q6(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!lm(r,s)&&I3(r,i,i.next,s)&&Mf(r,s)&&Mf(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),wf(i),wf(i.next),i=t=s),i=i.next}while(i!==t);return Ha(i)}function K6(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sU(o,a)){let l=U3(o,a);o=Ha(o,o.next),l=Ha(l,l.next),Sf(o,e,n,i,r,s,0),Sf(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Z6(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=N3(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(rU(c));for(r.sort(J6),s=0;s<r.length;s++)n=Q6(r[s],n);return n}function J6(t,e){return t.x-e.x}function Q6(t,e){const n=eU(t,e);if(!n)return e;const i=U3(n,t);return Ha(i,i.next),Ha(n,n.next)}function eU(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Fl(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Mf(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&tU(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function tU(t,e){return sn(t.prev,t,e.prev)<0&&sn(e.next,t,t.next)<0}function nU(t,e,n,i){let r=t;do r.z===0&&(r.z=Wv(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,iU(r)}function iU(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Wv(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function rU(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Fl(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function sU(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!oU(t,e)&&(Mf(t,e)&&Mf(e,t)&&aU(t,e)&&(sn(t.prev,t,e.prev)||sn(t,e.prev,e))||lm(t,e)&&sn(t.prev,t,t.next)>0&&sn(e.prev,e,e.next)>0)}function sn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function lm(t,e){return t.x===e.x&&t.y===e.y}function I3(t,e,n,i){const r=Xd(sn(t,e,n)),s=Xd(sn(t,e,i)),o=Xd(sn(n,i,t)),a=Xd(sn(n,i,e));return!!(r!==s&&o!==a||r===0&&jd(t,n,e)||s===0&&jd(t,i,e)||o===0&&jd(n,t,i)||a===0&&jd(n,e,i))}function jd(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Xd(t){return t>0?1:t<0?-1:0}function oU(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&I3(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Mf(t,e){return sn(t.prev,t,t.next)<0?sn(t,e,t.next)>=0&&sn(t,t.prev,e)>=0:sn(t,e,t.prev)<0||sn(t,t.next,e)<0}function aU(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function U3(t,e){const n=new jv(t.i,t.x,t.y),i=new jv(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function uS(t,e,n,i){const r=new jv(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function wf(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function jv(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lU(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ku{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ku.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];fS(e),dS(i,e);let o=e.length;n.forEach(fS);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,dS(i,n[l]);const a=X6.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fS(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function dS(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class W_ extends Fr{constructor(e=new D3([new ke(.5,.5),new ke(-.5,.5),new ke(-.5,-.5),new ke(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Dr(r,3)),this.setAttribute("uv",new Dr(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,h=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:h-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:cU;let x,S=!1,E,C,M,A;p&&(x=p.getSpacedPoints(u),S=!0,d=!1,E=p.computeFrenetFrames(u,!1),C=new H,M=new H,A=new H),d||(m=0,h=0,g=0,v=0);const U=a.extractPoints(c);let y=U.shape;const T=U.holes;if(!ku.isClockWise(y)){y=y.reverse();for(let ue=0,L=T.length;ue<L;ue++){const Se=T[ue];ku.isClockWise(Se)&&(T[ue]=Se.reverse())}}const B=ku.triangulateShape(y,T),V=y;for(let ue=0,L=T.length;ue<L;ue++){const Se=T[ue];y=y.concat(Se)}function K(ue,L,Se){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(L,Se)}const G=y.length,X=B.length;function F(ue,L,Se){let Me,ye,k;const Fe=ue.x-L.x,Pe=ue.y-L.y,D=Se.x-ue.x,b=Se.y-ue.y,q=Fe*Fe+Pe*Pe,le=Fe*b-Pe*D;if(Math.abs(le)>Number.EPSILON){const he=Math.sqrt(q),se=Math.sqrt(D*D+b*b),ge=L.x-Pe/he,ce=L.y+Fe/he,Ee=Se.x-b/se,He=Se.y+D/se,me=((Ee-ge)*b-(He-ce)*D)/(Fe*b-Pe*D);Me=ge+Fe*me-ue.x,ye=ce+Pe*me-ue.y;const Re=Me*Me+ye*ye;if(Re<=2)return new ke(Me,ye);k=Math.sqrt(Re/2)}else{let he=!1;Fe>Number.EPSILON?D>Number.EPSILON&&(he=!0):Fe<-Number.EPSILON?D<-Number.EPSILON&&(he=!0):Math.sign(Pe)===Math.sign(b)&&(he=!0),he?(Me=-Pe,ye=Fe,k=Math.sqrt(q)):(Me=Fe,ye=Pe,k=Math.sqrt(q/2))}return new ke(Me/k,ye/k)}const Q=[];for(let ue=0,L=V.length,Se=L-1,Me=ue+1;ue<L;ue++,Se++,Me++)Se===L&&(Se=0),Me===L&&(Me=0),Q[ue]=F(V[ue],V[Se],V[Me]);const N=[];let de,De=Q.concat();for(let ue=0,L=T.length;ue<L;ue++){const Se=T[ue];de=[];for(let Me=0,ye=Se.length,k=ye-1,Fe=Me+1;Me<ye;Me++,k++,Fe++)k===ye&&(k=0),Fe===ye&&(Fe=0),de[Me]=F(Se[Me],Se[k],Se[Fe]);N.push(de),De=De.concat(de)}for(let ue=0;ue<m;ue++){const L=ue/m,Se=h*Math.cos(L*Math.PI/2),Me=g*Math.sin(L*Math.PI/2)+v;for(let ye=0,k=V.length;ye<k;ye++){const Fe=K(V[ye],Q[ye],Me);pe(Fe.x,Fe.y,-Se)}for(let ye=0,k=T.length;ye<k;ye++){const Fe=T[ye];de=N[ye];for(let Pe=0,D=Fe.length;Pe<D;Pe++){const b=K(Fe[Pe],de[Pe],Me);pe(b.x,b.y,-Se)}}}const Ze=g+v;for(let ue=0;ue<G;ue++){const L=d?K(y[ue],De[ue],Ze):y[ue];S?(M.copy(E.normals[0]).multiplyScalar(L.x),C.copy(E.binormals[0]).multiplyScalar(L.y),A.copy(x[0]).add(M).add(C),pe(A.x,A.y,A.z)):pe(L.x,L.y,0)}for(let ue=1;ue<=u;ue++)for(let L=0;L<G;L++){const Se=d?K(y[L],De[L],Ze):y[L];S?(M.copy(E.normals[ue]).multiplyScalar(Se.x),C.copy(E.binormals[ue]).multiplyScalar(Se.y),A.copy(x[ue]).add(M).add(C),pe(A.x,A.y,A.z)):pe(Se.x,Se.y,f/u*ue)}for(let ue=m-1;ue>=0;ue--){const L=ue/m,Se=h*Math.cos(L*Math.PI/2),Me=g*Math.sin(L*Math.PI/2)+v;for(let ye=0,k=V.length;ye<k;ye++){const Fe=K(V[ye],Q[ye],Me);pe(Fe.x,Fe.y,f+Se)}for(let ye=0,k=T.length;ye<k;ye++){const Fe=T[ye];de=N[ye];for(let Pe=0,D=Fe.length;Pe<D;Pe++){const b=K(Fe[Pe],de[Pe],Me);S?pe(b.x,b.y+x[u-1].y,x[u-1].x+Se):pe(b.x,b.y,f+Se)}}}ie(),fe();function ie(){const ue=r.length/3;if(d){let L=0,Se=G*L;for(let Me=0;Me<X;Me++){const ye=B[Me];Oe(ye[2]+Se,ye[1]+Se,ye[0]+Se)}L=u+m*2,Se=G*L;for(let Me=0;Me<X;Me++){const ye=B[Me];Oe(ye[0]+Se,ye[1]+Se,ye[2]+Se)}}else{for(let L=0;L<X;L++){const Se=B[L];Oe(Se[2],Se[1],Se[0])}for(let L=0;L<X;L++){const Se=B[L];Oe(Se[0]+G*u,Se[1]+G*u,Se[2]+G*u)}}i.addGroup(ue,r.length/3-ue,0)}function fe(){const ue=r.length/3;let L=0;Te(V,L),L+=V.length;for(let Se=0,Me=T.length;Se<Me;Se++){const ye=T[Se];Te(ye,L),L+=ye.length}i.addGroup(ue,r.length/3-ue,1)}function Te(ue,L){let Se=ue.length;for(;--Se>=0;){const Me=Se;let ye=Se-1;ye<0&&(ye=ue.length-1);for(let k=0,Fe=u+m*2;k<Fe;k++){const Pe=G*k,D=G*(k+1),b=L+Me+Pe,q=L+ye+Pe,le=L+ye+D,he=L+Me+D;Be(b,q,le,he)}}}function pe(ue,L,Se){l.push(ue),l.push(L),l.push(Se)}function Oe(ue,L,Se){qe(ue),qe(L),qe(Se);const Me=r.length/3,ye=_.generateTopUV(i,r,Me-3,Me-2,Me-1);We(ye[0]),We(ye[1]),We(ye[2])}function Be(ue,L,Se,Me){qe(ue),qe(L),qe(Me),qe(L),qe(Se),qe(Me);const ye=r.length/3,k=_.generateSideWallUV(i,r,ye-6,ye-3,ye-2,ye-1);We(k[0]),We(k[1]),We(k[3]),We(k[1]),We(k[2]),We(k[3])}function qe(ue){r.push(l[ue*3+0]),r.push(l[ue*3+1]),r.push(l[ue*3+2])}function We(ue){s.push(ue.x),s.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return uU(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Gv[r.type]().fromJSON(r)),new W_(i,e.options)}}const cU={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ke(s,o),new ke(a,l),new ke(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],h=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ke(o,1-l),new ke(c,1-f),new ke(d,1-g),new ke(v,1-p)]:[new ke(a,1-l),new ke(u,1-f),new ke(h,1-g),new ke(m,1-p)]}};function uU(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Xv extends qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l3,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fU extends Xv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const hS={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class dU{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const hU=new dU;class j_{constructor(e){this.manager=e!==void 0?e:hU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}j_.DEFAULT_MATERIAL_NAME="__DEFAULT";class pU extends j_{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hS.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=yf("img");function l(){u(),hS.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class F3 extends j_{constructor(e){super(e)}load(e,n,i,r){const s=new Yn,o=new pU(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class X_ extends zn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const T0=new Ft,pS=new H,mS=new H;class O3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pS.setFromMatrixPosition(e.matrixWorld),n.position.copy(pS),mS.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mS),n.updateMatrixWorld(),T0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(T0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(T0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gS=new Ft,eu=new H,A0=new H;class mU extends O3{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),eu.setFromMatrixPosition(e.matrixWorld),i.position.copy(eu),A0.copy(i.position),A0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(A0),i.updateMatrixWorld(),r.makeTranslation(-eu.x,-eu.y,-eu.z),gS.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gS)}}class k3 extends X_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mU}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gU extends O3{constructor(){super(new y3(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vS extends X_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new gU}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vU extends X_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const _S=new Ft;class B3{constructor(e,n,i=0,r=1/0){this.ray=new rm(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new k_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return _S.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_S),this}intersectObject(e,n=!0,i=[]){return Yv(e,this,i,n),i.sort(xS),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yv(e[r],this,i,n);return i.sort(xS),i}}function xS(t,e){return t.distance-e.distance}function Yv(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Yv(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:R_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=R_);class _U extends am{constructor(){super();const e=new Uc;e.deleteAttribute("uv");const n=new Xv({side:bi}),i=new Xv,r=new k3(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Zt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Zt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Zt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Zt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Zt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Zt(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const f=new Zt(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const d=new Zt(e,ml(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const h=new Zt(e,ml(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);const g=new Zt(e,ml(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Zt(e,ml(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Zt(e,ml(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Zt(e,ml(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function ml(t){const e=new B_;return e.color.setScalar(t),e}function As(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z3(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ur={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ef={duration:.5,overwrite:!1,delay:0},Y_,$n,Qt,Rr=1e8,zt=1/Rr,$v=Math.PI*2,xU=$v/4,yU=0,V3=Math.sqrt,SU=Math.cos,MU=Math.sin,Vn=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},Ws=function(e){return typeof e=="number"},$_=function(e){return typeof e>"u"},gs=function(e){return typeof e=="object"},Vi=function(e){return e!==!1},q_=function(){return typeof window<"u"},Yd=function(e){return dn(e)||Vn(e)},H3=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fi=Array.isArray,wU=/random\([^)]+\)/g,EU=/,\s*/g,yS=/(?:-?\.?\d|\.)+/gi,G3=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ol=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,b0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W3=/[+-]=-?[.\d]+/,TU=/[^,'"\[\]\s]+/gi,AU=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rn,ts,qv,K_,hr={},yp={},j3,X3=function(e){return(yp=Sc(e,hr))&&ji},Z_=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Tf=function(e,n){return!n&&console.warn(e)},Y3=function(e,n){return e&&(hr[e]=n)&&yp&&(yp[e]=n)||hr},Af=function(){return 0},bU={suppressEvents:!0,isStart:!0,kill:!1},Lh={suppressEvents:!0,kill:!1},CU={suppressEvents:!0},J_={},Ro=[],Kv={},$3,nr={},C0={},SS=30,Dh=[],Q_="",ex=function(e){var n=e[0],i,r;if(gs(n)||dn(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Dh.length;r--&&!Dh[r].targetTest(n););i=Dh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gA(e[r],i)))||e.splice(r,1);return e},ba=function(e){return e._gsap||ex(Pr(e))[0]._gsap},q3=function(e,n,i){return(i=e[n])&&dn(i)?e[n]():$_(i)&&e.getAttribute&&e.getAttribute(n)||i},Hi=function(e,n){return(e=e.split(",")).forEach(n)||e},gn=function(e){return Math.round(e*1e5)/1e5||0},tn=function(e){return Math.round(e*1e7)/1e7||0},tc=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},RU=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Sp=function(){var e=Ro.length,n=Ro.slice(0),i,r;for(Kv={},Ro.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tx=function(e){return!!(e._initted||e._startAt||e.add)},K3=function(e,n,i,r){Ro.length&&!$n&&Sp(),e.render(n,i,!!($n&&n<0&&tx(e))),Ro.length&&!$n&&Sp()},Z3=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(TU).length<2?n:Vn(e)?e.trim():e},J3=function(e){return e},pr=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},PU=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Sc=function(e,n){for(var i in n)e[i]=n[i];return e},MS=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=gs(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Mp=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},Bu=function(e){var n=e.parent||rn,i=e.keyframes?PU(fi(e.keyframes)):pr;if(Vi(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},LU=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},Q3=function(e,n,i,r,s){var o=e[r],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=o,n.parent=n._dp=e,n},cm=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,o=n._next;s?s._next=o:e[i]===n&&(e[i]=o),o?o._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Fo=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ca=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},DU=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Zv=function(e,n,i,r){return e._startAt&&($n?e._startAt.revert(Lh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},NU=function t(e){return!e||e._ts&&t(e.parent)},wS=function(e){return e._repeat?Mc(e._tTime,e=e.duration()+e._rDelay)*e:0},Mc=function(e,n){var i=Math.floor(e=tn(e/n));return e&&i===e?i-1:i},wp=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},um=function(e){return e._end=tn(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},fm=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=tn(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),um(e),i._dirty||Ca(i,e)),e},eA=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=wp(e.rawTime(),n),(!n._dur||$f(0,n.totalDuration(),i)-n._tTime>zt)&&n.render(i,!0)),Ca(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-zt}},os=function(e,n,i,r){return n.parent&&Fo(n),n._start=tn((Ws(i)?i:!i&&Ep(n)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==rn?yr(e,i,n):e._time)+n._delay),n._end=tn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Q3(e,n,"_first","_last",e._sort?"_start":0),Ep(n)||(e._recent=n),r||eA(e,n),e._ts<0&&fm(e,e._tTime),e},tA=function(e,n){return(hr.ScrollTrigger||Z_("scrollTrigger",n))&&hr.ScrollTrigger.create(n,e)},nA=function(e,n,i,r,s){if(ix(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!$n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$3!==rr.frame)return Ro.push(e),e._lazy=[s,r],1},IU=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Ep=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},UU=function(e,n,i,r){var s=e.ratio,o=n<0||!n&&(!e._start&&IU(e)&&!(!e._initted&&Ep(e))||(e._ts<0||e._dp._ts<0)&&!Ep(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=$f(0,e._tDur,n),u=Mc(l,a),e._yoyo&&u&1&&(o=1-o),u!==Mc(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||$n||r||e._zTime===zt||!n&&e._zTime){if(!e._initted&&nA(e,n,r,i,l))return;for(f=e._zTime,e._zTime=n||(i?zt:0),i||(i=n&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;n<0&&Zv(e,n,i,!0),e._onUpdate&&!i&&or(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&or(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&Fo(e,1),!i&&!$n&&(or(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},FU=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},wc=function(e,n,i,r){var s=e._repeat,o=tn(n)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:tn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&fm(e,e._tTime=e._tDur*a),e.parent&&um(e),i||Ca(e.parent,e),e},ES=function(e){return e instanceof Ii?Ca(e):wc(e,e._dur)},OU={_start:0,endTime:Af,totalDuration:Af},yr=function t(e,n,i){var r=e.labels,s=e._recent||OU,o=e.duration()>=Rr?s.endTime(!1):e._dur,a,l,c;return Vn(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(n in r||(r[n]=o),r[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),c&&i&&(l=l/100*(fi(i)?i[0]:i).totalDuration()),a>1?t(e,n.substr(0,a-1),i)+l:o+l)):n==null?o:+n},zu=function(e,n,i){var r=Ws(n[1]),s=(r?2:1)+(e<2?0:1),o=n[s],a,l;if(r&&(o.duration=n[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vi(l.vars.inherit)&&l.parent;o.immediateRender=Vi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new Mn(n[0],o,n[s+1])},Xo=function(e,n){return e||e===0?n(e):n},$f=function(e,n,i){return i<e?e:i>n?n:i},li=function(e,n){return!Vn(e)||!(n=AU.exec(e))?"":n[1]},kU=function(e,n,i){return Xo(i,function(r){return $f(e,n,r)})},Jv=[].slice,iA=function(e,n){return e&&gs(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&gs(e[0]))&&!e.nodeType&&e!==ts},BU=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Vn(r)&&!n||iA(r,1)?(s=i).push.apply(s,Pr(r)):i.push(r)})||i},Pr=function(e,n,i){return Qt&&!n&&Qt.selector?Qt.selector(e):Vn(e)&&!i&&(qv||!Ec())?Jv.call((n||K_).querySelectorAll(e),0):fi(e)?BU(e,i):iA(e)?Jv.call(e,0):e?[e]:[]},Qv=function(e){return e=Pr(e)[0]||Tf("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Pr(n,i.querySelectorAll?i:i===e?Tf("Invalid scope")||K_.createElement("div"):e)}},rA=function(e){return e.sort(function(){return .5-Math.random()})},sA=function(e){if(dn(e))return e;var n=gs(e)?e:{each:e},i=Ra(n.ease),r=n.from||0,s=parseFloat(n.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=n.axis,u=r,f=r;return Vn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,g){var v=(g||n).length,m=o[v],p,_,x,S,E,C,M,A,U;if(!m){if(U=n.grid==="auto"?0:(n.grid||[1,Rr])[1],!U){for(M=-Rr;M<(M=g[U++].getBoundingClientRect().left)&&U<v;);U<v&&U--}for(m=o[v]=[],p=l?Math.min(U,v)*u-.5:r%U,_=U===Rr?0:l?v*f/U-.5:r/U|0,M=0,A=Rr,C=0;C<v;C++)x=C%U-p,S=_-(C/U|0),m[C]=E=c?Math.abs(c==="y"?S:x):V3(x*x+S*S),E>M&&(M=E),E<A&&(A=E);r==="random"&&rA(m),m.max=M-A,m.min=A,m.v=v=(parseFloat(n.amount)||parseFloat(n.each)*(U>v?v-1:c?c==="y"?v/U:U:Math.max(U,v/U))||0)*(r==="edges"?-1:1),m.b=v<0?s-v:s,m.u=li(n.amount||n.each)||0,i=i&&v<0?JU(i):i}return v=(m[d]-m.min)/m.max||0,tn(m.b+(i?i(v):v)*m.v)+m.u}},e1=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=tn(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Ws(i)?0:li(i))}},oA=function(e,n){var i=fi(e),r,s;return!i&&gs(e)&&(r=i=e.radius||Rr,e.values?(e=Pr(e.values),(s=!Ws(e[0]))&&(r*=r)):e=e1(e.increment)),Xo(n,i?dn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Rr,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Ws(o)?u:u+li(o)}:e1(e))},aA=function(e,n,i,r){return Xo(fi(e)?!n:i===!0?!!(i=0):!r,function(){return fi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},zU=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,o){return o(s)},r)}},VU=function(e,n){return function(i){return e(parseFloat(i))+(n||li(i))}},HU=function(e,n,i){return cA(e,n,0,1,i)},lA=function(e,n,i){return Xo(i,function(r){return e[~~n(r)]})},GU=function t(e,n,i){var r=n-e;return fi(e)?lA(e,t(0,e.length),n):Xo(i,function(s){return(r+(s-e)%r)%r+e})},WU=function t(e,n,i){var r=n-e,s=r*2;return fi(e)?lA(e,t(0,e.length-1),n):Xo(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},bf=function(e){return e.replace(wU,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(EU);return aA(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},cA=function(e,n,i,r,s){var o=n-e,a=r-i;return Xo(s,function(l){return i+((l-e)/o*a||0)})},jU=function t(e,n,i,r){var s=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!s){var o=Vn(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},n={p:n};else if(fi(e)&&!fi(n)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(t(e[c-1],e[c]));f--,s=function(g){g*=f;var v=Math.min(d,~~g);return u[v](g-v)},i=n}else r||(e=Sc(fi(e)?[]:{},e));if(!u){for(l in n)nx.call(a,e,l,"get",n[l]);s=function(g){return ox(g,a)||(o?e.p:e)}}}return Xo(i,s)},TS=function(e,n,i){var r=e.labels,s=Rr,o,a,l;for(o in r)a=r[o]-n,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},or=function(e,n,i){var r=e.vars,s=r[n],o=Qt,a=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&Ro.length&&Sp(),a&&(Qt=a),u=l?s.apply(c,l):s.call(c),Qt=o,u},mu=function(e){return Fo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$n),e.progress()<1&&or(e,"onInterrupt"),e},kl,uA=[],fA=function(e){if(e)if(e=!e.name&&e.default||e,q_()||e.headless){var n=e.name,i=dn(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Af,render:ox,add:nx,kill:lF,modifier:aF,rawVars:0},o={targetTest:0,get:0,getSetter:sx,aliases:{},register:0};if(Ec(),e!==r){if(nr[n])return;pr(r,pr(Mp(e,s),o)),Sc(r.prototype,Sc(s,Mp(e,o))),nr[r.prop=n]=r,e.targetTest&&(Dh.push(r),J_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Y3(n,r),e.register&&e.register(ji,r,Gi)}else uA.push(e)},Ht=255,gu={aqua:[0,Ht,Ht],lime:[0,Ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ht],navy:[0,0,128],white:[Ht,Ht,Ht],olive:[128,128,0],yellow:[Ht,Ht,0],orange:[Ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ht,0,0],pink:[Ht,192,203],cyan:[0,Ht,Ht],transparent:[Ht,Ht,Ht,0]},R0=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*Ht+.5|0},dA=function(e,n,i){var r=e?Ws(e)?[e>>16,e>>8&Ht,e&Ht]:0:gu.black,s,o,a,l,c,u,f,d,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gu[e])r=gu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ht,r&Ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ht,e&Ht]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(yS),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=R0(l+1/3,s,o),r[1]=R0(l,s,o),r[2]=R0(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(G3),i&&r.length<4&&(r[3]=1),r}else r=e.match(yS)||gu.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/Ht,o=r[1]/Ht,a=r[2]/Ht,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},hA=function(e){var n=[],i=[],r=-1;return e.split(Po).forEach(function(s){var o=s.match(Ol)||[];n.push.apply(n,o),i.push(r+=o.length+1)}),n.c=i,n},AS=function(e,n,i){var r="",s=(e+r).match(Po),o=n?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=dA(d,n,1))&&o+(n?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=hA(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Po,"1").split(Ol),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Po),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Po=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gu)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),XU=/hsl[a]?\(/,pA=function(e){var n=e.join(" "),i;if(Po.lastIndex=0,Po.test(n))return i=XU.test(n),e[1]=AS(e[1],i),e[0]=AS(e[0],i,hA(e[1])),!0},Cf,rr=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function v(m){var p=t()-r,_=m===!0,x,S,E,C;if((p>e||p<0)&&(i+=p-n),r+=p,E=r-i,x=E-o,(x>0||_)&&(C=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,o+=x+(x>=s?0:s-x),S=1),_||(l=c(v)),S)for(h=0;h<a.length;h++)a[h](E,d,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){j3&&(!qv&&q_()&&(ts=qv=window,K_=ts.document||{},hr.gsap=ji,(ts.gsapVersions||(ts.gsapVersions=[])).push(ji.version),X3(yp||ts.GreenSockGlobals||!ts.gsap&&ts||{}),uA.forEach(fA)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Cf=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Cf=0,c=Af},lagSmoothing:function(m,p){e=m||1/0,n=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,_){var x=p?function(S,E,C,M){m(S,E,C,M),f.remove(x)}:m;return f.remove(m),a[_?"unshift":"push"](x),Ec(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),Ec=function(){return!Cf&&rr.wake()},Mt={},YU=/^[\d.\-M][\d.\-,\s]/,$U=/["']/g,qU=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),n[r]=isNaN(c)?c.replace($U,"").trim():+c,r=l.substr(a+1).trim();return n},KU=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},ZU=function(e){var n=(e+"").split("("),i=Mt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[qU(n[1])]:KU(e).split(",").map(Z3)):Mt._CE&&YU.test(e)?Mt._CE("",e):i},JU=function(e){return function(n){return 1-e(1-n)}},Ra=function(e,n){return e&&(dn(e)?e:Mt[e]||ZU(e))||n},Ka=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},o;return Hi(e,function(a){Mt[a]=hr[a]=s,Mt[o=a.toLowerCase()]=i;for(var l in s)Mt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Mt[a+"."+l]=s[l]}),s},mA=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},P0=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),o=s/$v*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*MU((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:mA(a);return s=$v/s,l.config=function(c,u){return t(e,c,u)},l},L0=function t(e,n){n===void 0&&(n=1.70158);var i=function(o){return o?--o*o*((n+1)*o+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:mA(i);return r.config=function(s){return t(e,s)},r};Hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Ka(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Mt.Linear.easeNone=Mt.none=Mt.Linear.easeIn;Ka("Elastic",P0("in"),P0("out"),P0());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(a){return a<n?t*a*a:a<i?t*Math.pow(a-1.5/e,2)+.75:a<r?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Ka("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ka("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ka("Circ",function(t){return-(V3(1-t*t)-1)});Ka("Sine",function(t){return t===1?1:-SU(t*xU)+1});Ka("Back",L0("in"),L0("out"),L0());Mt.SteppedEase=Mt.steps=hr.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,o=1-zt;return function(a){return((r*$f(0,o,a)|0)+s)*i}}};Ef.ease=Mt["quad.out"];Hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Q_+=t+","+t+"Params,"});var gA=function(e,n){this.id=yU++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:q3,this.set=n?n.getSetter:sx},Rf=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,wc(this,+n.duration,1,1),this.data=n.data,Qt&&(this._ctx=Qt,Qt.data.push(this)),Cf||rr.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,wc(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ec(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fm(this,i),!s._dp||s.parent||eA(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&os(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===zt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),K3(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+wS(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+wS(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Mc(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?wp(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-zt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime($f(-Math.abs(this._delay),a,s),r!==!1),um(this),DU(this)},e.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ec(),this._ts=this._rts;var r=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==zt,o;if(s)for(this._tTime-=zt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=r+zt){s=!1;break}o=o._next}this.totalTime(r,s)}return this},e.startTime=function(i){if(arguments.length){this._start=tn(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&os(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Vi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wp(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=CU);var r=$n;return $n=i,tx(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),$n=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ES(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ES(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(yr(this,i),Vi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Vi(r)),this._dur||(this._zTime=-zt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-zt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-zt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=dn(i)?i:J3,l=function(){var u=r.then;r.then=null,s&&s(),dn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){mu(this)},t}();pr(Rf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var Ii=function(t){z3(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Vi(i.sortChildren),rn&&os(i.parent||rn,As(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&tA(As(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,o){return zu(0,arguments,this),this},n.from=function(r,s,o){return zu(1,arguments,this),this},n.fromTo=function(r,s,o,a){return zu(2,arguments,this),this},n.set=function(r,s,o){return s.duration=0,s.parent=this,Bu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mn(r,s,yr(this,o),1),this},n.call=function(r,s,o){return os(this,Mn.delayedCall(0,r,s),o)},n.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Mn(r,o,yr(this,l)),this},n.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Bu(o).immediateRender=Vi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},n.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Bu(a).immediateRender=Vi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},n.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:tn(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,g,v,m,p,_,x,S,E,C,M;if(this!==rn&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,x=this._ts,p=!x,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=tn(u%m),u===l?(v=this._repeat,d=c):(E=tn(u/m),v=~~E,v&&v===E&&(d=c,v--),d>c&&(d=c)),E=Mc(this._tTime,m),!a&&this._tTime&&E!==v&&this._tTime-E*m-this._dur<=0&&(E=v),C&&v&1&&(d=c-d,M=1),v!==E&&!this._lock){var A=C&&E&1,U=A===(C&&v&1);if(v<E&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(M?0:tn(v*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&or(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=v),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=FU(this,tn(a),tn(d)),_&&(u-=d-(d=_._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!E&&(or(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&_!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){_=0,g&&(u+=this._zTime=-zt);break}}h=g}else{h=this._last;for(var y=r<0?r:d;h;){if(g=h._prev,(h._act||y<=h._end)&&h._ts&&_!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(y-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(y-h._start)*h._ts,s,o||$n&&tx(h)),d!==this._time||!this._ts&&!p){_=0,g&&(u+=this._zTime=y?-zt:zt);break}}h=g}}if(_&&!s&&(this.pause(),_.render(d>=a?0:-zt)._zTime=d>=a?1:-1,this._ts))return this._start=S,um(this),this.render(r,s,o);this._onUpdate&&!s&&or(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fo(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(or(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var o=this;if(Ws(s)||(s=yr(this,s,r)),!(r instanceof Rf)){if(fi(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Vn(r))return this.addLabel(r,s);if(dn(r))r=Mn.delayedCall(0,r);else return this}return this!==r?os(this,r,s):this},n.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Rr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Mn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},n.remove=function(r){return Vn(r)?this.removeLabel(r):dn(r)?this.killTweensOf(r):(r.parent===this&&cm(this,r),r===this._recent&&(this._recent=this._last),Ca(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(rr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=yr(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,o){var a=Mn.delayedCall(0,s||Af,o);return a.data="isPause",this._hasPause=1,os(this,a,yr(this,r))},n.removePause=function(r){var s=this._first;for(r=yr(this,r);s;)s._start===r&&s.data==="isPause"&&Fo(s),s=s._next},n.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ho!==a[l]&&a[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var o=[],a=Pr(r),l=this._first,c=Ws(s),u;l;)l instanceof Mn?RU(l._targets,a)&&(c?(!ho||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},n.tweenTo=function(r,s){s=s||{};var o=this,a=yr(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Mn.to(o,pr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||zt,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&wc(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},n.tweenFromTo=function(r,s,o){return this.tweenTo(s,pr({startAt:{time:yr(this,r)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),TS(this,yr(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),TS(this,yr(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+zt)},n.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=tn(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ca(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ca(this)},n.totalDuration=function(r){var s=0,o=this,a=o._last,l=Rr,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,os(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=tn(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;wc(o,o===rn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(rn._ts&&(K3(rn,wp(r,rn)),$3=rr.frame),rr.frame>=SS){SS+=ur.autoSleep||120;var s=rn._first;if((!s||!s._ts)&&ur.autoSleep&&rr._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rr.sleep()}}},e}(Rf);pr(Ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var QU=function(e,n,i,r,s,o,a){var l=new Gi(this._pt,e,n,0,1,SA,null,s),c=0,u=0,f,d,h,g,v,m,p,_;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=bf(r)),o&&(_=[i,r],o(_,e,n),i=_[0],r=_[1]),d=i.match(b0)||[];f=b0.exec(r);)g=f[0],v=r.substring(c,f.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:m,c:g.charAt(1)==="="?tc(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=b0.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(W3.test(r)||p)&&(l.e=0),this._pt=l,l},nx=function(e,n,i,r,s,o,a,l,c,u){dn(r)&&(r=r(s||0,e,o));var f=e[n],d=i!=="get"?i:dn(f)?c?e[n.indexOf("set")||!dn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():f,h=dn(f)?c?rF:xA:rx,g;if(Vn(r)&&(~r.indexOf("random(")&&(r=bf(r)),r.charAt(1)==="="&&(g=tc(d,r)+(li(d)||0),(g||g===0)&&(r=g))),!u||d!==r||t1)return!isNaN(d*r)&&r!==""?(g=new Gi(this._pt,e,n,+d||0,r-(d||0),typeof f=="boolean"?oF:yA,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(n in e)&&Z_(n,r),QU.call(this,e,n,d,r,h,l||ur.stringFilter,c))},eF=function(e,n,i,r,s){if(dn(e)&&(e=Vu(e,s,n,i,r)),!gs(e)||e.style&&e.nodeType||fi(e)||H3(e))return Vn(e)?Vu(e,s,n,i,r):e;var o={},a;for(a in e)o[a]=Vu(e[a],s,n,i,r);return o},vA=function(e,n,i,r,s,o){var a,l,c,u;if(nr[e]&&(a=new nr[e]).init(s,a.rawVars?n[e]:eF(n[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Gi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==kl))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ho,t1,ix=function t(e,n,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=e._dur,v=e._startAt,m=e._targets,p=e.parent,_=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Y_,S=e.timeline,E=r.easeReverse||f,C,M,A,U,y,T,I,B,V,K,G,X,F;if(S&&(!d||!s)&&(s="none"),e._ease=Ra(s,Ef.ease),e._rEase=E&&(Ra(E)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(B=m[0]?ba(m[0]).harness:0,X=B&&r[B.prop],C=Mp(r,J_),v&&(v._zTime<0&&v.progress(1),n<0&&u&&a&&!h?v.render(-1,!0):v.revert(u&&g?Lh:bU),v._lazy=0),o){if(Fo(e._startAt=Mn.set(m,pr({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&Vi(l),startAt:null,delay:0,onUpdate:c&&function(){return or(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&($n||!a&&!h)&&e._startAt.revert(Lh),a&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&g&&!v){if(n&&(a=!1),A=pr({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Vi(l),immediateRender:a,stagger:0,parent:p},C),X&&(A[B.prop]=X),Fo(e._startAt=Mn.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,n<0&&($n?e._startAt.revert(Lh):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,zt,zt);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&Vi(l)||l&&!g,M=0;M<m.length;M++){if(y=m[M],I=y._gsap||ex(m)[M]._gsap,e._ptLookup[M]=K={},Kv[I.id]&&Ro.length&&Sp(),G=_===m?M:_.indexOf(y),B&&(V=new B).init(y,X||C,e,G,_)!==!1&&(e._pt=U=new Gi(e._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(Q){K[Q]=U}),V.priority&&(T=1)),!B||X)for(A in C)nr[A]&&(V=vA(A,C,e,G,y,_))?V.priority&&(T=1):K[A]=U=nx.call(e,y,A,"get",C[A],G,_,0,r.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),x&&e._pt&&(ho=e,rn.killTweensOf(y,K,e.globalTime(n)),F=!e.parent,ho=0),e._pt&&l&&(Kv[I.id]=1)}T&&MA(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,d&&n<=0&&S.render(Rr,!0,!0)},tF=function(e,n,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,f,d,h;if(!c)for(c=e._ptCache[n]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return t1=1,e.vars[n]="+=0",ix(e,a),t1=0,l?Tf(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=gn(i)+li(f.e)),f.b&&(f.b=u.s+li(f.b))},nF=function(e,n){var i=e[0]?ba(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return n;s=Sc({},n);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},iF=function(e,n,i,r){var s=n.ease||r||"power1.inOut",o,a;if(fi(n))a=i[e]||(i[e]=[]),n.forEach(function(l,c){return a.push({t:c/(n.length-1)*100,v:l,e:s})});else for(o in n)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},Vu=function(e,n,i,r,s){return dn(e)?e.call(n,i,r,s):Vn(e)&&~e.indexOf("random(")?bf(e):e},Tp=Q_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_A={};Hi(Tp+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return _A[t]=1});Tp=Tp.split(",");var Mn=function(t){z3(e,t);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=t.call(this,o?r:Bu(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,v=l.defaults,m=l.scrollTrigger,p=r.parent||rn,_=(fi(i)||H3(i)?Ws(i[0]):"length"in r)?[i]:Pr(i),x,S,E,C,M,A,U,y;if(a._targets=_.length?ex(_):Tf("GSAP target "+i+" not found. https://gsap.com",!ur.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Yd(c)||Yd(u)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Ii({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:_}),x.kill(),x.parent=x._dp=As(a),x._start=0,d||Yd(c)||Yd(u)){if(C=_.length,U=d&&sA(d),gs(d))for(M in d)~Tp.indexOf(M)&&(y||(y={}),y[M]=d[M]);for(S=0;S<C;S++)E=Mp(r,_A),E.stagger=0,T&&(E.easeReverse=T),y&&Sc(E,y),A=_[S],E.duration=+Vu(c,As(a),S,A,_),E.delay=(+Vu(u,As(a),S,A,_)||0)-a._delay,!d&&C===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(A,E,U?U(S,A,_):0),x._ease=Mt.none;x.duration()?c=u=0:a.timeline=0}else if(g){Bu(pr(x.vars.defaults,{ease:"none"})),x._ease=Ra(g.ease||r.ease||"none");var I=0,B,V,K;if(fi(g))g.forEach(function(G){return x.to(_,G,">")}),x.duration();else{E={};for(M in g)M==="ease"||M==="easeEach"||iF(M,g[M],E,g.easeEach);for(M in E)for(B=E[M].sort(function(G,X){return G.t-X.t}),I=0,S=0;S<B.length;S++)V=B[S],K={ease:V.e,duration:(V.t-(S?B[S-1].t:0))/100*c},K[M]=V.v,x.to(_,K,I),I+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return h===!0&&!Y_&&(ho=As(a),rn.killTweensOf(_),ho=0),os(p,As(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===tn(p._time)&&Vi(f)&&NU(As(a))&&p.data!=="nested")&&(a._tTime=-zt,a.render(Math.max(0,-u)||0)),m&&tA(As(a),m),a}var n=e.prototype;return n.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-zt&&!u?l:r<zt?0:r,d,h,g,v,m,p,_,x;if(!c)UU(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,o);if(d=tn(f%v),f===l?(g=this._repeat,d=c):(m=tn(f/v),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Mc(this._tTime,v),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==v&&this._initted&&(this._lock=o=1,this.render(tn(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(nA(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var E=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(S?-1:1)/E:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=_=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=_=this._ease(d/c);if(this._from&&(this.ratio=_=1-_),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(or(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(_,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zv(this,r,s,o),or(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&or(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Zv(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Fo(this,1),!s&&!(u&&!a)&&(f||a||p)&&(or(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,o,a,l){Cf||rr.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ix(this,c),u=this._ease(c/this._dur),tF(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(fm(this,0),this.parent||Q3(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ho&&ho.vars.overwrite!==!0)._first||mu(this),this.parent&&o!==this.timeline.totalDuration()&&wc(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Pr(r):a,c=this._ptLookup,u=this._pt,f,d,h,g,v,m,p;if((!s||s==="all")&&LU(a,l))return s==="all"&&(this._pt=0),mu(this);for(f=this._op=this._op||[],s!=="all"&&(Vn(s)&&(v={},Hi(s,function(_){return v[_]=1}),s=v),s=nF(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(v in g)m=d&&d[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&cm(this,m,"_pt"),delete d[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&u&&mu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return zu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return zu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return rn.killTweensOf(r,s,o)},e}(Rf);pr(Mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hi("staggerTo,staggerFrom,staggerFromTo",function(t){Mn[t]=function(){var e=new Ii,n=Jv.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var rx=function(e,n,i){return e[n]=i},xA=function(e,n,i){return e[n](i)},rF=function(e,n,i,r){return e[n](r.fp,i)},sF=function(e,n,i){return e.setAttribute(n,i)},sx=function(e,n){return dn(e[n])?xA:$_(e[n])&&e.setAttribute?sF:rx},yA=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},oF=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},SA=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},ox=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},aF=function(e,n,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,n,i),s=o},lF=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?cm(this,n,"_pt"):n.dep||(i=1),n=r;return!i},cF=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},MA=function(e){for(var n=e._pt,i,r,s,o;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:o)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:o=n,n=i}e._pt=s},Gi=function(){function t(n,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||yA,this.d=l||this,this.set=c||rx,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=cF,this.m=i,this.mt=s,this.tween=r},t}();Hi(Q_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return J_[t]=1});hr.TweenMax=hr.TweenLite=Mn;hr.TimelineLite=hr.TimelineMax=Ii;rn=new Ii({sortChildren:!1,defaults:Ef,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ur.stringFilter=pA;var Pa=[],Nh={},uF=[],bS=0,fF=0,D0=function(e){return(Nh[e]||uF).map(function(n){return n()})},Pf=function(){var e=Date.now(),n=[];e-bS>2&&(D0("matchMediaInit"),Pa.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ts.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&n.push(i))}),D0("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),bS=e,D0("matchMedia"))},wA=function(){function t(n,i){this.selector=i&&Qv(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fF++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){dn(i)&&(s=r,r=i,i=dn);var o=this,a=function(){var c=Qt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Qv(s)),Qt=o,f=r.apply(o,arguments),dn(f)&&o._r.push(f),Qt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===dn?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Qt;Qt=null,i(this),Qt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Mn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ii?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Mn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r){for(var o=Pa.length;o--;)Pa[o].id===this.id&&Pa.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Pf):a.removeEventListener("change",Pf)}),this._mqs=null}},e.revert=function(i){this.kill(i||{})},t}(),dF=function(){function t(n){this.contexts=[],this.scope=n,Qt&&Qt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){gs(i)||(i={matches:i});var o=new wA(0,s||this.scope),a=o.conditions={},l,c,u;Qt&&!o.selector&&(o.selector=Qt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ts.matchMedia(i[c]),l&&(Pa.indexOf(o)<0&&Pa.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pf):l.addEventListener("change",Pf),(o._mqs||(o._mqs=[])).push(l)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),Ap={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return fA(r)})},timeline:function(e){return new Ii(e)},getTweensOf:function(e,n){return rn.getTweensOf(e,n)},getProperty:function(e,n,i,r){Vn(e)&&(e=Pr(e)[0]);var s=ba(e||{}).get,o=i?J3:Z3;return i==="native"&&(i=""),e&&(n?o((nr[n]&&nr[n].get||s)(e,n,i,r)):function(a,l,c){return o((nr[a]&&nr[a].get||s)(e,a,l,c))})},quickSetter:function(e,n,i){if(e=Pr(e),e.length>1){var r=e.map(function(u){return ji.quickSetter(u,n,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=nr[n],a=ba(e),l=a.harness&&(a.harness.aliases||{})[n]||n,c=o?function(u){var f=new o;kl._pt=0,f.init(e,i?u+i:u,kl,0,[e]),f.render(1,f),kl._pt&&ox(1,kl)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,n,i){var r,s=ji.to(e,pr((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(n,l,c,u)};return o.tween=s,o},isTweening:function(e){return rn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ra(e.ease,Ef.ease)),MS(Ef,e||{})},config:function(e){return MS(ur,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!nr[a]&&!hr[a]&&Tf(n+" effect requires "+a+" plugin.")}),C0[n]=function(a,l,c){return i(Pr(a),pr(l||{},s),c)},o&&(Ii.prototype[n]=function(a,l,c){return this.add(C0[n](a,gs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Mt[e]=Ra(n)},parseEase:function(e,n){return arguments.length?Ra(e,n):Mt},getById:function(e){return rn.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Ii(e),r,s;for(i.smoothChildTiming=Vi(e.smoothChildTiming),rn.remove(i),i._dp=0,i._time=i._tTime=rn._time,r=rn._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Mn&&r.vars.onComplete===r._targets[0]))&&os(i,r,r._start-r._delay),r=s;return os(rn,i,0),i},context:function(e,n){return e?new wA(e,n):Qt},matchMedia:function(e){return new dF(e)},matchMediaRefresh:function(){return Pa.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||Pf()},addEventListener:function(e,n){var i=Nh[e]||(Nh[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Nh[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:GU,wrapYoyo:WU,distribute:sA,random:aA,snap:oA,normalize:HU,getUnit:li,clamp:kU,splitColor:dA,toArray:Pr,selector:Qv,mapRange:cA,pipe:zU,unitize:VU,interpolate:jU,shuffle:rA},install:X3,effects:C0,ticker:rr,updateRoot:Ii.updateRoot,plugins:nr,globalTimeline:rn,core:{PropTween:Gi,globals:Y3,Tween:Mn,Timeline:Ii,Animation:Rf,getCache:ba,_removeLinkedListItem:cm,reverting:function(){return $n},context:function(e){return e&&Qt&&(Qt.data.push(e),e._ctx=Qt),Qt},suppressOverwrites:function(e){return Y_=e}}};Hi("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ap[t]=Mn[t]});rr.add(Ii.updateRoot);kl=Ap.to({},{duration:0});var hF=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},pF=function(e,n){var i=e._targets,r,s,o;for(r in n)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=hF(o,r)),o&&o.modifier&&o.modifier(n[r],e,i[s],r))},N0=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Vn(s)&&(l={},Hi(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}pF(a,s)}}}},ji=Ap.registerPlugin({name:"attr",init:function(e,n,i,r,s){var o,a,l;this.tween=i;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var i=n._pt;i;)$n?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},N0("roundProps",e1),N0("modifiers"),N0("snap",oA))||Ap;Mn.version=Ii.version=ji.version="3.15.1";j3=1;q_()&&Ec();Mt.Power0;Mt.Power1;Mt.Power2;Mt.Power3;Mt.Power4;Mt.Linear;Mt.Quad;Mt.Cubic;Mt.Quart;Mt.Quint;Mt.Strong;Mt.Elastic;Mt.Back;Mt.SteppedEase;Mt.Bounce;Mt.Sine;Mt.Expo;Mt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var CS,po,nc,ax,Sa,RS,lx,mF=function(){return typeof window<"u"},js={},ca=180/Math.PI,ic=Math.PI/180,gl=Math.atan2,PS=1e8,cx=/([A-Z])/g,gF=/(left|right|width|margin|padding|x)/i,vF=/[\s,\(]\S/,as={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},n1=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},_F=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},xF=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},yF=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},SF=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},EA=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},TA=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},MF=function(e,n,i){return e.style[n]=i},wF=function(e,n,i){return e.style.setProperty(n,i)},EF=function(e,n,i){return e._gsap[n]=i},TF=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},AF=function(e,n,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},bF=function(e,n,i,r,s){var o=e._gsap;o[n]=i,o.renderTransform(s,o)},on="transform",Wi=on+"Origin",CF=function t(e,n){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in js&&s){if(this.tfm=this.tfm||{},e!=="transform")e=as[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Cs(r,a)}):this.tfm[e]=o.x?o[e]:Cs(r,e),e===Wi&&(this.tfm.zOrigin=o.zOrigin);else return as.transform.split(",").forEach(function(a){return t.call(i,a,n)});if(this.props.indexOf(on)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Wi,n,"")),e=on}(s||n)&&this.props.push(e,n,s[e])},AA=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},RF=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cx,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=lx(),(!s||!s.isStart)&&!i[on]&&(AA(i),r.zOrigin&&i[Wi]&&(i[Wi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},bA=function(e,n){var i={target:e,props:[],revert:RF,save:CF};return e._gsap||ji.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},CA,i1=function(e,n){var i=po.createElementNS?po.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):po.createElement(e);return i&&i.style?i:po.createElement(e)},ar=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(cx,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,Tc(n)||n,1)||""},LS="O,Moz,ms,Ms,Webkit".split(","),Tc=function(e,n,i){var r=n||Sa,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(LS[o]+e in s););return o<0?null:(o===3?"ms":o>=0?LS[o]:"")+e},r1=function(){mF()&&window.document&&(CS=window,po=CS.document,nc=po.documentElement,Sa=i1("div")||{style:{}},i1("div"),on=Tc(on),Wi=on+"Origin",Sa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",CA=!!Tc("perspective"),lx=ji.core.reverting,ax=1)},DS=function(e){var n=e.ownerSVGElement,i=i1("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),nc.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),nc.removeChild(i),s},NS=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},RA=function(e){var n,i;try{n=e.getBBox()}catch{n=DS(e),i=1}return n&&(n.width||n.height)||i||(n=DS(e)),n&&!n.width&&!n.x&&!n.y?{x:+NS(e,["x","cx","x1"])||0,y:+NS(e,["y","cy","y1"])||0,width:0,height:0}:n},PA=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&RA(e))},Oo=function(e,n){if(n){var i=e.style,r;n in js&&n!==Wi&&(n=on),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(cx,"-$1").toLowerCase())):i.removeAttribute(n)}},mo=function(e,n,i,r,s,o){var a=new Gi(e._pt,n,i,0,1,o?TA:EA);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},IS={deg:1,rad:1,turn:1},PF={grid:1,flex:1},ko=function t(e,n,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Sa.style,l=gF.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,v,m,p;if(r===o||!s||IS[r]||IS[o])return s;if(o!=="px"&&!d&&(s=t(e,n,i,"px")),p=e.getCTM&&PA(e),(h||o==="%")&&(js[n]||~n.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],gn(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),v=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===po||!v.appendChild)&&(v=po.body),m=v._gsap,m&&h&&m.width&&l&&m.time===rr.time&&!m.uncache)return gn(s/m.width*f);if(h&&(n==="height"||n==="width")){var _=e.style[n];e.style[n]=f+r,g=e[u],_?e.style[n]=_:Oo(e,n)}else(h||o==="%")&&!PF[ar(v,"display")]&&(a.position=ar(e,"position")),v===e&&(a.position="static"),v.appendChild(Sa),g=Sa[u],v.removeChild(Sa),a.position="absolute";return l&&h&&(m=ba(v),m.time=rr.time,m.width=v[u]),gn(d?g*s/f:g&&s?f/g*s:0)},Cs=function(e,n,i,r){var s;return ax||r1(),n in as&&n!=="transform"&&(n=as[n],~n.indexOf(",")&&(n=n.split(",")[0])),js[n]&&n!=="transform"?(s=Df(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Cp(ar(e,Wi))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=bp[n]&&bp[n](e,n,i)||ar(e,n)||q3(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ko(e,n,s,i)+i:s},LF=function(e,n,i,r){if(!i||i==="none"){var s=Tc(n,e,1),o=s&&ar(e,s,1);o&&o!==i?(n=s,i=o):n==="borderColor"&&(i=ar(e,"borderTopColor"))}var a=new Gi(this._pt,e.style,n,0,1,SA),l=0,c=0,u,f,d,h,g,v,m,p,_,x,S,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ar(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[n],e.style[n]=r,r=ar(e,n)||r,v?e.style[n]=v:Oo(e,n)),u=[i,r],pA(u),i=u[0],r=u[1],d=i.match(Ol)||[],E=r.match(Ol)||[],E.length){for(;f=Ol.exec(r);)m=f[0],_=r.substring(l,f.index),g?g=(g+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(g=1),m!==(v=d[c++]||"")&&(h=parseFloat(v)||0,S=v.substr((h+"").length),m.charAt(1)==="="&&(m=tc(h,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=Ol.lastIndex-x.length,x||(x=x||ur.units[n]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=ko(e,n,v,x)||0),a._pt={_next:a._pt,p:_||c===1?_:",",s:h,c:p-h,m:g&&g<4||n==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=n==="display"&&r==="none"?TA:EA;return W3.test(r)&&(a.e=0),this._pt=a,a},US={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DF=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=US[i]||i,n[1]=US[r]||r,n.join(" ")},NF=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],js[a]&&(l=1,a=a==="transformOrigin"?Wi:on),Oo(i,a);l&&(Oo(i,on),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Df(i,1),o.uncache=1,AA(r)))}},bp={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Gi(e._pt,n,i,0,0,NF);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Lf=[1,0,0,1,0,0],LA={},DA=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},FS=function(e){var n=ar(e,on);return DA(n)?Lf:n.substr(7).match(G3).map(gn)},ux=function(e,n){var i=e._gsap||ba(e),r=e.style,s=FS(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lf:s):(s===Lf&&!e.offsetParent&&e!==nc&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,nc.appendChild(e)),s=FS(e),l?r.display=l:Oo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):nc.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},s1=function(e,n,i,r,s,o){var a=e._gsap,l=s||ux(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],v=l[2],m=l[3],p=l[4],_=l[5],x=n.split(" "),S=parseFloat(x[0])||0,E=parseFloat(x[1])||0,C,M,A,U;i?l!==Lf&&(M=h*m-g*v)&&(A=S*(m/M)+E*(-v/M)+(v*_-m*p)/M,U=S*(-g/M)+E*(h/M)-(h*_-g*p)/M,S=A,E=U):(C=RA(e),S=C.x+(~x[0].indexOf("%")?S/100*C.width:S),E=C.y+(~(x[1]||x[0]).indexOf("%")?E/100*C.height:E)),r||r!==!1&&a.smooth?(p=S-c,_=E-u,a.xOffset=f+(p*h+_*v)-p,a.yOffset=d+(p*g+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=E,a.smooth=!!r,a.origin=n,a.originIsAbsolute=!!i,e.style[Wi]="0px 0px",o&&(mo(o,a,"xOrigin",c,S),mo(o,a,"yOrigin",u,E),mo(o,a,"xOffset",f,a.xOffset),mo(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},Df=function(e,n){var i=e._gsap||new gA(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ar(e,Wi)||"0",u,f,d,h,g,v,m,p,_,x,S,E,C,M,A,U,y,T,I,B,V,K,G,X,F,Q,N,de,De,Ze,ie,fe;return u=f=d=v=m=p=_=x=S=0,h=g=1,i.svg=!!(e.getCTM&&PA(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[on]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[on]!=="none"?l[on]:"")),r.scale=r.rotate=r.translate="none"),M=ux(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),c=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",X=""):X=!n&&e.getAttribute("data-svg-origin"),s1(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,M)),E=i.xOrigin||0,C=i.yOrigin||0,M!==Lf&&(T=M[0],I=M[1],B=M[2],V=M[3],u=K=M[4],f=G=M[5],M.length===6?(h=Math.sqrt(T*T+I*I),g=Math.sqrt(V*V+B*B),v=T||I?gl(I,T)*ca:0,_=B||V?gl(B,V)*ca+v:0,_&&(g*=Math.abs(Math.cos(_*ic))),i.svg&&(u-=E-(E*T+C*B),f-=C-(E*I+C*V))):(fe=M[6],Ze=M[7],N=M[8],de=M[9],De=M[10],ie=M[11],u=M[12],f=M[13],d=M[14],A=gl(fe,De),m=A*ca,A&&(U=Math.cos(-A),y=Math.sin(-A),X=K*U+N*y,F=G*U+de*y,Q=fe*U+De*y,N=K*-y+N*U,de=G*-y+de*U,De=fe*-y+De*U,ie=Ze*-y+ie*U,K=X,G=F,fe=Q),A=gl(-B,De),p=A*ca,A&&(U=Math.cos(-A),y=Math.sin(-A),X=T*U-N*y,F=I*U-de*y,Q=B*U-De*y,ie=V*y+ie*U,T=X,I=F,B=Q),A=gl(I,T),v=A*ca,A&&(U=Math.cos(A),y=Math.sin(A),X=T*U+I*y,F=K*U+G*y,I=I*U-T*y,G=G*U-K*y,T=X,K=F),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,p=180-p),h=gn(Math.sqrt(T*T+I*I+B*B)),g=gn(Math.sqrt(G*G+fe*fe)),A=gl(K,G),_=Math.abs(A)>2e-4?A*ca:0,S=ie?1/(ie<0?-ie:ie):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!DA(ar(e,on)),X&&e.setAttribute("transform",X))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(h*=-1,_+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,_+=_<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=gn(h),i.scaleY=gn(g),i.rotation=gn(v)+a,i.rotationX=gn(m)+a,i.rotationY=gn(p)+a,i.skewX=_+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Wi]=Cp(c)),i.xOffset=i.yOffset=0,i.force3D=ur.force3D,i.renderTransform=i.svg?UF:CA?NA:IF,i.uncache=0,i},Cp=function(e){return(e=e.split(" "))[0]+" "+e[1]},I0=function(e,n,i){var r=li(n);return gn(parseFloat(n)+parseFloat(ko(e,"x",i+"px",r)))+r},IF=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,NA(e,n)},na="0deg",tu="0px",ia=") ",NA=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,g=i.scaleX,v=i.scaleY,m=i.transformPerspective,p=i.force3D,_=i.target,x=i.zOrigin,S="",E=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==na||u!==na)){var C=parseFloat(u)*ic,M=Math.sin(C),A=Math.cos(C),U;C=parseFloat(f)*ic,U=Math.cos(C),o=I0(_,o,M*U*-x),a=I0(_,a,-Math.sin(C)*-x),l=I0(_,l,A*U*-x+x)}m!==tu&&(S+="perspective("+m+ia),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(E||o!==tu||a!==tu||l!==tu)&&(S+=l!==tu||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ia),c!==na&&(S+="rotate("+c+ia),u!==na&&(S+="rotateY("+u+ia),f!==na&&(S+="rotateX("+f+ia),(d!==na||h!==na)&&(S+="skew("+d+", "+h+ia),(g!==1||v!==1)&&(S+="scale("+g+", "+v+ia),_.style[on]=S||"translate(0, 0)"},UF=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,g=i.xOrigin,v=i.yOrigin,m=i.xOffset,p=i.yOffset,_=i.forceCSS,x=parseFloat(o),S=parseFloat(a),E,C,M,A,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ic,c*=ic,E=Math.cos(l)*f,C=Math.sin(l)*f,M=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(u*=ic,U=Math.tan(c-u),U=Math.sqrt(1+U*U),M*=U,A*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),E*=U,C*=U)),E=gn(E),C=gn(C),M=gn(M),A=gn(A)):(E=f,A=d,C=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=ko(h,"x",o,"px"),S=ko(h,"y",a,"px")),(g||v||m||p)&&(x=gn(x+g-(g*E+v*M)+m),S=gn(S+v-(g*C+v*A)+p)),(r||s)&&(U=h.getBBox(),x=gn(x+r/100*U.width),S=gn(S+s/100*U.height)),U="matrix("+E+","+C+","+M+","+A+","+x+","+S+")",h.setAttribute("transform",U),_&&(h.style[on]=U)},FF=function(e,n,i,r,s){var o=360,a=Vn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ca:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*PS)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*PS)%o-~~(c/o)*o)),e._pt=d=new Gi(e._pt,n,i,r,c,_F),d.e=u,d.u="deg",e._props.push(i),d},OS=function(e,n){for(var i in n)e[i]=n[i];return e},OF=function(e,n,i){var r=OS({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[on]=n,a=Df(i,1),Oo(i,on),i.setAttribute("transform",c)):(c=getComputedStyle(i)[on],o[on]=n,a=Df(i,1),o[on]=c);for(l in js)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=li(c),g=li(u),f=h!==g?ko(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Gi(e._pt,a,l,f,d-f,n1),e._pt.u=g||0,e._props.push(l));OS(a,r)};Hi("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",o=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(a){return e<2?t+a:"border"+a+t});bp[e>1?"border"+t:t]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return Cs(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,v){return h[g]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,h,f)}});var IA={name:"css",register:r1,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,h,g,v,m,p,_,x,S,E,C,M,A,U;ax||r1(),this.styles=this.styles||bA(e),A=this.styles.props,this.tween=i;for(v in n)if(v!=="autoRound"&&(u=n[v],!(nr[v]&&vA(v,n,i,r,e,s)))){if(h=typeof u,g=bp[v],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=bf(u)),g)g(this,e,v,u,i)&&(M=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Po.lastIndex=0,Po.test(c)||(m=li(c),p=li(u),p?m!==p&&(c=ko(e,v,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,v),o.push(v),A.push(v,0,a[v]);else if(h!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Vn(c)&&~c.indexOf("random(")&&(c=bf(c)),li(c+"")||c==="auto"||(c+=ur.units[v]||li(Cs(e,v))||""),(c+"").charAt(1)==="="&&(c=Cs(e,v))):c=Cs(e,v),d=parseFloat(c),_=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),_&&(u=u.substr(2)),f=parseFloat(u),v in as&&(v==="autoAlpha"&&(d===1&&Cs(e,"visibility")==="hidden"&&f&&(d=0),A.push("visibility",0,a.visibility),mo(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=as[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in js,x){if(this.styles.save(v),U=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=ar(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=ar(e,"perspective"),y?e.style.perspective=y:Oo(e,"perspective")}f=parseFloat(u)}if(S||(E=e._gsap,E.renderTransform&&!n.parseTransform||Df(e,n.parseTransform),C=n.smoothOrigin!==!1&&E.smooth,S=this._pt=new Gi(this._pt,a,on,0,1,E.renderTransform,E,0,-1),S.dep=1),v==="scale")this._pt=new Gi(this._pt,E,"scaleY",E.scaleY,(_?tc(E.scaleY,_+f):f)-E.scaleY||0,n1),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){A.push(Wi,0,a[Wi]),u=DF(u),E.svg?s1(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&mo(this,E,"zOrigin",E.zOrigin,p),mo(this,a,v,Cp(c),Cp(u)));continue}else if(v==="svgOrigin"){s1(e,u,1,C,0,this);continue}else if(v in LA){FF(this,E,v,d,_?tc(d,_+u):u);continue}else if(v==="smoothOrigin"){mo(this,E,"smooth",E.smooth,u);continue}else if(v==="force3D"){E[v]=u;continue}else if(v==="transform"){OF(this,u,e);continue}}else v in a||(v=Tc(v)||v);if(x||(f||f===0)&&(d||d===0)&&!vF.test(u)&&v in a)m=(c+"").substr((d+"").length),f||(f=0),p=li(u)||(v in ur.units?ur.units[v]:m),m!==p&&(d=ko(e,v,c,p)),this._pt=new Gi(this._pt,x?E:a,v,d,(_?tc(d,_+f):f)-d,!x&&(p==="px"||v==="zIndex")&&n.autoRound!==!1?SF:n1),this._pt.u=p||0,x&&U!==u?(this._pt.b=c,this._pt.e=U,this._pt.r=yF):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=xF);else if(v in a)LF.call(this,e,v,c,_?_+u:u);else if(v in e)this.add(e,v,c||e[v],_?_+u:u,r,s);else if(v!=="parseTransform"){Z_(v,u);continue}x||(v in a?A.push(v,0,a[v]):typeof e[v]=="function"?A.push(v,2,e[v]()):A.push(v,1,c||e[v])),o.push(v)}}M&&MA(this)},render:function(e,n){if(n.tween._time||!lx())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Cs,aliases:as,getSetter:function(e,n,i){var r=as[n];return r&&r.indexOf(",")<0&&(n=r),n in js&&n!==Wi&&(e._gsap.x||Cs(e,"x"))?i&&RS===i?n==="scale"?TF:EF:(RS=i||{})&&(n==="scale"?AF:bF):e.style&&!$_(e.style[n])?MF:~n.indexOf("-")?wF:sx(e,n)},core:{_removeProperty:Oo,_getMatrix:ux}};ji.utils.checkPrefix=Tc;ji.core.getStyleSaver=bA;(function(t,e,n,i){var r=Hi(t+","+e+","+n,function(s){js[s]=1});Hi(e,function(s){ur.units[s]="deg",LA[s]=1}),as[r[13]]=t+","+e,Hi(i,function(s){var o=s.split(":");as[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ur.units[t]="px"});ji.registerPlugin(IA);var Gt=ji.registerPlugin(IA)||ji;Gt.core.Tween;const at=14,U0=6,$d=9,F0=1/240,kF=3,BF=11,nu=14,zF=3,iu=120,ru=256,kS=170,In={reach:120,awareness:220,maxStrands:6,snapStretch:1.6,maxLen:160,creep:.25,slither:1,whip:1,magnet:1.6,thickness:1,pull:1,gravity:900},BS={primary:[1,.07,.22,.3],secondary:[.85,.88,1,.1]},ii=(t,e,n)=>t<e?e:t>n?n:t,qd=(t,e,n)=>{const i=ii((n-t)/(e-t),0,1);return i*i*(3-2*i)},Tn=(t,e)=>t+Math.random()*(e-t);function O0(t,e,n,i,r,s,o){t[n]+=(r*r*(i-t[e])-2*s*r*t[n])*o,t[e]+=t[n]*o}function VF(t,e,n){const i=!!n.reducedMotion,r=n.labelSize||16,s=n.halfHeight||30,o=n.sidePad||30;let a=n.variant||"primary",l=!1;const c=document.createElement("canvas");c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",left:"0",top:"0",transform:"translate(-50%, -50%)",pointerEvents:"none",display:"block"});const u=c.getContext("webgl2",{antialias:!1,alpha:!0,premultipliedAlpha:!0,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!u)return null;t.appendChild(c);const f=!!(u.getExtension("EXT_color_buffer_float")||u.getExtension("EXT_color_buffer_half_float"));let d=u.getParameter(u.MAX_FRAGMENT_UNIFORM_VECTORS)<900?6:18;const h=[],g=[],v={x:-1e4,y:-1e4,cx:-1e4,cy:-1e4,present:!1,down:!1,mouse:!1},m={cx:0,cy:0,hw:150,hh:s,lbw:72,lbh:18,top:14,sink:5,dome:1.2,lift:0,liftV:0,press:0,pressV:0,pressTarget:0,intro:i?1:0,introV:0};let p=25,_=i?3:0,x=-1,S=-1,E=-1,C=2.6,M=0,A=0,U=0,y=0,T=1024,I=1,B=1,V=1,K=1,G=1,X=1;const F=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Q=`#version 300 es
precision highp float;
precision highp int;
#define MAXS ${d}
#define NP ${at}
#define MAXR ${U0}
#define MAXBR ${$d}
#define K0 2.5
#define K1 6.0
${f?"":"#define ENC8 1"}

uniform vec2 uRes;
uniform float uDpr;
uniform vec4 uBtn;     // cx, cy, half width, half height
uniform vec4 uBtnZ;    // top, sink, dome
uniform vec4 uBtnZ2;   // lift off the floor, bevel radius
uniform int uNS;
uniform vec4 uPts[MAXS * NP];
uniform vec4 uBox[MAXS];
uniform vec4 uAnc[MAXS];
uniform vec4 uAncD[MAXS];
uniform int uNBr;
uniform vec4 uBr[MAXBR * 3];
uniform vec4 uRip[MAXR];
uniform float uZTop;

out vec4 outG;

uint gMask[MAXS];
bool gBr[MAXBR];

float smin(float a, float b, float k) { float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }

vec2 button2D(vec2 p) {
  vec2 q = p - uBtn.xy;
  float d = length(vec2(max(abs(q.x) - (uBtn.z - uBtn.w), 0.0), q.y)) - uBtn.w;
  if (d > 110.0) return vec2(d, 0.0);
  float inner = clamp(-d / uBtn.w, 0.0, 1.0);
  float disp = uBtnZ.z * (1.0 - (1.0 - inner) * (1.0 - inner));
  float body = smoothstep(1.0, -14.0, d);
  float lift = 0.0;
  for (int i = 0; i < MAXS; i++) {
    if (i >= uNS) break;
    vec4 an = uAnc[i];
    if (an.z <= 0.0) continue;
    vec4 ad = uAncD[i];
    vec2 dp = p - an.xy;
    float al = dot(dp, ad.xy), ac = dp.x * ad.y - dp.y * ad.x;
    float sl = an.w * (1.0 + ad.z), a0 = an.w * ad.z * 0.7;
    lift += an.z * exp(-ac * ac / (2.0 * an.w * an.w) - (al - a0) * (al - a0) / (2.0 * sl * sl));
  }
  for (int i = 0; i < MAXR; i++) {
    vec4 r = uRip[i];
    if (r.w <= 0.0) continue;
    float sg = 12.0 + r.z * 40.0, rd = length(p - r.xy);
    lift += r.w * 0.6 * exp(-rd * rd / (2.0 * sg * sg)) * exp(-r.z * 5.0);
  }
  disp += lift * body;
  return vec2(d, disp);
}

float sdButton(vec2 bd, float z) {
  float hh = 0.5 * (uBtnZ.x + uBtnZ.y), zc = 0.5 * (uBtnZ.x - uBtnZ.y) + uBtnZ2.x;
  float re = min(uBtnZ2.y, hh);
  vec2 w = vec2(bd.x + re, abs(z - zc) - hh + re);
  return min(max(w.x, w.y), 0.0) + length(max(w, 0.0)) - re - bd.y;
}
float sdSeg(vec3 p, vec4 a, vec4 b) {
  vec3 pa = p - a.xyz, ba = b.xyz - a.xyz;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
  return length(pa - ba * h) - mix(a.w, b.w, h);
}

float map(vec3 p, vec2 bd, out float dB, out float dS) {
  dB = sdButton(bd, p.z);
  float ds = 1e5;
  for (int s = 0; s < MAXS; s++) {
    if (s >= uNS) break;
    uint m = gMask[s];
    if (m == 0u) continue;
    float dd = 1e5;
    for (int j = 0; j < NP - 1; j++) {
      if ((m & (1u << uint(j))) == 0u) continue;
      dd = min(dd, sdSeg(p, uPts[s * NP + j], uPts[s * NP + j + 1]));
    }
    ds = smin(ds, dd, K0);
  }
  for (int b = 0; b < MAXBR; b++) {
    if (b >= uNBr) break;
    if (!gBr[b]) continue;
    vec4 a = uBr[b * 3], m = uBr[b * 3 + 1], c = uBr[b * 3 + 2];
    ds = smin(ds, min(sdSeg(p, a, m), sdSeg(p, m, c)), K0 * 0.6);
  }
  dS = ds;
  return smin(dB, ds, K1);
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;

  for (int s = 0; s < MAXS; s++) {
    gMask[s] = 0u;
    if (s >= uNS) continue;
    vec4 bb = uBox[s];
    if (p.x < bb.x || p.y < bb.y || p.x > bb.z || p.y > bb.w) continue;
    uint m = 0u;
    for (int j = 0; j < NP - 1; j++) {
      vec4 a = uPts[s * NP + j], b = uPts[s * NP + j + 1];
      vec2 pa = p - a.xy, ba = b.xy - a.xy;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
      if (length(pa - ba * h) - max(a.w, b.w) < K1 + 2.0) m |= (1u << uint(j));
    }
    gMask[s] = m;
  }
  for (int b = 0; b < MAXBR; b++) {
    gBr[b] = false;
    if (b >= uNBr) continue;
    vec2 lo = min(min(uBr[b * 3].xy, uBr[b * 3 + 1].xy), uBr[b * 3 + 2].xy) - K0 - 3.0;
    vec2 hi = max(max(uBr[b * 3].xy, uBr[b * 3 + 1].xy), uBr[b * 3 + 2].xy) + K0 + 3.0;
    gBr[b] = all(greaterThan(p, lo)) && all(lessThan(p, hi));
  }

  vec2 bd = button2D(p);
  float z = uZTop, minD = 1e5, dB, dS;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    float d = map(vec3(p, z), bd, dB, dS);
    minD = min(minD, d);
    if (d < 0.02) { hit = true; break; }
    z -= max(d * 0.8, 0.01);
    if (z < 0.0) break;
  }
  if (!hit) {
#ifdef ENC8
    outG = vec4(clamp(minD / 4.0, 0.0, 1.0), 0.0, 0.0, 0.0);
#else
    outG = vec4(minD, 0.0, 0.0, 0.0);
#endif
    return;
  }

  vec3 pos = vec3(p, z);
  const vec2 k = vec2(1.0, -1.0);
  const float e = 0.3;
  float t0, t1;
  vec3 n = k.xyy * map(pos + k.xyy * e, button2D(pos.xy + k.xy * e), t0, t1)
         + k.yyx * map(pos + k.yyx * e, button2D(pos.xy + k.yy * e), t0, t1)
         + k.yxy * map(pos + k.yxy * e, button2D(pos.xy + k.yx * e), t0, t1)
         + k.xxx * map(pos + k.xxx * e, button2D(pos.xy + k.xx * e), t0, t1);
  n = normalize(n);
  float mat = 1.0 + smoothstep(-1.5, 1.5, dB - dS);
#ifdef ENC8
  outG = vec4(n.xy * 0.5 + 0.5, z / 128.0, mat * 0.25);
#else
  outG = vec4(n.xy, z, mat);
#endif
}`,N=`#version 300 es
precision highp float;
${f?"":"#define ENC8 1"}
uniform sampler2D uG;
uniform sampler2D uLabel;
uniform vec2 uRes;
uniform float uDpr;
uniform float uTime;
uniform vec4 uLabelBox;
uniform vec2 uLabelTx;
uniform float uLabelAmt;
uniform float uLabelLod;
uniform float uZMax;
uniform float uLift;
uniform vec4 uBtnP;
uniform vec2 uWin;
uniform vec4 uGlow;
out vec4 outC;

vec3 KEY;

vec4 dec(vec4 g) {
#ifdef ENC8
  if (g.a < 0.1) return vec4(g.r * 4.0, 0.0, 0.0, 0.0);
  return vec4(g.rg * 2.0 - 1.0, g.b * 128.0, g.a * 4.0);
#else
  return g;
#endif
}
float decH(vec4 g) {
#ifdef ENC8
  return g.b * 128.0;
#else
  return g.b;
#endif
}
vec2 uvOf(vec2 p) { return vec2(p.x * uDpr / uRes.x, 1.0 - p.y * uDpr / uRes.y); }
vec4 gAt(ivec2 c) { return dec(texelFetch(uG, clamp(c, ivec2(0), ivec2(uRes) - 1), 0)); }
float hAt(vec2 p, float lod) { return decH(textureLod(uG, uvOf(p), lod)); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

float softShadow(vec2 p, float h0) {
  vec2 L2 = normalize(KEY.xy);
  float tanE = KEY.z / length(KEY.xy);
  float res = 1.0, s = 1.0;
  for (int i = 0; i < 28; i++) {
    float zr = h0 + s * tanE;
    if (zr > uZMax) break;
    float hgt = hAt(p + L2 * s, log2(1.0 + s * 0.08 * uDpr));
    res = min(res, (1.5 - 0.7 * uLift) * (zr - hgt) / s);
    if (res < -0.2) break;
    s += 0.8 + s * 0.14;
  }
  res = clamp(res, 0.0, 1.0);
  return res * res * (3.0 - 2.0 * res);
}
float occlusion(vec2 p, float h) {
  vec2 uv = uvOf(p);
  float o = 0.0;
  o += 0.50 * clamp((decH(textureLod(uG, uv, log2(6.0 * uDpr))) - h) / 9.0, 0.0, 1.0);
  o += 0.32 * clamp((decH(textureLod(uG, uv, log2(20.0 * uDpr))) - h) / 26.0, 0.0, 1.0);
  o += 0.26 * clamp((decH(textureLod(uG, uv, log2(60.0 * uDpr))) - h) / 60.0, 0.0, 1.0);
  return clamp(1.0 - o, 0.0, 1.0);
}

float softbox(vec3 R, vec3 c, vec2 size, float edge) {
  float cd = dot(R, c);
  if (cd <= 0.0) return 0.0;
  vec3 t1 = normalize(cross(c, vec3(0.0, 0.0, 1.0)));
  vec3 t2 = cross(t1, c);
  vec2 q = abs(vec2(dot(R, t1), dot(R, t2)) / cd) / size;
  return (1.0 - smoothstep(edge, 1.0, q.x)) * (1.0 - smoothstep(edge, 1.0, q.y)) * (0.85 + 0.15 * (1.0 - q.y));
}
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
vec3 room(vec3 R) {
  vec3 c = normalize(vec3(-0.34, -0.42, 0.84));
  float cd = dot(R, c);
  if (cd <= 0.2) return vec3(0.0);
  vec3 t1 = normalize(cross(c, vec3(0.0, 0.0, 1.0)));
  vec3 t2 = cross(t1, c);
  vec2 w = vec2(dot(R, t1), dot(R, t2)) / cd / vec2(0.34, 0.28);
  float wallMask = 1.0 - smoothstep(1.3, 2.3, length(w * vec2(0.8, 1.0)));
  vec3 col = vec3(0.92, 0.78, 0.6) * 0.3 * wallMask;
  float shelf = smoothstep(-2.3, -2.2, w.y) * (1.0 - smoothstep(-1.35, -1.25, w.y));
  col = mix(col, vec3(0.3, 0.18, 0.1) * 0.5, shelf * wallMask);
  vec2 lp = w - vec2(1.75, -0.55);
  col += vec3(1.0, 0.7, 0.4) * 5.0 * exp(-dot(lp, lp) / 0.05);
  vec2 aw = abs(w);
  float glass = (1.0 - smoothstep(0.94, 1.0, aw.x)) * (1.0 - smoothstep(0.94, 1.0, aw.y));
  if (glass > 0.0) {
    float v = w.y * 0.5 + 0.5;
    vec3 sky = mix(vec3(1.0, 0.92, 0.8), vec3(0.6, 0.76, 1.0), smoothstep(0.2, 1.0, v)) * 16.0;
    float line = 0.3 + 0.16 * vn(vec2(w.x * 4.0, 3.1)) + 0.07 * vn(vec2(w.x * 11.0, 7.3));
    float tree = 1.0 - smoothstep(line - 0.03, line + 0.03, v);
    vec3 green = mix(vec3(0.16, 0.3, 0.12), vec3(0.32, 0.45, 0.2), vn(w * 9.0)) * 3.0;
    vec3 view = mix(sky, green, tree);
    float mull = max(1.0 - smoothstep(0.025, 0.05, aw.x), 1.0 - smoothstep(0.025, 0.05, abs(w.y - 0.1)));
    view = mix(view, vec3(0.85, 0.8, 0.72) * 0.6, mull);
    col = mix(col, view, glass);
  }
  return col;
}

vec3 env(vec3 R) {
  vec2 rd = normalize(R.xy + vec2(1e-5));
  float keySide = 0.5 + 0.5 * dot(rd, normalize(KEY.xy));
  if (R.z < 0.0) return mix(vec3(0.14) * keySide, vec3(0.0015), smoothstep(0.0, -0.22, R.z));
  vec3 c = vec3(0.0015);
  c += room(R);
  c += vec3(1.0) * 7.0 * softbox(R, normalize(vec3(-0.96, 0.08, 0.2)), vec2(0.75, 0.035), 0.7);
  c += vec3(1.0) * 5.0 * softbox(R, normalize(vec3(0.95, -0.12, 0.24)), vec2(0.75, 0.035), 0.7);
  c += vec3(1.0) * 5.0 * softbox(R, normalize(vec3(0.45, 0.55, 0.75)), vec2(0.07, 0.07), 0.5);
  c += vec3(0.1) * softbox(R, normalize(vec3(0.12, 0.25, 1.0)), vec2(0.8, 0.55), 0.2);
  float wall = 1.0 - smoothstep(0.0, 0.1, R.z);
  c += vec3(0.28) * wall * wall * keySide * keySide * keySide;
  return c;
}

vec3 shadeLabel(vec2 lu, float sh, float ao) {
  vec2 tx = uLabelTx;
  float mx = textureLod(uLabel, lu + vec2(tx.x, 0.0), uLabelLod).a - textureLod(uLabel, lu - vec2(tx.x, 0.0), uLabelLod).a;
  float my = textureLod(uLabel, lu + vec2(0.0, tx.y), uLabelLod).a - textureLod(uLabel, lu - vec2(0.0, tx.y), uLabelLod).a;
  vec3 N = normalize(vec3(-mx * 1.1, -my * 1.1, 1.0));
  vec3 R = reflect(vec3(0.0, 0.0, -1.0), N);
  vec3 silver = vec3(0.9, 0.91, 0.94);
  float t = clamp((lu.y - 0.32) / 0.36, 0.0, 1.0);
  float grad = t < 0.48 ? mix(1.12, 0.74, smoothstep(0.0, 0.48, t))
                        : mix(0.6, 0.95, smoothstep(0.5, 1.0, t));
  vec3 col = silver * grad * (0.82 + 0.18 * sh);
  col += env(R) * silver * 0.3;
  float edge = clamp(length(vec2(mx, my)) * 1.6, 0.0, 1.0);
  float facing = dot(normalize(vec2(mx, my) + 1e-5), normalize(KEY.xy));
  col *= 1.0 - 0.25 * edge * smoothstep(0.0, 0.8, -facing);
  col += vec3(1.0) * 0.55 * edge * smoothstep(0.1, 0.9, facing);
  vec3 Hh = normalize(KEY + vec3(0.0, 0.0, 1.0));
  float NdH = max(dot(N, Hh), 0.0), a2 = 0.01;
  col += vec3(1.0) * a2 / (3.14159 * pow(NdH * NdH * (a2 - 1.0) + 1.0, 2.0)) * 0.05 * sh;
  return col * mix(0.85, 1.0, ao);
}

vec3 faceWindow(vec2 b) {
  vec2 w = vec2((b.x - uWin.x + b.y * 0.08) / uWin.y, (b.y + 0.3) / 1.15);
  float fade = 1.0 - smoothstep(0.2, 1.05, length(w * vec2(0.85, 0.8)));
  if (fade <= 0.0) return vec3(0.0);
  float v = 0.5 - 0.5 * w.y;
  vec3 sky = mix(vec3(0.95, 0.88, 0.8), vec3(0.66, 0.78, 0.96), smoothstep(0.2, 1.0, v));
  float line = 0.36 + 0.1 * vn(vec2(w.x * 1.6, 2.0));
  float tree = 1.0 - smoothstep(line - 0.2, line + 0.2, v);
  vec3 view = mix(sky, vec3(0.24, 0.36, 0.18) * 0.65, tree * 0.85);
  float sash = 1.0 - smoothstep(0.04, 0.26, abs(w.y + 0.1));
  float stile = 1.0 - smoothstep(0.05, 0.3, abs(w.x));
  view *= 1.0 - 0.5 * max(sash, stile * 0.6);
  return view * 0.14 * fade;
}

vec3 shadeGoo(vec2 p, vec4 g) {
  vec3 N = vec3(g.xy, sqrt(max(1e-4, 1.0 - dot(g.xy, g.xy))));
  float strandness = clamp(g.w - 1.0, 0.0, 1.0);
  vec3 V = vec3(0.0, 0.0, 1.0);
  float NdV = clamp(N.z, 0.03, 1.0);
  vec3 R = reflect(-V, N);
  float F = 0.04 + 0.96 * pow(1.0 - NdV, 5.0);
  float sh = softShadow(p, g.z + 0.6);
  float ao = occlusion(p, g.z);

  vec3 dN = vec3(N.xy, 0.0) * 0.07 + vec3(0.012, 0.008, 0.0);
  vec3 spec = vec3(env(normalize(R + dN)).r, env(R).g, env(normalize(R - dN)).b) * F * mix(0.5, 1.0, min(sh, ao));
  vec3 Hh = normalize(KEY + V);
  float NdH = max(dot(N, Hh), 0.0), a2 = 0.0025;
  float D = a2 / (3.14159 * pow(NdH * NdH * (a2 - 1.0) + 1.0, 2.0));
  spec += vec3(0.9, 0.95, 1.0) * D * F * 0.55 * sh;

  float matte = (1.0 - strandness) * 0.92;
  float ar2 = 0.16;
  float Dr = ar2 / (3.14159 * pow(NdH * NdH * (ar2 - 1.0) + 1.0, 2.0));
  vec3 cRoom = normalize(vec3(-0.34, -0.42, 0.84));
  vec3 rough = vec3(1.0) * Dr * F * 0.06 * sh
             + vec3(0.95, 0.9, 0.84) * pow(max(dot(R, cRoom), 0.0), 10.0) * F * 0.9;
  spec = mix(spec, rough, matte);

  vec3 diff = vec3(0.0007) * (1.8 * max(dot(N, KEY), 0.0) * sh + 0.9 * ao);
  vec3 col = diff + spec;

  vec2 bq = (p - uBtnP.xy) / uBtnP.zw + N.xy * 1.6;
  vec2 dsp = normalize(bq - vec2(uWin.x, -0.3) + 1e-4) * 0.02;
  vec3 win = vec3(faceWindow(bq + dsp).r, faceWindow(bq).g, faceWindow(bq - dsp).b);
  col += win * matte * mix(0.6, 1.0, ao);

  float bevel = 1.0 - smoothstep(0.3, 0.86, N.z);
  vec2 nd = normalize(N.xy + 1e-5);
  float rimL = pow(max(dot(nd, vec2(-0.6, -0.8)), 0.0), 2.0);
  float rimR = pow(max(dot(nd, vec2(0.8, 0.6)), 0.0), 3.0) * 0.55;
  vec2 cq = (p - uBtnP.xy) / uBtnP.zw;
  float glint = pow(0.5 + 0.5 * cos(atan(cq.y, cq.x) - uTime * 0.9), 28.0);
  vec3 rimC = vec3(0.82, 0.9, 1.0) * rimL + vec3(1.0, 0.94, 0.86) * rimR + vec3(1.0) * glint * 1.4;
  col += rimC * bevel * 0.5 * (1.0 - strandness) * mix(0.7, 1.0, sh);

  if (uLabelAmt > 0.0) {
    vec2 lu = (p - uLabelBox.xy) / (2.0 * uLabelBox.zw) + 0.5;
    if (lu.x > 0.0 && lu.y > 0.0 && lu.x < 1.0 && lu.y < 1.0) {
      float m = textureLod(uLabel, lu, uLabelLod).a * (1.0 - smoothstep(0.15, 0.5, strandness)) * uLabelAmt;
      if (m > 0.002) col = mix(col, shadeLabel(lu, sh, ao), m);
    }
  }
  return col;
}

float sdPill(vec2 q, vec2 b) { return length(vec2(max(abs(q.x) - (b.x - b.y), 0.0), q.y)) - b.y; }
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }

void main() {
  KEY = normalize(vec3(-0.45, -0.56, 0.74));
  ivec2 c = ivec2(gl_FragCoord.xy);
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  vec4 g = gAt(c);
  vec3 col = vec3(0.0);
  float a = 0.0;
  if (g.w < 0.5) {
    float cov = clamp(0.5 - g.x * uDpr, 0.0, 1.0);
    if (cov > 0.0) {
      vec4 n0 = gAt(c + ivec2(1, 0)), n1 = gAt(c - ivec2(1, 0)), n2 = gAt(c + ivec2(0, 1)), n3 = gAt(c - ivec2(0, 1));
      vec4 gn = n0.w > 0.5 ? n0 : n1.w > 0.5 ? n1 : n2.w > 0.5 ? n2 : n3.w > 0.5 ? n3 : vec4(0.0);
      col = gn.w > 0.5 ? shadeGoo(p, gn) : vec3(0.012);
      a = cov;
    }
  } else {
    col = shadeGoo(p, g);
    a = 1.0;
  }
  col = pow(aces(col * 0.95), vec3(1.0 / 2.2));
  col += (hash12(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5) / 255.0;
  // soft coloured glow around the pill, composited under the goo (premultiplied alpha)
  float gd = max(sdPill(p - uBtnP.xy, uBtnP.zw), 0.0);
  float ga = uGlow.a * (exp(-gd / 14.0) * 0.7 + exp(-gd / 46.0) * 0.3);
  vec3 outRgb = col * a + uGlow.rgb * ga * (1.0 - a);
  float outA = a + ga * (1.0 - a);
  outC = vec4(outRgb, outA);
}`,de=`#version 300 es
precision highp float;
uniform sampler2D uC;
uniform vec2 uRes;
out vec4 outC;
float luma(vec4 c) { return dot(c.rgb, vec3(0.299, 0.587, 0.114)) + c.a * 0.5; }
void main() {
  vec2 px = 1.0 / uRes, uv = gl_FragCoord.xy * px;
  vec4 cM = texture(uC, uv);
  float lNW = luma(texture(uC, uv + vec2(-1.0, -1.0) * px)), lNE = luma(texture(uC, uv + vec2(1.0, -1.0) * px));
  float lSW = luma(texture(uC, uv + vec2(-1.0, 1.0) * px)), lSE = luma(texture(uC, uv + vec2(1.0, 1.0) * px));
  float lM = luma(cM);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE))), lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.03, lMax * 0.08)) { outC = cM; return; }
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
  float reduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
  dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + reduce), -8.0, 8.0) * px;
  vec4 A = 0.5 * (texture(uC, uv - dir / 6.0) + texture(uC, uv + dir / 6.0));
  vec4 B = A * 0.5 + 0.25 * (texture(uC, uv - dir * 0.5) + texture(uC, uv + dir * 0.5));
  float lB = luma(B);
  outC = (lB < lMin || lB > lMax) ? A : B;
}`;function De(w,O){const Y=u.createShader(w);if(u.shaderSource(Y,O.trim()),u.compileShader(Y),!u.getShaderParameter(Y,u.COMPILE_STATUS))throw new Error("venom shader: "+u.getShaderInfoLog(Y));return Y}function Ze(w,O){const Y=u.createProgram();if(u.attachShader(Y,De(u.VERTEX_SHADER,F)),u.attachShader(Y,De(u.FRAGMENT_SHADER,w)),u.linkProgram(Y),!u.getProgramParameter(Y,u.LINK_STATUS))throw new Error(u.getProgramInfoLog(Y));const J={};for(const te of O)J[te]=u.getUniformLocation(Y,te);return{prog:Y,u:J}}let ie,fe,Te;try{ie=Ze(Q,["uRes","uDpr","uBtn","uBtnZ","uBtnZ2","uNS","uPts","uBox","uAnc","uAncD","uNBr","uBr","uRip","uZTop"]),fe=Ze(N,["uG","uLabel","uRes","uDpr","uTime","uLabelBox","uLabelTx","uLabelAmt","uLabelLod","uZMax","uLift","uBtnP","uWin","uGlow"]),Te=Ze(de,["uC","uRes"])}catch(w){return console.warn(w),t.removeChild(c),null}const pe=u.createVertexArray();let Oe=null,Be=null;const qe=u.createFramebuffer(),We=u.createFramebuffer();function ue(){Oe&&u.deleteTexture(Oe),Oe=u.createTexture(),u.bindTexture(u.TEXTURE_2D,Oe);const w=Math.floor(Math.log2(Math.max(I,B)))+1;u.texStorage2D(u.TEXTURE_2D,w,f?u.RGBA16F:u.RGBA8,I,B),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR_MIPMAP_LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.bindFramebuffer(u.FRAMEBUFFER,qe),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,Oe,0),Be&&u.deleteTexture(Be),Be=u.createTexture(),u.bindTexture(u.TEXTURE_2D,Be),u.texStorage2D(u.TEXTURE_2D,1,u.RGBA8,I,B),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.bindFramebuffer(u.FRAMEBUFFER,We),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,Be,0),u.bindFramebuffer(u.FRAMEBUFFER,null)}const L=document.createElement("canvas"),Se=L.getContext("2d"),Me=u.createTexture();u.bindTexture(u.TEXTURE_2D,Me),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,1,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(4)),L.width=T,L.height=ru;let ye="";function k(){const w=`700 ${iu}px "Geist", system-ui, sans-serif`;Se.font=w;const O=Se.measureText(ye),Y=O.actualBoundingBoxLeft+O.actualBoundingBoxRight;T=ii(Math.ceil((Y+80)/16)*16,512,4096),L.width=T,L.height=ru,Se.font=w,Se.fillStyle="white",Se.textAlign="center",Se.textBaseline="alphabetic";const J=Se.measureText(ye);Se.fillText(ye,T/2,ru/2+(J.actualBoundingBoxAscent-J.actualBoundingBoxDescent)/2),y=Y,u.bindTexture(u.TEXTURE_2D,Me),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,L),u.generateMipmap(u.TEXTURE_2D),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR_MIPMAP_LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),le()}async function Fe(w){ye=w,y=0,le();try{await Promise.race([document.fonts.load(`700 ${iu}px "Geist"`,w),new Promise(O=>setTimeout(O,1500))])}catch{}l||(k(),A=0,U=1,document.fonts.ready.then(()=>{l||k()}))}function Pe(){const w=m.intro,O=m.press;return{cx:m.cx,cy:m.cy,hw:m.hh*.5+(m.hw-m.hh*.5)*w+2.5*O,hh:m.hh*(.55+.45*w)+1*O,top:Math.max(1,m.top*w*(1-.3*O))}}function D(w,O,Y,J=0){const te=Y.hw-Y.hh,xe=ii(w-Y.cx,-te,te);let ne=w-Y.cx-xe,we=O-Y.cy,be=Math.hypot(ne,we);be<.001?(ne=0,we=-1,be=.001):(ne/=be,we/=be);const et=Y.hh-J;return{x:Y.cx+xe+ne*et,y:Y.cy+we*et,nx:ne,ny:we,d:be-Y.hh}}function b(w,O,Y,J){const te=D(w,O,J);return D(te.x-te.ny*Y-te.nx*4,te.y+te.nx*Y-te.ny*4,J,10)}function q(w,O,Y){i||(g.push({x:w,y:O,age:0,amp:Y}),g.length>U0&&g.shift())}function le(){var Y;const w=r/iu,O=Math.max(60,ye.length*.62*iu);m.hh=s,m.hw=(y||O)*w/2+o,m.lbw=T*w/2,m.lbh=ru*w/2,K=2*Math.ceil(m.hw+kS),G=2*Math.ceil(m.hh+kS),m.cx=K/2,m.cy=G/2,c.style.width=K+"px",c.style.height=G+"px",he(),(Y=n.onLayout)==null||Y.call(n,m.hw*2,m.hh*2)}function he(){const w=Math.min(window.devicePixelRatio||1,1.5)*X,O=Math.max(1,Math.round(K*w)),Y=Math.max(1,Math.round(G*w));V=O/K,!(O===I&&Y===B&&Oe)&&(I=O,B=Y,c.width=I,c.height=B,ue())}function se(w,O,Y,J){const te={kind:w,state:"grow",pin:"anchor",lx:(Y-O.cx)/O.hw,ly:(J-O.cy)/O.hh,pos:new Float32Array(at*3),prev:new Float32Array(at*3),rad:new Float32Array(at).fill(2),u:0,ud:0,uKick:!0,rest:1,vol:0,stretch:1,pinch:0,len:0,neckS:Tn(.42,.62),side:Math.random()<.5?-1:1,wig:Tn(.5,1.2),phase:Tn(0,100),snapMul:Tn(.85,1.15),lenMul:Tn(.88,1.12),lat:0,life:0,ttl:0,probe:null,mound:0,dead:!1,retract:0,elong:0,dirX:0,dirY:-1},xe=Math.max(2,O.top-4)+m.lift*nu,ne=D(Y,J,O);for(let we=0;we<at;we++){const be=we*3;te.pos[be]=te.prev[be]=Y+ne.nx*we*.4,te.pos[be+1]=te.prev[be+1]=J+ne.ny*we*.4,te.pos[be+2]=te.prev[be+2]=xe}return te}function ge(w){if(h.length>=d-1)return;const O=h.filter(xe=>xe.kind==="reach"&&xe.pin==="anchor"&&xe.state!=="recoil").length,Y=[0,30,-30,58,-58,82,-82][O%7]+Tn(-6,6),J=b(v.x,v.y,Y,w),te=se("reach",w,J.x,J.y);te.lat=Y,te.vol=Math.PI*1.25*1.25*170,h.push(te)}function ce(w){if(h.length>=d-6)return;const O=Tn(-1,1)*75,Y=b(v.x,v.y,O,w),J=se("micro",w,Y.x,Y.y);J.lat=O,J.probe={len:Tn(.5,1.2),z:Tn(1,5),ph:Tn(0,6.28)},J.ttl=Tn(.7,1.9),J.vol=Math.PI*.55*.55*40,h.push(J)}function Ee(w,O){const Y=O.hw-O.hh,J=2*Y,te=Math.PI*O.hh,xe=2*J+2*te;let ne=(w%1+1)%1*xe;if(ne<J)return D(O.cx-Y+ne,O.cy-O.hh-1,O);if(ne-=J,ne<te){const be=-Math.PI/2+ne/O.hh;return D(O.cx+Y+Math.cos(be)*O.hh*2,O.cy+Math.sin(be)*O.hh*2,O)}if(ne-=te,ne<J)return D(O.cx+Y-ne,O.cy+O.hh+1,O);ne-=J;const we=Math.PI/2+ne/O.hh;return D(O.cx-Y+Math.cos(we)*O.hh*2,O.cy+Math.sin(we)*O.hh*2,O)}let He=Math.random();function me(w){const O=Math.random()<.5?-1:1,Y=Math.random()<.5?2:3,J=He+Tn(.25,.75);He=J;const te=Ee(J,w);for(let xe=0;xe<Y&&h.length<d-2;xe++){const ne=(xe-(Y-1)/2)*13+Tn(-3,3),we=D(te.x-te.ny*ne,te.y+te.nx*ne,w,8),be=se("probe",w,we.x,we.y);be.probe={nx:we.nx,ny:we.ny,dist:Tn(11,20),z:Tn(2,6),dir:O,delay:xe*.07},be.ttl=Tn(.8,1),be.vol=Math.PI*.8*.8*40,h.push(be)}}const Re=new Float32Array(at),ze=new Float32Array(at*3),Ke=new Float32Array(at*3);function Ne(w,O){const Y=w.pos,J=w.prev;Re[0]=0;for(let xe=1;xe<at;xe++){const ne=(xe-1)*3,we=xe*3;Re[xe]=Re[xe-1]+Math.hypot(Y[we]-Y[ne],Y[we+1]-Y[ne+1],Y[we+2]-Y[ne+2])}if(Re[at-1]<.001||O>=Re[at-1])return;let te=0;for(let xe=0;xe<at;xe++){const ne=O*xe/(at-1);for(;te<at-2&&Re[te+1]<ne;)te++;const we=ii((ne-Re[te])/Math.max(Re[te+1]-Re[te],1e-6),0,1);for(let be=0;be<3;be++)ze[xe*3+be]=Y[te*3+be]*(1-we)+Y[(te+1)*3+be]*we,Ke[xe*3+be]=J[te*3+be]*(1-we)+J[(te+1)*3+be]*we}Y.set(ze),J.set(Ke)}function ae(w,O,Y){const J=new Float32Array(at*3);for(let te=0;te<at;te++){const xe=O+(Y-O)*te/(at-1),ne=ii(Math.floor(xe),0,at-2),we=xe-ne;for(let be=0;be<3;be++)J[te*3+be]=w[ne*3+be]*(1-we)+w[(ne+1)*3+be]*we}return J}function Le(w,O){const Y=w.neckS*(at-1),J={...w,kind:"piece",state:"recoil",pin:"anchor",pinch:0,pos:ae(w.pos,0,Y),prev:ae(w.prev,0,Y),rad:new Float32Array(at),vol:w.vol*w.neckS},te={...w,kind:"piece",state:"recoil",pin:"cursor",pinch:0,mound:0,pos:ae(w.pos,at-1,Y),prev:ae(w.prev,at-1,Y),rad:new Float32Array(at),vol:w.vol*(1-w.neckS)};J.len=w.len*w.neckS,J.rest=J.len/(at-1),te.len=w.len*(1-w.neckS),te.rest=te.len/(at-1),J.retract=te.retract=0;const xe=h.indexOf(w);h[xe]=J,h.length<d&&h.push(te),q(O.cx+w.lx*O.hw,O.cy+w.ly*O.hh,.8),x=_}function ve(w){for(const O of h)O.kind==="reach"&&(O.state==="grow"||O.state==="attached")&&(w||O.state==="grow"?(O.state="recoil",O.kind="piece"):O.pinch||(O.pinch=1e-4))}function z(w,O,Y){w.life+=O;const J=w.pin==="anchor"?[Y.cx+w.lx*Y.hw,Y.cy+w.ly*Y.hh,Math.max(2,Y.top-4)+m.lift*nu]:[v.x,v.y,p];let te=null;if(w.kind==="reach"&&(w.state==="grow"||w.state==="attached")){if(te=[v.x,v.y,p],w.state==="attached"){const ot=b(v.x,v.y,w.lat,Y),Ge=1-Math.exp(-O*1.4);w.lx+=((ot.x-Y.cx)/Y.hw-w.lx)*Ge,w.ly+=((ot.y-Y.cy)/Y.hh-w.ly)*Ge}}else if(w.kind==="micro"&&w.state!=="recoil"){const ot=b(v.x,v.y,w.lat,Y),Ge=1-Math.exp(-O*2);w.lx+=((ot.x-Y.cx)/Y.hw-w.lx)*Ge,w.ly+=((ot.y-Y.cy)/Y.hh-w.ly)*Ge;const ut=D(J[0],J[1],Y),en=v.x-J[0],hn=v.y-J[1],Zn=Math.hypot(en,hn)||1;let pn=ut.nx*.25+en/Zn*.75,Jn=ut.ny*.25+hn/Zn*.75;const Li=Math.hypot(pn,Jn)||1;pn/=Li,Jn/=Li;const En=(10+38*M)*w.probe.len,Hn=Math.sin(_*3+w.probe.ph)*4;te=[J[0]+pn*En-Jn*Hn,J[1]+Jn*En+pn*Hn,J[2]+w.probe.z*M],(w.life>w.ttl||M<.08)&&(w.state="recoil",te=null)}else if(w.kind==="probe"&&w.state!=="recoil"){const ot=w.probe,Ge=ii((w.life-ot.delay)/w.ttl,0,1),ut=Math.sin(Math.PI*Ge),en=ot.dir*(Ge-.3)*24,hn=3+ot.dist*ut;te=[J[0]+ot.nx*hn-ot.ny*en,J[1]+ot.ny*hn+ot.nx*en,J[2]+ot.z*ut],w.life>w.ttl+ot.delay&&(w.state="recoil",te=null)}let xe=null;if(te){const ot=Math.hypot(te[0]-J[0],te[1]-J[1],te[2]-J[2]);if(w.state==="grow"){const Ge=3.8*In.whip*(.75+.25*In.magnet),ut=.5,en=-.2,hn=ut/(Math.PI*Ge),Zn=1/(2*Math.PI*Ge)**2,pn=en*ut/(2*Math.PI*Ge),Jn=w.uKick?1/O:0;w.uKick=!1;const Li=Math.max(Zn,O*O/2+O*hn/2,O*hn);w.u+=O*w.ud,w.ud+=O*(1+pn*Jn-w.u-hn*w.ud)/Li;const En=w.u,Hn=ii(En,0,1),kr=Math.hypot(te[0]-J[0],te[1]-J[1])||1,Ki=-(te[1]-J[1])/kr,_s=(te[0]-J[0])/kr,Qx=w.side*w.wig*Math.sin(Math.PI*Hn)*Math.min(kr*.3,38);xe=[J[0]+(te[0]-J[0])*En+Ki*Qx,J[1]+(te[1]-J[1])*En+_s*Qx,J[2]+(te[2]-J[2])*Hn+22*Math.sin(Math.PI*Hn)],w.rest=Math.max(4,ot*Math.max(En,.03))*1.05/(at-1),En>.85&&Math.abs(w.ud)<1.6&&(w.state="attached")}else{xe=te;let Ge=w.rest*(at-1);ot<Ge*1.03?Ge+=(ot*1.03-Ge)*(1-Math.exp(-O*3.5)):Ge+=(ot-Ge)*(1-Math.exp(-O*In.creep)),w.rest=Ge/(at-1),w.stretch=ot/Math.max(Ge,1),w.kind==="reach"&&!w.pinch&&(w.stretch>In.snapStretch*w.snapMul||ot>In.maxLen*w.lenMul)&&(w.pinch=1e-4)}}else if(w.state==="recoil"){w.retract+=O;const ot=Math.max(0,w.len*Math.exp(-O*9)-(w.pin==="cursor"?160:110)*O);Ne(w,ot),w.rest=ot/(at-1)}if(w.pinch>0&&(w.pinch+=O/.1,w.pinch>=1)){Le(w,Y);return}const ne=w.pos,we=w.prev,be=w.state==="recoil"?.94:.975,et=(at-1)*3,Tt=ne[et]-J[0],Wt=ne[et+1]-J[1],Ye=Math.hypot(Tt,Wt)||1,Ue=-Wt/Ye,Ct=Tt/Ye,vt=ii(1.35-w.stretch,.15,1),xn=(i||w.state==="recoil"?0:700)*In.slither*vt*(w.state==="grow"?.4:1),Pi=In.gravity*O*O,Bt=(w.kind==="reach"||w.kind==="micro")&&w.state!=="recoil"&&v.present?In.magnet*900*O*O:0;for(let ot=1;ot<at;ot++){const Ge=ot*3,ut=ot/(at-1),en=(ne[Ge]-we[Ge])*be,hn=(ne[Ge+1]-we[Ge+1])*be,Zn=(ne[Ge+2]-we[Ge+2])*be;we[Ge]=ne[Ge],we[Ge+1]=ne[Ge+1],we[Ge+2]=ne[Ge+2];const pn=Math.sin(Math.PI*ut),Jn=Math.sin(ut*8.5-_*7.5+w.phase)*pn*xn*O*O;if(ne[Ge]+=en+Ue*Jn,ne[Ge+1]+=hn+Ct*Jn,ne[Ge+2]+=Zn-Pi+Math.cos(ut*6-_*5+w.phase)*pn*xn*.25*O*O,Bt){const Li=v.x-ne[Ge],En=v.y-ne[Ge+1],Hn=Math.hypot(Li,En)||1;ne[Ge]+=Li/Hn*Bt*pn,ne[Ge+1]+=En/Hn*Bt*pn}}const hi=Math.max(w.rest,.05);for(let ot=0;ot<kF;ot++){ne[0]=J[0],ne[1]=J[1],ne[2]=J[2],xe&&(ne[et]=xe[0],ne[et+1]=xe[1],ne[et+2]=xe[2]);for(let Ge=0;Ge<at-1;Ge++){const ut=Ge*3,en=ut+3;let hn=ne[en]-ne[ut],Zn=ne[en+1]-ne[ut+1],pn=ne[en+2]-ne[ut+2];const Jn=Math.hypot(hn,Zn,pn)||1e-6,Li=Ge===0?0:1,En=Ge+1===at-1&&xe?0:1,Hn=Li+En;if(!Hn)continue;const kr=(Jn-hi)/Jn*.95;if(hn*=kr,Zn*=kr,pn*=kr,Li){const Ki=Li/Hn;ne[ut]+=hn*Ki,ne[ut+1]+=Zn*Ki,ne[ut+2]+=pn*Ki}if(En){const Ki=En/Hn;ne[en]-=hn*Ki,ne[en+1]-=Zn*Ki,ne[en+2]-=pn*Ki}}for(let Ge=0;Ge<at-2;Ge++){const ut=Ge*3,en=ut+6;let hn=ne[en]-ne[ut],Zn=ne[en+1]-ne[ut+1],pn=ne[en+2]-ne[ut+2];const Jn=Math.hypot(hn,Zn,pn)||1e-6,Li=hi*1.55;if(Jn>=Li)continue;const En=Ge===0?0:1,Hn=Ge+2===at-1&&xe?0:1,kr=En+Hn;if(!kr)continue;const Ki=(Jn-Li)/Jn*.25;if(hn*=Ki,Zn*=Ki,pn*=Ki,En){const _s=En/kr;ne[ut]+=hn*_s,ne[ut+1]+=Zn*_s,ne[ut+2]+=pn*_s}if(Hn){const _s=Hn/kr;ne[en]-=hn*_s,ne[en+1]-=Zn*_s,ne[en+2]-=pn*_s}}}for(let ot=1;ot<at;ot++){const Ge=ot*3,ut=w.rad[ot]*.7;ne[Ge+2]<ut&&(ne[Ge+2]=ut,we[Ge]+=(ne[Ge]-we[Ge])*.3,we[Ge+1]+=(ne[Ge+1]-we[Ge+1])*.3)}let At=0;for(let ot=0;ot<at-1;ot++){const Ge=ot*3,ut=Ge+3;At+=Math.hypot(ne[ut]-ne[Ge],ne[ut+1]-ne[Ge+1],ne[ut+2]-ne[Ge+2])}w.len=At;const Kn=ii(Math.sqrt(w.vol/(Math.PI*Math.max(At,2))),.55,w.state==="recoil"?5:7.5)*In.thickness,Xi=w.state==="attached",Yi=(Xi?ii((w.stretch-1.15)/1.2,0,.7):0)*(1-w.pinch)+w.pinch*.96,Or=Xi?ii((w.stretch-1.5)/.8,0,1):0,$i=At/(9*Math.max(Kn,.6)),$o=w.state==="recoil"?Math.min(.8,w.retract*3):0;for(let ot=0;ot<at;ot++){const Ge=ot/(at-1);let ut=Kn*(w.pin==="cursor"?.6:1+.55*Math.exp(-Ge/.08));w.kind==="reach"||w.kind==="micro"||w.kind==="probe"?ut*=1-.62*qd(.5,1,Ge):ut*=1+(.5+$o)*Math.exp(-(1-Ge)/.07),ut*=1-Yi*Math.exp(-(((Ge-w.neckS)/.16)**2)),ut*=1+Or*.3*Math.sin(Ge*Math.PI*2*$i+w.phase),w.rad[ot]=Math.max(ut,.35)}let qi=0,Jr=0;w.pin==="anchor"&&(w.state==="grow"?(qi=7,Jr=.9):w.state==="attached"&&(qi=6+6*ii(w.stretch-1,0,1.4),Jr=1+1.6*ii(w.stretch-.8,0,1.4)),w.kind==="micro"&&(qi*=.35,Jr*=.6),w.kind==="probe"&&(qi*=.12,Jr*=.4)),w.mound+=(qi*.55*In.pull-w.mound)*(1-Math.exp(-O*(qi>w.mound?10:5))),w.elong+=(Jr-w.elong)*(1-Math.exp(-O*8));const qo=ne[9]-ne[0],Bc=ne[10]-ne[1],Qa=Math.hypot(qo,Bc);Qa>1&&(w.dirX=qo/Qa,w.dirY=Bc/Qa),w.state==="recoil"&&(w.rest*(at-1)<12||At<5)&&(w.dead=!0,w.pin==="anchor"&&w.kind!=="micro"&&q(J[0],J[1],.5))}function W(w){i||(_+=w),O0(m,"intro","introV",1,9,.85,w),O0(m,"press","pressV",m.pressTarget,30,.75,w),A+=(U-A)*(1-Math.exp(-w*(_>.6?4:0)));const O=Pe(),Y=v.present&&m.intro>.6,J=D(v.x,v.y,O),te=Y&&J.d<-4;if(M=Y&&!te?qd(In.awareness,18,J.d):0,O0(m,"lift","liftV",te?1:0,11,.95,w),p=O.top+m.lift*nu+BF,!i){const xe=h.filter(ne=>ne.kind==="reach"&&(ne.state==="grow"||ne.state==="attached")).length;if(!Y)ve(!1);else if(te)ve(!0);else{const ne=J.d<In.reach?Math.min(In.maxStrands,Math.round(Math.min(2,In.maxStrands)+Math.max(0,In.maxStrands-2)*qd(In.reach,In.reach*.4,J.d))):0;xe<ne&&_-S>Tn(.03,.06)&&_-x>.15&&(ge(O),S=_),h.filter(be=>be.kind==="micro"&&be.state!=="recoil").length<Math.round(9*qd(.1,.8,M))&&_-E>Tn(.03,.07)&&(ce(O),E=_)}!te&&M<.02&&_>C&&m.intro>.95&&(h.every(ne=>ne.kind==="probe"||ne.state==="recoil")&&me(O),C=_+Tn(1.8,2.3))}for(let xe=0;xe<h.length;xe++)z(h[xe],w,O);for(let xe=h.length-1;xe>=0;xe--)h[xe].dead&&h.splice(xe,1);for(const xe of g)xe.age+=w;for(;g.length&&g[0].age>1.6;)g.shift()}const $=new Float32Array(d*at*4),oe=new Float32Array(d*4),_e=new Float32Array(d*4),Ae=new Float32Array(d*4),rt=new Float32Array($d*12),yt=new Float32Array(U0*4),Dt=6;function ct(){const w=Pe();let O=w.top+m.dome+m.lift*nu+4,Y=0;const J=Math.min(h.length,d);for(let Ye=0;Ye<J;Ye++){const Ue=h[Ye];let Ct=1e9,vt=1e9,xn=-1e9,Pi=-1e9,Bt=0;for(let Xt=0;Xt<at;Xt++){const Yi=(Ye*at+Xt)*4,Or=Ue.pos[Xt*3],$i=Ue.pos[Xt*3+1],$o=Ue.pos[Xt*3+2],qi=Ue.rad[Xt];$[Yi]=Or,$[Yi+1]=$i,$[Yi+2]=$o,$[Yi+3]=qi,Ct=Math.min(Ct,Or),vt=Math.min(vt,$i),xn=Math.max(xn,Or),Pi=Math.max(Pi,$i),Bt=Math.max(Bt,qi),O=Math.max(O,$o+qi+Dt*.3)}const hi=Bt+Dt+3;oe.set([Ct-hi,vt-hi,xn+hi,Pi+hi],Ye*4);const At=Ue.pin==="anchor"?w.cx+Ue.lx*w.hw:0,Kn=Ue.pin==="anchor"?w.cy+Ue.ly*w.hh:0,Xi=Ue.pin==="anchor"?Ue.mound:0;Y=Math.max(Y,Xi),_e.set([At,Kn,Xi,17],Ye*4),Ae.set([Ue.dirX,Ue.dirY,Ue.elong,0],Ye*4)}O+=Y;const te=h.filter(Ye=>Ye.kind==="reach"&&Ye.state==="attached").sort((Ye,Ue)=>Ye.lat-Ue.lat);let xe=0;for(let Ye=0;Ye+1<te.length&&xe<$d;Ye++){const Ue=te[Ye],Ct=te[Ye+1],vt=ii((Math.min(Ue.life,Ct.life)-.3)*4,0,1),xn=ii(2.3-Math.max(Ue.stretch,Ct.stretch),.25,1);for(const Pi of[.22,.42,.62]){if(xe>=$d)break;const Bt=Math.round(Pi*(at-1))*3,hi=Ue.pos[Bt],At=Ue.pos[Bt+1],Kn=Ue.pos[Bt+2],Xi=Ct.pos[Bt],Xt=Ct.pos[Bt+1],Yi=Ct.pos[Bt+2],Or=Math.hypot(Xi-hi,Xt-At),$i=.22*In.thickness*ii(1.6-Or/70,0,1)*vt*xn;if($i<.2)continue;const $o=(Ue.pos[0]+Ct.pos[0])/2,qi=(Ue.pos[1]+Ct.pos[1])/2;let Jr=(hi+Xi)/2,qo=(At+Xt)/2;const Bc=Math.hypot($o-Jr,qi-qo)||1,Qa=Or*.22;Jr+=($o-Jr)/Bc*Qa,qo+=(qi-qo)/Bc*Qa,rt.set([hi,At,Kn,$i,Jr,qo,(Kn+Yi)/2-Or*.05,$i*.75,Xi,Xt,Yi,$i],xe*12),xe++}}yt.fill(0),g.forEach((Ye,Ue)=>yt.set([Ye.x,Ye.y,Ye.age,Ye.amp],Ue*4));const ne=[w.cx,w.cy+1,m.lbw,m.lbh],we=i?3:_;u.bindFramebuffer(u.FRAMEBUFFER,qe),u.viewport(0,0,I,B),u.useProgram(ie.prog),u.bindVertexArray(pe);const be=ie.u;u.uniform2f(be.uRes,I,B),u.uniform1f(be.uDpr,V),u.uniform4f(be.uBtn,w.cx,w.cy,w.hw,w.hh),u.uniform4f(be.uBtnZ,w.top,m.sink*Math.min(1,m.intro),m.dome*Math.min(1,m.intro),0),u.uniform4f(be.uBtnZ2,m.lift*nu,zF,0,0),u.uniform1i(be.uNS,J),u.uniform4fv(be.uPts,$),u.uniform4fv(be.uBox,oe),u.uniform4fv(be.uAnc,_e),u.uniform4fv(be.uAncD,Ae),u.uniform1i(be.uNBr,xe),u.uniform4fv(be.uBr,rt),u.uniform4fv(be.uRip,yt),u.uniform1f(be.uZTop,O),u.drawArrays(u.TRIANGLES,0,3),u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,Oe),u.generateMipmap(u.TEXTURE_2D),u.bindFramebuffer(u.FRAMEBUFFER,We),u.viewport(0,0,I,B),u.useProgram(fe.prog);const et=fe.u;u.uniform1i(et.uG,0),u.uniform1i(et.uLabel,1),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,Me),u.uniform2f(et.uRes,I,B),u.uniform1f(et.uDpr,V),u.uniform1f(et.uTime,we),u.uniform4f(et.uLabelBox,ne[0],ne[1],ne[2],ne[3]),u.uniform2f(et.uLabelTx,2.5/T,2.5/ru),u.uniform1f(et.uLabelAmt,A),u.uniform1f(et.uLabelLod,Math.max(0,Math.log2(T/(2*ne[2]*V))-.6)),u.uniform1f(et.uZMax,O),u.uniform1f(et.uLift,m.lift),u.uniform4f(et.uBtnP,w.cx,w.cy,w.hw,w.hh);const Tt=y*r/iu/2;u.uniform2f(et.uWin,-(Tt+16)/w.hw,15/w.hw);const Wt=BS[a]||BS.primary;u.uniform4f(et.uGlow,Wt[0],Wt[1],Wt[2],Wt[3]*(1+.6*m.lift)),u.drawArrays(u.TRIANGLES,0,3),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,I,B),u.useProgram(Te.prog),u.uniform1i(Te.u.uC,4),u.uniform2f(Te.u.uRes,I,B),u.activeTexture(u.TEXTURE4),u.bindTexture(u.TEXTURE_2D,Be),u.drawArrays(u.TRIANGLES,0,3)}function Qe(w,O){return D(w,O,Pe()).d<0}const Xe=()=>{const w=c.getBoundingClientRect();v.x=v.cx-w.left,v.y=v.cy-w.top},dt=w=>{v.cx=w.clientX,v.cy=w.clientY,v.mouse=w.pointerType==="mouse"||w.pointerType==="pen",v.present=v.mouse||v.down},Ie=()=>{v.present=!1},tt=w=>{v.down=!0,v.cx=w.clientX,v.cy=w.clientY,v.present=!0},Je=w=>{v.down=!1,w.pointerType==="touch"&&(v.present=!1),m.pressTarget&&nt(!1,v.x,v.y)};function nt(w,O,Y){if(m.pressTarget=w?1:0,!w){q(O,Y,1.6);for(const J of h)J.state==="attached"&&(J.rest*=.82)}}const St=w=>{v.cx=w.clientX,v.cy=w.clientY,Xe(),Qe(v.x,v.y)&&nt(!0)},it=w=>{(w.key==="Enter"||w.key===" ")&&!w.repeat&&nt(!0)},wt=w=>{(w.key==="Enter"||w.key===" ")&&nt(!1,m.cx,m.cy)};window.addEventListener("pointermove",dt,{passive:!0}),window.addEventListener("pointerdown",tt,{passive:!0}),window.addEventListener("pointerup",Je,{passive:!0}),window.addEventListener("blur",Ie),document.documentElement.addEventListener("pointerleave",Ie),e.addEventListener("pointerdown",St),e.addEventListener("keydown",it),e.addEventListener("keyup",wt);let Ot=!0;const kt=new IntersectionObserver(w=>{var O;Ot=((O=w[0])==null?void 0:O.isIntersecting)??!0},{rootMargin:"120px"});kt.observe(e);const Rt=w=>{var O;w.preventDefault(),ee(),(O=n.onFail)==null||O.call(n)};c.addEventListener("webglcontextlost",Rt);let Et=performance.now(),Dn=0,Nt=0,R=1/60,j=0;function Z(w){if(Nt=requestAnimationFrame(Z),!Ot||document.hidden){Et=w;return}let O=(w-Et)/1e3;Et=w,O>.1&&(O=.1),R+=(O-R)*.05,Xe(),Dn+=O;let Y=0;for(;Dn>=F0&&Y<40;)W(F0),Dn-=F0,Y++;Y===40&&(Dn=0),ct(),R>1/40&&O<.09?j+=O:j=0,j>2&&X>.7&&(X-=.1,j=0,he())}function ee(){var w;l||(l=!0,cancelAnimationFrame(Nt),kt.disconnect(),window.removeEventListener("pointermove",dt),window.removeEventListener("pointerdown",tt),window.removeEventListener("pointerup",Je),window.removeEventListener("blur",Ie),document.documentElement.removeEventListener("pointerleave",Ie),e.removeEventListener("pointerdown",St),e.removeEventListener("keydown",it),e.removeEventListener("keyup",wt),c.removeEventListener("webglcontextlost",Rt),(w=u.getExtension("WEBGL_lose_context"))==null||w.loseContext(),c.remove())}return le(),Nt=requestAnimationFrame(Z),{setLabel:Fe,setVariant(w){a=w},destroy:ee}}const HF=t=>QC.Children.toArray(t).map(e=>typeof e=="string"||typeof e=="number"?String(e):"").join("").replace(/\s+/g," ").trim(),UA=({children:t,onClick:e,href:n,variant:i="primary",className:r="",icon:s,ariaLabel:o,type:a="button"})=>{const l=re.useRef(null),c=re.useRef(null),u=re.useRef(null),f=re.useMemo(()=>HF(t),[t]),[d,h]=re.useState(null),[g,v]=re.useState("pending");re.useEffect(()=>{const E=c.current,C=l.current;if(!E||!C)return;const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=VF(E,C,{variant:i,reducedMotion:M,onLayout:(U,y)=>h({w:Math.round(U),h:Math.round(y)}),onFail:()=>v("fallback")});if(!A){v("fallback");return}return u.current=A,v("webgl"),()=>{A.destroy(),u.current=null}},[]),re.useEffect(()=>{var E;(E=u.current)==null||E.setVariant(i)},[i,g]),re.useEffect(()=>{var E;g==="webgl"&&((E=u.current)==null||E.setLabel(f||o||""))},[f,o,g]);const m=g==="webgl",p=Math.max(180,f.length*11+64),_=m&&d?{width:d.w,height:d.h}:{minWidth:p,height:60},x={ref:l,"aria-label":o,"data-cursor":"venom",onClick:e,style:_,className:`relative inline-flex items-center justify-center rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1238] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${m?"":i==="secondary"?"glass glass-hover":"glass-red"} ${r}`},S=P.jsxs(P.Fragment,{children:[P.jsx("span",{ref:c,"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-1/2 h-0 w-0"}),P.jsxs("span",{className:m?"pointer-events-none absolute h-px w-px overflow-hidden whitespace-nowrap opacity-0":"relative z-10 flex items-center gap-2.5 px-8 text-xs font-bold uppercase tracking-wider text-white md:text-sm",children:[t,!m&&s&&P.jsx("span",{className:"text-[#FF1238]",children:s})]})]});return n?P.jsx("a",{href:n,...x,children:S}):P.jsx("button",{type:a,...x,children:S})},zS=[.22,0],VS=[.515,0],HS=[.84,0],GS=[.34,1],WS=[.865,1],o1=[.385,.72],Ih=[.48,.62],vu=[.716,.49],GF=[[[0,0],zS,Ih,o1,GS,[0,1]],[zS,VS,vu,Ih],[VS,HS,vu],[HS,[1,0],[1,1],WS,vu],[o1,Ih,vu,WS,GS]],WF=[o1,Ih,vu],a1={stiffness:85,damping:14,maxOffsetRatio:.12};function jS(t,e,n){let i=Math.min(Math.max(n,0),.05);for(;i>0;){const r=Math.min(i,.008333333333333333);t.velocity+=((e-t.position)*a1.stiffness-t.velocity*a1.damping)*r,t.position+=t.velocity*r,i-=r}Math.abs(t.position-e)<1e-4&&Math.abs(t.velocity)<1e-4&&(t.position=e,t.velocity=0)}const XS=(t,e)=>{const n=e*a1.maxOffsetRatio;return Math.max(-n,Math.min(n,t))};function YS(t,e){const n=t<768,i=n?Math.min(Math.max(t*.05,16),22):t*.055,r=Math.max(e*.085,n?84:96),s=n?e*.5:e-r-e*.085;return{left:i,top:r,width:t-i*2,height:s,mobile:n}}function jF(t,e){const n=t.length,r=t.reduce((o,a,l)=>{const c=t[(l+1)%n];return o+(a[0]*c[1]-c[0]*a[1])},0)>0?1:-1,s=t.map((o,a)=>{const l=t[(a+1)%n];let c=-(l[1]-o[1]),u=l[0]-o[0];const f=Math.hypot(c,u)||1;return c=c/f*r*e,u=u/f*r*e,[[o[0]+c,o[1]+u],[l[0]+c,l[1]+u]]});return s.map((o,a)=>{const[l,c]=s[(a-1+n)%n],[u]=o,f=c[0]-l[0],d=c[1]-l[1],h=o[1][0]-u[0],g=o[1][1]-u[1],v=f*g-d*h;if(Math.abs(v)<1e-9)return u;const m=((u[0]-l[0])*g-(u[1]-l[1])*h)/v;return[l[0]+f*m,l[1]+d*m]})}function XF(t,e){const n=new D3,i=t.length;for(let r=0;r<i;r++){const s=t[r],o=t[(r-1+i)%i],a=t[(r+1)%i],l=[o[0]-s[0],o[1]-s[1]],c=[a[0]-s[0],a[1]-s[1]],u=Math.hypot(...l),f=Math.hypot(...c),d=Math.min(e,u*.4,f*.4),h=[s[0]+l[0]/u*d,s[1]+l[1]/u*d],g=[s[0]+c[0]/f*d,s[1]+c[1]/f*d];r===0?n.moveTo(h[0],h[1]):n.lineTo(h[0],h[1]),n.quadraticCurveTo(s[0],s[1],g[0],g[1])}return n.closePath(),n}function YF(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}const $S="./assets/hero-red-bg.jpg?v=shubham15",$F=.69;function qF(t,e){re.useEffect(()=>{const n=t.current;if(!n)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)");let r=()=>{};const s=()=>{if(r(),i.matches)return;const o=Array.from(n.querySelectorAll(e)),a=o.map(u=>u.dataset.revealVisible);let l;const c=Gt.context(()=>{Gt.set(o,{opacity:0,y:20,filter:"blur(12px)"})},n);c.add(()=>{l=new IntersectionObserver(u=>u.forEach(f=>{const d=f.target,h=f.isIntersecting;d.dataset.revealVisible!==String(h)&&(d.dataset.revealVisible=String(h),Gt.to(d,{opacity:h?1:0,y:h?0:20,filter:h?"blur(0px)":"blur(12px)",duration:h?.8:.65,delay:h?Math.min(o.indexOf(d)%5*.055,.22):0,ease:"power3.out",overwrite:"auto"}))}),{threshold:0,rootMargin:"-4% 0px -4% 0px"}),o.forEach(u=>l==null?void 0:l.observe(u))}),r=()=>{l==null||l.disconnect(),Gt.killTweensOf(o),c.revert(),o.forEach((u,f)=>{a[f]===void 0?delete u.dataset.revealVisible:u.dataset.revealVisible=a[f]})}};return s(),i.addEventListener("change",s),()=>{r(),i.removeEventListener("change",s)}},[t,e])}const KF=()=>{const t=re.useRef(null),e=re.useRef(null),n=re.useRef(null),[i,r]=re.useState(null),[s,o]=re.useState(!1);qF(t,"[data-hero-copy] > span, [data-hero-copy] > h1, [data-hero-copy] > div, [data-hero-copy] > p"),re.useEffect(()=>r(YF()),[]),re.useEffect(()=>{const l=window.matchMedia("(max-width: 767px)"),c=()=>o(l.matches);return c(),l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[]),re.useEffect(()=>{if(!i)return;const l=t.current,c=e.current;if(!l||!c)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=window.matchMedia("(pointer: coarse)").matches,d=getComputedStyle(document.documentElement),h=new _t(d.getPropertyValue("--glass-reflection").trim()||"#8b1118"),g=new _t(d.getPropertyValue("--glass-highlight").trim()||"#d94a52"),v=new V_({antialias:!0,alpha:!0});v.setPixelRatio(Math.min(window.devicePixelRatio||1,f?1.5:2)),v.setClearColor(0,0),v.outputColorSpace=Mr,v.toneMapping=KT,v.toneMappingExposure=.95,c.appendChild(v.domElement),v.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block";const m=new am,p=new zv(v),_=new _U,x=p.fromScene(_,.04);_.dispose(),m.environment=x.texture,m.environmentIntensity=.22;const S=new wi(35,1,.1,100);S.position.set(0,0,10);const E=new pu;m.add(E),m.add(new vU(16777215,.08));const C=new vS(16772840,.7);C.position.set(-4,5,6),m.add(C);const M=new vS(g,.45);M.position.set(5,-3,2),m.add(M);const A=new k3(h,0,6,1.6);A.position.set(0,0,1.5),m.add(A);let U=!1;const y=new F3().load($S,()=>U=!0);y.colorSpace=Mr,y.anisotropy=8;const T=new fU({color:1315867,roughness:.36,metalness:0,specularIntensity:.35,specularColor:g,clearcoat:.7,clearcoatRoughness:.12,iridescence:.55,iridescenceIOR:1.6,iridescenceThicknessRange:[100,400],emissive:16777215,emissiveMap:y,emissiveIntensity:.92,envMapIntensity:.28}),I=ge=>{ge.uniforms.redReflection={value:h},ge.fragmentShader=`uniform vec3 redReflection;
`+ge.fragmentShader;const ce=ft.lights_fragment_begin.replace("material.iridescenceFresnel = mix(",`iridescenceFresnelDielectric = redReflection * dot(iridescenceFresnelDielectric, vec3(0.333333));
         iridescenceFresnelMetallic = redReflection * dot(iridescenceFresnelMetallic, vec3(0.333333));
         material.iridescenceFresnel = mix(`);ge.fragmentShader=ge.fragmentShader.replace("#include <lights_fragment_begin>",ce)},B=new A3({color:h,transparent:!0,opacity:.2});let V=[],K=1,G=1,X=!1;const F=()=>{const ge=V;V.forEach(He=>{E.remove(He.mesh),He.mesh.geometry.dispose(),He.edge.geometry.dispose(),He.mat.dispose()}),V=[];const ce=u?0:performance.now()/1e3,Ee=Math.min(K,G);GF.forEach((He,me)=>{var Xe,dt,Ie,tt,Je,nt;const Re=He.map(St=>{let[it,wt]=St;const Ot=WF.indexOf(St);return Ot>=0&&(it+=Math.sin(ce*.5+Ot*2.1)*.006,wt+=Math.cos(ce*.4+Ot*1.3)*.006),X&&([it,wt]=[wt,it]),[(it-.5)*K,(.5-wt)*G]}),ze=XF(jF(Re,Ee*.012),Ee*.035),Ke=Ee*.045,Ne=new W_(ze,{depth:Ke,bevelEnabled:!0,bevelThickness:Ke*.35,bevelSize:Ke*.3,bevelSegments:3,curveSegments:8});Ne.translate(0,0,-Ke);const ae=Ne.attributes.position,Le=Ne.attributes.uv,ve=16/9,z=K/G;let W=1,$=1;z>ve?$=ve/z:W=z/ve;const oe=W<1?Math.min(.5,Math.max(0,($F-.5)/(1-W))):0;for(let St=0;St<ae.count;St++){const it=(ae.getX(St)/K+.5)*W+(1-W)/2+oe*(1-W),wt=(ae.getY(St)/G+.5)*$+(1-$)/2;Le.setXY(St,Math.min(1,Math.max(0,it)),wt)}Le.needsUpdate=!0;const _e=T.clone();_e.onBeforeCompile=I,_e.customProgramCacheKey=()=>"muted-red-iridescence";const Ae=new Zt(Ne,_e),rt=new R6(new j6(Ne,25),B);Ae.add(rt);const yt=Re.reduce((St,it)=>[St[0]+it[0]/Re.length,St[1]+it[1]/Re.length],[0,0]),Dt=new ke(yt[0],yt[1]),ct=new H(yt[0]/K,yt[1]/G,.4+me%3*.25).normalize(),Qe=new H((Math.random()-.5)*1.6,(Math.random()-.5)*1.6,(Math.random()-.5)*.8);Ae.userData.idx=me,E.add(Ae),V.push({mesh:Ae,edge:rt,mat:_e,center:Dt,dir:ct,spin:((Xe=ge[me])==null?void 0:Xe.spin)??Qe,lift:((dt=ge[me])==null?void 0:dt.lift)??0,phase:me*1.37,x:((Ie=ge[me])==null?void 0:Ie.x)??{position:0,velocity:0},y:((tt=ge[me])==null?void 0:tt.y)??{position:0,velocity:0},targetX:((Je=ge[me])==null?void 0:Je.targetX)??0,targetY:((nt=ge[me])==null?void 0:nt.targetY)??0})})};let Q=YS(1,1);const N=()=>{const ge=l.clientWidth,ce=l.clientHeight;v.setSize(ge,ce,!1),S.aspect=ge/ce,Q=YS(ge,ce);const Ee=2*S.position.z*Math.tan(du.degToRad(S.fov/2))/ce;K=Q.width*Ee,G=Q.height*Ee,E.position.set(0,-((Q.top-(ce-Q.top-Q.height))/2)*Ee,0),X=Q.mobile,S.updateProjectionMatrix(),F();const He=n.current;if(He)if(Q.mobile){const me=Q.top+Q.height+Math.min(ce*.02,16);Object.assign(He.style,{left:`${Q.left}px`,top:`${me}px`,width:`${Q.width}px`,height:`${Math.max(ce-me-ce*.03,180)}px`})}else Object.assign(He.style,{left:`${Q.left}px`,top:`${Q.top}px`,width:`${Q.width}px`,height:`${Q.height}px`})};N();const de=new ResizeObserver(N);de.observe(l);const De=new ke(0,0),Ze=new B3,ie=new so,fe=new H,Te=new H;let pe=-1,Oe=null,Be=0;const qe=new ke;let We=!1;const ue=()=>V.map(ge=>ge.mesh),L=ge=>{const ce=l.getBoundingClientRect();if(De.x=(ge.clientX-ce.left)/ce.width*2-1,De.y=-((ge.clientY-ce.top)/ce.height)*2+1,We=!0,pe>=0&&ge.pointerId===Oe&&(Ze.setFromCamera(De,S),Ze.ray.intersectPlane(ie,Te))){const Ee=E.worldToLocal(Te.clone()),He=V[pe];He.targetX=XS(qe.x+Ee.x-fe.x,K),He.targetY=XS(qe.y+Ee.y-fe.y,G)}},Se=()=>{We=!1},Me=()=>{if(pe<0)return;const ge=V[pe];ge.targetX=0,ge.targetY=0,pe=-1,l.classList.remove("shard-dragging"),c.style.cursor="",Oe!==null&&l.hasPointerCapture(Oe)&&l.releasePointerCapture(Oe),Oe=null},ye=ge=>{if(pe>=0||ge.pointerType==="mouse"&&ge.button!==0||ge.target.closest("a, button, input, textarea, nav")||l.getBoundingClientRect().top<-l.clientHeight*.04)return;L(ge),m.updateMatrixWorld(!0),Ze.setFromCamera(De,S);const ce=Ze.intersectObjects(ue(),!1)[0];if(!ce)return;pe=ce.object.userData.idx,Oe=ge.pointerId;const Ee=V[pe];Be=Ee.mesh.position.z,ie.setFromNormalAndCoplanarPoint(new H(0,0,1),ce.point),fe.copy(E.worldToLocal(ce.point.clone())),qe.set(Ee.x.position,Ee.y.position),l.setPointerCapture(ge.pointerId),l.classList.add("shard-dragging"),c.style.cursor="grabbing",ge.preventDefault()};l.addEventListener("pointermove",L),l.addEventListener("pointerleave",Se),l.addEventListener("pointerdown",ye),l.addEventListener("pointerup",Me),l.addEventListener("pointercancel",Me),l.addEventListener("lostpointercapture",Me),window.addEventListener("blur",Me);const k={x:0,y:0};let Fe=-1,Pe=0,D=0,b=performance.now(),q=0,le=!0;const he=new IntersectionObserver(([ge])=>{le=ge.isIntersecting,le||Me()});he.observe(l);const se=ge=>{if(D=requestAnimationFrame(se),!le){b=ge;return}const ce=Math.min((ge-b)/1e3,.05);b=ge;const Ee=ge/1e3,He=W=>1-Math.exp(-W*ce),me=pe>=0,Re=me?k.x:We&&!u?-De.y*du.degToRad(5.5):0,ze=me?k.y:We&&!u?De.x*du.degToRad(7):0;k.x+=(Re-k.x)*He(5),k.y+=(ze-k.y)*He(5);const Ke=l.getBoundingClientRect(),Ne=du.clamp(-Ke.top/(Ke.height*.8),0,1);Pe+=(Ne-Pe)*He(8);const ae=Pe*Pe*(3-2*Pe);if(E.rotation.set(k.x,k.y,0),E.updateMatrixWorld(!0),Fe=-1,We&&!f&&ae<.05){Ze.setFromCamera(De,S);const W=Ze.intersectObjects(ue(),!1)[0];W&&(Fe=W.object.userData.idx,A.position.set(W.point.x,W.point.y,W.point.z+1.2))}A.intensity+=((Fe>=0||pe>=0?1.4:0)-A.intensity)*He(6),q+=ce;const Le=V.some(W=>W.x.position!==0||W.y.position!==0);!u&&pe<0&&!Le&&q>.25&&ae<.02&&(q=0,F());const ve=ae*Math.max(K,G)*.9;V.forEach((W,$)=>{const oe=pe===$||W.x.position!==0||W.y.position!==0;W.lift+=((!oe&&Fe===$?1:0)-W.lift)*He(7),jS(W.x,W.targetX,ce),jS(W.y,W.targetY,ce);const _e=u||oe?0:Math.sin(Ee*.8+W.phase)*.03;W.mesh.position.set(W.dir.x*ve+W.x.position,W.dir.y*ve+W.y.position,(pe===$?Be:_e+W.lift*.35)+W.dir.z*ve*.6),W.mesh.rotation.set(W.spin.x*ae+W.lift*-.05*De.y+W.y.position*-.06,W.spin.y*ae+W.lift*.06*De.x+W.x.position*.06,W.spin.z*ae+W.x.position*.025),W.mat.iridescence=.55,W.mat.emissiveIntensity=(U?.92:0)*(1-ae*.5)+W.lift*.08});const z=n.current;z&&(z.style.transform=`perspective(1400px) rotateX(${-k.x*180/Math.PI}deg) rotateY(${k.y*180/Math.PI}deg) translate3d(${-ae*140}px, ${-ae*60}px, ${ae*80}px)`,z.style.opacity=String(1-ae*1.2)),v.render(m,S),U&&(c.dataset.sceneReady="1")};return D=requestAnimationFrame(se),()=>{cancelAnimationFrame(D),de.disconnect(),he.disconnect(),l.removeEventListener("pointermove",L),l.removeEventListener("pointerleave",Se),Me(),l.removeEventListener("pointerdown",ye),l.removeEventListener("pointerup",Me),l.removeEventListener("pointercancel",Me),l.removeEventListener("lostpointercapture",Me),window.removeEventListener("blur",Me),V.forEach(ge=>{ge.mesh.geometry.dispose(),ge.edge.geometry.dispose(),ge.mat.dispose()}),T.dispose(),B.dispose(),y.dispose(),x.dispose(),p.dispose(),v.dispose(),v.domElement.remove()}},[i]);const a=i===!1;return P.jsx("div",{id:"hero",className:"w-full flex flex-col overflow-hidden",children:P.jsxs("section",{ref:t,className:"relative w-full h-[100svh] min-h-[640px] overflow-hidden",style:{touchAction:"pan-y"},children:[a&&P.jsxs("div",{className:"absolute rounded-[28px] overflow-hidden border border-white/10 shadow-glass",style:s?{left:"clamp(16px, 5%, 22px)",right:"clamp(16px, 5%, 22px)",top:"max(8.5%, 84px)",height:"50%"}:{left:"5.5%",right:"5.5%",top:"max(8.5%, 96px)",bottom:"8.5%"},children:[P.jsx("img",{src:$S,alt:"Shubham Ojha - Full-Stack Developer / AI Builder",className:"absolute inset-0 w-full h-full object-cover",style:{objectPosition:"69% 15%"}}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#050507]/60 via-transparent to-transparent"})]}),P.jsx("div",{ref:e,className:"absolute inset-0 touch-pan-y","aria-hidden":"true"}),P.jsx("div",{ref:n,className:"absolute flex items-center max-md:items-end will-change-transform pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto",style:a?s?{left:"4%",right:"4%",top:"calc(max(8.5%, 84px) + 50% + 12px)",bottom:"3%"}:{left:"5.5%",right:"5.5%",top:"max(8.5%, 96px)",bottom:"8.5%"}:{transformOrigin:"50% 50%"},children:P.jsx("div",{className:"pl-[6%] pr-6 max-w-[min(44rem,92%)] max-md:max-w-full max-md:pl-3 max-md:pr-3 max-md:pb-1 max-md:w-full max-md:rounded-3xl max-md:bg-gradient-to-t max-md:from-[#050507]/90 max-md:via-[#050507]/55 max-md:to-transparent max-md:pt-4",children:P.jsxs("div",{"data-hero-copy":!0,className:"flex flex-col gap-2 sm:gap-3.5",children:[P.jsx("span",{className:"text-[#ff2a3b] font-bold uppercase text-[11px] sm:text-xs md:text-sm tracking-[0.25em]",children:"CS ENGINEER • INDEPENDENT DEVELOPER"}),P.jsx("h1",{className:"text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.88] uppercase drop-shadow-md",children:"SHUBHAM OJHA"}),P.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 text-white font-extrabold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider mt-0.5",children:[P.jsx("span",{children:"FULL-STACK DEVELOPER"}),P.jsx("span",{className:"text-[#ff2a3b] font-bold",children:"/"}),P.jsx("span",{children:"AI BUILDER"})]}),P.jsx("p",{className:"text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-normal tracking-wide mt-1",children:"Building intelligent software that solves real problems."}),P.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-4 mt-3 sm:mt-6",children:[P.jsx(UA,{href:"#projects",variant:"primary",children:"EXPLORE MY WORK"}),P.jsx("a",{href:"#contact",className:"glass glass-hover inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white hover:-translate-y-0.5 transition-all duration-300",children:"Get In Touch"})]})]})})})]})})};function ZF(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function JF(t,e,n){return e&&ZF(t.prototype,e),t}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn,Uh,Ui,go,vo,rc,FA,ua,sc,OA,Is,Gr,kA,BA=function(){return jn||typeof window<"u"&&(jn=window.gsap)&&jn.registerPlugin&&jn},zA=1,Bl=[],gt=[],fs=[],Hu=Date.now,l1=function(e,n){return n},QF=function(){var e=sc.core,n=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,gt),r.push.apply(r,fs),gt=i,fs=r,l1=function(o,a){return n[o](a)}},Lo=function(e,n){return~fs.indexOf(e)&&fs[fs.indexOf(e)+1][n]},Gu=function(e){return!!~OA.indexOf(e)},gi=function(e,n,i,r,s){return e.addEventListener(n,i,{passive:r!==!1,capture:!!s})},pi=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},Kd="scrollLeft",Zd="scrollTop",c1=function(){return Is&&Is.isPressed||gt.cache++},Rp=function(e,n){var i=function r(s){if(s||s===0){zA&&Ui.history.scrollRestoration!=="manual"&&(Ui.history.scrollRestoration="manual");var o=Is&&Is.isPressed;s=r.v=Math.round(s)||(Is&&Is.iOS?1:0),e(s),r.cacheID=gt.cache,o&&l1("ss",s)}else(n||gt.cache!==r.cacheID||l1("ref"))&&(r.cacheID=gt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Ti={s:Kd,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rp(function(t){return arguments.length?Ui.scrollTo(t,Cn.sc()):Ui.pageXOffset||go[Kd]||vo[Kd]||rc[Kd]||0})},Cn={s:Zd,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ti,sc:Rp(function(t){return arguments.length?Ui.scrollTo(Ti.sc(),t):Ui.pageYOffset||go[Zd]||vo[Zd]||rc[Zd]||0})},Di=function(e,n){return(n&&n._ctx&&n._ctx.selector||jn.utils.toArray)(e)[0]||(typeof e=="string"&&jn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},e8=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},Bo=function(e,n){var i=n.s,r=n.sc;Gu(e)&&(e=go.scrollingElement||vo);var s=gt.indexOf(e),o=r===Cn.sc?1:2;!~s&&(s=gt.push(e)-1),gt[s+o]||gi(e,"scroll",c1);var a=gt[s+o],l=a||(gt[s+o]=Rp(Lo(e,i),!0)||(Gu(e)?r:Rp(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=jn.getProperty(e,"scrollBehavior")==="smooth"),l},u1=function(e,n,i){var r=e,s=e,o=Hu(),a=o,l=n||50,c=Math.max(500,l*3),u=function(g,v){var m=Hu();v||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(g){var v=a,m=s,p=Hu();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-v)*1e3};return{update:u,reset:f,getVelocity:d}},su=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qS=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},VA=function(){sc=jn.core.globals().ScrollTrigger,sc&&sc.core&&QF()},HA=function(e){return jn=e||BA(),!Uh&&jn&&typeof document<"u"&&document.body&&(Ui=window,go=document,vo=go.documentElement,rc=go.body,OA=[Ui,go,vo,rc],jn.utils.clamp,kA=jn.core.context||function(){},ua="onpointerenter"in rc?"pointer":"mouse",FA=_n.isTouch=Ui.matchMedia&&Ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gr=_n.eventTypes=("ontouchstart"in vo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zA=0},500),Uh=1),sc||VA(),Uh};Ti.op=Cn;gt.cache=0;var _n=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(i){Uh||HA(jn)||console.warn("Please gsap.registerPlugin(Observer)"),sc||VA();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,v=i.event,m=i.onDragStart,p=i.onDragEnd,_=i.onDrag,x=i.onPress,S=i.onRelease,E=i.onRight,C=i.onLeft,M=i.onUp,A=i.onDown,U=i.onChangeX,y=i.onChangeY,T=i.onChange,I=i.onToggleX,B=i.onToggleY,V=i.onHover,K=i.onHoverEnd,G=i.onMove,X=i.ignoreCheck,F=i.isNormalizer,Q=i.onGestureStart,N=i.onGestureEnd,de=i.onWheel,De=i.onEnable,Ze=i.onDisable,ie=i.onClick,fe=i.scrollSpeed,Te=i.capture,pe=i.allowClicks,Oe=i.lockAxis,Be=i.onLockAxis;this.target=a=Di(a)||vo,this.vars=i,h&&(h=jn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,fe=fe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ui.getComputedStyle(rc).lineHeight)||22);var qe,We,ue,L,Se,Me,ye,k=this,Fe=0,Pe=0,D=i.passive||!u&&i.passive!==!1,b=Bo(a,Ti),q=Bo(a,Cn),le=b(),he=q(),se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Gr[0]==="pointerdown",ge=Gu(a),ce=a.ownerDocument||go,Ee=[0,0,0],He=[0,0,0],me=0,Re=function(){return me=Hu()},ze=function(Xe,dt){return(k.event=Xe)&&h&&e8(Xe.target,h)||dt&&se&&Xe.pointerType!=="touch"||X&&X(Xe,dt)},Ke=function(){k._vx.reset(),k._vy.reset(),We.pause(),f&&f(k)},Ne=function(){var Xe=k.deltaX=qS(Ee),dt=k.deltaY=qS(He),Ie=Math.abs(Xe)>=r,tt=Math.abs(dt)>=r;T&&(Ie||tt)&&T(k,Xe,dt,Ee,He),Ie&&(E&&k.deltaX>0&&E(k),C&&k.deltaX<0&&C(k),U&&U(k),I&&k.deltaX<0!=Fe<0&&I(k),Fe=k.deltaX,Ee[0]=Ee[1]=Ee[2]=0),tt&&(A&&k.deltaY>0&&A(k),M&&k.deltaY<0&&M(k),y&&y(k),B&&k.deltaY<0!=Pe<0&&B(k),Pe=k.deltaY,He[0]=He[1]=He[2]=0),(L||ue)&&(G&&G(k),ue&&(m&&ue===1&&m(k),_&&_(k),ue=0),L=!1),Me&&!(Me=!1)&&Be&&Be(k),Se&&(de(k),Se=!1),qe=0},ae=function(Xe,dt,Ie){Ee[Ie]+=Xe,He[Ie]+=dt,k._vx.update(Xe),k._vy.update(dt),c?qe||(qe=requestAnimationFrame(Ne)):Ne()},Le=function(Xe,dt){Oe&&!ye&&(k.axis=ye=Math.abs(Xe)>Math.abs(dt)?"x":"y",Me=!0),ye!=="y"&&(Ee[2]+=Xe,k._vx.update(Xe,!0)),ye!=="x"&&(He[2]+=dt,k._vy.update(dt,!0)),c?qe||(qe=requestAnimationFrame(Ne)):Ne()},ve=function(Xe){if(!ze(Xe,1)){Xe=su(Xe,u);var dt=Xe.clientX,Ie=Xe.clientY,tt=dt-k.x,Je=Ie-k.y,nt=k.isDragging;k.x=dt,k.y=Ie,(nt||(tt||Je)&&(Math.abs(k.startX-dt)>=s||Math.abs(k.startY-Ie)>=s))&&(ue||(ue=nt?2:1),nt||(k.isDragging=!0),Le(tt,Je))}},z=k.onPress=function(Qe){ze(Qe,1)||Qe&&Qe.button||(k.axis=ye=null,We.pause(),k.isPressed=!0,Qe=su(Qe),Fe=Pe=0,k.startX=k.x=Qe.clientX,k.startY=k.y=Qe.clientY,k._vx.reset(),k._vy.reset(),gi(F?a:ce,Gr[1],ve,D,!0),k.deltaX=k.deltaY=0,x&&x(k))},W=k.onRelease=function(Qe){if(!ze(Qe,1)){pi(F?a:ce,Gr[1],ve,!0);var Xe=!isNaN(k.y-k.startY),dt=k.isDragging,Ie=dt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),tt=su(Qe);!Ie&&Xe&&(k._vx.reset(),k._vy.reset(),u&&pe&&jn.delayedCall(.08,function(){if(Hu()-me>300&&!Qe.defaultPrevented){if(Qe.target.click)Qe.target.click();else if(ce.createEvent){var Je=ce.createEvent("MouseEvents");Je.initMouseEvent("click",!0,!0,Ui,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),Qe.target.dispatchEvent(Je)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&dt&&!F&&We.restart(!0),ue&&Ne(),p&&dt&&p(k),S&&S(k,Ie)}},$=function(Xe){return Xe.touches&&Xe.touches.length>1&&(k.isGesturing=!0)&&Q(Xe,k.isDragging)},oe=function(){return(k.isGesturing=!1)||N(k)},_e=function(Xe){if(!ze(Xe)){var dt=b(),Ie=q();ae((dt-le)*fe,(Ie-he)*fe,1),le=dt,he=Ie,f&&We.restart(!0)}},Ae=function(Xe){if(!ze(Xe)){Xe=su(Xe,u),de&&(Se=!0);var dt=(Xe.deltaMode===1?l:Xe.deltaMode===2?Ui.innerHeight:1)*g;ae(Xe.deltaX*dt,Xe.deltaY*dt,0),f&&!F&&We.restart(!0)}},rt=function(Xe){if(!ze(Xe)){var dt=Xe.clientX,Ie=Xe.clientY,tt=dt-k.x,Je=Ie-k.y;k.x=dt,k.y=Ie,L=!0,f&&We.restart(!0),(tt||Je)&&Le(tt,Je)}},yt=function(Xe){k.event=Xe,V(k)},Dt=function(Xe){k.event=Xe,K(k)},ct=function(Xe){return ze(Xe)||su(Xe,u)&&ie(k)};We=k._dc=jn.delayedCall(d||.25,Ke).pause(),k.deltaX=k.deltaY=0,k._vx=u1(0,50,!0),k._vy=u1(0,50,!0),k.scrollX=b,k.scrollY=q,k.isDragging=k.isGesturing=k.isPressed=!1,kA(this),k.enable=function(Qe){return k.isEnabled||(gi(ge?ce:a,"scroll",c1),o.indexOf("scroll")>=0&&gi(ge?ce:a,"scroll",_e,D,Te),o.indexOf("wheel")>=0&&gi(a,"wheel",Ae,D,Te),(o.indexOf("touch")>=0&&FA||o.indexOf("pointer")>=0)&&(gi(a,Gr[0],z,D,Te),gi(ce,Gr[2],W),gi(ce,Gr[3],W),pe&&gi(a,"click",Re,!0,!0),ie&&gi(a,"click",ct),Q&&gi(ce,"gesturestart",$),N&&gi(ce,"gestureend",oe),V&&gi(a,ua+"enter",yt),K&&gi(a,ua+"leave",Dt),G&&gi(a,ua+"move",rt)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=L=ue=!1,k._vx.reset(),k._vy.reset(),le=b(),he=q(),Qe&&Qe.type&&z(Qe),De&&De(k)),k},k.disable=function(){k.isEnabled&&(Bl.filter(function(Qe){return Qe!==k&&Gu(Qe.target)}).length||pi(ge?ce:a,"scroll",c1),k.isPressed&&(k._vx.reset(),k._vy.reset(),pi(F?a:ce,Gr[1],ve,!0)),pi(ge?ce:a,"scroll",_e,Te),pi(a,"wheel",Ae,Te),pi(a,Gr[0],z,Te),pi(ce,Gr[2],W),pi(ce,Gr[3],W),pi(a,"click",Re,!0),pi(a,"click",ct),pi(ce,"gesturestart",$),pi(ce,"gestureend",oe),pi(a,ua+"enter",yt),pi(a,ua+"leave",Dt),pi(a,ua+"move",rt),k.isEnabled=k.isPressed=k.isDragging=!1,Ze&&Ze(k))},k.kill=k.revert=function(){k.disable();var Qe=Bl.indexOf(k);Qe>=0&&Bl.splice(Qe,1),Is===k&&(Is=0)},Bl.push(k),F&&Gu(a)&&(Is=k),k.enable(v)},JF(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();_n.version="3.15.1";_n.create=function(t){return new _n(t)};_n.register=HA;_n.getAll=function(){return Bl.slice()};_n.getById=function(t){return Bl.filter(function(e){return e.vars.id===t})[0]};BA()&&jn.registerPlugin(_n);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e,Sl,mt,It,ir,Pt,fx,Pp,Nf,Wu,_u,Jd,ri,dm,f1,yi,KS,ZS,Ml,GA,k0,WA,_i,d1,jA,XA,to,h1,dx,oc,hx,Do,p1,B0,Qd=1,oi=Date.now,z0=oi(),Nr=0,xu=0,JS=function(e,n,i){var r=tr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=r,r?e.substr(6,e.length-7):e},QS=function(e,n){return n&&(!tr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},t8=function t(){return xu&&requestAnimationFrame(t)},eM=function(){return dm=1},tM=function(){return dm=0},ns=function(e){return e},yu=function(e){return Math.round(e*1e5)/1e5||0},YA=function(){return typeof window<"u"},$A=function(){return $e||YA()&&($e=window.gsap)&&$e.registerPlugin&&$e},Ga=function(e){return!!~fx.indexOf(e)},qA=function(e){return(e==="Height"?hx:mt["inner"+e])||ir["client"+e]||Pt["client"+e]},KA=function(e){return Lo(e,"getBoundingClientRect")||(Ga(e)?function(){return zh.width=mt.innerWidth,zh.height=hx,zh}:function(){return Rs(e)})},n8=function(e,n,i){var r=i.d,s=i.d2,o=i.a;return(o=Lo(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(n?qA(s):e["client"+s])||0}},i8=function(e,n){return!n||~fs.indexOf(e)?KA(e):function(){return zh}},ls=function(e,n){var i=n.s,r=n.d2,s=n.d,o=n.a;return Math.max(0,(i="scroll"+r)&&(o=Lo(e,i))?o()-KA(e)()[s]:Ga(e)?(ir[i]||Pt[i])-qA(r):e[i]-e["offset"+r])},eh=function(e,n){for(var i=0;i<Ml.length;i+=3)(!n||~n.indexOf(Ml[i+1]))&&e(Ml[i],Ml[i+1],Ml[i+2])},tr=function(e){return typeof e=="string"},ci=function(e){return typeof e=="function"},Su=function(e){return typeof e=="number"},fa=function(e){return typeof e=="object"},ou=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},vl=function(e,n,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},_l=Math.abs,ZA="left",JA="top",px="right",mx="bottom",La="width",Da="height",ju="Right",Xu="Left",Yu="Top",$u="Bottom",Sn="padding",Tr="margin",Ac="Width",gx="Height",An="px",Ar=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},r8=function(e){var n=Ar(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},nM=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},Rs=function(e,n){var i=n&&Ar(e)[f1]!=="matrix(1, 0, 0, 1, 0, 0)"&&$e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Lp=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},QA=function(e){var n=[],i=e.labels,r=e.duration(),s;for(s in i)n.push(i[s]/r);return n},s8=function(e){return function(n){return $e.utils.snap(QA(e),n)}},vx=function(e){var n=$e.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return n(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=n(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:n(s<0?r-e:r+e)}},o8=function(e){return function(n,i){return vx(QA(e))(n,i.direction)}},th=function(e,n,i,r){return i.split(",").forEach(function(s){return e(n,s,r)})},Fn=function(e,n,i,r,s){return e.addEventListener(n,i,{passive:!r,capture:!!s})},Un=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},nh=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},iM={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ih={toggleActions:"play",anticipatePin:0},Dp={top:0,left:0,center:.5,bottom:1,right:1},Fh=function(e,n){if(tr(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=n/100),e=e.substr(0,i-1)),e=r+(e in Dp?Dp[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},rh=function(e,n,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=It.createElement("div"),v=Ga(i)||Lo(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=v?Pt:i.tagName==="IFRAME"?i.contentDocument.body:i,_=e.indexOf("start")!==-1,x=_?c:u,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&v?"fixed;":"absolute;"),(m||l||!v)&&(S+=(r===Cn?px:mx)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=_,g.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),g.style.cssText=S,g.innerText=n||n===0?e+"-"+n:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Oh(g,0,r,_),g},Oh=function(e,n,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ac]=1,s["border"+a+Ac]=0,s[i.p]=n+"px",$e.set(e,s)},pt=[],m1={},If,rM=function(){return oi()-Nr>34&&(If||(If=requestAnimationFrame(Fs)))},xl=function(){(!_i||!_i.isPressed||_i.startX>Pt.clientWidth)&&(gt.cache++,_i?If||(If=requestAnimationFrame(Fs)):Fs(),Nr||ja("scrollStart"),Nr=oi())},V0=function(){XA=mt.innerWidth,jA=mt.innerHeight},Mu=function(e){gt.cache++,(e===!0||!ri&&!WA&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!d1||XA!==mt.innerWidth||Math.abs(mt.innerHeight-jA)>mt.innerHeight*.25))&&Pp.restart(!0)},Wa={},a8=[],eb=function t(){return Un(lt,"scrollEnd",t)||Ma(!0)},ja=function(e){return Wa[e]&&Wa[e].map(function(n){return n()})||a8},Qi=[],tb=function(e){for(var n=0;n<Qi.length;n+=5)(!e||Qi[n+4]&&Qi[n+4].query===e)&&(Qi[n].style.cssText=Qi[n+1],Qi[n].getBBox&&Qi[n].setAttribute("transform",Qi[n+2]||""),Qi[n+3].uncache=1)},nb=function(){gt.cache++,gt.forEach(function(e){return ci(e)&&(e.rec=e())})},_x=function(e,n){var i;for(yi=0;yi<pt.length;yi++)i=pt[yi],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));Do=!0,n&&tb(n),n||ja("revert")},ib=function(e,n){gt.cache++,(n||!Si)&&gt.forEach(function(i){return ci(i)&&i.cacheID++&&(i.rec=0)}),tr(e)&&(dx=e,mt.history.scrollRestoration!==e&&(mt.history.scrollRestoration=e))},Si,Na=0,sM,l8=function(){if(sM!==Na){var e=sM=Na;requestAnimationFrame(function(){return e===Na&&Ma(!0)})}},rb=function(){Pt.appendChild(oc),hx=!_i&&oc.offsetHeight||mt.innerHeight,Pt.removeChild(oc)},oM=function(e){return Nf(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},Ma=function(e,n){if(ir=It.documentElement,Pt=It.body,fx=[mt,It,ir,Pt],Nr&&!e&&!Do){Fn(lt,"scrollEnd",eb);return}rb(),Si=lt.isRefreshing=!0,Do||nb();var i=ja("refreshInit");GA&&lt.sort(),n||_x(),gt.forEach(function(r){ci(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),pt.slice(0).forEach(function(r){return r.refresh()}),Do=!1,pt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),p1=1,oM(!0),pt.forEach(function(r){var s=ls(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),oM(!1),p1=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),gt.forEach(function(r){ci(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ib(dx,1),Pp.pause(),Na++,Si=2,Fs(2),pt.forEach(function(r){return ci(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Si=lt.isRefreshing=!1,ja("refresh")},g1=0,kh=1,qu,Fs=function(e){if(e===2||!Si&&!Do){lt.isUpdating=!0,qu&&qu.update(0);var n=pt.length,i=oi(),r=i-z0>=50,s=n&&pt[0].scroll();if(kh=g1>s?-1:1,Si||(g1=s),r&&(Nr&&!dm&&i-Nr>200&&(Nr=0,ja("scrollEnd")),_u=z0,z0=i),kh<0){for(yi=n;yi-- >0;)pt[yi]&&pt[yi].update(0,r);kh=1}else for(yi=0;yi<n;yi++)pt[yi]&&pt[yi].update(0,r);lt.isUpdating=!1}If=0},v1=[ZA,JA,mx,px,Tr+$u,Tr+ju,Tr+Yu,Tr+Xu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bh=v1.concat([La,Da,"boxSizing","max"+Ac,"max"+gx,"position",Tr,Sn,Sn+Yu,Sn+ju,Sn+$u,Sn+Xu]),c8=function(e,n,i){ac(i);var r=e._gsap;if(r.spacerIsNative)ac(r.spacerState);else if(e._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(e,n),s.removeChild(n))}e._gsap.swappedIn=!1},H0=function(e,n,i,r){if(!e._gsap.swappedIn){for(var s=v1.length,o=n.style,a=e.style,l;s--;)l=v1[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[mx]=a[px]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[La]=Lp(e,Ti)+An,o[Da]=Lp(e,Cn)+An,o[Sn]=a[Tr]=a[JA]=a[ZA]="0",ac(r),a[La]=a["max"+Ac]=i[La],a[Da]=a["max"+gx]=i[Da],a[Sn]=i[Sn],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},u8=/([A-Z])/g,ac=function(e){if(e){var n=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||$e.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?n[s]=o:n[s]&&n.removeProperty(s.replace(u8,"-$1").toLowerCase())}},sh=function(e){for(var n=Bh.length,i=e.style,r=[],s=0;s<n;s++)r.push(Bh[s],i[Bh[s]]);return r.t=e,r},f8=function(e,n,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in n?n[a]:e[o+1]);return r.t=e.t,r},zh={left:0,top:0},aM=function(e,n,i,r,s,o,a,l,c,u,f,d,h,g){ci(e)&&(e=e(l)),tr(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Fh("0"+e.substr(3),i):0));var v=h?h.time():0,m,p,_;if(h&&h.seek(0),isNaN(e)||(e=+e),Su(e))h&&(e=$e.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&Oh(a,i,r,!0);else{ci(n)&&(n=n(l));var x=(e||"0").split(" "),S,E,C,M;_=Di(n,l)||Pt,S=Rs(_)||{},(!S||!S.left&&!S.top)&&Ar(_).display==="none"&&(M=_.style.display,_.style.display="block",S=Rs(_),M?_.style.display=M:_.style.removeProperty("display")),E=Fh(x[0],S[r.d]),C=Fh(x[1]||"0",i),e=S[r.p]-c[r.p]-u+E+s-C,a&&Oh(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var A=e+i,U=o._isStart;m="scroll"+r.d2,Oh(o,A,r,U&&A>20||!U&&(f?Math.max(Pt[m],ir[m]):o.parentNode[m])<=A+1),f&&(c=Rs(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+An))}return h&&_&&(m=Rs(_),h.seek(d),p=Rs(_),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(v),h?e:Math.round(e)},d8=/(webkit|moz|length|cssText|inset)/i,lM=function(e,n,i,r){if(e.parentNode!==n){var s=e.style,o,a;if(n===Pt){e._stOrig=s.cssText,a=Ar(e);for(o in a)!+o&&!d8.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;$e.core.getCache(e).uncache=1,n.appendChild(e)}},sb=function(e,n,i){var r=n,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},oh=function(e,n,i){var r={};r[n.p]="+="+i,$e.set(e,r)},cM=function(e,n){var i=Bo(e,n),r="_scroll"+n.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||i();var v=sb(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return v(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){gt.cache++,o.tween&&Fs()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=$e.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Fn(e,"wheel",i.wheelHandler),lt.isTouch&&Fn(e,"touchmove",i.wheelHandler),s},lt=function(){function t(n,i){Sl||t.register($e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),h1(this),this.init(n,i)}var e=t.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xu){this.update=this.refresh=this.kill=ns;return}i=nM(tr(i)||Su(i)||i.nodeType?{trigger:i}:i,ih);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,_=s.onSnapComplete,x=s.once,S=s.snap,E=s.pinReparent,C=s.pinSpacer,M=s.containerAnimation,A=s.fastScrollEnd,U=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ti:Cn,T=!f&&f!==0,I=Di(i.scroller||mt),B=$e.core.getCache(I),V=Ga(I),K=("pinType"in i?i.pinType:Lo(I,"pinType")||V&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=T&&i.toggleActions.split(" "),F="markers"in i?i.markers:ih.markers,Q=V?0:parseFloat(Ar(I)["border"+y.p2+Ac])||0,N=this,de=i.onRefreshInit&&function(){return i.onRefreshInit(N)},De=n8(I,V,y),Ze=i8(I,V),ie=0,fe=0,Te=0,pe=Bo(I,y),Oe,Be,qe,We,ue,L,Se,Me,ye,k,Fe,Pe,D,b,q,le,he,se,ge,ce,Ee,He,me,Re,ze,Ke,Ne,ae,Le,ve,z,W,$,oe,_e,Ae,rt,yt,Dt;if(N._startClamp=N._endClamp=!1,N._dir=y,m*=45,N.scroller=I,N.scroll=M?M.time.bind(M):pe,We=pe(),Do&&pe.rec==null&&(pe.rec=We),N.vars=i,r=r||i.animation,"refreshPriority"in i&&(GA=1,i.refreshPriority===-9999&&(qu=N)),B.tweenScroll=B.tweenScroll||{top:cM(I,Cn),left:cM(I,Ti)},N.tweenTo=Oe=B.tweenScroll[y.p],N.scrubDuration=function(Ie){$=Su(Ie)&&Ie,$?W?W.duration(Ie):W=$e.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return p&&p(N)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(f),ve=0,l||(l=r.vars.id)),S&&((!fa(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Pt.style&&$e.set(V?[Pt,ir]:I,{scrollBehavior:"auto"}),gt.forEach(function(Ie){return ci(Ie)&&Ie.target===(V?It.scrollingElement||ir:I)&&(Ie.smooth=!1)}),qe=ci(S.snapTo)?S.snapTo:S.snapTo==="labels"?s8(r):S.snapTo==="labelsDirectional"?o8(r):S.directional!==!1?function(Ie,tt){return vx(S.snapTo)(Ie,oi()-fe<500?0:tt.direction)}:$e.utils.snap(S.snapTo),oe=S.duration||{min:.1,max:2},oe=fa(oe)?Wu(oe.min,oe.max):Wu(oe,oe),_e=$e.delayedCall(S.delay||$/2||.1,function(){var Ie=pe(),tt=oi()-fe<500,Je=Oe.tween;if((tt||Math.abs(N.getVelocity())<10)&&!Je&&!dm&&ie!==Ie){var nt=(Ie-L)/b,St=r&&!T?r.totalProgress():nt,it=tt?0:(St-z)/(oi()-_u)*1e3||0,wt=$e.utils.clamp(-nt,1-nt,_l(it/2)*it/.185),Ot=nt+(S.inertia===!1?0:wt),kt,Rt,Et=S,Dn=Et.onStart,Nt=Et.onInterrupt,R=Et.onComplete;if(kt=qe(Ot,N),Su(kt)||(kt=Ot),Rt=Math.max(0,Math.round(L+kt*b)),Ie<=Se&&Ie>=L&&Rt!==Ie){if(Je&&!Je._initted&&Je.data<=_l(Rt-Ie))return;S.inertia===!1&&(wt=kt-nt),Oe(Rt,{duration:oe(_l(Math.max(_l(Ot-St),_l(kt-St))*.185/it/.05||0)),ease:S.ease||"power3",data:_l(Rt-Ie),onInterrupt:function(){return _e.restart(!0)&&Nt&&vl(N,Nt)},onComplete:function(){N.update(),ie=pe(),r&&!T&&(W?W.resetTo("totalProgress",kt,r._tTime/r._tDur):r.progress(kt)),ve=z=r&&!T?r.totalProgress():N.progress,_&&_(N),R&&vl(N,R)}},Ie,wt*b,Rt-Ie-wt*b),Dn&&vl(N,Dn,Oe.tween)}}else N.isActive&&ie!==Ie&&_e.restart(!0)}).pause()),l&&(m1[l]=N),d=N.trigger=Di(d||h!==!0&&h),Dt=d&&d._gsap&&d._gsap.stRevert,Dt&&(Dt=Dt(N)),h=h===!0?d:Di(h),tr(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Tr||(g=!g&&h.parentNode&&h.parentNode.style&&Ar(h.parentNode).display==="flex"?!1:Sn),N.pin=h,Be=$e.core.getCache(h),Be.spacer?q=Be.pinState:(C&&(C=Di(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Be.spacerIsNative=!!C,C&&(Be.spacerState=sh(C))),Be.spacer=se=C||It.createElement("div"),se.classList.add("pin-spacer"),l&&se.classList.add("pin-spacer-"+l),Be.pinState=q=sh(h)),i.force3D!==!1&&$e.set(h,{force3D:!0}),N.spacer=se=Be.spacer,Le=Ar(h),Re=Le[g+y.os2],ce=$e.getProperty(h),Ee=$e.quickSetter(h,y.a,An),H0(h,se,Le),he=sh(h)),F){Pe=fa(F)?nM(F,iM):iM,k=rh("scroller-start",l,I,y,Pe,0),Fe=rh("scroller-end",l,I,y,Pe,0,k),ge=k["offset"+y.op.d2];var ct=Di(Lo(I,"content")||I);Me=this.markerStart=rh("start",l,ct,y,Pe,ge,0,M),ye=this.markerEnd=rh("end",l,ct,y,Pe,ge,0,M),M&&(yt=$e.quickSetter([Me,ye],y.a,An)),!K&&!(fs.length&&Lo(I,"fixedMarkers")===!0)&&(r8(V?Pt:I),$e.set([k,Fe],{force3D:!0}),Ke=$e.quickSetter(k,y.a,An),ae=$e.quickSetter(Fe,y.a,An))}if(M){var Qe=M.vars.onUpdate,Xe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){N.update(0,0,1),Qe&&Qe.apply(M,Xe||[])})}if(N.previous=function(){return pt[pt.indexOf(N)-1]},N.next=function(){return pt[pt.indexOf(N)+1]},N.revert=function(Ie,tt){if(!tt)return N.kill(!0);var Je=Ie!==!1||!N.enabled,nt=ri;Je!==N.isReverted&&(Je&&(Ae=Math.max(pe(),N.scroll.rec||0),Te=N.progress,rt=r&&r.progress()),Me&&[Me,ye,k,Fe].forEach(function(St){return St.style.display=Je?"none":"block"}),Je&&(ri=N,N.update(Je)),h&&(!E||!N.isActive)&&(Je?c8(h,se,q):H0(h,se,Ar(h),ze)),Je||N.update(Je),ri=nt,N.isReverted=Je)},N.refresh=function(Ie,tt,Je,nt){if(!((ri||!N.enabled)&&!tt)){if(h&&Ie&&Nr){Fn(t,"scrollEnd",eb);return}!Si&&de&&de(N),ri=N,Oe.tween&&!Je&&(Oe.tween.kill(),Oe.tween=0),W&&W.pause(),v&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ye){return Ye.vars.immediateRender&&Ye.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var St=De(),it=Ze(),wt=M?M.duration():ls(I,y),Ot=b<=.01||!b,kt=0,Rt=nt||0,Et=fa(Je)?Je.end:i.end,Dn=i.endTrigger||d,Nt=fa(Je)?Je.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),R=N.pinnedContainer=i.pinnedContainer&&Di(i.pinnedContainer,N),j=d&&Math.max(0,pt.indexOf(N))||0,Z=j,ee,w,O,Y,J,te,xe,ne,we,be,et,Tt,Wt;for(F&&fa(Je)&&(Tt=$e.getProperty(k,y.p),Wt=$e.getProperty(Fe,y.p));Z-- >0;)te=pt[Z],te.end||te.refresh(0,1)||(ri=N),xe=te.pin,xe&&(xe===d||xe===h||xe===R)&&!te.isReverted&&(be||(be=[]),be.unshift(te),te.revert(!0,!0)),te!==pt[Z]&&(j--,Z--);for(ci(Nt)&&(Nt=Nt(N)),Nt=JS(Nt,"start",N),L=aM(Nt,d,St,y,pe(),Me,k,N,it,Q,K,wt,M,N._startClamp&&"_startClamp")||(h?-.001:0),ci(Et)&&(Et=Et(N)),tr(Et)&&!Et.indexOf("+=")&&(~Et.indexOf(" ")?Et=(tr(Nt)?Nt.split(" ")[0]:"")+Et:(kt=Fh(Et.substr(2),St),Et=tr(Nt)?Nt:(M?$e.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,L):L)+kt,Dn=d)),Et=JS(Et,"end",N),Se=Math.max(L,aM(Et||(Dn?"100% 0":wt),Dn,St,y,pe()+kt,ye,Fe,N,it,Q,K,wt,M,N._endClamp&&"_endClamp"))||-.001,kt=0,Z=j;Z--;)te=pt[Z]||{},xe=te.pin,xe&&te.start-te._pinPush<=L&&!M&&te.end>0&&(ee=te.end-(N._startClamp?Math.max(0,te.start):te.start),(xe===d&&te.start-te._pinPush<L||xe===R)&&isNaN(Nt)&&(kt+=ee*(1-te.progress)),xe===h&&(Rt+=ee));if(L+=kt,Se+=kt,N._startClamp&&(N._startClamp+=kt),N._endClamp&&!Si&&(N._endClamp=Se||-.001,Se=Math.min(Se,ls(I,y))),b=Se-L||(L-=.01)&&.001,Ot&&(Te=$e.utils.clamp(0,1,$e.utils.normalize(L,Se,Ae))),N._pinPush=Rt,Me&&kt&&(ee={},ee[y.a]="+="+kt,R&&(ee[y.p]="-="+pe()),$e.set([Me,ye],ee)),h&&!(p1&&N.end>=ls(I,y)))ee=Ar(h),Y=y===Cn,O=pe(),He=parseFloat(ce(y.a))+Rt,!wt&&Se>1&&(et=(V?It.scrollingElement||ir:I).style,et={style:et,value:et["overflow"+y.a.toUpperCase()]},V&&Ar(Pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(et.style["overflow"+y.a.toUpperCase()]="scroll")),H0(h,se,ee),he=sh(h),w=Rs(h,!0),ne=K&&Bo(I,Y?Ti:Cn)(),g?(ze=[g+y.os2,b+Rt+An],ze.t=se,Z=g===Sn?Lp(h,y)+b+Rt:0,Z&&(ze.push(y.d,Z+An),se.style.flexBasis!=="auto"&&(se.style.flexBasis=Z+An)),ac(ze),R&&pt.forEach(function(Ye){Ye.pin===R&&Ye.vars.pinSpacing!==!1&&(Ye._subPinOffset=!0)}),K&&pe(Ae)):(Z=Lp(h,y),Z&&se.style.flexBasis!=="auto"&&(se.style.flexBasis=Z+An)),K&&(J={top:w.top+(Y?O-L:ne)+An,left:w.left+(Y?ne:O-L)+An,boxSizing:"border-box",position:"fixed"},J[La]=J["max"+Ac]=Math.ceil(w.width)+An,J[Da]=J["max"+gx]=Math.ceil(w.height)+An,J[Tr]=J[Tr+Yu]=J[Tr+ju]=J[Tr+$u]=J[Tr+Xu]="0",J[Sn]=ee[Sn],J[Sn+Yu]=ee[Sn+Yu],J[Sn+ju]=ee[Sn+ju],J[Sn+$u]=ee[Sn+$u],J[Sn+Xu]=ee[Sn+Xu],le=f8(q,J,E),Si&&pe(0)),r?(we=r._initted,k0(1),r.render(r.duration(),!0,!0),me=ce(y.a)-He+b+Rt,Ne=Math.abs(b-me)>1,K&&Ne&&le.splice(le.length-2,2),r.render(0,!0,!0),we||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),k0(0)):me=b,et&&(et.value?et.style["overflow"+y.a.toUpperCase()]=et.value:et.style.removeProperty("overflow-"+y.a));else if(d&&pe()&&!M)for(w=d.parentNode;w&&w!==Pt;)w._pinOffset&&(L-=w._pinOffset,Se-=w._pinOffset),w=w.parentNode;be&&be.forEach(function(Ye){return Ye.revert(!1,!0)}),N.start=L,N.end=Se,We=ue=Si?Ae:pe(),!M&&!Si&&!Do&&(We<Ae&&pe(Ae),N.scroll.rec=0),N.revert(!1,!0),fe=oi(),_e&&(ie=-1,_e.restart(!0)),ri=0,r&&T&&(r._initted||rt)&&r.progress()!==rt&&r.progress(rt||0,!0).render(r.time(),!0,!0),(Ot||Te!==N.progress||M||v||r&&!r._initted)&&(r&&!T&&(r._initted||Te||r.vars.immediateRender!==!1)&&r.totalProgress(M&&L<-.001&&!Te?$e.utils.normalize(L,Se,0):Te,!0),N.progress=Ot||(We-L)/b===Te?0:Te),h&&g&&(se._pinOffset=Math.round(N.progress*me)),W&&W.invalidate(),isNaN(Tt)||(Tt-=$e.getProperty(k,y.p),Wt-=$e.getProperty(Fe,y.p),oh(k,y,Tt),oh(Me,y,Tt-(nt||0)),oh(Fe,y,Wt),oh(ye,y,Wt-(nt||0))),Ot&&!Si&&N.update(),u&&!Si&&!D&&(D=!0,u(N),D=!1)}},N.getVelocity=function(){return(pe()-ue)/(oi()-_u)*1e3||0},N.endAnimation=function(){ou(N.callbackAnimation),r&&(W?W.progress(1):r.paused()?T||ou(r,N.direction<0,1):ou(r,r.reversed()))},N.labelToScroll=function(Ie){return r&&r.labels&&(L||N.refresh()||L)+r.labels[Ie]/r.duration()*b||0},N.getTrailing=function(Ie){var tt=pt.indexOf(N),Je=N.direction>0?pt.slice(0,tt).reverse():pt.slice(tt+1);return(tr(Ie)?Je.filter(function(nt){return nt.vars.preventOverlaps===Ie}):Je).filter(function(nt){return N.direction>0?nt.end<=L:nt.start>=Se})},N.update=function(Ie,tt,Je){if(!(M&&!Je&&!Ie)){var nt=Si===!0?Ae:N.scroll(),St=Ie?0:(nt-L)/b,it=St<0?0:St>1?1:St||0,wt=N.progress,Ot,kt,Rt,Et,Dn,Nt,R,j;if(tt&&(ue=We,We=M?pe():nt,S&&(z=ve,ve=r&&!T?r.totalProgress():it)),m&&h&&!ri&&!Qd&&Nr&&(!it&&L<nt+(nt-ue)/(oi()-_u)*m?it=1e-4:it===1&&Se>nt+(nt-ue)/(oi()-_u)*m&&(it=.9999)),it!==wt&&N.enabled){if(Ot=N.isActive=!!it&&it<1,kt=!!wt&&wt<1,Nt=Ot!==kt,Dn=Nt||!!it!=!!wt,N.direction=it>wt?1:-1,N.progress=it,Dn&&!ri&&(Rt=it&&!wt?0:it===1?1:wt===1?2:3,T&&(Et=!Nt&&X[Rt+1]!=="none"&&X[Rt+1]||X[Rt],j=r&&(Et==="complete"||Et==="reset"||Et in r))),U&&(Nt||j)&&(j||f||!r)&&(ci(U)?U(N):N.getTrailing(U).forEach(function(O){return O.endAnimation()})),T||(W&&!ri&&!Qd?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",it,r._tTime/r._tDur):(W.vars.totalProgress=it,W.invalidate().restart())):r&&r.totalProgress(it,!!(ri&&(fe||Ie)))),h){if(Ie&&g&&(se.style[g+y.os2]=Re),!K)Ee(yu(He+me*it));else if(Dn){if(R=!Ie&&it>wt&&Se+1>nt&&nt+1>=ls(I,y),E)if(!Ie&&(Ot||R)){var Z=Rs(h,!0),ee=nt-L;lM(h,Pt,Z.top+(y===Cn?ee:0)+An,Z.left+(y===Cn?0:ee)+An)}else lM(h,se);ac(Ot||R?le:he),Ne&&it<1&&Ot||Ee(He+(it===1&&!R?me:0))}}S&&!Oe.tween&&!ri&&!Qd&&_e.restart(!0),a&&(Nt||x&&it&&(it<1||!B0))&&Nf(a.targets).forEach(function(O){return O.classList[Ot||x?"add":"remove"](a.className)}),o&&!T&&!Ie&&o(N),Dn&&!ri?(T&&(j&&(Et==="complete"?r.pause().totalProgress(1):Et==="reset"?r.restart(!0).pause():Et==="restart"?r.restart(!0):r[Et]()),o&&o(N)),(Nt||!B0)&&(c&&Nt&&vl(N,c),G[Rt]&&vl(N,G[Rt]),x&&(it===1?N.kill(!1,1):G[Rt]=0),Nt||(Rt=it===1?1:3,G[Rt]&&vl(N,G[Rt]))),A&&!Ot&&Math.abs(N.getVelocity())>(Su(A)?A:2500)&&(ou(N.callbackAnimation),W?W.progress(1):ou(r,Et==="reverse"?1:!it,1))):T&&o&&!ri&&o(N)}if(ae){var w=M?nt/M.duration()*(M._caScrollDist||0):nt;Ke(w+(k._isFlipped?1:0)),ae(w)}yt&&yt(-nt/M.duration()*(M._caScrollDist||0))}},N.enable=function(Ie,tt){N.enabled||(N.enabled=!0,Fn(I,"resize",Mu),V||Fn(I,"scroll",xl),de&&Fn(t,"refreshInit",de),Ie!==!1&&(N.progress=Te=0,We=ue=ie=pe()),tt!==!1&&N.refresh())},N.getTween=function(Ie){return Ie&&Oe?Oe.tween:W},N.setPositions=function(Ie,tt,Je,nt){if(M){var St=M.scrollTrigger,it=M.duration(),wt=St.end-St.start;Ie=St.start+wt*Ie/it,tt=St.start+wt*tt/it}N.refresh(!1,!1,{start:QS(Ie,Je&&!!N._startClamp),end:QS(tt,Je&&!!N._endClamp)},nt),N.update()},N.adjustPinSpacing=function(Ie){if(ze&&Ie){var tt=ze.indexOf(y.d)+1;ze[tt]=parseFloat(ze[tt])+Ie+An,ze[1]=parseFloat(ze[1])+Ie+An,ac(ze)}},N.disable=function(Ie,tt){if(Ie!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,tt||W&&W.pause(),Ae=0,Be&&(Be.uncache=1),de&&Un(t,"refreshInit",de),_e&&(_e.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!V)){for(var Je=pt.length;Je--;)if(pt[Je].scroller===I&&pt[Je]!==N)return;Un(I,"resize",Mu),V||Un(I,"scroll",xl)}},N.kill=function(Ie,tt){N.disable(Ie,tt),W&&!tt&&W.kill(),l&&delete m1[l];var Je=pt.indexOf(N);Je>=0&&pt.splice(Je,1),Je===yi&&kh>0&&yi--,Je=0,pt.forEach(function(nt){return nt.scroller===N.scroller&&(Je=1)}),Je||Si||Do||(N.scroll.rec=0),r&&(r.scrollTrigger=null,Ie&&r.revert({kill:!1}),tt||r.kill()),Me&&[Me,ye,k,Fe].forEach(function(nt){return nt.parentNode&&nt.parentNode.removeChild(nt)}),qu===N&&(qu=0),h&&(Be&&(Be.uncache=1),Je=0,pt.forEach(function(nt){return nt.pin===h&&Je++}),Je||(Be.spacer=0)),i.onKill&&i.onKill(N)},pt.push(N),N.enable(!1,!1),Dt&&Dt(N),r&&r.add&&!b){var dt=N.update;N.update=function(){N.update=dt,gt.cache++,L||Se||N.refresh()},$e.delayedCall(.01,N.update),b=.01,L=Se=0}else N.refresh();h&&l8()},t.register=function(i){return Sl||($e=i||$A(),YA()&&window.document&&t.enable(),Sl=xu),Sl},t.defaults=function(i){if(i)for(var r in i)ih[r]=i[r];return ih},t.disable=function(i,r){xu=0,pt.forEach(function(o){return o[r?"kill":"disable"](i)}),Un(mt,"wheel",xl),Un(It,"scroll",xl),clearInterval(Jd),Un(It,"touchcancel",ns),Un(Pt,"touchstart",ns),th(Un,It,"pointerdown,touchstart,mousedown",eM),th(Un,It,"pointerup,touchend,mouseup",tM),Pp.kill(),eh(Un);for(var s=0;s<gt.length;s+=3)nh(Un,gt[s],gt[s+1]),nh(Un,gt[s],gt[s+2])},t.enable=function(){if(mt=window,It=document,ir=It.documentElement,Pt=It.body,$e){if(Nf=$e.utils.toArray,Wu=$e.utils.clamp,h1=$e.core.context||ns,k0=$e.core.suppressOverwrites||ns,dx=mt.history.scrollRestoration||"auto",g1=mt.pageYOffset||0,$e.core.globals("ScrollTrigger",t),Pt){xu=1,oc=document.createElement("div"),oc.style.height="100vh",oc.style.position="absolute",rb(),t8(),_n.register($e),t.isTouch=_n.isTouch,to=_n.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),d1=_n.isTouch===1,Fn(mt,"wheel",xl),fx=[mt,It,ir,Pt],$e.matchMedia?(t.matchMedia=function(u){var f=$e.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},$e.addEventListener("matchMediaInit",function(){nb(),_x()}),$e.addEventListener("matchMediaRevert",function(){return tb()}),$e.addEventListener("matchMedia",function(){Ma(0,1),ja("matchMedia")}),$e.matchMedia().add("(orientation: portrait)",function(){return V0(),V0})):console.warn("Requires GSAP 3.11.0 or later"),V0(),Fn(It,"scroll",xl);var i=Pt.hasAttribute("style"),r=Pt.style,s=r.borderTopStyle,o=$e.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Rs(Pt),Cn.m=Math.round(a.top+Cn.sc())||0,Ti.m=Math.round(a.left+Ti.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Pt.setAttribute("style",""),Pt.removeAttribute("style")),Jd=setInterval(rM,250),$e.delayedCall(.5,function(){return Qd=0}),Fn(It,"touchcancel",ns),Fn(Pt,"touchstart",ns),th(Fn,It,"pointerdown,touchstart,mousedown",eM),th(Fn,It,"pointerup,touchend,mouseup",tM),f1=$e.utils.checkPrefix("transform"),Bh.push(f1),Sl=oi(),Pp=$e.delayedCall(.2,Ma).pause(),Ml=[It,"visibilitychange",function(){var u=mt.innerWidth,f=mt.innerHeight;It.hidden?(KS=u,ZS=f):(KS!==u||ZS!==f)&&Mu()},It,"DOMContentLoaded",Ma,mt,"load",Ma,mt,"resize",Mu],eh(Fn),pt.forEach(function(u){return u.enable(0,1)}),l=0;l<gt.length;l+=3)nh(Un,gt[l],gt[l+1]),nh(Un,gt[l],gt[l+2])}else if(It){var c=function u(){t.enable(),It.removeEventListener("DOMContentLoaded",u)};It.addEventListener("DOMContentLoaded",c)}}},t.config=function(i){"limitCallbacks"in i&&(B0=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Jd)||(Jd=r)&&setInterval(rM,r),"ignoreMobileResize"in i&&(d1=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(eh(Un)||eh(Fn,i.autoRefreshEvents||"none"),WA=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,r){var s=Di(i),o=gt.indexOf(s),a=Ga(s);~o&&gt.splice(o,a?6:2),r&&(a?fs.unshift(mt,r,Pt,r,ir,r):fs.unshift(s,r))},t.clearMatchMedia=function(i){pt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},t.isInViewport=function(i,r,s){var o=(tr(i)?Di(i):i).getBoundingClientRect(),a=o[s?La:Da]*r||0;return s?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},t.positionInViewport=function(i,r,s){tr(i)&&(i=Di(i));var o=i.getBoundingClientRect(),a=o[s?La:Da],l=r==null?a/2:r in Dp?Dp[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},t.killAll=function(i){if(pt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Wa.killAll||[];Wa={},r.forEach(function(s){return s()})}},t}();lt.version="3.15.1";lt.saveStyles=function(t){return t?Nf(t).forEach(function(e){if(e&&e.style){var n=Qi.indexOf(e);n>=0&&Qi.splice(n,5),Qi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),$e.core.getCache(e),h1())}}):Qi};lt.revert=function(t,e){return _x(!t,e)};lt.create=function(t,e){return new lt(t,e)};lt.refresh=function(t){return t?Mu(!0):(Sl||lt.register())&&Ma(!0)};lt.update=function(t){return++gt.cache&&Fs(t===!0?2:0)};lt.clearScrollMemory=ib;lt.maxScroll=function(t,e){return ls(t,e?Ti:Cn)};lt.getScrollFunc=function(t,e){return Bo(Di(t),e?Ti:Cn)};lt.getById=function(t){return m1[t]};lt.getAll=function(){return pt.filter(function(t){return t.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!Nr};lt.snapDirectional=vx;lt.addEventListener=function(t,e){var n=Wa[t]||(Wa[t]=[]);~n.indexOf(e)||n.push(e)};lt.removeEventListener=function(t,e){var n=Wa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};lt.batch=function(t,e){var n=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=$e.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&ci(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ci(s)&&(s=s(),Fn(lt,"refresh",function(){return s=e.batchMax()})),Nf(t).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,n.push(lt.create(c))}),n};var uM=function(e,n,i,r){return n>r?e(r):n<0&&e(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},G0=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(_n.isTouch?" pinch-zoom":""):"none",e===ir&&t(Pt,n)},ah={auto:1,scroll:1},h8=function(e){var n=e.event,i=e.target,r=e.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,o=s._gsap||$e.core.getCache(s),a=oi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ah[(l=Ar(s)).overflowY]||ah[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ga(s)&&(ah[(l=Ar(s)).overflowY]||ah[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},ob=function(e,n,i,r){return _n.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&h8,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Fn(It,_n.eventTypes[0],dM,!1,!0)},onDisable:function(){return Un(It,_n.eventTypes[0],dM,!0)}})},p8=/(input|label|select|textarea)/i,fM,dM=function(e){var n=p8.test(e.target.tagName);(n||fM)&&(e._gsapAllow=!0,fM=n)},m8=function(e){fa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,r=n.momentum,s=n.allowNestedScroll,o=n.onRelease,a,l,c=Di(e.target)||ir,u=$e.core.globals().ScrollSmoother,f=u&&u.get(),d=to&&(e.content&&Di(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Bo(c,Cn),g=Bo(c,Ti),v=1,m=(_n.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,p=0,_=ci(r)?function(){return r(a)}:function(){return r||2.8},x,S,E=ob(c,e.type,!0,s),C=function(){return S=!1},M=ns,A=ns,U=function(){l=ls(c,Cn),A=Wu(to?1:0,l),i&&(M=Wu(0,ls(c,Ti))),x=Na},y=function(){d._gsap.y=yu(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},T=function(){if(S){requestAnimationFrame(C);var F=yu(a.deltaY/2),Q=A(h.v-F);if(d&&Q!==h.v+h.offset){h.offset=Q-h.v;var N=yu((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",d._gsap.y=N+"px",h.cacheID=gt.cache,Fs()}return!0}h.offset&&y(),S=!0},I,B,V,K,G=function(){U(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&$e.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return to&&X.type==="touchmove"&&T()||v>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=v;v=yu((mt.visualViewport&&mt.visualViewport.scale||1)/m),I.pause(),X!==v&&G0(c,v>1.01?!0:i?!1:"x"),B=g(),V=h(),U(),x=Na},e.onRelease=e.onGestureStart=function(X,F){if(h.offset&&y(),!F)K.restart(!0);else{gt.cache++;var Q=_(),N,de;i&&(N=g(),de=N+Q*.05*-X.velocityX/.227,Q*=uM(g,N,de,ls(c,Ti)),I.vars.scrollX=M(de)),N=h(),de=N+Q*.05*-X.velocityY/.227,Q*=uM(h,N,de,ls(c,Cn)),I.vars.scrollY=A(de),I.invalidate().duration(Q).play(.01),(to&&I.vars.scrollY>=l||N>=l-1)&&$e.to({},{onUpdate:G,duration:Q})}o&&o(X)},e.onWheel=function(){I._ts&&I.pause(),oi()-p>1e3&&(x=0,p=oi())},e.onChange=function(X,F,Q,N,de){if(Na!==x&&U(),F&&i&&g(M(N[2]===F?B+(X.startX-X.x):g()+F-N[1])),Q){h.offset&&y();var De=de[2]===Q,Ze=De?V+X.startY-X.y:h()+Q-de[1],ie=A(Ze);De&&Ze!==ie&&(V+=ie-Ze),h(ie)}(Q||F)&&Fs()},e.onEnable=function(){G0(c,i?!1:"x"),lt.addEventListener("refresh",G),Fn(mt,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){G0(c,!0),Un(mt,"resize",G),lt.removeEventListener("refresh",G),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new _n(e),a.iOS=to,to&&!h()&&h(1),to&&$e.ticker.add(ns),K=a._dc,I=$e.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sb(h,h(),function(){return I.pause()})},onUpdate:Fs,onComplete:K.vars.onComplete}),a};lt.sort=function(t){if(ci(t))return pt.sort(t);var e=mt.pageYOffset||0;return lt.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+mt.innerHeight}),pt.sort(t||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};lt.observe=function(t){return new _n(t)};lt.normalizeScroll=function(t){if(typeof t>"u")return _i;if(t===!0&&_i)return _i.enable();if(t===!1){_i&&_i.kill(),_i=t;return}var e=t instanceof _n?t:m8(t);return _i&&_i.target===e.target&&_i.kill(),Ga(e.target)&&(_i=e),e};lt.core={_getVelocityProp:u1,_inputObserver:ob,_scrollers:gt,_proxies:fs,bridge:{ss:function(){Nr||ja("scrollStart"),Nr=oi()},ref:function(){return ri}}};$A()&&$e.registerPlugin(lt);const ra={email:"ojha55926@gmail.com",phone:"+91 9031864978, +91 9769457670",whatsapp:{number:"+91 9031864978",url:"https://wa.me/919031864978?text=Hi%20Shubham%20Ojha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."}},g8=[{id:"github",label:"GitHub",href:"https://github.com/Shubham9031"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/shubham-ojha-932500279"}],wa=[{"id": "gps-tracking", "number": "01", "kind": "software", "title": "GPS Tracking System", "subtitle": "Real-Time Fleet & Geolocation", "category": "Python Full-Stack", "poster": "./assets/thumbnails/gps-tracking-1.jpg", "description": "Real-time vehicle and fleet GPS tracking system with live location streaming, interactive route playback, geofencing boundary alerts, and telemetry analytics.", "tags": ["Python", "FastAPI", "React", "WebSockets", "PostgreSQL"], "badge": "Live Project", "liveUrl": "https://freetrack.in", "repoUrl": "https://github.com/Shubham9031/GPS_Tracking"}, {"id": "rht-monitor", "number": "02", "kind": "software", "title": "RHT Monitor", "subtitle": "IoT Environmental Telemetry", "category": "Python Full-Stack", "poster": "./assets/thumbnails/rht-monitor-1.jpg", "description": "Industrial Relative Humidity & Temperature (RHT) monitoring dashboard capturing real-time telemetry with automated alerts and time-series reports.", "tags": ["Python", "Flask", "IoT Sensors", "MQTT", "Chart.js"], "badge": "Live Project", "liveUrl": "http://chaukas.in:4480", "repoUrl": "https://github.com/Shubham9031/Real-Time-Humidity-Temperature"}, {"id": "school-management-system", "number": "03", "kind": "software", "title": "School Management System", "subtitle": "EduPulse Multi-Tenant Platform", "category": "MERN Full-Stack", "poster": "./assets/thumbnails/school-management-1.jpg", "description": "EduPulse is a secure, multi-tenant School Management System built with React, Node.js, and MongoDB. Features role-based portals for Admins, Teachers, Students & Parents, automated fee tracking, attendance, exams with PDF report cards, and an AI chatbot.", "tags": ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/school-management-system"}, {"id": "job-portal", "number": "04", "kind": "software", "title": "Job Portal", "subtitle": "Career & Recruitment Platform", "category": "MERN Full-Stack", "poster": "./assets/thumbnails/job-portal-1.jpg", "description": "A comprehensive full-stack Job Portal web application built with the MERN stack. Features role-based JWT authentication for job seekers and employers, seamless job posting, real-time application management, and Cloudinary media upload.", "tags": ["MongoDB", "Express.js", "React", "Node.js", "Redux"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/Job_Portal"}, {"id": "hospital-management-system", "number": "05", "kind": "software", "title": "Hospital Management System", "subtitle": "Apollo Care Healthcare Hub", "category": "MERN Full-Stack", "poster": "./assets/thumbnails/hospital-management-1.jpg", "description": "Apollo Care is a full-stack Hospital Management System built with React, Node.js, Express, and MongoDB. It features 14 modules including real-time OPD token queuing, IPD bed allocation, digital prescriptions, pharmacy inventory, lab reports, RBAC, and automated billing with insurance support.", "tags": ["React", "Node.js", "Express", "MongoDB", "RBAC"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/Hospital_Management_System"}, {"id": "hostel-management-system", "number": "06", "kind": "software", "title": "Hostel Management System", "subtitle": "Resident & Outpass Portal", "category": "Python Full-Stack", "poster": "./assets/thumbnails/hostel-management-1.jpg", "description": "A full-stack Hostel Management System built with Python, Flask, and MongoDB. It features role-based access for Admin, Warden, and Students, managing room allocations, fee payments with printable receipts, mess menus, complaint resolution, and outpass tracking.", "tags": ["Python", "Flask", "MongoDB", "Bootstrap", "Analytics"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/Hostel-Management-System"}, {"id": "hotel-management-system", "number": "07", "kind": "software", "title": "Hotel Management System", "subtitle": "Hospitality & Reservation Suite", "category": "Python Full-Stack", "poster": "./assets/thumbnails/hotel-management-1.jpg", "description": "A full-stack Hotel Management System built with Python, Flask, and MongoDB. Features role-based access (Admin, Receptionist, Guest), conflict-free room reservations, real-time check-in/out, automated housekeeping, GST invoices with payment tracking, and live analytics dashboards.", "tags": ["Python", "Flask", "MongoDB", "GST Billing", "Bootstrap 5"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/Hotel-Management-System-"}, {"id": "saas-platform", "number": "08", "kind": "software", "title": "Software as a Service (SaaS)", "subtitle": "Enterprise Cloud Operations", "category": "MERN Full-Stack", "poster": "./assets/thumbnails/saas-platform-1.jpg", "description": "SaaS Dashboard is a modern, responsive web application designed to help businesses monitor, manage, and understand operations from a single interface, featuring telemetry, subscription billing, and multi-tenant access control.", "tags": ["React", "Node.js", "MongoDB", "Tailwind CSS", "REST API"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/Software-as-a-Service."}, {"id": "aeropulse-airport-management", "number": "09", "kind": "software", "title": "AeroPulse Airport Management", "subtitle": "Aviation Logistics & Operations", "category": "Python Full-Stack", "poster": "./assets/thumbnails/aeropulse-1.jpg", "description": "Aviation operations hub coordinating flight scheduling, gate allocations, passenger flow monitoring, ground service telemetry, and safety compliance checks.", "tags": ["Python", "FastAPI", "React", "Docker", "PostgreSQL"], "badge": "GitHub Repo", "repoUrl": "https://github.com/Shubham9031/aeropulse-airport-management"}, {"id": "trustvault-freelance", "number": "10", "kind": "software", "title": "TrustVault Freelance", "subtitle": "Decentralized Escrow Marketplace", "category": "MERN Full-Stack", "poster": "./assets/thumbnails/trustvault-1.jpg", "description": "Decentralized freelance escrow marketplace featuring milestone-based smart contracts, dispute resolution protocols, transparent client-contractor ratings, and encrypted messaging.", "tags": ["React", "Express.js", "MongoDB", "Node.js", "Escrow Security"], "badge": "Featured"}];[...Array.from(new Set(wa.map(t=>t.category)))];const v8=[
  {
    "id": "btech-cse",
    "degree": "B.Tech in Computer Science & Engineering",
    "institution": "Ch. Devi Lal State Institute of Engineering And Technology, Panniwala Mota, Sirsa, Haryana",
    "year": "2021 \u2013 2025",
    "grade": "CGPA: 8.07 (Sem-VII: 9.1 | Sem-VIII: 8.94)",
    "details": "Official B.Tech CSE Degree Marks Card issued by Chaudhary Devi Lal University, Sirsa. Total credits earned: 160 | Overall Percentage: 74.11% (3335/4500) | Result: Pass.\nCore focus on Full-Stack Software Engineering, Data Structures & Algorithms, Distributed Systems, and Real-Time IoT Telematics.",
    "docUrl": "./media/documents/btech_marksheet.jpg",
    "docLabel": "View Official DMC / Marksheet",
    "tags": [
      "Sirsa, Haryana",
      "CGPA: 8.07",
      "74.11%",
      "B.Tech CSE",
      "Roll: 21098116780060",
      "NAAC B Accredited"
    ],
    "featured": true
  },
  {
    "id": "intermediate",
    "degree": "Intermediate (Class XII, BSEB Patna)",
    "institution": "P.P.G. College, Chaumukha, Bijaipur, Gopalganj",
    "year": "2019 \u2013 2021",
    "grade": "1st Division | Score: 332/500 (66.4%)",
    "details": "Intermediate Science (PCM) marks statement issued by Bihar School Examination Board (BSEB), Patna. Strong analytical and quantitative grounding in Physics, Chemistry, and Advanced Mathematics (Distinction in Hindi & Biology).",
    "docUrl": "./media/documents/intermediate_marksheet.jpg",
    "docLabel": "View BSEB Marksheet",
    "tags": [
      "Gopalganj, Bihar",
      "1st Division",
      "Aggregate: 332/500",
      "BSEB Patna",
      "Roll: 21010375",
      "Science (PCM)"
    ],
    "featured": false
  },
  {
    "id": "matriculation",
    "degree": "Matriculation (Class X, BSEB Patna)",
    "institution": "Utkramit Madhyamik School, Amhin Banke, Kateya, Gopalganj",
    "year": "2019",
    "grade": "2nd Division | Score: 290/500",
    "details": "Secondary School Examination certificate & marksheet issued by Bihar School Examination Board (BSEB), Patna. Foundational aptitude in Mathematics, Science, and Social Sciences.",
    "docUrl": "./media/documents/matric_marksheet.jpg",
    "docLabel": "View Class X Marksheet",
    "certificateUrl": "./media/documents/matric_certificate.jpg",
    "tags": [
      "Gopalganj, Bihar",
      "2nd Division",
      "Score: 290/500",
      "BSEB Patna",
      "Roll: 1900036"
    ],
    "featured": false
  },
  {
    "id": "certifications",
    "degree": "Professional Certifications & Internships",
    "institution": "App Squadz \u2022 Internshala \u2022 Masai School",
    "year": "Production Track",
    "grade": "Certified Full-Stack MERN",
    "details": "\u2022 Full Stack Web Development (App Squadz): Practical training in MERN stack covering React.js, Node.js, Express.js, MongoDB and REST APIs.\n\u2022 Project Intern Frontend (Internshala): Built responsive, component-based user interfaces with React.js.\n\u2022 Bootcamp TechEdge 2.0 (Masai): Intensive hands-on bootcamp strengthening web development and algorithmic problem solving.",
    "tags": [
      "App Squadz (MERN)",
      "Internshala (Frontend)",
      "Masai TechEdge 2.0",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js"
    ],
    "featured": false
  }
],_8=[{id:"projects",value:25,suffix:"+",label:"Software Projects Built"},{id:"tech",value:10,suffix:"+",label:"Technologies Used"},{id:"focus",value:15,suffix:"+",label:"Core Disciplines"}];Gt.registerPlugin(lt);const x8=()=>{const t=re.useRef(null),e=re.useRef(null);return re.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=Gt.context(()=>{const i=Gt.utils.toArray(".stat-item"),r=Gt.timeline({scrollTrigger:{trigger:t.current,start:"top 75%",toggleActions:"play none none reverse"}});r.fromTo(e.current,{y:48,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.9,ease:"power3.out"}),i.forEach((s,o)=>{const a=s.querySelector(".stat-num"),l=s.querySelector(".stat-fig"),c=s.querySelector(".stat-bar"),u=s.querySelector(".stat-label");if(!a||!l||!c||!u)return;const f=Number(s.dataset.value),d={v:0},h=.3+o*.18;a.textContent="0",r.fromTo(l,{y:28,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out"},h).fromTo(d,{v:0},{v:f,duration:2.2,ease:"power3.out",onUpdate:()=>{a.textContent=String(Math.round(d.v))}},h).fromTo(c,{scaleX:0},{scaleX:1,duration:2.2,ease:"power3.out"},h).fromTo(u,{y:14,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out"},h+.25)})},t);return()=>n.revert()},[]),re.useEffect(()=>{const n=t.current,i=e.current;if(!n||!i||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s={x:0,y:0,o:0},o={x:0,y:0,o:0};let a=performance.now(),l=!1;const c=()=>{const g=performance.now(),v=Math.min((g-a)/1e3,.05);a=g;const m=1-Math.exp(-(r?40:9)*v),p=1-Math.exp(-(r?40:5.5)*v);o.x+=(s.x-o.x)*m,o.y+=(s.y-o.y)*m,o.o+=(s.o-o.o)*p,i.style.setProperty("--mx",`${o.x.toFixed(1)}px`),i.style.setProperty("--my",`${o.y.toFixed(1)}px`),i.style.setProperty("--lo",o.o.toFixed(3)),s.o===0&&o.o<.003&&(i.style.setProperty("--lo","0"),f())},u=()=>{l||(l=!0,a=performance.now(),Gt.ticker.add(c))},f=()=>{l&&(l=!1,Gt.ticker.remove(c))},d=g=>{if(g.pointerType==="touch")return;const v=i.getBoundingClientRect();s.x=g.clientX-v.left,s.y=g.clientY-v.top,s.o===0&&(o.x=s.x,o.y=s.y),s.o=1,u()},h=()=>{s.o=0};return n.addEventListener("pointermove",d),n.addEventListener("pointerleave",h),()=>{n.removeEventListener("pointermove",d),n.removeEventListener("pointerleave",h),f()}},[]),P.jsxs("section",{id:"stats",ref:t,"aria-labelledby":"stats-heading",className:"relative w-full text-gray-100 py-20 md:py-28 px-4 md:px-10 lg:px-16 overflow-hidden border-t border-white/5",children:[P.jsx("h2",{id:"stats-heading",className:"sr-only",children:"Client results"}),P.jsxs("div",{ref:e,className:"stat-panel glass glass-panel-card relative z-10 max-w-7xl mx-auto rounded-3xl overflow-hidden",children:[P.jsx("div",{className:"stat-light","aria-hidden":"true"}),P.jsx("div",{className:"stat-rim","aria-hidden":"true"}),P.jsx("dl",{className:"relative z-10 m-0 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20",children:_8.map(n=>P.jsx("div",{"data-value":n.value,className:"stat-item px-6 py-12 md:px-8 md:py-20 lg:px-10",children:P.jsxs("div",{className:"stat-cq flex flex-col-reverse gap-6",children:[P.jsx("dt",{className:"stat-label text-sm md:text-base font-semibold uppercase tracking-[0.16em] leading-snug text-gray-300",children:n.label}),P.jsxs("dd",{className:"m-0",children:[P.jsxs("span",{className:"sr-only",children:[n.value,n.suffix]}),P.jsxs("div",{"aria-hidden":"true",className:"stat-fig font-black uppercase text-white",children:[P.jsxs("span",{className:"relative inline-block",children:[P.jsx("span",{className:"invisible",children:n.value}),P.jsx("span",{className:"stat-num absolute right-0 top-0",children:n.value})]}),P.jsx("span",{className:"stat-suffix",children:n.suffix})]}),P.jsx("div",{className:"stat-bar mt-6 w-12 h-1 bg-[#a31515] rounded-full origin-left","aria-hidden":"true"})]})]})},n.id))})]})]})},Mi={FOV:42,CAM_Z:9,CARD_W:3.4,SPACING:.13,RAIL_SPAN:1.7,FLY_SPAN:.35,HOLD:.12,RAIL:[[0,3,-60],[-10,2,-34],[-12,.5,-14],[-7,-.4,-1],[0,-.8,3.2],[7,-.4,-1],[12,.6,-12],[9,1.6,-26],[2,2.2,-34]],RAIL_MOBILE:[[0,3,-50],[-4,1.5,-26],[-3.5,0,-8],[0,-.6,2.5],[3.5,0,-8],[4,1.5,-24],[1,2.4,-32]]},W0=t=>Math.max(0,Math.min(1,t)),y8=t=>t<.5?4*t*t*t:1-(-2*t+2)**3/2;function S8(t){return Mi.RAIL_SPAN+Mi.FLY_SPAN+(t-1)*Mi.SPACING+Mi.HOLD}function M8(t,e,n){const i=W0(t)*S8(n)-e*Mi.SPACING;return{rail:W0(i/Mi.RAIL_SPAN),fly:W0((i-Mi.RAIL_SPAN)/Mi.FLY_SPAN),opacity:i<=0?0:Math.min(1,i/.12)}}function w8(t,e,n,i,r){const s=i/2*(Math.PI/180),o=2*r*Math.tan(s),a=e/n,l=o*a,c=a<.8?2:3,u=Math.ceil(t/c),f=o*(a<.8?.34:.4),d=o-f-o*.04,h=Math.min(l,o)*.025,g=16/9;let v=Math.min((l*.92-h*(c-1))/c,(d-h*(u-1))/u*g);v=Math.max(v,.5);const m=v/g,p=c*v+(c-1)*h,_=u*m+(u-1)*h,x=o/2-f-(d-_)/2;return{cells:Array.from({length:t},(E,C)=>{const M=C%c,A=Math.floor(C/c);return{x:-p/2+v/2+M*(v+h),y:x-m/2-A*(m+h),side:c>1&&M===0?-1:c>1&&M===c-1?1:0,vert:A===0?1:A===u-1?-1:0}}),cellW:v,cellH:m,cols:c,rows:u}}const oo=16/9,E8=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,T8=`
  uniform sampler2D map;
  uniform vec2 uvScale;
  uniform vec2 uvOffset;
  uniform float uOpacity;
  uniform float uHover;
  uniform float uReady;
  varying vec2 vUv;
  float rbox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
  void main() {
    vec2 uv = vUv;
    if (!gl_FrontFacing) uv.x = 1.0 - uv.x;
    vec2 p = (uv - 0.5) * vec2(${oo.toFixed(4)}, 1.0);
    float d = rbox(p, vec2(${(oo/2).toFixed(4)}, 0.5), 0.07);
    float mask = 1.0 - smoothstep(-0.003, 0.003, d);
    if (mask < 0.01) discard;
    vec3 tex = texture2D(map, uv * uvScale + uvOffset).rgb;
    vec3 col = mix(vec3(0.05, 0.035, 0.045), tex, uReady);
    col *= 0.82 + 0.28 * uHover;
    // soft glass reflections
    col += vec3(1.0) * 0.07 * smoothstep(0.55, 1.0, uv.y) * (1.0 - uv.x * 0.6);
    col += vec3(1.0, 0.12, 0.2) * 0.18 * uHover * smoothstep(0.45, 0.0, uv.y);
    // liquid glass rim
    float rim = smoothstep(-0.022, -0.004, d);
    vec3 rimCol = mix(vec3(0.75, 0.75, 0.8), vec3(1.0, 0.3, 0.38), uHover);
    col = mix(col, rimCol, rim * (0.35 + 0.35 * uHover));
    gl_FragColor = vec4(col, mask * uOpacity);
  }
`;function A8(t){if(!t.poster)return[];const e=t.poster.match(/^(.*)-1\.(jpg|jpeg|png|webp)$/i);return e?[1,2,3].map(n=>`${e[1]}-${n}.${e[2]}`):[t.poster]}function b8(t,e,n,i){return i&&(n?!e:t)}function C8({project:t}){const e=re.useRef(null),n=re.useRef(null),[i,r]=re.useState(!1);return re.useEffect(()=>{const s=e.current,o=n.current;if(!s||!o||!t.videoUrl)return;let a=!1,l=!1;const c=()=>{!a||l||document.hidden||(o.preload="auto",o.muted=!0,o.play().catch(()=>{}))},u=new IntersectionObserver(([h])=>{a=(h==null?void 0:h.isIntersecting)??!1,a?c():o.pause()},{rootMargin:"250px"});u.observe(s);const f=()=>{document.hidden?o.pause():c()},d=()=>{l=!0,r(!1)};return o.addEventListener("error",d),document.addEventListener("visibilitychange",f),document.addEventListener("pointerdown",c),()=>{u.disconnect(),o.pause(),o.removeEventListener("error",d),document.removeEventListener("visibilitychange",f),document.removeEventListener("pointerdown",c)}},[t.videoUrl]),P.jsxs("div",{ref:e,className:"project-video-fallback","data-video-ready":i,children:[P.jsx("img",{src:t.poster,alt:"",loading:"lazy"}),t.videoUrl&&P.jsx("video",{ref:n,src:encodeURI(t.videoUrl),poster:t.poster,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onPlaying:()=>r(!0),"aria-label":t.title})]})}function R8(t,e){re.useEffect(()=>{const n=t.current;if(!n)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)");let r=()=>{};const s=()=>{if(r(),i.matches)return;const o=Array.from(n.querySelectorAll(e)),a=o.map(u=>u.dataset.revealVisible),l=Gt.context(()=>{Gt.set(o,{opacity:0,y:20,filter:"blur(12px)"})},n);let c=null;l.add(()=>{c=new IntersectionObserver(u=>{u.forEach(f=>{const d=f.target,h=f.isIntersecting;d.dataset.revealVisible!==String(h)&&(d.dataset.revealVisible=String(h),Gt.to(d,{opacity:+h,y:h?0:20,filter:h?"blur(0px)":"blur(12px)",duration:h?.8:.65,delay:h?Math.min(o.indexOf(d)%5*.055,.22):0,ease:"power3.out",overwrite:"auto"}))})},{threshold:0,rootMargin:"-4% 0px -4% 0px"}),o.forEach(u=>c==null?void 0:c.observe(u))}),r=()=>{c==null||c.disconnect(),Gt.killTweensOf(o),l.revert(),o.forEach((u,f)=>{a[f]===void 0?delete u.dataset.revealVisible:u.dataset.revealVisible=a[f]})}};return s(),i.addEventListener("change",s),()=>{r(),i.removeEventListener("change",s)}},[t,e])}const P8=({onSelectProject:t})=>{const e=re.useRef(null),n=re.useRef(null),i=re.useRef(null),r=re.useRef(t);r.current=t;const[s,o]=re.useState(!1);R8(e,"[data-project-heading] > *, [data-project-fallback]"),re.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!0);return}const l=e.current,c=n.current,u=i.current;if(!l||!c)return;let f;try{f=new V_({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{o(!0);return}const d=window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;f.setPixelRatio(Math.min(window.devicePixelRatio||1,d?1.5:2)),f.setClearColor(0,0),c.appendChild(f.domElement),f.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block";const h=new am,g=new wi(Mi.FOV,1,.1,200);g.position.set(0,0,Mi.CAM_Z);const v=(d?Mi.RAIL_MOBILE:Mi.RAIL).map(([ae,Le,ve])=>new H(ae,Le,ve)),m=new b3(v,!1,"centripetal"),p=[],_=[];for(let ae=0;ae<=400;ae++)p.push(m.getPointAt(ae/400)),_.push(m.getTangentAt(ae/400));const x=(ae,Le,ve)=>{const z=Math.max(0,Math.min(1,ae))*400,W=Math.min(Math.floor(z),399),$=z-W;Le.lerpVectors(p[W],p[W+1],$),ve.lerpVectors(_[W],_[W+1],$).normalize()},S=new Yf(oo,1,24,14),E=new F3,C=new b6(new Uint8Array([10,8,10,255]),1,1);C.needsUpdate=!0;const M=(ae,Le,ve)=>{const z=Le/ve;if(z>oo){const W=oo/z;ae.uniforms.uvScale.value.set(W,1),ae.uniforms.uvOffset.value.set((1-W)/2,0)}else{const W=z/oo;ae.uniforms.uvScale.value.set(1,W),ae.uniforms.uvOffset.value.set(0,(1-W)/2)}},A=wa.map((ae,Le)=>{const ve=new ms({vertexShader:E8,fragmentShader:T8,transparent:!0,side:ss,depthWrite:!1,uniforms:{map:{value:C},uvScale:{value:new ke(1,1)},uvOffset:{value:new ke(0,0)},uOpacity:{value:0},uHover:{value:0},uReady:{value:0}}}),z=new Zt(S,ve);z.userData.index=Le,h.add(z);const W={project:ae,mesh:z,mat:ve,thumbs:[],thumbIdx:0,video:null,videoTex:null,playing:!1,hover:0,failed:!1,pending:!1,retryAt:0,farTime:0,wanted:!1,cleanupVideo:()=>{}};if(A8(ae).forEach(($,oe)=>{E.load($,_e=>{_e.minFilter=Ei,_e.generateMipmaps=!1,W.thumbs[oe]=_e,!W.videoTex&&oe===0&&(ve.uniforms.map.value=_e,M(ve,_e.image.width,_e.image.height),ve.uniforms.uReady.value=1)})}),ae.videoUrl){const $=document.createElement("video");$.muted=!0,$.loop=!0,$.playsInline=!0,$.autoplay=!1,$.preload="metadata",$.setAttribute("playsinline",""),$.setAttribute("muted",""),$.src=encodeURI(ae.videoUrl);const oe=()=>{if(W.failed||W.videoTex)return;const rt=new D6($);rt.minFilter=Ei,rt.generateMipmaps=!1,W.videoTex=rt,M(ve,$.videoWidth||16,$.videoHeight||9)},_e=()=>{W.videoTex||oe(),W.videoTex&&(ve.uniforms.map.value=W.videoTex,ve.uniforms.uReady.value=1),W.playing=!0},Ae=()=>{W.failed=!0,W.playing=!1,W.pending=!1,W.thumbs[0]&&(ve.uniforms.map.value=W.thumbs[0],M(ve,W.thumbs[0].image.width,W.thumbs[0].image.height))};$.addEventListener("loadeddata",oe),$.addEventListener("playing",_e),$.addEventListener("error",Ae),W.cleanupVideo=()=>{$.removeEventListener("loadeddata",oe),$.removeEventListener("playing",_e),$.removeEventListener("error",Ae)},W.video=$}return W});let U=1,y=1,T=null;const I=()=>{U=c.clientWidth,y=c.clientHeight,f.setSize(U,y,!1),g.aspect=U/y,g.updateProjectionMatrix(),T=w8(A.length,U,y,Mi.FOV,Mi.CAM_Z)};I(),window.addEventListener("resize",I);let B=0,V=0,K=!1,G=0;const X=()=>{const ae=l.getBoundingClientRect(),Le=ae.height-window.innerHeight;B=Le>0?Math.max(0,Math.min(1,-ae.top/Le)):0};X(),window.addEventListener("scroll",X,{passive:!0});const F=()=>{A.forEach(ae=>{var Le;ae.wanted=!1,(Le=ae.video)==null||Le.pause(),ae.playing=!1})},Q=new IntersectionObserver(([ae])=>{K=ae.isIntersecting,K||F()},{rootMargin:"250px"});Q.observe(c);const N=(ae,Le)=>{!ae.video||ae.failed||ae.pending||ae.playing||!ae.wanted||Le<ae.retryAt||document.hidden||(ae.pending=!0,ae.video.muted=!0,ae.video.preload="auto",ae.video.play().then(()=>{var ve;ae.pending=!1,!ae.wanted||document.hidden?((ve=ae.video)==null||ve.pause(),ae.playing=!1):ae.playing=!0}).catch(()=>{ae.pending=!1,ae.playing=!1,ae.retryAt=performance.now()+3e3}))},de=()=>{A.forEach(ae=>{ae.retryAt=0,N(ae,performance.now())})},De=()=>{document.hidden?F():G=0};document.addEventListener("pointerdown",de),document.addEventListener("visibilitychange",De);const Ze=new B3,ie=new ke(9,9);let fe=-1,Te=0,pe=0,Oe=0,Be=0;const qe=ae=>{const Le=c.getBoundingClientRect();Te=ae.clientX-Le.left,pe=ae.clientY-Le.top,ie.set(Te/Le.width*2-1,-(pe/Le.height)*2+1)},We=()=>{ie.set(9,9)},ue=ae=>{Oe=ae.clientX,Be=ae.clientY,qe(ae)},L=ae=>{Math.hypot(ae.clientX-Oe,ae.clientY-Be)>8||(qe(ae),Se(),fe>=0&&r.current(A[fe].project))},Se=()=>{Ze.setFromCamera(ie,g);const ae=Ze.intersectObjects(A.filter(Le=>Le.mat.uniforms.uOpacity.value>.3).map(Le=>Le.mesh));fe=ae.length?ae[0].object.userData.index:-1};c.addEventListener("pointermove",qe),c.addEventListener("pointerleave",We),c.addEventListener("pointerdown",ue),c.addEventListener("pointerup",L);const Me=new H,ye=new H,k=new H,Fe=new H,Pe=new H(0,1,0),D=new Ft,b=new Co,q=new Co,le=new Co,he=new H,se=new H,ge=new H,ce=new H,Ee=new sm,He=new Ft,me=new Ic;let Re=performance.now(),ze=0,Ke=0;const Ne=ae=>{ze=requestAnimationFrame(Ne);const Le=Math.min((ae-Re)/1e3,.05);if(Re=ae,!(!K||document.hidden)&&(V+=(B-V)*(1-Math.exp(-7*Le)),Math.abs(B-V)<1e-5&&(V=B),Ke+=Le,!!T)){if(A.forEach((ve,z)=>{const W=M8(V,z,A.length);x(W.rail,Me,ye),k.set(ye.x,0,ye.z),k.lengthSq()<1e-4&&k.set(1,0,0),k.normalize(),Fe.crossVectors(k,Pe).normalize(),Fe.z<0&&Fe.negate(),D.makeBasis(ce.crossVectors(Pe,Fe).normalize(),Pe,Fe),b.setFromRotationMatrix(D);const $=Mi.CARD_W/oo,oe=T.cells[z];if(W.fly<=0)ve.mesh.position.copy(Me),ve.mesh.quaternion.copy(b),ve.mesh.scale.setScalar($);else{x(1,ge,ye),he.set(oe.x,oe.y,0),se.set(oe.x+oe.side*T.cellW*.9,oe.y+oe.vert*T.cellH*1.6,1.2);const _e=y8(W.fly),Ae=1-_e;ve.mesh.position.set(Ae*Ae*ge.x+2*Ae*_e*se.x+_e*_e*he.x,Ae*Ae*ge.y+2*Ae*_e*se.y+_e*_e*he.y,Ae*Ae*ge.z+2*Ae*_e*se.z+_e*_e*he.z),q.identity(),ve.mesh.quaternion.copy(b).slerp(q,_e),le.setFromAxisAngle(ce.set(0,0,1),Math.sin(Math.PI*_e)*.18*(oe.side||oe.vert||1)),ve.mesh.quaternion.multiply(le),ve.mesh.scale.setScalar(du.lerp($,T.cellH,_e))}if(ve.mesh.renderOrder=Math.round(ve.mesh.position.z*100),ve.hover+=((z===fe?1:0)-ve.hover)*(1-Math.exp(-10*Le)),ve.mat.uniforms.uHover.value=ve.hover,ve.mesh.scale.multiplyScalar(1+ve.hover*.05),ve.mat.uniforms.uOpacity.value=W.opacity,ve.mesh.visible=W.opacity>.001,!ve.videoTex&&ve.thumbs.length>1){const _e=Math.floor((Ke+z*.7)/2.4)%3;_e!==ve.thumbIdx&&ve.thumbs[_e]&&(ve.thumbIdx=_e,ve.mat.uniforms.map.value=ve.thumbs[_e])}}),h.updateMatrixWorld(!0),Se(),c.style.cursor=fe>=0?"pointer":"",u)if(fe>=0){const ve=A[fe].project;u.dataset.id!==ve.id&&(u.dataset.id=ve.id,u.querySelector("[data-t]").textContent=ve.title,u.querySelector("[data-s]").textContent=ve.subtitle,u.querySelector("[data-c]").textContent=ve.category),u.style.opacity="1";const z=U-u.offsetWidth-8,W=y-u.offsetHeight-8;u.style.transform=`translate(${Math.max(8,Math.min(Te+18,z))}px, ${Math.max(8,Math.min(pe+18,W))}px)`}else u.style.opacity="0";G-=Le,G<=0&&(G=.25,He.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),Ee.setFromProjectionMatrix(He),A.forEach(ve=>{if(!ve.video||ve.failed)return;const z=Math.hypot(oo,1)*ve.mesh.scale.x*.5;me.center.copy(ve.mesh.position),me.radius=z*1.4;const W=ve.mat.uniforms.uOpacity.value>.01&&Ee.intersectsSphere(me);me.radius=z*2;const $=!Ee.intersectsSphere(me)||ve.mat.uniforms.uOpacity.value<.001;ve.farTime=$?ve.farTime+.25:0,ve.wanted=b8(W,ve.farTime>1,ve.playing||ve.pending,K),ve.wanted?N(ve,ae):(ve.playing||ve.pending)&&(ve.video.pause(),ve.playing=!1)})),f.render(h,g),c.setAttribute("data-scene-ready","1")}};return ze=requestAnimationFrame(Ne),()=>{cancelAnimationFrame(ze),Q.disconnect(),window.removeEventListener("resize",I),window.removeEventListener("scroll",X),document.removeEventListener("pointerdown",de),document.removeEventListener("visibilitychange",De),c.removeEventListener("pointermove",qe),c.removeEventListener("pointerleave",We),c.removeEventListener("pointerdown",ue),c.removeEventListener("pointerup",L),A.forEach(ae=>{var Le;ae.mat.dispose(),ae.thumbs.forEach(ve=>ve==null?void 0:ve.dispose()),(Le=ae.videoTex)==null||Le.dispose(),ae.cleanupVideo(),ae.video&&(ae.video.pause(),ae.video.removeAttribute("src"),ae.video.load())}),S.dispose(),C.dispose(),f.dispose(),f.domElement.remove()}},[]);const a=P.jsxs("div",{"data-project-heading":!0,className:"flex flex-col items-center text-center",children:[P.jsx("span",{className:"text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em] mb-2",children:"Featured Works"}),P.jsx("h2",{className:"text-5xl md:text-7xl font-black tracking-tight uppercase text-white",children:"PROJECTS."}),P.jsx("div",{className:"w-20 h-1.5 bg-[#a31515] mt-3 rounded-full"})]});return s?P.jsxs("section",{id:"projects",ref:e,className:"relative w-full text-gray-100 py-28 px-4 md:px-10 border-t border-white/5",children:[a,P.jsx("div",{className:"max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:wa.map(l=>P.jsxs("button",{"data-project-fallback":!0,onClick:()=>t(l),className:"glass glass-panel-card h-auto p-0 block whitespace-normal rounded-2xl overflow-hidden text-left group hover:scale-[1.02] transition-transform duration-300",children:[P.jsx(C8,{project:l}),P.jsxs("div",{className:"p-5",children:[P.jsx("span",{className:"text-xs uppercase tracking-[0.2em] text-red-400 font-bold",children:l.category}),P.jsx("h3",{className:"text-xl font-black text-white mt-1",children:l.title}),P.jsx("p",{className:"text-gray-400 text-sm mt-1",children:l.subtitle})]})]},l.id))})]}):P.jsx("section",{id:"projects",ref:e,className:"relative w-full text-gray-100 border-t border-white/5",style:{height:"420vh"},children:P.jsxs("div",{className:"sticky top-0 h-screen w-full overflow-hidden",children:[P.jsx("div",{className:"absolute inset-x-0 top-24 md:top-24 z-20 px-4 pointer-events-none",children:a}),P.jsx("div",{ref:n,className:"absolute inset-0 z-10","data-no-ripple":!0,"aria-label":"Featured projects",role:"region"}),P.jsxs("div",{ref:i,className:"pointer-events-none absolute left-0 top-0 z-30 glass rounded-xl px-4 py-3 transition-opacity duration-200 max-w-[16rem]",style:{opacity:0},children:[P.jsx("span",{"data-c":!0,className:"block text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold"}),P.jsx("span",{"data-t":!0,className:"block text-base font-black text-white leading-tight mt-0.5"}),P.jsx("span",{"data-s":!0,className:"block text-xs text-gray-400 mt-0.5"})]})]})})};Gt.registerPlugin(lt);const L8=26,D8=70,j0=.38,N8=9e-4,X0=(t,e)=>Math.max(-e,Math.min(e,t)),I8=()=>{const t=re.useRef(null),e=re.useRef(null),n=re.useRef(null);return re.useEffect(()=>{const i=t.current,r=e.current;if(!i||!r)return;const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=window.matchMedia("(pointer: coarse)").matches;let a=0,l=0,c=0,u=0,f=!1,d=-1,h=0,g=performance.now(),v=!0,m=0;const p=()=>{const A=i.getBoundingClientRect();return{x:A.left+A.width/2,y:A.top+8}},_=A=>{const U=performance.now(),y=Math.max((U-g)/1e3,.008),T=(A.clientX-h)/y;if(h=A.clientX,g=U,f&&A.pointerId===d){const K=p();u=X0(Math.atan2(-(A.clientX-K.x),Math.max(A.clientY-K.y,60)),j0);return}if(s||o||!v)return;const I=i.getBoundingClientRect(),B=Math.abs(A.clientX-(I.left+I.width/2))+Math.max(0,Math.abs(A.clientY-(I.top+I.height/2))-I.height/2),V=Math.max(0,1-B/900);l+=X0(-T*N8*V,.25)},x=A=>{var U;f=!0,d=A.pointerId,(U=r.setPointerCapture)==null||U.call(r,A.pointerId),r.style.cursor="grabbing",h=A.clientX},S=A=>{A.pointerId===d&&(f=!1,d=-1,u=0,r.style.cursor="")},E=new IntersectionObserver(([A])=>{v=A.isIntersecting},{rootMargin:"200px"});E.observe(i);let C=performance.now();const M=A=>{m=requestAnimationFrame(M);const U=Math.min((A-C)/1e3,.05);if(C=A,!v&&!f)return;const y=f?D8:L8,T=f?u:0;l+=-y*(a-T)*U,l*=Math.exp(-3.2*U),a+=l*U,Math.abs(a)>j0&&(a=Math.sign(a)*j0,l*=-.3),c+=(l*.6-c)*(1-Math.exp(-6*U));const I=a*180/Math.PI;r.style.transform=`rotateZ(${I}deg) rotateY(${X0(c,.4)*30}deg)`,n.current&&(n.current.style.transform=`translateX(${-I*2.2}px) rotateZ(${I*.8}deg)`)};return m=requestAnimationFrame(M),window.addEventListener("pointermove",_,{passive:!0}),r.addEventListener("pointerdown",x),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),()=>{cancelAnimationFrame(m),E.disconnect(),window.removeEventListener("pointermove",_),r.removeEventListener("pointerdown",x),window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S)}},[]),P.jsxs("div",{ref:t,className:"hang-rig","data-no-ripple":!0,children:[P.jsx("span",{className:"hang-nail","aria-hidden":"true"}),P.jsx("div",{ref:n,className:"hang-shadow","aria-hidden":"true"}),P.jsxs("div",{ref:e,className:"hang-swing",children:[P.jsxs("svg",{className:"hang-strings",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:[P.jsx("line",{x1:"50",y1:"0",x2:"12",y2:"100"}),P.jsx("line",{x1:"50",y1:"0",x2:"88",y2:"100"})]}),P.jsxs("div",{className:"hang-frame glow-frame",children:[P.jsx("span",{className:"hang-ring hang-ring-l","aria-hidden":"true"}),P.jsx("span",{className:"hang-ring hang-ring-r","aria-hidden":"true"}),P.jsxs("div",{className:"relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40 ring-1 ring-white/15",children:[P.jsx("img",{src:"./media/profile.webp?v=shubham15",alt:"Portrait of Shubham Ojha in a navy suit",draggable:!1,className:"w-full h-full object-cover object-top transition-all duration-700 select-none"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"}),P.jsx("div",{className:"hang-glare","aria-hidden":"true"}),P.jsxs("div",{className:"absolute bottom-3 left-3 right-3 text-center",children:[P.jsx("span",{className:"text-white text-base md:text-xl font-black uppercase tracking-wider block",children:"Shubham Ojha"}),P.jsx("span",{className:"text-red-400 text-xs md:text-sm uppercase font-bold tracking-widest",children:"Independent Developer"})]})]})]})]})]})},U8=["React.js","Node.js","Express.js","MongoDB","Python","FastAPI","Django","Flask","PostgreSQL","WebSockets","MQTT"],F8=["MERN Full-Stack Development","Python Full-Stack Engineering","IoT & Real-Time Telematics","Enterprise SaaS"],O8=()=>{const t=re.useRef(null),e=re.useRef(null),n=re.useRef(null),i=re.useRef(null),r=re.useRef(null);return re.useEffect(()=>{const s=Gt.context(()=>{var o;Gt.timeline({scrollTrigger:{trigger:t.current,start:"top 80%",toggleActions:"play none none reverse"}}).fromTo(e.current,{x:-40,opacity:0},{x:0,opacity:1,duration:.7,ease:"power3.out"}).fromTo(n.current,{y:30,opacity:0},{y:0,opacity:1,duration:.7,ease:"power3.out"},"-=0.5").fromTo(i.current,{scale:.85,opacity:0},{scale:1,opacity:1,duration:.8,ease:"back.out(1.2)"},"-=0.6").fromTo(((o=r.current)==null?void 0:o.children)||[],{scale:.7,opacity:0,y:15},{scale:1,opacity:1,y:0,duration:.4,stagger:.04,ease:"back.out(1.5)"},"-=0.6")},t);return()=>s.revert()},[]),P.jsx("section",{id:"about",ref:t,className:"relative w-full text-gray-100 py-24 overflow-hidden border-t border-white/5",children:P.jsxs("div",{className:"max-w-7xl mx-auto px-5 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[P.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-8",children:[P.jsxs("div",{className:"flex flex-col gap-2",children:[P.jsx("span",{className:"text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em]",children:"Engineer · Developer · Builder"}),P.jsx("h2",{ref:e,className:"text-5xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase text-white",children:"ABOUT ME."}),P.jsx("div",{className:"w-24 h-1.5 bg-[#a31515] rounded-full mt-2"})]}),P.jsxs("div",{className:"relative",children:[P.jsx("div",{className:"red-halo","aria-hidden":"true"}),P.jsxs("div",{className:"glass glass-panel-card relative rounded-3xl p-5 md:p-12 flex flex-col gap-5 md:gap-8",children:[P.jsxs("div",{ref:n,className:"flex flex-col gap-4 md:gap-5",children:[P.jsx("p",{className:"text-gray-200 text-base md:text-2xl leading-relaxed font-medium",children:"I'm a Computer Science Engineer and Full-Stack Developer specializing in MERN stack and Python ecosystems, building robust real-time software and enterprise portals."}),P.jsx("p",{className:"text-gray-400 text-base md:text-xl leading-relaxed",children:"From real-time GPS fleet tracking and IoT sensor telematics to multi-tenant school, hospital, and hotel management systems, I engineer end-to-end scalable solutions."})]}),P.jsxs("div",{children:[P.jsx("h3",{className:"text-xs md:text-base font-bold uppercase tracking-wider text-gray-500 mb-3 md:mb-4",children:"Technologies"}),P.jsx("div",{ref:r,className:"flex flex-wrap gap-2 md:gap-3",children:U8.map(s=>P.jsx("span",{className:"tech-pill glass-chip px-3.5 py-1.5 text-xs md:px-5 md:py-2.5 md:text-lg font-bold text-gray-200 rounded-full cursor-default",children:s},s))})]}),P.jsxs("div",{children:[P.jsx("h3",{className:"text-xs md:text-base font-bold uppercase tracking-wider text-gray-500 mb-3 md:mb-4",children:"Areas of Focus"}),P.jsx("div",{className:"flex flex-wrap gap-2 md:gap-3",children:F8.map(s=>P.jsx("span",{className:"px-3.5 py-1.5 text-xs md:px-4 md:py-2 md:text-base font-semibold text-red-300 rounded-full ring-1 ring-red-500/30 bg-[#a31515]/10",children:s},s))})]})]})]})]}),P.jsx("div",{className:"lg:col-span-5 flex justify-center relative lg:sticky lg:top-28",children:P.jsx("div",{ref:i,"data-photo-reveal":!0,className:"flex flex-col items-center pointer-events-auto",children:P.jsx(I8,{})})})]})})};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ab=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>re.createElement("svg",{ref:l,...B8,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ab("lucide",r),...a},[...o.map(([c,u])=>re.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=(t,e)=>{const n=re.forwardRef(({className:i,...r},s)=>re.createElement(z8,{ref:s,iconNode:e,className:ab(`lucide-${k8(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=Za("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=Za("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=Za("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=Za("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=Za("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=Za("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=Za("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);Gt.registerPlugin(lt);const Y8=()=>{const t=re.useRef(null),e=re.useRef(null),n=re.useRef(null);return re.useEffect(()=>{const i=Gt.context(()=>{Gt.timeline({scrollTrigger:{trigger:t.current,start:"top 80%",toggleActions:"play none none reverse"}}).fromTo(e.current,{y:20,opacity:0},{y:0,opacity:1,duration:.5,ease:"power3.out"}).fromTo(".service-item",{y:25,opacity:0,x:-10},{y:0,opacity:1,x:0,duration:.45,stagger:.07,ease:"back.out(1.4)"},"-=0.2")},t);return()=>i.revert()},[]),P.jsxs("section",{id:"education",ref:t,className:"relative w-full text-gray-100 py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5",children:[P.jsxs("div",{ref:e,className:"flex flex-col items-center text-center mb-12 z-10",children:[P.jsxs("span",{className:"text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5",children:[P.jsx("img",{src:"./assets/spydy-DLbFrGCQ.png",alt:"","aria-hidden":"true",className:"w-4 h-4 object-contain"}),"ACADEMIC & LEARNING"]}),P.jsx("h2",{className:"text-3xl md:text-5xl font-black tracking-tight uppercase text-white",children:"EDUCATION & CERTIFICATIONS."}),P.jsx("div",{className:"w-12 h-1 bg-[#a31515] mt-2 rounded-full"})]}),P.jsx("ul",{ref:n,className:"grid-blur relative list-none p-0 m-0 w-full max-w-4xl flex flex-col gap-4 z-10",children:v8.map((i,r)=>{return P.jsx("li",{className:"service-item",children:P.jsxs("div",{className:"glass glass-grid-card group relative flex h-full flex-col items-start gap-4 p-5 md:flex-row md:items-start md:gap-6 md:p-6 rounded-3xl outline-none hover:border-[#ff334b]/40 transition-colors",children:[P.jsx("span",{className:"glass-chip shrink-0 w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-black tabular-nums text-gray-200 group-hover:text-white group-hover:border-[#ff2a3b]/50 transition-colors",children:String(r+1).padStart(2,"0")}),P.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-2.5",children:[P.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-1.5",children:[P.jsxs("div",{className:"min-w-0",children:[P.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[P.jsx("h3",{className:"font-bold text-base md:text-xl text-gray-100 group-hover:text-[#ff334b] transition-colors",children:i.degree}),i.grade&&P.jsx("span",{className:"glass-chip text-[11px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30",children:i.grade})]}),P.jsx("span",{className:"text-xs md:text-sm text-gray-400 font-medium block mt-1",children:i.institution})]}),P.jsx("span",{className:"glass-chip-red inline-block self-start md:self-auto text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shrink-0",children:i.year})]}),P.jsx("p",{className:"text-xs md:text-sm text-gray-300 leading-relaxed font-normal whitespace-pre-line",children:i.details}),(i.docUrl||i.certificateUrl)&&P.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 mt-2",children:[i.docUrl&&P.jsxs("a",{href:i.docUrl,target:"_blank",rel:"noopener noreferrer",className:"glass-chip inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold text-gray-200 hover:text-white hover:border-[#ff2a3b]/60 transition-colors bg-white/5",children:[P.jsx("span",{children:i.docLabel||"View Document"}),P.jsx(Y0,{className:"h-3.5 w-3.5 text-red-400"})]}),i.certificateUrl&&P.jsxs("a",{href:i.certificateUrl,target:"_blank",rel:"noopener noreferrer",className:"glass-chip inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold text-gray-200 hover:text-white hover:border-[#ff2a3b]/60 transition-colors bg-white/5",children:[P.jsx("span",{children:"View Certificate"}),P.jsx(Y0,{className:"h-3.5 w-3.5 text-red-400"})]})]}),i.tags&&i.tags.length>0&&P.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:i.tags.map(tag=>P.jsx("span",{className:"glass-chip text-[10px] md:text-xs font-mono px-2.5 py-0.5 rounded-full text-gray-300",children:tag},tag))})]})]})},i.id)})}),P.jsx("p",{className:"mt-8 w-full max-w-4xl text-center text-[11px] md:text-xs text-gray-500 leading-relaxed z-10",children:"Graduated with B.Tech CSE from Ch. Devi Lal State Institute of Engineering And Technology, Sirsa, Haryana (CGPA 8.07 | Sem-VII 9.1)."})]})},$8=[{label:"React",color:"#61DAFB",path:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},{label:"JavaScript",color:"#F7DF1E",path:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},{label:"Python",color:"#4B8BBE",path:"M11.858 0c-.978.005-1.913.088-2.736.234C6.7.662 6.26 1.558 6.26 3.21v2.182h5.725v.727H4.111c-1.664 0-3.121 1-3.577 2.903-.526 2.181-.549 3.542 0 5.82.407 1.694 1.379 2.902 3.043 2.902h1.969v-2.616c0-1.89 1.635-3.557 3.576-3.557h5.72c1.591 0 2.862-1.31 2.862-2.91v-5.45c0-1.553-1.309-2.718-2.863-2.977A18 18 0 0 0 11.858 0M8.762 1.755c.591 0 1.074.491 1.074 1.095 0 .601-.483 1.087-1.074 1.087A1.08 1.08 0 0 1 7.688 2.85c0-.604.48-1.095 1.074-1.095m9.656 4.364v2.543c0 1.971-1.671 3.63-3.577 3.63H9.122c-1.566 0-2.862 1.34-2.862 2.91v5.452c0 1.551 1.349 2.464 2.862 2.91 1.813.532 3.55.628 5.72 0 1.44-.418 2.862-1.258 2.862-2.91V18.47h-5.719v-.727h8.582c1.664 0 2.284-1.16 2.862-2.903.598-1.793.573-3.518 0-5.819-.41-1.656-1.196-2.903-2.862-2.903zm-3.216 13.807a1.08 1.08 0 0 1 1.074 1.088c0 .604-.48 1.094-1.074 1.094-.592 0-1.075-.49-1.075-1.094 0-.601.483-1.088 1.075-1.088"},{label:"FastAPI",color:"#05A38F",path:"M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"},{label:"PostgreSQL",color:"#6A93E8",path:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},{label:"Supabase",color:"#3FCF8E",path:"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"},{label:"SQLite",color:"#2C9BDB",path:"M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"},{label:"Three.js",color:"#FFFFFF",path:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"},{label:"GSAP",color:"#88CE02",path:"M17.21 0c-.545.003-1.084.134-1.256.367-.11.165-.192 1.196-.11 1.718 0 0 .032.345.09.614a14.6 14.6 0 0 1-.02.182 7.024 7.024 0 0 1-.097.605c-.01.056-.207.095-.425.152a2.495 2.495 0 0 0-.138-.042c-.234-.069-.385.123-.618.26-.069-.04-.371-.178-.536-.082-.165.096-.275.193-.44.261-.082-.041-.302-.041-.48.028a1.27 1.27 0 0 0-.483.278c-2.314.58-4.813 1.635-5.012 1.741-1.017.522-2.679 1.415-3.434 2.033-1.291 1.071-2.06 2.322-2.363 3.242-.385 1.14-.275 1.827.096 1.387.298-.366 1.632-1.454 2.475-1.999l-.002.007a3.219 3.219 0 0 1 .44-.26l.233-.124.505-.323c.602.552.803 1.433.937 2.63.22 1.841 1.704 2.693 3.434 2.72 1.8.028 2.446.399 3.119 1.305.153.201.318.307.47.368a1.954 1.954 0 0 0-.16.405c-.075.17-.125.38-.157.608a.157.157 0 0 0-.03.075c-.068.536-.055 1.8-.068 2.473-.014.673-.028.77-.083.866-.055.11-.11.178-.178.467-.069.302-.193.384-.316.631-.206.385-.165.81.041 1.003.206.192.77.481 1.538.385.77-.096.88-.151.756-.893-.014-.11-.192-.605-.137-.797.082-.206-.096-.563-.055-.577.041-.014.096-.288.096-.426 0-.137-.014-.796.137-1.14.062-.14.193-.46.326-.785.442-.723.459-1.161.48-1.41.03-.202.046-.46.018-.744.055-.083.289-.275.316-.646 0 0 .644-.337 1.102-1.148.16.557.31.91.286 1.272-.499.39-.684.678-.76.959-.048-.02-.076-.037-.11-.04h-.027a.437.437 0 0 0-.106.029c-.192.068-.041 1.318.165 1.827.206.508.316.81.398 1.36.083.549-.192 1.222-.302 1.524 0 0-.179.536.233.824.358.248 1.704.18 2.308.18.605 0 1.511.219 2.088.109.715-.124.824-.55.399-.77-.426-.22-1.072-.329-1.91-.933-.22-.152-.522-.289-.563-.412-.041-.124-.041-.838-.027-1.457.013-.618.22-1.414.288-1.84.064-.398-.076-.388-.262-.351.032-.147.066-.292.097-.446.344-.632.193-1.223.193-1.223.82-1.044.4-3.27.22-4.048.64.303.96.188.96.188.102-.055.192-.134.274-.224.337-.362.51-.916.51-.916V11c.782-.783 1.151-1.936.26-2.692a1.331 1.331 0 0 0-.219-1.263 1.56 1.56 0 0 0-.37-1.731 1.36 1.36 0 0 0-.487-.297c-.2-.295-.245-.417-.572-.349-.15-.165-.178-.288-.494-.178 0 0-.096-.234-.275-.289a.25.25 0 0 0-.05-.015c-.302-.21-.576-.215-.772-.16-.064-.048-.061-.124-.07-.388-.008-.2-.019-.486-.031-.744.027-.328.102-.974.126-1.303.028-.37.042-.948-.123-1.195C18.303.12 17.754-.003 17.21 0zm-.005.34c.7 0 1.002.22 1.044.343.013.028.082.495.04.797-.013.11-.027.509-.054.687-.014.179-.069.385-.124.673-.041.234-.233.495-.384.536-.261.069-.742.055-1.017 0-.069-.014-.124-.055-.192-.096-.151-.248-.234-.44-.261-.742-.028-.289-.083-.412-.096-.632-.014-.33-.014-.55-.014-.55.014-.178.069-.618.069-.659.013-.123.233-.357.989-.357zm-1.133 2.702c.146.149.301.306.432.416.124.11.426.096.7.096.248 0 .468.028.564-.027.154-.077.355-.235.523-.394.011.152.022.304.026.435.01.295-.043.468.024.57-.082.048-.174.105-.269.156-.151.08-.306.136-.403.115h-.002c-.209-.035-.931-.215-1.331-.407-.167-.259-.335-.398-.326-.448.027-.137.04-.247.054-.425.004-.03.005-.058.008-.088zm-.853.69l.035.001c.424.036.65.152.808.284l.076.03.008-.027c.047.03.102.06.162.088.47.159 1.104.308 1.309.353.247.055.645-.192.838-.316.343-.22.783-.04.989.193.137.15.192.247.192.288.316-.11.357.041.508.206.385-.179.412.041.44.137-.122 0-.298.014-.538.04l-.012-.012c-.144-.153-.402-.289-.599-.384-.087-.031-.18-.049-.252-.097-.11-.055-.22-.137-.385-.123-.687.082-.824.315-1.415.178-.577-.134-.737-.254-1.333-.221l.001.026c-.105.016-.2.03-.22.03-.206.012-.722.067-1.153-.1a1.256 1.256 0 0 0-.161-.076l-.005-.002h-.001c-.18-.07-.39-.11-.63-.112h-.026c.218-.11.356-.259.56-.218.22.041.44.22.564.357a.858.858 0 0 0-.178-.288c.128-.09.245-.229.418-.234zm-1.1.545c.15.002.28.026.417.073.018.009.034.018.059.029.288.137.81.164 1.25.137a2.26 2.26 0 0 0 .563-.095c.322.024.514.11.977.216.31.07.502.045.695-.007.193-.053.386-.13.723-.17a.542.542 0 0 1 .188.013c.038.02.075.04.11.061.062.049.214.135.343.189.164.068.59.357.645.425a.1.1 0 0 0 .038.03c.242.314.407.755.396 1.21-.06.46-.426.214-.626.12-.412-.178-.824-.302-1.305-.302-.48 0-1.099.041-1.635.179-.741.206-.961.192-1.29.027-.33-.178-.907-.618-.907-.618v.01c-.007-.007-.012-.012-.014-.01-.042.069-.138.247-.193.33-.027.522-.343 1.346-.934 1.552a.547.547 0 0 1-.467-.041 2.503 2.503 0 0 0-.55-.275c.481.384.729.673.949 1.181.174.43.415 1.017 1.002 1.646.363-.004.725.097.962.346.137.137.357.289.33.426 0 .041-.083.151-.151.234a3.231 3.231 0 0 1-.207.22c-.054.04-.247.192-.288.22-.041.027-.096.095-.137.109-.138.069-.289.014-.426-.055s.027-.082-.124-.192c-.34-.24-.541-.411-.454-.832-.932-.794-2.561-1.26-2.911-2.108-.22-.55-.248-.824-.042-1.058.605-.687.371-1.346.825-1.634.425-.275.783.04.989.33-.124-.509-.55-.633-.55-.674 0-.632.605-1.071 1.21-1.181.218-.041.389-.062.54-.06zm-1.847.534c-.14.196-.231.435-.246.721-.206.028-.673.055-.907.907a3.39 3.39 0 0 1-.214.62c-.103.045-2.946 1.274-5.229 2.542l-.01-.007c-.32.18-.627.363-.919.546l-.125.077-.001.003c-1.136.723-2.04 1.45-2.637 2.112.412-2.679 2.528-4.08 3.53-4.698 2.42-1.489 4.629-2.225 6.758-2.823zm8.037.323c.26-.004.536.06.756.275.59.577.425 1.209.247 1.648.15.179.508.687.288 1.291-.04.138-.343.138-.563.495.55-.316.893-.233 1.017.165.192.618-.234 1.36-.605 1.772 0-.014-.014-.028-.014-.041-.055.206-.123.604-.535 1.044-.206.22-.371.192-.605.137-.215-.054-.322-.142-.543-.276-.036-.207-.102-.482-.102-.59 0-.044-.004-.141-.01-.243.032-.036.066-.074.106-.114 0 0 .178-.247.44-.233.26.014.535-.041.604-.11 0-.48-.55-.494-.357-1.319.013-.04.082-.11.302-.137-.33-.069-.48-.083-.714-.302l-.013-.013c.11-.253.224-.457.301-.605.193-.385.082-.852.082-.852.207-.069.385-.179.413-.247.203-.673-.164-1.322-.605-1.74.036-.003.073-.005.11-.006zm-5.46.925c.01.016.02.033.034.05.179.22.577.495 1.113.673.26.083.467.028.7-.027 1.123-.278 2.304-.346 3.33.155a1.82 1.82 0 0 1-.157 1.068c-.232.465-.533 1.068-.48 2.215-.246.044-1.419.144-1.992.037-.521-.097-1.416-.525-1.62-.69a6.703 6.703 0 0 1-.125-.848 1.37 1.37 0 0 0 .454-.343c-.412.068-.577.04-.825-.097-.235-.13-.642-.533-.87-.82.229-.29.393-.69.335-1.226.037-.05.07-.099.102-.147zm-4.38 1.598c-.09.253.093.654.224.953.508 1.179 2.07 1.29 3.127 2.18a.723.723 0 0 0 .06.388c.083.165.371.413.371.413-.055.054-.027.164-.027.164.204.217.504.243.547.246-.435 1.248-.816 2.626-.451 4.095-.179.244-.368.445-.531.668a.851.851 0 0 1-.444-.31c-.591-.852-1.457-1.416-3.023-1.374-2.349.055-3.283-.907-3.461-2.748-.094-.974-.357-1.922-.888-2.479C7.489 9.014 9.6 7.937 10.268 7.73a2.8 2.8 0 0 0 .2-.073zm3.496.18c.381.442.795.727 1.193.979.082.343.11.577.192 1.03h-.041l-.027.308a2.836 2.836 0 0 0-.62-.113l.001-.003c-.893-1.057-.7-1.47-1.058-2.019.097-.034.225-.094.36-.182zm5.911 1.086c.076.067.178.12.323.154-.327.68.33.912.37 1.17-.143.083-.367.037-.603.025-.115-.006-.229.065-.321.147l.032-.367c.006-.43.09-.809.2-1.13zM15.79 9.947c.024.035.178.131 1.002.352 1.026.275 2.323.12 2.55.09a.378.378 0 0 1-.022.089c0 .343.055.59.096.81.053.308.13.533.163.74l.008-.007c.234 1.367.561 3.133-.267 4.048.041.192.069.467.014.783a3.204 3.204 0 0 1-.151.535 2.29 2.29 0 0 0-.108.352c-1.1.142-1.755.055-2.06-.015.123-.374.407-.754.876-.735-.022-.911-.264-1.223-.511-1.891.395-.883.299-1.665.621-2.848-.247.261-.44 1.209-.604 1.786-.206.838-.563 1.648-1.525 2.294 0 .22-.069.384-.151.494-.179.261-.412.344-.494.77.11-.138.26-.261.26-.22a8.51 8.51 0 0 1-.025.493l.012.001c-.165 1.044-.522 1.525-.742 2.115-.151.426-.096 1.36-.151 1.374-.385.083-.975-.068-1.14-.15.162-1.14.019-2.278.436-3.6l-.015-.006c.16-.554.478-.878.939-1.464-.161-.52-.532-1.64.266-4.182.033-.014.067-.03.105-.049l.206-.137c.04-.028.096-.069.137-.096.069-.042.371-.371.412-.412.096-.097.165-.124.192-.234.055-.206-.247-.412-.37-.55-.018-.019-.03-.034-.043-.05.013-.039.027-.077.042-.114.01-.125.028-.26.042-.367zm.883 7.942c.05.002.174.122.751.158.66.04 1.539-.083 1.772-.138.234-.055.097.11.069.275l-.026.169c-.399.134-1.008.188-1.416.202-.393.013-.846-.012-1.161-.11-.048-.26-.063-.47-.007-.55a.024.024 0 0 1 .018-.006zm2.506.846c-.02.135-.035.223-.058.372-.388.12-.888.122-1.27.135a4.413 4.413 0 0 1-1.012-.07 2.065 2.065 0 0 1-.033-.109 11.343 11.343 0 0 1-.065-.252c.179.034.53.079 1.15.087a4.142 4.142 0 0 0 1.288-.163zm-.106.685c-.069.44-.055 1.786-.014 2.157.014.11.948.522 1.277.77.107.085.259.157.422.222.042.042.116.105.197.203.162.213.052.436-.135.526-.264-.007-.568-.052-1.074-.128-.695-.104-1.129-.101-1.73-.106v-.003c-.152-.275-.056-.728-.056-.728a2.2 2.2 0 0 1-.809-.18l.012-.026c.234-.48.22-.591.151-1.415-.047-.578-.196-.883-.335-1.195.169.016.409.035.857.041a4.567 4.567 0 0 0 1.237-.138zm-5.306 2.084c.243 0 .6.032.676.1v.014c.014.165.165.399.11.522-.027.069-.096-.041-.192-.068.041.26.151.741.316 1.112.11.248.041.426-.33.495-.33.014-.755 0-1.112-.083-.412-.206-.55-.316-.467-.7.068-.275.494-.59.865-.838-.206.014-.426.165-.398-.014.055-.357.206-.33.302-.508-.02-.02.084-.032.23-.032z"}],q8=()=>P.jsxs("div",{className:"relative w-full max-w-7xl mt-24 z-10 flex flex-col items-center",children:[P.jsx("div",{className:"red-halo","aria-hidden":"true"}),P.jsx("span",{className:"relative text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em] mb-4",children:"Languages & Tools"}),P.jsx("h3",{className:"relative text-4xl md:text-6xl font-black tracking-tight uppercase text-white mb-12",children:"MY TECH STACK."}),P.jsx("ul",{className:"grid-blur relative flex flex-wrap justify-center gap-4 md:gap-6 list-none p-0 m-0",children:$8.map(t=>P.jsxs("li",{className:"matrix-item glass glass-grid-card group w-[132px] h-[190px] md:w-[148px] md:h-[216px] xl:w-[152px] xl:h-[224px] rounded-3xl flex flex-col items-center justify-center gap-5 px-2",children:[P.jsx("svg",{viewBox:"0 0 24 24",role:"img","aria-label":t.label,className:"shrink-0 w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110",style:{fill:t.color,filter:`drop-shadow(0 0 10px ${t.color}55)`},children:P.jsx("path",{d:t.path})}),P.jsx("span",{className:"text-xs md:text-sm font-semibold text-gray-400 group-hover:text-gray-100 transition-colors text-center leading-tight whitespace-pre-line",children:t.label})]},t.label))})]});Gt.registerPlugin(lt);const K8=()=>{const t=re.useRef(null),e=re.useRef(null);re.useEffect(()=>{const i=Gt.context(()=>{Gt.timeline({scrollTrigger:{trigger:t.current,start:"top 80%",toggleActions:"play none none reverse"}}).fromTo(e.current,{y:20,opacity:0},{y:0,opacity:1,duration:.5,ease:"power3.out"}).fromTo(".matrix-item",{y:25,opacity:0,x:-10},{y:0,opacity:1,x:0,duration:.4,stagger:.04,ease:"back.out(1.4)"},"-=0.2")},t);return()=>i.revert()},[]);const n=[{name:"MERN Full-Stack",category:"MongoDB · Express · React · Node.js",level:"Advanced"},{name:"Python Full-Stack & APIs",category:"Python · FastAPI · Django · Flask",level:"Advanced"},{name:"IoT & Telematics Systems",category:"GPS Tracking · MQTT · WebSockets · Sensors",level:"Advanced"},{name:"Databases & Storage",category:"MongoDB · PostgreSQL · SQLite · Redis",level:"Advanced"},{name:"Enterprise Portals & Systems",category:"Hospital, School & Hotel Portals · RBAC",level:"Advanced"},{name:"Modern UI & Interactive Web",category:"React · Redux · Tailwind CSS · Bootstrap 5",level:"Advanced"}];return P.jsxs("section",{id:"skills",ref:t,className:"relative w-full text-gray-100 py-28 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5",children:[P.jsxs("div",{ref:e,className:"flex flex-col items-center text-center mb-16 z-10",children:[P.jsx("span",{className:"text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em] mb-2",children:"What I Work With"}),P.jsx("h2",{className:"text-5xl md:text-7xl font-black tracking-tight uppercase text-white",children:"TECHNICAL SKILLS."}),P.jsx("div",{className:"w-20 h-1.5 bg-[#a31515] mt-3 rounded-full"})]}),P.jsxs("div",{className:"relative w-full max-w-6xl z-10",children:[P.jsx("div",{className:"red-halo","aria-hidden":"true"}),P.jsx("div",{className:"grid-blur relative grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7",children:n.map(i=>P.jsxs("div",{className:"matrix-item glass glass-grid-card group p-6 md:p-8 rounded-3xl flex items-center justify-between gap-4",children:[P.jsx("div",{className:"flex items-center gap-4 md:gap-5 min-w-0",children:P.jsxs("div",{className:"min-w-0",children:[P.jsx("h3",{className:"font-bold text-lg md:text-2xl text-gray-100 group-hover:text-[#a31515] transition-colors",children:i.name}),P.jsx("span",{className:"text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider",children:i.category})]})}),P.jsx("span",{className:"glass-chip text-xs md:text-sm font-black uppercase tracking-wider px-4 py-1.5 text-gray-200 shrink-0 group-hover:text-white rounded-full",children:i.level})]},i.name))})]}),P.jsx(q8,{})]})};Gt.registerPlugin(lt);const Z8=()=>{const t=re.useRef(null),e=re.useRef(null),n=re.useRef(null),[i,r]=re.useState(!1),[s,o]=re.useState({name:"",email:"",message:""});re.useEffect(()=>{const l=Gt.context(()=>{Gt.timeline({scrollTrigger:{trigger:t.current,start:"top 80%",toggleActions:"play none none reverse"}}).fromTo(e.current,{y:20,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out"}).fromTo(n.current,{y:30,opacity:0},{y:0,opacity:1,duration:.7,ease:"back.out(1.4)"},"-=0.3")},t);return()=>l.revert()},[]);const a=l=>{l.preventDefault(),r(!0);const c=`mailto:${ra.email}?subject=${encodeURIComponent(`Project Inquiry from ${s.name}`)}&body=${encodeURIComponent(`Name: ${s.name}
Email: ${s.email}

Message:
${s.message}`)}`;window.location.href=c,setTimeout(()=>{r(!1),o({name:"",email:"",message:""})},5e3)};return P.jsxs("section",{id:"contact",ref:t,className:"relative w-full text-gray-100 py-28 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5",children:[P.jsxs("div",{ref:e,className:"flex flex-col items-center text-center mb-14 z-10",children:[P.jsxs("span",{className:"text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em] mb-2 flex items-center gap-1.5",children:[P.jsx("img",{src:"./assets/spydy-DLbFrGCQ.png",alt:"Spider",className:"w-6 h-6 object-contain"}),"Get In Touch"]}),P.jsx("h2",{className:"text-5xl md:text-7xl font-black tracking-tight uppercase text-white",children:"CONTACT."}),P.jsx("div",{className:"w-20 h-1.5 bg-[#a31515] mt-3 rounded-full"})]}),P.jsxs("div",{className:"relative w-full max-w-4xl z-10",children:[P.jsxs("a",{href:ra.whatsapp.url,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with Shubham Ojha on WhatsApp",className:"whatsapp-card glass glass-hover mb-8 flex items-center gap-4 rounded-3xl px-6 py-5 md:px-8 relative z-10",children:[P.jsx("span",{className:"whatsapp-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl",children:P.jsx("svg",{viewBox:"0 0 24 24",className:"h-6 w-6",fill:"currentColor","aria-hidden":"true",children:P.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})})}),P.jsxs("span",{className:"flex min-w-0 flex-col",children:[P.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gray-400",children:"WhatsApp"}),P.jsx("span",{className:"text-base sm:text-lg md:text-xl font-extrabold text-gray-100",children:ra.whatsapp.number})]}),P.jsx("span",{className:"whatsapp-cta ml-auto hidden shrink-0 text-xs font-bold uppercase tracking-wider sm:block",children:"Chat now →"})]}),P.jsxs("a",{href:`tel:+${ra.whatsapp.number}`,className:"glass glass-hover mb-8 flex items-center gap-4 rounded-3xl px-6 py-5 md:px-8 relative z-10",children:[P.jsx("span",{className:"glass-chip grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-red-500",children:P.jsx(j8,{className:"h-6 w-6","aria-hidden":"true"})}),P.jsxs("span",{className:"flex min-w-0 flex-col",children:[P.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gray-400",children:"Call / Phone"}),P.jsx("span",{className:"text-base sm:text-lg md:text-xl font-extrabold text-gray-100",children:"+91 9031864978 / +91 9769457670"})]})]}),P.jsx("div",{className:"red-halo",style:{inset:"-14% -10%"},"aria-hidden":"true"}),P.jsx("div",{ref:n,className:"glass glass-panel-card w-full p-8 md:p-14 rounded-3xl relative z-10",children:i?P.jsxs("div",{className:"py-12 flex flex-col items-center text-center",children:[P.jsx("div",{className:"glass-red w-16 h-16 text-white rounded-full flex items-center justify-center text-3xl font-black mb-4 animate-bounce",children:"✓"}),P.jsx("h3",{className:"text-3xl font-black uppercase tracking-tight text-white mb-3",children:"Message Dispatched!"}),P.jsx("p",{className:"text-lg text-gray-300 font-medium max-w-md",children:"Thanks for reaching out! Your email app has been opened with the project details pre-filled."})]}):P.jsxs("form",{onSubmit:a,className:"flex flex-col gap-7",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("div",{className:"w-10 h-10 rounded-full glass-chip flex items-center justify-center text-red-500",children:P.jsx(W8,{className:"w-5 h-5"})}),P.jsxs("div",{children:[P.jsx("span",{className:"text-[10px] uppercase font-mono tracking-wider text-gray-400 block",children:"Direct Inquiries"}),P.jsx("a",{href:`mailto:${ra.email}`,className:"text-sm md:text-base font-bold text-white hover:text-red-400 transition-colors",children:ra.email})]})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),P.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-emerald-400",children:"Open To New Projects"})]})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[P.jsxs("div",{className:"flex flex-col gap-2.5",children:[P.jsx("label",{className:"text-sm md:text-base font-bold uppercase tracking-wider text-gray-400",children:"Your Name"}),P.jsx("input",{required:!0,type:"text",value:s.name,onChange:l=>o(c=>({...c,name:l.target.value})),placeholder:"Your Name",className:"w-full px-6 py-5 glass-input rounded-3xl text-lg md:text-xl font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all"})]}),P.jsxs("div",{className:"flex flex-col gap-2.5",children:[P.jsx("label",{className:"text-sm md:text-base font-bold uppercase tracking-wider text-gray-400",children:"Your Email"}),P.jsx("input",{required:!0,type:"email",value:s.email,onChange:l=>o(c=>({...c,email:l.target.value})),placeholder:"your.email@example.com",className:"w-full px-6 py-5 glass-input rounded-3xl text-lg md:text-xl font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all"})]})]}),P.jsxs("div",{className:"flex flex-col gap-2.5",children:[P.jsx("label",{className:"text-sm md:text-base font-bold uppercase tracking-wider text-gray-400",children:"Message & Project Scope"}),P.jsx("textarea",{required:!0,rows:6,value:s.message,onChange:l=>o(c=>({...c,message:l.target.value})),placeholder:"Tell me about your idea, timeline and what you need built...",className:"w-full px-6 py-5 glass-input rounded-3xl text-lg md:text-xl font-medium text-gray-100 placeholder:text-gray-500 focus:outline-none transition-all resize-none"})]}),P.jsx(UA,{type:"submit",variant:"primary",className:"self-center mt-2",children:"Send Message"})]})})]})]})},J8=new Date().getFullYear(),Q8=()=>P.jsx("footer",{className:"glass-bar w-full text-white py-14 px-6 md:px-16 border-t border-white/5",children:P.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[P.jsxs("div",{className:"flex flex-col items-center md:items-start gap-1",children:[P.jsxs("a",{href:"/",className:"text-2xl font-black tracking-tight uppercase flex items-center",children:[P.jsx("span",{className:"text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]",children:"S"}),P.jsx("span",{children:"HUBHAM"})]}),P.jsx("p",{className:"text-[11px] text-gray-400 font-mono tracking-widest uppercase",children:"Full-Stack & AI Developer"})]}),P.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3",children:g8.map(t=>P.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"glass-chip px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all hover:scale-105",children:t.label},t.id))}),P.jsxs("div",{className:"flex flex-col items-center md:items-end gap-3",children:[P.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400 uppercase tracking-widest font-bold",children:[P.jsx("a",{href:"#about",className:"hover:text-red-500 transition-colors",children:"About"}),P.jsx("a",{href:"#skills",className:"hover:text-red-500 transition-colors",children:"Skills"}),P.jsx("a",{href:"#projects",className:"hover:text-red-500 transition-colors",children:"Projects"}),P.jsx("a",{href:"#education",className:"hover:text-red-500 transition-colors",children:"Education"}),P.jsx("a",{href:"#contact",className:"hover:text-red-500 transition-colors",children:"Contact"})]}),P.jsxs("div",{className:"text-[11px] text-gray-500 font-mono uppercase tracking-wider",children:["© ",J8," Shubham Ojha. All rights reserved."]})]})]})}),xx=re.createContext({});function yx(t){const e=re.useRef(null);return e.current===null&&(e.current=t()),e.current}const hm=re.createContext(null),Sx=re.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class eO extends re.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function tO({children:t,isPresent:e}){const n=re.useId(),i=re.useRef(null),r=re.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=re.useContext(Sx);return re.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),P.jsx(eO,{isPresent:e,childRef:i,sizeRef:r,children:re.cloneElement(t,{ref:i})})}const nO=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=yx(iO),l=re.useId(),c=re.useCallback(f=>{a.set(f,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=re.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return re.useMemo(()=>{a.forEach((f,d)=>a.set(d,!1))},[n]),re.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=P.jsx(tO,{isPresent:n,children:t})),P.jsx(hm.Provider,{value:u,children:t})};function iO(){return new Map}function lb(t=!0){const e=re.useContext(hm);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=re.useId();re.useEffect(()=>{t&&r(s)},[t]);const o=re.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const lh=t=>t.key||"";function hM(t){const e=[];return re.Children.forEach(t,n=>{re.isValidElement(n)&&e.push(n)}),e}const Mx=typeof window<"u",cb=Mx?re.useLayoutEffect:re.useEffect,rO=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=lb(o),c=re.useMemo(()=>hM(t),[t]),u=o&&!a?[]:c.map(lh),f=re.useRef(!0),d=re.useRef(c),h=yx(()=>new Map),[g,v]=re.useState(c),[m,p]=re.useState(c);cb(()=>{f.current=!1,d.current=c;for(let S=0;S<m.length;S++){const E=lh(m[S]);u.includes(E)?h.delete(E):h.get(E)!==!0&&h.set(E,!1)}},[m,u.length,u.join("-")]);const _=[];if(c!==g){let S=[...c];for(let E=0;E<m.length;E++){const C=m[E],M=lh(C);u.includes(M)||(S.splice(E,0,C),_.push(C))}s==="wait"&&_.length&&(S=_),p(hM(S)),v(c);return}const{forceRender:x}=re.useContext(xx);return P.jsx(P.Fragment,{children:m.map(S=>{const E=lh(S),C=o&&!a?!1:c===m||u.includes(E),M=()=>{if(h.has(E))h.set(E,!0);else return;let A=!0;h.forEach(U=>{U||(A=!1)}),A&&(x==null||x(),p(d.current),o&&(l==null||l()),i&&i())};return P.jsx(nO,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:C?void 0:M,children:S},E)})})},fr=t=>t;let ub=fr;function wx(t){let e;return()=>(e===void 0&&(e=t()),e)}const bc=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Os=t=>t*1e3,ks=t=>t/1e3,sO={useManualTiming:!1};function oO(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const h=f&&i?e:n;return u&&s.add(c),h.has(c)||h.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const ch=["read","resolveKeyframes","update","preRender","render","postRender"],aO=40;function fb(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ch.reduce((p,_)=>(p[_]=oO(s),p),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:d}=o,h=()=>{const p=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(p-r.timestamp,aO),1),r.timestamp=p,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(h))},g=()=>{n=!0,i=!0,r.isProcessing||t(h)};return{schedule:ch.reduce((p,_)=>{const x=o[_];return p[_]=(S,E=!1,C=!1)=>(n||g(),x.schedule(S,E,C)),p},{}),cancel:p=>{for(let _=0;_<ch.length;_++)o[ch[_]].cancel(p)},state:r,steps:o}}const{schedule:Kt,cancel:zo,state:Wn,steps:$0}=fb(typeof requestAnimationFrame<"u"?requestAnimationFrame:fr,!0),db=re.createContext({strict:!1}),pM={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Cc={};for(const t in pM)Cc[t]={isEnabled:e=>pM[t].some(n=>!!e[n])};function lO(t){for(const e in t)Cc[e]={...Cc[e],...t[e]}}const cO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Np(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||cO.has(t)}let hb=t=>!Np(t);function uO(t){t&&(hb=e=>e.startsWith("on")?!Np(e):t(e))}try{uO(require("@emotion/is-prop-valid").default)}catch{}function fO(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(hb(r)||n===!0&&Np(r)||!e&&!Np(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function dO(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const pm=re.createContext({});function Uf(t){return typeof t=="string"||Array.isArray(t)}function mm(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ex=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tx=["initial",...Ex];function gm(t){return mm(t.animate)||Tx.some(e=>Uf(t[e]))}function pb(t){return!!(gm(t)||t.variants)}function hO(t,e){if(gm(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Uf(n)?n:void 0,animate:Uf(i)?i:void 0}}return t.inherit!==!1?e:{}}function pO(t){const{initial:e,animate:n}=hO(t,re.useContext(pm));return re.useMemo(()=>({initial:e,animate:n}),[mM(e),mM(n)])}function mM(t){return Array.isArray(t)?t.join(" "):t}const mO=Symbol.for("motionComponentSymbol");function zl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function gO(t,e,n){return re.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):zl(n)&&(n.current=i))},[e])}const Ax=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vO="framerAppearId",mb="data-"+Ax(vO),{schedule:bx}=fb(queueMicrotask,!1),gb=re.createContext({});function _O(t,e,n,i,r){var s,o;const{visualElement:a}=re.useContext(pm),l=re.useContext(db),c=re.useContext(hm),u=re.useContext(Sx).reducedMotion,f=re.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=f.current,h=re.useContext(gb);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&xO(f.current,n,r,h);const g=re.useRef(!1);re.useInsertionEffect(()=>{d&&g.current&&d.update(n,c)});const v=n[mb],m=re.useRef(!!v&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,v))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,v)));return cb(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),bx.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),re.useEffect(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,v)}),m.current=!1))}),d}function xO(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:vb(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&zl(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function vb(t){if(t)return t.options.allowProjection!==!1?t.projection:vb(t.parent)}function yO({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&lO(t);function a(c,u){let f;const d={...re.useContext(Sx),...c,layoutId:SO(c)},{isStatic:h}=d,g=pO(c),v=i(c,h);if(!h&&Mx){MO();const m=wO(d);f=m.MeasureLayout,g.visualElement=_O(r,v,d,e,m.ProjectionNode)}return P.jsxs(pm.Provider,{value:g,children:[f&&g.visualElement?P.jsx(f,{visualElement:g.visualElement,...d}):null,n(r,c,gO(v,g.visualElement,u),v,h,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=re.forwardRef(a);return l[mO]=r,l}function SO({layoutId:t}){const e=re.useContext(xx).id;return e&&t!==void 0?e+"-"+t:t}function MO(t,e){re.useContext(db).strict}function wO(t){const{drag:e,layout:n}=Cc;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const EO=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cx(t){return typeof t!="string"||t.includes("-")?!1:!!(EO.indexOf(t)>-1||/[A-Z]/u.test(t))}function gM(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Rx(t,e,n,i){if(typeof e=="function"){const[r,s]=gM(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=gM(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const _1=t=>Array.isArray(t),TO=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),AO=t=>_1(t)?t[t.length-1]||0:t,ui=t=>!!(t&&t.getVelocity);function Vh(t){const e=ui(t)?t.get():t;return TO(e)?e.toValue():e}function bO({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:CO(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const _b=t=>(e,n)=>{const i=re.useContext(pm),r=re.useContext(hm),s=()=>bO(t,e,i,r);return n?s():yx(s)};function CO(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Vh(s[d]);let{initial:o,animate:a}=t;const l=gm(t),c=pb(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!mm(f)){const d=Array.isArray(f)?f:[f];for(let h=0;h<d.length;h++){const g=Rx(t,d[h]);if(g){const{transitionEnd:v,transition:m,...p}=g;for(const _ in p){let x=p[_];if(Array.isArray(x)){const S=u?x.length-1:0;x=x[S]}x!==null&&(r[_]=x)}for(const _ in v)r[_]=v[_]}}}return r}const Oc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ja=new Set(Oc),xb=t=>e=>typeof e=="string"&&e.startsWith(t),yb=xb("--"),RO=xb("var(--"),Px=t=>RO(t)?PO.test(t.split("/*")[0].trim()):!1,PO=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Sb=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Xs=(t,e,n)=>n>e?e:n<t?t:n,kc={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ff={...kc,transform:t=>Xs(0,1,t)},uh={...kc,default:1},qf=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),no=qf("deg"),ds=qf("%"),st=qf("px"),LO=qf("vh"),DO=qf("vw"),vM={...ds,parse:t=>ds.parse(t)/100,transform:t=>ds.transform(t*100)},NO={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st},IO={rotate:no,rotateX:no,rotateY:no,rotateZ:no,scale:uh,scaleX:uh,scaleY:uh,scaleZ:uh,skew:no,skewX:no,skewY:no,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:Ff,originX:vM,originY:vM,originZ:st},_M={...kc,transform:Math.round},Lx={...NO,...IO,zIndex:_M,size:st,fillOpacity:Ff,strokeOpacity:Ff,numOctaves:_M},UO={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FO=Oc.length;function OO(t,e,n){let i="",r=!0;for(let s=0;s<FO;s++){const o=Oc[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Sb(a,Lx[o]);if(!l){r=!1;const u=UO[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Dx(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Ja.has(l)){o=!0;continue}else if(yb(l)){r[l]=c;continue}else{const u=Sb(c,Lx[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=OO(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const kO={offset:"stroke-dashoffset",array:"stroke-dasharray"},BO={offset:"strokeDashoffset",array:"strokeDasharray"};function zO(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?kO:BO;t[s.offset]=st.transform(-i);const o=st.transform(e),a=st.transform(n);t[s.array]=`${o} ${a}`}function xM(t,e,n){return typeof t=="string"?t:st.transform(e+n*t)}function VO(t,e,n){const i=xM(e,t.x,t.width),r=xM(n,t.y,t.height);return`${i} ${r}`}function Nx(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(Dx(t,c,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h,dimensions:g}=t;d.transform&&(g&&(h.transform=d.transform),delete d.transform),g&&(r!==void 0||s!==void 0||h.transform)&&(h.transformOrigin=VO(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&zO(d,o,a,l,!1)}const Ix=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Mb=()=>({...Ix(),attrs:{}}),Ux=t=>typeof t=="string"&&t.toLowerCase()==="svg";function wb(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Eb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Tb(t,e,n,i){wb(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Eb.has(r)?r:Ax(r),e.attrs[r])}const Ip={};function HO(t){Object.assign(Ip,t)}function Ab(t,{layout:e,layoutId:n}){return Ja.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ip[t]||t==="opacity")}function Fx(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(ui(r[o])||e.style&&ui(e.style[o])||Ab(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function bb(t,e,n){const i=Fx(t,e,n);for(const r in t)if(ui(t[r])||ui(e[r])){const s=Oc.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function GO(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const yM=["x","y","width","height","cx","cy","r"],WO={useVisualState:_b({scrapeMotionValuesFromProps:bb,createRenderState:Mb,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Ja.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<yM.length;a++){const l=yM[a];t[l]!==e[l]&&(o=!0)}o&&Kt.read(()=>{GO(n,i),Kt.render(()=>{Nx(i,r,Ux(n.tagName),t.transformTemplate),Tb(n,i)})})}})},jO={useVisualState:_b({scrapeMotionValuesFromProps:Fx,createRenderState:Ix})};function Cb(t,e,n){for(const i in e)!ui(e[i])&&!Ab(i,n)&&(t[i]=e[i])}function XO({transformTemplate:t},e){return re.useMemo(()=>{const n=Ix();return Dx(n,e,t),Object.assign({},n.vars,n.style)},[e])}function YO(t,e){const n=t.style||{},i={};return Cb(i,n,t),Object.assign(i,XO(t,e)),i}function $O(t,e){const n={},i=YO(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function qO(t,e,n,i){const r=re.useMemo(()=>{const s=Mb();return Nx(s,e,Ux(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Cb(s,t.style,t),r.style={...s,...r.style}}return r}function KO(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Cx(n)?qO:$O)(i,s,o,n),c=fO(i,typeof n=="string",t),u=n!==re.Fragment?{...c,...l,ref:r}:{},{children:f}=i,d=re.useMemo(()=>ui(f)?f.get():f,[f]);return re.createElement(n,{...u,children:d})}}function ZO(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Cx(i)?WO:jO,preloadedFeatures:t,useRender:KO(r),createVisualElement:e,Component:i};return yO(o)}}function Rb(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function vm(t,e,n){const i=t.getProps();return Rx(i,e,n!==void 0?n:i.custom,t)}const JO=wx(()=>window.ScrollTimeline!==void 0);class QO{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(JO()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ek extends QO{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Ox(t,e){return t?t[e]||t.default||t:void 0}const x1=2e4;function Pb(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<x1;)e+=n,i=t.next(e);return e>=x1?1/0:e}function kx(t){return typeof t=="function"}function SM(t,e){t.timeline=e,t.onfinish=null}const Bx=t=>Array.isArray(t)&&typeof t[0]=="number",tk={linearEasing:void 0};function nk(t,e){const n=wx(t);return()=>{var i;return(i=tk[e])!==null&&i!==void 0?i:n()}}const Up=nk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Lb=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(bc(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Db(t){return!!(typeof t=="function"&&Up()||!t||typeof t=="string"&&(t in y1||Up())||Bx(t)||Array.isArray(t)&&t.every(Db))}const wu=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,y1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wu([0,.65,.55,1]),circOut:wu([.55,0,1,.45]),backIn:wu([.31,.01,.66,-.59]),backOut:wu([.33,1.53,.69,.99])};function Nb(t,e){if(t)return typeof t=="function"&&Up()?Lb(t,e):Bx(t)?wu(t):Array.isArray(t)?t.map(n=>Nb(n,e)||y1.easeOut):y1[t]}const Wr={x:!1,y:!1};function Ib(){return Wr.x||Wr.y}function ik(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Ub(t,e){const n=ik(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function MM(t){return e=>{e.pointerType==="touch"||Ib()||t(e)}}function rk(t,e,n={}){const[i,r,s]=Ub(t,n),o=MM(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=MM(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Fb=(t,e)=>e?t===e?!0:Fb(t,e.parentElement):!1,zx=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,sk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ok(t){return sk.has(t.tagName)||t.tabIndex!==-1}const Eu=new WeakSet;function wM(t){return e=>{e.key==="Enter"&&t(e)}}function q0(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ak=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=wM(()=>{if(Eu.has(n))return;q0(n,"down");const r=wM(()=>{q0(n,"up")}),s=()=>q0(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function EM(t){return zx(t)&&!Ib()}function lk(t,e,n={}){const[i,r,s]=Ub(t,n),o=a=>{const l=a.currentTarget;if(!EM(a)||Eu.has(l))return;Eu.add(l);const c=e(a),u=(h,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!EM(h)||!Eu.has(l))&&(Eu.delete(l),typeof c=="function"&&c(h,{success:g}))},f=h=>{u(h,n.useGlobalTarget||Fb(l,h.target))},d=h=>{u(h,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!ok(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>ak(c,r),r)}),s}function ck(t){return t==="x"||t==="y"?Wr[t]?null:(Wr[t]=!0,()=>{Wr[t]=!1}):Wr.x||Wr.y?null:(Wr.x=Wr.y=!0,()=>{Wr.x=Wr.y=!1})}const Ob=new Set(["width","height","top","left","right","bottom",...Oc]);let Hh;function uk(){Hh=void 0}const hs={now:()=>(Hh===void 0&&hs.set(Wn.isProcessing||sO.useManualTiming?Wn.timestamp:performance.now()),Hh),set:t=>{Hh=t,queueMicrotask(uk)}};function Vx(t,e){t.indexOf(e)===-1&&t.push(e)}function Hx(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Gx{constructor(){this.subscriptions=[]}add(e){return Vx(this.subscriptions,e),()=>Hx(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function kb(t,e){return e?t*(1e3/e):0}const TM=30,fk=t=>!isNaN(parseFloat(t));class dk{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=hs.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=hs.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fk(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Gx);const i=this.events[e].add(n);return e==="change"?()=>{i(),Kt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=hs.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>TM)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,TM);return kb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Of(t,e){return new dk(t,e)}function hk(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Of(n))}function pk(t,e){const n=vm(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=AO(s[o]);hk(t,o,a)}}function mk(t){return!!(ui(t)&&t.add)}function S1(t,e){const n=t.getValue("willChange");if(mk(n))return n.add(e)}function Bb(t){return t.props[mb]}const zb=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,gk=1e-7,vk=12;function _k(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=zb(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>gk&&++a<vk);return o}function Kf(t,e,n,i){if(t===e&&n===i)return fr;const r=s=>_k(s,0,1,t,n);return s=>s===0||s===1?s:zb(r(s),e,i)}const Vb=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Hb=t=>e=>1-t(1-e),Gb=Kf(.33,1.53,.69,.99),Wx=Hb(Gb),Wb=Vb(Wx),jb=t=>(t*=2)<1?.5*Wx(t):.5*(2-Math.pow(2,-10*(t-1))),jx=t=>1-Math.sin(Math.acos(t)),Xb=Hb(jx),Yb=Vb(jx),$b=t=>/^0[^.\s]+$/u.test(t);function xk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||$b(t):!0}const Ku=t=>Math.round(t*1e5)/1e5,Xx=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yk(t){return t==null}const Sk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yx=(t,e)=>n=>!!(typeof n=="string"&&Sk.test(n)&&n.startsWith(t)||e&&!yk(n)&&Object.prototype.hasOwnProperty.call(n,e)),qb=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Xx);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Mk=t=>Xs(0,255,t),K0={...kc,transform:t=>Math.round(Mk(t))},Ea={test:Yx("rgb","red"),parse:qb("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+K0.transform(t)+", "+K0.transform(e)+", "+K0.transform(n)+", "+Ku(Ff.transform(i))+")"};function wk(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const M1={test:Yx("#"),parse:wk,transform:Ea.transform},Vl={test:Yx("hsl","hue"),parse:qb("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ds.transform(Ku(e))+", "+ds.transform(Ku(n))+", "+Ku(Ff.transform(i))+")"},si={test:t=>Ea.test(t)||M1.test(t)||Vl.test(t),parse:t=>Ea.test(t)?Ea.parse(t):Vl.test(t)?Vl.parse(t):M1.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ea.transform(t):Vl.transform(t)},Ek=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Tk(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Xx))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Ek))===null||n===void 0?void 0:n.length)||0)>0}const Kb="number",Zb="color",Ak="var",bk="var(",AM="${}",Ck=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function kf(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Ck,l=>(si.test(l)?(i.color.push(s),r.push(Zb),n.push(si.parse(l))):l.startsWith(bk)?(i.var.push(s),r.push(Ak),n.push(l)):(i.number.push(s),r.push(Kb),n.push(parseFloat(l))),++s,AM)).split(AM);return{values:n,split:a,indexes:i,types:r}}function Jb(t){return kf(t).values}function Qb(t){const{split:e,types:n}=kf(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Kb?s+=Ku(r[o]):a===Zb?s+=si.transform(r[o]):s+=r[o]}return s}}const Rk=t=>typeof t=="number"?0:t;function Pk(t){const e=Jb(t);return Qb(t)(e.map(Rk))}const Vo={test:Tk,parse:Jb,createTransformer:Qb,getAnimatableNone:Pk},Lk=new Set(["brightness","contrast","saturate","opacity"]);function Dk(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Xx)||[];if(!i)return t;const r=n.replace(i,"");let s=Lk.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Nk=/\b([a-z-]*)\(.*?\)/gu,w1={...Vo,getAnimatableNone:t=>{const e=t.match(Nk);return e?e.map(Dk).join(" "):t}},Ik={...Lx,color:si,backgroundColor:si,outlineColor:si,fill:si,stroke:si,borderColor:si,borderTopColor:si,borderRightColor:si,borderBottomColor:si,borderLeftColor:si,filter:w1,WebkitFilter:w1},$x=t=>Ik[t];function eC(t,e){let n=$x(t);return n!==w1&&(n=Vo),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Uk=new Set(["auto","none","0"]);function Fk(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Uk.has(s)&&kf(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=eC(n,r)}const bM=t=>t===kc||t===st,CM=(t,e)=>parseFloat(t.split(", ")[e]),RM=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return CM(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?CM(s[1],t):0}},Ok=new Set(["x","y","z"]),kk=Oc.filter(t=>!Ok.has(t));function Bk(t){const e=[];return kk.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Rc={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:RM(4,13),y:RM(5,14)};Rc.translateX=Rc.x;Rc.translateY=Rc.y;const Ia=new Set;let E1=!1,T1=!1;function tC(){if(T1){const t=Array.from(Ia).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Bk(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}T1=!1,E1=!1,Ia.forEach(t=>t.complete()),Ia.clear()}function nC(){Ia.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(T1=!0)})}function zk(){nC(),tC()}class qx{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ia.add(this),E1||(E1=!0,Kt.read(nC),Kt.resolveKeyframes(tC))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ia.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ia.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const iC=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Vk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hk(t){const e=Vk.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function rC(t,e,n=1){const[i,r]=Hk(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return iC(o)?parseFloat(o):o}return Px(r)?rC(r,e,n+1):r}const sC=t=>e=>e.test(t),Gk={test:t=>t==="auto",parse:t=>t},oC=[kc,st,ds,no,DO,LO,Gk],PM=t=>oC.find(sC(t));class aC extends qx{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Px(c))){const u=rC(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Ob.has(i)||e.length!==2)return;const[r,s]=e,o=PM(r),a=PM(s);if(o!==a)if(bM(o)&&bM(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)xk(e[r])&&i.push(r);i.length&&Fk(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Rc[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Rc[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const LM=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Vo.test(t)||t==="0")&&!t.startsWith("url("));function Wk(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function jk(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=LM(r,e),a=LM(s,e);return!o||!a?!1:Wk(t)||(n==="spring"||kx(n))&&i}const Xk=t=>t!==null;function _m(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Xk),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Yk=40;class lC{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=hs.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Yk?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&zk(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=hs.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!jk(e,i,r,s))if(o)this.options.duration=0;else{l&&l(_m(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const an=(t,e,n)=>t+(e-t)*n;function Z0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function $k({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Z0(l,a,t+1/3),s=Z0(l,a,t),o=Z0(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Fp(t,e){return n=>n>0?e:t}const J0=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},qk=[M1,Ea,Vl],Kk=t=>qk.find(e=>e.test(t));function DM(t){const e=Kk(t);if(!e)return!1;let n=e.parse(t);return e===Vl&&(n=$k(n)),n}const NM=(t,e)=>{const n=DM(t),i=DM(e);if(!n||!i)return Fp(t,e);const r={...n};return s=>(r.red=J0(n.red,i.red,s),r.green=J0(n.green,i.green,s),r.blue=J0(n.blue,i.blue,s),r.alpha=an(n.alpha,i.alpha,s),Ea.transform(r))},Zk=(t,e)=>n=>e(t(n)),Zf=(...t)=>t.reduce(Zk),A1=new Set(["none","hidden"]);function Jk(t,e){return A1.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Qk(t,e){return n=>an(t,e,n)}function Kx(t){return typeof t=="number"?Qk:typeof t=="string"?Px(t)?Fp:si.test(t)?NM:nB:Array.isArray(t)?cC:typeof t=="object"?si.test(t)?NM:eB:Fp}function cC(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Kx(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function eB(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Kx(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function tB(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const nB=(t,e)=>{const n=Vo.createTransformer(e),i=kf(t),r=kf(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?A1.has(t)&&!r.values.length||A1.has(e)&&!i.values.length?Jk(t,e):Zf(cC(tB(i,r),r.values),n):Fp(t,e)};function uC(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?an(t,e,n):Kx(t)(t,e)}const iB=5;function fC(t,e,n){const i=Math.max(e-iB,0);return kb(n-t(i),e-i)}const un={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Q0=.001;function rB({duration:t=un.duration,bounce:e=un.bounce,velocity:n=un.velocity,mass:i=un.mass}){let r,s,o=1-e;o=Xs(un.minDamping,un.maxDamping,o),t=Xs(un.minDuration,un.maxDuration,ks(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,h=b1(c,o),g=Math.exp(-f);return Q0-d/h*g},s=c=>{const f=c*o*t,d=f*n+n,h=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),v=b1(Math.pow(c,2),o);return(-r(c)+Q0>0?-1:1)*((d-h)*g)/v}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Q0+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=oB(r,s,a);if(t=Os(t),isNaN(l))return{stiffness:un.stiffness,damping:un.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const sB=12;function oB(t,e,n){let i=n;for(let r=1;r<sB;r++)i=i-t(i)/e(i);return i}function b1(t,e){return t*Math.sqrt(1-e*e)}const aB=["duration","bounce"],lB=["stiffness","damping","mass"];function IM(t,e){return e.some(n=>t[n]!==void 0)}function cB(t){let e={velocity:un.velocity,stiffness:un.stiffness,damping:un.damping,mass:un.mass,isResolvedFromDuration:!1,...t};if(!IM(t,lB)&&IM(t,aB))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Xs(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:un.mass,stiffness:r,damping:s}}else{const n=rB(t);e={...e,...n,mass:un.mass},e.isResolvedFromDuration=!0}return e}function dC(t=un.visualDuration,e=un.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:h}=cB({...n,velocity:-ks(n.velocity||0)}),g=d||0,v=c/(2*Math.sqrt(l*u)),m=o-s,p=ks(Math.sqrt(l/u)),_=Math.abs(m)<5;i||(i=_?un.restSpeed.granular:un.restSpeed.default),r||(r=_?un.restDelta.granular:un.restDelta.default);let x;if(v<1){const E=b1(p,v);x=C=>{const M=Math.exp(-v*p*C);return o-M*((g+v*p*m)/E*Math.sin(E*C)+m*Math.cos(E*C))}}else if(v===1)x=E=>o-Math.exp(-p*E)*(m+(g+p*m)*E);else{const E=p*Math.sqrt(v*v-1);x=C=>{const M=Math.exp(-v*p*C),A=Math.min(E*C,300);return o-M*((g+v*p*m)*Math.sinh(A)+E*m*Math.cosh(A))/E}}const S={calculatedDuration:h&&f||null,next:E=>{const C=x(E);if(h)a.done=E>=f;else{let M=0;v<1&&(M=E===0?Os(g):fC(x,E,C));const A=Math.abs(M)<=i,U=Math.abs(o-C)<=r;a.done=A&&U}return a.value=a.done?o:C,a},toString:()=>{const E=Math.min(Pb(S),x1),C=Lb(M=>S.next(E*M).value,E,30);return E+"ms "+C}};return S}function UM({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},h=A=>a!==void 0&&A<a||l!==void 0&&A>l,g=A=>a===void 0?l:l===void 0||Math.abs(a-A)<Math.abs(l-A)?a:l;let v=n*e;const m=f+v,p=o===void 0?m:o(m);p!==m&&(v=p-f);const _=A=>-v*Math.exp(-A/i),x=A=>p+_(A),S=A=>{const U=_(A),y=x(A);d.done=Math.abs(U)<=c,d.value=d.done?p:y};let E,C;const M=A=>{h(d.value)&&(E=A,C=dC({keyframes:[d.value,g(d.value)],velocity:fC(x,A,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return M(0),{calculatedDuration:null,next:A=>{let U=!1;return!C&&E===void 0&&(U=!0,S(A),M(A)),E!==void 0&&A>=E?C.next(A-E):(!U&&S(A),d)}}}const uB=Kf(.42,0,1,1),fB=Kf(0,0,.58,1),hC=Kf(.42,0,.58,1),dB=t=>Array.isArray(t)&&typeof t[0]!="number",hB={linear:fr,easeIn:uB,easeInOut:hC,easeOut:fB,circIn:jx,circInOut:Yb,circOut:Xb,backIn:Wx,backInOut:Wb,backOut:Gb,anticipate:jb},FM=t=>{if(Bx(t)){ub(t.length===4);const[e,n,i,r]=t;return Kf(e,n,i,r)}else if(typeof t=="string")return hB[t];return t};function pB(t,e,n){const i=[],r=n||uC,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||fr:e;a=Zf(l,a)}i.push(a)}return i}function mB(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(ub(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=pB(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=bc(t[f],t[f+1],u);return a[f](d)};return n?u=>c(Xs(t[0],t[s-1],u)):c}function gB(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=bc(0,e,i);t.push(an(n,1,r))}}function vB(t){const e=[0];return gB(e,t.length-1),e}function _B(t,e){return t.map(n=>n*e)}function xB(t,e){return t.map(()=>e||hC).splice(0,t.length-1)}function Op({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=dB(i)?i.map(FM):FM(i),s={done:!1,value:e[0]},o=_B(n&&n.length===e.length?n:vB(e),t),a=mB(o,e,{ease:Array.isArray(r)?r:xB(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const yB=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Kt.update(e,!0),stop:()=>zo(e),now:()=>Wn.isProcessing?Wn.timestamp:hs.now()}},SB={decay:UM,inertia:UM,tween:Op,keyframes:Op,spring:dC},MB=t=>t/100;class Zx extends lC{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||qx,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=kx(n)?n:SB[n]||Op;let l,c;a!==Op&&typeof e[0]!="number"&&(l=Zf(MB,uC(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Pb(u));const{calculatedDuration:f}=u,d=f+r,h=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:h}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:A}=this.options;return{done:!0,value:A[A.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:h,repeatType:g,repeatDelay:v,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const p=this.currentTime-d*(this.speed>=0?1:-1),_=this.speed>=0?p<0:p>u;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let x=this.currentTime,S=s;if(h){const A=Math.min(this.currentTime,u)/f;let U=Math.floor(A),y=A%1;!y&&A>=1&&(y=1),y===1&&U--,U=Math.min(U,h+1),!!(U%2)&&(g==="reverse"?(y=1-y,v&&(y-=v/f)):g==="mirror"&&(S=o)),x=Xs(0,1,y)*f}const E=_?{done:!1,value:l[0]}:S.next(x);a&&(E.value=a(E.value));let{done:C}=E;!_&&c!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const M=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return M&&r!==void 0&&(E.value=_m(l,this.options,r)),m&&m(E.value),M&&this.finish(),E}get duration(){const{resolved:e}=this;return e?ks(e.calculatedDuration):0}get time(){return ks(this.currentTime)}set time(e){e=Os(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=ks(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=yB,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const wB=new Set(["opacity","clipPath","filter","transform"]);function EB(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Nb(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const TB=wx(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),kp=10,AB=2e4;function bB(t){return kx(t.type)||t.type==="spring"||!Db(t.ease)}function CB(t,e){const n=new Zx({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<AB;)i=n.sample(s),r.push(i.value),s+=kp;return{times:void 0,keyframes:r,duration:s-kp,ease:"linear"}}const pC={anticipate:jb,backInOut:Wb,circInOut:Yb};function RB(t){return t in pC}class OM extends lC{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new aC(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Up()&&RB(s)&&(s=pC[s]),bB(this.options)){const{onComplete:f,onUpdate:d,motionValue:h,element:g,...v}=this.options,m=CB(e,v);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=EB(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(SM(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(_m(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return ks(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return ks(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Os(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return fr;const{animation:i}=n;SM(i,e)}return fr}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:d,...h}=this.options,g=new Zx({...h,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),v=Os(this.time);c.setWithVelocity(g.sample(v-kp).value,g.sample(v).value,kp)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return TB()&&i&&wB.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const PB={type:"spring",stiffness:500,damping:25,restSpeed:10},LB=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),DB={type:"keyframes",duration:.8},NB={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IB=(t,{keyframes:e})=>e.length>2?DB:Ja.has(t)?t.startsWith("scale")?LB(e[1]):PB:NB;function UB({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Jx=(t,e,n,i={},r,s)=>o=>{const a=Ox(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Os(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};UB(a)||(u={...u,...IB(t,u)}),u.duration&&(u.duration=Os(u.duration)),u.repeatDelay&&(u.repeatDelay=Os(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const d=_m(u.keyframes,a);if(d!==void 0)return Kt.update(()=>{u.onUpdate(d),u.onComplete()}),new ek([])}return!s&&OM.supports(u)?new OM(u):new Zx(u)};function FB({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function mC(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),h=l[f];if(h===void 0||u&&FB(u,f))continue;const g={delay:n,...Ox(o||{},f)};let v=!1;if(window.MotionHandoffAnimation){const p=Bb(t);if(p){const _=window.MotionHandoffAnimation(p,f,Kt);_!==null&&(g.startTime=_,v=!0)}}S1(t,f),d.start(Jx(f,d,h,t.shouldReduceMotion&&Ob.has(f)?{type:!1}:g,t,v));const m=d.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{Kt.update(()=>{a&&pk(t,a)})}),c}function C1(t,e,n={}){var i;const r=vm(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(mC(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=s;return OB(t,e,u+c,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function OB(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(kB).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(C1(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function kB(t,e){return t.sortNodePosition(e)}function BB(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>C1(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=C1(t,e,n);else{const r=typeof e=="function"?vm(t,e,n.custom):e;i=Promise.all(mC(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const zB=Tx.length;function gC(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?gC(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<zB;n++){const i=Tx[n],r=t.props[i];(Uf(r)||r===!1)&&(e[i]=r)}return e}const VB=[...Ex].reverse(),HB=Ex.length;function GB(t){return e=>Promise.all(e.map(({animation:n,options:i})=>BB(t,n,i)))}function WB(t){let e=GB(t),n=kM(),i=!0;const r=l=>(c,u)=>{var f;const d=vm(t,u,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:h,transitionEnd:g,...v}=d;c={...c,...v,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=gC(t.parent)||{},f=[],d=new Set;let h={},g=1/0;for(let m=0;m<HB;m++){const p=VB[m],_=n[p],x=c[p]!==void 0?c[p]:u[p],S=Uf(x),E=p===l?_.isActive:null;E===!1&&(g=m);let C=x===u[p]&&x!==c[p]&&S;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),_.protectedKeys={...h},!_.isActive&&E===null||!x&&!_.prevProp||mm(x)||typeof x=="boolean")continue;const M=jB(_.prevProp,x);let A=M||p===l&&_.isActive&&!C&&S||m>g&&S,U=!1;const y=Array.isArray(x)?x:[x];let T=y.reduce(r(p),{});E===!1&&(T={});const{prevResolvedValues:I={}}=_,B={...I,...T},V=X=>{A=!0,d.has(X)&&(U=!0,d.delete(X)),_.needsAnimating[X]=!0;const F=t.getValue(X);F&&(F.liveStyle=!1)};for(const X in B){const F=T[X],Q=I[X];if(h.hasOwnProperty(X))continue;let N=!1;_1(F)&&_1(Q)?N=!Rb(F,Q):N=F!==Q,N?F!=null?V(X):d.add(X):F!==void 0&&d.has(X)?V(X):_.protectedKeys[X]=!0}_.prevProp=x,_.prevResolvedValues=T,_.isActive&&(h={...h,...T}),i&&t.blockInitialAnimation&&(A=!1),A&&(!(C&&M)||U)&&f.push(...y.map(X=>({animation:X,options:{type:p}})))}if(d.size){const m={};d.forEach(p=>{const _=t.getBaseTarget(p),x=t.getValue(p);x&&(x.liveStyle=!0),m[p]=_??null}),f.push({animation:m})}let v=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(v=!1),i=!1,v?e(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var h;return(h=d.animationState)===null||h===void 0?void 0:h.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=kM(),i=!0}}}function jB(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Rb(e,t):!1}function sa(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kM(){return{animate:sa(!0),whileInView:sa(),whileHover:sa(),whileTap:sa(),whileDrag:sa(),whileFocus:sa(),exit:sa()}}class Yo{constructor(e){this.isMounted=!1,this.node=e}update(){}}class XB extends Yo{constructor(e){super(e),e.animationState||(e.animationState=WB(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();mm(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let YB=0;class $B extends Yo{constructor(){super(...arguments),this.id=YB++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const qB={animation:{Feature:XB},exit:{Feature:$B}};function Bf(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Jf(t){return{point:{x:t.pageX,y:t.pageY}}}const KB=t=>e=>zx(e)&&t(e,Jf(e));function Zu(t,e,n,i){return Bf(t,e,KB(n),i)}const BM=(t,e)=>Math.abs(t-e);function ZB(t,e){const n=BM(t.x,e.x),i=BM(t.y,e.y);return Math.sqrt(n**2+i**2)}class vC{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=tg(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,h=ZB(f.offset,{x:0,y:0})>=3;if(!d&&!h)return;const{point:g}=f,{timestamp:v}=Wn;this.history.push({...g,timestamp:v});const{onStart:m,onMove:p}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=eg(d,this.transformPagePoint),Kt.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:h,onSessionEnd:g,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=tg(f.type==="pointercancel"?this.lastMoveEventInfo:eg(d,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,m),g&&g(f,m)},!zx(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Jf(e),a=eg(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Wn;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,tg(a,this.history)),this.removeListeners=Zf(Zu(this.contextWindow,"pointermove",this.handlePointerMove),Zu(this.contextWindow,"pointerup",this.handlePointerUp),Zu(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),zo(this.updatePoint)}}function eg(t,e){return e?{point:e(t.point)}:t}function zM(t,e){return{x:t.x-e.x,y:t.y-e.y}}function tg({point:t},e){return{point:t,delta:zM(t,_C(e)),offset:zM(t,JB(e)),velocity:QB(e,.1)}}function JB(t){return t[0]}function _C(t){return t[t.length-1]}function QB(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=_C(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Os(e)));)n--;if(!i)return{x:0,y:0};const s=ks(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const xC=1e-4,ez=1-xC,tz=1+xC,yC=.01,nz=0-yC,iz=0+yC;function mr(t){return t.max-t.min}function rz(t,e,n){return Math.abs(t-e)<=n}function VM(t,e,n,i=.5){t.origin=i,t.originPoint=an(e.min,e.max,t.origin),t.scale=mr(n)/mr(e),t.translate=an(n.min,n.max,t.origin)-t.originPoint,(t.scale>=ez&&t.scale<=tz||isNaN(t.scale))&&(t.scale=1),(t.translate>=nz&&t.translate<=iz||isNaN(t.translate))&&(t.translate=0)}function Ju(t,e,n,i){VM(t.x,e.x,n.x,i?i.originX:void 0),VM(t.y,e.y,n.y,i?i.originY:void 0)}function HM(t,e,n){t.min=n.min+e.min,t.max=t.min+mr(e)}function sz(t,e,n){HM(t.x,e.x,n.x),HM(t.y,e.y,n.y)}function GM(t,e,n){t.min=e.min-n.min,t.max=t.min+mr(e)}function Qu(t,e,n){GM(t.x,e.x,n.x),GM(t.y,e.y,n.y)}function oz(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?an(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?an(n,t,i.max):Math.min(t,n)),t}function WM(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function az(t,{top:e,left:n,bottom:i,right:r}){return{x:WM(t.x,n,r),y:WM(t.y,e,i)}}function jM(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function lz(t,e){return{x:jM(t.x,e.x),y:jM(t.y,e.y)}}function cz(t,e){let n=.5;const i=mr(t),r=mr(e);return r>i?n=bc(e.min,e.max-i,t.min):i>r&&(n=bc(t.min,t.max-r,e.min)),Xs(0,1,n)}function uz(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const R1=.35;function fz(t=R1){return t===!1?t=0:t===!0&&(t=R1),{x:XM(t,"left","right"),y:XM(t,"top","bottom")}}function XM(t,e,n){return{min:YM(t,e),max:YM(t,n)}}function YM(t,e){return typeof t=="number"?t:t[e]||0}const $M=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hl=()=>({x:$M(),y:$M()}),qM=()=>({min:0,max:0}),mn=()=>({x:qM(),y:qM()});function Sr(t){return[t("x"),t("y")]}function SC({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function dz({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function hz(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function ng(t){return t===void 0||t===1}function P1({scale:t,scaleX:e,scaleY:n}){return!ng(t)||!ng(e)||!ng(n)}function da(t){return P1(t)||MC(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function MC(t){return KM(t.x)||KM(t.y)}function KM(t){return t&&t!=="0%"}function Bp(t,e,n){const i=t-n,r=e*i;return n+r}function ZM(t,e,n,i,r){return r!==void 0&&(t=Bp(t,r,i)),Bp(t,n,i)+e}function L1(t,e=0,n=1,i,r){t.min=ZM(t.min,e,n,i,r),t.max=ZM(t.max,e,n,i,r)}function wC(t,{x:e,y:n}){L1(t.x,e.translate,e.scale,e.originPoint),L1(t.y,n.translate,n.scale,n.originPoint)}const JM=.999999999999,QM=1.0000000000001;function pz(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Wl(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,wC(t,o)),i&&da(s.latestValues)&&Wl(t,s.latestValues))}e.x<QM&&e.x>JM&&(e.x=1),e.y<QM&&e.y>JM&&(e.y=1)}function Gl(t,e){t.min=t.min+e,t.max=t.max+e}function ew(t,e,n,i,r=.5){const s=an(t.min,t.max,r);L1(t,e,n,s,i)}function Wl(t,e){ew(t.x,e.x,e.scaleX,e.scale,e.originX),ew(t.y,e.y,e.scaleY,e.scale,e.originY)}function EC(t,e){return SC(hz(t.getBoundingClientRect(),e))}function mz(t,e,n){const i=EC(t,n),{scroll:r}=e;return r&&(Gl(i.x,r.offset.x),Gl(i.y,r.offset.y)),i}const TC=({current:t})=>t?t.ownerDocument.defaultView:null,gz=new WeakMap;class vz{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=mn(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Jf(u).point)},s=(u,f)=>{const{drag:d,dragPropagation:h,onDragStart:g}=this.getProps();if(d&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ck(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Sr(m=>{let p=this.getAxisMotionValue(m).get()||0;if(ds.test(p)){const{projection:_}=this.visualElement;if(_&&_.layout){const x=_.layout.layoutBox[m];x&&(p=mr(x)*(parseFloat(p)/100))}}this.originPoint[m]=p}),g&&Kt.postRender(()=>g(u,f)),S1(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:h,onDirectionLock:g,onDrag:v}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:m}=f;if(h&&this.currentDirection===null){this.currentDirection=_z(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),v&&v(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Sr(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new vC(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:TC(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Kt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!fh(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=oz(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&zl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=az(r.layoutBox,n):this.constraints=!1,this.elastic=fz(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Sr(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=uz(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!zl(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=mz(i,r.root,this.visualElement.getTransformPagePoint());let o=lz(r.layout.layoutBox,s);if(n){const a=n(dz(o));this.hasMutatedConstraints=!!a,a&&(o=SC(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Sr(u=>{if(!fh(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,h=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return S1(this.visualElement,e),i.start(Jx(e,i,0,n,this.visualElement,!1))}stopAnimation(){Sr(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Sr(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Sr(n=>{const{drag:i}=this.getProps();if(!fh(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-an(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!zl(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Sr(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=cz({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Sr(o=>{if(!fh(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(an(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;gz.set(this.visualElement,this);const e=this.visualElement.current,n=Zu(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();zl(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Kt.read(i);const o=Bf(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Sr(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=R1,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function fh(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function _z(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class xz extends Yo{constructor(e){super(e),this.removeGroupControls=fr,this.removeListeners=fr,this.controls=new vz(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fr}unmount(){this.removeGroupControls(),this.removeListeners()}}const tw=t=>(e,n)=>{t&&Kt.postRender(()=>t(e,n))};class yz extends Yo{constructor(){super(...arguments),this.removePointerDownListener=fr}onPointerDown(e){this.session=new vC(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:TC(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:tw(e),onStart:tw(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Kt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Zu(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gh={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nw(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const au={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(st.test(t))t=parseFloat(t);else return t;const n=nw(t,e.target.x),i=nw(t,e.target.y);return`${n}% ${i}%`}},Sz={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Vo.parse(t);if(r.length>5)return i;const s=Vo.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=an(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class Mz extends re.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;HO(wz),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Gh.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Kt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),bx.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function AC(t){const[e,n]=lb(),i=re.useContext(xx);return P.jsx(Mz,{...t,layoutGroup:i,switchLayoutGroup:re.useContext(gb),isPresent:e,safeToRemove:n})}const wz={borderRadius:{...au,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:au,borderTopRightRadius:au,borderBottomLeftRadius:au,borderBottomRightRadius:au,boxShadow:Sz};function Ez(t,e,n){const i=ui(t)?t:Of(t);return i.start(Jx("",i,e,n)),i.animation}function Tz(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Az=(t,e)=>t.depth-e.depth;class bz{constructor(){this.children=[],this.isDirty=!1}add(e){Vx(this.children,e),this.isDirty=!0}remove(e){Hx(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Az),this.isDirty=!1,this.children.forEach(e)}}function Cz(t,e){const n=hs.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(zo(i),t(s-e))};return Kt.read(i,!0),()=>zo(i)}const bC=["TopLeft","TopRight","BottomLeft","BottomRight"],Rz=bC.length,iw=t=>typeof t=="string"?parseFloat(t):t,rw=t=>typeof t=="number"||st.test(t);function Pz(t,e,n,i,r,s){r?(t.opacity=an(0,n.opacity!==void 0?n.opacity:1,Lz(i)),t.opacityExit=an(e.opacity!==void 0?e.opacity:1,0,Dz(i))):s&&(t.opacity=an(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Rz;o++){const a=`border${bC[o]}Radius`;let l=sw(e,a),c=sw(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||rw(l)===rw(c)?(t[a]=Math.max(an(iw(l),iw(c),i),0),(ds.test(c)||ds.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=an(e.rotate||0,n.rotate||0,i))}function sw(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Lz=CC(0,.5,Xb),Dz=CC(.5,.95,fr);function CC(t,e,n){return i=>i<t?0:i>e?1:n(bc(t,e,i))}function ow(t,e){t.min=e.min,t.max=e.max}function xr(t,e){ow(t.x,e.x),ow(t.y,e.y)}function aw(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function lw(t,e,n,i,r){return t-=e,t=Bp(t,1/n,i),r!==void 0&&(t=Bp(t,1/r,i)),t}function Nz(t,e=0,n=1,i=.5,r,s=t,o=t){if(ds.test(e)&&(e=parseFloat(e),e=an(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=an(s.min,s.max,i);t===s&&(a-=e),t.min=lw(t.min,e,n,a,r),t.max=lw(t.max,e,n,a,r)}function cw(t,e,[n,i,r],s,o){Nz(t,e[n],e[i],e[r],e.scale,s,o)}const Iz=["x","scaleX","originX"],Uz=["y","scaleY","originY"];function uw(t,e,n,i){cw(t.x,e,Iz,n?n.x:void 0,i?i.x:void 0),cw(t.y,e,Uz,n?n.y:void 0,i?i.y:void 0)}function fw(t){return t.translate===0&&t.scale===1}function RC(t){return fw(t.x)&&fw(t.y)}function dw(t,e){return t.min===e.min&&t.max===e.max}function Fz(t,e){return dw(t.x,e.x)&&dw(t.y,e.y)}function hw(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function PC(t,e){return hw(t.x,e.x)&&hw(t.y,e.y)}function pw(t){return mr(t.x)/mr(t.y)}function mw(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Oz{constructor(){this.members=[]}add(e){Vx(this.members,e),e.scheduleRender()}remove(e){if(Hx(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function kz(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:h,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),h&&(i+=`skewX(${h}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const ha={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Tu=typeof window<"u"&&window.MotionDebug!==void 0,ig=["","X","Y","Z"],Bz={visibility:"hidden"},gw=1e3;let zz=0;function rg(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function LC(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Bb(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Kt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&LC(i)}function DC({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=zz++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Tu&&(ha.totalNodes=ha.resolvedTargetDeltas=ha.recalculatedProjection=0),this.nodes.forEach(Gz),this.nodes.forEach($z),this.nodes.forEach(qz),this.nodes.forEach(Wz),Tu&&window.MotionDebug.record(ha)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new bz)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Gx),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Tz(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Cz(d,250),Gh.hasAnimatedSinceResize&&(Gh.hasAnimatedSinceResize=!1,this.nodes.forEach(_w))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:h,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||e9,{onLayoutAnimationStart:m,onLayoutAnimationComplete:p}=u.getProps(),_=!this.targetLayout||!PC(this.targetLayout,g)||h,x=!d&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const S={...Ox(v,"layout"),onPlay:m,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else d||_w(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,zo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Kz),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&LC(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vw);return}this.isUpdating||this.nodes.forEach(Xz),this.isUpdating=!1,this.nodes.forEach(Yz),this.nodes.forEach(Vz),this.nodes.forEach(Hz),this.clearAllSnapshots();const a=hs.now();Wn.delta=Xs(0,1e3/60,a-Wn.timestamp),Wn.timestamp=a,Wn.isProcessing=!0,$0.update.process(Wn),$0.preRender.process(Wn),$0.render.process(Wn),Wn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bx.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jz),this.sharedNodes.forEach(Zz)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=mn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!RC(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||da(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),t9(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return mn();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(n9))){const{scroll:u}=this.root;u&&(Gl(l.x,u.offset.x),Gl(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=mn();if(xr(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&xr(l,o),Gl(l.x,f.offset.x),Gl(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=mn();xr(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Wl(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),da(u.latestValues)&&Wl(l,u.latestValues)}return da(this.latestValues)&&Wl(l,this.latestValues),l}removeTransform(o){const a=mn();xr(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!da(c.latestValues))continue;P1(c.latestValues)&&c.updateSnapshot();const u=mn(),f=c.measurePageBox();xr(u,f),uw(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return da(this.latestValues)&&uw(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Wn.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mn(),this.relativeTargetOrigin=mn(),Qu(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),xr(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=mn(),this.targetWithTransforms=mn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sz(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xr(this.target,this.layout.layoutBox),wC(this.target,this.targetDelta)):xr(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mn(),this.relativeTargetOrigin=mn(),Qu(this.relativeTargetOrigin,this.target,h.target),xr(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Tu&&ha.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||P1(this.parent.latestValues)||MC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Wn.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;xr(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;pz(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=mn());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(aw(this.prevProjectionDelta.x,this.projectionDelta.x),aw(this.prevProjectionDelta.y,this.projectionDelta.y)),Ju(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!mw(this.projectionDelta.x,this.prevProjectionDelta.x)||!mw(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Tu&&ha.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hl(),this.projectionDelta=Hl(),this.projectionDeltaWithTransform=Hl()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=mn(),h=l?l.source:void 0,g=this.layout?this.layout.source:void 0,v=h!==g,m=this.getStack(),p=!m||m.members.length<=1,_=!!(v&&!p&&this.options.crossfade===!0&&!this.path.some(Qz));this.animationProgress=0;let x;this.mixTargetDelta=S=>{const E=S/1e3;xw(f.x,o.x,E),xw(f.y,o.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qu(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Jz(this.relativeTarget,this.relativeTargetOrigin,d,E),x&&Fz(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=mn()),xr(x,this.relativeTarget)),v&&(this.animationValues=u,Pz(u,c,this.latestValues,E,_,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(zo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Kt.update(()=>{Gh.hasAnimatedSinceResize=!0,this.currentAnimation=Ez(0,gw,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&NC(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||mn();const f=mr(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=mr(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}xr(a,l),Wl(a,u),Ju(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Oz),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&rg("z",o,c,this.animationValues);for(let u=0;u<ig.length;u++)rg(`rotate${ig[u]}`,o,c,this.animationValues),rg(`skew${ig[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Bz;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Vh(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Vh(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!da(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=kz(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:h,y:g}=this.projectionDelta;c.transformOrigin=`${h.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in Ip){if(d[v]===void 0)continue;const{correct:m,applyTo:p}=Ip[v],_=c.transform==="none"?d[v]:m(d[v],f);if(p){const x=p.length;for(let S=0;S<x;S++)c[p[S]]=_}else c[v]=_}return this.options.layoutId&&(c.pointerEvents=f===this?Vh(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(vw),this.root.sharedNodes.clear()}}}function Vz(t){t.updateLayout()}function Hz(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Sr(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],h=mr(d);d.min=i[f].min,d.max=d.min+h}):NC(s,n.layoutBox,i)&&Sr(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],h=mr(i[f]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+h)});const a=Hl();Ju(a,i,n.layoutBox);const l=Hl();o?Ju(l,t.applyTransform(r,!0),n.measuredBox):Ju(l,i,n.layoutBox);const c=!RC(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:h}=f;if(d&&h){const g=mn();Qu(g,n.layoutBox,d.layoutBox);const v=mn();Qu(v,i,h.layoutBox),PC(g,v)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Gz(t){Tu&&ha.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Wz(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function jz(t){t.clearSnapshot()}function vw(t){t.clearMeasurements()}function Xz(t){t.isLayoutDirty=!1}function Yz(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function _w(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $z(t){t.resolveTargetDelta()}function qz(t){t.calcProjection()}function Kz(t){t.resetSkewAndRotation()}function Zz(t){t.removeLeadSnapshot()}function xw(t,e,n){t.translate=an(e.translate,0,n),t.scale=an(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function yw(t,e,n,i){t.min=an(e.min,n.min,i),t.max=an(e.max,n.max,i)}function Jz(t,e,n,i){yw(t.x,e.x,n.x,i),yw(t.y,e.y,n.y,i)}function Qz(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const e9={duration:.45,ease:[.4,0,.1,1]},Sw=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Mw=Sw("applewebkit/")&&!Sw("chrome/")?Math.round:fr;function ww(t){t.min=Mw(t.min),t.max=Mw(t.max)}function t9(t){ww(t.x),ww(t.y)}function NC(t,e,n){return t==="position"||t==="preserve-aspect"&&!rz(pw(e),pw(n),.2)}function n9(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const i9=DC({attachResizeListener:(t,e)=>Bf(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sg={current:void 0},IC=DC({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!sg.current){const t=new i9({});t.mount(window),t.setOptions({layoutScroll:!0}),sg.current=t}return sg.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),r9={pan:{Feature:yz},drag:{Feature:xz,ProjectionNode:IC,MeasureLayout:AC}};function Ew(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Kt.postRender(()=>s(e,Jf(e)))}class s9 extends Yo{mount(){const{current:e}=this.node;e&&(this.unmount=rk(e,n=>(Ew(this.node,n,"Start"),i=>Ew(this.node,i,"End"))))}unmount(){}}class o9 extends Yo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zf(Bf(this.node.current,"focus",()=>this.onFocus()),Bf(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Tw(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Kt.postRender(()=>s(e,Jf(e)))}class a9 extends Yo{mount(){const{current:e}=this.node;e&&(this.unmount=lk(e,n=>(Tw(this.node,n,"Start"),(i,{success:r})=>Tw(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const D1=new WeakMap,og=new WeakMap,l9=t=>{const e=D1.get(t.target);e&&e(t)},c9=t=>{t.forEach(l9)};function u9({root:t,...e}){const n=t||document;og.has(n)||og.set(n,{});const i=og.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(c9,{root:t,...e})),i[r]}function f9(t,e,n){const i=u9(e);return D1.set(t,n),i.observe(t),()=>{D1.delete(t),i.unobserve(t)}}const d9={some:0,all:1};class h9 extends Yo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:d9[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return f9(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(p9(e,n))&&this.startObserver()}unmount(){}}function p9({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const m9={inView:{Feature:h9},tap:{Feature:a9},focus:{Feature:o9},hover:{Feature:s9}},g9={layout:{ProjectionNode:IC,MeasureLayout:AC}},N1={current:null},UC={current:!1};function v9(){if(UC.current=!0,!!Mx)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>N1.current=t.matches;t.addListener(e),e()}else N1.current=!1}const _9=[...oC,si,Vo],x9=t=>_9.find(sC(t)),Aw=new WeakMap;function y9(t,e,n){for(const i in e){const r=e[i],s=n[i];if(ui(r))t.addValue(i,r);else if(ui(s))t.addValue(i,Of(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Of(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const bw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class S9{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qx,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=hs.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Kt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=gm(n),this.isVariantNode=pb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in d){const g=d[h];l[h]!==void 0&&ui(g)&&g.set(l[h],!1)}}mount(e){this.current=e,Aw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),UC.current||v9(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:N1.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Aw.delete(this.current),this.projection&&this.projection.unmount(),zo(this.notifyUpdate),zo(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Ja.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Kt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Cc){const n=Cc[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):mn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<bw.length;i++){const r=bw[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=y9(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Of(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(iC(r)||$b(r))?r=parseFloat(r):!x9(r)&&Vo.test(n)&&(r=eC(e,n)),this.setBaseTarget(e,ui(r)?r.get():r)),ui(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Rx(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ui(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Gx),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class FC extends S9{constructor(){super(...arguments),this.KeyframeResolver=aC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ui(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function M9(t){return window.getComputedStyle(t)}class w9 extends FC{constructor(){super(...arguments),this.type="html",this.renderInstance=wb}readValueFromInstance(e,n){if(Ja.has(n)){const i=$x(n);return i&&i.default||0}else{const i=M9(e),r=(yb(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return EC(e,n)}build(e,n,i){Dx(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Fx(e,n,i)}}class E9 extends FC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=mn}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ja.has(n)){const i=$x(n);return i&&i.default||0}return n=Eb.has(n)?n:Ax(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return bb(e,n,i)}build(e,n,i){Nx(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Tb(e,n,i,r)}mount(e){this.isSVGTag=Ux(e.tagName),super.mount(e)}}const T9=(t,e)=>Cx(t)?new E9(e):new w9(e,{allowProjection:t!==re.Fragment}),A9=ZO({...qB,...m9,...r9,...g9},T9),Cw=dO(A9),b9=({project:t,onClose:e,onNavigate:n,onInquire:i})=>{const r=re.useRef(null),s=re.useRef(null),o=t!==null;return re.useEffect(()=>{var u;if(!o)return;const a=document.activeElement,l=document.body.style.overflow;document.body.style.overflow="hidden",(u=s.current)==null||u.focus();const c=f=>{if(f.key==="Escape"&&e(),f.key==="ArrowRight"&&n(1),f.key==="ArrowLeft"&&n(-1),f.key==="Tab"&&r.current){const d=r.current.querySelectorAll('button, a[href], video[controls], [tabindex]:not([tabindex="-1"])');if(d.length===0)return;const h=d[0],g=d[d.length-1];f.shiftKey&&document.activeElement===h?(f.preventDefault(),g.focus()):!f.shiftKey&&document.activeElement===g&&(f.preventDefault(),h.focus())}};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c),document.body.style.overflow=l,a==null||a.focus()}},[o,e,n]),P.jsx(rO,{children:t&&P.jsxs("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6",children:[P.jsx(Cw.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"fixed inset-0 bg-black/55 backdrop-blur-2xl"}),P.jsxs(Cw.div,{ref:r,role:"dialog","aria-modal":"true","aria-label":t.title,initial:{opacity:0,scale:.96,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:16},transition:{duration:.25},className:"glass glass-strong relative z-10 flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-[#ff334b]/35 shadow-2xl shadow-red-950/50",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5",children:[P.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[P.jsx("span",{className:"glass-chip-red shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white",children:t.category}),P.jsx("h3",{className:"truncate text-base font-bold text-white",children:t.title})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("button",{type:"button",onClick:()=>n(-1),"aria-label":"Previous project",className:"glass-chip rounded-full p-2 text-gray-100 hover:text-white",children:P.jsx(H8,{className:"h-5 w-5"})}),P.jsx("button",{type:"button",onClick:()=>n(1),"aria-label":"Next project",className:"glass-chip rounded-full p-2 text-gray-100 hover:text-white",children:P.jsx(G8,{className:"h-5 w-5"})}),P.jsx("button",{ref:s,type:"button",onClick:e,"aria-label":"Close project",className:"glass-chip rounded-full p-2 text-gray-200 hover:bg-red-600/60 hover:text-white",children:P.jsx(X8,{className:"h-5 w-5"})})]})]}),P.jsx("div",{className:"relative flex aspect-video w-full items-center justify-center bg-black",children:t.embedUrl?P.jsx("iframe",{src:t.embedUrl.includes("youtube.com/embed")?`${t.embedUrl}?autoplay=1&rel=0&modestbranding=1`:t.embedUrl,title:t.title,allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,className:"w-full h-full border-0"},t.id):t.videoUrl?P.jsx("video",{src:t.videoUrl,poster:t.poster,controls:!0,autoPlay:!0,playsInline:!0,className:"h-full w-full object-contain"},t.id):t.poster?P.jsx("img",{src:t.poster,alt:`${t.title} preview`,draggable:!1,className:"h-full w-full object-cover"},t.id):P.jsx("p",{className:"px-6 text-center text-sm text-gray-300",children:"Preview unavailable."})}),P.jsxs("div",{className:"flex flex-col items-start justify-between gap-4 border-t border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center",children:[P.jsxs("div",{children:[P.jsx("p",{className:"text-sm leading-relaxed text-gray-100 sm:text-base",children:t.description??`${t.title}, ${t.subtitle}`}),t.tags&&t.tags.length>0&&P.jsx("ul",{className:"mt-3 flex flex-wrap gap-2",children:t.tags.map(a=>P.jsx("li",{className:"glass-chip rounded-full px-3 py-1 text-xs font-medium text-gray-100",children:a},a))})]}),P.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 shrink-0",children:[t.liveUrl&&P.jsxs("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold text-gray-200 hover:text-white",children:[P.jsx("span",{children:"View Live"}),P.jsx(Y0,{className:"h-3.5 w-3.5 text-red-400"})]}),t.repoUrl&&P.jsxs("a",{href:t.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold text-gray-200 hover:text-white",children:[P.jsx("span",{children:"View Code"}),P.jsx(Y0,{className:"h-3.5 w-3.5 text-red-400"})]}),t.driveUrl&&P.jsxs("a",{href:t.driveUrl,target:"_blank",rel:"noopener noreferrer",className:"glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold text-gray-200 hover:text-white",children:[P.jsx("span",{children:"Watch in Drive"}),P.jsx(Y0,{className:"h-3.5 w-3.5 text-red-400"})]}),P.jsx("a",{href:"#contact",onClick:()=>i(t),className:"glass-red rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider text-white",children:t.kind==="software"?"Discuss Project":"Request Project"})]})]})]})]})})},I1="THE DEVELOPER WHO TURNS IDEAS INTO SOFTWARE",Rw=I1.split(" "),C9=new Set(["DEVELOPER","IDEAS","SOFTWARE"]),Pw=["./media/profile.webp?v=shubham15","./assets/hero-red-bg.jpg?v=shubham15"],R9=7e3,P9=500,Lw=[0,1,2,3,4,5,6,7,8,9];function L9(t){var a;const e=Pw.length+3;let n=0,i=!1;const r=()=>{i||(n+=1,t(Math.min(1,n/e)))};Pw.forEach(l=>{const c=new Image;c.onload=c.onerror=r,c.src=l}),(((a=document.fonts)==null?void 0:a.ready)??Promise.resolve()).then(r,r),document.readyState==="complete"?r():window.addEventListener("load",r,{once:!0});let s=0;const o=()=>{i||(document.querySelector("[data-scene-ready]")||s>60?r():(s+=1,window.setTimeout(o,100)))};return o(),()=>{i=!0,window.removeEventListener("load",r)}}const D9=({onComplete:t})=>{const[e,n]=re.useState(0),[i,r]=re.useState("loading"),s=re.useRef(0),o=re.useRef(0),a=re.useRef(null),l=re.useRef(null),c=re.useRef(t);c.current=t,re.useEffect(()=>{document.body.style.overflow="hidden";const f=L9(p=>{s.current=p}),d=window.setTimeout(()=>{s.current=1},R9),h=[];let g=0,v=performance.now();const m=p=>{const _=Math.min(64,p-v);v=p;const x=s.current*100,S=Math.min(x,o.current+Math.max(.15,(x-o.current)*.006*_));o.current=S,n(Math.floor(S));const E=o.current;if(a.current&&(a.current.style.transform=`translateY(${-(E/10)}em)`),l.current&&(l.current.style.transform=`translateY(${-(9-E%10)}em)`),S>=99.999){n(100),h.push(window.setTimeout(()=>r("reveal"),P9),window.setTimeout(()=>{document.body.style.overflow="",c.current()},1500));return}g=requestAnimationFrame(m)};return g=requestAnimationFrame(m),()=>{f(),cancelAnimationFrame(g),window.clearTimeout(d),h.forEach(window.clearTimeout),document.body.style.overflow=""}},[]);const u=e/100;return P.jsxs("div",{className:`glitch-loader ${i==="reveal"?"is-revealing":""}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e,"aria-label":I1,children:[P.jsx("div",{className:"glitch-loader__veil"}),P.jsx("div",{className:"glitch-loader__count","aria-hidden":"true",children:e>=100?P.jsx("span",{className:"glitch-loader__final",children:"100"}):P.jsxs(P.Fragment,{children:[P.jsx("span",{className:"glitch-loader__digit",children:P.jsx("span",{ref:a,className:"glitch-loader__digit-strip",children:Lw.map(f=>P.jsx("span",{children:f},f))})}),P.jsx("span",{className:"glitch-loader__digit",children:P.jsx("span",{ref:l,className:"glitch-loader__digit-strip",children:[...Lw].reverse().map(f=>P.jsx("span",{children:f},f))})})]})}),P.jsxs("div",{className:"glitch-loader__center",children:[P.jsx("p",{className:"glitch-loader__statement",style:{filter:`blur(${(1-u)*6}px)`},"aria-hidden":"true",children:Rw.map((f,d)=>{const h=d/Rw.length,g=Math.max(0,Math.min(1,(u-h*.7)*3));return P.jsx("span",{className:`glitch-loader__word${C9.has(f)?" glitch-loader__word--red":""}`,style:{opacity:g},children:f},d)})}),[0,1,2,3,4].map(f=>P.jsx("p",{className:`glitch-loader__frag glitch-loader__frag--${f}`,"aria-hidden":"true",children:I1},f))]})]})},N9=`
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uTravel;
  uniform float uDepth;
  uniform vec2 uMouse;
  uniform float uSpeed;
  uniform float uPixelRatio;
  uniform float uClock;
  uniform float uAspect;
  uniform vec3 uClick[4];
  varying float vAlpha;
  varying float vSeed;
  varying float vSize;

  void main() {
    vec3 p = position;
    // idle organic drift
    p.x += sin(uTime * (0.12 + aSeed * 0.2) + aSeed * 31.0) * (0.4 + aSeed * 0.6);
    p.y += cos(uTime * (0.10 + aSeed * 0.18) + aSeed * 17.0) * (0.4 + aSeed * 0.6);

    // forward travel, wrapped into [-uDepth, 6]
    float z = p.z + uTravel + uTime * 0.25;
    z = mod(z + uDepth, uDepth + 6.0) - uDepth;
    p.z = z;

    // depth-based cursor parallax (near reacts more)
    float near = clamp((z + uDepth) / (uDepth + 6.0), 0.0, 1.0);
    p.xy += uMouse * near * near * 1.6;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);

    // click repulsion: push away from click in screen space, ease back
    vec4 clip0 = projectionMatrix * mv;
    vec2 ndc = clip0.xy / clip0.w;
    for (int i = 0; i < 4; i++) {
      float age = uClock - uClick[i].z;
      if (age > 0.0 && age < 4.0) {
        vec2 d = ndc - uClick[i].xy;
        d.x *= uAspect;
        float dist = length(d);
        float reach = 0.15 + age * 0.55; // expanding wave
        float fall = exp(-dist * dist / (reach * reach * 0.35));
        float env = age * exp(-age * 2.2) * 6.0; // fast out, smooth return
        vec2 dir = dist > 0.0001 ? d / dist : vec2(0.0, 1.0);
        dir.x /= uAspect;
        mv.xy += dir * fall * env * 0.22 * -mv.z;
      }
    }

    gl_Position = projectionMatrix * mv;
    float pulse = 0.75 + 0.25 * sin(uTime * (0.6 + aSeed) + aSeed * 50.0);
    gl_PointSize = aSize * uPixelRatio * (1.0 + uSpeed * 0.6) * (60.0 / -mv.z) * (0.8 + near * near * 1.8);

    // fade in from far, fade out right before the camera
    float fadeFar = smoothstep(-uDepth, -uDepth + 14.0, z);
    float fadeNear = 1.0 - smoothstep(2.0, 5.5, z);
    vAlpha = fadeFar * fadeNear * pulse * (0.35 + aSeed * 0.65) * (0.55 + near * 0.75);
    vSeed = aSeed;
    vSize = aSize;
  }
`,I9=`
  varying float vAlpha;
  varying float vSeed;
  varying float vSize;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float core = exp(-d * d * 60.0);
    float halo = exp(-d * d * 7.0) * (0.35 + vSize * 0.04);
    float a = (core + halo) * vAlpha;
    if (a < 0.003) discard;
    vec3 col = mix(vec3(0.75, 0.03, 0.08), vec3(1.0, 0.32, 0.30), core * (0.4 + vSeed * 0.6));
    gl_FragColor = vec4(col * a, a);
  }
`,U9=()=>{const t=re.useRef(null);return re.useEffect(()=>{const e=t.current;if(!e)return;let n;try{n=new V_({antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return}const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=window.matchMedia("(max-width: 768px), (pointer: coarse)").matches,s=Math.min(window.devicePixelRatio||1,r?1.5:2);n.setPixelRatio(s),n.setClearColor(0,0),e.appendChild(n.domElement),n.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block";const o=new am,a=new wi(60,1,.1,200);a.position.set(0,0,6);const l=r?900:2200,c=new Float32Array(l*3),u=new Float32Array(l),f=new Float32Array(l);for(let I=0;I<l;I++){const B=Math.pow(Math.random(),.7)*26,V=Math.random()*Math.PI*2;c[I*3]=Math.cos(V)*B*1.4+(Math.random()-.5)*4,c[I*3+1]=Math.sin(V)*B*.9+(Math.random()-.5)*4,c[I*3+2]=-Math.random()*70,u[I]=Math.random()<.06?7+Math.random()*11:1.1+Math.random()*3.4,f[I]=Math.random()}const d=new Fr;d.setAttribute("position",new cr(c,3)),d.setAttribute("aSize",new cr(u,1)),d.setAttribute("aSeed",new cr(f,1));const h=new ms({vertexShader:N9,fragmentShader:I9,transparent:!0,depthWrite:!1,blending:ev,uniforms:{uTime:{value:0},uTravel:{value:0},uDepth:{value:70},uMouse:{value:new ke},uSpeed:{value:0},uPixelRatio:{value:s},uClock:{value:0},uAspect:{value:1},uClick:{value:[0,1,2,3].map(()=>new H(0,0,-99))}}}),g=new L6(d,h);g.frustumCulled=!1,o.add(g);const v=()=>{const I=window.innerWidth,B=window.innerHeight;n.setSize(I,B,!1),a.aspect=I/B,a.updateProjectionMatrix(),h.uniforms.uAspect.value=I/B};v(),window.addEventListener("resize",v);const m={x:0,y:0},p=I=>{m.x=I.clientX/window.innerWidth*2-1,m.y=-(I.clientY/window.innerHeight*2-1)};let _=0;const x=I=>{const B=I.target;if(!B||B.closest('a,button,input,textarea,select,label,video,img,nav,[role="button"],[data-no-ripple],.glass,.glass-chip,.glass-red'))return;const V=I.clientX/window.innerWidth*2-1,K=-(I.clientY/window.innerHeight*2-1);if(h.uniforms.uClick.value[_++%4].set(V,K,(performance.now()-A)/1e3),i)return;const G=document.createElement("span");G.className="pf-ripple",G.style.left=`${I.clientX}px`,G.style.top=`${I.clientY}px`,e.appendChild(G),G.addEventListener("animationend",()=>G.remove(),{once:!0})};window.addEventListener("pointerdown",x,{passive:!0}),window.addEventListener("pointermove",p,{passive:!0});let S=0,E=0,C=window.scrollY,M=0;const A=performance.now();let U=A,y=0;const T=I=>{y=requestAnimationFrame(T);const B=Math.min((I-U)/1e3,.05);U=I;const V=window.scrollY,K=V-C;C=V,E+=K*.02;const G=S;S+=(E-S)*(1-Math.exp(-6*B));const X=Math.min(Math.abs(S-G)/Math.max(B,.001)/25,1);M+=(X-M)*(1-Math.exp(-8*B));const F=h.uniforms;F.uTime.value=i?0:(I-A)/1e3,F.uTravel.value=S,F.uSpeed.value=M,F.uClock.value=(I-A)/1e3,F.uMouse.value.x+=(m.x-F.uMouse.value.x)*(1-Math.exp(-3*B)),F.uMouse.value.y+=(m.y-F.uMouse.value.y)*(1-Math.exp(-3*B)),n.render(o,a),t.current&&!t.current.hasAttribute("data-scene-ready")&&t.current.setAttribute("data-scene-ready","true")};return y=requestAnimationFrame(T),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",v),window.removeEventListener("pointermove",p),window.removeEventListener("pointerdown",x),d.dispose(),h.dispose(),n.dispose(),n.domElement.remove()}},[]),P.jsx("div",{ref:t,"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-0 bg-[#050507]"})},Dw=160,Nw=24,F9=14,Iw="255,255,255",ag="255,32,32",O9="160,0,18";function k9(t,e,n,i,r){r.length=0;const s=4+Math.floor(Math.random()*4);let o=t,a=e;r.push(o,a);for(let l=1;l<=s;l++){const c=n+(Math.random()-.5)*1.1,u=i/s;o+=Math.cos(c)*u,a+=Math.sin(c)*u,r.push(o,a)}}const B9=()=>{const t=re.useRef(null);return re.useEffect(()=>{const e=t.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches||!window.matchMedia("(pointer: fine)").matches)return;const n=e.getContext("2d");if(!n)return;const i=Array.from({length:Dw},()=>({x:0,y:0,vx:0,vy:0,life:0,max:1,size:1,hot:!1})),r=Array.from({length:Nw},()=>({pts:[],life:0,max:1,width:1,bright:!1})),s=[];let o=0,a=0,l=-9999,c=-9999,u=-9999,f=-9999,d=0,h=0,g=0,v=!1,m=performance.now(),p=1;const _=()=>{p=Math.min(window.devicePixelRatio||1,2),e.width=Math.round(window.innerWidth*p),e.height=Math.round(window.innerHeight*p)};_();const x=(M,A,U,y,T)=>{const I=i[o];o=(o+1)%Dw;const B=Math.atan2(y,U)+Math.PI+(Math.random()-.5)*2.6,V=.05+Math.random()*.25*(.5+T);I.x=M,I.y=A,I.vx=Math.cos(B)*V+U*.02,I.vy=Math.sin(B)*V+y*.02,I.max=I.life=250+Math.random()*400,I.size=.6+Math.random()*1.6,I.hot=Math.random()<.15},S=(M,A,U,y)=>{const T=r[a];a=(a+1)%Nw,k9(M,A,Math.random()*Math.PI*2,(10+Math.random()*28)*(y?1.8:1)*(.6+U*.6),T.pts),T.max=T.life=y?160:70+Math.random()*80,T.width=y?1.6:.6+Math.random()*.8,T.bright=y},E=M=>{if(M.pointerType!=="mouse")return;l=M.clientX,c=M.clientY,u<-999&&(u=l,f=c);const A=l-u,U=c-f,y=Math.hypot(A,U);d=Math.min(1.5,d*.6+y/40);const T=performance.now();s.push({x:l,y:c,t:T}),s.length>F9&&s.shift();const I=Math.min(8,Math.floor(y/6)+(Math.random()<.4?1:0));for(let B=0;B<I;B++){const V=Math.random();x(u+A*V,f+U*V,A,U,d)}Math.random()<.15+d*.4&&S(l,c,d,!1),y>45&&Math.random()<.25&&S(l,c,d,!0),h=Math.min(1,h+y/120),u=l,f=c,v||(v=!0,m=T,g=requestAnimationFrame(C))},C=M=>{const A=Math.min(48,M-m);m=M,n.setTransform(p,0,0,p,0,0),n.clearRect(0,0,window.innerWidth,window.innerHeight),n.globalCompositeOperation="lighter";let U=!1;if(h*=Math.pow(.992,A),h>.02){U=!0;const y=n.createRadialGradient(l,c,0,l,c,70);y.addColorStop(0,`rgba(255,0,30,${.14*h})`),y.addColorStop(1,"rgba(255,0,30,0)"),n.fillStyle=y,n.fillRect(l-70,c-70,140,140)}for(;s.length&&M-s[0].t>220;)s.shift();if(s.length>1){U=!0,n.lineCap="round";for(let y=1;y<s.length;y++){const T=1-(M-s[y].t)/220;n.strokeStyle=`rgba(${O9},${T*.6})`,n.lineWidth=3*T,n.beginPath(),n.moveTo(s[y-1].x,s[y-1].y),n.lineTo(s[y].x,s[y].y),n.stroke(),n.strokeStyle=`rgba(${ag},${T*.5})`,n.lineWidth=.8*T,n.stroke()}}for(const y of r){if(y.life<=0)continue;y.life-=A,U=!0;const T=Math.max(0,y.life/y.max)*(Math.random()<.25?.4:1);n.beginPath(),n.moveTo(y.pts[0],y.pts[1]);for(let I=2;I<y.pts.length;I+=2)n.lineTo(y.pts[I],y.pts[I+1]);n.shadowBlur=y.bright?14:8,n.shadowColor="rgba(255,0,30,0.35)",n.strokeStyle=`rgba(${ag},${T*.85})`,n.lineWidth=y.width*2,n.stroke(),n.shadowBlur=0,n.strokeStyle=`rgba(${Iw},${T*(y.bright?.8:.45)})`,n.lineWidth=y.width*.5,n.stroke()}for(const y of i){if(y.life<=0)continue;y.life-=A,U=!0;const T=Math.max(0,y.life/y.max),I=y.x,B=y.y;y.x+=y.vx*A,y.y+=y.vy*A,y.vx*=.985,y.vy*=.985,n.strokeStyle=`rgba(${y.hot?Iw:ag},${T*.9})`,n.lineWidth=y.size*T,n.beginPath(),n.moveTo(I-y.vx*18,B-y.vy*18),n.lineTo(y.x,y.y),n.stroke()}d*=Math.pow(.95,A/16),U?g=requestAnimationFrame(C):(v=!1,n.clearRect(0,0,window.innerWidth,window.innerHeight))};return window.addEventListener("pointermove",E,{passive:!0}),window.addEventListener("resize",_),()=>{cancelAnimationFrame(g),window.removeEventListener("pointermove",E),window.removeEventListener("resize",_)}},[]),P.jsx("canvas",{ref:t,className:"spark-cursor","aria-hidden":"true"})};function z9(){const[t,e]=re.useState(!0),[n,i]=re.useState(null),[r,s]=re.useState(!1),o=()=>{e(!1),setTimeout(()=>{lt.refresh()},100)},a=f=>{i(f),s(!0)},l=()=>{s(!1)},c=f=>{if(!n)return;const d=wa.findIndex(g=>g.id===n.id);if(d===-1)return;const h=(d+f+wa.length)%wa.length;i(wa[h])},u=()=>{s(!1);const f=document.getElementById("contact");f==null||f.scrollIntoView({behavior:"smooth"})};return P.jsxs("div",{className:"relative isolate min-h-screen text-gray-100 flex flex-col font-sans selection:bg-[#a31515] selection:text-white bg-[#07070a]",children:[P.jsx(U9,{}),P.jsxs("div",{className:"ambient","aria-hidden":"true",children:[P.jsx("i",{className:"o1"}),P.jsx("i",{className:"o3"})]}),P.jsx(B9,{}),t&&P.jsx(D9,{onComplete:o}),P.jsx(f4,{}),P.jsxs("main",{className:"relative z-10 w-full flex-1",children:[P.jsx(KF,{}),P.jsx(x8,{}),P.jsx(P8,{onSelectProject:a}),P.jsx(O8,{}),P.jsx(Y8,{}),P.jsx(K8,{}),P.jsx(Z8,{})]}),P.jsx("div",{className:"relative z-10",children:P.jsx(Q8,{})}),P.jsx(b9,{project:r?n:null,onClose:l,onNavigate:c,onInquire:u})]})}YT(document.getElementById("root")).render(P.jsx(re.StrictMode,{children:P.jsx(z9,{})}));
