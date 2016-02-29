"use strict";var fabricator=window.fabricator={};fabricator.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},fabricator.options.menu=window.matchMedia(fabricator.options.mq).matches,fabricator.test={},fabricator.test.sessionStorage=function(){var t="_f";try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(e){return!1}}(),fabricator.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(fabricator.options)),fabricator.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".menu"),menuItems:document.querySelectorAll(".menu li a"),menuToggle:document.querySelector(".menu-toggle")},fabricator.getOptions=function(){return fabricator.test.sessionStorage?JSON.parse(sessionStorage.fabricator):fabricator.options},fabricator.buildColorChips=function(){for(var t,e=document.querySelectorAll(".color-chip"),o=e.length-1;o>=0;o--)t=e[o].querySelector(".color-chip__color").innerHTML,e[o].style.borderTopColor=t,e[o].style.borderBottomColor=t;return this},fabricator.setActiveItem=function(){var t=function(){for(var t,e=(window.location.pathname+window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/gi,function(t,e,o,r){return r=r||"",o=o||"",o+r.split(".")[0]})||"overview.html",o=fabricator.dom.menuItems.length-1;o>=0;o--){var r=fabricator.dom.menuItems[o];t=r.getAttribute("href").replace(/^\//g,""),t===e?r.classList.add("active"):r.classList.remove("active")}};return window.addEventListener("hashchange",t),t(),this},fabricator.menuToggle=function(){var t=fabricator.dom.menuToggle,e=fabricator.getOptions(),o=function(){e.menu=!fabricator.dom.root.classList.contains("menu-active"),fabricator.dom.root.classList.toggle("menu-active"),fabricator.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(e))};document.onkeydown=function(t){t=t||event,t.ctrlKey&&t.keyCode=="M".charCodeAt(0)&&o()},t.addEventListener("click",function(){o()});for(var r=function(){window.matchMedia(fabricator.options.mq).matches||o()},a=0;a<fabricator.dom.menuItems.length;a++)fabricator.dom.menuItems[a].addEventListener("click",r);return this},fabricator.allItemsToggles=function(){for(var t={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},e=document.querySelectorAll(".controls [data-f-toggle-control]"),o=fabricator.getOptions(),r=function(e,r){for(var a=document.querySelector(".controls [data-f-toggle-control="+e+"]"),n=t[e],i=0;i<n.length;i++)r?n[i].classList.remove("item-hidden"):n[i].classList.add("item-hidden");r?a.classList.add("active"):a.classList.remove("active"),o.toggles[e]=r,fabricator.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(o))},a=0;a<e.length;a++)e[a].addEventListener("click",function(t){var e=t.currentTarget.getAttribute("data-f-toggle-control"),o=t.currentTarget.className.indexOf("active")<0;r(e,o)});for(var n in o.toggles)o.toggles.hasOwnProperty(n)&&r(n,o.toggles[n]);return this},fabricator.singleItemToggle=function(){for(var t=document.querySelectorAll(".item-group [data-f-toggle-control]"),e=function(t){var e=this.parentNode.parentNode.parentNode,o=t.currentTarget.getAttribute("data-f-toggle-control");e.querySelector("[data-f-toggle="+o+"]").classList.toggle("item-hidden")},o=0;o<t.length;o++)t[o].addEventListener("click",e);return this},fabricator.bindCodeAutoSelect=function(){for(var t=document.querySelectorAll(".item-code"),e=function(t){var e=window.getSelection(),o=document.createRange();o.selectNodeContents(t.querySelector("code")),e.removeAllRanges(),e.addRange(o)},o=t.length-1;o>=0;o--)t[o].addEventListener("click",e.bind(this,t[o]))},fabricator.setInitialMenuState=function(){var t=document.querySelector("html"),e=window.matchMedia(fabricator.options.mq),o=function(e){e.matches&&fabricator.getOptions().menu?t.classList.add("menu-active"):t.classList.remove("menu-active")};return e.addListener(o),o(e),this},function(){fabricator.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect()}();