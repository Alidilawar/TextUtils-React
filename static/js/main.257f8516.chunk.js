(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),l=a.n(n),o=(a(22),a(10)),r=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36, 74, 104)":"white"};return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(r.jsx)("strong",{children:"Analyze your text"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show",style:t,"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",children:"TestUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or."})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(r.jsx)("strong",{children:"Free to use"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse",style:t,"aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",children:"TextUtils is a free character counter tool that provider instant count & worf count statistics for a given text."})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(r.jsx)("strong",{children:"Browser Compatible"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse",style:t,"aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",children:"This word counter software works in any web browser such as chrome, firefox, intternet explorer, safari, opera."})})]})]})]})}var d=a(8);function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ","dark"===e.mode?"light":"dark","Mode"]})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#110f24":"white",color:"dark"===e.mode?"white":"#042743"},value:s,placeholder:"Enter your text",onChange:function(e){n(e.target.value)},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-dark mx-1 my-1",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to Upper Case!","success")},children:"Upper Case"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-dark mx-1 my-1",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Converted to Lower Case!","success")},children:"Lower Case"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-dark mx-1 my-1",onClick:function(){n(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-dark mx-1 my-1",onClick:function(){var t=s.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1)}));n(t.join(" ")),e.showAlert("Converted to Capatilize Case!","success")},children:"Capatilized Case"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-dark mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-sm btn-dark mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert("Removed Extra Spaces!","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h2",{children:"Your Text Summary"}),Object(r.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",s.length," character"]}),Object(r.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:s.length>0?s:"Nothing to Preview!"})]})]})}function j(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})}b.defaultProps={title:"Set title here",aboutText:"About"};var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),l=Object(o.a)(n,2),u=l[0],x=l[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(r.jsx)(j,{alert:u}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/about",children:Object(r.jsx)(i,{mode:a})}),Object(r.jsx)(m.a,{exact:!0,path:"/",children:Object(r.jsx)(h,{showAlert:p,heading:"Enter the text to analyze below",mode:a})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.257f8516.chunk.js.map