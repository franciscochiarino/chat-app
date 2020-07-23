(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9);a(68);function s(e){var t=e.setName,a=Object(n.useState)(""),s=Object(c.a)(a,2),o=s[0],m=s[1];return r.a.createElement("div",{className:"Join"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("form",{onSubmit:function(e){if(o.length>15)return alert("Please pick a name that's shorter than 15 characters.");e.preventDefault(),t(o),sessionStorage.setItem("name",o)},className:"join-form"},r.a.createElement("label",{htmlFor:"name"},"Choose your nickname:",r.a.createElement("input",{required:!0,type:"text",placeholder:"Name",value:o,onChange:function(e){return m(e.target.value)}})),r.a.createElement("button",{className:"join-btn",type:"submit"},"Join")))}var o=a(59),m=a(65),l=a(60),i=a.n(l),A=a(61),u=a.n(A);function E(e){var t=e.room;return r.a.createElement("div",{className:"InfoBar"},r.a.createElement("h1",null,t),r.a.createElement("img",{onClick:function(){sessionStorage.removeItem("name"),window.location="/"},src:u.a,className:"close-chat-btn",alt:"close"}))}a(102);var g=a(34),f=a(62),v=a.n(f);function S(e){var t=e.text,a=e.setText,s=e.sendMessage,o=Object(n.useState)(!1),m=Object(c.a)(o,2),l=m[0],i=m[1];return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(g.b,{className:"Picker",set:"apple",theme:"light",style:{fontFamily:"initial"},onSelect:function(e){return a(t+" ".concat(e.native," "))}}):null,r.a.createElement("div",{className:"Input"},r.a.createElement("form",{onSubmit:s,className:"chat-form"},r.a.createElement("button",{type:"button",className:"emoji-btn",onClick:function(){i(!l)}},r.a.createElement(g.a,{emoji:{id:"grinning"},size:20})),r.a.createElement(v.a,{className:"textarea-autosize",onKeyPress:function(e){return"Enter"===e.key?s(e):null},style:{minHeight:20,maxHeight:70,resize:"none"},placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(){return i(!1)}},"Send"))))}var d=a(63),j=a.n(d);function p(e){var t=e.message,a=t.user,n=t.text,c=e.name,s=!1;return a.trim()[0].toLocaleUpperCase()+a.substring(1).toLocaleLowerCase()===c.trim()[0].toLocaleUpperCase()+c.substring(1).toLocaleLowerCase()&&(s=!0),s?r.a.createElement("div",{className:"message-container justify-right"},r.a.createElement("div",{className:"message-box bg-dark"},r.a.createElement("p",{className:"message-text color-white"},n))):r.a.createElement("div",{className:"message-container justify-left"},r.a.createElement("p",{className:"sent-text"},a),r.a.createElement("div",{className:"message-box bg-light"},r.a.createElement("p",{className:"message-text color-black"},n)))}function h(e){var t=e.messages,a=e.name,n=t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(p,{message:e,name:a}))}));return r.a.createElement(j.a,{className:"Messages"},n)}var O=i()();function b(e){var t=e.name,a=e.room,s=e.chatWindow,l=e.setChatWindow,i=Object(n.useState)(""),A=Object(c.a)(i,2),u=A[0],g=A[1],f=Object(n.useState)([]),v=Object(c.a)(f,2),d=v[0],j=v[1];Object(n.useEffect)((function(){return O.emit("join",{name:t,room:a},(function(e){e&&(sessionStorage.removeItem("name"),alert(e),window.location.reload())})),function(){O.emit("disconnect"),O.off()}}),[t,a]),Object(n.useEffect)((function(){O.on("message",(function(e){j((function(t){return[].concat(Object(m.a)(t),[e])}))}))}),[]);var p=function(){var e=Object(o.a)(d),t=(e[0],e.slice(1));return j(t)};return r.a.createElement("div",{className:"outer-container"},r.a.createElement("div",{className:"inner-container"},r.a.createElement(E,{room:a,chatWindow:s,setChatWindow:l}),r.a.createElement(h,{messages:d,name:t}),r.a.createElement(S,{text:u,setText:g,sendMessage:function(e){e.preventDefault(),u&&O.emit("sendMessage",u,(function(){g("")})),d.length>=50&&p()}})))}function P(e){e.setChatState,e.location;var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],m=a[1],l=Object(n.useState)("chat-app-chat"),i=Object(c.a)(l,2),A=i[0],u=i[1];return Object(n.useEffect)((function(){var e=sessionStorage.getItem("name");e&&m(e)}),[o]),o?r.a.createElement("div",{className:"App ".concat(A)},r.a.createElement(b,{name:o,setName:m,room:"Chat App",chatWindow:A,setChatWindow:u})):r.a.createElement("div",{className:"App chat-app-join"},r.a.createElement(s,{setName:m}))}var N=a(64);a.n(N).a.render(r.a.createElement(P,null),document.getElementById("root"))},61:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABR1BMVEUAAADISUnGSkjHSkjHSknHSknHSknHS0nIS0jETk7JSkrIS0nHSknHSkrITEzGVVXHS0nHSknISkq/QEDHSknHSkm8Q0PGSUm+RUS1PDyyPz+zQEDHSkqpOjq2SUmuPDy0Pz+uPDutQECzPj6uOzuqOzrHSkmoODjHSkmrOzuwPT2xPz2/QEDHSkmnNze5OjqvPTy4Q0OwPT2rOjqxOzu6RUW9RUSoOTm1Pj6qOjm1QUGrPj6qOTmsOzu8PT2lPDyvPDyzPj6rOjqrOzqvPT20Pz/HSknCR0awPTzASEeoQ0KvREPGSkm8RESlNzeoQkKZPz+pQkLFSEeuRESvRESsOzqmNzepQ0KnQkGnQ0KxPT2zPj61QD+0Pz+sOzvFSUi8REOmODivPT27REPBR0bESEepOTmqOjnCR0ezPz+1Pz+xPj4AAACqV/5tAAAARnRSTlMADlmbyur6mlgNJp31nCUJjPuKCNPHJjHqWfM80PcVyT3XHJDX8+v9+fPVjQz0/hbVPcTyDSXp/C37Tzr18SoR1ZHz89WOLzqPhAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBxcRFzgOirVNAAABjUlEQVQ4y32TZ1/CMBDGI1sZIogKDoYIThDEvVcopRxFlgMZgvv7vzdt6KT4vGl/939yuVwuCMmaMJktVpvNarE7JtGoppwuLMvl9ujwtHcGa2Tz+dXcM4tHFJhT+LwVG2ghKK835BiHFin3LxlznF9eEQ1ePE5MWDwfrb/AFjkJcEW2IHxLECEGJw2WeZ4dOjiW5yvCzwNESf+G/anykkPgfE0M1hsxZJLyNkn4kTi4J9mKn2EVmbHWoeb4BeLIIhvE1Cyr4rgFayihOpaQQ83xKyTROtY7FE5qAI1B3F+sdKg2MST0XOXoANnivyK7ABvIrllPUFPJwQBsIoeOKx3D+R7AFtreoYaittVV8vMGkEoj5B53WX0A2BXmyUavu1xTrrtaKeBBgxgywkD4DIfl/YPwLB25gAEffBK+l6NDuX8wwvtC/sMjaayDoS8NzpP6AY5PlIdxesaUOlJ/u0xP4OcX6qd1GQaoM9+tn982UGVzutcZiTZAVuoqY/C+Y9fxmyT0krd392kl+gdxouOTHBASLAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNy0yM1QxNzoyMzo1NiswMDowMMNBFz4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDctMjNUMTc6MjM6NTYrMDA6MDCyHK+CAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},66:function(e,t,a){e.exports=a(155)},68:function(e,t,a){},99:function(e,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.5a1dba61.chunk.js.map