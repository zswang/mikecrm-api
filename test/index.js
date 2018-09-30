
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
    done();
  })
  .then(() => {
    request('http://localhost:3636/close')
  })
  .catch(err => {
    request('http://localhost:3636/close')
    console.error(err)
  })
  });
          
});
         