/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */(function(e,t,n){var r=t._AxaS,i=t.document,s=t.location,o=t.navigator,r=t.AxaS;AxaS=function(){return this instanceof AxaS?AxaS.fn.init():new AxaS.fn.init};AxaS.overlay;AxaS.gender;AxaS.skin;AxaS.hair;AxaS.clothes;AxaS.fn=AxaS.prototype={constructor:AxaS,init:function(){console.log("Hi")},validateFormOne:function(){var t=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:{one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!1,maxlength:140},seven:{required:!0},eight:{required:!0},nine:{required:!0},ten:{required:!0}},messages:{one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",ten:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"},ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("")}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>Hubo un error al contestar la encuesta. Por favor, reporta este error.</p>";AxaS.openAlert(i,s)},cache:!1})}})},validateFormThird:function(){var t=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:{one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!0},ten:{required:!1,maxlength:140}},messages:{one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"},ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("");e(s).fadeOut(300)}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>";AxaS.openAlert(i,s)},cache:!1})}})},validateFormDoublesOne:function(){var t=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:{one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!0},ten:{required:!1,maxlength:140},eleven:{required:!0},twelve:{required:!1,maxlength:140}},messages:{one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",eleven:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"},ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("");e(s).fadeOut(300)}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>";AxaS.openAlert(i,s)},cache:!1})}})},validateFormDoublesTwo:function(){var t=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:{one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!1,maxlength:140},ten:{required:!0},eleven:{required:!1,maxlength:140}},messages:{one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",ten:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"},ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("");e(s).fadeOut(300)}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>";AxaS.openAlert(i,s)},cache:!1})}})},validateFormDoublesThree:function(){var t=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:{one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!0},ten:{required:!1,maxlength:140},eleven:{required:!1,maxlength:140},twelve:{required:!0},thirteen:{required:!1,maxlength:140}},messages:{one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",ten:"Por favor, selecciona una opción",twelve:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"},ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("");e(s).fadeOut(300)}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>";AxaS.openAlert(i,s)},cache:!1})}})},validateGoLiveAmbassadorOne:function(){var t=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:{one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!0},ten:{required:!1,maxlength:255},eleven:{required:!0},twelve:{required:!0},thirteen:{required:!0},fourteen:{required:!1,maxlength:255}},messages:{one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",ten:"Por favor, selecciona una opción",eleven:"Por favor, selecciona una opción",twelve:"Por favor, selecciona una opción",thirteen:"Por favor, selecciona una opción",fourteen:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"},ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("");e(s).fadeOut(300)}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>";AxaS.openAlert(i,s)},cache:!1})}})},validateGoLiveForms:function(t,n){var r=typeof t=="object"?t:{},i=typeof n=="object"?n:{},s=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,t){e.prependTo(t.parent())},rules:r,messages:i,ignore:"textarea",highlight:function(t,n,r){e(t).parent().addClass("error_wrapper")},unhighlight:function(t,n){e(t).parent().removeClass("error_wrapper")},submitHandler:function(t){e(t).ajaxSubmit({beforeSubmit:function(n,r,i){e(".error_indicator").remove();e("textarea").val()==""&&e("textarea").val("Ninguno")},success:function(n,r,i,s){n=e.parseJSON(n);if(!n||n.success!="true"&&n.success!=1){e(".alert_box").addClass("error_message");var o="Error",u="<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>";AxaS.openAlert(o,u)}else{e(".alert_box").addClass("thank_you_message");var o="Gracias",u="<p>Muchas gracias por haber contestado esta encuesta.</p>";AxaS.openAlert(o,u);e('input[type="radio"]').removeAttr("checked");e("textarea").val("");e(s).fadeOut(300)}AxaS.smoothScroll("body")},resetForm:!1,clearForm:!1,error:function(t,n,r){e(".alert_box").addClass("error");var i="Error",s="<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>";AxaS.openAlert(i,s)},cache:!1})}})},doOverlay:function(t,n){var r=typeof t=="string"?e(t):typeof t=="object"?t:e("*"),i=typeof n=="object"?n:{};r.overlay(i)},openAlert:function(t,r){var i=t==""||t==n?"Error":t,s=r==""||r==n?"<p>Hubo un error inesperado.</p>":r;e(".alert_box h2").text(i);e(".alert_box").append(s);e(".alert_trigger").click();e(".alert_box").centerHeight();e(".alert_box").centerWidth();e(".alert_background").fadeIn(50,function(){e(".alert_box").fadeIn(100)})},closeAlert:function(){planPiso.overlay.close()},smoothScroll:function(t,n){_selector=typeof t=="undefined"?"*":t;_selector=typeof _selector=="object"?_selector:e(_selector);_durationInSec=n==""?1e3:n;_durationInSec=typeof _durationInSec=="string"?parseInt(_durationInSec):_durationInSec;_durationInSec=typeof _durationInSec!="number"?parseInt(_durationInSec):_durationInSec;_scrollYOffset=_selector.offset().top;_scrollYOffset=Math.ceil(Number(_scrollYOffset));e.scrollTo(_scrollYOffset,{duration:_durationInSec,axis:"y"})},toggleValue:function(t,r){_selector=typeof t=="undefined"?"*":t;_selector=typeof _selector=="object"?_selector:e(_selector);_valueChange=r==""?400:r;_valueChange=typeof _valueChange=="string"?parseInt(_valueChange):_valueChange;_valueChange=typeof _valueChange!="number"?parseInt(_valueChange):_valueChange;var i;_selector.attr("placeholder")!=n?i=String(_selector.attr("placeholder")).toLowerCase():i=String(_selector.val()).toLowerCase();(i==""||i==_valueChange)&&_selector.css({color:"#aaa"});_selector.on({blur:function(t){_comment=String(e(t.currentTarget).val()).toLowerCase();if(_comment==i||_comment==""){e(t.currentTarget).val("Ninguno").css({color:"#aaa"});return!1}},focus:function(t){_comment=String(e(t.currentTarget).val()).toLowerCase();if(_comment==i){e(t.currentTarget).val("").css({color:"#666"});return!1}}})},inicializeCarrousel:function(t,n,r,i){_selector=typeof t=="undefined"?"*":t;_selector=typeof _selector=="object"?_selector:e(_selector);if(!n||n=={})n={};if(!r||r=={})r={};if(!i||i=={})i={};_selector.scrollable(n).navigator(r).autoscroll(i)},toggleClass:function(t,n){_selector=typeof t=="undefined"?"*":t;_selector=typeof _selector=="object"?_selector:e(_selector);_class=typeof n=="undefined"?".active":n;_class=typeof _class=="string"?_class:String(_class);t.exists()&&_selector.toggleClass(_class)},createAvatarPreview:function(t,n,r,i){_gender=typeof t!="undefined"?t:"";_skin=typeof n!="undefined"?n:"";_hair=typeof r!="undefined"?r:"";_clothes=typeof i!="undefined"?i:"";var s=_gender=="male"?"img/imagenes_avatar/man/":"img/imagenes_avatar/woman/";if(_skin!=""){e("#image_preview .skin").attr("src",s+"skin/"+_skin).addClass("active").fadeIn(300);AxaS.skin=s+"skin/"+_skin}if(_hair!=""){e("#image_preview .hair").attr("src",s+"hair/"+_hair).addClass("active").fadeIn(300);AxaS.hair=s+"hair/"+_hair}if(_clothes!=""){e("#image_preview .clothes").attr("src",s+"clothes/"+_clothes).addClass("active").fadeIn(300);AxaS.clothes=s+"clothes/"+_clothes}AxaS.gender=_gender}};AxaS.fn.init.prototype=AxaS.fn;AxaS=AxaS.fn;t.AxaS=AxaS;e(i).on("ready",function(r){if(e(".loader").exists()){e(".alert_background").fadeOut(300);e(".loader").fadeOut(300)}if(e(".alert_box").exists()){AxaS.doOverlay(e("a.alert_trigger"),{effect:"apple",close:e(".alert_box a.close"),closeOnClick:!0,closeOnEsc:!0,speed:"normal",fixed:!1,onBeforeLoad:function(t){e(".alert_background").height("100%");e(".alert_box").centerWidth();e(".alert_box").centerHeight()},onLoad:function(){e(".alert_background").fadeIn(100)},onBeforeClose:function(){e(".alert_box").fadeOut(10,function(){e(".alert_background").fadeOut(10);e(".alert_box h4").text("");e(".alert_box p").remove();e(".alert_box form").remove();e(".alert_box table").remove();e(".alert_box div").remove();e(".alert_box button").remove();e(".alert_box div.confirm").remove()})},onClose:function(e){}});AxaS.overlay=e(".alert_trigger").data("overlay");e(".alert_background").height(e("body").height())}if(e(".overlay.black").exists()){e(".overlay.black").centerWidth();AxaS.doOverlay("img[rel]",{effect:"apple",mask:{color:"#FFF",loadSpeed:200,opacity:.5},closeOnClick:!1,load:!0,onBeforeClose:function(e){function r(){n=new t.YT.Player("ytplayer",{events:{onReady:i,onStateChange:o}})}function i(e){e.target.playVideo()}function o(e){e.data==YT.PlayerState.PLAYING&&u()}function u(){n.stopVideo()}var n,s=!1}});e(t).on({resize:function(t){e(".overlay.black").centerWidth()},touchstart:function(t){e(".overlay.black").centerWidth()},touchend:function(t){e(".overlay.black").centerWidth()}})}if(e("form").exists()){(e("#first_review").exists()||e("#second_review").exists())&&AxaS.validateFormOne();(e("#third_review").exists()||e("#fourth_review").exists())&&AxaS.validateFormThird();(e("#first_review_ambassador").exists()||e("#first_review_manager_network").exists())&&AxaS.validateFormDoublesOne();(e("#second_review_ambassador").exists()||e("#second_review_manager_network").exists())&&AxaS.validateFormDoublesTwo();(e("#third_review_ambassador").exists()||e("#third_review_manager_network").exists())&&AxaS.validateFormDoublesOne();(e("#fourth_review_ambassador").exists()||e("#fourth_review_manager_network").exists())&&AxaS.validateFormDoublesThree();(e("#first_review_golive_ambassador").exists()||e("#first_review_golive_manager_network").exists()||e("#first_review_golive_colaboradores").exists())&&AxaS.validateGoLiveAmbassadorOne();if(e("#second_review_golive_ambassador").exists()||e("#second_review_golive_manager_network").exists()||e("#second_review_golive_colaboradores").exists()){var i={one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!1,maxlength:255},ten:{required:!0},eleven:{required:!0},twelve:{required:!0},thirteen:{required:!1,maxlength:255}},s={one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",ten:"Por favor, selecciona una opción",eleven:"Por favor, selecciona una opción",twelve:"Por favor, selecciona una opción",thirteen:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"};AxaS.validateGoLiveForms(i,s)}if(e("#third_review_golive_ambassador").exists()||e("#third_review_golive_manager_network").exists()||e("#third_review_golive_colaboradores").exists()){var i={one:{required:!0},two:{required:!0},three:{required:!0},four:{required:!0},five:{required:!0},six:{required:!0},seven:{required:!0},eight:{required:!0},nine:{required:!0},ten:{required:!1,maxlength:255},eleven:{required:!0},twelve:{required:!0},thirteen:{required:!0},fourteen:{required:!1,maxlength:255}},s={one:"Por favor, selecciona una opción",two:"Por favor, selecciona una opción",three:"Por favor, selecciona una opción",four:"Por favor, selecciona una opción",five:"Por favor, selecciona una opción",six:"Por favor, selecciona una opción",seven:"Por favor, selecciona una opción",eight:"Por favor, selecciona una opción",nine:"Por favor, selecciona una opción",ten:"Por favor, selecciona una opción",eleven:"Por favor, selecciona una opción",twelve:"Por favor, selecciona una opción",thirteen:"Por favor, selecciona una opción",fourteen:"Por favor, selecciona una opción",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"};AxaS.validateGoLiveForms(i,s)}}if(e("textarea").exists()){e("textarea").val("Ninguno");AxaS.toggleValue("textarea","Ninguno")}if(e("#one").exists()){AxaS.inicializeCarrousel("#header_scrollable",{speed:1e3,circular:!0,keyboard:!1,next:null,prev:null},{activeClass:"active",navi:".navi",naviItem:"a",indexed:!1},{steps:1,interval:1e4,autoplay:!0,autopause:!0});AxaS.inicializeCarrousel("#tips_scrollable",{speed:1e3,circular:!0,keyboard:!1,next:".next",prev:".prev"},{activeClass:"active",navi:".naviTabs",naviItem:"a",indexed:!0},{steps:1,interval:15e3,autoplay:!0,autopause:!0})}if(e("#avatar").exists()){var o,u,a,f,l,c;e("ul.tabs").tabs("div.panes > div");e(".gender ul li").on("click",function(t){if(e(".gender ul li.active").exists()){AxaS.toggleClass(e(".gender ul li.active"),"active");e(".panes div").not(".panes div.gender").children().hide(300);o="";u="";a="";f="";l="";c="";e("#image_preview img").fadeOut(300,function(){e("#image_preview img").removeClass("active")})}AxaS.toggleClass(e(t.currentTarget),"active");if(e(".panes .gender ul li.men").hasClass("active")){e(".panes div").not(".panes div.gender").children(".male").show(300);o="male"}else if(e(".panes .gender ul li.women").hasClass("active")){e(".panes div").not(".panes div.gender").children(".female").show(300);o="female"}});e(".panes div ul li").on("click",function(t){t.preventDefault();t.stopPropagation();e(t.currentTarget).siblings("li").removeClass("active");e(t.currentTarget).addClass("active");var n=e(t.currentTarget).parent("ul").parent("div").attr("class"),r=e(t.currentTarget).children("img").attr("rel");switch(n){case"skin":u=r;break;case"hair":a=r;break;case"clothes":f=r;break;case"glasses":l=r;break;default:}if(e(t.currentTarget).parent("ul").parent("div").hasClass("gender"))return!1;AxaS.createAvatarPreview(o,u,a,f,l)});e("#image_preview a").on("click",function(r){r.preventDefault();r.stopPropagation();var i={};if(o==""||o==n){alert("Debe seleccionar un género");return!1}i.gender=AxaS.gender;if(u==""||u==n){alert("Debe seleccionar un tipo de piel");return!1}i.skin=AxaS.skin;a!=""&&a!=n&&(i.hair=AxaS.hair);if(f==""||f==n){alert("Debe seleccionar un tipo de ropa");return!1}i.clothes=AxaS.clothes;l!=""&&l!=n&&(i.glasses=AxaS.glasses);e.ajax("../snippets/controller.php?action=obtainAvatar",{beforeSend:function(e,t){},cache:!1,complete:function(e,t){},contentType:"application/x-www-form-urlencoded",converters:{"* text":t.String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},data:i,error:function(e,t,n){},success:function(t,n,r){t=e.parseJSON(t);t.success&&e("#secretIFrame").attr("src","../snippets/controller.php?action=callImage&file="+t.file)},type:"POST"})})}})})(jQuery,window);