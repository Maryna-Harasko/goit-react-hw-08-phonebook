"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[127],{2561:function(n,e,t){t.d(e,{OL:function(){return x},Yb:function(){return l},au:function(){return p},lX:function(){return f},yt:function(){return d}});var r,o,a,i,u,c=t(168),s=t(6444),l=s.ZP.div(r||(r=(0,c.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),p=s.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n"]))),f=s.ZP.label(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  text-align: start;\n  font-size: 18px;\n"]))),d=s.ZP.input(i||(i=(0,c.Z)(["\n  padding-left: 5px;\n  height: 36px;\n  width: 560px;\n  border: 1px solid #3cd1e9;\n  border-radius: 10px;\n  outline: none;\n  transition: border-color 250ms ease, box-shadow 250ms ease;\n\n  &::placeholder{\n    font-size: 14px;\n    padding-left: 5px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active{\n    border-color: rgba(61, 195, 240, 0.895);\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),x=s.ZP.button(u||(u=(0,c.Z)(["\n  width: 200px;\n  height: 36px;\n  background-color: rgba(61, 195, 240, 0.895);\n  color: #0ea3de;\n  font-size: 18px;\n  font-weight: 700;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition: border 250ms ease, box-shadow 250ms ease;\n\n  &:hover,\n  &:focus{\n    border: 1px solid#0ea3de;;\n    box-shadow: 0px 1px 7px 1px #373333;\n  }\n"])))},127:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(9439),o=t(2791),a=t(9434),i="NOT_FOUND";var u=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?u:r,a=t.maxSize,c=void 0===a?1:a,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),p=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:i},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return i}return{get:r,put:function(e,o){r(e)===i&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function f(){var e=p.get(arguments);if(e===i){if(e=n.apply(null,arguments),s){var t=p.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}p.put(arguments,e)}return e}return f.clearCache=function(){return p.clear()},f}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,p=l.memoizeOptions,f=void 0===p?t:p,d=Array.isArray(f)?f:[f],x=s(r),h=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return a=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:x,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return o}var p,f,d,x,h,m,g=l(c),b=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},w=function(n){return n.filter},Z=g([b,w],(function(n,e){return Array.isArray(n)?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):[]})),j=t(2561),P=t(6788),k=t(3329),z=function(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],i=e[1],u=(0,o.useState)(""),c=(0,r.Z)(u,2),s=c[0],l=c[1],p=(0,a.I0)(),f=(0,a.v9)(b),d=function(){i(""),l("")};return(0,k.jsx)(j.Yb,{children:(0,k.jsxs)(j.au,{onSubmit:function(n){n.preventDefault(),f.some((function(e){return e.name.toLowerCase()===n.target.name.value.toLowerCase()}))?alert("".concat(n.name," is already in contacts.")):(p((0,P.el)({name:t,number:s})),d())},children:[(0,k.jsxs)(j.lX,{children:["Name"," ",(0,k.jsx)(j.yt,{type:"text",name:"name",placeholder:"Please enter name",value:t,onChange:function(n){var e=n.target.value;return i(e)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(j.lX,{children:["Number"," ",(0,k.jsx)(j.yt,{type:"tel",name:"number",placeholder:"Please enter number",value:s,onChange:function(n){var e=n.target.value;return l(e)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(j.OL,{type:"submit",children:"Add contact"})]})})},C=t(168),A=t(6444),E=A.ZP.div(p||(p=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 15px;\n"]))),F=A.ZP.label(f||(f=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 3px;\n  text-align: start;\n  font-size: 18px;\n"]))),I=A.ZP.input(d||(d=(0,C.Z)(["\n  padding-left: 5px;\n  height: 36px;\n  width: 560px;\n  border: 1px solid #3cd1e9;\n  border-radius: 10px;\n  outline: none;\n  transition: border-color 250ms ease, box-shadow 250ms ease;\n\n  &::placeholder{\n    font-size: 14px;\n    padding-left: 5px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active{\n    border-color: rgba(61, 195, 240, 0.895);\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),L=t(9894),O=function(){var n=(0,a.v9)(w),e=(0,a.I0)();return(0,k.jsx)(E,{children:(0,k.jsxs)(F,{children:["Find contacts by name",(0,k.jsx)(I,{type:"text",name:"name",value:n,onChange:function(n){return e((0,L.W1)(n.currentTarget.value))}})]})})},S=A.ZP.button(x||(x=(0,C.Z)(["\n  width: 100px;\n  height: 36px;\n  background-color:  rgba(61, 195, 240, 0.895);;\n  color: #0ea3de;\n  font-size: 18px;\n  font-weight: 700;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  transition: border 250ms ease, box-shadow 250ms ease;\n\n  &:hover,\n  &:focus{\n    border: 1px solid#0ea3de;;\n    box-shadow: 0px 1px 7px 1px #373333;\n  }\n"]))),q=function(n){var e=n.id,t=n.name,r=n.number,o=(0,a.I0)();return(0,k.jsxs)(k.Fragment,{children:[t,": ",r,(0,k.jsx)(S,{type:"button",onClick:function(){o((0,P.tY)(e))},children:"Delete"})]})},N=A.ZP.ul(h||(h=(0,C.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 560px;\n"]))),_=A.ZP.li(m||(m=(0,C.Z)(["\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"]))),D=function(){var n=(0,a.v9)(Z);return console.log(n),(0,k.jsx)(N,{children:n.map((function(n){return(0,k.jsx)(_,{children:(0,k.jsx)(q,{id:n.id,name:n.name,number:n.number})},n.id)}))})},R=t(9041),W=function(){var n=(0,a.v9)(v),e=(0,a.v9)(y),t=(0,a.I0)();return(0,o.useEffect)((function(){t((0,P.yF)())}),[t]),(0,k.jsxs)(R.W2,{children:[(0,k.jsx)(R.gw,{children:"Phonebook"}),(0,k.jsx)(z,{}),n&&!e&&(0,k.jsx)("b",{children:"Please wait..."}),(0,k.jsx)(O,{}),(0,k.jsx)(R.If,{children:"Contacts"}),(0,k.jsx)(D,{})]})}},9041:function(n,e,t){t.d(e,{If:function(){return l},W2:function(){return c},gw:function(){return s}});var r,o,a,i=t(168),u=t(6444),c=u.ZP.div(r||(r=(0,i.Z)(["\n  margin: auto;\n  margin-top: 32px;\n  max-width: 760px;\n"]))),s=u.ZP.h1(o||(o=(0,i.Z)(["\n  font-size: 48px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 20px;\n"]))),l=u.ZP.h2(a||(a=(0,i.Z)(["\n  font-size: 36px;\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=127.e74c0eac.chunk.js.map