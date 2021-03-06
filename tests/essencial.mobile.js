/* global casper, phantomcss, phantom */

casper.start(phantom.rootUrl)
.then(function () {
  phantomcss.pathToTest = './'
  this.mouse.click('.PortalTopo-title')
  phantomcss.screenshot('body', 'body')
  phantomcss.screenshot('.NavGlobal', 'topo global')
  phantomcss.screenshot('.PortalTopo', 'topo portal')
  phantomcss.screenshot('.FooterMain', 'rodape global')
})
.then(function () {
  this.mouse.click('.PortalTopo-title')
  this.mouse.click('.NavGlobal-toggle')
  phantomcss.screenshot('.NavGlobal-dropdownMenu', 'menu portais aberto')
}).then(function () {
  this.mouse.click('.PortalTopo-title')
  this.mouse.click('.PortalTopo-toggler--menu')
  this.wait(400, function () {
    phantomcss.screenshot('.Nav--principal', 'nav principal aberto')
  })
})
.then(function () {
  this.mouse.click('.Nav--principal .caret')
  this.wait(50, function () {
    phantomcss.screenshot('.Nav--principal', 'nav principal dropdown aberto')
  })
})
