/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class n{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const r=window,h=r.trustedTypes,a=h?h.emptyScript:"",d=r.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u},f="finalized";class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;p[f]=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:p}),(null!==(l=r.reactiveElementVersions)&&void 0!==l?l:r.reactiveElementVersions=[]).push("1.6.3");const m=window,y=m.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,k=`<${$}>`,x=document,S=()=>x.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,E="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,j=/>/g,O=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,z=/"/g,N=/^(?:script|style|textarea|title)$/i,W=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),F=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),R=new WeakMap,D=x.createTreeWalker(x,129,null,!1);function I(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==g?g.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",l=U;for(let i=0;i<s;i++){const s=t[i];let r,h,a=-1,d=0;for(;d<s.length&&(l.lastIndex=d,h=l.exec(s),null!==h);)d=l.lastIndex,l===U?"!--"===h[1]?l=M:void 0!==h[1]?l=j:void 0!==h[2]?(N.test(h[2])&&(n=RegExp("</"+h[2],"g")),l=O):void 0!==h[3]&&(l=O):l===O?">"===h[0]?(l=null!=n?n:U,a=-1):void 0===h[1]?a=-2:(a=l.lastIndex-h[2].length,r=h[1],l=void 0===h[3]?O:'"'===h[3]?z:T):l===z||l===T?l=O:l===M||l===j?l=U:(l=O,n=void 0);const c=l===O&&t[i+1].startsWith("/>")?" ":"";o+=l===U?s+k:a>=0?(e.push(r),s.slice(0,a)+_+s.slice(a)+w+c):s+w+(-2===a?(e.push(void 0),i):c)}return[I(t,o+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const l=t.length-1,r=this.parts,[h,a]=P(t,i);if(this.el=B.createElement(h,s),D.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=D.nextNode())&&r.length<l;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith(_)||i.startsWith(w)){const s=a[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+_).split(w),i=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?q:"?"===i[1]?G:"@"===i[1]?Q:Z})}else r.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(N.test(e.tagName)){const t=e.textContent.split(w),i=t.length-1;if(i>0){e.textContent=y?y.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],S()),D.nextNode(),r.push({type:2,index:++n});e.append(t[i],S())}}}else if(8===e.nodeType)if(e.data===$)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(w,t+1));)r.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,i){const s=x.createElement("template");return s.innerHTML=t,s}}function H(t,i,s=t,e){var n,o,l,r;if(i===F)return i;let h=void 0!==e?null===(n=s._$Co)||void 0===n?void 0:n[e]:s._$Cl;const a=C(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(l=(r=s)._$Co)&&void 0!==l?l:r._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=H(t,h._$AS(t,i.values),h,e)),i}class J{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:x).importNode(s,!0);D.currentNode=n;let o=D.nextNode(),l=0,r=0,h=e[0];for(;void 0!==h;){if(l===h.index){let i;2===h.type?i=new K(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new X(o,this,t)),this._$AV.push(i),h=e[++r]}l!==(null==h?void 0:h.index)&&(o=D.nextNode(),l++)}return D.currentNode=x,n}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class K{constructor(t,i,s,e){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=H(this,t,i),C(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=B.createElement(I(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.v(s);else{const t=new J(n,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new B(t)),i}T(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new K(this.k(S()),this.k(S()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class Z{constructor(t,i,s,e,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=H(this,t,i,0),o=!C(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const e=t;let l,r;for(t=n[0],l=0;l<n.length-1;l++)r=H(this,e[s+l],i,l),r===F&&(r=this._$AH[l]),o||(o=!C(r)||r!==this._$AH[l]),r===L?t=L:t!==L&&(t+=(null!=r?r:"")+n[l+1]),this._$AH[l]=r}o&&!e&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const V=y?y.emptyScript:"";class G extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class Q extends Z{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=H(this,t,i,0))&&void 0!==s?s:L)===F)return;const e=this._$AH,n=t===L&&e!==L||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==L&&(e===L||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const Y=m.litHtmlPolyfillSupport;null==Y||Y(B,K),(null!==(b=m.litHtmlVersions)&&void 0!==b?b:m.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,it;class st extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=o._$litPart$;if(void 0===l){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new K(i.insertBefore(S(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}st.finalized=!0,st._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:st});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot;const lt=null!=(null===(ot=window.HTMLSlotElement)||void 0===ot?void 0:ot.prototype.assignedElements)?(t,i)=>t.assignedElements(i):(t,i)=>t.assignedNodes(i).filter((t=>t.nodeType===Node.ELEMENT_NODE));const rt=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(e,t,s)})`
  :host {
    --linkMaxWidthMobile: 72px;
    --linkMaxWidthDesktop: 170px;
    --separatorUnicode: '\\27A1';
    --separatorUnicodeColour: #202a2f;
    --font: Arial;
    --fontColour: #688897;
    --lastLinkFontWeight: 800;
    --textDecoration: none;
    --hoverFontColour: #977768;
    --hoverFontWeight: 500;
    --hoverTextDecoration: underline;
    --fontSize: 14px;
    --lastLinkFontColour: #93b649;
    --lastLinkFontWeight: 800;
  }

  .huss-breadcrumbs__list {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    list-style-type: none;
    font-size: var(--text-small);
    padding: 0;
    margin: 0;
    font-family: var(--font);
    font-size: var(--fontSize);
  }

  a {
    color: var(--fontColour);
    text-decoration: var(--textDecoration);
    padding-inline: 8px;
    display: inline-block;
    max-width: var(--linkMaxWidthMobile);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a:hover:is(a),
  a:focus:is(a) {
    cursor: pointer;
    color: var(--hoverFontColour);
    font-weight: var(--hoverFontWeight);
    text-decoration: var(--hoverTextDecoration);
  }

  @media (width > 48rem) {
    a {
      max-width: var(--linkMaxWidthDesktop);
    }
  }

  .huss-breadcrumb__list-item {
    display: flex;
    align-items: center;
  }

  .huss-breadcrumb__list-item:after {
    content: var(--separatorUnicode);
    color: var(--separatorUnicodeColour);
    width: 9px;
  }

  .huss-breadcrumb__list-item:first-child a {
    padding-inline-end: 8px;
    padding-inline-start: 0;
  }

  .huss-breadcrumb__list-item:last-child {
    color: var(--lastLinkFontColour);
    font-weight: var(--lastLinkFontWeight);
  }

  .huss-breadcrumb__list-item:last-child:after {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    )
    a {
    display: none;
  }

  .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
      :nth-last-child(2)
    ):not(:nth-last-child(3))::after {
    display: none;
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
    display: none;
  }

  .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
    content: '...';
    display: inline-block;
    padding-inline: 10px;
  }

  @media (width > 48rem) {
    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      )
      a {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(2)
      ):not(:nth-last-child(3))::after {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: inline-block;
    }

    .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      display: none;
    }

    .--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2))
      a {
      display: none;
    }

    .--is-folded
      .huss-breadcrumb__list-item:not(:first-child):not(:last-child):not(
        :nth-last-child(3)
      ):not(:nth-last-child(2)):after {
      display: none;
    }

    .--is-folded .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: none;
    }

    .--is-folded .huss-breadcrumb__list-item:nth-child(2):not(:last-child) a {
      display: inline-block;
    }

    .--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::before {
      content: '...';
      display: inline-block;
      padding-inline: 10px;
    }

    .--is-folded.--is-folded.--is-folded
      .huss-breadcrumb__list-item:nth-child(2):not(:last-child)::after {
      content: '>';
      display: inline-block;
    }
  }

  .--is-disabled > a {
    pointer-events: none;
  }

  .--is-disabled > a:hover {
    cursor: default;
    color: var(--linkColour);
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ht=function(t,i,s,e){for(var n,o=arguments.length,l=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(l=(o<3?n(l):o>3?n(i,s,l):n(i,s))||l);return o>3&&l&&Object.defineProperty(i,s,l),l};let at=class extends st{firstUpdated(){this._breadcrumbs.length&&this.requestUpdate()}render(){return W`
      <ul
        class="huss-breadcrumbs__list ${void 0!==this.collapseAfter&&this._breadcrumbs.length>this.collapseAfter?"--is-folded":""}"
      >
        ${this._breadcrumbs.map(((t,i)=>W`<li
              class="huss-breadcrumb__list-item ${this._breadcrumbs.length===i+1?"--is-disabled":null}"
            >
              ${t}
            </li>`))}
      </ul>
      <slot name="breadcrumbs"></slot>
    `}};at.styles=[rt],ht([function(t){const{slot:i,selector:s}=null!=t?t:{};return(({finisher:t,descriptor:i})=>(s,e)=>{var n;if(void 0===e){const e=null!==(n=s.originalKey)&&void 0!==n?n:s.key,o=null!=i?{kind:"method",placement:"prototype",key:e,descriptor:i(s.key)}:{...s,key:e};return null!=t&&(o.finisher=function(i){t(i,e)}),o}{const n=s.constructor;void 0!==i&&Object.defineProperty(s,e,i(e)),null==t||t(n,e)}})({descriptor:e=>({get(){var e;const n="slot"+(i?`[name=${i}]`:":not([name])"),o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(n),l=null!=o?lt(o,t):[];return s?l.filter((t=>t.matches(s))):l},enumerable:!0,configurable:!0})})}({slot:"breadcrumbs",selector:"a"})],at.prototype,"_breadcrumbs",void 0),ht([function(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):nt(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}({type:Number})],at.prototype,"collapseAfter",void 0),at=ht([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i))("huss-breadcrumbs")],at);export{at as HussBreadcrumbs};
