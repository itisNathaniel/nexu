CKEDITOR.dialog.add("colordialog",function(d){function E(){N.getById(o).removeStyle("background-color");j.getContentElement("picker","selectedColor").setValue("");J&&J.removeAttribute("aria-selected");J=null}function c(g){g=g.data.getTarget();var f;"td"==g.getName()&&(f=g.getChild(0).getHtml())&&(J=g,J.setAttribute("aria-selected",!0),j.getContentElement("picker","selectedColor").setValue(f))}function D(g){g=g.replace(/^#/,"");for(var f=0,h=[];2>=f;f++){h[f]=parseInt(g.substr(2*f,2),16)}return"#"+(165<=0.2126*h[0]+0.7152*h[1]+0.0722*h[2]?"000":"fff")}function b(g){!g.name&&(g=new CKEDITOR.event(g));var f=!/mouse/.test(g.name),k=g.data.getTarget(),h;"td"==k.getName()&&(h=k.getChild(0).getHtml())&&(i(g),f?M=k:a=k,f&&(k.setStyle("border-color",D(h)),k.setStyle("border-style","dotted")),N.getById(I).setStyle("background-color",h),N.getById(H).setHtml(h))}function i(g){if(g=!/mouse/.test(g.name)&&M){var f=g.getChild(0).getHtml();g.setStyle("border-color",f);g.setStyle("border-style","solid")}M||a||(N.getById(I).removeStyle("background-color"),N.getById(H).setHtml("&nbsp;"))}function v(g){var f=g.data,l=f.getTarget(),h=f.getKeystroke(),k="rtl"==d.lang.dir;switch(h){case 38:if(g=l.getParent().getPrevious()){g=g.getChild([l.getIndex()]),g.focus()}f.preventDefault();break;case 40:(g=l.getParent().getNext())&&(g=g.getChild([l.getIndex()]))&&1==g.type&&g.focus();f.preventDefault();break;case 32:case 13:c(g);f.preventDefault();break;case k?37:39:(g=l.getNext())?1==g.type&&(g.focus(),f.preventDefault(!0)):(g=l.getParent().getNext())&&(g=g.getChild([0]))&&1==g.type&&(g.focus(),f.preventDefault(!0));break;case k?39:37:if(g=l.getPrevious()){g.focus(),f.preventDefault(!0)}else{if(g=l.getParent().getPrevious()){g=g.getLast(),g.focus(),f.preventDefault(!0)}}}}var e=CKEDITOR.dom.element,N=CKEDITOR.document,L=d.lang.colordialog,j,F={type:"html",html:"&nbsp;"},J,M,a,G=function(f){return CKEDITOR.tools.getNextId()+"_"+f},I=G("hicolor"),H=G("hicolortext"),o=G("selhicolor"),K;(function(){function g(m,s){for(var n=m;n<m+3;n++){var r=new e(K.$.insertRow(-1));r.setAttribute("role","row");for(var q=s;q<s+3;q++){for(var p=0;6>p;p++){f(r.$,"#"+l[q]+l[p]+l[n])}}}}function f(n,q){var m=new e(n.insertCell(-1));m.setAttribute("class","ColorCell");m.setAttribute("tabIndex",-1);m.setAttribute("role","gridcell");m.on("keydown",v);m.on("click",c);m.on("focus",b);m.on("blur",i);m.setStyle("background-color",q);m.setStyle("border","1px solid "+q);m.setStyle("width","14px");m.setStyle("height","14px");var p=G("color_table_cell");m.setAttribute("aria-labelledby",p);m.append(CKEDITOR.dom.element.createFromHtml('<span id="'+p+'" class="cke_voice_label">'+q+"</span>",CKEDITOR.document))}K=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" aria-label="'+L.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+L.options+'</caption><tbody role="presentation"></tbody></table>');K.on("mouseover",b);K.on("mouseout",i);var l="00 33 66 99 cc ff".split(" ");g(0,0);g(3,0);g(0,3);g(3,3);var h=new e(K.$.insertRow(-1));h.setAttribute("role","row");for(var k=0;6>k;k++){f(h.$,"#"+l[k]+l[k]+l[k])}for(k=0;12>k;k++){f(h.$,"#000000")}})();return{title:L.title,minWidth:360,minHeight:220,onLoad:function(){j=this},onHide:function(){E();var f=M.getChild(0).getHtml();M.setStyle("border-color",f);M.setStyle("border-style","solid");N.getById(I).removeStyle("background-color");N.getById(H).setHtml("&nbsp;");M=null},contents:[{id:"picker",label:L.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(K)},focus:function(){(M||this.getElement().getElementsByTag("td").getItem(0)).focus()}},F,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+L.highlight+'</span><div id="'+I+'" style="border: 1px solid; height: 74px; width: 74px;"></div><div id="'+H+'">&nbsp;</div><span>'+L.selected+'</span><div id="'+o+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:L.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 76px;margin-top:4px",onChange:function(){try{N.getById(o).setStyle("background-color",this.getValue())}catch(f){E()}}},F,{type:"button",id:"clear",label:L.clear,onClick:E}]}]}]}]}});