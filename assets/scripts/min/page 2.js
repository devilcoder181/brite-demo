/** 
 * coder_custom_v1 / v2.1 / 2021-08-24 
 */

!function(e){window.bLazy=new Blazy({offset:350,loadInvisible:!0,breakpoints:[{width:767,src:"data-src-small"}]}),e(window).scroll(function(o){var t=e(window).scrollTop();100<t?e(".fl-social").addClass("fl-scrolled"):e(".fl-social").removeClass("fl-scrolled"),5<t?e("body").addClass("scrolled"):e("body").removeClass("scrolled")}),e(document).ready(function(){custom_plugin.hash_scroll(),custom_plugin.menuscrollToDiv(),custom_plugin.scroll_menu_active(),custom_plugin.burgger_menu()})}(jQuery);var viewport=window.innerWidth,custom_plugin={hash_scroll:function(){$("[data-scroll]").on("click",function(o){var t=$(this).data("scroll");$(t).length&&($("html, body").stop().animate({scrollTop:$(t).offset().top-100},500),o.preventDefault())})},burgger_menu:function(){$("body").on("click",".menu_trigger",function(o){var t=$(this),e=t.data("traget");t.toggleClass("active_"),$("body").toggleClass("menu_open"),$("#"+e).toggleClass("show")})},menuscrollToDiv:function(){var n=100;1024<viewport?n=100:viewport<1024&&(n=$("header").outerHeight()),$("body").on("click",".nav-link.scroll",function(o){o.preventDefault(),$(document).off("scroll"),$(this).closest(".navbar-nav").length&&($(".navbar-nav a.scroll").each(function(){$(this).parent().removeClass("active")}),$(this).parent().addClass("active"));var t=$(this).attr("data-href"),e=$(t);$(t).length?($("body").hasClass("menu_open")&&$(".menu_trigger").trigger("click"),$("html, body").stop().animate({scrollTop:e.offset().top-n},500,"swing",function(){$(document).on("scroll")})):window.location.href=$(this).attr("href")})},scroll_menu_active:function(){var n,a=$(".navbar-nav").find("a"),l=a.map(function(){var o=$($(this).attr("data-href"));if(o.length)return o}),r=100;1024<viewport?r=100:viewport<1024&&(r=$("header").outerHeight()),$(window).scroll(function(){var o=$(this).scrollTop()+r,t=l.map(function(){if($(this).offset().top<o)return this}),e=(t=t[t.length-1])&&t.length?t[0].id:"";n!==e&&(n=e,a.parent().removeClass("active").end().filter("[data-href='#"+e+"']").parent().addClass("active"))})}};!function(o){o(document).ready(function(){o(".page-section").viewportChecker({classToAdd:"throw_anim"}),o("body").addClass("dom-loaded")})}(jQuery);