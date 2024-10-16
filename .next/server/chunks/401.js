"use strict";exports.id=401,exports.ids=[401],exports.modules={319:(e,r,t)=>{t.d(r,{M:()=>o});function o(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}},1246:(e,r,t)=>{t.d(r,{Fw:()=>N,VY:()=>R,fC:()=>C,p_:()=>b,wy:()=>x,xz:()=>z});var o=t(8964),n=t(319),l=t(732),i=t(8469),a=t(9537),s=t(3191),d=t(2251),c=t(7264),u=t(7015),p=t(7247),f="Collapsible",[m,b]=(0,l.b)(f),[g,h]=m(f),v=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,open:n,defaultOpen:l,disabled:a,onOpenChange:s,...c}=e,[f=!1,m]=(0,i.T)({prop:n,defaultProp:l,onChange:s});return(0,p.jsx)(g,{scope:t,disabled:a,contentId:(0,u.M)(),open:f,onOpenToggle:o.useCallback(()=>m(e=>!e),[m]),children:(0,p.jsx)(d.WV.div,{"data-state":j(f),"data-disabled":a?"":void 0,...c,ref:r})})});v.displayName=f;var y="CollapsibleTrigger",x=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,...o}=e,l=h(y,t);return(0,p.jsx)(d.WV.button,{type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":j(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled,...o,ref:r,onClick:(0,n.M)(e.onClick,l.onOpenToggle)})});x.displayName=y;var w="CollapsibleContent",N=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,n=h(w,e.__scopeCollapsible);return(0,p.jsx)(c.z,{present:t||n.open,children:({present:e})=>(0,p.jsx)(k,{...o,ref:r,present:e})})});N.displayName=w;var k=o.forwardRef((e,r)=>{let{__scopeCollapsible:t,present:n,children:l,...i}=e,c=h(w,t),[u,f]=o.useState(n),m=o.useRef(null),b=(0,s.e)(r,m),g=o.useRef(0),v=g.current,y=o.useRef(0),x=y.current,N=c.open||u,k=o.useRef(N),C=o.useRef();return o.useEffect(()=>{let e=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.b)(()=>{let e=m.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();g.current=r.height,y.current=r.width,k.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),f(n)}},[c.open,n]),(0,p.jsx)(d.WV.div,{"data-state":j(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!N,...i,ref:b,style:{"--radix-collapsible-content-height":v?`${v}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...e.style},children:N&&l})});function j(e){return e?"open":"closed"}var C=v,z=x,R=N},1829:(e,r,t)=>{t.d(r,{B:()=>a});var o=t(8964),n=t(7247),l=t(3191),i=t(9008);function a(e){let r=e+"CollectionProvider",[t,a]=function(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let i=o.createContext(l),a=t.length;function s(r){let{scope:t,children:l,...s}=r,d=t?.[e][a]||i,c=o.useMemo(()=>s,Object.values(s));return(0,n.jsx)(d.Provider,{value:c,children:l})}return t=[...t,l],s.displayName=r+"Provider",[s,function(t,n){let s=n?.[e][a]||i,d=o.useContext(s);if(d)return d;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}(r),[s,d]=t(r,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:r,children:t}=e,l=o.useRef(null),i=o.useRef(new Map).current;return(0,n.jsx)(s,{scope:r,itemMap:i,collectionRef:l,children:t})};c.displayName=r;let u=e+"CollectionSlot",p=o.forwardRef((e,r)=>{let{scope:t,children:o}=e,a=d(u,t),s=(0,l.e)(r,a.collectionRef);return(0,n.jsx)(i.g7,{ref:s,children:o})});p.displayName=u;let f=e+"CollectionItemSlot",m="data-radix-collection-item",b=o.forwardRef((e,r)=>{let{scope:t,children:a,...s}=e,c=o.useRef(null),u=(0,l.e)(r,c),p=d(f,t);return o.useEffect(()=>(p.itemMap.set(c,{ref:c,...s}),()=>void p.itemMap.delete(c))),(0,n.jsx)(i.g7,{[m]:"",ref:u,children:a})});return b.displayName=f,[{Provider:c,Slot:p,ItemSlot:b},function(r){let t=d(e+"CollectionConsumer",r);return o.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll(`[${m}]`));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},a]}},732:(e,r,t)=>{t.d(r,{b:()=>l});var o=t(8964),n=t(7247);function l(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let i=o.createContext(l),a=t.length;t=[...t,l];let s=r=>{let{scope:t,children:l,...s}=r,d=t?.[e]?.[a]||i,c=o.useMemo(()=>s,Object.values(s));return(0,n.jsx)(d.Provider,{value:c,children:l})};return s.displayName=r+"Provider",[s,function(t,n){let s=n?.[e]?.[a]||i,d=o.useContext(s);if(d)return d;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}},1310:(e,r,t)=>{t.d(r,{gm:()=>l});var o=t(8964);t(7247);var n=o.createContext(void 0);function l(e){let r=o.useContext(n);return e||r||"ltr"}},7015:(e,r,t)=>{t.d(r,{M:()=>s});var o,n=t(8964),l=t(9537),i=(o||(o=t.t(n,2)))["useId".toString()]||(()=>void 0),a=0;function s(e){let[r,t]=n.useState(i());return(0,l.b)(()=>{e||t(e=>e??String(a++))},[e]),e||(r?`radix-${r}`:"")}},7264:(e,r,t)=>{t.d(r,{z:()=>i});var o=t(8964),n=t(3191),l=t(9537),i=e=>{let{present:r,children:t}=e,i=function(e){var r,t;let[n,i]=o.useState(),s=o.useRef({}),d=o.useRef(e),c=o.useRef("none"),[u,p]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,r)=>t[e][r]??e,r));return o.useEffect(()=>{let e=a(s.current);c.current="mounted"===u?e:"none"},[u]),(0,l.b)(()=>{let r=s.current,t=d.current;if(t!==e){let o=c.current,n=a(r);e?p("MOUNT"):"none"===n||r?.display==="none"?p("UNMOUNT"):t&&o!==n?p("ANIMATION_OUT"):p("UNMOUNT"),d.current=e}},[e,p]),(0,l.b)(()=>{if(n){let e;let r=n.ownerDocument.defaultView??window,t=t=>{let o=a(s.current).includes(t.animationName);if(t.target===n&&o&&(p("ANIMATION_END"),!d.current)){let t=n.style.animationFillMode;n.style.animationFillMode="forwards",e=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=t)})}},o=e=>{e.target===n&&(c.current=a(s.current))};return n.addEventListener("animationstart",o),n.addEventListener("animationcancel",t),n.addEventListener("animationend",t),()=>{r.clearTimeout(e),n.removeEventListener("animationstart",o),n.removeEventListener("animationcancel",t),n.removeEventListener("animationend",t)}}p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(r),s="function"==typeof t?t({present:i.isPresent}):o.Children.only(t),d=(0,n.e)(i.ref,function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof t||i.isPresent?o.cloneElement(s,{ref:d}):null};function a(e){return e?.animationName||"none"}i.displayName="Presence"},2251:(e,r,t)=>{t.d(r,{WV:()=>i});var o=t(8964);t(6817);var n=t(9008),l=t(7247),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...i}=e,a=o?n.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(a,{...i,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{})},5090:(e,r,t)=>{t.d(r,{W:()=>n});var o=t(8964);function n(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}},8469:(e,r,t)=>{t.d(r,{T:()=>l});var o=t(8964),n=t(5090);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[l]=t,i=o.useRef(l),a=(0,n.W)(r);return o.useEffect(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),t}({defaultProp:r,onChange:t}),a=void 0!==e,s=a?e:l,d=(0,n.W)(t);return[s,o.useCallback(r=>{if(a){let t="function"==typeof r?r(e):r;t!==e&&d(t)}else i(r)},[a,e,i,d])]}},9537:(e,r,t)=>{t.d(r,{b:()=>n});var o=t(8964),n=globalThis?.document?o.useLayoutEffect:()=>{}},6734:(e,r,t)=>{t.d(r,{g7:()=>l});var o=t(6269),n=t(2051),l=o.forwardRef((e,r)=>{let{children:t,...l}=e,a=o.Children.toArray(t),d=a.find(s);if(d){let e=d.props.children,t=a.map(r=>r!==d?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,n.jsx)(i,{...l,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,n.jsx)(i,{...l,ref:r,children:t})});l.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...n}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,e):e})}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function s(e){return o.isValidElement(e)&&e.type===a}},5994:(e,r,t)=>{t.d(r,{j:()=>l});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o},l=(e,r)=>t=>{var l;if((null==r?void 0:r.variants)==null)return n(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:a}=r,s=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==a?void 0:a[e];if(null===r)return null;let l=o(r)||o(n);return i[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return n(e,s,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...d}[r]):({...a,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},6272:(e,r,t)=>{t.d(r,{W:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},1472:(e,r,t)=>{t.d(r,{m6:()=>H});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{s(t,o,e,r)}),o},s=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){s(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{s(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,i=e=>{let t;let i=[],a=0,s=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(o||e.slice(d,d+l)===r)){i.push(e.slice(s,d)),s=d+l;continue}if("/"===c){t=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===i.length?e:e.substring(s),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:i,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:t&&t>s?t-s:void 0}};return t?e=>t({className:e,parseClassName:i}):i},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},b=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:s,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?c.substring(0,u):c);if(!f){if(!p||!(f=o(c))){a=r+(a.length>0?" "+a:a);continue}p=!1}let b=m(s).join(":"),g=d?b+"!":b,h=g+f;if(l.includes(h))continue;l.push(h);let v=n(f,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function v(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,N=/^\d+\/\d+$/,k=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,z=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,R=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>E(e)||k.has(e)||N.test(e),S=e=>L(e,"length",q),E=e=>!!e&&!Number.isNaN(Number(e)),P=e=>L(e,"number",E),T=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&E(e.slice(0,-1)),I=e=>w.test(e),$=e=>j.test(e),_=new Set(["length","size","percentage"]),W=e=>L(e,_,B),D=e=>L(e,"position",B),G=new Set(["image","url"]),U=e=>L(e,G,Z),V=e=>L(e,"",Y),F=()=>!0,L=(e,r,t)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},q=e=>C.test(e)&&!z.test(e),B=()=>!1,Y=e=>R.test(e),Z=e=>M.test(e);Symbol.toStringTag;let H=function(e,...r){let t,o,n;let l=function(a){return o=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=i,i(a)};function i(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=x("colors"),r=x("spacing"),t=x("blur"),o=x("brightness"),n=x("borderColor"),l=x("borderRadius"),i=x("borderSpacing"),a=x("borderWidth"),s=x("contrast"),d=x("grayscale"),c=x("hueRotate"),u=x("invert"),p=x("gap"),f=x("gradientColorStops"),m=x("gradientColorStopPositions"),b=x("inset"),g=x("margin"),h=x("opacity"),v=x("padding"),y=x("saturate"),w=x("scale"),N=x("sepia"),k=x("skew"),j=x("space"),C=x("translate"),z=()=>["auto","contain","none"],R=()=>["auto","hidden","clip","visible","scroll"],M=()=>["auto",I,r],_=()=>[I,r],G=()=>["",O,S],L=()=>["auto",E,I],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",I],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[E,I];return{cacheSize:500,separator:":",theme:{colors:[F],spacing:[O,S],blur:["none","",$,I],brightness:K(),borderColor:[e],borderRadius:["none","","full",$,I],borderSpacing:_(),borderWidth:G(),contrast:K(),grayscale:H(),hueRotate:K(),invert:H(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[A,S],inset:M(),margin:M(),opacity:K(),padding:_(),saturate:K(),scale:K(),sepia:H(),skew:K(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",I]}],container:["container"],columns:[{columns:[$]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),I]}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",T,I]}],basis:[{basis:M()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",I]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",T,I]}],"grid-cols":[{"grid-cols":[F]}],"col-start-end":[{col:["auto",{span:["full",T,I]},I]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[F]}],"row-start-end":[{row:["auto",{span:[T,I]},I]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",I]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",I]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",I,r]}],"min-w":[{"min-w":[I,r,"min","max","fit"]}],"max-w":[{"max-w":[I,r,"none","full","min","max","fit","prose",{screen:[$]},$]}],h:[{h:[I,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[I,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[I,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[I,r,"auto","min","max","fit"]}],"font-size":[{text:["base",$,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",P]}],"font-family":[{font:[F]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",E,P]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,I]}],"list-image":[{"list-image":["none",I]}],"list-style-type":[{list:["none","disc","decimal",I]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,S]}],"underline-offset":[{"underline-offset":["auto",O,I]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),D]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",W]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},U]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[O,I]}],"outline-w":[{outline:[O,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[O,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",$,V]}],"shadow-color":[{shadow:[F]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",$,I]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",I]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",I]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",I]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[T,I]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",I]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[O,S,P]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}};