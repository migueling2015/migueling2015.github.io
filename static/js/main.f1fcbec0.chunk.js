(this["webpackJsonpdesplegar-listas"]=this["webpackJsonpdesplegar-listas"]||[]).push([[0],{173:function(e,t,a){e.exports=a(358)},178:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(48),s=a.n(c),o=(a(178),a(32)),l=a.n(o),i=a(78),u=a(49),d=a(50),h=a(54),p=a(53),m=function(e){var t=e.jobTitle,a=e.jobCompany,n=e.jobType,c=e.jobM2,s=e.jobStructureType,o=e.jobCity,l=e.jobState;return r.a.createElement("div",{className:"job-listItem-container"},r.a.createElement("div",null,r.a.createElement("h5",null,t," (",a,")")),r.a.createElement("div",null,r.a.createElement("h6",null,s)),r.a.createElement("div",null,r.a.createElement("h6",null,n," (",c," m2)")),r.a.createElement("div",null,r.a.createElement("h6",null,o," (",l,")")))},f=a(35),y=function(e){var t=Math.PI/180,a=e.cx,n=e.cy,c=e.midAngle,s=e.innerRadius,o=e.outerRadius,l=e.startAngle,i=e.endAngle,u=(e.fill,e.payload),d=(e.percent,e.value),h=Math.sin(-t*c),p=Math.cos(-t*c),m=a+(o+10)*p,y=n+(o+10)*h,v=a+(o+30)*p,g=n+(o+30)*h,j=v+22*(p>=0?1:-1),E=g,b=p>=0?"start":"end";return r.a.createElement("g",null,r.a.createElement("text",{x:a,y:n,dy:8,textAnchor:"middle",fill:"#230000"},u.name),r.a.createElement(f.c,{cx:a,cy:n,innerRadius:s,outerRadius:o,startAngle:l,endAngle:i,fill:"#230000"}),r.a.createElement(f.c,{cx:a,cy:n,startAngle:l,endAngle:i,innerRadius:o+7,outerRadius:o+12,fill:"#230000"}),r.a.createElement("path",{d:"M".concat(m,",").concat(y,"L").concat(v,",").concat(g,"L").concat(j,",").concat(E),stroke:"#230000",fill:"none"}),r.a.createElement("circle",{cx:j,cy:E,r:2,fill:"#230000",stroke:"none"}),r.a.createElement("text",{x:j+12*(p>=0?1:-1),y:E,textAnchor:b,fill:"#230000"},"\xc1rea: ".concat(d," m2")))},v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onPieEnter=function(e,t){n.setState({activeIndex:t})},n.state={activeIndex:0,data:e.data},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(f.b,{width:800,height:800},r.a.createElement(f.a,{activeIndex:this.state.activeIndex,activeShape:y,data:this.state.data,cx:400,cy:400,innerRadius:120,outerRadius:180,fill:"#9E1C00",dataKey:"value",onMouseEnter:this.onPieEnter}))}}]),a}(n.PureComponent),g=(a(355),[]),j=function(e){try{g="true"==e.TrimFirst?e.areaByType.slice(0,e.areaByType.length):e.areaByType,console.log(g)}catch(t){console.log(t)}return r.a.createElement("div",{className:"job-list-container"},r.a.createElement("h3",null,e.listTitle),e.IsLoadingChart?r.a.createElement("h2",null,"Cargando..."):r.a.createElement(v,{data:g}),r.a.createElement("ul",null,e.objectToList.map((function(t){return e.filters.indexOf(t.project_type)>-1&&r.a.createElement("li",{key:t.id},r.a.createElement(m,{jobTitle:t.name,jobCompany:t.client_name,jobType:t.project_type,jobM2:t.area,jobStructureType:t.structural_system,jobCity:t.city,jobState:t.state}))}))))},E=(a(356),a(357),"https://www.pradic.co/api/proyectos/areas-totales/?por=sistema-estructural"),b="https://www.pradic.co/api/proyectos/areas-totales/?por=tipo-proyecto",x="https://cors-anywhere.herokuapp.com/",w=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={conteo:0,loading:!0,loading1:!0,loading2:!0,error:null,error1:null,error2:null,data:{},data_areas_1:{},data_areas_2:{},filters1:["Dise\xf1o estructural"],filters2:["Construcci\xf3n","Supervisi\xf3n o interventor\xeda","An\xe1lisis presupuestal","Gerencia"]},e.fetchProjects=Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(x+"https://www.pradic.co/api/proyectos");case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e.setState({loading:!1,data:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.setState({loading:!1,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e.fetchAreas=Object(i.a)(l.a.mark((function t(){var a,n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(x+E);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e.setState({loading1:!1,data_areas_1:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.setState({loading1:!1,error1:t.t0});case 13:return t.prev=13,t.next=16,fetch(x+b);case 16:return r=t.sent,t.next=19,r.json();case 19:c=t.sent,e.setState({loading2:!1,data_areas_2:c}),t.next=26;break;case 23:t.prev=23,t.t1=t.catch(13),e.setState({loading2:!1,error2:t.t1});case 26:case"end":return t.stop()}}),t,null,[[0,10],[13,23]])}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchProjects(),this.fetchAreas()}},{key:"render",value:function(){return this.state.loading?r.a.createElement("h1",null,"Cargando..."):r.a.createElement("div",null,r.a.createElement(j,{listTitle:"Dise\xf1o estructural",areaByType:this.state.data_areas_1,objectToList:this.state.data,filters:this.state.filters1,IsLoadingChart:this.state.loading1,TrimFirst:"false"}),r.a.createElement(j,{listTitle:"Gerencia y Proyectos",areaByType:this.state.data_areas_2,objectToList:this.state.data,filters:this.state.filters2,IsLoadingChart:this.state.loading2,TrimFirst:"false"}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("data")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.f1fcbec0.chunk.js.map