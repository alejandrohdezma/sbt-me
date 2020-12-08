(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(81)),i={id:"sbt-mdoc",title:"Integration with `sbt-mdoc`",custom_edit_url:"https://github.com/alejandrohdezma/sbt-github/edit/master/website/docs/sbt-mdoc.md"},b={unversionedId:"sbt-mdoc",id:"sbt-mdoc",isDocsHomePage:!1,title:"Integration with `sbt-mdoc`",description:"If you use mdoc for creating your documentation you can benefit from our mdoc module which provides several bunches of mdocVariables already pre-filled with values extracted from Github to any project that adds the MdocPlugin to replace them in the documentation. To use it, just add the following line to your plugins.sbt file",source:"@site/target/mdoc/sbt-mdoc.md",slug:"/sbt-mdoc",permalink:"/sbt-github/docs/sbt-mdoc",editUrl:"https://github.com/alejandrohdezma/sbt-github/edit/master/website/docs/sbt-mdoc.md",version:"current",sidebar:"docs",previous:{title:"Github Token",permalink:"/sbt-github/docs/github-token"},next:{title:"Integration with `sbt-header`",permalink:"/sbt-github/docs/sbt-header"}},c=[],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scalameta.org/mdoc/"}),"mdoc")," for creating your documentation you can benefit from our mdoc module which provides several bunches of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scalameta.org/mdoc/docs/installation.html#sbt"}),Object(o.b)("inlineCode",{parentName:"a"},"mdocVariables"))," already pre-filled with values extracted from Github to any project that adds the ",Object(o.b)("inlineCode",{parentName:"p"},"MdocPlugin")," to replace them in the documentation. To use it, just add the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},"plugins.sbt")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala",metastring:'title="project/plugins.sbt"',title:'"project/plugins.sbt"'}),'addSbtPlugin("com.alejandrohdezma" % "sbt-github-mdoc" % "0.8.2")\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Important!")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Important! So we don't force a version of mdoc, it is requested as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"}),'"Provided"')," dependency so you'll need to provide your own version of mdoc following ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scalameta.org/mdoc/docs/installation.html"}),"its own tutorial"),"."))),Object(o.b)("p",null,"The plugin provides the following ",Object(o.b)("inlineCode",{parentName:"p"},"mdocVariables"),":"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Content"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VERSION")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of the ",Object(o.b)("inlineCode",{parentName:"td"},"version")," setting by removing the timestamp part (this behavior can be disabled using the ",Object(o.b)("inlineCode",{parentName:"td"},"removeVersionTimestampInMdoc")," setting)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"CONTRIBUTORS")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of the ",Object(o.b)("inlineCode",{parentName:"td"},"contributors")," setting, containing the list of repository contributors in markdown format")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"COLLABORATORS")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of the ",Object(o.b)("inlineCode",{parentName:"td"},"collaborators")," setting, containing the list of repository collaborators in markdown format")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"NAME")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of ",Object(o.b)("inlineCode",{parentName:"td"},"displayName"),". Defaults to repository's name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"DESCRIPTION")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of ",Object(o.b)("inlineCode",{parentName:"td"},"description"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"LICENSE")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the license's name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"ORG_NAME")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of ",Object(o.b)("inlineCode",{parentName:"td"},"organizationName")," setting (Github's organization name or owner's in case organization is empty and ",Object(o.b)("inlineCode",{parentName:"td"},"populateOrganizationWithOwner")," is ",Object(o.b)("inlineCode",{parentName:"td"},"true"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"ORG_EMAIL")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of ",Object(o.b)("inlineCode",{parentName:"td"},"organizationEmail")," setting (Github's organization email, or owner's in case organization is empty and ",Object(o.b)("inlineCode",{parentName:"td"},"populateOrganizationWithOwner")," is ",Object(o.b)("inlineCode",{parentName:"td"},"true"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"ORG_URL")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of ",Object(o.b)("inlineCode",{parentName:"td"},"organizationHomepage")," setting (Github's organization homepage or owner's in case organization is empty and ",Object(o.b)("inlineCode",{parentName:"td"},"populateOrganizationWithOwner")," is ",Object(o.b)("inlineCode",{parentName:"td"},"true"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"REPO")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Set to the repository\'s path: "owner/repo"')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"START_YEAR")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of the ",Object(o.b)("inlineCode",{parentName:"td"},"startYear")," setting")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"YEAR_RANGE")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of the ",Object(o.b)("inlineCode",{parentName:"td"},"yearRange")," setting")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"COPYRIGHT_OWNER")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to the value of ",Object(o.b)("inlineCode",{parentName:"td"},"ORG_NAME <ORG_URL>")," if ",Object(o.b)("inlineCode",{parentName:"td"},"ORG_URL")," is present or just ",Object(o.b)("inlineCode",{parentName:"td"},"ORG_NAME")," in case ",Object(o.b)("inlineCode",{parentName:"td"},"ORG_URL")," is empty")))))}d.isMDXComponent=!0},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(a),s=n,O=m["".concat(i,".").concat(s)]||m[s]||p[s]||o;return a?r.a.createElement(O,b(b({ref:t},l),{},{components:a})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);