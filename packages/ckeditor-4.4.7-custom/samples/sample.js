(function(){CKEDITOR.on("instanceReady",function(g){var i=g.editor;g=CKEDITOR.document.$.getElementsByName("ckeditor-sample-required-plugins");var f=g.length?CKEDITOR.dom.element.get(g[0]).getAttribute("content").split(","):[],j=[];if(f.length){for(g=0;g<f.length;g++){i.plugins[f[g]]||j.push("<code>"+f[g]+"</code>")}j.length&&CKEDITOR.dom.element.createFromHtml('<div class="warning"><span>To fully experience this demo, the '+j.join(", ")+" plugin"+(1<j.length?"s are":" is")+" required.</span></div>").insertBefore(i.container)}i=(new CKEDITOR.dom.document(document)).find(".button_icon");for(g=0;g<i.count();g++){var f=i.getItem(g),j=f.getAttribute("data-icon"),h=CKEDITOR.skin.getIconStyle(j,"rtl"==CKEDITOR.lang.dir);f.addClass("cke_button_icon");f.addClass("cke_button__"+j+"_icon");f.setAttribute("style",h);f.setStyle("float","none")}})})();