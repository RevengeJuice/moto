if(typeof($add)=="undefined")var $add={version:{},auto:{disabled:false}};!function(d){$add.version.Accordion="1.0.0",$add.Accordion=function(a,i){d(a).each(function(a,n){function o(){var a=0;return l.each(function(i,n){d(n).hasClass("addui-Accordion-open")&&a++}),a}function c(d){u.maxOpened&&o()>=u.maxOpened&&s(),l.eq(d).addClass("addui-Accordion-open"),f.eq(d).addClass("addui-Accordion-open").slideDown()}function e(d){l.eq(d).removeClass("addui-Accordion-open"),f.eq(d).removeClass("addui-Accordion-open").slideUp()}function s(){var a=0;l.each(function(i,n){d(n).hasClass("addui-Accordion-open")&&(a=i)}),e(a)}function r(d){l.eq(d).hasClass("addui-Accordion-open")?e(d):c(d)}var t=d(n);if(!t.hasClass("addui-Accordion")){t.addClass("addui-Accordion");var u=d.extend({initial:0,change:"click",maxOpened:1},t.data(),i);"hover"==u.change&&(u.change="mouseover");var l=t.find("[role=header]").addClass("addui-Accordion-header"),f=t.find("[role=content]").addClass("addui-Accordion-content").hide();if(l.eq(0).addClass("addui-Accordion-first"),f.eq(0).addClass("addui-Accordion-first"),l.last().addClass("addui-Accordion-last"),f.last().addClass("addui-Accordion-last"),l.each(function(a,i){var n=d(i);n.on(u.change,function(){"mouseover"==u.change?n.hasClass("addui-Accordion-open")||c(a):r(a)})}),u.initial instanceof Array)for(var a=0;a<u.initial.length;a++)f.eq(u.initial[a]).show(),c(u.initial[a]);else f.eq(u.initial).show(),c(u.initial)}})},d.fn.addAccordion=function(d){$add.Accordion(this,d)},$add.auto.Accordion=function(){$add.auto.disabled||d("[data-addui=accordion]").addAccordion()}}(jQuery);$(function(){for(var k in $add.auto){if(typeof($add.auto[k])=="function"){$add.auto[k]();}}});