(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),i=n.n(c),o=n(6),u=n.n(o),a=(n(13),n(7)),l=n(3);var s={background:"lightblue",border:"2px solid darkblue",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},b=function(t){var e=t.value,n=t.onClick;return Object(r.jsx)("button",{style:s,onClick:n,children:e})},d={border:"4px solid darkblue",borderRadius:"10px",width:"250px",height:"250px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},j=function(t){var e=t.squares,n=t.onClick;return Object(r.jsx)("div",{style:d,children:e.map((function(t,e){return Object(r.jsx)(b,{value:t,onClick:function(){return n(e)}},e)}))})},f={width:"200px",margin:"20px auto"},x=function(){var t=Object(c.useState)(Array(9).fill(null)),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)(!0),u=Object(l.a)(o,2),s=u[0],b=u[1],d=function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){console.log(e[n]);var r=Object(l.a)(e[n],3),c=r[0],i=r[1],o=r[2];if(t[c]&&t[c]===t[i]&&t[c]===t[o])return t[c]}return null}(n);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{squares:n,onClick:function(t){var e=Object(a.a)(n);d||e[t]||(e[t]=s?"x":"o",i(e),b(!s))}}),Object(r.jsxs)("div",{style:f,children:[Object(r.jsx)("p",{children:d?"Winner: "+d:"Next Player: "+(s?"x":"o")}),Object(r.jsx)("button",{onClick:function(){return i(Array(9).fill(null))},children:"Start Game"})]})]})},p=function(){return Object(r.jsx)(x,{})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.1598e0ae.chunk.js.map