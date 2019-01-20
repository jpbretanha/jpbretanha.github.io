(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(142),d=a(150),c=a(152),s=a(153),u=a(154),p=l.default.h1.withConfig({displayName:"sc-404__MainTitle",componentId:"lffuyy-0"})(["line-height:1.5;text-align:center;font-size:3rem;"]),m=l.default.div.withConfig({displayName:"sc-404__Icon",componentId:"lffuyy-1"})(["width:150px;margin:0 auto;"]),h=l.default.p.withConfig({displayName:"sc-404__Text",componentId:"lffuyy-2"})(["text-align:center;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(d.a,{location:this.props.location,noCover:!0},o.a.createElement(u.a,{title:"Page Not Found"}),o.a.createElement(c.a,{heroImg:"/images/404.jpeg",title:"404"}),o.a.createElement(s.a,null,o.a.createElement(p,null,"404 Page Not Found"),o.a.createElement(m,null,o.a.createElement("img",{src:"/images/ufo-and-cow.svg",alt:"ufo and cow"})),o.a.createElement(h,null,"Looks like you've followed a broken link or entered a URL that doesn't exist on this site.")))},t}(o.a.Component);t.default=f},143:function(e,t){e.exports={siteTitle:"João Pedro Bretanha",siteDescription:"João Pedro Bretanha portifolio",authorName:"João Pedro Bretanha",twitterUsername:"jpbretanha",githubUsername:"jpbretanha",authorAvatar:"/images/avatar.jpg",authorDescription:"\n    I'm a developer passionate about I do. Always learning new things and focused in the javascript world.\n    Helping people everyday to build apps with React and React Native.",skills:[{name:"HTML",level:100},{name:"CSS",level:85},{name:"Javascript",level:99},{name:"NodeJs",level:70},{name:"React",level:100},{name:"React Native",level:90},{name:"Git",level:80}],jobs:[{company:"Nave",begin:{month:"out",year:"2017"},duration:null,occupation:"Tech Lead",description:"Leading the tech team and developing products with javascript."},{company:"Mariachi Estratégias Digitais",begin:{month:"jul",year:"2016"},duration:"1 year and 8 months",occupation:"Fullstack developer",description:"Developing sites and systems with javascript and PHP."}],social:{twitter:"https://twitter.com/jpbretanha",linkedin:"https://www.linkedin.com/in/jpbretanha",github:"https://github.com/jpbretanha",email:"jpbretanha@gmail.com"},siteUrl:"https://jpbretanha.github.io/portifolio",pathPrefix:"/portifolio",siteCover:"/images/cover.jpeg",googleAnalyticsId:"",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",headerLinks:[{label:"João Pedro Bretanha",url:"/"}]}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(141),d=a.n(l);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(145),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},146:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),d=a(2),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,a){},148:function(e){e.exports={data:{site:{siteMetadata:{title:"João Pedro Bretanha",description:"João Pedro Bretanha portifolio",author:"João Pedro Bretanha"}}}}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(143),d=a.n(l),c=a(7),s=a.n(c),u=a(144),p=a(142),m=a(151),h=p.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"xb4w1r-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303B;"]),f=p.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"xb4w1r-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#25303B;"]),g=p.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"xb4w1r-2"})(["display:flex;flex-direction:row;"]),w=Object(p.default)(u.Link).withConfig({displayName:"header__HeaderLink",componentId:"xb4w1r-3"})(["position:relative;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),y=Object(p.default)(function(e){var t=e.className;return r.a.createElement("a",{className:t,href:"https://github.com/"+d.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"xb4w1r-4"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),b=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=d.a.headerLinks;return r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(g,null,e.map(function(e,t){return r.a.createElement(w,{to:e.url,key:"header-link-"+t},e.label)})),r.a.createElement(y,null)))},t}(r.a.Component),v=(a(147),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{headerLinks:d.a.headerLinks}),r.a.createElement("div",null,t))});v.propTypes={children:o.a.node.isRequired};var x=v;a.d(t,"a",function(){return x})},152:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(144),d=a(143),c=a.n(d),s=a(142),u=s.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"wgu5lg-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=s.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"wgu5lg-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),m=(s.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"wgu5lg-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.title,e.className);return o.a.createElement(u,{className:t},o.a.createElement(p,null))},t}(o.a.Component)),h=Object(s.default)(m).withConfig({displayName:"hero",componentId:"wgu5lg-3"})([""," height:40vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(l.withPrefix)(c.a.siteCover))+");"});a.d(t,"a",function(){return h})},153:function(e,t,a){"use strict";var n=a(142).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-1lcez83-0"})(["position:relative;border-radius:3px;width:80%;max-width:960px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);a.d(t,"a",function(){return n})},154:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),l=a.n(o),d=a(155),c=a.n(d),s=a(144);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=u,m="1025518380";a.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=component---src-pages-404-js-f5375d120ed966d845d8.js.map