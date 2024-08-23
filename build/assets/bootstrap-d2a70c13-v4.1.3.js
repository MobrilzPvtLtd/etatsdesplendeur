+function(t){function a(){var p=document.createElement("bootstrap"),u={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in u)if(p.style[i]!==void 0)return{end:u[i]};return!1}t.fn.emulateTransitionEnd=function(p){var u=!1,i=this;t(this).one("bsTransitionEnd",function(){u=!0});var e=function(){u||t(i).trigger(t.support.transition.end)};return setTimeout(e,p),this},t(function(){t.support.transition=a(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(p){if(t(p.target).is(this))return p.handleObj.handler.apply(this,arguments)}})})}(jQuery);+function(t){var a='[data-dismiss="alert"]',p=function(e){t(e).on("click",a,this.close)};p.VERSION="3.4.1",p.TRANSITION_DURATION=150,p.prototype.close=function(e){var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),s=s==="#"?[]:s;var o=t(document).find(s);if(e&&e.preventDefault(),o.length||(o=n.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented())return;o.removeClass("in");function h(){o.detach().trigger("closed.bs.alert").remove()}t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",h).emulateTransitionEnd(p.TRANSITION_DURATION):h()};function u(e){return this.each(function(){var n=t(this),s=n.data("bs.alert");s||n.data("bs.alert",s=new p(this)),typeof e=="string"&&s[e].call(n)})}var i=t.fn.alert;t.fn.alert=u,t.fn.alert.Constructor=p,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.bs.alert.data-api",a,p.prototype.close)}(jQuery);+function(t){var a=function(i,e){this.$element=t(i),this.options=t.extend({},a.DEFAULTS,e),this.isLoading=!1};a.VERSION="3.4.1",a.DEFAULTS={loadingText:"loading..."},a.prototype.setState=function(i){var e="disabled",n=this.$element,s=n.is("input")?"val":"html",o=n.data();i+="Text",o.resetText==null&&n.data("resetText",n[s]()),setTimeout(t.proxy(function(){n[s](o[i]==null?this.options[i]:o[i]),i=="loadingText"?(this.isLoading=!0,n.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,n.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},a.prototype.toggle=function(){var i=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");n.prop("type")=="radio"?(n.prop("checked")&&(i=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):n.prop("type")=="checkbox"&&(n.prop("checked")!==this.$element.hasClass("active")&&(i=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),i&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};function p(i){return this.each(function(){var e=t(this),n=e.data("bs.button"),s=typeof i=="object"&&i;n||e.data("bs.button",n=new a(this,s)),i=="toggle"?n.toggle():i&&n.setState(i)})}var u=t.fn.button;t.fn.button=p,t.fn.button.Constructor=a,t.fn.button.noConflict=function(){return t.fn.button=u,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var e=t(i.target).closest(".btn");p.call(e,"toggle"),t(i.target).is('input[type="radio"], input[type="checkbox"]')||(i.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(i){t(i.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(i.type))})}(jQuery);+function(t){var a=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.options.pause=="hover"&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};a.VERSION="3.4.1",a.TRANSITION_DURATION=600,a.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},a.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},a.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},a.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},a.prototype.getItemForDirection=function(e,n){var s=this.getItemIndex(n),o=e=="prev"&&s===0||e=="next"&&s==this.$items.length-1;if(o&&!this.options.wrap)return n;var h=e=="prev"?-1:1,f=(s+h)%this.$items.length;return this.$items.eq(f)},a.prototype.to=function(e){var n=this,s=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):s==e?this.pause().cycle():this.slide(e>s?"next":"prev",this.$items.eq(e))},a.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},a.prototype.next=function(){if(!this.sliding)return this.slide("next")},a.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},a.prototype.slide=function(e,n){var s=this.$element.find(".item.active"),o=n||this.getItemForDirection(e,s),h=this.interval,f=e=="next"?"left":"right",b=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=t.Event("slide.bs.carousel",{relatedTarget:r,direction:f});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,h&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var d=t(this.$indicators.children()[this.getItemIndex(o)]);d&&d.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:r,direction:f});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),typeof o=="object"&&o.length&&o[0].offsetWidth,s.addClass(f),o.addClass(f),s.one("bsTransitionEnd",function(){o.removeClass([e,f].join(" ")).addClass("active"),s.removeClass(["active",f].join(" ")),b.sliding=!1,setTimeout(function(){b.$element.trigger(c)},0)}).emulateTransitionEnd(a.TRANSITION_DURATION)):(s.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(c)),h&&this.cycle(),this}};function p(e){return this.each(function(){var n=t(this),s=n.data("bs.carousel"),o=t.extend({},a.DEFAULTS,n.data(),typeof e=="object"&&e),h=typeof e=="string"?e:o.slide;s||n.data("bs.carousel",s=new a(this,o)),typeof e=="number"?s.to(e):h?s[h]():o.interval&&s.pause().cycle()})}var u=t.fn.carousel;t.fn.carousel=p,t.fn.carousel.Constructor=a,t.fn.carousel.noConflict=function(){return t.fn.carousel=u,this};var i=function(e){var n=t(this),s=n.attr("href");s&&(s=s.replace(/.*(?=#[^\s]+$)/,""));var o=n.attr("data-target")||s,h=t(document).find(o);if(h.hasClass("carousel")){var f=t.extend({},h.data(),n.data()),b=n.attr("data-slide-to");b&&(f.interval=!1),p.call(h,f),b&&h.data("bs.carousel").to(b),e.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",i).on("click.bs.carousel.data-api","[data-slide-to]",i),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);p.call(e,e.data())})})}(jQuery);+function(t){var a=function(e,n){this.$element=t(e),this.options=t.extend({},a.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};a.VERSION="3.4.1",a.TRANSITION_DURATION=350,a.DEFAULTS={toggle:!0},a.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},a.prototype.show=function(){if(!(this.transitioning||this.$element.hasClass("in"))){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(u.call(n,"hide"),e||n.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return h.call(this);var f=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(h,this)).emulateTransitionEnd(a.TRANSITION_DURATION)[o](this.$element[0][f])}}}},a.prototype.hide=function(){if(!(this.transitioning||!this.$element.hasClass("in"))){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return s.call(this);this.$element[n](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(a.TRANSITION_DURATION)}}},a.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},a.prototype.getParent=function(){return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(e,n){var s=t(n);this.addAriaAndCollapsedClass(p(s),s)},this)).end()},a.prototype.addAriaAndCollapsedClass=function(e,n){var s=e.hasClass("in");e.attr("aria-expanded",s),n.toggleClass("collapsed",!s).attr("aria-expanded",s)};function p(e){var n,s=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(document).find(s)}function u(e){return this.each(function(){var n=t(this),s=n.data("bs.collapse"),o=t.extend({},a.DEFAULTS,n.data(),typeof e=="object"&&e);!s&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),s||n.data("bs.collapse",s=new a(this,o)),typeof e=="string"&&s[e]()})}var i=t.fn.collapse;t.fn.collapse=u,t.fn.collapse.Constructor=a,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var n=t(this);n.attr("data-target")||e.preventDefault();var s=p(n),o=s.data("bs.collapse"),h=o?"toggle":n.data();u.call(s,h)})}(jQuery);+function(t){var a=".dropdown-backdrop",p='[data-toggle="dropdown"]',u=function(o){t(o).on("click.bs.dropdown",this.toggle)};u.VERSION="3.4.1";function i(o){var h=o.attr("data-target");h||(h=o.attr("href"),h=h&&/#[A-Za-z]/.test(h)&&h.replace(/.*(?=#[^\s]*$)/,""));var f=h!=="#"?t(document).find(h):null;return f&&f.length?f:o.parent()}function e(o){o&&o.which===3||(t(a).remove(),t(p).each(function(){var h=t(this),f=i(h),b={relatedTarget:this};f.hasClass("open")&&(o&&o.type=="click"&&/input|textarea/i.test(o.target.tagName)&&t.contains(f[0],o.target)||(f.trigger(o=t.Event("hide.bs.dropdown",b)),!o.isDefaultPrevented()&&(h.attr("aria-expanded","false"),f.removeClass("open").trigger(t.Event("hidden.bs.dropdown",b)))))}))}u.prototype.toggle=function(o){var h=t(this);if(!h.is(".disabled, :disabled")){var f=i(h),b=f.hasClass("open");if(e(),!b){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(f.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;h.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},u.prototype.keydown=function(o){if(!(!/(38|40|27|32)/.test(o.which)||/input|textarea/i.test(o.target.tagName))){var h=t(this);if(o.preventDefault(),o.stopPropagation(),!h.is(".disabled, :disabled")){var f=i(h),b=f.hasClass("open");if(!b&&o.which!=27||b&&o.which==27)return o.which==27&&f.find(p).trigger("focus"),h.trigger("click");var r=" li:not(.disabled):visible a",l=f.find(".dropdown-menu"+r);if(l.length){var d=l.index(o.target);o.which==38&&d>0&&d--,o.which==40&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};function n(o){return this.each(function(){var h=t(this),f=h.data("bs.dropdown");f||h.data("bs.dropdown",f=new u(this)),typeof o=="string"&&f[o].call(h)})}var s=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=u,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",p,u.prototype.toggle).on("keydown.bs.dropdown.data-api",p,u.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",u.prototype.keydown)}(jQuery);+function(t){var a=function(i,e){this.options=e,this.$body=t(document.body),this.$element=t(i),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};a.VERSION="3.4.1",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(i){return this.isShown?this.hide():this.show(i)},a.prototype.show=function(i){var e=this,n=t.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(n),!(this.isShown||n.isDefaultPrevented())&&(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){e.$element.one("mouseup.dismiss.bs.modal",function(s){t(s.target).is(e.$element)&&(e.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(e.$body),e.$element.show().scrollTop(0),e.adjustDialog(),s&&e.$element[0].offsetWidth,e.$element.addClass("in"),e.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:i});s?e.$dialog.one("bsTransitionEnd",function(){e.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(a.TRANSITION_DURATION):e.$element.trigger("focus").trigger(o)}))},a.prototype.hide=function(i){i&&i.preventDefault(),i=t.Event("hide.bs.modal"),this.$element.trigger(i),!(!this.isShown||i.isDefaultPrevented())&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())},a.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(i){document!==i.target&&this.$element[0]!==i.target&&!this.$element.has(i.target).length&&this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(i){i.which==27&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},a.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},a.prototype.hideModal=function(){var i=this;this.$element.hide(),this.backdrop(function(){i.$body.removeClass("modal-open"),i.resetAdjustments(),i.resetScrollbar(),i.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(i){var e=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(h){if(this.ignoreBackdropClick){this.ignoreBackdropClick=!1;return}h.target===h.currentTarget&&(this.options.backdrop=="static"?this.$element[0].focus():this.hide())},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!i)return;s?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):i()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var o=function(){e.removeBackdrop(),i&&i()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):o()}else i&&i()},a.prototype.handleUpdate=function(){this.adjustDialog()},a.prototype.adjustDialog=function(){var i=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&i?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!i?this.scrollbarWidth:""})},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},a.prototype.checkScrollbar=function(){var i=window.innerWidth;if(!i){var e=document.documentElement.getBoundingClientRect();i=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<i,this.scrollbarWidth=this.measureScrollbar()},a.prototype.setScrollbar=function(){var i=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var e=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",i+e),t(this.fixedContent).each(function(n,s){var o=s.style.paddingRight,h=t(s).css("padding-right");t(s).data("padding-right",o).css("padding-right",parseFloat(h)+e+"px")}))},a.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(i,e){var n=t(e).data("padding-right");t(e).removeData("padding-right"),e.style.paddingRight=n||""})},a.prototype.measureScrollbar=function(){var i=document.createElement("div");i.className="modal-scrollbar-measure",this.$body.append(i);var e=i.offsetWidth-i.clientWidth;return this.$body[0].removeChild(i),e};function p(i,e){return this.each(function(){var n=t(this),s=n.data("bs.modal"),o=t.extend({},a.DEFAULTS,n.data(),typeof i=="object"&&i);s||n.data("bs.modal",s=new a(this,o)),typeof i=="string"?s[i](e):o.show&&s.show(e)})}var u=t.fn.modal;t.fn.modal=p,t.fn.modal.Constructor=a,t.fn.modal.noConflict=function(){return t.fn.modal=u,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var e=t(this),n=e.attr("href"),s=e.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,""),o=t(document).find(s),h=o.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},o.data(),e.data());e.is("a")&&i.preventDefault(),o.one("show.bs.modal",function(f){f.isDefaultPrevented()||o.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),p.call(o,h,this)})}(jQuery);+function(t){var a=["sanitize","whiteList","sanitizeFn"],p=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],u=/^aria-[\w-]*$/i,i={"*":["class","dir","id","lang","role",u],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},e=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,n=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function s(r,l){var d=r.nodeName.toLowerCase();if(t.inArray(d,l)!==-1)return t.inArray(d,p)!==-1?!!(r.nodeValue.match(e)||r.nodeValue.match(n)):!0;for(var c=t(l).filter(function(g,w){return w instanceof RegExp}),m=0,v=c.length;m<v;m++)if(d.match(c[m]))return!0;return!1}function o(r,l,d){if(r.length===0)return r;if(d&&typeof d=="function")return d(r);if(!document.implementation||!document.implementation.createHTMLDocument)return r;var c=document.implementation.createHTMLDocument("sanitization");c.body.innerHTML=r;for(var m=t.map(l,function(I,A){return A}),v=t(c.body).find("*"),g=0,w=v.length;g<w;g++){var y=v[g],T=y.nodeName.toLowerCase();if(t.inArray(T,m)===-1){y.parentNode.removeChild(y);continue}for(var C=t.map(y.attributes,function(I){return I}),S=[].concat(l["*"]||[],l[T]||[]),x=0,E=C.length;x<E;x++)s(C[x],S)||y.removeAttribute(C[x].nodeName)}return c.body.innerHTML}var h=function(r,l){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",r,l)};h.VERSION="3.4.1",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:i},h.prototype.init=function(r,l,d){if(this.enabled=!0,this.type=r,this.$element=t(l),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var c=this.options.trigger.split(" "),m=c.length;m--;){var v=c[m];if(v=="click")this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if(v!="manual"){var g=v=="hover"?"mouseenter":"focusin",w=v=="hover"?"mouseleave":"focusout";this.$element.on(g+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(w+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.getOptions=function(r){var l=this.$element.data();for(var d in l)l.hasOwnProperty(d)&&t.inArray(d,a)!==-1&&delete l[d];return r=t.extend({},this.getDefaults(),l,r),r.delay&&typeof r.delay=="number"&&(r.delay={show:r.delay,hide:r.delay}),r.sanitize&&(r.template=o(r.template,r.whiteList,r.sanitizeFn)),r},h.prototype.getDelegateOptions=function(){var r={},l=this.getDefaults();return this._options&&t.each(this._options,function(d,c){l[d]!=c&&(r[d]=c)}),r},h.prototype.enter=function(r){var l=r instanceof this.constructor?r:t(r.currentTarget).data("bs."+this.type);if(l||(l=new this.constructor(r.currentTarget,this.getDelegateOptions()),t(r.currentTarget).data("bs."+this.type,l)),r instanceof t.Event&&(l.inState[r.type=="focusin"?"focus":"hover"]=!0),l.tip().hasClass("in")||l.hoverState=="in"){l.hoverState="in";return}if(clearTimeout(l.timeout),l.hoverState="in",!l.options.delay||!l.options.delay.show)return l.show();l.timeout=setTimeout(function(){l.hoverState=="in"&&l.show()},l.options.delay.show)},h.prototype.isInStateTrue=function(){for(var r in this.inState)if(this.inState[r])return!0;return!1},h.prototype.leave=function(r){var l=r instanceof this.constructor?r:t(r.currentTarget).data("bs."+this.type);if(l||(l=new this.constructor(r.currentTarget,this.getDelegateOptions()),t(r.currentTarget).data("bs."+this.type,l)),r instanceof t.Event&&(l.inState[r.type=="focusout"?"focus":"hover"]=!1),!l.isInStateTrue()){if(clearTimeout(l.timeout),l.hoverState="out",!l.options.delay||!l.options.delay.hide)return l.hide();l.timeout=setTimeout(function(){l.hoverState=="out"&&l.hide()},l.options.delay.hide)}},h.prototype.show=function(){var r=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(r);var l=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(r.isDefaultPrevented()||!l)return;var d=this,c=this.tip(),m=this.getUID(this.type);this.setContent(),c.attr("id",m),this.$element.attr("aria-describedby",m),this.options.animation&&c.addClass("fade");var v=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,g=/\s?auto?\s?/i,w=g.test(v);w&&(v=v.replace(g,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(v).data("bs."+this.type,this),this.options.container?c.appendTo(t(document).find(this.options.container)):c.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var y=this.getPosition(),T=c[0].offsetWidth,C=c[0].offsetHeight;if(w){var S=v,x=this.getPosition(this.$viewport);v=v=="bottom"&&y.bottom+C>x.bottom?"top":v=="top"&&y.top-C<x.top?"bottom":v=="right"&&y.right+T>x.width?"left":v=="left"&&y.left-T<x.left?"right":v,c.removeClass(S).addClass(v)}var E=this.getCalculatedOffset(v,y,T,C);this.applyPlacement(E,v);var I=function(){var A=d.hoverState;d.$element.trigger("shown.bs."+d.type),d.hoverState=null,A=="out"&&d.leave(d)};t.support.transition&&this.$tip.hasClass("fade")?c.one("bsTransitionEnd",I).emulateTransitionEnd(h.TRANSITION_DURATION):I()}},h.prototype.applyPlacement=function(r,l){var d=this.tip(),c=d[0].offsetWidth,m=d[0].offsetHeight,v=parseInt(d.css("margin-top"),10),g=parseInt(d.css("margin-left"),10);isNaN(v)&&(v=0),isNaN(g)&&(g=0),r.top+=v,r.left+=g,t.offset.setOffset(d[0],t.extend({using:function(E){d.css({top:Math.round(E.top),left:Math.round(E.left)})}},r),0),d.addClass("in");var w=d[0].offsetWidth,y=d[0].offsetHeight;l=="top"&&y!=m&&(r.top=r.top+m-y);var T=this.getViewportAdjustedDelta(l,r,w,y);T.left?r.left+=T.left:r.top+=T.top;var C=/top|bottom/.test(l),S=C?T.left*2-c+w:T.top*2-m+y,x=C?"offsetWidth":"offsetHeight";d.offset(r),this.replaceArrow(S,d[0][x],C)},h.prototype.replaceArrow=function(r,l,d){this.arrow().css(d?"left":"top",50*(1-r/l)+"%").css(d?"top":"left","")},h.prototype.setContent=function(){var r=this.tip(),l=this.getTitle();this.options.html?(this.options.sanitize&&(l=o(l,this.options.whiteList,this.options.sanitizeFn)),r.find(".tooltip-inner").html(l)):r.find(".tooltip-inner").text(l),r.removeClass("fade in top bottom left right")},h.prototype.hide=function(r){var l=this,d=t(this.$tip),c=t.Event("hide.bs."+this.type);function m(){l.hoverState!="in"&&d.detach(),l.$element&&l.$element.removeAttr("aria-describedby").trigger("hidden.bs."+l.type),r&&r()}if(this.$element.trigger(c),!c.isDefaultPrevented())return d.removeClass("in"),t.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(h.TRANSITION_DURATION):m(),this.hoverState=null,this},h.prototype.fixTitle=function(){var r=this.$element;(r.attr("title")||typeof r.attr("data-original-title")!="string")&&r.attr("data-original-title",r.attr("title")||"").attr("title","")},h.prototype.hasContent=function(){return this.getTitle()},h.prototype.getPosition=function(r){r=r||this.$element;var l=r[0],d=l.tagName=="BODY",c=l.getBoundingClientRect();c.width==null&&(c=t.extend({},c,{width:c.right-c.left,height:c.bottom-c.top}));var m=window.SVGElement&&l instanceof window.SVGElement,v=d?{top:0,left:0}:m?null:r.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:r.scrollTop()},w=d?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},c,g,w,v)},h.prototype.getCalculatedOffset=function(r,l,d,c){return r=="bottom"?{top:l.top+l.height,left:l.left+l.width/2-d/2}:r=="top"?{top:l.top-c,left:l.left+l.width/2-d/2}:r=="left"?{top:l.top+l.height/2-c/2,left:l.left-d}:{top:l.top+l.height/2-c/2,left:l.left+l.width}},h.prototype.getViewportAdjustedDelta=function(r,l,d,c){var m={top:0,left:0};if(!this.$viewport)return m;var v=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(r)){var w=l.top-v-g.scroll,y=l.top+v-g.scroll+c;w<g.top?m.top=g.top-w:y>g.top+g.height&&(m.top=g.top+g.height-y)}else{var T=l.left-v,C=l.left+v+d;T<g.left?m.left=g.left-T:C>g.right&&(m.left=g.left+g.width-C)}return m},h.prototype.getTitle=function(){var r,l=this.$element,d=this.options;return r=l.attr("data-original-title")||(typeof d.title=="function"?d.title.call(l[0]):d.title),r},h.prototype.getUID=function(r){do r+=~~(Math.random()*1e6);while(document.getElementById(r));return r},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled},h.prototype.toggle=function(r){var l=this;r&&(l=t(r.currentTarget).data("bs."+this.type),l||(l=new this.constructor(r.currentTarget,this.getDelegateOptions()),t(r.currentTarget).data("bs."+this.type,l))),r?(l.inState.click=!l.inState.click,l.isInStateTrue()?l.enter(l):l.leave(l)):l.tip().hasClass("in")?l.leave(l):l.enter(l)},h.prototype.destroy=function(){var r=this;clearTimeout(this.timeout),this.hide(function(){r.$element.off("."+r.type).removeData("bs."+r.type),r.$tip&&r.$tip.detach(),r.$tip=null,r.$arrow=null,r.$viewport=null,r.$element=null})},h.prototype.sanitizeHtml=function(r){return o(r,this.options.whiteList,this.options.sanitizeFn)};function f(r){return this.each(function(){var l=t(this),d=l.data("bs.tooltip"),c=typeof r=="object"&&r;!d&&/destroy|hide/.test(r)||(d||l.data("bs.tooltip",d=new h(this,c)),typeof r=="string"&&d[r]())})}var b=t.fn.tooltip;t.fn.tooltip=f,t.fn.tooltip.Constructor=h,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=b,this}}(jQuery);+function(t){var a=function(i,e){this.init("popover",i,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");a.VERSION="3.4.1",a.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),a.prototype.constructor=a,a.prototype.getDefaults=function(){return a.DEFAULTS},a.prototype.setContent=function(){var i=this.tip(),e=this.getTitle(),n=this.getContent();if(this.options.html){var s=typeof n;this.options.sanitize&&(e=this.sanitizeHtml(e),s==="string"&&(n=this.sanitizeHtml(n))),i.find(".popover-title").html(e),i.find(".popover-content").children().detach().end()[s==="string"?"html":"append"](n)}else i.find(".popover-title").text(e),i.find(".popover-content").children().detach().end().text(n);i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()},a.prototype.hasContent=function(){return this.getTitle()||this.getContent()},a.prototype.getContent=function(){var i=this.$element,e=this.options;return i.attr("data-content")||(typeof e.content=="function"?e.content.call(i[0]):e.content)},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function p(i){return this.each(function(){var e=t(this),n=e.data("bs.popover"),s=typeof i=="object"&&i;!n&&/destroy|hide/.test(i)||(n||e.data("bs.popover",n=new a(this,s)),typeof i=="string"&&n[i]())})}var u=t.fn.popover;t.fn.popover=p,t.fn.popover.Constructor=a,t.fn.popover.noConflict=function(){return t.fn.popover=u,this}}(jQuery);+function(t){function a(i,e){this.$body=t(document.body),this.$scrollElement=t(i).is(document.body)?t(window):t(i),this.options=t.extend({},a.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}a.VERSION="3.4.1",a.DEFAULTS={offset:10},a.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},a.prototype.refresh=function(){var i=this,e="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),o=s.data("target")||s.attr("href"),h=/^#./.test(o)&&t(o);return h&&h.length&&h.is(":visible")&&[[h[e]().top+n,o]]||null}).sort(function(s,o){return s[0]-o[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},a.prototype.process=function(){var i=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),n=this.options.offset+e-this.$scrollElement.height(),s=this.offsets,o=this.targets,h=this.activeTarget,f;if(this.scrollHeight!=e&&this.refresh(),i>=n)return h!=(f=o[o.length-1])&&this.activate(f);if(h&&i<s[0])return this.activeTarget=null,this.clear();for(f=s.length;f--;)h!=o[f]&&i>=s[f]&&(s[f+1]===void 0||i<s[f+1])&&this.activate(o[f])},a.prototype.activate=function(i){this.activeTarget=i,this.clear();var e=this.selector+'[data-target="'+i+'"],'+this.selector+'[href="'+i+'"]',n=t(e).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},a.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function p(i){return this.each(function(){var e=t(this),n=e.data("bs.scrollspy"),s=typeof i=="object"&&i;n||e.data("bs.scrollspy",n=new a(this,s)),typeof i=="string"&&n[i]()})}var u=t.fn.scrollspy;t.fn.scrollspy=p,t.fn.scrollspy.Constructor=a,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=u,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var i=t(this);p.call(i,i.data())})})}(jQuery);+function(t){var a=function(e){this.element=t(e)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),s=e.data("target");if(s||(s=e.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a"),h=t.Event("hide.bs.tab",{relatedTarget:e[0]}),f=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(h),e.trigger(f),!(f.isDefaultPrevented()||h.isDefaultPrevented())){var b=t(document).find(s);this.activate(e.closest("li"),n),this.activate(b,b.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(e,n,s){var o=n.find("> .active"),h=s&&t.support.transition&&(o.length&&o.hasClass("fade")||!!n.find("> .fade").length);function f(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}o.length&&h?o.one("bsTransitionEnd",f).emulateTransitionEnd(a.TRANSITION_DURATION):f(),o.removeClass("in")};function p(e){return this.each(function(){var n=t(this),s=n.data("bs.tab");s||n.data("bs.tab",s=new a(this)),typeof e=="string"&&s[e]()})}var u=t.fn.tab;t.fn.tab=p,t.fn.tab.Constructor=a,t.fn.tab.noConflict=function(){return t.fn.tab=u,this};var i=function(e){e.preventDefault(),p.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery);+function(t){var a=function(i,e){this.options=t.extend({},a.DEFAULTS,e);var n=this.options.target===a.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);this.$target=n.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};a.VERSION="3.4.1",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},a.prototype.getState=function(i,e,n,s){var o=this.$target.scrollTop(),h=this.$element.offset(),f=this.$target.height();if(n!=null&&this.affixed=="top")return o<n?"top":!1;if(this.affixed=="bottom")return n!=null?o+this.unpin<=h.top?!1:"bottom":o+f<=i-s?!1:"bottom";var b=this.affixed==null,r=b?o:h.top,l=b?f:e;return n!=null&&o<=n?"top":s!=null&&r+l>=i-s?"bottom":!1},a.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(a.RESET).addClass("affix");var i=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-i},a.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=this.$element.height(),e=this.options.offset,n=e.top,s=e.bottom,o=Math.max(t(document).height(),t(document.body).height());typeof e!="object"&&(s=n=e),typeof n=="function"&&(n=e.top(this.$element)),typeof s=="function"&&(s=e.bottom(this.$element));var h=this.getState(o,i,n,s);if(this.affixed!=h){this.unpin!=null&&this.$element.css("top","");var f="affix"+(h?"-"+h:""),b=t.Event(f+".bs.affix");if(this.$element.trigger(b),b.isDefaultPrevented())return;this.affixed=h,this.unpin=h=="bottom"?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")}h=="bottom"&&this.$element.offset({top:o-i-s})}};function p(i){return this.each(function(){var e=t(this),n=e.data("bs.affix"),s=typeof i=="object"&&i;n||e.data("bs.affix",n=new a(this,s)),typeof i=="string"&&n[i]()})}var u=t.fn.affix;t.fn.affix=p,t.fn.affix.Constructor=a,t.fn.affix.noConflict=function(){return t.fn.affix=u,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),e=i.data();e.offset=e.offset||{},e.offsetBottom!=null&&(e.offset.bottom=e.offsetBottom),e.offsetTop!=null&&(e.offset.top=e.offsetTop),p.call(i,e)})})}(jQuery);
