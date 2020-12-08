(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(81)),b={id:"getting-started",title:"Getting Started",slug:"/",custom_edit_url:"https://github.com/alejandrohdezma/sbt-github/edit/master/website/docs/getting-started.md"},o={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/target/mdoc/getting-started.md",slug:"/",permalink:"/sbt-github/docs/",editUrl:"https://github.com/alejandrohdezma/sbt-github/edit/master/website/docs/getting-started.md",version:"current",sidebar:"docs",next:{title:"Organization",permalink:"/sbt-github/docs/organization"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Using the plugin",id:"using-the-plugin",children:[]},{value:"Enabled settings",id:"enabled-settings",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Add the following line to your ",Object(i.b)("inlineCode",{parentName:"p"},"plugins.sbt")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala",metastring:'title="project/plugins.sbt"',title:'"project/plugins.sbt"'}),'addSbtPlugin("com.alejandrohdezma" % "sbt-github" % "0.8.2")\n')),Object(i.b)("h2",{id:"using-the-plugin"},"Using the plugin"),Object(i.b)("p",null,"By default, the plugin only downloads the information if an environment variable named ",Object(i.b)("inlineCode",{parentName:"p"},"DOWNLOAD_INFO_FROM_GITHUB")," is present in the system SBT is running (the content of the variable is not important). This behavior can be tweaked by using the ",Object(i.b)("inlineCode",{parentName:"p"},"githubEnabled")," setting:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala",metastring:'title="build.sbt"',title:'"build.sbt"'}),"ThisBuild / githubEnabled := true\n")),Object(i.b)("h2",{id:"enabled-settings"},"Enabled settings"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Setting"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"homepage")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retrieved from the Github repository's information.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"developers")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A list containing the repository collaborators.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retrieved from the Github repository.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"licenses")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retrieved from the Github repository.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"contributors")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The list of repository contributors. This list will not include contributors set in ",Object(i.b)("inlineCode",{parentName:"td"},"excludedContributors"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"collaborators")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The list of repository collaborators who are also ",Object(i.b)("inlineCode",{parentName:"td"},"contributors"),". This list will always include collaborators set in ",Object(i.b)("inlineCode",{parentName:"td"},"extraCollaborators"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"startYear")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Extracted from the repository creation date.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"yearRange")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A year range that goes from ",Object(i.b)("inlineCode",{parentName:"td"},"startYear")," to the current year.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"organizationName")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The repository organization name or the owner's name if ",Object(i.b)("inlineCode",{parentName:"td"},"populateOrganizationWithOwner")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true"),". This value can be overriden to other organization using ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/sbt-github/docs/organization"}),Object(i.b)("inlineCode",{parentName:"a"},"githubOrganization")),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"organizationEmail")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The repository organization email or the owner's email if ",Object(i.b)("inlineCode",{parentName:"td"},"populateOrganizationWithOwner")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true"),". This value can be overriden to other organization using ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/sbt-github/docs/organization"}),Object(i.b)("inlineCode",{parentName:"a"},"githubOrganization")),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"organizationHomepage")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The repository organization homepage or the owner's homepage if ",Object(i.b)("inlineCode",{parentName:"td"},"populateOrganizationWithOwner")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true"),".  This value can be overriden to other organization using ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/sbt-github/docs/organization"}),Object(i.b)("inlineCode",{parentName:"a"},"githubOrganization")),".")))),Object(i.b)("p",null,"There are some integrations available also:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you use ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://scalameta.org/mdoc/"}),"mdoc")," there's also available an ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/sbt-github/docs/sbt-mdoc"}),"mdoc integration module")),Object(i.b)("li",{parentName:"ul"},"If you use ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/sbt/sbt-header"}),"sbt-header")," there's also available an ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/sbt-github/docs/sbt-header"}),"sbt-header integration module"))))}d.isMDXComponent=!0},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,O=s["".concat(b,".").concat(u)]||s[u]||p[u]||i;return n?r.a.createElement(O,o(o({ref:t},c),{},{components:n})):r.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var c=2;c<i;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);