(function(){var a=function(U,P){function o(){var f=arguments,c=this.getContentElement("advanced","txtdlgGenStyle");c&&c.commit.apply(c,f);this.foreach(function(g){g.commit&&"txtdlgGenStyle"!=g.id&&g.commit.apply(g,f)})}function Q(h){if(!j){j=1;var f=this.getDialog(),m=f.imageElement;if(m){this.commit(T,m);h=[].concat(h);for(var l=h.length,n,k=0;k<l;k++){(n=f.getContentElement.apply(f,h[k].split(":")))&&n.setup(T,m)}}j=0}}var T=1,O=/^\s*(\d+)((px)|\%)?\s*$/i,d=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,I=/^\d+px$/,b=function(){var f=this.getValue(),c=this.getDialog(),g=f.match(O);g&&("%"==g[2]&&N(c,!1),f=g[1]);c.lockRatio&&(g=c.originalElement,"true"==g.getCustomData("isReady")&&("txtHeight"==this.id?(f&&"0"!=f&&(f=Math.round(f/g.$.height*g.$.width)),isNaN(f)||c.setValueOf("info","txtWidth",f)):(f&&"0"!=f&&(f=Math.round(f/g.$.width*g.$.height)),isNaN(f)||c.setValueOf("info","txtHeight",f))));S(c)},S=function(c){if(!c.originalElement||!c.preview){return 1}c.commitContent(4,c.preview);return 0},j,N=function(h,g){if(!h.getContentElement("info","ratioLock")){return null}var m=h.originalElement;if(!m){return null}if("check"==g){if(!h.userlockRatio&&"true"==m.getCustomData("isReady")){var l=h.getValueOf("info","txtWidth"),n=h.getValueOf("info","txtHeight"),m=1000*m.$.width/m.$.height,k=1000*l/n;h.lockRatio=!1;l||n?!isNaN(m)&&!isNaN(k)&&Math.round(m)==Math.round(k)&&(h.lockRatio=!0):h.lockRatio=!0}}else{void 0!==g?h.lockRatio=g:(h.userlockRatio=1,h.lockRatio=!h.lockRatio)}l=CKEDITOR.document.getById(G);h.lockRatio?l.removeClass("cke_btn_unlocked"):l.addClass("cke_btn_unlocked");l.setAttribute("aria-checked",h.lockRatio);CKEDITOR.env.hc&&l.getChild(0).setHtml(h.lockRatio?CKEDITOR.env.ie?"\u25a0":"\u25a3":CKEDITOR.env.ie?"\u25a1":"\u25a2");return h.lockRatio},M=function(f){var c=f.originalElement;if("true"==c.getCustomData("isReady")){var h=f.getContentElement("info","txtWidth"),g=f.getContentElement("info","txtHeight");h&&h.setValue(c.$.width);g&&g.setValue(c.$.height)}S(f)},K=function(k,f){function p(g,c){var h=g.match(O);return h?("%"==h[2]&&(h[1]+="%",N(n,!1)),h[1]):c}if(k==T){var n=this.getDialog(),q="",m="txtWidth"==this.id?"width":"height",l=f.getAttribute(m);l&&(q=p(l,q));q=p(f.getStyle(m),q);this.setValue(q)}},i,E=function(){var f=this.originalElement,c=CKEDITOR.document.getById(L);f.setCustomData("isReady","true");f.removeListener("load",E);f.removeListener("error",R);f.removeListener("abort",R);c&&c.setStyle("display","none");this.dontResetSize||M(this);this.firstLoad&&CKEDITOR.tools.setTimeout(function(){N(this,"check")},0,this);this.dontResetSize=this.firstLoad=!1;S(this)},R=function(){var f=this.originalElement,c=CKEDITOR.document.getById(L);f.removeListener("load",E);f.removeListener("error",R);f.removeListener("abort",R);f=CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path+"images/noimage.png");this.preview&&this.preview.setAttribute("src",f);c&&c.setStyle("display","none");N(this,!1)},J=function(c){return CKEDITOR.tools.getNextId()+"_"+c},G=J("btnLockSizes"),e=J("btnResetSize"),L=J("ImagePreviewLoader"),F=J("previewLink"),H=J("previewImage");return{title:U.lang.image["image"==P?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){this.linkEditMode=this.imageEditMode=this.linkElement=this.imageElement=!1;this.lockRatio=!0;this.userlockRatio=0;this.dontResetSize=!1;this.firstLoad=!0;this.addLink=!1;var h=this.getParentEditor(),f=h.getSelection(),l=(f=f&&f.getSelectedElement())&&h.elementPath(f).contains("a",1),m=CKEDITOR.document.getById(L);m&&m.setStyle("display","none");i=new CKEDITOR.dom.element("img",h.document);this.preview=CKEDITOR.document.getById(H);this.originalElement=h.document.createElement("img");this.originalElement.setAttribute("alt","");this.originalElement.setCustomData("isReady","false");if(l){this.linkElement=l;this.linkEditMode=!0;m=l.getChildren();if(1==m.count()){var k=m.getItem(0).getName();if("img"==k||"input"==k){this.imageElement=m.getItem(0),"img"==this.imageElement.getName()?this.imageEditMode="img":"input"==this.imageElement.getName()&&(this.imageEditMode="input")}}"image"==P&&this.setupContent(2,l)}if(this.customImageElement){this.imageEditMode="img",this.imageElement=this.customImageElement,delete this.customImageElement}else{if(f&&"img"==f.getName()&&!f.data("cke-realelement")||f&&"input"==f.getName()&&"image"==f.getAttribute("type")){this.imageEditMode=f.getName(),this.imageElement=f}}this.imageEditMode?(this.cleanImageElement=this.imageElement,this.imageElement=this.cleanImageElement.clone(!0,!0),this.setupContent(T,this.imageElement)):this.imageElement=h.document.createElement("img");N(this,!0);CKEDITOR.tools.trim(this.getValueOf("info","txtUrl"))||(this.preview.removeAttribute("src"),this.preview.setStyle("display","none"))},onOk:function(){if(this.imageEditMode){var c=this.imageEditMode;"image"==P&&"input"==c&&confirm(U.lang.image.button2Img)?(this.imageElement=U.document.createElement("img"),this.imageElement.setAttribute("alt",""),U.insertElement(this.imageElement)):"image"!=P&&"img"==c&&confirm(U.lang.image.img2Button)?(this.imageElement=U.document.createElement("input"),this.imageElement.setAttributes({type:"image",alt:""}),U.insertElement(this.imageElement)):(this.imageElement=this.cleanImageElement,delete this.cleanImageElement)}else{"image"==P?this.imageElement=U.document.createElement("img"):(this.imageElement=U.document.createElement("input"),this.imageElement.setAttribute("type","image")),this.imageElement.setAttribute("alt","")}this.linkEditMode||(this.linkElement=U.document.createElement("a"));this.commitContent(T,this.imageElement);this.commitContent(2,this.linkElement);this.imageElement.getAttribute("style")||this.imageElement.removeAttribute("style");this.imageEditMode?!this.linkEditMode&&this.addLink?(U.insertElement(this.linkElement),this.imageElement.appendTo(this.linkElement)):this.linkEditMode&&!this.addLink&&(U.getSelection().selectElement(this.linkElement),U.insertElement(this.imageElement)):this.addLink?this.linkEditMode?U.insertElement(this.imageElement):(U.insertElement(this.linkElement),this.linkElement.append(this.imageElement,!1)):U.insertElement(this.imageElement)},onLoad:function(){"image"!=P&&this.hidePage("Link");var c=this._.element.getDocument();this.getContentElement("info","ratioLock")&&(this.addFocusable(c.getById(e),5),this.addFocusable(c.getById(G),5));this.commitContent=o},onHide:function(){this.preview&&this.commitContent(8,this.preview);this.originalElement&&(this.originalElement.removeListener("load",E),this.originalElement.removeListener("error",R),this.originalElement.removeListener("abort",R),this.originalElement.remove(),this.originalElement=!1);delete this.imageElement},contents:[{id:"info",label:U.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:U.lang.common.url,required:!0,onChange:function(){var g=this.getDialog(),f=this.getValue();if(0<f.length){var g=this.getDialog(),h=g.originalElement;g.preview&&g.preview.removeStyle("display");h.setCustomData("isReady","false");var k=CKEDITOR.document.getById(L);k&&k.setStyle("display","");h.on("load",E,g);h.on("error",R,g);h.on("abort",R,g);h.setAttribute("src",f);g.preview&&(i.setAttribute("src",f),g.preview.setAttribute("src",i.$.src),S(g))}else{g.preview&&(g.preview.removeAttribute("src"),g.preview.setStyle("display","none"))}},setup:function(f,c){if(f==T){var g=c.data("cke-saved-src")||c.getAttribute("src");this.getDialog().dontResetSize=!0;this.setValue(g);this.setInitValue()}},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())?(c.data("cke-saved-src",this.getValue()),c.setAttribute("src",this.getValue())):8==f&&(c.setAttribute("src",""),c.removeAttribute("src"))},validate:CKEDITOR.dialog.validate.notEmpty(U.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:14px;",align:"center",label:U.lang.common.browseServer,hidden:!0,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:U.lang.image.alt,accessKey:"T","default":"",onChange:function(){S(this.getDialog())},setup:function(f,c){f==T&&this.setValue(c.getAttribute("alt"))},commit:function(f,c){f==T?(this.getValue()||this.isChanged())&&c.setAttribute("alt",this.getValue()):4==f?c.setAttribute("alt",this.getValue()):8==f&&c.removeAttribute("alt")}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",requiredContent:"img{width,height}",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"45px",id:"txtWidth",label:U.lang.common.width,onKeyUp:b,onChange:function(){Q.call(this,"advanced:txtdlgGenStyle")},validate:function(){var c=this.getValue().match(d);(c=!(!c||0===parseInt(c[1],10)))||alert(U.lang.common.invalidWidth);return c},setup:K,commit:function(f,c,h){var g=this.getValue();f==T?(g&&U.activeFilter.check("img{width,height}")?c.setStyle("width",CKEDITOR.tools.cssLength(g)):c.removeStyle("width"),!h&&c.removeAttribute("width")):4==f?g.match(O)?c.setStyle("width",CKEDITOR.tools.cssLength(g)):(f=this.getDialog().originalElement,"true"==f.getCustomData("isReady")&&c.setStyle("width",f.$.width+"px")):8==f&&(c.removeAttribute("width"),c.removeStyle("width"))}},{type:"text",id:"txtHeight",width:"45px",label:U.lang.common.height,onKeyUp:b,onChange:function(){Q.call(this,"advanced:txtdlgGenStyle")},validate:function(){var c=this.getValue().match(d);(c=!(!c||0===parseInt(c[1],10)))||alert(U.lang.common.invalidHeight);return c},setup:K,commit:function(f,c,h){var g=this.getValue();f==T?(g&&U.activeFilter.check("img{width,height}")?c.setStyle("height",CKEDITOR.tools.cssLength(g)):c.removeStyle("height"),!h&&c.removeAttribute("height")):4==f?g.match(O)?c.setStyle("height",CKEDITOR.tools.cssLength(g)):(f=this.getDialog().originalElement,"true"==f.getCustomData("isReady")&&c.setStyle("height",f.$.height+"px")):8==f&&(c.removeAttribute("height"),c.removeStyle("height"))}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var f=CKEDITOR.document.getById(e),c=CKEDITOR.document.getById(G);f&&(f.on("click",function(g){M(this);g.data&&g.data.preventDefault()},this.getDialog()),f.on("mouseover",function(){this.addClass("cke_btn_over")},f),f.on("mouseout",function(){this.removeClass("cke_btn_over")},f));c&&(c.on("click",function(h){N(this);var g=this.originalElement,k=this.getValueOf("info","txtWidth");"true"==g.getCustomData("isReady")&&k&&(g=g.$.height/g.$.width*k,isNaN(g)||(this.setValueOf("info","txtHeight",Math.round(g)),S(this)));h.data&&h.data.preventDefault()},this.getDialog()),c.on("mouseover",function(){this.addClass("cke_btn_over")},c),c.on("mouseout",function(){this.removeClass("cke_btn_over")},c))},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+U.lang.image.lockRatio+'" class="cke_btn_locked" id="'+G+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+U.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+U.lang.image.resetSize+'" class="cke_btn_reset" id="'+e+'" role="button"><span class="cke_label">'+U.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",requiredContent:"img{border-width}",width:"60px",label:U.lang.image.border,"default":"",onKeyUp:function(){S(this.getDialog())},onChange:function(){Q.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(U.lang.image.validateBorder),setup:function(f,c){if(f==T){var g;g=(g=(g=c.getStyle("border-width"))&&g.match(/^(\d+px)(?: \1 \1 \1)?$/))&&parseInt(g[1],10);isNaN(parseInt(g,10))&&(g=c.getAttribute("border"));this.setValue(g)}},commit:function(g,f,h){var k=parseInt(this.getValue(),10);g==T||4==g?(isNaN(k)?!k&&this.isChanged()&&f.removeStyle("border"):(f.setStyle("border-width",CKEDITOR.tools.cssLength(k)),f.setStyle("border-style","solid")),!h&&g==T&&f.removeAttribute("border")):8==g&&(f.removeAttribute("border"),f.removeStyle("border-width"),f.removeStyle("border-style"),f.removeStyle("border-color"))}},{type:"text",id:"txtHSpace",requiredContent:"img{margin-left,margin-right}",width:"60px",label:U.lang.image.hSpace,"default":"",onKeyUp:function(){S(this.getDialog())},onChange:function(){Q.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(U.lang.image.validateHSpace),setup:function(g,f){if(g==T){var h,k;h=f.getStyle("margin-left");k=f.getStyle("margin-right");h=h&&h.match(I);k=k&&k.match(I);h=parseInt(h,10);k=parseInt(k,10);h=h==k&&h;isNaN(parseInt(h,10))&&(h=f.getAttribute("hspace"));this.setValue(h)}},commit:function(g,f,h){var k=parseInt(this.getValue(),10);g==T||4==g?(isNaN(k)?!k&&this.isChanged()&&(f.removeStyle("margin-left"),f.removeStyle("margin-right")):(f.setStyle("margin-left",CKEDITOR.tools.cssLength(k)),f.setStyle("margin-right",CKEDITOR.tools.cssLength(k))),!h&&g==T&&f.removeAttribute("hspace")):8==g&&(f.removeAttribute("hspace"),f.removeStyle("margin-left"),f.removeStyle("margin-right"))}},{type:"text",id:"txtVSpace",requiredContent:"img{margin-top,margin-bottom}",width:"60px",label:U.lang.image.vSpace,"default":"",onKeyUp:function(){S(this.getDialog())},onChange:function(){Q.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(U.lang.image.validateVSpace),setup:function(g,f){if(g==T){var k,h;k=f.getStyle("margin-top");h=f.getStyle("margin-bottom");k=k&&k.match(I);h=h&&h.match(I);k=parseInt(k,10);h=parseInt(h,10);k=k==h&&k;isNaN(parseInt(k,10))&&(k=f.getAttribute("vspace"));this.setValue(k)}},commit:function(g,f,k){var h=parseInt(this.getValue(),10);g==T||4==g?(isNaN(h)?!h&&this.isChanged()&&(f.removeStyle("margin-top"),f.removeStyle("margin-bottom")):(f.setStyle("margin-top",CKEDITOR.tools.cssLength(h)),f.setStyle("margin-bottom",CKEDITOR.tools.cssLength(h))),!k&&g==T&&f.removeAttribute("vspace")):8==g&&(f.removeAttribute("vspace"),f.removeStyle("margin-top"),f.removeStyle("margin-bottom"))}},{id:"cmbAlign",requiredContent:"img{float}",type:"select",widths:["35%","65%"],style:"width:90px",label:U.lang.common.align,"default":"",items:[[U.lang.common.notSet,""],[U.lang.common.alignLeft,"left"],[U.lang.common.alignRight,"right"]],onChange:function(){S(this.getDialog());Q.call(this,"advanced:txtdlgGenStyle")},setup:function(g,f){if(g==T){var h=f.getStyle("float");switch(h){case"inherit":case"none":h=""}!h&&(h=(f.getAttribute("align")||"").toLowerCase());this.setValue(h)}},commit:function(g,f,k){var h=this.getValue();if(g==T||4==g){if(h?f.setStyle("float",h):f.removeStyle("float"),!k&&g==T){switch(h=(f.getAttribute("align")||"").toLowerCase(),h){case"left":case"right":f.removeAttribute("align")}}}else{8==g&&f.removeStyle("float")}}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(U.lang.common.preview)+'<br><div id="'+L+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+F+'"><img id="'+H+'" alt="" /></a>'+(U.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",requiredContent:"a[href]",label:U.lang.image.linkTab,padding:0,elements:[{id:"txtUrl",type:"text",label:U.lang.common.url,style:"width: 100%","default":"",setup:function(g,f){if(2==g){var h=f.data("cke-saved-href");h||(h=f.getAttribute("href"));this.setValue(h)}},commit:function(f,c){if(2==f&&(this.getValue()||this.isChanged())){var g=this.getValue();c.data("cke-saved-href",g);c.setAttribute("href",g);if(this.getValue()||!U.config.image_removeLinkByEmptyURL){this.getDialog().addLink=!0}}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:U.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:!0,label:U.lang.common.browseServer},{id:"cmbTarget",type:"select",requiredContent:"a[target]",label:U.lang.common.target,"default":"",items:[[U.lang.common.notSet,""],[U.lang.common.targetNew,"_blank"],[U.lang.common.targetTop,"_top"],[U.lang.common.targetSelf,"_self"],[U.lang.common.targetParent,"_parent"]],setup:function(f,c){2==f&&this.setValue(c.getAttribute("target")||"")},commit:function(f,c){2==f&&(this.getValue()||this.isChanged())&&c.setAttribute("target",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:U.lang.image.upload,elements:[{type:"file",id:"upload",label:U.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:U.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:U.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",requiredContent:"img[id]",label:U.lang.common.id,setup:function(f,c){f==T&&this.setValue(c.getAttribute("id"))},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())&&c.setAttribute("id",this.getValue())}},{id:"cmbLangDir",type:"select",requiredContent:"img[dir]",style:"width : 100px;",label:U.lang.common.langDir,"default":"",items:[[U.lang.common.notSet,""],[U.lang.common.langDirLtr,"ltr"],[U.lang.common.langDirRtl,"rtl"]],setup:function(f,c){f==T&&this.setValue(c.getAttribute("dir"))},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())&&c.setAttribute("dir",this.getValue())}},{type:"text",id:"txtLangCode",requiredContent:"img[lang]",label:U.lang.common.langCode,"default":"",setup:function(f,c){f==T&&this.setValue(c.getAttribute("lang"))},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())&&c.setAttribute("lang",this.getValue())}}]},{type:"text",id:"txtGenLongDescr",requiredContent:"img[longdesc]",label:U.lang.common.longDescr,setup:function(f,c){f==T&&this.setValue(c.getAttribute("longDesc"))},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())&&c.setAttribute("longDesc",this.getValue())}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",requiredContent:"img(cke-xyz)",label:U.lang.common.cssClass,"default":"",setup:function(f,c){f==T&&this.setValue(c.getAttribute("class"))},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())&&c.setAttribute("class",this.getValue())}},{type:"text",id:"txtGenTitle",requiredContent:"img[title]",label:U.lang.common.advisoryTitle,"default":"",onChange:function(){S(this.getDialog())},setup:function(f,c){f==T&&this.setValue(c.getAttribute("title"))},commit:function(f,c){f==T?(this.getValue()||this.isChanged())&&c.setAttribute("title",this.getValue()):4==f?c.setAttribute("title",this.getValue()):8==f&&c.removeAttribute("title")}}]},{type:"text",id:"txtdlgGenStyle",requiredContent:"img{cke-xyz}",label:U.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(U.lang.common.invalidInlineStyle),"default":"",setup:function(g,f){if(g==T){var k=f.getAttribute("style");!k&&f.$.style.cssText&&(k=f.$.style.cssText);this.setValue(k);var h=f.$.style.height,k=f.$.style.width,h=(h?h:"").match(O),k=(k?k:"").match(O);this.attributesInStyle={height:!!h,width:!!k}}},onChange:function(){Q.call(this,"info:cmbFloat info:cmbAlign info:txtVSpace info:txtHSpace info:txtBorder info:txtWidth info:txtHeight".split(" "));S(this)},commit:function(f,c){f==T&&(this.getValue()||this.isChanged())&&c.setAttribute("style",this.getValue())}}]}]}};CKEDITOR.dialog.add("image",function(b){return a(b,"image")});CKEDITOR.dialog.add("imagebutton",function(b){return a(b,"imagebutton")})})();