(()=>{var Bc="170",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gd=0,wl=1,_d=2;var Vh=1,xd=2,Rn=3,$n=0,ke=1,_e=2,qn=0,$i=1,Al=2,Rl=3,Cl=4,yd=5,di=100,vd=101,Md=102,Sd=103,bd=104,Ed=200,Td=201,wd=202,Ad=203,ma=204,ga=205,Rd=206,Cd=207,Pd=208,Id=209,Dd=210,Ld=211,Ud=212,Nd=213,Od=214,_a=0,xa=1,ya=2,ts=3,va=4,Ma=5,Sa=6,ba=7,Gh=0,Fd=1,Bd=2,Zn=0,zd=1,kd=2,Hd=3,Vd=4,Gd=5,Wd=6,Xd=7;var Wh=300,es=301,ns=302,Ea=303,Ta=304,po=306,wa=1e3,mi=1001,Aa=1002,cn=1003,Yd=1004;var js=1005;var _n=1006,Oo=1007;var gi=1008;var Dn=1009,Xh=1010,Yh=1011,Is=1012,zc=1013,_i=1014,Cn=1015,Vs=1016,kc=1017,Hc=1018,is=1020,qh=35902,Zh=1021,Jh=1022,an=1023,$h=1024,Kh=1025,Ki=1026,ss=1027,jh=1028,Vc=1029,Qh=1030,Gc=1031;var Wc=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,Ra=35840,Ca=35841,Pa=35842,Ia=35843,Da=36196,La=37492,Ua=37496,Na=37808,Oa=37809,Fa=37810,Ba=37811,za=37812,ka=37813,Ha=37814,Va=37815,Ga=37816,Wa=37817,Xa=37818,Ya=37819,qa=37820,Za=37821,Ir=36492,Ja=36494,$a=36495,tu=36283,Ka=36284,ja=36285,Qa=36286;var Dr=2300,tc=2301,Fo=2302,Pl=2400,Il=2401,Dl=2402;var qd=3200,Zd=3201;var eu=0,Jd=1,Yn="",ze="srgb",us="srgb-linear",mo="linear",te="srgb";var Li=7680;var Ll=519,$d=512,Kd=513,jd=514,nu=515,Qd=516,tf=517,ef=518,nf=519,Ul=35044;var Nl="300 es",Pn=2e3,Lr=2001,Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=1234567,ws=Math.PI/180,Ds=180/Math.PI;function Ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function sf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rf(i,t,e){return i!==t?(e-i)/(t-i):0}function As(i,t,e){return(1-e)*i+e*t}function of(i,t,e,n){return As(i,t,1-Math.exp(-e*n))}function af(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uf(i,t){return i+Math.random()*(t-i)}function df(i){return i*(.5-Math.random())}function ff(i){i!==void 0&&(Ol=i);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pf(i){return i*ws}function mf(i){return i*Ds}function gf(i){return(i&i-1)===0&&i!==0}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var iu={DEG2RAD:ws,RAD2DEG:Ds,generateUUID:Ci,clamp:ge,euclideanModulo:Xc,mapLinear:sf,inverseLerp:rf,lerp:As,damp:of,pingpong:af,smoothstep:cf,smootherstep:lf,randInt:hf,randFloat:uf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:xf,setQuaternionFromProperEuler:yf,normalize:De,denormalize:qi},$=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],x=s[0],m=s[3],u=s[6],v=s[1],y=s[4],_=s[7],P=s[2],w=s[5],R=s[8];return r[0]=o*x+a*v+c*P,r[3]=o*m+a*y+c*w,r[6]=o*u+a*_+c*R,r[1]=l*x+h*v+d*P,r[4]=l*m+h*y+d*w,r[7]=l*u+h*_+d*R,r[2]=p*x+f*v+g*P,r[5]=p*m+f*y+g*w,r[8]=p*u+f*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,p=a*c-h*r,f=l*r-o*c,g=e*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=p*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new Bt;function su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){let i=Ur("canvas");return i.style.display="block",i}var Fl={};function Es(i){i in Fl||(Fl[i]=!0,console.warn(i))}function Mf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?mo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bl=[.64,.33,.3,.6,.15,.06],zl=[.2126,.7152,.0722],kl=[.3127,.329],Hl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[us]:{primaries:Bl,whitePoint:kl,transfer:mo,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:zl,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Bl,whitePoint:kl,transfer:te,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:zl,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var Ui,ec=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Ur("canvas")),Ui.width=t.width,Ui.height=t.height;let n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ef=0,Nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zo(s[o].image)):r.push(zo(s[o]))}else r=zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tf=0,qe=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=_n,o=gi,a=an,c=Dn,l=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ci(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Wh;qe.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(f+1)/2,P=(u+1)/2,w=(h+p)/4,R=(d+x)/4,D=(g+m)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=R/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=D/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(p-h)/v,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends Ln{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Nr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==p||l!==f||h!==g){let m=1-a,u=c*p+l*f+h*g+d*x,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let P=Math.sqrt(y),w=Math.atan2(P,u*v);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let _=a*v;if(c=c*m+p*_,l=l*m+f*_,h=h*m+g*_,d=d*m+x*_,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*p,t[e+1]=c*g+h*p+l*d-a*f,t[e+2]=l*g+h*f+a*p-c*d,t[e+3]=h*g-a*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ko.copy(this).projectOnVector(t),this.sub(ko)}reflect(t){return this.sub(ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ko=new I,Gl=new ln,xi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),tr.subVectors(this.max,ys),Ni.subVectors(t.a,ys),Oi.subVectors(t.b,ys),Fi.subVectors(t.c,ys),kn.subVectors(Oi,Ni),Hn.subVectors(Fi,Oi),ri.subVectors(Ni,Fi);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!Ho(e,Ni,Oi,Fi,tr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,Ni,Oi,Fi,tr))?!1:(er.crossVectors(kn,Hn),e=[er.x,er.y,er.z],Ho(e,Ni,Oi,Fi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,Qs=new xi,Ni=new I,Oi=new I,Fi=new I,kn=new I,Hn=new I,ri=new I,ys=new I,tr=new I,er=new I,oi=new I;function Ho(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);let a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var wf=new xi,vs=new I,Vo=new I,yi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Vo)),this.expandByPoint(vs.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},En=new I,Go=new I,nr=new I,Vn=new I,Wo=new I,ir=new I,Xo=new I,Kn=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Go.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Go);let r=t.distanceTo(e)*.5,o=-this.direction.dot(nr),a=Vn.dot(this.direction),c=-Vn.dot(nr),l=Vn.lengthSq(),h=Math.abs(1-o*o),d,p,f,g;if(h>0)if(d=o*c-a,p=o*a-c,g=r*h,d>=0)if(p>=-g)if(p<=g){let x=1/h;d*=x,p*=x,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Go).addScaledVector(nr,p),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){Wo.subVectors(e,t),ir.subVectors(n,t),Xo.crossVectors(Wo,ir);let o=this.direction.dot(Xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);let c=a*this.direction.dot(ir.crossVectors(Vn,ir));if(c<0)return null;let l=a*this.direction.dot(Wo.cross(Vn));if(l<0||c+l>o)return null;let h=-a*Vn.dot(Xo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,p,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,p,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,p,f,g,x,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=p-x*l,e[9]=-a*c,e[2]=x-p*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,f=c*d,g=l*h,x=l*d;e[0]=p+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,f=c*d,g=l*h,x=l*d;e[0]=p-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+x,e[1]=c*d,e[5]=x*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-p*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=p-x*d}else if(t.order==="XZY"){let p=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Rf)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),sr.crossVectors(We,Gn),s[0]=Gn.x,s[4]=sr.x,s[8]=We.x,s[1]=Gn.y,s[5]=sr.y,s[9]=We.y,s[2]=Gn.z,s[6]=sr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],x=n[6],m=n[10],u=n[14],v=n[3],y=n[7],_=n[11],P=n[15],w=s[0],R=s[4],D=s[8],E=s[12],S=s[1],A=s[5],O=s[9],F=s[13],z=s[2],X=s[6],V=s[10],et=s[14],G=s[3],at=s[7],pt=s[11],vt=s[15];return r[0]=o*w+a*S+c*z+l*G,r[4]=o*R+a*A+c*X+l*at,r[8]=o*D+a*O+c*V+l*pt,r[12]=o*E+a*F+c*et+l*vt,r[1]=h*w+d*S+p*z+f*G,r[5]=h*R+d*A+p*X+f*at,r[9]=h*D+d*O+p*V+f*pt,r[13]=h*E+d*F+p*et+f*vt,r[2]=g*w+x*S+m*z+u*G,r[6]=g*R+x*A+m*X+u*at,r[10]=g*D+x*O+m*V+u*pt,r[14]=g*E+x*F+m*et+u*vt,r[3]=v*w+y*S+_*z+P*G,r[7]=v*R+y*A+_*X+P*at,r[11]=v*D+y*O+_*V+P*pt,r[15]=v*E+y*F+_*et+P*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*p+n*l*p+s*a*f-n*c*f)+x*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*p+s*o*d-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],x=t[13],m=t[14],u=t[15],v=d*m*l-x*p*l+x*c*f-a*m*f-d*c*u+a*p*u,y=g*p*l-h*m*l-g*c*f+o*m*f+h*c*u-o*p*u,_=h*x*l-g*d*l+g*a*f-o*x*f-h*a*u+o*d*u,P=g*d*c-h*x*c-g*a*p+o*x*p+h*a*m-o*d*m,w=e*v+n*y+s*_+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=v*R,t[1]=(x*p*r-d*m*r-x*s*f+n*m*f+d*s*u-n*p*u)*R,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*u+n*c*u)*R,t[3]=(d*c*r-a*p*r-d*s*l+n*p*l+a*s*f-n*c*f)*R,t[4]=y*R,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*u+e*p*u)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*u-e*c*u)*R,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*f+e*c*f)*R,t[8]=_*R,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*u-e*d*u)*R,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*u+e*a*u)*R,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*R,t[12]=P*R,t[13]=(h*x*s-g*d*s+g*n*p-e*x*p-h*n*m+e*d*m)*R,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*R,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*p+e*a*p)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,p=r*l,f=r*h,g=r*d,x=o*h,m=o*d,u=a*d,v=c*l,y=c*h,_=c*d,P=n.x,w=n.y,R=n.z;return s[0]=(1-(x+u))*P,s[1]=(f+_)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(p+u))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(p+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);let l=1/r,h=1/o,d=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),f,g;if(a===Pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),p=(e+t)*l,f=(n+s)*h,g,x;if(a===Pn)g=(o+r)*d,x=-2*d;else if(a===Lr)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new I,rn=new ne,Af=new I(0,0,0),Rf=new I(1,1,1),Gn=new I,sr=new I,We=new I,Wl=new ne,Xl=new ln,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cf=0,Yl=new I,zi=new ln,Tn=new ne,rr=new I,Ms=new I,Pf=new I,If=new ln,ql=new I(1,0,0),Zl=new I(0,1,0),Jl=new I(0,0,1),$l={type:"added"},Df={type:"removed"},ki={type:"childadded",child:null},Yo={type:"childremoved",child:null},xe=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new xn,n=new ln,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Bt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ms,rr,this.up):Tn.lookAt(rr,Ms,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Tn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DEFAULT_UP=new I(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new I,wn=new I,qo=new I,An=new I,Hi=new I,Vi=new I,Kl=new I,Zo=new I,Jo=new I,$o=new I,Ko=new fe,jo=new fe,Qo=new fe,fi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),wn.subVectors(n,e),qo.subVectors(t,e);let o=on.dot(on),a=on.dot(wn),c=on.dot(qo),l=wn.dot(wn),h=wn.dot(qo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ko.setScalar(0),jo.setScalar(0),Qo.setScalar(0),Ko.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Qo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ko,r.x),o.addScaledVector(jo,r.y),o.addScaledVector(Qo,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),wn.subVectors(t,e),on.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Hi.subVectors(s,n),Vi.subVectors(r,n),Zo.subVectors(t,n);let c=Hi.dot(Zo),l=Vi.dot(Zo);if(c<=0&&l<=0)return e.copy(n);Jo.subVectors(t,s);let h=Hi.dot(Jo),d=Vi.dot(Jo);if(h>=0&&d<=h)return e.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);$o.subVectors(t,r);let f=Hi.dot($o),g=Vi.dot($o);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Vi,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Kl.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Kl,a);let u=1/(m+x+p);return o=x*u,a=p*u,e.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},or={h:0,s:0,l:0};function ta(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Xc(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ta(o,r,t+1/3),this.g=ta(o,r,t),this.b=ta(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return qt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ge(Ce.r*255,0,255))*65536+Math.round(ge(Ce.g*255,0,255))*256+Math.round(ge(Ce.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ze){qt.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(or);let n=As(Wn.h,or.h,e),s=As(Wn.s,or.s,e),r=As(Wn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Ht;Ht.NAMES=ru;var Lf=0,Nn=class extends Ln{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ci(),this.name="",this.blending=$i,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ue=class extends Nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new I,ar=new $,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}};var Fr=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Br=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Uf=0,$e=new ne,ea=new xe,Gi=new I,Xe=new xi,Ss=new xi,be=new I,ue=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?Br:Fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Xe.min,Ss.min),Xe.expandByPoint(be),be.addVectors(Xe.max,Ss.max),Xe.expandByPoint(be)):(Xe.expandByPoint(Ss.min),Xe.expandByPoint(Ss.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),be.add(Gi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;let l=new I,h=new I,d=new I,p=new $,f=new $,g=new $,x=new I,m=new I;function u(D,E,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(l),d.sub(l),f.sub(p),g.sub(p);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[D].add(x),a[E].add(x),a[S].add(x),c[D].add(m),c[E].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,E=v.length;D<E;++D){let S=v[D],A=S.start,O=S.count;for(let F=A,z=A+O;F<z;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new I,_=new I,P=new I,w=new I;function R(D){P.fromBufferAttribute(s,D),w.copy(P);let E=a[D];y.copy(E),y.sub(P.multiplyScalar(P.dot(E))).normalize(),_.crossVectors(w,E);let A=_.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,A)}for(let D=0,E=v.length;D<E;++D){let S=v[D],A=S.start,O=S.count;for(let F=A,z=A+O;F<z;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Pe(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new ne,ai=new Kn,cr=new yi,Ql=new I,lr=new I,hr=new I,ur=new I,na=new I,dr=new I,th=new I,fr=new I,Zt=class extends xe{constructor(t=new ue,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(na.fromBufferAttribute(d,t),o?dr.addScaledVector(na,h):dr.addScaledVector(na.sub(e),h))}e.add(dr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(cr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(cr,Ql)===null||ai.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(jl.copy(r).invert(),ai.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let w=a.getX(_),R=a.getX(_+1),D=a.getX(_+2);s=pr(this,u,t,n,l,h,d,w,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=pr(this,o,t,n,l,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let w=_,R=_+1,D=_+2;s=pr(this,u,t,n,l,h,d,w,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let v=m,y=m+1,_=m+2;s=pr(this,o,t,n,l,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Nf(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===$n,a),c===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fr);return l<e.near||l>e.far?null:{distance:l,point:fr.clone(),object:i}}function pr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,lr),i.getVertexPosition(c,hr),i.getVertexPosition(l,ur);let h=Nf(i,t,e,n,lr,hr,ur,th);if(h){let d=new I;fi.getBarycoord(th,lr,hr,ur,d),s&&(h.uv=fi.getInterpolatedAttribute(s,a,c,l,d,new $)),r&&(h.uv1=fi.getInterpolatedAttribute(r,a,c,l,d,new $)),o&&(h.normal=fi.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new I,materialIndex:0};fi.getNormal(lr,hr,ur,p.normal),h.face=p,h.barycoord=d}return h}var vi=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function g(x,m,u,v,y,_,P,w,R,D,E){let S=_/R,A=P/D,O=_/2,F=P/2,z=w/2,X=R+1,V=D+1,et=0,G=0,at=new I;for(let pt=0;pt<V;pt++){let vt=pt*A-F;for(let Nt=0;Nt<X;Nt++){let $t=Nt*S-O;at[x]=$t*v,at[m]=vt*y,at[u]=z,l.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[u]=w>0?1:-1,h.push(at.x,at.y,at.z),d.push(Nt/R),d.push(1-pt/D),et+=1}}for(let pt=0;pt<D;pt++)for(let vt=0;vt<R;vt++){let Nt=p+vt+X*pt,$t=p+vt+X*(pt+1),Z=p+(vt+1)+X*(pt+1),it=p+(vt+1)+X*pt;c.push(Nt,$t,it),c.push($t,Z,it),G+=6}a.addGroup(f,G,E),f+=G,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Of(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ou(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Ff={clone:rs,merge:Le},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zr=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new I,eh=new $,nh=new $,we=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wi=-90,Xi=1,sc=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Wi,Xi,t,e);s.layers=this.layers,this.add(s);let r=new we(Wi,Xi,t,e);r.layers=this.layers,this.add(r);let o=new we(Wi,Xi,t,e);o.layers=this.layers,this.add(o);let a=new we(Wi,Xi,t,e);a.layers=this.layers,this.add(a);let c=new we(Wi,Xi,t,e);c.layers=this.layers,this.add(c);let l=new we(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},kr=class extends qe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rc=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:qn});r.uniforms.tEquirect.value=e;let o=new Zt(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=_n),new sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ia=new I,kf=new I,Hf=new Bt,Ye=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ia.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hf.getNormalMatrix(t),s=this.coplanarPoint(ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new yi,mr=new I,Us=class{constructor(t=new Ye,e=new Ye,n=new Ye,s=new Ye,r=new Ye,o=new Ye){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],x=s[10],m=s[11],u=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,p-l,m-f,_-u).normalize(),n[1].setComponents(c+r,p+l,m+f,_+u).normalize(),n[2].setComponents(c+o,p+h,m+g,_+v).normalize(),n[3].setComponents(c-o,p-h,m-g,_-v).normalize(),n[4].setComponents(c-a,p-d,m-x,_-y).normalize(),e===Pn)n[5].setComponents(c+a,p+d,m+x,_+y).normalize();else if(e===Lr)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){let g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var jn=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,p=e/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let v=u*p-o;for(let y=0;y<l;y++){let _=y*d-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<a;v++){let y=v+l*u,_=v+l*(u+1),P=v+1+l*(u+1),w=v+1+l*u;f.push(y,_,w),f.push(_,P,w)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:Yf,alphatest_fragment:qf,alphatest_pars_fragment:Zf,aomap_fragment:Jf,aomap_pars_fragment:$f,batching_pars_vertex:Kf,batching_vertex:jf,begin_vertex:Qf,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:cp,color_pars_fragment:lp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:_p,emissivemap_pars_fragment:xp,colorspace_fragment:yp,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Tp,fog_vertex:wp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Up,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:kp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:$p,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:cm,normal_pars_vertex:lm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:_m,premultiplied_alpha_fragment:xm,project_vertex:ym,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:wm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Dm,specularmap_pars_fragment:Lm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:km,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:Ym,cube_frag:qm,depth_vert:Zm,depth_frag:Jm,distanceRGBA_vert:$m,distanceRGBA_frag:Km,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:cg,meshnormal_frag:lg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:_g,shadow_vert:xg,shadow_frag:yg,sprite_vert:vg,sprite_frag:Mg},ct={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},gn={basic:{uniforms:Le([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Le([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Le([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Le([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Le([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Le([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Le([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Le([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Le([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Le([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Le([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Le([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Le([ct.lights,ct.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};gn.physical={uniforms:Le([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var gr={r:0,b:0,g:0},li=new xn,Sg=new ne;function bg(i,t,e,n,s,r,o){let a=new Ht(0),c=r===!0?0:1,l,h,d=null,p=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=g(v);_===null?u(a,c):_&&_.isColor&&(u(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===po)?(h===void 0&&(h=new Zt(new vi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:rs(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(y.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(li)),h.material.toneMapped=qt.getTransfer(_.colorSpace)!==te,(d!==_||p!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,p=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Zt(new jn(2,2),new yn({name:"BackgroundMaterial",uniforms:rs(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,p=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function u(v,y){v.getRGB(gr,ou(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,u(a,c)},render:x,addToRenderList:m}}function Eg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(S,A,O,F,z){let X=!1,V=d(F,O,A);r!==V&&(r=V,l(r.object)),X=f(S,F,O,z),X&&g(S,F,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(S,A,O,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,A,O){let F=O.wireframe===!0,z=n[S.id];z===void 0&&(z={},n[S.id]=z);let X=z[A.id];X===void 0&&(X={},z[A.id]=X);let V=X[F];return V===void 0&&(V=p(c()),X[F]=V),V}function p(S){let A=[],O=[],F=[];for(let z=0;z<e;z++)A[z]=0,O[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,A,O,F){let z=r.attributes,X=A.attributes,V=0,et=O.getAttributes();for(let G in et)if(et[G].location>=0){let pt=z[G],vt=X[G];if(vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),pt===void 0||pt.attribute!==vt||vt&&pt.data!==vt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(S,A,O,F){let z={},X=A.attributes,V=0,et=O.getAttributes();for(let G in et)if(et[G].location>=0){let pt=X[G];pt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));let vt={};vt.attribute=pt,pt&&pt.data&&(vt.data=pt.data),z[G]=vt,V++}r.attributes=z,r.attributesNum=V,r.index=F}function x(){let S=r.newAttributes;for(let A=0,O=S.length;A<O;A++)S[A]=0}function m(S){u(S,0)}function u(S,A){let O=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;O[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),z[S]!==A&&(i.vertexAttribDivisor(S,A),z[S]=A)}function v(){let S=r.newAttributes,A=r.enabledAttributes;for(let O=0,F=A.length;O<F;O++)A[O]!==S[O]&&(i.disableVertexAttribArray(O),A[O]=0)}function y(S,A,O,F,z,X,V){V===!0?i.vertexAttribIPointer(S,A,O,z,X):i.vertexAttribPointer(S,A,O,F,z,X)}function _(S,A,O,F){x();let z=F.attributes,X=O.getAttributes(),V=A.defaultAttributeValues;for(let et in X){let G=X[et];if(G.location>=0){let at=z[et];if(at===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){let pt=at.normalized,vt=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;let $t=Nt.buffer,Z=Nt.type,it=Nt.bytesPerElement,Mt=Z===i.INT||Z===i.UNSIGNED_INT||at.gpuType===zc;if(at.isInterleavedBufferAttribute){let rt=at.data,Rt=rt.stride,Lt=at.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)u(G.location+It,rt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<G.locationSize;It++)m(G.location+It);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let It=0;It<G.locationSize;It++)y(G.location+It,vt/G.locationSize,Z,pt,Rt*it,(Lt+vt/G.locationSize*It)*it,Mt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)u(G.location+rt,at.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<G.locationSize;rt++)y(G.location+rt,vt/G.locationSize,Z,pt,vt*it,vt/G.locationSize*rt*it,Mt)}}else if(V!==void 0){let pt=V[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}v()}function P(){D();for(let S in n){let A=n[S];for(let O in A){let F=A[O];for(let z in F)h(F[z].object),delete F[z];delete A[O]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let A=n[S.id];for(let O in A){let F=A[O];for(let z in F)h(F[z].object),delete F[z];delete A[O]}delete n[S.id]}function R(S){for(let A in n){let O=n[A];if(O[S.id]===void 0)continue;let F=O[S.id];for(let z in F)h(F[z].object),delete F[z];delete O[S.id]}}function D(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Tg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*p[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let D=R===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:w}}function Ag(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ye,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,_=u.clippingState||null;c.value=_,_=h(g,p,y,f);for(let P=0;P!==y;++P)_[P]=e[P];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=f+x*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Rg(i){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=es:a===Ta&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ea||a===Ta)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new rc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hr=class extends zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zi=4,ih=[.125,.215,.35,.446,.526,.582],pi=20,sa=new Hr,sh=new Ht,ra=null,oa=0,aa=0,ca=!1,ui=(1+Math.sqrt(5))/2,Yi=1/ui,rh=[new I(-ui,Yi,0),new I(ui,Yi,0),new I(-Yi,0,ui),new I(Yi,0,ui),new I(0,ui,-Yi),new I(0,ui,Yi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=ca,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Vs,format:an,colorSpace:us,depthBuffer:!1},s=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,t,e)}return s}_compileMaterial(t){let e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,s){let a=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(sh),h.toneMapping=Zn,h.autoClear=!1;let f=new Ue({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Zt(new vi,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(sh),x=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):v===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let y=this._cubeSize;_r(s,v*y,u>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,sa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rh[(s-r-1)%rh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Zt(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);let u=[],v=0;for(let R=0;R<pi;++R){let D=R/x,E=Math.exp(-D*D/2);u.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/v;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;let _=this._sizeLods[s],P=3*_*(s>y-Zi?s-y+Zi:0),w=4*(this._cubeSize-_);_r(e,P,w,3*_,2*_),c.setRenderTarget(e),c.render(d,sa)}};function Cg(i){let t=[],e=[],n=[],s=i,r=i-Zi+1+ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zi?c=ih[o-i+Zi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(u*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,D=w>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(E,x*g*w),y.set(p,m*g*w);let S=[w,w,w,w,w,w];_.set(S,u*g*w)}let P=new ue;P.setAttribute("position",new Pe(v,x)),P.setAttribute("uv",new Pe(y,m)),P.setAttribute("faceIndex",new Pe(_,u)),t.push(P),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pg(i,t,e){let n=new Float32Array(pi),s=new I(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ah(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ch(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function Ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ea||c===Ta,h=c===es||c===ns;if(l||h){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Vr(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Vr(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)t.remove(x[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(d){let p=d.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,u=x.length;m<u;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){let p=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let P=v[y+0],w=v[y+1],R=v[y+2];p.push(P,w,w,R,R,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let P=y+0,w=y+1,R=y+2;p.push(P,w,w,R,R,P)}}else return;let m=new(su(p)?Br:Fr)(p,1);m.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ug(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function d(p,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/o,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,x,0,g);let u=0;for(let v=0;v<g;v++)u+=f[v]*x[v];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>t.maxTextureSize&&(P=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*P*4*d),R=new Or(w,_,P,d);R.type=Cn,R.needsUpdate=!0;let D=y*4;for(let S=0;S<d;S++){let A=m[S],O=u[S],F=v[S],z=_*P*4*S;for(let X=0;X<A.count;X++){let V=X*D;f===!0&&(s.fromBufferAttribute(A,X),w[z+V+0]=s.x,w[z+V+1]=s.y,w[z+V+2]=s.z,w[z+V+3]=0),g===!0&&(s.fromBufferAttribute(O,X),w[z+V+4]=s.x,w[z+V+5]=s.y,w[z+V+6]=s.z,w[z+V+7]=0),x===!0&&(s.fromBufferAttribute(F,X),w[z+V+8]=s.x,w[z+V+9]=s.y,w[z+V+10]=s.z,w[z+V+11]=F.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new $(_,P)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Fg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Gr=class extends qe{constructor(t,e,n,s,r,o,a,c,l,h=Ki){if(h!==Ki&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=_i),n===void 0&&h===ss&&(n=is),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cu=new qe,lh=new Gr(1,1),lu=new Or,hu=new ic,uu=new kr,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),ve(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),ve(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),ve(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=nu,r=lh):r=cu,e.setTexture2D(t||r,s)}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hu,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uu,s)}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function i0(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(i,t){i.uniform1fv(this.addr,t)}function r0(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function o0(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function a0(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function c0(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l0(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h0(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u0(i,t){i.uniform1iv(this.addr,t)}function d0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function p0(i,t){i.uniform4iv(this.addr,t)}function m0(i,t){i.uniform1uiv(this.addr,t)}function g0(i,t){i.uniform2uiv(this.addr,t)}function _0(i,t){i.uniform3uiv(this.addr,t)}function x0(i,t){i.uniform4uiv(this.addr,t)}function y0(i,t,e){let n=this.cache,s=t.length,r=go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cu,r[o])}function v0(i,t,e){let n=this.cache,s=t.length,r=go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hu,r[o])}function M0(i,t,e){let n=this.cache,s=t.length,r=go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||uu,r[o])}function S0(i,t,e){let n=this.cache,s=t.length,r=go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lu,r[o])}function b0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return c0;case 35675:return l0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}var oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i0(e.type)}},ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b0(e.type)}},cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},la=/(\w+)(\])?(\[|\.)?/g;function mh(i,t){i.seq.push(t),i.map[t.id]=t}function E0(i,t,e){let n=i.name,s=n.length;for(la.lastIndex=0;;){let r=la.exec(n),o=la.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){mh(e,l===void 0?new oc(a,i,t):new ac(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new cc(a),mh(e,d)),e=d}}}var Qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T0=37297,w0=0;function A0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _h=new Bt;function R0(i){qt._getMatrix(_h,qt.workingColorSpace,i);let t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case mo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+A0(i.getShaderSource(t),o)}else return s}function C0(i,t){let e=R0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P0(i,t){let e;switch(t){case zd:e="Linear";break;case kd:e="Reinhard";break;case Hd:e="Cineon";break;case Vd:e="ACESFilmic";break;case Wd:e="AgX";break;case Xd:e="Neutral";break;case Gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xr=new I;function I0(){qt.getLuminanceCoefficients(xr);let i=xr.x.toFixed(4),t=xr.y.toFixed(4),e=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function L0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ts(i){return i!==""}function yh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(N0,F0)}var O0=new Map;function F0(i,t){let e=kt[t];if(e===void 0){let n=O0.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}var B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(B0,z0)}function z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function G0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Fd:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function W0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function X0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=k0(e),l=H0(e),h=V0(e),d=G0(e),p=W0(e),f=D0(e),g=L0(r),x=s.createProgram(),m,u,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),u.length>0&&(u+=`
`)):(m=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),u=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,C0("linearToOutputTexel",e.outputColorSpace),I0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=lc(o),o=yh(o,e),o=vh(o,e),a=lc(a),a=yh(a,e),a=vh(a,e),o=Mh(o),a=Mh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=v+m+o,_=v+u+a,P=gh(s,s.VERTEX_SHADER,y),w=gh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(w).trim(),X=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,w);else{let et=xh(s,P,"vertex"),G=xh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+et+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||z==="")&&(V=!1);V&&(A.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:u}})}s.deleteShader(P),s.deleteShader(w),D=new Qi(s,x),E=U0(s,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,T0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=w,this}var Y0=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uc(t),e.set(t,n)),n}},uc=class{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}};function q0(i,t,e,n,s,r,o){let a=new Ls,c=new hc,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,A,O,F){let z=O.fog,X=F.geometry,V=E.isMeshStandardMaterial?O.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=et&&et.mapping===po?et.image.height:null,at=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=pt!==void 0?pt.length:0,Nt=0;X.morphAttributes.position!==void 0&&(Nt=1),X.morphAttributes.normal!==void 0&&(Nt=2),X.morphAttributes.color!==void 0&&(Nt=3);let $t,Z,it,Mt;if(at){let Qt=gn[at];$t=Qt.vertexShader,Z=Qt.fragmentShader}else $t=E.vertexShader,Z=E.fragmentShader,c.update(E),it=c.getVertexShaderID(E),Mt=c.getFragmentShaderID(E);let rt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Lt=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Yt=!!E.map,K=!!E.matcap,nt=!!et,C=!!E.aoMap,wt=!!E.lightMap,Q=!!E.bumpMap,_t=!!E.normalMap,ot=!!E.displacementMap,Ct=!!E.emissiveMap,mt=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,Y=E.dispersion>0,j=E.iridescence>0,q=E.sheen>0,St=E.transmission>0,lt=M&&!!E.anisotropyMap,gt=B&&!!E.clearcoatMap,Vt=B&&!!E.clearcoatNormalMap,tt=B&&!!E.clearcoatRoughnessMap,xt=j&&!!E.iridescenceMap,Pt=j&&!!E.iridescenceThicknessMap,Dt=q&&!!E.sheenColorMap,yt=q&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,zt=!!E.specularColorMap,se=!!E.specularIntensityMap,L=St&&!!E.transmissionMap,ht=St&&!!E.thicknessMap,W=!!E.gradientMap,J=!!E.alphaMap,ft=E.alphaTest>0,ut=!!E.alphaHash,Ot=!!E.extensions,de=Zn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(de=i.toneMapping);let Ae={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:Z,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&F.instanceColor!==null,instancingMorph:Lt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:us,alphaToCoverage:!!E.alphaToCoverage,map:Yt,matcap:K,envMap:nt,envMapMode:nt&&et.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:wt,bumpMap:Q,normalMap:_t,displacementMap:p&&ot,emissiveMap:Ct,normalMapObjectSpace:_t&&E.normalMapType===Jd,normalMapTangentSpace:_t&&E.normalMapType===eu,metalnessMap:mt,roughnessMap:T,anisotropy:M,anisotropyMap:lt,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:tt,dispersion:Y,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:q,sheenColorMap:Dt,sheenRoughnessMap:yt,specularMap:Xt,specularColorMap:zt,specularIntensityMap:se,transmission:St,transmissionMap:L,thicknessMap:ht,gradientMap:W,opaque:E.transparent===!1&&E.blending===$i&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:E.combine,mapUv:Yt&&x(E.map.channel),aoMapUv:C&&x(E.aoMap.channel),lightMapUv:wt&&x(E.lightMap.channel),bumpMapUv:Q&&x(E.bumpMap.channel),normalMapUv:_t&&x(E.normalMap.channel),displacementMapUv:ot&&x(E.displacementMap.channel),emissiveMapUv:Ct&&x(E.emissiveMap.channel),metalnessMapUv:mt&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:lt&&x(E.anisotropyMap.channel),clearcoatMapUv:gt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(E.sheenRoughnessMap.channel),specularMapUv:Xt&&x(E.specularMap.channel),specularColorMapUv:zt&&x(E.specularColorMap.channel),specularIntensityMapUv:se&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:ht&&x(E.thicknessMap.channel),alphaMapUv:J&&x(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_t||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Yt||J),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Yt&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:Ct&&E.emissiveMap.isVideoTexture===!0&&qt.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_e,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function u(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let A in E.defines)S.push(A),S.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let S=g[E.type],A;if(S){let O=gn[S];A=Ff.clone(O.uniforms)}else A=E.uniforms;return A}function P(E,S){let A;for(let O=0,F=h.length;O<F;O++){let z=h[O];if(z.cacheKey===S){A=z,++A.usedTimes;break}}return A===void 0&&(A=new X0(i,S,E,r),h.push(A)),A}function w(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:D}}function Z0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function J0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,f,g,x,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function a(d,p,f,g,x,m){let u=o(d,p,f,g,x,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function c(d,p,f,g,x,m){let u=o(d,p,f,g,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||J0),n.length>1&&n.sort(p||bh),s.length>1&&s.sort(p||bh)}function h(){for(let d=t,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function $0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Eh,i.set(n,[o])):s>=r.length?(o=new Eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function K0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function j0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Q0=0;function t_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e_(i){let t=new K0,e=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ne,o=new ne;function a(l){let h=0,d=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,v=0,y=0,_=0,P=0,w=0,R=0;l.sort(t_);for(let E=0,S=l.length;E<S;E++){let A=l[E],O=A.color,F=A.intensity,z=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=O.r*F,d+=O.g*F,p+=O.b*F;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],F);R++}else if(A.isDirectionalLight){let V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let et=A.shadow,G=e.get(A);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=V,f++}else if(A.isSpotLight){let V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(O).multiplyScalar(F),V.distance=z,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[x]=V;let et=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,et.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[x]=et.matrix,A.castShadow){let G=e.get(A);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=X,_++}x++}else if(A.isRectAreaLight){let V=t.get(A);V.color.copy(O).multiplyScalar(F),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){let V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){let et=A.shadow,G=e.get(A);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=V,g++}else if(A.isHemisphereLight){let V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(F),V.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[u]=V,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==P||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=P,D.numLightProbes=R,n.version=Q0++)}function c(l,h){let d=0,p=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,v=l.length;u<v;u++){let y=l[u];if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Th(i){let t=new e_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function n_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Th(i),t.set(s,[a])):r>=o.length?(a=new Th(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dc=class extends Nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`;function r_(i,t,e){let n=new Us,s=new $,r=new $,o=new fe,a=new dc({depthPacking:Zd}),c=new fc,l={},h=e.maxTextureSize,d={[$n]:ke,[ke]:$n,[_e]:_e},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Zt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let u=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=u!==Rn&&this.type===Rn,z=u===Rn&&this.type!==Rn;for(let X=0,V=w.length;X<V;X++){let et=w[X],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let at=G.getFrameExtents();if(s.multiply(at),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||F===!0||z===!0){let vt=this.type!==Rn?{minFilter:cn,magFilter:cn}:{};G.map!==null&&G.map.dispose(),G.map=new Un(s.x,s.y,vt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let pt=G.getViewportCount();for(let vt=0;vt<pt;vt++){let Nt=G.getViewport(vt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),O.viewport(o),G.updateMatrices(et,vt),n=G.getFrustum(),_(R,D,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===Rn&&v(G,D),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,A)};function v(w,R){let D=t.update(x);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Un(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,D,p,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,D,f,x,null)}function y(w,R,D,E){let S=null,A=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=S.uuid,F=R.uuid,z=l[O];z===void 0&&(z={},l[O]=z);let X=z[F];X===void 0&&(X=S.clone(),z[F]=X,R.addEventListener("dispose",P)),S=X}if(S.visible=R.visible,S.wireframe=R.wireframe,E===Rn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=i.properties.get(S);O.light=D}return S}function _(w,R,D,E,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let F=t.update(w),z=w.material;if(Array.isArray(z)){let X=F.groups;for(let V=0,et=X.length;V<et;V++){let G=X[V],at=z[G.materialIndex];if(at&&at.visible){let pt=y(w,at,E,S);w.onBeforeShadow(i,w,R,D,F,pt,G),i.renderBufferDirect(D,null,F,pt,w,G),w.onAfterShadow(i,w,R,D,F,pt,G)}}}else if(z.visible){let X=y(w,z,E,S);w.onBeforeShadow(i,w,R,D,F,X,null),i.renderBufferDirect(D,null,F,X,w,null),w.onAfterShadow(i,w,R,D,F,X,null)}}let O=w.children;for(let F=0,z=O.length;F<z;F++)_(O[F],R,D,E,S)}function P(w){w.target.removeEventListener("dispose",P);for(let D in l){let E=l[D],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var o_={[_a]:xa,[ya]:Sa,[va]:ba,[ts]:Ma,[xa]:_a,[Sa]:ya,[ba]:va,[Ma]:ts};function a_(i,t){function e(){let L=!1,ht=new fe,W=null,J=new fe(0,0,0,0);return{setMask:function(ft){W!==ft&&!L&&(i.colorMask(ft,ft,ft,ft),W=ft)},setLocked:function(ft){L=ft},setClear:function(ft,ut,Ot,de,Ae){Ae===!0&&(ft*=de,ut*=de,Ot*=de),ht.set(ft,ut,Ot,de),J.equals(ht)===!1&&(i.clearColor(ft,ut,Ot,de),J.copy(ht))},reset:function(){L=!1,W=null,J.set(-1,0,0,0)}}}function n(){let L=!1,ht=!1,W=null,J=null,ft=null;return{setReversed:function(ut){if(ht!==ut){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let de=ft;ft=null,this.setClear(de)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?rt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!L&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(ht&&(ut=o_[ut]),J!==ut){switch(ut){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ft!==ut&&(ht&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){L=!1,W=null,J=null,ft=null,ht=!1}}}function s(){let L=!1,ht=null,W=null,J=null,ft=null,ut=null,Ot=null,de=null,Ae=null;return{setTest:function(Qt){L||(Qt?rt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!L&&(i.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,en,Mn){(W!==Qt||J!==en||ft!==Mn)&&(i.stencilFunc(Qt,en,Mn),W=Qt,J=en,ft=Mn)},setOp:function(Qt,en,Mn){(ut!==Qt||Ot!==en||de!==Mn)&&(i.stencilOp(Qt,en,Mn),ut=Qt,Ot=en,de=Mn)},setLocked:function(Qt){L=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){L=!1,ht=null,W=null,J=null,ft=null,ut=null,Ot=null,de=null,Ae=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,v=null,y=null,_=null,P=null,w=null,R=new Ht(0,0,0),D=0,E=!1,S=null,A=null,O=null,F=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=et>=2);let at=null,pt={},vt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),$t=new fe().fromArray(vt),Z=new fe().fromArray(Nt);function it(L,ht,W,J){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(L,ut),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<W;Ot++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ht+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let Mt={};Mt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(ts),Q(!1),_t(wl),rt(i.CULL_FACE),C(qn);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Lt(L,ht){return d[L]!==ht?(i.bindFramebuffer(L,ht),d[L]=ht,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function It(L,ht){let W=f,J=!1;if(L){W=p.get(ht),W===void 0&&(W=[],p.set(ht,W));let ft=L.textures;if(W.length!==ft.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ot=ft.length;ut<Ot;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=ft.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function Yt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let K={[di]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};K[Sd]=i.MIN,K[bd]=i.MAX;let nt={[Ed]:i.ZERO,[Td]:i.ONE,[wd]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,ht,W,J,ft,ut,Ot,de,Ae,Qt){if(L===qn){x===!0&&(Rt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),L!==yd){if(L!==m||Qt!==E){if((u!==di||_!==di)&&(i.blendEquation(i.FUNC_ADD),u=di,_=di),Qt)switch(L){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,P=null,w=null,R.set(0,0,0),D=0,m=L,E=Qt}return}ft=ft||ht,ut=ut||W,Ot=Ot||J,(ht!==u||ft!==_)&&(i.blendEquationSeparate(K[ht],K[ft]),u=ht,_=ft),(W!==v||J!==y||ut!==P||Ot!==w)&&(i.blendFuncSeparate(nt[W],nt[J],nt[ut],nt[Ot]),v=W,y=J,P=ut,w=Ot),(de.equals(R)===!1||Ae!==D)&&(i.blendColor(de.r,de.g,de.b,Ae),R.copy(de),D=Ae),m=L,E=!1}function wt(L,ht){L.side===_e?Rt(i.CULL_FACE):rt(i.CULL_FACE);let W=L.side===ke;ht&&(W=!W),Q(W),L.blending===$i&&L.transparent===!1?C(qn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function _t(L){L!==gd?(rt(i.CULL_FACE),L!==A&&(L===wl?i.cullFace(i.BACK):L===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),A=L}function ot(L){L!==O&&(V&&i.lineWidth(L),O=L)}function Ct(L,ht,W){L?(rt(i.POLYGON_OFFSET_FILL),(F!==ht||z!==W)&&(i.polygonOffset(ht,W),F=ht,z=W)):Rt(i.POLYGON_OFFSET_FILL)}function mt(L){L?rt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+X-1),at!==L&&(i.activeTexture(L),at=L)}function M(L,ht,W){W===void 0&&(at===null?W=i.TEXTURE0+X-1:W=at);let J=pt[W];J===void 0&&(J={type:void 0,texture:void 0},pt[W]=J),(J.type!==L||J.texture!==ht)&&(at!==W&&(i.activeTexture(W),at=W),i.bindTexture(L,ht||Mt[L]),J.type=L,J.texture=ht)}function B(){let L=pt[at];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){$t.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function yt(L){Z.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function Xt(L,ht){let W=l.get(ht);W===void 0&&(W=new WeakMap,l.set(ht,W));let J=W.get(L);J===void 0&&(J=i.getUniformBlockIndex(ht,L.name),W.set(L,J))}function zt(L,ht){let J=l.get(ht).get(L);c.get(ht)!==J&&(i.uniformBlockBinding(ht,J,L.__bindingPointIndex),c.set(ht,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,pt={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,v=null,y=null,_=null,P=null,w=null,R=new Ht(0,0,0),D=0,E=!1,S=null,A=null,O=null,F=null,z=null,$t.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Rt,bindFramebuffer:Lt,drawBuffers:It,useProgram:Yt,setBlending:C,setMaterial:wt,setFlipSided:Q,setCullFace:_t,setLineWidth:ot,setPolygonOffset:Ct,setScissorTest:mt,activeTexture:T,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Dt,viewport:yt,reset:se}}function wh(i,t,e,n){let s=c_(n);switch(e){case Zh:return i*t;case $h:return i*t;case Kh:return i*t*2;case jh:return i*t/s.components*s.byteLength;case Vc:return i*t/s.components*s.byteLength;case Qh:return i*t*2/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case Jh:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Wc:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case Da:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ir:case Ja:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tu:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c_(i){switch(i){case Dn:case Xh:return{byteLength:1,components:1};case Is:case Yh:case Vs:return{byteLength:2,components:1};case kc:case Hc:return{byteLength:2,components:4};case _i:case zc:case Cn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Ur("canvas")}function x(T,M,B){let Y=1,j=mt(T);if((j.width>B||j.height>B)&&(Y=B/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(Y*j.width),St=Math.floor(Y*j.height);d===void 0&&(d=g(q,St));let lt=M?g(q,St):d;return lt.width=q,lt.height=St,lt.getContext("2d").drawImage(T,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+St+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,M,B,Y,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),M===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){let St=j?mo:qt.getTransfer(Y);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=St===te?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(T,M){let B;return T?M===null||M===_i||M===is?B=i.DEPTH24_STENCIL8:M===Cn?B=i.DEPTH32F_STENCIL8:M===Is&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_i||M===is?B=i.DEPTH_COMPONENT24:M===Cn?B=i.DEPTH_COMPONENT32F:M===Is&&(B=i.DEPTH_COMPONENT16),B}function P(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){let M=T.target;M.removeEventListener("dispose",w),D(M),M.isVideoTexture&&h.delete(M)}function R(T){let M=T.target;M.removeEventListener("dispose",R),S(M)}function D(T){let M=n.get(T);if(M.__webglInit===void 0)return;let B=T.source,Y=p.get(B);if(Y){let j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(T),Object.keys(Y).length===0&&p.delete(B)}n.remove(T)}function E(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let B=T.source,Y=p.get(B);delete Y[M.__cacheKey],o.memory.textures--}function S(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=T.textures;for(let Y=0,j=B.length;Y<j;Y++){let q=n.get(B[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(T)}let A=0;function O(){A=0}function F(){let T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function z(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function X(T,M){let B=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,T,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function V(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Z(B,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function et(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Z(B,T,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function G(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){it(B,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let at={[wa]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},pt={[cn]:i.NEAREST,[Yd]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},vt={[$d]:i.NEVER,[nf]:i.ALWAYS,[Kd]:i.LESS,[nu]:i.LEQUAL,[jd]:i.EQUAL,[ef]:i.GEQUAL,[Qd]:i.GREATER,[tf]:i.NOTEQUAL};function Nt(T,M){if(M.type===Cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===Oo||M.magFilter===js||M.magFilter===gi||M.minFilter===_n||M.minFilter===Oo||M.minFilter===js||M.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,at[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,at[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,at[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==js&&M.minFilter!==gi||M.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $t(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));let Y=M.source,j=p.get(Y);j===void 0&&(j={},p.set(Y,j));let q=z(M);if(q!==T.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[q].usedTimes++;let St=j[T.__cacheKey];St!==void 0&&(j[T.__cacheKey].usedTimes--,St.usedTimes===0&&E(M)),T.__cacheKey=q,T.__webglTexture=j[q].texture}return B}function Z(T,M,B){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let j=$t(T,M),q=M.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+B);let St=n.get(q);if(q.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+B);let lt=qt.getPrimaries(qt.workingColorSpace),gt=M.colorSpace===Yn?null:qt.getPrimaries(M.colorSpace),Vt=M.colorSpace===Yn||lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let tt=x(M.image,!1,s.maxTextureSize);tt=Ct(M,tt);let xt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Dt=y(M.internalFormat,xt,Pt,M.colorSpace,M.isVideoTexture);Nt(Y,M);let yt,Xt=M.mipmaps,zt=M.isVideoTexture!==!0,se=St.__version===void 0||j===!0,L=q.dataReady,ht=P(M,tt);if(M.isDepthTexture)Dt=_(M.format===ss,M.type),se&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,tt.width,tt.height,0,xt,Pt,null));else if(M.isDataTexture)if(Xt.length>0){zt&&se&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,Xt[0].width,Xt[0].height);for(let W=0,J=Xt.length;W<J;W++)yt=Xt[W],zt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,xt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,W,Dt,yt.width,yt.height,0,xt,Pt,yt.data);M.generateMipmaps=!1}else zt?(se&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,xt,Pt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,tt.width,tt.height,0,xt,Pt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,Xt[0].width,Xt[0].height,tt.depth);for(let W=0,J=Xt.length;W<J;W++)if(yt=Xt[W],M.format!==an)if(xt!==null)if(zt){if(L)if(M.layerUpdates.size>0){let ft=wh(yt.width,yt.height,M.format,M.type);for(let ut of M.layerUpdates){let Ot=yt.data.subarray(ut*ft/yt.data.BYTES_PER_ELEMENT,(ut+1)*ft/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ut,yt.width,yt.height,1,xt,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,tt.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Dt,yt.width,yt.height,tt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,tt.depth,xt,Pt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Dt,yt.width,yt.height,tt.depth,0,xt,Pt,yt.data)}else{zt&&se&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,Xt[0].width,Xt[0].height);for(let W=0,J=Xt.length;W<J;W++)yt=Xt[W],M.format!==an?xt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,xt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,W,Dt,yt.width,yt.height,0,xt,Pt,yt.data)}else if(M.isDataArrayTexture)if(zt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,tt.width,tt.height,tt.depth),L)if(M.layerUpdates.size>0){let W=wh(tt.width,tt.height,M.format,M.type);for(let J of M.layerUpdates){let ft=tt.data.subarray(J*W/tt.data.BYTES_PER_ELEMENT,(J+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,xt,Pt,ft)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,xt,Pt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,tt.width,tt.height,tt.depth,0,xt,Pt,tt.data);else if(M.isData3DTexture)zt?(se&&e.texStorage3D(i.TEXTURE_3D,ht,Dt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,xt,Pt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,tt.width,tt.height,tt.depth,0,xt,Pt,tt.data);else if(M.isFramebufferTexture){if(se)if(zt)e.texStorage2D(i.TEXTURE_2D,ht,Dt,tt.width,tt.height);else{let W=tt.width,J=tt.height;for(let ft=0;ft<ht;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,W,J,0,xt,Pt,null),W>>=1,J>>=1}}else if(Xt.length>0){if(zt&&se){let W=mt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Dt,W.width,W.height)}for(let W=0,J=Xt.length;W<J;W++)yt=Xt[W],zt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt,Pt,yt):e.texImage2D(i.TEXTURE_2D,W,Dt,xt,Pt,yt);M.generateMipmaps=!1}else if(zt){if(se){let W=mt(tt);e.texStorage2D(i.TEXTURE_2D,ht,Dt,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Pt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,xt,Pt,tt);m(M)&&u(Y),St.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function it(T,M,B){if(M.image.length!==6)return;let Y=$t(T,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let q=n.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);let St=qt.getPrimaries(qt.workingColorSpace),lt=M.colorSpace===Yn?null:qt.getPrimaries(M.colorSpace),gt=M.colorSpace===Yn||St===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let J=0;J<6;J++)!Vt&&!tt?xt[J]=x(M.image[J],!0,s.maxCubemapSize):xt[J]=tt?M.image[J].image:M.image[J],xt[J]=Ct(M,xt[J]);let Pt=xt[0],Dt=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),Xt=y(M.internalFormat,Dt,yt,M.colorSpace),zt=M.isVideoTexture!==!0,se=q.__version===void 0||Y===!0,L=j.dataReady,ht=P(M,Pt);Nt(i.TEXTURE_CUBE_MAP,M);let W;if(Vt){zt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Xt,Pt.width,Pt.height);for(let J=0;J<6;J++){W=xt[J].mipmaps;for(let ft=0;ft<W.length;ft++){let ut=W[ft];M.format!==an?Dt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,yt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Xt,ut.width,ut.height,0,Dt,yt,ut.data)}}}else{if(W=M.mipmaps,zt&&se){W.length>0&&ht++;let J=mt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xt[J].width,xt[J].height,Dt,yt,xt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,xt[J].width,xt[J].height,0,Dt,yt,xt[J].data);for(let ft=0;ft<W.length;ft++){let Ot=W[ft].image[J].image;zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ot.width,Ot.height,Dt,yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Xt,Ot.width,Ot.height,0,Dt,yt,Ot.data)}}else{zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,yt,xt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Dt,yt,xt[J]);for(let ft=0;ft<W.length;ft++){let ut=W[ft];zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Dt,yt,ut.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Xt,Dt,yt,ut.image[J])}}}m(M)&&u(i.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Mt(T,M,B,Y,j,q){let St=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),gt=y(B.internalFormat,St,lt,B.colorSpace),Vt=n.get(M),tt=n.get(B);if(tt.__renderTarget=M,!Vt.__hasExternalTextures){let xt=Math.max(1,M.width>>q),Pt=Math.max(1,M.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,gt,xt,Pt,M.depth,0,St,lt,null):e.texImage2D(j,q,gt,xt,Pt,0,St,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,tt.__webglTexture,0,Q(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){let Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=_(M.stencilBuffer,j),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Q(M);_t(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,q,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{let Y=M.textures;for(let j=0;j<Y.length;j++){let q=Y[j],St=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),gt=y(q.internalFormat,St,lt,q.colorSpace),Vt=Q(M);B&&_t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,gt,M.width,M.height):_t(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,gt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,gt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let j=Y.__webglTexture,q=Q(M);if(M.depthTexture.format===Ki)_t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===ss)_t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Lt(T){let M=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(M.__webglDepthbuffer[Y],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),rt(M.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(T,M,B){let Y=n.get(T);M!==void 0&&Mt(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Lt(T)}function Yt(T){let M=T.texture,B=n.get(T),Y=n.get(M);T.addEventListener("dispose",R);let j=T.textures,q=T.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let gt=0;gt<M.mipmaps.length;gt++)B.__webglFramebuffer[lt][gt]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(St)for(let lt=0,gt=j.length;lt<gt;lt++){let Vt=n.get(j[lt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&_t(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<j.length;lt++){let gt=j[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);let Vt=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),xt=y(gt.internalFormat,Vt,tt,gt.colorSpace,T.isXRRenderTarget===!0),Pt=Q(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)Mt(B.__webglFramebuffer[lt][gt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else Mt(B.__webglFramebuffer[lt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,gt=j.length;lt<gt;lt++){let Vt=j[lt],tt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Nt(i.TEXTURE_2D,Vt),Mt(B.__webglFramebuffer,T,Vt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Vt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),Nt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)Mt(B.__webglFramebuffer[gt],T,M,i.COLOR_ATTACHMENT0,lt,gt);else Mt(B.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,lt,0);m(M)&&u(lt),e.unbindTexture()}T.depthBuffer&&Lt(T)}function K(T){let M=T.textures;for(let B=0,Y=M.length;B<Y;B++){let j=M[B];if(m(j)){let q=v(T),St=n.get(j).__webglTexture;e.bindTexture(q,St),u(q),e.unbindTexture()}}}let nt=[],C=[];function wt(T){if(T.samples>0){if(_t(T)===!1){let M=T.textures,B=T.width,Y=T.height,j=i.COLOR_BUFFER_BIT,q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),lt=M.length>1;if(lt)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);let Vt=n.get(M[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,j,i.NEAREST),c===!0&&(nt.length=0,C.length=0,nt.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(q),C.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);let Vt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Q(T){return Math.min(s.maxSamples,T.samples)}function _t(T){let M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(T){let M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Ct(T,M){let B=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==us&&B!==Yn&&(qt.getTransfer(B)===te?(Y!==an||j!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=_t}function h_(i,t){function e(n,s=Yn){let r,o=qt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===Zh)return i.ALPHA;if(n===Jh)return i.RGB;if(n===an)return i.RGBA;if(n===$h)return i.LUMINANCE;if(n===Kh)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===jh)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===Qh)return i.RG;if(n===Gc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===La||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===La)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Oa||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===Ja||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ir)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===Ka||n===ja||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pc=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ee=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},u_={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null,x=new mc,m=e.getContextAttributes(),u=null,v=null,y=[],_=[],P=new $,w=null,R=new we;R.viewport=new fe;let D=new we;D.viewport=new fe;let E=[R,D],S=new pc,A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=y[Z];return it===void 0&&(it=new Rs,y[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=y[Z];return it===void 0&&(it=new Rs,y[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=y[Z];return it===void 0&&(it=new Rs,y[Z]=it),it.getHandSpace()};function F(Z){let it=_.indexOf(Z.inputSource);if(it===-1)return;let Mt=y[it];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,l||o),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let Z=0;Z<y.length;Z++){let it=_[Z];it!==null&&(_[Z]=null,y[Z].disconnect(it))}A=null,O=null,x.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Un(f.framebufferWidth,f.framebufferHeight,{format:an,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,Mt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?ss:Ki,Mt=m.stencil?is:_i);let Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(Rt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new Un(p.textureWidth,p.textureHeight,{format:an,type:Dn,depthTexture:new Gr(p.textureWidth,p.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Z){for(let it=0;it<Z.removed.length;it++){let Mt=Z.removed[it],rt=_.indexOf(Mt);rt>=0&&(_[rt]=null,y[rt].disconnect(Mt))}for(let it=0;it<Z.added.length;it++){let Mt=Z.added[it],rt=_.indexOf(Mt);if(rt===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=_.length){_.push(Mt),rt=Lt;break}else if(_[Lt]===null){_[Lt]=Mt,rt=Lt;break}if(rt===-1)break}let Rt=y[rt];Rt&&Rt.connect(Mt)}}let V=new I,et=new I;function G(Z,it,Mt){V.setFromMatrixPosition(it.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);let rt=V.distanceTo(et),Rt=it.projectionMatrix.elements,Lt=Mt.projectionMatrix.elements,It=Rt[14]/(Rt[10]-1),Yt=Rt[14]/(Rt[10]+1),K=(Rt[9]+1)/Rt[5],nt=(Rt[9]-1)/Rt[5],C=(Rt[8]-1)/Rt[0],wt=(Lt[8]+1)/Lt[0],Q=It*C,_t=It*wt,ot=rt/(-C+wt),Ct=ot*-C;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ct),Z.translateZ(ot),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let mt=It+ot,T=Yt+ot,M=Q-Ct,B=_t+(rt-Ct),Y=K*Yt/T*mt,j=nt*Yt/T*mt;Z.projectionMatrix.makePerspective(M,B,Y,j,mt,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function at(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,Mt=Z.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),S.near=D.near=R.near=it,S.far=D.far=R.far=Mt,(A!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,O=S.far),R.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,S.layers.mask=R.layers.mask|D.layers.mask;let rt=Z.parent,Rt=S.cameras;at(S,rt);for(let Lt=0;Lt<Rt.length;Lt++)at(Rt[Lt],rt);Rt.length===2?G(S,R,D):S.projectionMatrix.copy(R.projectionMatrix),pt(Z,S,rt)};function pt(Z,it,Mt){Mt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let vt=null;function Nt(Z,it){if(h=it.getViewerPose(l||o),g=it,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Lt=0;Lt<Mt.length;Lt++){let It=Mt[Lt],Yt=null;if(f!==null)Yt=f.getViewport(It);else{let nt=d.getViewSubImage(p,It);Yt=nt.viewport,Lt===0&&(t.setRenderTargetTextures(v,nt.colorTexture,p.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(v))}let K=E[Lt];K===void 0&&(K=new we,K.layers.enable(Lt),K.viewport=new fe,E[Lt]=K),K.matrix.fromArray(It.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(It.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Lt===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(K)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Lt=d.getDepthInformation(Mt[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,s.renderState)}}for(let Mt=0;Mt<y.length;Mt++){let rt=_[Mt],Rt=y[Mt];rt!==null&&Rt!==void 0&&Rt.update(rt,it,l||o)}vt&&vt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let $t=new au;$t.setAnimationLoop(Nt),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}},hi=new xn,p_=new ne;function m_(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ou(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,v,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ke&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ke&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=t.get(u),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,hi.copy(_),hi.x*=-1,hi.y*=-1,hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(hi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,v,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=y*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ke&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let v=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(v,P);let w=t.render.frame;r[v.id]!==w&&(p(v),r[v.id]=w)}function h(v){let y=d();v.__bindingPointIndex=y;let _=i.createBuffer(),P=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let y=s[v.id],_=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,R=_.length;w<R;w++){let D=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,S=D.length;E<S;E++){let A=D[E];if(f(A,w,E,P)===!0){let O=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],z=0;for(let X=0;X<F.length;X++){let V=F[X],et=x(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,O+z,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,P){let w=v.value,R=y+"_"+_;if(P[R]===void 0)return typeof w=="number"||typeof w=="boolean"?P[R]=w:P[R]=w.clone(),!0;{let D=P[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return P[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(v){let y=v.uniforms,_=0,P=16;for(let R=0,D=y.length;R<D;R++){let E=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,A=E.length;S<A;S++){let O=E[S],F=Array.isArray(O.value)?O.value:[O.value];for(let z=0,X=F.length;z<X;z++){let V=F[z],et=x(V),G=_%P,at=G%et.boundary,pt=G+at;_+=at,pt!==0&&P-pt<et.storage&&(_+=P-pt),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=et.storage}}}let w=_%P;return w>0&&(_+=P-w),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Wr=class{constructor(t={}){let{canvas:e=vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Zn,this.toneMappingExposure=1;let _=this,P=!1,w=0,R=0,D=null,E=-1,S=null,A=new fe,O=new fe,F=null,z=new Ht(0),X=0,V=e.width,et=e.height,G=1,at=null,pt=null,vt=new fe(0,0,V,et),Nt=new fe(0,0,V,et),$t=!1,Z=new Us,it=!1,Mt=!1,rt=new ne,Rt=new ne,Lt=new I,It=new fe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function nt(){return D===null?G:1}let C=n;function wt(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){let U="webgl2";if(C=wt(U,b),C===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,_t,ot,Ct,mt,T,M,B,Y,j,q,St,lt,gt,Vt,tt,xt,Pt,Dt,yt,Xt,zt,se,L;function ht(){Q=new Dg(C),Q.init(),zt=new h_(C,Q),_t=new wg(C,Q,t,zt),ot=new a_(C,Q),_t.reverseDepthBuffer&&p&&ot.buffers.depth.setReversed(!0),Ct=new Ng(C),mt=new Z0,T=new l_(C,Q,ot,mt,_t,zt,Ct),M=new Rg(_),B=new Ig(_),Y=new Vf(C),se=new Eg(C,Y),j=new Lg(C,Y,Ct,se),q=new Fg(C,j,Y,Ct),Dt=new Og(C,_t,T),tt=new Ag(mt),St=new q0(_,M,B,Q,_t,se,tt),lt=new m_(_,mt),gt=new $0,Vt=new n_(Q),Pt=new bg(_,M,B,ot,q,f,c),xt=new r_(_,q,_t),L=new g_(C,Ct,_t,ot),yt=new Tg(C,Q,Ct),Xt=new Ug(C,Q,Ct),Ct.programs=St.programs,_.capabilities=_t,_.extensions=Q,_.properties=mt,_.renderLists=gt,_.shadowMap=xt,_.state=ot,_.info=Ct}ht();let W=new gc(_,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(V,et,!1))},this.getSize=function(b){return b.set(V,et)},this.setSize=function(b,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,et=U,e.width=Math.floor(b*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(V*G,et*G).floor()},this.setDrawingBufferSize=function(b,U,k){V=b,et=U,G=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,U,k,H){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,U,k,H),ot.viewport(A.copy(vt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Nt)},this.setScissor=function(b,U,k,H){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,U,k,H),ot.scissor(O.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(b){ot.setScissorTest($t=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,U=!0,k=!0){let H=0;if(b){let N=!1;if(D!==null){let st=D.texture.format;N=st===Wc||st===Gc||st===Vc}if(N){let st=D.texture.type,dt=st===Dn||st===_i||st===Is||st===is||st===kc||st===Hc,bt=Pt.getClearColor(),Et=Pt.getClearAlpha(),Ut=bt.r,Ft=bt.g,Tt=bt.b;dt?(g[0]=Ut,g[1]=Ft,g[2]=Tt,g[3]=Et,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Ut,x[1]=Ft,x[2]=Tt,x[3]=Et,C.clearBufferiv(C.COLOR,0,x))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),k&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Vt.dispose(),mt.dispose(),M.dispose(),B.dispose(),q.dispose(),se.dispose(),L.dispose(),St.dispose(),W.dispose(),W.removeEventListener("sessionstart",xl),W.removeEventListener("sessionend",yl),si.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let b=Ct.autoReset,U=xt.enabled,k=xt.autoUpdate,H=xt.needsUpdate,N=xt.type;ht(),Ct.autoReset=b,xt.enabled=U,xt.autoUpdate=k,xt.needsUpdate=H,xt.type=N}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){let U=b.target;U.removeEventListener("dispose",Ot),de(U)}function de(b){Ae(b),mt.remove(b)}function Ae(b){let U=mt.get(b).programs;U!==void 0&&(U.forEach(function(k){St.releaseProgram(k)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,H,N,st){U===null&&(U=Yt);let dt=N.isMesh&&N.matrixWorld.determinant()<0,bt=fd(b,U,k,H,N);ot.setMaterial(H,dt);let Et=k.index,Ut=1;if(H.wireframe===!0){if(Et=j.getWireframeAttribute(k),Et===void 0)return;Ut=2}let Ft=k.drawRange,Tt=k.attributes.position,Jt=Ft.start*Ut,re=(Ft.start+Ft.count)*Ut;st!==null&&(Jt=Math.max(Jt,st.start*Ut),re=Math.min(re,(st.start+st.count)*Ut)),Et!==null?(Jt=Math.max(Jt,0),re=Math.min(re,Et.count)):Tt!=null&&(Jt=Math.max(Jt,0),re=Math.min(re,Tt.count));let oe=re-Jt;if(oe<0||oe===1/0)return;se.setup(N,H,bt,k,Et);let Be,Kt=yt;if(Et!==null&&(Be=Y.get(Et),Kt=Xt,Kt.setIndex(Be)),N.isMesh)H.wireframe===!0?(ot.setLineWidth(H.wireframeLinewidth*nt()),Kt.setMode(C.LINES)):Kt.setMode(C.TRIANGLES);else if(N.isLine){let At=H.linewidth;At===void 0&&(At=1),ot.setLineWidth(At*nt()),N.isLineSegments?Kt.setMode(C.LINES):N.isLineLoop?Kt.setMode(C.LINE_LOOP):Kt.setMode(C.LINE_STRIP)}else N.isPoints?Kt.setMode(C.POINTS):N.isSprite&&Kt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let At=N._multiDrawStarts,Sn=N._multiDrawCounts,jt=N._multiDrawCount,nn=Et?Y.get(Et).bytesPerElement:1,Di=mt.get(H).currentProgram.getUniforms();for(let Ge=0;Ge<jt;Ge++)Di.setValue(C,"_gl_DrawID",Ge),Kt.render(At[Ge]/nn,Sn[Ge])}else if(N.isInstancedMesh)Kt.renderInstances(Jt,oe,N.count);else if(k.isInstancedBufferGeometry){let At=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Sn=Math.min(k.instanceCount,At);Kt.renderInstances(Jt,oe,Sn)}else Kt.render(Jt,oe)};function Qt(b,U,k){b.transparent===!0&&b.side===_e&&b.forceSinglePass===!1?(b.side=ke,b.needsUpdate=!0,Ks(b,U,k),b.side=$n,b.needsUpdate=!0,Ks(b,U,k),b.side=_e):Ks(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),u=Vt.get(k),u.init(U),y.push(u),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let st=N.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let bt=st[dt];Qt(bt,k,N),H.add(bt)}else Qt(st,k,N),H.add(st)}),y.pop(),u=null,H},this.compileAsync=function(b,U,k=null){let H=this.compile(b,U,k);return new Promise(N=>{function st(){if(H.forEach(function(dt){mt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){N(b);return}setTimeout(st,10)}Q.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let en=null;function Mn(b){en&&en(b)}function xl(){si.stop()}function yl(){si.start()}let si=new au;si.setAnimationLoop(Mn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){en=b,W.setAnimationLoop(b),b===null?si.stop():si.start()},W.addEventListener("sessionstart",xl),W.addEventListener("sessionend",yl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,D),u=Vt.get(b,y.length),u.init(U),y.push(u),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),Mt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,Mt),m=gt.get(b,v.length),m.init(),v.push(m),W.enabled===!0&&W.isPresenting===!0){let st=_.xr.getDepthSensingMesh();st!==null&&No(st,U,-1/0,_.sortObjects)}No(b,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(at,pt),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&Pt.addToRenderList(m,b),this.info.render.frame++,it===!0&&tt.beginShadows();let k=u.state.shadowsArray;xt.render(k,b,U),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){let st=U.cameras;if(N.length>0)for(let dt=0,bt=st.length;dt<bt;dt++){let Et=st[dt];Ml(H,N,b,Et)}K&&Pt.render(b);for(let dt=0,bt=st.length;dt<bt;dt++){let Et=st[dt];vl(m,b,Et,Et.viewport)}}else N.length>0&&Ml(H,N,b,U),K&&Pt.render(b),vl(m,b,U);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(_,b,U),se.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(u=y[y.length-1],it===!0&&tt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function No(b,U,k,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){H&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);let dt=q.update(b),bt=b.material;bt.visible&&m.push(b,dt,bt,k,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let dt=q.update(b),bt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),It.copy(dt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(bt)){let Et=dt.groups;for(let Ut=0,Ft=Et.length;Ut<Ft;Ut++){let Tt=Et[Ut],Jt=bt[Tt.materialIndex];Jt&&Jt.visible&&m.push(b,dt,Jt,k,It.z,Tt)}}else bt.visible&&m.push(b,dt,bt,k,It.z,null)}}let st=b.children;for(let dt=0,bt=st.length;dt<bt;dt++)No(st[dt],U,k,H)}function vl(b,U,k,H){let N=b.opaque,st=b.transmissive,dt=b.transparent;u.setupLightsView(k),it===!0&&tt.setGlobalState(_.clippingPlanes,k),H&&ot.viewport(A.copy(H)),N.length>0&&$s(N,U,k),st.length>0&&$s(st,U,k),dt.length>0&&$s(dt,U,k),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Ml(b,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Un(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Vs:Dn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let st=u.state.transmissionRenderTarget[H.id],dt=H.viewport||A;st.setSize(dt.z,dt.w);let bt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(z),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),K&&Pt.render(k);let Et=_.toneMapping;_.toneMapping=Zn;let Ut=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),it===!0&&tt.setGlobalState(_.clippingPlanes,H),$s(b,k,H),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Tt=0,Jt=U.length;Tt<Jt;Tt++){let re=U[Tt],oe=re.object,Be=re.geometry,Kt=re.material,At=re.group;if(Kt.side===_e&&oe.layers.test(H.layers)){let Sn=Kt.side;Kt.side=ke,Kt.needsUpdate=!0,Sl(oe,k,H,Be,Kt,At),Kt.side=Sn,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}_.setRenderTarget(bt),_.setClearColor(z,X),Ut!==void 0&&(H.viewport=Ut),_.toneMapping=Et}function $s(b,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=b.length;N<st;N++){let dt=b[N],bt=dt.object,Et=dt.geometry,Ut=H===null?dt.material:H,Ft=dt.group;bt.layers.test(k.layers)&&Sl(bt,U,k,Et,Ut,Ft)}}function Sl(b,U,k,H,N,st){b.onBeforeRender(_,U,k,H,N,st),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,U,k,H,b,st),N.transparent===!0&&N.side===_e&&N.forceSinglePass===!1?(N.side=ke,N.needsUpdate=!0,_.renderBufferDirect(k,U,H,N,b,st),N.side=$n,N.needsUpdate=!0,_.renderBufferDirect(k,U,H,N,b,st),N.side=_e):_.renderBufferDirect(k,U,H,N,b,st),b.onAfterRender(_,U,k,H,N,st)}function Ks(b,U,k){U.isScene!==!0&&(U=Yt);let H=mt.get(b),N=u.state.lights,st=u.state.shadowsArray,dt=N.state.version,bt=St.getParameters(b,N.state,st,U,k),Et=St.getProgramCacheKey(bt),Ut=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?B:M).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Ot),Ut=new Map,H.programs=Ut);let Ft=Ut.get(Et);if(Ft!==void 0){if(H.currentProgram===Ft&&H.lightsStateVersion===dt)return El(b,bt),Ft}else bt.uniforms=St.getUniforms(b),b.onBeforeCompile(bt,_),Ft=St.acquireProgram(bt,Et),Ut.set(Et,Ft),H.uniforms=bt.uniforms;let Tt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=tt.uniform),El(b,bt),H.needsLights=md(b),H.lightsStateVersion=dt,H.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ft,H.uniformsList=null,Ft}function bl(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Qi.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function El(b,U){let k=mt.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function fd(b,U,k,H,N){U.isScene!==!0&&(U=Yt),T.resetTextureUnits();let st=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,bt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:us,Et=(H.isMeshStandardMaterial?B:M).get(H.envMap||dt),Ut=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,re=!!k.morphAttributes.color,oe=Zn;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(oe=_.toneMapping);let Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=Be!==void 0?Be.length:0,At=mt.get(H),Sn=u.state.lights;if(it===!0&&(Mt===!0||b!==S)){let Je=b===S&&H.id===E;tt.setState(H,b,Je)}let jt=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Sn.state.version||At.outputColorSpace!==bt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==Et||H.fog===!0&&At.fog!==st||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==tt.numPlanes||At.numIntersection!==tt.numIntersection)||At.vertexAlphas!==Ut||At.vertexTangents!==Ft||At.morphTargets!==Tt||At.morphNormals!==Jt||At.morphColors!==re||At.toneMapping!==oe||At.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,At.__version=H.version);let nn=At.currentProgram;jt===!0&&(nn=Ks(H,U,N));let Di=!1,Ge=!1,_s=!1,ae=nn.getUniforms(),mn=At.uniforms;if(ot.useProgram(nn.program)&&(Di=!0,Ge=!0,_s=!0),H.id!==E&&(E=H.id,Ge=!0),Di||S!==b){ot.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),Sf(rt),bf(rt),ae.setValue(C,"projectionMatrix",rt)):ae.setValue(C,"projectionMatrix",b.projectionMatrix),ae.setValue(C,"viewMatrix",b.matrixWorldInverse);let Bn=ae.map.cameraPosition;Bn!==void 0&&Bn.setValue(C,Lt.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&ae.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ae.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ge=!0,_s=!0)}if(N.isSkinnedMesh){ae.setOptional(C,N,"bindMatrix"),ae.setOptional(C,N,"bindMatrixInverse");let Je=N.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ae.setValue(C,"boneTexture",Je.boneTexture,T))}N.isBatchedMesh&&(ae.setOptional(C,N,"batchingTexture"),ae.setValue(C,"batchingTexture",N._matricesTexture,T),ae.setOptional(C,N,"batchingIdTexture"),ae.setValue(C,"batchingIdTexture",N._indirectTexture,T),ae.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(C,"batchingColorTexture",N._colorsTexture,T));let xs=k.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Dt.update(N,k,nn),(Ge||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,ae.setValue(C,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(mn.envMap.value=Et,mn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),Ge&&(ae.setValue(C,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&pd(mn,_s),st&&H.fog===!0&&lt.refreshFogUniforms(mn,st),lt.refreshMaterialUniforms(mn,H,G,et,u.state.transmissionRenderTarget[b.id]),Qi.upload(C,bl(At),mn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qi.upload(C,bl(At),mn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ae.setValue(C,"center",N.center),ae.setValue(C,"modelViewMatrix",N.modelViewMatrix),ae.setValue(C,"normalMatrix",N.normalMatrix),ae.setValue(C,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Je=H.uniformsGroups;for(let Bn=0,zn=Je.length;Bn<zn;Bn++){let Tl=Je[Bn];L.update(Tl,nn),L.bind(Tl,nn)}}return nn}function pd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function md(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,U,k){mt.get(b.texture).__webglTexture=U,mt.get(b.depthTexture).__webglTexture=k;let H=mt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let k=mt.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){D=b,w=U,R=k;let H=!0,N=null,st=!1,dt=!1;if(b){let Et=mt.get(b);if(Et.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Et.__hasExternalTextures)T.rebindTextures(b,mt.get(b.texture).__webglTexture,mt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Tt=b.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&mt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);let Ft=mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][k]:N=Ft[U],st=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[k]:N=Ft,A.copy(b.viewport),O.copy(b.scissor),F=b.scissorTest}else A.copy(vt).multiplyScalar(G).floor(),O.copy(Nt).multiplyScalar(G).floor(),F=$t;if(ot.bindFramebuffer(C.FRAMEBUFFER,N)&&H&&ot.drawBuffers(b,N),ot.viewport(A),ot.scissor(O),ot.setScissorTest(F),st){let Et=mt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,k)}else if(dt){let Et=mt.get(b.texture),Ut=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,k||0,Ut)}E=-1},this.readRenderTargetPixels=function(b,U,k,H,N,st,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(bt=bt[dt]),bt){ot.bindFramebuffer(C.FRAMEBUFFER,bt);try{let Et=b.texture,Ut=Et.format,Ft=Et.type;if(!_t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&k>=0&&k<=b.height-N&&C.readPixels(U,k,H,N,zt.convert(Ut),zt.convert(Ft),st)}finally{let Et=D!==null?mt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,H,N,st,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(bt=bt[dt]),bt){let Et=b.texture,Ut=Et.format,Ft=Et.type;if(!_t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&k>=0&&k<=b.height-N){ot.bindFramebuffer(C.FRAMEBUFFER,bt);let Tt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(U,k,H,N,zt.convert(Ut),zt.convert(Ft),0);let Jt=D!==null?mt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Jt);let re=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Mf(C,re,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st),C.deleteBuffer(Tt),C.deleteSync(re),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let H=Math.pow(2,-k),N=Math.floor(b.image.width*H),st=Math.floor(b.image.height*H),dt=U!==null?U.x:0,bt=U!==null?U.y:0;T.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,dt,bt,N,st),ot.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,H=null,N=0){b.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let st,dt,bt,Et,Ut,Ft,Tt,Jt,re,oe=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(st=k.max.x-k.min.x,dt=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,Et=k.min.x,Ut=k.min.y,Ft=k.isBox3?k.min.z:0):(st=oe.width,dt=oe.height,bt=oe.depth||1,Et=0,Ut=0,Ft=0),H!==null?(Tt=H.x,Jt=H.y,re=H.z):(Tt=0,Jt=0,re=0);let Be=zt.convert(U.format),Kt=zt.convert(U.type),At;U.isData3DTexture?(T.setTexture3D(U,0),At=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),At=C.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),At=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Sn=C.getParameter(C.UNPACK_ROW_LENGTH),jt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),nn=C.getParameter(C.UNPACK_SKIP_PIXELS),Di=C.getParameter(C.UNPACK_SKIP_ROWS),Ge=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Et),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ft);let _s=b.isDataArrayTexture||b.isData3DTexture,ae=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let mn=mt.get(b),xs=mt.get(U),Je=mt.get(mn.__renderTarget),Bn=mt.get(xs.__renderTarget);ot.bindFramebuffer(C.READ_FRAMEBUFFER,Je.__webglFramebuffer),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<bt;zn++)_s&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(b).__webglTexture,N,Ft+zn),b.isDepthTexture?(ae&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,N,re+zn),C.blitFramebuffer(Et,Ut,st,dt,Tt,Jt,st,dt,C.DEPTH_BUFFER_BIT,C.NEAREST)):ae?C.copyTexSubImage3D(At,N,Tt,Jt,re+zn,Et,Ut,st,dt):C.copyTexSubImage2D(At,N,Tt,Jt,re+zn,Et,Ut,st,dt);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ae?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(At,N,Tt,Jt,re,st,dt,bt,Be,Kt,oe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(At,N,Tt,Jt,re,st,dt,bt,Be,oe.data):C.texSubImage3D(At,N,Tt,Jt,re,st,dt,bt,Be,Kt,oe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Tt,Jt,st,dt,Be,Kt,oe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Tt,Jt,oe.width,oe.height,Be,oe.data):C.texSubImage2D(C.TEXTURE_2D,N,Tt,Jt,st,dt,Be,Kt,oe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Sn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Di),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ge),N===0&&U.generateMipmaps&&C.generateMipmap(At),ot.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,H=null,N=0){return b.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,H,N)},this.initRenderTarget=function(b){mt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),ot.unbindTexture()},this.resetState=function(){w=0,R=0,D=null,ot.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Xr=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ns=class extends Nn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yr=new I,qr=new I,Ah=new ne,bs=new Kn,yr=new yi,ha=new I,Rh=new I,_c=class extends xe{constructor(t=new ue,e=new Ns){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),qr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yr.distanceTo(qr);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;Ah.copy(s).invert(),bs.copy(t.ray).applyMatrix4(Ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let u=h.getX(x),v=h.getX(x+1),y=vr(this,t,bs,c,u,v);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),u=vr(this,t,bs,c,x,m);u&&e.push(u)}}else{let f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let u=vr(this,t,bs,c,x,x+1);u&&e.push(u)}if(this.isLineLoop){let x=vr(this,t,bs,c,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Yr.fromBufferAttribute(o,s),qr.fromBufferAttribute(o,r),e.distanceSqToSegment(Yr,qr,ha,Rh)>n)return;ha.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ha);if(!(c<t.near||c>t.far))return{distance:c,point:Rh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ch=new I,Ph=new I,Zr=class extends _c{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ch.fromBufferAttribute(e,s),Ph.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ch.distanceTo(Ph);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Mi=class extends Nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ih=new ne,xc=new Kn,Mr=new yi,Sr=new I,os=class extends xe{constructor(t=new ue,e=new Mi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Ih.copy(s).invert(),xc.copy(t.ray).applyMatrix4(Ih);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let p=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=p,x=f;g<x;g++){let m=l.getX(g);Sr.fromBufferAttribute(d,m),Dh(Sr,m,c,s,t,e,this)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=p,x=f;g<x;g++)Sr.fromBufferAttribute(d,g),Dh(Sr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dh(i,t,e,n,s,r,o){let a=xc.distanceSqToPoint(i);if(a<e){let c=new I;xc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Jr=class extends qe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(o-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new $:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],o=[],a=new I,c=new ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ge(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new $){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yc=class extends Os{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;p*=h,f*=h,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var br=new I,ua=new qc,da=new qc,fa=new qc,Si=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),l=br);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ua.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,g,x,m),da.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,g,x,m),fa.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),da.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),fa.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(ua.calc(c),da.calc(c),fa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function __(i,t){let e=1-i;return e*e*t}function x_(i,t){return 2*(1-i)*i*t}function y_(i,t){return i*i*t}function Cs(i,t,e,n){return __(i,t)+x_(i,e)+y_(i,n)}function v_(i,t){let e=1-i;return e*e*e*t}function M_(i,t){let e=1-i;return 3*e*e*i*t}function S_(i,t){return 3*(1-i)*i*i*t}function b_(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return v_(i,t)+M_(i,e)+S_(i,n)+b_(i,s)}var $r=class extends Ke{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vc=class extends Ke{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends Ke{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends Ke{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends Ke{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends Ke{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Lh(a,c.x,l.x,h.x,d.x),Lh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:Si,CubicBezierCurve:$r,CubicBezierCurve3:vc,EllipseCurve:Os,LineCurve:Kr,LineCurve3:Mc,QuadraticBezierCurve:jr,QuadraticBezierCurve3:Qr,SplineCurve:to}),Sc=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new eo[s.type]().fromJSON(s))}return this}},no=class extends Sc{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Kr(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new jr(this.currentPoint.clone(),new $(t,e),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new $(t,e),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new to(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Os(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bi=class i extends ue{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ge(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new I,p=new $,f=new I,g=new I,x=new I,m=0,u=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,u=t[v+1].y-t[v].y,f.x=u*1,f.y=-m,f.z=u*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,u=t[v+1].y-t[v].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=e;v++){let y=n+v*h*s,_=Math.sin(y),P=Math.cos(y);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*P,o.push(d.x,d.y,d.z),p.x=v/e,p.y=w/(t.length-1),a.push(p.x,p.y);let R=c[3*w+0]*_,D=c[3*w+1],E=c[3*w+0]*P;l.push(R,D,E)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,P=_,w=_+t.length,R=_+t.length+1,D=_+1;r.push(P,w,D),r.push(R,D,w)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var io=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,h=new $;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},as=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],f=[],g=0,x=[],m=n/2,u=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(f,2));function v(){let _=new I,P=new I,w=0,R=(e-t)/n;for(let D=0;D<=r;D++){let E=[],S=D/r,A=S*(e-t)+t;for(let O=0;O<=s;O++){let F=O/s,z=F*c+a,X=Math.sin(z),V=Math.cos(z);P.x=A*X,P.y=-S*n+m,P.z=A*V,d.push(P.x,P.y,P.z),_.set(X,R,V).normalize(),p.push(_.x,_.y,_.z),f.push(F,1-S),E.push(g++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){let S=x[E][D],A=x[E+1][D],O=x[E+1][D+1],F=x[E][D+1];(t>0||E!==0)&&(h.push(S,A,F),w+=3),(e>0||E!==r-1)&&(h.push(A,O,F),w+=3)}l.addGroup(u,w,0),u+=w}function y(_){let P=g,w=new $,R=new I,D=0,E=_===!0?t:e,S=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),g++;let A=g;for(let O=0;O<=s;O++){let z=O/s*c+a,X=Math.cos(z),V=Math.sin(z);R.x=E*V,R.y=m*S,R.z=E*X,d.push(R.x,R.y,R.z),p.push(0,S,0),w.x=X*.5+.5,w.y=V*.5*S+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let F=P+O,z=A+O;_===!0?h.push(z,z+1,F):h.push(z+1,z,F),D+=3}l.addGroup(u,D,_===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qn=class extends no{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new no().fromJSON(s))}return this}},E_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=du(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,p,f;if(n&&(r=C_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<a&&(a=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Fs(r,o,e,a,c,f,0),o}};function du(i,t,e,n,s){let r,o;if(s===k_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Uh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Uh(r,i[r],i[r+1],o);return o&&_o(o,o.next)&&(zs(o),o=o.next),o}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||he(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&U_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?w_(i,n,s,r):T_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),zs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=A_(Ei(i),t,e),Fs(i,t,e,n,s,r,2)):o===2&&R_(i,t,e,n,s,r):Fs(Ei(i),t,e,n,s,r,1);break}}}function T_(i){let t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,p=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&Ji(s,a,r,c,o,l,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(he(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,p=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<p?h:p:d<p?d:p,x=a>c?a>l?a:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=bc(f,g,t,e,n),v=bc(x,m,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=u&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ji(a,h,c,d,l,p,y.x,y.y)&&he(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ji(a,h,c,d,l,p,_.x,_.y)&&he(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=u;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ji(a,h,c,d,l,p,y.x,y.y)&&he(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ji(a,h,c,d,l,p,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function A_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_o(s,r)&&fu(s,n,n.next,r)&&Bs(s,r)&&Bs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zs(n),zs(n.next),n=i=r),n=n.next}while(n!==i);return Ei(n)}function R_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F_(o,a)){let c=pu(o,a);o=Ei(o,o.next),c=Ei(c,c.next),Fs(o,t,e,n,s,r,0),Fs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function C_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=du(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(O_(l));for(s.sort(P_),r=0;r<s.length;r++)e=I_(s[r],e);return e}function P_(i,t){return i.x-t.x}function I_(i,t){let e=D_(i,t);if(!e)return t;let n=pu(e,i);return Ei(n,n.next),Ei(e,e.next)}function D_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ji(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Bs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&L_(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function L_(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function U_(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,N_(s)}function N_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ji(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function F_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!B_(i,t)&&(Bs(i,t)&&Bs(t,i)&&z_(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||_o(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _o(i,t){return i.x===t.x&&i.y===t.y}function fu(i,t,e,n){let s=Tr(he(i,t,e)),r=Tr(he(i,t,n)),o=Tr(he(e,n,i)),a=Tr(he(e,n,t));return!!(s!==r&&o!==a||s===0&&Er(i,e,t)||r===0&&Er(i,n,t)||o===0&&Er(e,i,n)||a===0&&Er(e,t,n))}function Er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Tr(i){return i>0?1:i<0?-1:0}function B_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bs(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function z_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pu(i,t){let e=new Ec(i.i,i.x,i.y),n=new Ec(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uh(i,t,e,n){let s=new Ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Jn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nh(t),Oh(n,t);let o=t.length;e.forEach(Nh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Oh(n,e[c]);let a=E_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Nh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Oh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var so=class i extends ue{constructor(t=new Qn([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:H_,y,_=!1,P,w,R,D;u&&(y=u.getSpacedPoints(h),_=!0,p=!1,P=u.computeFrenetFrames(h,!1),w=new I,R=new I,D=new I),p||(m=0,f=0,g=0,x=0);let E=a.extractPoints(l),S=E.shape,A=E.holes;if(!Jn.isClockWise(S)){S=S.reverse();for(let K=0,nt=A.length;K<nt;K++){let C=A[K];Jn.isClockWise(C)&&(A[K]=C.reverse())}}let F=Jn.triangulateShape(S,A),z=S;for(let K=0,nt=A.length;K<nt;K++){let C=A[K];S=S.concat(C)}function X(K,nt,C){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(nt,C)}let V=S.length,et=F.length;function G(K,nt,C){let wt,Q,_t,ot=K.x-nt.x,Ct=K.y-nt.y,mt=C.x-K.x,T=C.y-K.y,M=ot*ot+Ct*Ct,B=ot*T-Ct*mt;if(Math.abs(B)>Number.EPSILON){let Y=Math.sqrt(M),j=Math.sqrt(mt*mt+T*T),q=nt.x-Ct/Y,St=nt.y+ot/Y,lt=C.x-T/j,gt=C.y+mt/j,Vt=((lt-q)*T-(gt-St)*mt)/(ot*T-Ct*mt);wt=q+ot*Vt-K.x,Q=St+Ct*Vt-K.y;let tt=wt*wt+Q*Q;if(tt<=2)return new $(wt,Q);_t=Math.sqrt(tt/2)}else{let Y=!1;ot>Number.EPSILON?mt>Number.EPSILON&&(Y=!0):ot<-Number.EPSILON?mt<-Number.EPSILON&&(Y=!0):Math.sign(Ct)===Math.sign(T)&&(Y=!0),Y?(wt=-Ct,Q=ot,_t=Math.sqrt(M)):(wt=ot,Q=Ct,_t=Math.sqrt(M/2))}return new $(wt/_t,Q/_t)}let at=[];for(let K=0,nt=z.length,C=nt-1,wt=K+1;K<nt;K++,C++,wt++)C===nt&&(C=0),wt===nt&&(wt=0),at[K]=G(z[K],z[C],z[wt]);let pt=[],vt,Nt=at.concat();for(let K=0,nt=A.length;K<nt;K++){let C=A[K];vt=[];for(let wt=0,Q=C.length,_t=Q-1,ot=wt+1;wt<Q;wt++,_t++,ot++)_t===Q&&(_t=0),ot===Q&&(ot=0),vt[wt]=G(C[wt],C[_t],C[ot]);pt.push(vt),Nt=Nt.concat(vt)}for(let K=0;K<m;K++){let nt=K/m,C=f*Math.cos(nt*Math.PI/2),wt=g*Math.sin(nt*Math.PI/2)+x;for(let Q=0,_t=z.length;Q<_t;Q++){let ot=X(z[Q],at[Q],wt);rt(ot.x,ot.y,-C)}for(let Q=0,_t=A.length;Q<_t;Q++){let ot=A[Q];vt=pt[Q];for(let Ct=0,mt=ot.length;Ct<mt;Ct++){let T=X(ot[Ct],vt[Ct],wt);rt(T.x,T.y,-C)}}}let $t=g+x;for(let K=0;K<V;K++){let nt=p?X(S[K],Nt[K],$t):S[K];_?(R.copy(P.normals[0]).multiplyScalar(nt.x),w.copy(P.binormals[0]).multiplyScalar(nt.y),D.copy(y[0]).add(R).add(w),rt(D.x,D.y,D.z)):rt(nt.x,nt.y,0)}for(let K=1;K<=h;K++)for(let nt=0;nt<V;nt++){let C=p?X(S[nt],Nt[nt],$t):S[nt];_?(R.copy(P.normals[K]).multiplyScalar(C.x),w.copy(P.binormals[K]).multiplyScalar(C.y),D.copy(y[K]).add(R).add(w),rt(D.x,D.y,D.z)):rt(C.x,C.y,d/h*K)}for(let K=m-1;K>=0;K--){let nt=K/m,C=f*Math.cos(nt*Math.PI/2),wt=g*Math.sin(nt*Math.PI/2)+x;for(let Q=0,_t=z.length;Q<_t;Q++){let ot=X(z[Q],at[Q],wt);rt(ot.x,ot.y,d+C)}for(let Q=0,_t=A.length;Q<_t;Q++){let ot=A[Q];vt=pt[Q];for(let Ct=0,mt=ot.length;Ct<mt;Ct++){let T=X(ot[Ct],vt[Ct],wt);_?rt(T.x,T.y+y[h-1].y,y[h-1].x+C):rt(T.x,T.y,d+C)}}}Z(),it();function Z(){let K=s.length/3;if(p){let nt=0,C=V*nt;for(let wt=0;wt<et;wt++){let Q=F[wt];Rt(Q[2]+C,Q[1]+C,Q[0]+C)}nt=h+m*2,C=V*nt;for(let wt=0;wt<et;wt++){let Q=F[wt];Rt(Q[0]+C,Q[1]+C,Q[2]+C)}}else{for(let nt=0;nt<et;nt++){let C=F[nt];Rt(C[2],C[1],C[0])}for(let nt=0;nt<et;nt++){let C=F[nt];Rt(C[0]+V*h,C[1]+V*h,C[2]+V*h)}}n.addGroup(K,s.length/3-K,0)}function it(){let K=s.length/3,nt=0;Mt(z,nt),nt+=z.length;for(let C=0,wt=A.length;C<wt;C++){let Q=A[C];Mt(Q,nt),nt+=Q.length}n.addGroup(K,s.length/3-K,1)}function Mt(K,nt){let C=K.length;for(;--C>=0;){let wt=C,Q=C-1;Q<0&&(Q=K.length-1);for(let _t=0,ot=h+m*2;_t<ot;_t++){let Ct=V*_t,mt=V*(_t+1),T=nt+wt+Ct,M=nt+Q+Ct,B=nt+Q+mt,Y=nt+wt+mt;Lt(T,M,B,Y)}}}function rt(K,nt,C){c.push(K),c.push(nt),c.push(C)}function Rt(K,nt,C){It(K),It(nt),It(C);let wt=s.length/3,Q=v.generateTopUV(n,s,wt-3,wt-2,wt-1);Yt(Q[0]),Yt(Q[1]),Yt(Q[2])}function Lt(K,nt,C,wt){It(K),It(nt),It(wt),It(nt),It(C),It(wt);let Q=s.length/3,_t=v.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Yt(_t[0]),Yt(_t[1]),Yt(_t[3]),Yt(_t[1]),Yt(_t[2]),Yt(_t[3])}function It(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function Yt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return V_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new eo[s.type]().fromJSON(s)),new i(n,t.options)}},H_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new $(r,o),new $(a,c),new $(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new $(o,1-c),new $(l,1-d),new $(p,1-g),new $(x,1-u)]:[new $(a,1-c),new $(h,1-d),new $(f,1-g),new $(m,1-u)]}};function V_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ro=class i extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,p=(e-t)/s,f=new I,g=new $;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let u=r+m/n*o;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let x=0;x<s;x++){let m=x*(n+1);for(let u=0;u<n;u++){let v=u+m,y=v,_=v+n+1,P=v+n+2,w=v+1;a.push(y,_,w),a.push(_,P,w)}}this.setIndex(a),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},oo=class i extends ue{constructor(t=new Qn([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(r,3)),this.setAttribute("uv",new Gt(o,2));function l(h){let d=s.length/3,p=h.extractPoints(e),f=p.shape,g=p.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){let v=g[m];Jn.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=Jn.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){let v=g[m];f=f.concat(v)}for(let m=0,u=f.length;m<u;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,u=x.length;m<u;m++){let v=x[m],y=v[0]+d,_=v[1]+d,P=v[2]+d;n.push(y,_,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return G_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function G_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var cs=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,d=new I,p=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ls=class i extends ue{constructor(t=new Qr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new $,h=new I,d=[],p=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(f,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),v(),u()}function m(y){h=t.getPointAt(y/e,h);let _=o.normals[y],P=o.binormals[y];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,D=Math.sin(R),E=-Math.cos(R);c.x=E*_.x+D*P.x,c.y=E*_.y+D*P.y,c.z=E*_.z+D*P.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let P=(s+1)*(y-1)+(_-1),w=(s+1)*y+(_-1),R=(s+1)*y+_,D=(s+1)*(y-1)+_;g.push(P,w,D),g.push(w,R,D)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)l.x=y/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var vn=class extends Nn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function wr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function W_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Il:r=t,a=2*e-n;break;case Dl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:o=t,c=2*n-e;break;case Dl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,v=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let P=0;P!==a;++P)r[P]=u*o[h+P]+v*o[l+P]+y*o[c+P]+_*o[d+P];return r}},wc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*d+o[c+p]*h;return r}},Ac=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&W_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,p=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[p+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=tc;var Ti=class extends hn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Dr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends hn{};Rc.prototype.ValueTypeName="color";var Cc=class extends hn{};Cc.prototype.ValueTypeName="number";var Pc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ln.slerpFlat(r,0,o,l-a,o,l,c);return r}},ao=class extends hn{InterpolantFactoryMethodLinear(t){return new Pc(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends hn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Dr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends hn{};Ic.prototype.ValueTypeName="vector";var Dc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},X_=new Dc,Lc=class{constructor(t){this.manager=t!==void 0?t:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},lo=class extends co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},pa=new ne,Fh=new I,Bh=new I,Uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nc=class extends Uc{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ho=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zh(){return performance.now()}var Zc="\\[\\]\\.:\\/",Y_=new RegExp("["+Zc+"]","g"),Jc="[^"+Zc+"]",q_="[^"+Zc.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",Jc),J_=/(WCOD+)?/.source.replace("WCOD",q_),$_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),j_=new RegExp("^"+Z_+J_+$_+K_+"$"),Q_=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(t){let e=j_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Q_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Oc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);var kh=new ne,uo=class{constructor(t,e,n=0,s=1/0){this.ray=new Kn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(t,e=!0,n=[]){return Fc(t,this,n,e),n.sort(Hh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fc(t[s],this,n,e);return n.sort(Hh),n}};function Hh(i,t){return i.distance-t.distance}function Fc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],t,e,!0)}}var Hs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fo=class extends Ln{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);var xo=class extends xe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new $(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},fs=new I,mu=new ne,gu=new ne,_u=new I,xu=new I,yo=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),mu.copy(x.matrixWorldInverse),gu.multiplyMatrices(x.projectionMatrix,mu),h(g,g,x),f(g)},this.setSize=function(g,x){n=g,s=x,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=x+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)l(g.children[x])}function h(g,x,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){fs.setFromMatrixPosition(g.matrixWorld),fs.applyMatrix4(gu);let u=fs.z>=-1&&fs.z<=1&&g.layers.test(m.layers)===!0,v=g.element;v.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(e,x,m),v.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(fs.x*r+r)+"px,"+(-fs.y*o+o)+"px)",v.parentNode!==c&&c.appendChild(v),g.onAfterRender(e,x,m));let y={distanceToCameraSquared:d(m,g)};a.objects.set(g,y)}for(let u=0,v=g.children.length;u<v;u++)h(g.children[u],x,m)}function d(g,x){return _u.setFromMatrixPosition(g.matrixWorld),xu.setFromMatrixPosition(x.matrixWorld),_u.distanceToSquared(xu)}function p(g){let x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function f(g){let x=p(g).sort(function(u,v){if(u.renderOrder!==v.renderOrder)return v.renderOrder-u.renderOrder;let y=a.objects.get(u).distanceToCameraSquared,_=a.objects.get(v).distanceToCameraSquared;return y-_}),m=x.length;for(let u=0,v=x.length;u<v;u++)x[u].element.style.zIndex=m-u}}};var Ii={center:8,radius:4.6,front:1.5,back:2.5},yu=.68,je=2.6,Ee=9.3,Mo=8,Wt={main:{x:5.5,y:10.8,z:0,length:2.2},side:{x:0,y:10.8,z:-5.5,length:1}},vo=Math.asin(je/Ii.radius),tx=i=>i*Math.PI/180;function On(i,t,e,n,s=32){let r=[];for(let o=0;o<=s;o++){let a=tx(e+(n-e)*o/s);r.push([Math.max(0,t*Math.cos(a)),i+t*Math.sin(a)])}return r}function ti(i,t,e,n=32){let s=[];for(let r=0;r<=n;r++){let o=i+(t-i)*r/n,a=o<Math.PI/2?Ii.front:Ii.back;s.push([Math.max(0,e*Ii.radius*Math.sin(o)),Ii.center+e*a*Math.cos(o)])}return s}var Pi=(i,t)=>[...i,...[...t].reverse()],Ze={sclera:Pi(On(0,12,-90,61.1),On(0,11.4,-90,61.1)),choroid:Pi(On(0,11.38,-90,35),On(0,11.15,-90,35)),retina:Pi(On(0,11.13,-90,32),On(0,10.9,-90,32)),opticNerve:[[0,-11.95],[1.6,-11.95],[1.6,-18],[0,-18]],cornea:Pi(On(5.285,7.8,90,41.96),On(5.285,7.2,90,36.3)),iris:[[3.2,9.3],[5.6,9],[5.6,9.4],[3.2,9.6]],ciliary:[[5.3,8.7],[5.8,9.2],[6.3,9],[7.6,7.8],[8.9,6.4],[8.6,6],[6.6,7],[5.4,8]],vitreous:[...On(0,10.88,-90,30),[6.5,6.6],...ti(1.75,Math.PI,1.04)],cortex:Pi(ti(0,Math.PI,.98),ti(0,Math.PI,yu+.01)),nucleus:ti(0,Math.PI,yu),capsuleBag:Pi(ti(vo,Math.PI,1.03),ti(vo,Math.PI,1)),capsuleDisc:Pi(ti(0,vo,1.03),ti(0,vo,1))},vu={cornea:[-2.5,12.4,0],anteriorChamber:[-1.5,11,0],iris:[-4.4,9.3,0],capsule:[0,5.9,2.5],cortex:[0,7,3.6],nucleus:[0,8.3,1.2],zonules:[0,8.2,5],ciliary:[-7,7.5,0],vitreous:[-4,0,0],retina:[-9.5,-5.5,0],choroid:[-8,-8,0],sclera:[-5.85,-10.1,0],opticNerve:[-.8,-15,0],iol:[-2,8.6,0]};function Mu(i){return i.route==="femto"&&i.laserDone?{quarter:.1}:i.nucleusSplit>=2?{half:.3,quarter:.35,rotation:Math.PI/2}:i.nucleusSplit===1?{half:.3,rotation:Math.PI/2}:{}}var $c=Math.PI*2,ex=Math.PI*1.5;function Eu(i,t){return i<0&&t>0}var Tu=i=>i.map(([t,e])=>new $(t,e));function nx(i,t,e,n){let s=Tu(i);s.push(s[0].clone());let r=Math.max(6,Math.round(72*n/$c));return new Zt(new bi(s,r,e,n),t)}function Su(i,t,e){let n=new Zt(new oo(new Qn(Tu(i))),t);return n.rotation.y=e-Math.PI/2,n}function bu(i,t,e,n){let s=new ee;return s.add(nx(i,t,e,n)),n<$c-1e-6&&s.add(Su(i,t,e),Su(i,t,e+n)),s}function Kc(i,t,{phiStart:e=0,phiLength:n=$c}={}){let s=bu(i,t,e,n),r=Math.max(e,0),o=Math.min(e+n,ex),a=o-r>1e-6?bu(i,t,r,o-r):null;return{full:s,cut:a}}var ps=class{constructor(t,{full:e,cut:n}){this.id=t,this.group=new ee,this.full=e,this.cut=n,this.group.add(e),n&&this.group.add(n),this.group.traverse(s=>{s.isMesh&&(s.userData.layerId=t)}),this.present=!0,this.cutaway=!1,this.refresh()}setPresent(t){this.present=t,this.refresh()}setCutaway(t){this.cutaway=t,this.refresh()}refresh(){this.group.visible=this.present,this.full.visible=!this.cutaway,this.cut&&(this.cut.visible=this.cutaway)}};var dn=Math.PI*2;function ix(i,t,e){return[.5+i/(2*e),.5-t/(2*e)]}function jc(i,t){let e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++){let[r,o]=ix(e.getX(s),e.getZ(s),t);n[s*2]=r,n[s*2+1]=o}i.setAttribute("uv",new Pe(n,2))}function Qc(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Xs(i){let t=document.createElement("canvas");return t.width=t.height=i,{canvas:t,ctx:t.getContext("2d")}}function Ys(i){let t=new Jr(i);return t.colorSpace=ze,t.anisotropy=4,t}function Fn(i,t,e,n,s,r){let o=i.createRadialGradient(t,e,n,t,e,s);for(let[a,c]of r)o.addColorStop(a,c);return o}var ce=(i,t,e,n)=>`rgba(${i},${t},${e},${n})`,fn=512,sx=5.6,ei=i=>i/sx*(fn/2);function rx(i,t){let e=ei(3.2);i.fillStyle=Fn(i,t,t,e,t,[[0,"#5a3d26"],[(ei(3.9)-e)/(t-e),"#8a6440"],[.62,"#6f4e32"],[.9,"#6b4a2f"],[1,"#3e2918"]]),i.fillRect(0,0,fn,fn)}function wu(i,t,e,n,s,r,o,a,c){i.strokeStyle=a,i.lineWidth=c,i.beginPath();for(let l=n;l<=s;l+=6){let h=e+r*Math.sin(l*.045+o),d=t+l*Math.cos(h),p=t+l*Math.sin(h);l===n?i.moveTo(d,p):i.lineTo(d,p)}i.stroke()}function ox(i,t,e){let n=ei(3.2);i.lineCap="round";for(let s=0;s<220;s++){let o=e()<.5?ce(200+e()*30,150+e()*30,95+e()*25,.18+e()*.25):ce(40+e()*25,25+e()*15,12+e()*10,.2+e()*.3),a=n+e()*10,c=t*(.82+e()*.18);wu(i,t,e()*dn,a,c,.015+e()*.03,e()*dn,o,.8+e()*1.6)}for(let s=0;s<380;s++){let r=n+6+e()*(t-n)*.7,o=e()<.5?ce(215,170,115,.12):ce(35,20,10,.14);wu(i,t,e()*dn,r,r+20+e()*50,.02,e()*dn,o,.7)}}function ax(i,t,e){let n=ei(3.9),s=56;i.lineJoin="round",i.beginPath();for(let r=0;r<=s*2;r++){let o=r/(s*2)*dn,a=n+(r%2?7:-7)+(e()-.5)*5,c=t+a*Math.cos(o),l=t+a*Math.sin(o);r===0?i.moveTo(c,l):i.lineTo(c,l)}i.closePath(),i.strokeStyle=ce(222,184,132,.6),i.lineWidth=3.5,i.stroke(),i.strokeStyle=ce(244,214,168,.25),i.lineWidth=9,i.stroke(),i.fillStyle=Fn(i,t,t,n+8,n+40,[[0,ce(40,24,12,.22)],[1,ce(40,24,12,0)]]),i.fillRect(0,0,fn,fn)}function cx(i,t,e){for(let n=0;n<16;n++){let s=e()*dn,r=ei(3.5)+e()*ei(1.9),o=6+e()*9;i.save(),i.translate(t+r*Math.cos(s),t+r*Math.sin(s)),i.rotate(s),i.scale(1.8,.7),i.fillStyle=Fn(i,0,0,0,o,[[0,ce(25,14,8,.65)],[1,ce(25,14,8,0)]]),i.beginPath(),i.arc(0,0,o,0,dn),i.fill(),i.restore()}}function lx(i,t,e){let n=ei(3.2);i.fillStyle=Fn(i,t,t,n,n+22,[[0,ce(30,18,10,.55)],[1,ce(30,18,10,0)]]),i.fillRect(0,0,fn,fn),i.beginPath();for(let s=0;s<=180;s++){let r=s/180*dn,o=n+2.5+(e()-.5)*2,a=t+o*Math.cos(r),c=t+o*Math.sin(r);s===0?i.moveTo(a,c):i.lineTo(a,c)}i.closePath(),i.strokeStyle="#2a1a10",i.lineWidth=3,i.stroke()}function hx(i,t){i.fillStyle=Fn(i,t,t,t*.86,t,[[0,ce(30,18,10,0)],[1,ce(30,18,10,.75)]]),i.fillRect(0,0,fn,fn)}function ux(i,t){i.save(),i.globalCompositeOperation="destination-out",i.beginPath(),i.arc(t,t,ei(3.2),0,dn),i.fill(),i.restore()}function Au(){let{canvas:i,ctx:t}=Xs(fn),e=fn/2,n=Qc(20261025);return rx(t,e),ox(t,e,n),ax(t,e,n),cx(t,e,n),hx(t,e),lx(t,e,n),ux(t,e),Ys(i)}var Gs=1024,dx=12,Ws=i=>i/dx*(Gs/2);function fx(i,t){let e=Ws(5.8),n=Ws(6.6);i.fillStyle=Fn(i,t,t,e,n,[[0,ce(112,128,144,.6)],[.35,ce(125,142,158,.34)],[1,ce(130,146,160,0)]]),i.fillRect(0,0,Gs,Gs)}function Ru(i,t,e,n,s,r,o,a,c){let h=new Set(Array.from({length:c},()=>.25+e()*.5)),d=n,p=(e()-.5)*.004,f=s-r,g=t+s*Math.cos(d),x=t+s*Math.sin(d);i.strokeStyle=ce(184,69,63,a),i.lineCap="round";for(let m=s-8;m>=r;m-=8){p+=(e()-.5)*.0025,d+=p;let u=t+m*Math.cos(d),v=t+m*Math.sin(d);i.lineWidth=Math.max(.8,o*(.55+.45*((m-r)/f))),i.beginPath(),i.moveTo(g,x),i.lineTo(u,v),i.stroke(),g=u,x=v;for(let y of h)if((s-m)/f>=y){h.delete(y);let _=e()<.5?-1:1;Ru(i,t,e,d+_*(.03+e()*.05),m,r+e()*Ws(.4),o*.6,a*.9,0)}}}function px(i,t,e){for(let s=0;s<14;s++){let r=(s+e()*.8)/14*dn,o=Ws(10.4+e()*.9),a=Ws(6.25+e()*.6);Ru(i,t,e,r,o,a,1+e()*1.5,.35+e()*.25,1+Math.floor(e()*2))}}function Cu(){let{canvas:i,ctx:t}=Xs(Gs),e=Gs/2,n=Qc(7301);return fx(t,e),px(t,e,n),Ys(i)}function Pu(){let{canvas:e,ctx:n}=Xs(256),s=Qc(4242);n.fillStyle=Fn(n,128,128,0,128,[[0,"#8f5f24"],[.55,"#b9873a"],[1,"#d8b062"]]),n.fillRect(0,0,256,256),n.strokeStyle=ce(70,40,10,.15);for(let r of[.22,.38,.55,.72,.88])n.lineWidth=3+s()*3,n.beginPath(),n.arc(128,128,r*128,0,dn),n.stroke();for(let r=0;r<1600;r++)n.fillStyle=s()<.5?ce(255,235,190,.09):ce(60,35,10,.09),n.fillRect(s()*256,s()*256,1+s(),1+s());return Ys(e)}function Iu(){let{canvas:e,ctx:n}=Xs(256);return n.fillStyle=Fn(n,128,128,0,128,[[0,"#ff8a3d"],[.85,"#a8321e"],[1,ce(168,50,30,0)]]),n.fillRect(0,0,256,256),Ys(e)}function Du(){let{canvas:e,ctx:n}=Xs(64);return n.fillStyle=Fn(n,32,32,0,32,[[0,ce(255,255,255,1)],[.4,ce(255,255,255,.55)],[1,ce(255,255,255,0)]]),n.fillRect(0,0,64,64),Ys(e)}var qs=.35;function Lu(){let i=(e,n={})=>new vn({color:e,roughness:.6,metalness:0,side:_e,...n}),t=(e,n,s={})=>i(e,{transparent:!0,opacity:n,depthWrite:!1,roughness:.15,...s});return{sclera:i(16052196),choroid:i(11032399),retina:i(15442556),opticNerve:i(15126424),vitreous:t(14217718,.16),ciliary:i(9263683),iris:i(16777215,{map:Au(),roughness:.8}),capsule:t(14086143,.35,{roughness:.7}),capsuleDisc:t(14086143,.45,{roughness:.7}),cortex:t(15390618,qs),nucleus:i(16777215,{map:Pu(),roughness:.85}),cornea:t(12576501,.1,{roughness:.05,metalness:.1}),zonules:new Ns({color:14147299}),incision:i(8010555),laser:new Ue({color:8191851}),iol:t(10935551,.6,{roughness:.05}),haptic:i(3114705)}}var mx=1.3;function Uu(i,t){i.traverse(e=>{e.isMesh&&jc(e.geometry,t)})}function gx(){let t=61.1*Math.PI/180,e=20*Math.PI/180,n=24,s=[];for(let a=0;a<=n;a++){let c=t+(e-t)*a/n;s.push(new $(12.02*Math.cos(c),12.02*Math.sin(c)))}let r=new vn({map:Cu(),transparent:!0,depthWrite:!1,roughness:.5,side:_e}),o=(a,c)=>{let l=new bi(s,c,0,a);jc(l,12);let h=new Zt(l,r);return h.renderOrder=1,h};return{full:o(Math.PI*2,96),cut:o(Math.PI*1.5,72)}}function _x(){let i=new Zt(new io(4.4,64),new Ue({map:Iu(),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=5,i.renderOrder=0,i}function xx(){let i=new Ue({map:Du(),transparent:!0,depthWrite:!1,opacity:.85}),t=new ee;for(let[e,n]of[[-.6,-.4],[.7,-.3]]){let s=new Zt(new jn(.9,.5),i);s.rotation.x=-Math.PI/2,s.position.set(e,13.15,n),s.renderOrder=6,t.add(s)}return t}function tl(i,t){i.traverse(e=>{e.isMesh&&(e.userData.layerId=t)})}function yx(i){let t=e=>{let n=[];for(let o=0;o<72;o++){let a=o/72*Math.PI*2;if(a>e)break;let c=Math.sin(a),l=Math.cos(a);for(let[h,d,p,f]of[[4.65,8.35,5.35,8.6],[4.65,7.65,5.45,8.05]])n.push(new I(h*c,d,h*l),new I(p*c,f,p*l))}let r=new ee;return r.add(new Zr(new ue().setFromPoints(n),i)),r};return{full:t(Math.PI*2),cut:t(Math.PI*1.5)}}function vx(i){let t=new ee,e=[[0,.42],[1.5,.32],[3,.08],[3,-.08],[1.5,-.32],[0,-.42]],n=new Zt(new bi(e.map(([o,a])=>new $(o,a)),48),i.iol),s=new ee,r=new Si([[2.7,0,1.2],[3.6,0,2.6],[4.4,0,1],[4.3,0,-1]].map(([o,a,c])=>new I(o,a,c)));for(let o of[0,Math.PI]){let a=new Zt(new ls(r,32,.12,8,!1),i.haptic);a.rotation.y=o,s.add(a)}return t.add(n,s),tl(t,"iol"),{group:t,setPose(o,a,c,l){let h=Math.min(1,Math.max(0,l));t.position.set(o,a,c),n.scale.set(.35+.65*h,1,1),s.scale.setScalar(.3+.7*h)}}}function Nu(i){let t=Lu(),e=new ee,n={},s=(y,_,P,w=y)=>{let R=new ps(w,Kc(_,P));return n[y]=R,e.add(R.group),R};s("sclera",Ze.sclera,t.sclera),s("choroid",Ze.choroid,t.choroid),s("retina",Ze.retina,t.retina),s("opticNerve",Ze.opticNerve,t.opticNerve),s("vitreous",Ze.vitreous,t.vitreous),s("ciliary",Ze.ciliary,t.ciliary);let r=s("iris",Ze.iris,t.iris);Uu(r.group,5.6),s("capsuleBag",Ze.capsuleBag,t.capsule,"capsule"),s("capsuleDisc",Ze.capsuleDisc,t.capsuleDisc,"capsule"),s("cortex",Ze.cortex,t.cortex),s("cornea",Ze.cornea,t.cornea),n.zonules=new ps("zonules",yx(t.zonules)),e.add(n.zonules.group),n.scleraVessels=new ps("sclera",gx()),e.add(n.scleraVessels.group);let o={vitreous:1,capsuleBag:2,capsuleDisc:2,cortex:3,cornea:5};for(let[y,_]of Object.entries(o))n[y].group.traverse(P=>{P.renderOrder=_});let a=new ee;e.add(a);let c=[];for(let y=0;y<4;y++){let _=t.nucleus.clone(),{full:P}=Kc(Ze.nucleus,_,{phiStart:y*Math.PI/2,phiLength:Math.PI/2});tl(P,"nucleus"),Uu(P,3.13);let w=(y+.5)*Math.PI/2,R=new I(Math.sin(w),0,Math.cos(w)),D=R.clone().multiplyScalar(mx).setY(Ii.center),E=new ee;P.position.copy(D).negate(),E.add(P),a.add(E),c.push({outer:E,material:_,dir:R,centroid:D,present:!0})}let l=new Zt(new cs(je,.05,8,96),t.laser);l.rotation.x=Math.PI/2,l.position.y=Ee,e.add(l);let h={};for(let[y,_]of Object.entries(Wt)){let P=new Zt(new vi(_.length,.1,.22),t.incision);P.rotation.y=-(Math.atan2(_.z,_.x)+Math.PI/2),P.position.set(_.x,_.y+.05,_.z),tl(P,"cornea"),e.add(P),h[y]=P}let d=vx(t);e.add(d.group);let p=_x(),f=xx();e.add(p,f);let g={};for(let[y,[_,P,w]]of Object.entries(vu)){let R=document.createElement("div");R.className="label",R.textContent=i[y].name;let D=new xo(R);D.position.set(_,P,w),e.add(D),g[y]=D}let x=new I,m=!1;function u(){a.updateMatrixWorld(!0);for(let y of c)y.outer.getWorldPosition(x),y.outer.visible=y.present&&!(m&&Eu(x.x,x.z))}let v={root:e,parts:n,pieces:c,nucleusGroup:a,laserRing:l,incisionMarks:h,iol:d,labels:g,redReflex:p,glints:f,setCutaway(y){m=y;for(let _ of Object.values(n))_.setCutaway(y);p.visible=!y,f.visible=!y,u()},setNucleusLayout({half:y=0,quarter:_=0,rotation:P=0}){a.rotation.y=P;for(let w of c)w.outer.position.set(w.centroid.x+Math.sign(w.dir.x)*y+w.dir.x*_,w.centroid.y,w.centroid.z+w.dir.z*_);u()},setPiecePresent(y,_){c[y].present=_,g.nucleus.visible=c.some(P=>P.present),u()},setGlow(y,_){c[y].material.emissive.setRGB(_*.5,_*.35,0)},setDiscGlow(y){t.capsuleDisc.emissive.setRGB(y*.2,y*.6,y*.9)},setCortexOpacity(y){t.cortex.opacity=y},applyState(y){h.main.visible=y.incisions.main,h.side.visible=y.incisions.side,n.capsuleDisc.setPresent(!y.capsuleOpen),n.capsuleDisc.group.position.set(0,0,0),n.capsuleDisc.group.scale.setScalar(1),v.setDiscGlow(0),l.visible=y.laserDone&&!y.capsuleOpen,c.forEach((_,P)=>{_.present=y.pieces[P],_.outer.scale.setScalar(1),v.setGlow(P,0)}),v.setNucleusLayout(Mu(y)),n.cortex.setPresent(y.cortex),t.cortex.opacity=qs,d.group.visible=y.iol,d.setPose(0,Mo,0,1),g.nucleus.visible=y.pieces.some(Boolean),g.cortex.visible=y.cortex,g.iol.visible=y.iol}};return v.setNucleusLayout({}),v}function ni(i,t,e,n){return Math.hypot(i-e,t-n)}function He(i,t,e){let n=Math.hypot(i,t);return n<=e?{x:i,z:t}:{x:i/n*e,z:t/n*e}}function el(i,t){let e=t.x-i.x,n=t.y-i.y,s=t.z-i.z,r=Math.hypot(e,n,s);return r<1e-9?{x:0,y:0,z:0}:{x:e/r,y:n/r,z:s/r}}function Ou(i,t){let e=new Array(i).fill(!1),n=null;function s(r,o){let a=t(r,o);return a===null?!1:(e[Math.min(i-1,Math.max(0,a))]=!0,!0)}return{add(r,o){let a=!1;if(n){let c=Math.max(1,Math.ceil(Math.hypot(r-n.x,o-n.z)/.2));for(let l=1;l<=c;l++)a=s(n.x+(r-n.x)*l/c,n.z+(o-n.z)*l/c)||a}else a=s(r,o);return n={x:r,z:o},a},lift(){n=null},coverage(){return e.filter(Boolean).length/i},hits(){return e.slice()}}}function Fu(i,t=36,e=.8){return Ou(t,(n,s)=>{if(Math.abs(Math.hypot(n,s)-i)>e)return null;let r=(Math.atan2(s,n)+Math.PI*2)%(Math.PI*2);return Math.floor(r/(Math.PI*2)*t)})}function Bu(i,t,e=20,n=.9){let s=t.x-i.x,r=t.z-i.z,o=s*s+r*r;return Ou(e,(a,c)=>{if(o<1e-9)return null;let l=((a-i.x)*s+(c-i.z)*r)/o;return l<0||l>1||Math.hypot(a-(i.x+s*l),c-(i.z+r*l))>n?null:Math.floor(l*e)})}var Mx=new I(0,1,0),ms=13226457,Sx=new I,Ne=(i,t=!1)=>new vn({color:i,metalness:t?.8:.1,roughness:t?.3:.5});function Ie(i,t,e,n){let s=new Zt(new as(i,i,e-t,16),n);return s.position.y=(t+e)/2,s}function bx(){let i=new ee,t=new Qn([[0,0],[.55,1.4],[.2,1.8],[-.2,1.8],[-.55,1.4]].map(([e,n])=>new $(e,n)));return i.add(new Zt(new so(t,{depth:.05,bevelEnabled:!1}),Ne(ms,!0))),i.add(Ie(.2,1.8,7,Ne(ms,!0)),Ie(.6,7,22,Ne(3108277))),i}function Ex(){let i=new ee,t=Ne(ms,!0);for(let e of[-1,1]){let n=Ie(.08,0,6,t);n.position.x=e*.15,n.rotation.z=e*.03,i.add(n)}return i.add(Ie(.45,6,22,t)),i}function Tx(){let i=new ee;return i.add(Ie(.3,0,1.2,Ne(ms,!0)),Ie(.5,1.2,6,Ne(10474470)),Ie(1.2,6,24,Ne(15265523))),i}function wx(){let i=new ee,t=Ne(ms,!0),e=Ie(.09,0,.8,t);return e.rotation.z=Math.PI/2,e.position.set(.4,0,0),i.add(e,Ie(.12,0,7,t),Ie(.5,7,20,Ne(8031392))),i}function Ax(){let i=new ee;return i.add(Ie(.3,0,1,Ne(ms,!0)),Ie(.45,1,6,Ne(14280434)),Ie(1,6,22,Ne(11583173))),i}function Rx(){let i=new ee;return i.add(Ie(.35,0,2.5,Ne(16119285)),Ie(1,2.5,14,Ne(14742257)),Ie(.4,14,20,Ne(2533018))),i}function Cx(){let i=new ee,t=new vn({color:13625599,transparent:!0,opacity:.15,depthWrite:!1,side:_e}),e=new Zt(new cs(7,.35,12,64),new vn({color:9083304,metalness:.6,roughness:.4}));e.rotation.x=Math.PI/2;let n=new Zt(new as(4.5,7,8,48,1,!0),t);n.position.y=4;let s=new Zt(new as(7,7,.3,48),t);return i.add(e,n,s),i.visible=!1,i}var ii=class{constructor(t){this.object=t,this.tip=new I,this.anchor=new I,this.mode="aim",this.materials=[],t.traverse(e=>{e.material&&this.materials.push(e.material)}),t.visible=!1}pivot(t){return this.mode="pivot",this.anchor.set(t.x,t.y,t.z),this}aim(t){return this.mode="aim",this.anchor.set(t.x,t.y,t.z),this}setTip(t,e,n){this.tip.set(t,e,n),this.object.position.copy(this.tip);let s=this.mode==="pivot"?el(this.tip,this.anchor):el(this.anchor,this.tip);Math.hypot(s.x,s.y,s.z)<.5||this.object.quaternion.setFromUnitVectors(Mx,Sx.set(s.x,s.y,s.z))}show(){return this.object.visible=!0,this.setOpacity(1),this}hide(){return this.object.visible=!1,this}setOpacity(t){for(let e of this.materials)e.opacity=t,e.transparent=t<1,e.needsUpdate=!0}};function zu(i){let t={blade:new ii(bx()),forceps:new ii(Ex()),probe:new ii(Tx()),chopper:new ii(wx()),ia:new ii(Ax()),injector:new ii(Rx()),femto:Cx()};for(let e of Object.values(t))i.add(e.object??e);return t}var So=class{constructor(t,e=120){this.max=e,this.pos=new Float32Array(e*3).fill(-1e3),this.target=new Float32Array(e*3),this.life=new Float32Array(e),this.next=0,this.geometry=new ue,this.geometry.setAttribute("position",new Pe(this.pos,3)),this.points=new os(this.geometry,new Mi({color:15979130,size:.22,transparent:!0,opacity:.9,depthTest:!1})),this.points.renderOrder=20,this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,n=2){for(let s=0;s<n;s++){let r=this.next;this.next=(this.next+1)%this.max,this.pos[r*3]=t.x+(Math.random()-.5)*.8,this.pos[r*3+1]=t.y+(Math.random()-.5)*.4,this.pos[r*3+2]=t.z+(Math.random()-.5)*.8,this.target[r*3]=e.x,this.target[r*3+1]=e.y,this.target[r*3+2]=e.z,this.life[r]=.6}}clear(){this.life.fill(0);for(let t=0;t<this.max;t++)this.pos[t*3+1]=-1e3;this.geometry.attributes.position.needsUpdate=!0}update(t){let e=Math.min(1,t*6);for(let n=0;n<this.max;n++)if(!(this.life[n]<=0)){this.life[n]-=t;for(let s=0;s<3;s++)this.pos[n*3+s]+=(this.target[n*3+s]-this.pos[n*3+s])*e;this.life[n]<=0&&(this.pos[n*3+1]=-1e3)}this.geometry.attributes.position.needsUpdate=!0}};var ku={type:"change"},il={type:"start"},Vu={type:"end"},bo=new Kn,Hu=new Ye,Px=Math.cos(70*iu.DEG2RAD),Me=new I,Ve=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nl=1e-6,Eo=class extends fo{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ln,this._lastTargetPosition=new I,this._quat=new ln().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new I,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new I,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Ix.bind(this),this._onPointerUp=Lx.bind(this),this._onContextMenu=kx.bind(this),this._onMouseWheel=Ox.bind(this),this._onKeyDown=Fx.bind(this),this._onTouchStart=Bx.bind(this),this._onTouchMove=zx.bind(this),this._onMouseDown=Ux.bind(this),this._onMouseMove=Nx.bind(this),this._interceptControlDown=Hx.bind(this),this._interceptControlUp=Vx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ku),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Me.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bo.origin.copy(this.object.position),bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bo.direction))<Px?this.object.lookAt(this.target):(Hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),bo.intersectPlane(Hu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nl||this._lastTargetPosition.distanceToSquared(this.target)>nl?(this.dispatchEvent(ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ix(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Dx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vu),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ux(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case Ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case Ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(il)}function Nx(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ox(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vu))}function Fx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Bx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(il)}function zx(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function kx(i){this.enabled!==!1&&i.preventDefault()}function Hx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gu(i){let t=new we(35,1,.1,400),e=new we(32,1,.1,400),n=new we(30,4/3,.1,400);e.position.set(0,42,0),e.up.set(0,0,-1),e.lookAt(0,9,0),n.position.set(-22,14,22),n.lookAt(0,7.5,0);let s=new Eo(t,i.domElement);s.enableDamping=!0,s.minDistance=18,s.maxDistance=90;function r(){t.position.set(-20,17,24),s.target.set(0,6,0),s.update()}r();let o="orbit";return{get mode(){return o},get camera(){return o==="orbit"?t:e},inset:n,controls:s,setMode(a){o=a,s.enabled=a==="orbit"},resize(a,c){t.aspect=e.aspect=a/c,t.updateProjectionMatrix(),e.updateProjectionMatrix()},insetRect(a,c){let l=Math.round(Math.min(a*.3,380,(c-32)/.75)),h=Math.round(l*.75);return{x:16,y:16,w:l,h}},resetOrbit:r}}function sl(i,t){let e=i.getContext("2d"),n=i.width,s=i.height,r=s*.62,o=e.createLinearGradient(0,0,0,r);o.addColorStop(0,"#6ec3f4"),o.addColorStop(1,"#d9f1ff"),e.fillStyle=o,e.fillRect(0,0,n,s),e.fillStyle="#ffd54f",e.beginPath(),e.arc(n*.85,s*.18,26,0,Math.PI*2),e.fill();let a=[[20,90,90,"#ef8a62"],[120,60,80,"#5c9ead"],[210,110,70,"#f4c95d"],[290,75,100,"#8e7cc3"],[400,100,70,"#66bb6a"]];for(let[c,l,h,d]of a){e.fillStyle=d,e.fillRect(c,l,h,r-l),e.fillStyle="rgba(255,255,255,0.85)";for(let p=l+12;p<r-20;p+=24)for(let f=c+10;f<c+h-14;f+=22)e.fillRect(f,p,12,14)}e.fillStyle="#555f6b",e.fillRect(0,r,n,s-r),e.fillStyle="#ffffff";for(let c=10;c<n;c+=60)e.fillRect(c,s*.82,34,6);e.fillStyle="#795548",e.fillRect(452,s*.45,10,r-s*.45),e.fillStyle="#2e7d32",e.beginPath(),e.arc(457,s*.42,26,0,Math.PI*2),e.fill(),e.fillStyle="#1565c0",e.fillRect(40,s*.66,130,44),e.fillStyle="#ffffff",e.font='bold 24px "Microsoft JhengHei", sans-serif',e.textBaseline="middle",e.fillText(t,54,s*.66+22)}var Wu={classic:["intro","incision","capsulorhexis","chop","phaco","cortex","iol","done"],femto:["intro","laser","capsuleRemoval","phaco","cortex","iol","done"]};function To(i){return i==="classic"?"femto":"classic"}function Xu(i,t){let e=u=>document.getElementById(u),n=i.ui;document.title=i.appTitle,e("app-title").textContent=i.appTitle;let s=e("controls"),r=(u,v,y="")=>{let _=document.createElement("button");return _.type="button",_.textContent=u,_.className=y,_.addEventListener("click",v),s.appendChild(_),_},o=!1,a={prev:r(n.prev,()=>t.prev()),restart:r(n.restart,()=>t.restart()),demo:r(n.demoStep,()=>o?t.stopDemo():t.demoStep()),demoAll:r(n.demoAll,()=>t.demoAll()),labels:r(n.labels,()=>t.toggleLabels(),"toggle"),resetView:r(n.resetView,()=>t.resetView()),next:r(n.next,()=>t.next(),"primary")},c=e("route-choice"),l=document.createElement("span");l.textContent=n.chooseRoute,c.appendChild(l);for(let u of["classic","femto"]){let v=document.createElement("button");v.type="button",v.className="route",v.textContent=i.routes[u].name,v.addEventListener("click",()=>t.chooseRoute(u)),c.appendChild(v)}let h=e("other-route");h.addEventListener("click",()=>t.otherRoute());let d=e("vision"),p=e("vision-before"),f=e("vision-after");sl(p.querySelector("canvas"),n.streetSign),sl(f.querySelector("canvas"),n.streetSign),e("inset-frame").querySelector("span").textContent=n.insetLabel,f.querySelector("figcaption").textContent=n.after;let g=e("progress"),x=0,m=null;return{setStep({route:u,ids:v,index:y,complete:_,demoing:P,view:w}){o=P;let R=v[y],D=i.steps[R],E=`${u}:${y}`,S=E!==m;m=E,g.replaceChildren(...v.map((z,X)=>{let V=document.createElement("li");return V.textContent=i.steps[z].title,X<y&&(V.className="done"),X===y&&(V.className="current"),V})),e("step-title").textContent=y===0?D.title:`${i.routes[u].name}\uFF5C${D.title}`;let A=D.text.map(z=>{let X=document.createElement("p");return X.textContent=z,X});if(R==="phaco"&&u==="femto"){let z=document.createElement("p");z.className="note",z.textContent=i.routeNotes.femtoPhaco,A.push(z)}e("step-body").replaceChildren(...A),c.hidden=R!=="intro",h.hidden=R!=="done",h.textContent=`${n.otherRoute}\uFF08${i.routes[To(u)].name}\uFF09`,d.hidden=R!=="intro"&&R!=="done",f.hidden=R!=="done",p.querySelector("figcaption").textContent=R==="intro"?n.cloudy:n.before;let O=w==="orbit",F=y===v.length-1;a.prev.disabled=y===0||P,a.restart.disabled=O||P,a.next.disabled=F||P,a.next.classList.toggle("ready",_&&!F&&R!=="intro"),a.demo.textContent=P?n.stop:n.demoStep,a.demo.disabled=O&&!P,a.demoAll.disabled=P,a.labels.hidden=!O,a.resetView.hidden=!O,S&&(e("layer-info").hidden=!0,clearTimeout(x),e("hint").hidden=!0)},setLabelsOn(u){a.labels.classList.toggle("on",u)},showHint(u){let v=e("hint");v.textContent=u,v.hidden=!1,clearTimeout(x),x=setTimeout(()=>{v.hidden=!0},2600)},showLayer(u){let v=e("layer-info");if(!u){v.hidden=!0;return}e("layer-name").textContent=i.layers[u].name,e("layer-desc").textContent=i.layers[u].desc,v.hidden=!1},setCounter(u){let v=e("counter");v.hidden=!u,v.textContent=u??""},setInsetRect(u){let v=e("inset-frame");v.hidden=!u,u&&(v.style.width=`${u.w}px`,v.style.height=`${u.h}px`)},fatal(u){let v=e("fatal");v.textContent=u,v.hidden=!1}}}function rl(i="classic"){return{route:i,incisions:{main:!1,side:!1},laserDone:!1,capsuleOpen:!1,nucleusSplit:0,pieces:[!0,!0,!0,!0],cortex:!0,iol:!1}}function Yu(i,t){let e=[...i].sort((r,o)=>r.t-o.t),n=0,s=0;return{update(r){for(n+=r;s<e.length&&e[s].t<=n;){let o=e[s++];t(o.type,o)}},get finished(){return s>=e.length}}}function pn(i,t,e){let n=[];for(let s=0;s<=e;s++){let r=s/e;n.push({x:i.x+(t.x-i.x)*r,z:i.z+(t.z-i.z)*r})}return n}function qu(i,t,e=0){let n=[];for(let s=0;s<=t;s++){let r=e+s/t*Math.PI*2;n.push({x:i*Math.cos(r),z:i*Math.sin(r)})}return n}function Qe(i,t,e){let n=i.length-1,s=[{t,type:"down",...i[0]}];return i.forEach((r,o)=>s.push({t:t+e*o/Math.max(1,n),type:"move",...r})),s.push({t:t+e+.01,type:"up",...i[n]}),s}var Gx={down:"pointerDown",move:"pointerMove",up:"pointerUp"},Wx=1.2,Xx=5,wo=class{constructor({steps:t,ctx:e,onChange:n=()=>{}}){this.steps=t,this.ctx=e,this.onChange=n,this.route="classic",this.index=0,this.state=rl(this.route),this.current=null,this.complete=!1,this.demo=null,this.demoAll=!1,this.waited=0}get ids(){return Wu[this.route]}get step(){return this.current}get demoing(){return this.demo!==null}setRoute(t){this.route=t}goTo(t){this.stopDemo(),this.enterStep(t)}enterStep(t){this.current?.exit(this.ctx),this.index=Math.max(0,Math.min(t,this.ids.length-1));let e=rl(this.route);for(let n=0;n<this.index;n++)this.steps[this.ids[n]].skip(e);this.state=e,this.ctx.state=e,this.ctx.eye.applyState(e),this.current=this.steps[this.ids[this.index]],this.complete=!1,this.waited=0,this.current.enter(this.ctx),this.onChange(this)}next(){this.stopDemo(),this.index<this.ids.length-1&&this.goTo(this.index+1)}prev(){this.stopDemo(),this.index>0&&this.goTo(this.index-1)}restart(){this.stopDemo(),this.goTo(this.index)}startDemo(t=!1){this.enterStep(t?1:this.index),this.demoAll=t,this.playCurrent()}stopDemo(){!this.demo&&!this.demoAll||(this.demo&&this.current?.pointerUp({x:0,y:this.current.workY,z:0},this.ctx),this.demo=null,this.demoAll=!1,this.onChange(this))}playCurrent(){let t=this.current.demoPath(this.ctx);this.demo=Yu(t,(e,n)=>this.dispatch(e,{x:n.x,y:this.current.workY,z:n.z})),this.waited=0,this.onChange(this)}pointer(t,e){this.demo||this.dispatch(t,e)}dispatch(t,e){let n=Gx[t];n&&this.current?.[n](e,this.ctx)}update(t){if(!this.current)return;this.demo?.update(t),this.current.update(t,this.ctx);let e=this.current.isComplete();if(e!==this.complete&&(this.complete=e,this.waited=0,this.onChange(this)),!this.demo?.finished||(this.waited+=t,!(e?this.waited>Wx:this.waited>Xx)))return;if(!this.demoAll){this.stopDemo();return}let n=this.index+1;n===this.ids.length-1?(this.stopDemo(),this.enterStep(n)):(this.enterStep(n),this.playCurrent())}};function Te(i){return{view:"microscope",workY:9.2,enter(){},exit(){},update(){},pointerDown(){},pointerMove(){},pointerUp(){},isComplete(){return!1},skip(){},demoPath(){return[]},...i}}function Oe(i,t,e){return{x:i.x+(t.x-i.x)*e,y:i.y+(t.y-i.y)*e,z:i.z+(t.z-i.z)*e}}var Se={intro:()=>{},incision:i=>{i.incisions.main=!0,i.incisions.side=!0},capsulorhexis:i=>{i.capsuleOpen=!0},chop:i=>{i.nucleusSplit=2},laser:i=>{i.incisions.main=!0,i.incisions.side=!0,i.laserDone=!0,i.nucleusSplit=2},capsuleRemoval:i=>{i.capsuleOpen=!0},phaco:i=>{i.pieces=[!1,!1,!1,!1]},cortex:i=>{i.cortex=!1},iol:i=>{i.iol=!0},done:()=>{}};var pe=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,tn=class{constructor(){this.list=[]}add(t,e,n){let s={t:0,duration:t,onUpdate:e,onDone:n};return this.list.push(s),e(0),s}update(t){for(let e of[...this.list]){if(!this.list.includes(e))continue;e.t=Math.min(e.duration,e.t+t);let n=e.duration>0?e.t/e.duration:1;if(e.onUpdate(n),n>=1){let s=this.list.indexOf(e);if(s<0)continue;this.list.splice(s,1),e.onDone?.()}}}clear(){this.list.length=0}get busy(){return this.list.length>0}};var Yx=new Ue({color:2806271,transparent:!0,depthTest:!1}),qx=new Ue({color:57482,transparent:!0,depthTest:!1}),Zx=new Ue({color:2806271,transparent:!0,opacity:.9,side:_e,depthTest:!1}),ol=i=>t=>({x:i*Math.cos(t*Math.PI*2),z:i*Math.sin(t*Math.PI*2)}),al=(i,t)=>e=>({x:i.x+(t.x-i.x)*e,z:i.z+(t.z-i.z)*e});function Zu(i,t,e,n,s=4){let r=[];for(let o=0;o<=s;o++){let a=i(t+(e-t)*o/s);r.push(new I(a.x,n,a.z))}return r}function Ju(i,t,e){let n=new Zt(new ls(new Si(i),i.length*2,t,6,!1),e);return n.renderOrder=10,n}function Ao(i,t,e=24){let n=new ee;for(let s=0;s<e;s++)n.add(Ju(Zu(i,s/e,(s+.55)/e,t),.06,Yx));return n}function Ro(i,t,e){let n=new ee,s=[];for(let r=0;r<e;r++){let o=Ju(Zu(i,r/e,(r+1)/e,t),.1,qx);o.visible=!1,s.push(o),n.add(o)}return{object:n,setHits(r){r.forEach((o,a)=>{s[a].visible=o})},clear(){for(let r of s)r.visible=!1}}}function cl(i){let t=new Zt(new ro(.45,.8,40),Zx);return t.rotation.x=-Math.PI/2,t.position.set(i.x,i.y+.1,i.z),t.renderOrder=11,t}var Co=11.4,ll={x:10,z:5},Jx=1,$x={x:0,y:7,z:0};function $u({scene:i,eye:t,tools:e,ui:n,content:s}){let r=e.blade,o=new tn,a={main:cl(Wt.main),side:cl(Wt.side)},c,l=!1,h=!1,d=0,p=()=>Object.keys(Wt).filter(m=>!c.incisions[m]),f=m=>r.setTip(m.x,m.y,m.z);function g(m){h=!0,l=!1;let u=Wt[m],v=Math.hypot(u.x,u.z),y=u.x/v,_=u.z/v,P={x:r.tip.x,y:r.tip.y,z:r.tip.z},w={x:u.x-y*1.2,y:u.y-.35,z:u.z-_*1.2},R={x:u.x+y*2.5,y:Co,z:u.z+_*2.5};o.add(.45,D=>f(Oe(P,w,pe(D))),()=>{c.incisions[m]=!0,t.applyState(c),a[m].visible=!1,o.add(.35,D=>f(Oe(w,R,pe(D))),()=>{h=!1,p().length===0&&n.showHint(s.hints.stepDone)})})}function x(m){let u=He(m.x,m.z,14);r.setTip(u.x,Co,u.z);let v=p().find(y=>ni(u.x,u.z,Wt[y].x,Wt[y].z)<Jx);v&&g(v)}return Te({id:"incision",workY:Co,enter(m){c=m.state,l=!1,h=!1,d=0,o.clear();for(let[u,v]of Object.entries(a))v.visible=!c.incisions[u],i.add(v);r.aim($x).show(),r.setTip(ll.x,Co,ll.z)},exit(){o.clear(),r.hide();for(let m of Object.values(a))i.remove(m)},update(m){d+=m,o.update(m);let u=1+.25*Math.sin(d*5);for(let v of Object.values(a))v.scale.set(u,u,u)},pointerDown(m){h||(l=!0,x(m))},pointerMove(m){h||(l=!0,x(m))},pointerUp(){l&&p().length>0&&n.showHint(s.hints.moveToMarker),l=!1},isComplete(){return!h&&p().length===0},skip:Se.incision,demoPath(){return[...Qe(pn(ll,Wt.main,12),.3,1.4),...Qe(pn({x:7.5,z:-1.5},Wt.side,12),3,1.4)]}})}var Ku=36,Kx=.9,jx=20;function ju({scene:i,eye:t,tools:e,ui:n,content:s}){let r=e.forceps,o=new tn,a=Ao(ol(je),Ee+.05),c=Ro(ol(je),Ee+.06,Ku),l,h,d,p,f,g;function x(){p=!0,d=!1;let u=t.parts.capsuleDisc.group,v={x:r.tip.x,y:r.tip.y,z:r.tip.z},y={x:0,y:Ee+.3,z:0},_={x:Wt.main.x+1.5,y:Wt.main.y+.8,z:0};o.add(.5,P=>{let w=Oe(v,y,pe(P));r.setTip(w.x,w.y,w.z)},()=>{o.add(1,P=>{let w=pe(P),R=Oe(y,_,w);r.setTip(Math.min(R.x,Wt.main.x-.5),Math.min(R.y,10.5),R.z);let D=1-.7*w;u.scale.setScalar(D),u.position.set(R.x-D*y.x,R.y-D*y.y,R.z-D*y.z)},()=>{l.capsuleOpen=!0,t.applyState(l),a.visible=!1,c.clear(),f=!0,n.showHint(s.hints.stepDone)})})}function m(u){let v=He(u.x,u.z,4);r.setTip(v.x,Ee,v.z),h.add(v.x,v.z)?(g=0,c.setHits(h.hits()),h.coverage()>=Kx&&x()):++g>jx&&(g=0,n.showHint(s.hints.followCircle))}return Te({id:"capsulorhexis",workY:Ee,enter(u){l=u.state,h=Fu(je,Ku,.8),d=p=f=!1,g=0,o.clear(),a.visible=!0,c.clear(),i.add(a,c.object),r.pivot(Wt.main).show(),r.setTip(je,Ee,0)},exit(){o.clear(),r.hide(),i.remove(a,c.object)},update(u){o.update(u)},pointerDown(u){p||(d=!0,g=0,h.lift(),m(u))},pointerMove(u){d&&!p&&m(u)},pointerUp(){d=!1,h?.lift()},isComplete(){return f},skip:Se.capsulorhexis,demoPath(){return Qe(qu(je,48),.3,3.5)}})}var ul=9.1,Qu=9.15,dl={x:0,z:-3.4},fl={x:0,z:3.4},td=20,ty=.8,pl={x:.7,y:9,z:0},ed={x:0,z:-3.8},ey=20;function nd({scene:i,eye:t,tools:e,ui:n,content:s}){let{probe:r,chopper:o}=e,a=new tn,c=Ao(al(dl,fl),Qu),l=Ro(al(dl,fl),Qu+.01,td),h,d,p,f,g;function x(){d=Bu(dl,fl,td,.9),l.clear(),c.visible=!0,o.setTip(ed.x,ul,ed.z)}function m(){f="animating",p=!1,c.visible=!1,l.clear(),h.nucleusSplit=1,a.add(.5,_=>t.setNucleusLayout({half:.3*pe(_)}),()=>{a.add(1,_=>t.setNucleusLayout({half:.3,rotation:Math.PI/2*pe(_)}),()=>{f="second",x()})})}function u(){f="animating",p=!1,c.visible=!1,l.clear(),a.add(.5,_=>t.setNucleusLayout({half:.3,quarter:.35*pe(_),rotation:Math.PI/2}),()=>{h.nucleusSplit=2,f="done",n.showHint(s.hints.stepDone)})}function v(_){let P=He(_.x,_.z,4.2);o.setTip(P.x,ul,P.z),d.add(P.x,P.z)?(g=0,l.setHits(d.hits()),d.coverage()>=ty&&(f==="first"?m:u)()):++g>ey&&(g=0,n.showHint(s.hints.followLine))}let y=()=>f==="first"||f==="second";return Te({id:"chop",workY:ul,enter(_){h=_.state,f="first",p=!1,g=0,a.clear(),i.add(c,l.object),r.pivot(Wt.main).show(),r.setTip(pl.x,pl.y,pl.z),o.pivot(Wt.side).show(),x()},exit(){a.clear(),r.hide(),o.hide(),i.remove(c,l.object)},update(_){a.update(_)},pointerDown(_){y()&&(p=!0,d.lift(),v(_))},pointerMove(_){y()&&(p||(p=!0,d.lift()),v(_))},pointerUp(){p=!1,d?.lift()},isComplete(){return f==="done"},skip:Se.chop,demoPath(){let _=pn({x:0,z:-3.6},{x:0,z:3.6},16);return[...Qe(_,.3,1.5),...Qe(_,3.8,1.5)]}})}var ml=9,Po={x:3.2,z:0},gl={x:0,y:9.2,z:-2.6},ny=2.2,iy=1.6,id=1.3,sy=1.5;function sd({eye:i,tools:t,ui:e,content:n,particles:s}){let{probe:r,chopper:o}=t,a=new I,c=new I,l,h,d,p,f,g=()=>l.pieces.filter(Boolean).length,x=()=>e.setCounter(n.hints.cleared.replace("{n}",4-g()));function m(){let y=null,_=1/0;return i.pieces.forEach((P,w)=>{if(!l.pieces[w])return;P.outer.getWorldPosition(a);let R=Math.hypot(a.x-r.tip.x,a.z-r.tip.z);R<_&&(_=R,y=w)}),{index:y,distance:_}}function u(y){let _=He(y.x,y.z,4.2);r.setTip(_.x,ml,_.z)}function v(y,_){let P=i.pieces[y];f[y]+=_/id,c.copy(r.tip),i.nucleusGroup.worldToLocal(c),P.outer.position.lerp(c,Math.min(1,_*3)),P.outer.scale.setScalar(Math.max(.1,1-.9*f[y])),P.outer.getWorldPosition(a),s.emit(a,r.tip),f[y]>=1&&(l.pieces[y]=!1,i.setPiecePresent(y,!1),x(),g()===0&&e.showHint(n.hints.stepDone))}return Te({id:"phaco",workY:ml,enter(y){l=y.state,h=!1,d=0,p=0,f=[0,0,0,0],r.pivot(Wt.main).show(),r.setTip(Po.x,ml,Po.z),o.pivot(Wt.side).show(),o.setTip(gl.x,gl.y,gl.z),o.setOpacity(.35),x()},exit(){s.clear(),r.hide(),o.hide(),e.setCounter(null)},update(y){p+=y;let{index:_,distance:P}=m();i.pieces.forEach((w,R)=>i.setGlow(R,R===_&&P<ny?.6+.4*Math.sin(p*8):0)),!(_===null||!h)&&(P<iy?(d=0,v(_,y)):(d+=y)>sy&&(d=0,e.showHint(n.hints.moveToPiece)))},pointerDown(y){h=!0,u(y)},pointerMove(y){h&&u(y)},pointerUp(){h=!1},isComplete(){return g()===0},skip:Se.phaco,demoPath(){let y=[{t:.3,type:"down",...Po}],_=.3,P=Po;return i.pieces.forEach((w,R)=>{if(!l.pieces[R])return;w.outer.getWorldPosition(a);let D={x:a.x*.85,z:a.z*.85};for(let E of pn(P,D,8))_+=.08,y.push({t:_,type:"move",...E});_+=id+.6,P=D}),y.push({t:_+.1,type:"up",...P}),y}})}var rd=4.5;function od({eye:i,tools:t,ui:e,content:n}){let s=t.ia,r,o,a;return Te({id:"cortex",workY:9,enter(c){r=c.state,o=0,a=!1,s.pivot(Wt.main).show(),s.setTip(2.8,8.9,0)},exit(){s.hide()},update(c){if(a)return;o=Math.min(rd,o+c);let l=o/rd,h=l*Math.PI*3,d=2.8-.8*Math.sin(l*Math.PI);s.setTip(d*Math.cos(h),8.7+.3*Math.cos(h*2),d*Math.sin(h)),i.setCortexOpacity(qs*(1-l)),l>=1&&(r.cortex=!1,i.applyState(r),a=!0,e.showHint(n.hints.stepDone))},isComplete(){return a},skip:Se.cortex})}var Io=11,Zs={x:10,z:3},ry={x:0,y:6,z:0},oy=1.2,Do=5.6;function ad({eye:i,tools:t,ui:e,content:n}){let s=t.injector,r=new tn,o,a,c,l,h=f=>s.setTip(f.x,f.y,f.z);function d(){c=!0,a=!1;let f=Wt.main,g={x:s.tip.x,y:s.tip.y,z:s.tip.z},x={x:f.x-.6,y:f.y-.3,z:f.z},m={x:Zs.x,y:Io,z:Zs.z},u={x:0,y:Mo,z:0};r.add(.6,v=>h(Oe(g,x,pe(v))),()=>{i.iol.group.visible=!0,r.add(1.8,v=>{let y=Oe(x,u,pe(Math.min(1,v*1.6)));i.iol.setPose(y.x,y.y,y.z,(v-.45)/.55)},()=>{o.iol=!0,i.applyState(o),r.add(.6,v=>h(Oe(x,m,pe(v))),()=>{l=!0,e.showHint(n.hints.stepDone)})})})}function p(f){let g=He(f.x,f.z,14),x=Math.hypot(g.x,g.z);x<Do&&(g=x>0?{x:g.x/x*Do,z:g.z/x*Do}:{x:Do,z:0}),s.setTip(g.x,Io,g.z),ni(g.x,g.z,Wt.main.x,Wt.main.z)<oy&&d()}return Te({id:"iol",workY:Io,enter(f){o=f.state,a=c=l=!1,r.clear(),s.aim(ry).show(),s.setTip(Zs.x,Io,Zs.z)},exit(){r.clear(),s.hide()},update(f){r.update(f)},pointerDown(f){c||(a=!0,p(f))},pointerMove(f){c||(a=!0,p(f))},pointerUp(){a&&!c&&e.showHint(n.hints.pushInjector),a=!1},isComplete(){return l},skip:Se.iol,demoPath(){return Qe(pn(Zs,{x:Wt.main.x+.3,z:0},12),.3,1.5)}})}var Fe={dockEnd:1.5,scanEnd:4,laserEnd:8.5,liftEnd:10},Lo=30,Uo=13.3;function ay(){let i=[];for(let n of Object.values(Wt)){let s=Math.hypot(n.x,n.z),r=-n.z/s,o=n.x/s;for(let a=0;a<=12;a++){let c=(a/12-.5)*n.length;i.push(n.x+r*c,n.y,n.z+o*c)}}for(let n=0;n<90;n++){let s=n/90*Math.PI*2;i.push(je*Math.cos(s),Ee,je*Math.sin(s))}for(let n=0;n<=30;n++){let s=(n/30-.5)*6;i.push(s,8.9,0,0,8.9,s)}let t=new ue;t.setAttribute("position",new Gt(i,3));let e=new os(t,new Mi({color:8191851,size:.28,transparent:!0,depthTest:!1}));return e.renderOrder=12,e}function cd({scene:i,eye:t,tools:e,ui:n,content:s}){let r=e.femto,o=new Zt(new jn(12,6),new Ue({color:5099745,transparent:!0,opacity:.5,side:_e,depthTest:!1}));o.rotation.y=Math.PI/2,o.position.y=10,o.renderOrder=12;let a=ay(),c=a.geometry.attributes.position.count,l,h,d,p;return Te({id:"laser",enter(f){l=f.state,h=0,d=p=!1,r.visible=!0,r.position.y=Lo,o.visible=!1,a.geometry.setDrawRange(0,0),a.material.opacity=1,i.add(o,a)},exit(){r.visible=!1,i.remove(o,a)},update(f){if(!p&&(h+=f,h<Fe.dockEnd?r.position.y=Lo+(Uo-Lo)*pe(h/Fe.dockEnd):h<Fe.scanEnd?(r.position.y=Uo,o.visible=!0,o.position.x=-6+12*((h-Fe.dockEnd)/(Fe.scanEnd-Fe.dockEnd))):h<Fe.laserEnd?(o.visible=!1,a.geometry.setDrawRange(0,Math.floor(c*(h-Fe.scanEnd)/(Fe.laserEnd-Fe.scanEnd)))):d||(d=!0,o.visible=!1,a.geometry.setDrawRange(0,c),Se.laser(l),t.applyState(l)),h>=Fe.laserEnd)){let g=Math.min(1,(h-Fe.laserEnd)/(Fe.liftEnd-Fe.laserEnd));r.position.y=Uo+(Lo-Uo)*pe(g),a.material.opacity=1-g,g>=1&&(p=!0,r.visible=!1,n.showHint(s.hints.stepDone))}},isComplete(){return p},demoPath(){return[{t:Fe.liftEnd,type:"move",x:0,z:0}]},skip:Se.laser})}var gs={x:9,y:11.8,z:0},cy={x:1.5,y:Ee,z:1},ly={x:0,y:7,z:0},ld=2.4,hy=1.4,_l=5.6;function hd({eye:i,tools:t,ui:e,content:n}){let s=t.forceps,r=i.parts.capsuleDisc.group,o=new tn,a,c,l,h,d,p=m=>Ee+Math.max(0,m-3)*.55;function f(m,u){s.setTip(m,p(Math.hypot(m,u)),u)}function g(){c="extract",l=!1;let m={x:r.position.x,y:r.position.y+Ee,z:r.position.z},u={x:gs.x,y:gs.y,z:0};o.add(.8,v=>{let y=1-.7*v,_=Oe(m,u,pe(v));r.scale.setScalar(y),r.position.set(_.x,_.y-y*Ee,_.z)},()=>{a.capsuleOpen=!0,i.applyState(a),c="done",e.showHint(n.hints.stepDone)})}function x(m){let u=He(m.x,m.z,_l);f(u.x,u.z),l&&(r.position.set(u.x,p(Math.hypot(u.x,u.z))-Ee,u.z),ni(u.x,u.z,Wt.main.x,Wt.main.z)<hy&&g())}return Te({id:"capsuleRemoval",workY:Ee,enter(m){a=m.state,c="opening",l=!1,h=!1,d=0,o.clear();let u=Wt.main;s.aim(ly).show(),s.setTip(gs.x,gs.y,gs.z),o.add(1,v=>{let y=Oe(gs,u,pe(v));s.setTip(y.x,y.y,y.z)},()=>{s.pivot(u);let v={x:u.x-.3,y:u.y-.2,z:u.z};o.add(.8,y=>{let _=Oe(v,cy,pe(y));s.setTip(_.x,_.y,_.z)},()=>{c="grab"})})},exit(){o.clear(),s.hide(),i.setDiscGlow(0)},update(m){d+=m,o.update(m),i.setDiscGlow(c==="grab"&&!l?.5+.5*Math.sin(d*5):0)},pointerDown(m){if(c!=="grab")return;h=!0;let u=He(m.x,m.z,_l);f(u.x,u.z),ni(u.x,u.z,r.position.x,r.position.z)<ld?(l=!0,o.clear(),x(m)):e.showHint(n.hints.grabDisc)},pointerMove(m){if(c!=="grab")return;if(l){x(m);return}if(!h)return;let u=He(m.x,m.z,_l);f(u.x,u.z),ni(u.x,u.z,r.position.x,r.position.z)<ld&&(l=!0,o.clear(),x(m))},pointerUp(){if(h=!1,!l||c!=="grab")return;l=!1;let m={x:r.position.x,y:r.position.y,z:r.position.z};o.add(.3,u=>{let v=Oe(m,{x:0,y:0,z:0},pe(u));r.position.set(v.x,v.y,v.z)})},isComplete(){return c==="done"},skip:Se.capsuleRemoval,demoPath(){return Qe(pn({x:.4,z:.3},{x:Wt.main.x,z:0},14),2.2,1.4)}})}var ud=i=>Te({id:i,view:"orbit",isComplete:()=>!0,skip:Se[i]});function dd(i){return{intro:ud("intro"),incision:$u(i),capsulorhexis:ju(i),chop:nd(i),laser:cd(i),capsuleRemoval:hd(i),phaco:sd(i),cortex:od(i),iol:ad(i),done:ud("done")}}var Js=window.CONTENT,uy={x:0,y:0,z:0};function dy(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function fy(i){for(let t=i;t;t=t.parent)if(!t.visible)return!1;return!0}function py(){let i=window.CONTENT;return!!(i&&i.steps&&i.ui&&i.hints&&i.layers&&i.routes)}function my(){if(!py()){document.getElementById("fatal").hidden=!1;return}let i,t,e=!0,n=Xu(Js,{prev:()=>i.prev(),next:()=>i.next(),restart:()=>i.restart(),demoStep:()=>i.startDemo(!1),demoAll:()=>i.startDemo(!0),stopDemo:()=>i.stopDemo(),toggleLabels:()=>{e=!e,n.setLabelsOn(e)},resetView:()=>t.resetOrbit(),chooseRoute:A=>{i.setRoute(A),i.goTo(1)},otherRoute:()=>{i.setRoute(To(i.route)),i.goTo(1)}});if(!dy()){n.fatal(Js.ui.noWebGL);return}let s=document.getElementById("stage"),r;try{r=new Wr({antialias:!0})}catch(A){console.error(A),n.fatal(Js.ui.noWebGL);return}r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.prepend(r.domElement);let o=new yo({element:document.getElementById("labels")}),a=new Xr;a.background=new Ht(924198),a.add(new lo(16777215,3359829,1.6));let c=new ks(16777215,2);c.position.set(-20,40,30),a.add(c);let l=new ks(16777215,1);l.position.set(0,50,0),a.add(l);let h=Nu(Js.layers);a.add(h.root);let d=zu(a),p=new So(a);t=Gu(r);function f(){let A=s.clientWidth,O=s.clientHeight;r.setSize(A,O),o.setSize(A,O),t.resize(A,O),n.setInsetRect(t.mode==="microscope"?t.insetRect(A,O):null)}let g={scene:a,eye:h,tools:d,ui:n,content:Js,particles:p};i=new wo({steps:dd(g),ctx:{...g,state:null},onChange:A=>{t.setMode(A.step.view),f(),n.setStep({route:A.route,ids:A.ids,index:A.index,complete:A.complete,demoing:A.demoing,view:A.step.view})}});let x=r.domElement;x.addEventListener("contextmenu",A=>A.preventDefault());let m=new uo,u=new $,v=new Ye(new I(0,1,0),0),y=new I,_=null,P=!1,w=uy;function R(A){let O=x.getBoundingClientRect();u.set((A.clientX-O.left)/O.width*2-1,-((A.clientY-O.top)/O.height)*2+1),m.setFromCamera(u,t.camera)}function D(A){return R(A),v.constant=-i.step.workY,m.ray.intersectPlane(v,y)?{x:y.x,y:y.y,z:y.z}:null}function E(A){R(A);let O=m.intersectObject(h.root,!0).find(F=>F.object.userData.layerId&&fy(F.object));n.showLayer(O?O.object.userData.layerId:null)}x.addEventListener("pointerdown",A=>{if(!A.isPrimary||A.button!==0||(_={x:A.clientX,y:A.clientY},t.mode!=="microscope"))return;x.setPointerCapture(A.pointerId),P=!0;let O=D(A);O&&(w=O,i.pointer("down",O))}),x.addEventListener("pointermove",A=>{if(t.mode!=="microscope"||!P)return;let O=D(A);O&&(w=O,i.pointer("move",O))}),x.addEventListener("pointerup",A=>{if(!A.isPrimary)return;let O=P;if(P=!1,t.mode==="microscope"){O&&i.pointer("up",D(A)??w);return}_&&Math.hypot(A.clientX-_.x,A.clientY-_.y)<6&&E(A),_=null}),x.addEventListener("pointercancel",()=>{P&&(P=!1,i.pointer("up",w))}),new ResizeObserver(f).observe(s),f(),i.goTo(0),n.setLabelsOn(e);let S=new ho;r.setAnimationLoop(()=>{try{let A=Math.min(S.getDelta(),.05);i.update(A),p.update(A);let O=s.clientWidth,F=s.clientHeight,z=t.mode==="orbit";if(z&&t.controls.update(),h.setCutaway(z),r.setScissorTest(!1),r.setViewport(0,0,O,F),r.render(a,t.camera),!z){let X=t.insetRect(O,F);h.setCutaway(!0),r.setScissorTest(!0),r.setScissor(X.x,X.y,X.w,X.h),r.setViewport(X.x,X.y,X.w,X.h),r.render(a,t.inset),r.setScissorTest(!1)}o.domElement.hidden=!(z&&e),z&&e&&o.render(a,t.camera)}catch(A){console.error(A)}}),window.__sim={controller:i,eye:h,views:t}}my();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
