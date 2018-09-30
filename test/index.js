
const mikecrm = require('../')
const request = require('request')
require('./mock/')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("base", function (done) {
    examplejs_printLines = [];
   const api = new mikecrm.MikeCRMAPI({
  apiHost: 'http://localhost:3636/',
  account: '{"p":"zswang"}',
})
api
  .login()
  .then(() => {
    return api.getPersonalData()
  })
  .then(reply => {
    examplejs_print(JSON.stringify(reply))
    assert.equal(examplejs_printLines.join("\n"), "{\"r\":0,\"a\":\"zswang\",\"n\":\"Wang Jihu\",\"l\":2012,\"sd\":0,\"ll\":\"Beijing, China\",\"p\":\"110\",\"t\":1,\"d\":0,\"iw\":0,\"in\":1,\"im\":1,\"la\":0,\"ai\":0,\"avt\":\"empty.png\"}"); examplejs_printLines = [];
    return api.getListFormSubmitSummary(1)
  })
  .then(reply => {
    examplejs_print(JSON.stringify(reply))
    assert.equal(examplejs_printLines.join("\n"), "{\"r\":0,\"fr\":[\"new\",2,\"870aw\",\"zswang.mikecrm.com/870aw\",2,0,0,null,null,null,null,null,0,null,null,{\"stt\":\"Thank you\",\"std\":\"\"},null],\"ifp\":false,\"_U\":\"/uploads/images\",\"list\":null}"); examplejs_printLines = [];
    return api.getListFormSubmitAll(1, 0)
  })
  .then(reply => {
    examplejs_print(JSON.stringify(reply))
    assert.equal(examplejs_printLines.join("\n"), "{\"r\":0,\"fr\":[\"new\",2,\"870aw\",\"zswang.mikecrm.com/870aw\",2,0,0,null,null,null,null,null,0,null,null,{\"stt\":\"Thank you\",\"std\":\"\"},null],\"ifp\":false,\"_U\":\"/uploads/images\",\"list\":null}"); examplejs_printLines = [];
    return api.getListFormSummary()
  })
  .then(reply => {
    examplejs_print(JSON.stringify(reply))
    assert.equal(examplejs_printLines.join("\n"), "{\"r\":0,\"a\":0,\"u\":0,\"ifp\":1,\"ftkv\":0,\"fcki\":0,\"m\":0,\"c\":0,\"g\":[[2001,\"One\",1,0],[2002,\"Two\",1,0],[2003,\"Three\",1,0]],\"_U\":\"empty/\",\"list\":{\"d\":[[200015053,0,0,1,null,null,null,\"new\",0,0,668,null,null,null]],\"mp_frLA\":{\"200249374\":\"2018-09-29 23:17\"},\"mp_frCA\":{\"200249374\":\"2018-09-29 17:51\"},\"mp_frUA\":{\"200249374\":\"2018-09-29 23:26\"},\"mpUs\":{\"668\":[\"zswang\",1]}},\"nxt\":true}"); examplejs_printLines = [];
    return api.getListFormAll(1, 1)
  })
  .then(reply => {
    examplejs_print(JSON.stringify(reply))
    assert.equal(examplejs_printLines.join("\n"), "{\"r\":0,\"a\":0,\"u\":0,\"ifp\":1,\"ftkv\":0,\"fcki\":0,\"m\":0,\"c\":0,\"g\":[[2001,\"One\",1,0],[2002,\"Two\",1,0],[2003,\"Three\",1,0]],\"_U\":\"empty/\",\"list\":{\"d\":[[200015053,0,0,1,null,null,null,\"new\",0,0,668,null,null,null]],\"mp_frLA\":{\"200249374\":\"2018-09-29 23:17\"},\"mp_frCA\":{\"200249374\":\"2018-09-29 17:51\"},\"mp_frUA\":{\"200249374\":\"2018-09-29 23:26\"},\"mpUs\":{\"668\":[\"zswang\",1]}},\"nxt\":true}"); examplejs_printLines = [];
    done();
  })
  .then(() => {
    request('http://localhost:3636/close')
  })
  .catch(err => {
    request('http://localhost:3636/close')
    console.error(err)
  })
   const api2 = new mikecrm.MikeCRMAPI({
  apiHost: 'http://localhost:404/',
  account: '{"p":"zswang"}',
})
api2.login().catch(err => {
  examplejs_print(JSON.stringify(err).indexOf('"port":404') >= 0)
  assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
})
api2.getPersonalData().catch(err => {
  examplejs_print(JSON.stringify(err).indexOf('"port":404') >= 0)
  assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
})
api2.getListFormSummary().catch(err => {
  examplejs_print(JSON.stringify(err).indexOf('"port":404') >= 0)
  assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
})
api2.getListFormAll(0).catch(err => {
  examplejs_print(JSON.stringify(err).indexOf('"port":404') >= 0)
  assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
})
api2.getListFormSubmitSummary(100).catch(err => {
  examplejs_print(JSON.stringify(err).indexOf('"port":404') >= 0)
  assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
})
api2.getListFormSubmitAll(100, 300).catch(err => {
  examplejs_print(JSON.stringify(err).indexOf('"port":404') >= 0)
  assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
})
  });
          
});
         