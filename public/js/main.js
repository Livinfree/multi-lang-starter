(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const init = () =>
{
  console.log("here");
  const langaugeSelectors = document.querySelectorAll("select.languageSelector");
  for (const langaugeSelector of langaugeSelectors)
  {
    langaugeSelector.addEventListener("change", () =>
    {
      const path = [];
      if (langaugeSelector.value != "en")
        path.push(langaugeSelector.value);
      path.push(langaugeSelector.dataset.page);
      const hostname = window.location.hostname;
      const protocol = window.location.protocol;
      const port = ":" + window.location.port;
      window.location.href = `${protocol}//${hostname}${port}/${path.join("/")}`;
    });
  }
}

module.exports.init = init;

},{}],2:[function(require,module,exports){
const selector = require("./_selector");

document.addEventListener("DOMContentLoaded", selector.init, false);

},{"./_selector":1}]},{},[2]);
