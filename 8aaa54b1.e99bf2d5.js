(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(87)),c={id:"helpers",title:"Helpers"},l={unversionedId:"helpers",id:"helpers",isDocsHomePage:!1,title:"Helpers",description:"Helpers are functions that let you perform basic text transformation within your template.",source:"@site/docs/helpers.md",slug:"/helpers",permalink:"/grafana-dynamictext-panel/helpers",editUrl:"https://github.com/marcusolsson/grafana-dynamictext-panel/edit/main/website/docs/helpers.md",version:"current",sidebar:"someSidebar",previous:{title:"Options",permalink:"/grafana-dynamictext-panel/options"},next:{title:"Recipes",permalink:"/grafana-dynamictext-panel/recipes"}},o=[{value:"<code>{{date}}</code>",id:"date",children:[]},{value:"<code>{{eq}}</code>",id:"eq",children:[]},{value:"<code>{{join}}</code>",id:"join",children:[]},{value:"<code>{{toFixed}}</code>",id:"tofixed",children:[]},{value:"<code>{{variable}}</code>",id:"variable",children:[]}],s={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Helpers are functions that let you perform basic text transformation within your template."),Object(i.b)("h2",{id:"date"},Object(i.b)("inlineCode",{parentName:"h2"},"{{date}}")),Object(i.b)("p",null,"Formats the timestamp in a given field using a date format. Uses ",Object(i.b)("a",{parentName:"p",href:"https://github.com/helpers/helper-date"},"helper-date"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-md"},"\x3c!-- Time: 1598791377556 --\x3e\n{{date Time \"YYYY-MM-DD\"}}\n\x3c!-- results in: '2020-08-30'  --\x3e\n")),Object(i.b)("h2",{id:"eq"},Object(i.b)("inlineCode",{parentName:"h2"},"{{eq}}")),Object(i.b)("p",null,"Compares two strings for equality."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-md"},"\x3c!-- app: foo --\x3e\n{{#if (eq app \"foo\")}}\nSuccess!\n{{/if}}\n\x3c!-- results in: 'Success!'  --\x3e\n")),Object(i.b)("h2",{id:"join"},Object(i.b)("inlineCode",{parentName:"h2"},"{{join}}")),Object(i.b)("p",null,"Join all elements of array into a string using a given separator."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-md"},"\x3c!-- array: ['a', 'b', 'c'] --\x3e\n{{join array \"-\"}}\n\x3c!-- results in: 'a-b-c'  --\x3e\n")),Object(i.b)("h2",{id:"tofixed"},Object(i.b)("inlineCode",{parentName:"h2"},"{{toFixed}}")),Object(i.b)("p",null,"Formats the given number using fixed-point notation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-md"},"\x3c!-- Value: 1.1234 --\x3e\n{{toFixed Value 2}}\n\x3c!-- results in: '1.12' --\x3e\n")),Object(i.b)("h2",{id:"variable"},Object(i.b)("inlineCode",{parentName:"h2"},"{{variable}}")),Object(i.b)("p",null,"Returns a string array of the currently selected values for a certain ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variable"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-md"},"{{variable \"hostname\"}}\n\x3c!-- results in: ['server1', 'server2', 'server3']  --\x3e\n")))}p.isMDXComponent=!0}}]);