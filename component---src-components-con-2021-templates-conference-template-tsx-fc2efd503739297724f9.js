(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9ht/":function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return l}));var n=t("Wgwc"),r=t.n(n),c=function(e){return r()("2021-09-10T"+e).format("HH:mm A")},l=function(e){return 12>=parseInt(e.split(":")[0],10)}},"9jLW":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("TJpk"),l=t.n(c),s=t("TSYQ"),i=t.n(s),o=t("Wbzz"),m=t("uQiK");a.a=function(e){var a,t,n=e.speaker,c=e.social,s=void 0===c||c,u=e.hoverable,d=void 0===u||u,p=n.id,v=n.name,f=n.job,E=null===(a=Object(o.useStaticQuery)("1617471404").allFile.nodes.filter((function(e){return e.name===p})))||void 0===a||null===(t=a[0])||void 0===t?void 0:t.childImageSharp,h={"@context":"http://schema.org","@type":"Person",name:n.name,jobTitle:n.job};return r.a.createElement("div",{className:"conf__speaker-resume"},r.a.createElement(l.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h))),r.a.createElement(o.Link,{className:i()("conf__speaker-content",{hoverable:d}),to:n.slug},r.a.createElement("div",{className:"circle__effect"},r.a.createElement("div",{className:"circle"},r.a.createElement("img",{width:"240",height:"240",src:null==E?void 0:E.base.src,alt:v,srcSet:(null==E?void 0:E.base.src)+" 1x, "+(null==E?void 0:E.retina.src)+" 2x",className:"circle__picture"}),r.a.createElement("svg",{className:"circle__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 281.49 281.49"},r.a.createElement("path",{d:"M140.74,0C63.14,0,0,63.14,0,140.74S63.14,281.49,140.74,281.49s140.75-63.14,140.75-140.75S218.35,0,140.74,0Zm0,263.49A122.75,122.75,0,1,1,263.49,140.74,122.88,122.88,0,0,1,140.74,263.49Z"}),r.a.createElement("path",{d:"M210.91,131.74H149.74V70.58a9,9,0,1,0-18,0v61.16H70.58a9,9,0,1,0,0,18h61.16v61.17a9,9,0,0,0,18,0V149.74h61.17a9,9,0,0,0,0-18Z"})))),r.a.createElement("div",{className:"infos"},r.a.createElement("span",{className:"overline"},f),r.a.createElement("h3",{className:"h5 lined"},v))),s&&r.a.createElement(m.a,{speaker:n}))}},"D/fY":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("iWEp"),l=t("xUk1"),s=t("sg5C"),i=t("UHdS"),o=t("9jLW"),m=t("9ht/"),u=t("jt9c");a.default=function(e){var a=e.pageContext,t=e.location,n=a.html,d=a.title,p=a.speaker,v=a.track,f=a.start,E=a.end,h=Object(u.a)(p),_=s.a.find((function(e){return e.id===v}));return r.a.createElement(c.b,{location:t},r.a.createElement("div",{className:"conf__conference"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"conference__header"},r.a.createElement(l.a,{dark:!0,lined:!0,h1:!0,small:50<d.length},r.a.createElement("strong",null,d)),_?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"overline header__subtitle"},r.a.createElement("strong",null,"Track #"+_.id+" "),"- "+_.type),r.a.createElement("p",{className:"header__date"},E&&f?"September, 10 2021 · "+Object(m.a)(f)+" - "+Object(m.a)(E):"Sep, 10 2021")):null),r.a.createElement("div",{className:"conference__content"},r.a.createElement("div",{className:"conference__speaker"},r.a.createElement(o.a,{speaker:h,hoverable:!1,social:!1}),r.a.createElement(i.a,{className:"white square",size:"small",to:h.slug},"See speaker details")),r.a.createElement("div",{className:"conference__abstract dotted-corner corner-bottom",dangerouslySetInnerHTML:{__html:n}})))))}},jt9c:function(e,a,t){"use strict";var n=t("Wbzz");a.a=function(e){var a=Object(n.useStaticQuery)("481536195").allMarkdownRemark.nodes.filter((function(a){return!e||a.frontmatter.id===e})).map((function(e){return Object.assign({},e.frontmatter,{slug:e.fields.slug})}));return null==a?void 0:a[0]}},sg5C:function(e,a,t){"use strict";a.a=[{id:"EN",type:"English-speaking track",date:"10 sep, 2021"},{id:"FR",type:"French-speaking track",date:"10 sep, 2021"}]},uQiK:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);a.a=function(e){var a=e.speaker,t=a.github,n=a.twitter;return r.a.createElement("div",{className:"social__list"},t&&r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-github"})),n&&r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"})))}},xUk1:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("TSYQ"),l=t.n(c);a.a=function(e){var a=e.children,t=e.dark,n=void 0!==t&&t,c=e.lined,s=void 0!==c&&c,i=e.h1,o=void 0!==i&&i,m=e.small,u=void 0!==m&&m;return r.a.createElement("div",{className:l()("conf__section-title",{dark:n,small:u})},o?r.a.createElement("h1",{className:"h2 title__layer"},a):r.a.createElement("h2",{className:"title__layer"},a),r.a.createElement("div",{className:l()("h2",{lined:s})},a))}}}]);
//# sourceMappingURL=component---src-components-con-2021-templates-conference-template-tsx-fc2efd503739297724f9.js.map