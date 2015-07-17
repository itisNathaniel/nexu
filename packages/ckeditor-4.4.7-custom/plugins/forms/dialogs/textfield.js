CKEDITOR.dialog.add("textfield",function(a){function h(b){b=b.element;var e=this.getValue();e?b.setAttribute(this.id,e):b.removeAttribute(this.id)}function d(b){this.setValue(b.hasAttribute(this.id)&&b.getAttribute(this.id)||"")}var c={email:1,password:1,search:1,tel:1,text:1,url:1};return{title:a.lang.forms.textfield.title,minWidth:350,minHeight:150,onShow:function(){delete this.textField;var b=this.getParentEditor().getSelection().getSelectedElement();!b||"input"!=b.getName()||!c[b.getAttribute("type")]&&b.getAttribute("type")||(this.textField=b,this.setupContent(b))},onOk:function(){var f=this.getParentEditor(),g=this.textField,e=!g;e&&(g=f.document.createElement("input"),g.setAttribute("type","text"));g={element:g};e&&f.insertElement(g.element);this.commitContent(g);e||f.getSelection().selectElement(g.element)},onLoad:function(){this.foreach(function(b){b.getValue&&(b.setup||(b.setup=d),!b.commit)&&(b.commit=h)})},contents:[{id:"info",label:a.lang.forms.textfield.title,title:a.lang.forms.textfield.title,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"_cke_saved_name",type:"text",label:a.lang.forms.textfield.name,"default":"",accessKey:"N",setup:function(b){this.setValue(b.data("cke-saved-name")||b.getAttribute("name")||"")},commit:function(b){b=b.element;this.getValue()?b.data("cke-saved-name",this.getValue()):(b.data("cke-saved-name",!1),b.removeAttribute("name"))}},{id:"value",type:"text",label:a.lang.forms.textfield.value,"default":"",accessKey:"V",commit:function(b){if(CKEDITOR.env.ie&&!this.getValue()){var f=b.element,e=new CKEDITOR.dom.element("input",a.document);f.copyAttributes(e,{value:1});e.replace(f);b.element=e}else{h.call(this,b)}}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"size",type:"text",label:a.lang.forms.textfield.charWidth,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(a.lang.common.validateNumberFailed)},{id:"maxLength",type:"text",label:a.lang.forms.textfield.maxChars,"default":"",accessKey:"M",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(a.lang.common.validateNumberFailed)}],onLoad:function(){CKEDITOR.env.ie7Compat&&this.getElement().setStyle("zoom","100%")}},{id:"type",type:"select",label:a.lang.forms.textfield.type,"default":"text",accessKey:"M",items:[[a.lang.forms.textfield.typeEmail,"email"],[a.lang.forms.textfield.typePass,"password"],[a.lang.forms.textfield.typeSearch,"search"],[a.lang.forms.textfield.typeTel,"tel"],[a.lang.forms.textfield.typeText,"text"],[a.lang.forms.textfield.typeUrl,"url"]],setup:function(b){this.setValue(b.getAttribute("type"))},commit:function(b){var i=b.element;if(CKEDITOR.env.ie){var g=i.getAttribute("type"),f=this.getValue();g!=f&&(g=CKEDITOR.dom.element.createFromHtml('<input type="'+f+'"></input>',a.document),i.copyAttributes(g,{type:1}),g.replace(i),b.element=g)}else{i.setAttribute("type",this.getValue())}}}]}]}});