(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),o=n(a),i=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function m(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):r&&(s=r(s))}var p=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),m()},c.componentDidUpdate=function(){m()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),m()},c.render=function(){return o.createElement(n,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(p,"canUseDOM",l),p}}},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var s=o[l];if(!c(s))return!1;var u=e[s],m=t[s];if(!1===(a=r?r.call(n,u,m,s):void 0)||void 0===a&&u!==m)return!1}return!0}},Oyvg:function(e,t,r){var n=r("dyZX"),a=r("Xbzi"),o=r("hswa").f,i=r("kJMx").f,c=r("quPj"),l=r("C/va"),s=n.RegExp,u=s,m=s.prototype,p=/a/g,d=/a/g,f=new s(p)!==p;if(r("nh4g")&&(!f||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var r=this instanceof s,n=c(e),o=void 0===t;return!r&&n&&e.constructor===s&&o?e:a(f?new u(n&&!o?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&o?l.call(e):t),r?this:m,s)};for(var h=function(e){e in s||o(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},E=i(u),T=0;E.length>T;)h(E[T++]);m.constructor=s,s.prototype=m,r("KroJ")(n,"RegExp",s)}r("elZq")("RegExp")},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("91GP"),r("ksaK"),r("0vUq"),r("Exb3"),r("wAES"),[{description:"Modern video security and IoT sensor platform for enhanced operations.",details:"I work on the React and React Native dashboards that the customers use to interface with our hardware devices such as cameras, asset tags, climate sensors, and door sensors. I started when the front-end team was very small and have helped it slowly grow into what it is today. We move fast and are constantly adapting the code base to improve performance and utilize new technologies like React Hooks, GraphQL, and Gatsby.",tags:["React Native","React","React Hooks","GraphQL","Gatsby","iOS","Android","tvOS","Apple TV"],heroImg:"img/console-components@2x.jpg",logoImg:"http://placehold.it/64x64",title:"Rhombus Systems",urlText:"rhombussystems.com",url:"https://rhombussystems.com/"},{description:"An interactive training for the Intel® Xeon® Platform.",details:"3D levels created in C#/Unity, transpiled to customized WebGL/JavaScript templates, distributed by CDN, communicating through iframes to a Dockerized Wordpress instance, using SAML service for authentication, relaying scores and user data to a Node API, and much much more crazyness.",tags:["Unity","C#","Docker","JavaScript","Node","MongoDB","SAML","PHP"],heroImg:"img/portfolio-droneracing@2x.jpg",logoImg:"http://placehold.it/64x64",title:"Intel® Drone Racing",urlText:"droneracing.intel.com",url:"https://simplecore.quangostaging.com/inteldroneracing/"},{description:"An awesome WebGL visualization.",details:"This is a visualization I created with the Amazon AWS team and Intel. It was distributed locally on a giant touch screen with a specific resolution so please excuse the non-responsiveness, ratio weirdness, and instructional animation load times.",tags:["THREE.js","WebGL","Redux","React","Firebase"],heroImg:"img/portfolio-bitcoinviz@2x.jpg",logoImg:"http://placehold.it/64x64",title:"AWS Viz",url:"https://aws-0003-viz.firebaseapp.com",urlText:"firebaseapp.com"},{description:"The first ad network for games that allows developers and advertiser to live together in harmony.",details:"I was the lead API designer for this project and played a pivotal role in bringing their MVP product to production. Adjoy is a well funded startup looking to innovate the game advertisement space by allowing developers to integrate ads into their games as achievements to unlock rather than as annoying banners that block game play.",tags:["Node","Express","Sails","Mongo","Heroku"],heroImg:"img/portfolio-adjoy@2x.jpg",logoImg:"http://placehold.it/64x64",title:"Adjoy",url:"http://joymonster.com",urlText:"adjoy.co"},{description:"The only app that lets you add products with product images to your WooCommerce store!",details:"I'm the creator and product owner of WooProducts. I saw a need for this app after working with clients who own an ecommerce store. WooProducts has a pretty sizeable user base and it is still growing.",tags:["Ionic","OAuth 1.0a","WooCommerce API"],heroImg:"img/portfolio-wooproducts@2x.jpg",logoImg:"http://placehold.it/64x64",title:"WooProducts",urlText:"wooproducts.co",url:"http://wproducts.co"},{description:"A set of UI components for building React Native apps.",details:"Carbon Native is a UI library my brother and I created for React Native to build our mobile apps with. It's just a bonus that other people in the community like it and use it too.",tags:["React Native"],heroImg:"img/portfolio-carbonnative@2x.jpg",logoImg:"http://placehold.it/64x64",title:"Carbon Native",urlText:"getcarbonnative.com",url:"http://getcarbonnative.com"},{description:"It's a new kind of cruise that combines your love of travel with your desire to make a difference.",details:"I built the Journey Planner for Fathom Cruises. The Journey Planner is a web application that cruise passengers use to manage their personal details, book shore excursions, print luggage tags, and many other mission critical interactions. This application still handles thousands of traveler requests per day.",tags:["React","Redux","ES6","Angular"],heroImg:"img/portfolio-fathom@2x.jpg",logoImg:"http://placehold.it/64x64",title:"Fathom Cruises",urlText:"fathom.org",disabled:!0,url:"https://fathom.org"}]);var i=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-image"},a.a.createElement("figure",{className:"image is-5by3"},a.a.createElement("img",{src:this.props.heroImg,alt:""}))),a.a.createElement("div",{className:"card-content"},a.a.createElement("div",{className:"media"},a.a.createElement("div",{className:"media-content"},a.a.createElement("p",{className:"title is-5"},this.props.title),a.a.createElement("p",{className:"subtitle is-6"},a.a.createElement("a",{href:""+this.props.url,target:"_blank",rel:"noopener noreferrer",className:this.props.disabled?"disabled":""},this.props.urlText||this.props.url)))),a.a.createElement("div",{className:"content"},this.props.description)),a.a.createElement("footer",{className:"card-footer"},a.a.createElement("a",{className:"card-footer-item",onClick:function(){return e.props.openModal()}},"Details")))},n}(a.a.Component);i.defaultProps={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",heroImg:"http://placehold.it/300x225",logoImg:"http://placehold.it/64x64",title:"John Smith",url:"example.com",disabled:!1};var c=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{className:"container-restricted"},a.a.createElement("header",{className:"header row"},a.a.createElement("h1",null,a.a.createElement("a",{href:"https://tylerbuchea.com"},"Tyler Buchea")," ",a.a.createElement("div",null,"[ boo • shay ]")),a.a.createElement("h2",null,"Software Engineer"),a.a.createElement("hr",{className:"divider"}),a.a.createElement("nav",{className:"navbar"},a.a.createElement("ul",{className:"navbar-list"},a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"http://blog.tylerbuchea.com"},a.a.createElement("i",{className:"fa fa-pencil-alt"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://github.com/tylerbuchea"},a.a.createElement("i",{className:"fab fa-github"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://www.youtube.com/channel/UCjGfHpKjVrp7MZ45hiwgD_A"},a.a.createElement("i",{className:"fab fa-youtube"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://anchor.fm/remote-guys-night"},a.a.createElement("i",{className:"fa fa-podcast"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://twitter.com/tylerbuchea"},a.a.createElement("i",{className:"fab fa-twitter"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://angel.co/tyler-buchea"},a.a.createElement("i",{className:"fab fa-angellist"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://stackoverflow.com/jobs/cv/employer/321320"},a.a.createElement("i",{className:"fab fa-stack-overflow"}))),a.a.createElement("li",{className:"navbar-item"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"icon navbar-link",href:"https://www.linkedin.com/in/tyler-buchea-b3a43376"},a.a.createElement("i",{className:"fab fa-linkedin"})))))),a.a.createElement("section",{className:"content row"},a.a.createElement("article",{className:"content-item content-contact"},a.a.createElement("h2",{className:"title is-2"},"Let's Chat!"),a.a.createElement("ul",{className:"contact-list"},a.a.createElement("li",null,a.a.createElement("i",{className:"fa fa-calendar-alt contact-icon"})," ",a.a.createElement("a",{href:"https://calendly.com/tylerbuchea",target:"_blank",rel:"noopener noreferrer"},"Schedule a meeting")),a.a.createElement("li",null,a.a.createElement("i",{className:"fab fa-twitter contact-icon"})," ",a.a.createElement("a",{href:"https://twitter.com/tylerbuchea",target:"_blank",rel:"noopener noreferrer"},"Tweet at me")),a.a.createElement("li",null,a.a.createElement("i",{className:"fa fa-envelope contact-icon"})," ",a.a.createElement("a",{href:"mailto:tyler@buchea.com",target:"_blank",rel:"noopener noreferrer"},"Send me an email")),a.a.createElement("li",null,a.a.createElement("form",{action:"//formspree.io/tyler@buchea.com",method:"POST"},a.a.createElement("input",{type:"email",name:"_replyto",placeholder:"your-email@example.com",style:{fontSize:12.5}})," ",a.a.createElement("input",{type:"submit",value:"SEND"}))))),a.a.createElement("article",{className:"content-item content-direct"},a.a.createElement("div",{className:"about"},a.a.createElement("div",{className:"about-copy"},a.a.createElement("h2",{className:"title is-2"},"Howdy,"),a.a.createElement("p",{style:{paddingRight:5}},"I'm a full stack JavaScript developer living in Portland and working remotely. I like React, React Native, GraphQL, and NodeJS. Add me on Instagram:"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tylerbuchea/"},"@tylerbuchea"),".")),a.a.createElement("img",{src:"img/new_avatar_square_optimized.jpg",className:"icon-avatar",alt:"Tyler Buchea"})),a.a.createElement("hr",null))))},n}(a.a.Component);c.defaultProps={};var l=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){document.documentElement.style.overflow="hidden"},o.componentWillUnmount=function(){document.documentElement.style.overflow="visible"},o.render=function(){var e=this;return a.a.createElement("div",{className:"modal is-active"},a.a.createElement("div",{className:"modal-background",onClick:function(){return e.props.close()}}),a.a.createElement("div",{className:"modal-content"},a.a.createElement("section",{className:"modal-card-body"},a.a.createElement("button",{className:"modal-close",onClick:function(){return e.props.close()}}),a.a.createElement("h3",{className:"title is-3"},"My Role"),this.props.modal.details,a.a.createElement("hr",null),a.a.createElement("div",{className:"card-image"},a.a.createElement("figure",{className:"image is-5by3"},a.a.createElement("img",{src:this.props.modal.heroImg,alt:""}))),a.a.createElement("div",{className:"card-content"},a.a.createElement("div",{className:"media"},a.a.createElement("div",{className:"media-content"},a.a.createElement("p",{className:"title is-5"},this.props.modal.title),a.a.createElement("p",{className:"subtitle is-6"},a.a.createElement("a",{href:this.props.modal.url,className:this.props.modal.disabled?"disabled":""},this.props.modal.urlText||this.props.modal.url)))),a.a.createElement("div",{className:"content"},this.props.modal.description)))))},n}(a.a.Component);l.defaultProps={};var s=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={cards:o,modal:null},t.closeModal=function(){return t.setState({modal:null})},t.openModal=function(e){return t.setState({modal:e})},t.renderCards=function(e){return a.a.createElement("section",{className:"section"},a.a.createElement("h2",{className:"title is-2 has-text-centered"},"Portfolio"),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"columns is-multiline"},e.map((function(e,r){return a.a.createElement("div",{className:"column is-one-third-tablet is-one-quarter-desktop",key:r},a.a.createElement(i,Object.assign({},e,{openModal:function(){return t.openModal(e)}})))})))))},t.renderFooter=function(){return a.a.createElement("div",{className:"container-restricted",style:{paddingBottom:30}},a.a.createElement("div",{className:"has-text-centered"},a.a.createElement("hr",null),"©",(new Date).getFullYear()," Tyler Buchea. All Rights Reserved."))},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.renderCards(this.state.cards),t=this.renderFooter();return a.a.createElement("div",null,!!this.state.modal&&a.a.createElement(l,{close:this.closeModal,modal:this.state.modal}),a.a.createElement(c,null),e,t)},n}(a.a.Component),u=r("TJpk"),m=r.n(u);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,null,a.a.createElement("title",null,"Tyler Buchea | Software Engineer"),a.a.createElement("meta",{charset:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"canonical",href:"https://tylerbuchea.com/"}),a.a.createElement("link",{rel:"shortcut icon",href:"https://tylerbuchea.com/favicon.ico"}),a.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.13/css/all.css",integrity:"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",crossorigin:"anonymous"})),a.a.createElement(s,null))}},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=m(r("q1tI")),i=m(r("17x9")),c=m(r("8+s/")),l=m(r("bmMU")),s=r("v1p5"),u=r("hFT/");function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h,E,T,y=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),b=(h=y,T=E=function(e){function t(){return d(this,t),f(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=c,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=p(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(h,a)},a(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=h.peek,E.rewind=function(){var e=h.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,l,s,u=n(t),m=n(r);if(u&&m){if((l=t.length)!=r.length)return!1;for(c=l;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(u!=m)return!1;var p=t instanceof Date,d=r instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==r.getTime();var f=t instanceof RegExp,h=r instanceof RegExp;if(f!=h)return!1;if(f&&h)return t.toString()==r.toString();var E=a(t);if((l=E.length)!==a(r).length)return!1;for(c=l;0!=c--;)if(!o.call(r,E[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=l;0!=c--;)if(!("_owner"===(s=E[c])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=l(r("q1tI")),i=l(r("MgzW")),c=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},m=function(e){var t=E(e,c.TAG_NAMES.TITLE),r=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},f=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},h=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===t.indexOf(s)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),l=0;l<o.length;l++){var s=o[l],u=(0,i.default)({},a[s],n[s]);a[s]=u}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},T=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){T(e)}),0)}),y=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,m=e.styleTags,p=e.title,d=e.titleAttributes;w(c.TAG_NAMES.BODY,n),w(c.TAG_NAMES.HTML,a),_(p,d);var f={baseTag:R(c.TAG_NAMES.BASE,r),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,l),scriptTags:R(c.TAG_NAMES.SCRIPT,u),styleTags:R(c.TAG_NAMES.STYLE,m)},h={},E={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(E[e]=f[e].oldTags)})),t&&t(),s(e,h,E)},N=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var m=o.indexOf(s);-1!==m&&o.splice(m,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},O=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=I(r,n),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),o=N(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){v&&g(v),e.defer?v=b((function(){S(e,(function(){v=null}))})):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,m=e.title,p=void 0===m?"":m,d=e.titleAttributes;return{base:O(c.TAG_NAMES.BASE,t,n),bodyAttributes:O(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:O(c.ATTRIBUTE_NAMES.HTML,a,n),link:O(c.TAG_NAMES.LINK,o,n),meta:O(c.TAG_NAMES.META,i,n),noscript:O(c.TAG_NAMES.NOSCRIPT,l,n),script:O(c.TAG_NAMES.SCRIPT,s,n),style:O(c.TAG_NAMES.STYLE,u,n),title:O(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},n)}},t.reducePropsToState=function(e){return{baseTag:f([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:h(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:h(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:m(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=A}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-7a86ac76d1fdee434757.js.map