"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const irequest_1 = require("irequest");
var FieldType;
(function (FieldType) {
    FieldType[FieldType["Radio"] = 1] = "Radio";
    FieldType[FieldType["Dropdown"] = 3] = "Dropdown";
    FieldType[FieldType["ImgRadio"] = 4] = "ImgRadio";
    FieldType[FieldType["Text"] = 6] = "Text";
    FieldType[FieldType["Number"] = 8] = "Number";
    FieldType[FieldType["Date"] = 9] = "Date";
    FieldType[FieldType["FileUpload"] = 10] = "FileUpload";
    FieldType[FieldType["Rating"] = 11] = "Rating";
    FieldType[FieldType["Tabular"] = 12] = "Tabular";
    FieldType[FieldType["Currency"] = 13] = "Currency";
    FieldType[FieldType["Ranking"] = 14] = "Ranking";
    FieldType[FieldType["ChainedDropdown"] = 15] = "ChainedDropdown";
    FieldType[FieldType["City"] = 16] = "City";
    FieldType[FieldType["SectionBreak"] = 17] = "SectionBreak";
    FieldType[FieldType["PageBreak"] = 18] = "PageBreak";
    FieldType[FieldType["StaticText"] = 19] = "StaticText";
    FieldType[FieldType["StaticImg"] = 20] = "StaticImg";
    FieldType[FieldType["StaticMap"] = 21] = "StaticMap";
    FieldType[FieldType["Name"] = 23] = "Name";
    FieldType[FieldType["Mobile"] = 24] = "Mobile";
    FieldType[FieldType["Email"] = 25] = "Email";
    FieldType[FieldType["Landline"] = 26] = "Landline";
    FieldType[FieldType["Fax"] = 27] = "Fax";
    FieldType[FieldType["Gender"] = 28] = "Gender";
    FieldType[FieldType["Title"] = 29] = "Title";
    FieldType[FieldType["City2"] = 30] = "City2";
    FieldType[FieldType["Company"] = 31] = "Company";
    FieldType[FieldType["JobTitle"] = 32] = "JobTitle";
    FieldType[FieldType["Address"] = 33] = "Address";
    FieldType[FieldType["Website"] = 34] = "Website";
    FieldType[FieldType["TencentQQ"] = 35] = "TencentQQ";
    FieldType[FieldType["WeChat"] = 36] = "WeChat";
    FieldType[FieldType["LINE"] = 37] = "LINE";
    FieldType[FieldType["WhatsApp"] = 38] = "WhatsApp";
    FieldType[FieldType["Messenger"] = 39] = "Messenger";
    FieldType[FieldType["Telegram"] = 40] = "Telegram";
    FieldType[FieldType["Skype"] = 41] = "Skype";
    FieldType[FieldType["Viber"] = 42] = "Viber";
    FieldType[FieldType["Facebook"] = 44] = "Facebook";
    FieldType[FieldType["GooglePlus"] = 45] = "GooglePlus";
    FieldType[FieldType["Instagram"] = 46] = "Instagram";
    FieldType[FieldType["LinkedIn"] = 47] = "LinkedIn";
    FieldType[FieldType["Twitter"] = 48] = "Twitter";
    FieldType[FieldType["SinaWeibo"] = 49] = "SinaWeibo";
    FieldType[FieldType["Portrait"] = 53] = "Portrait";
    FieldType[FieldType["Birthdate"] = 54] = "Birthdate";
    FieldType[FieldType["ImgUpload"] = 56] = "ImgUpload";
    FieldType[FieldType["Sale"] = 60] = "Sale";
    FieldType[FieldType["Department"] = 61] = "Department";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
/**
 * Mike API 封装
 * @example base
   ```js
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
    console.log(JSON.stringify(reply))
    // > {"r":0,"a":"zswang","n":"Wang Jihu","l":2012,"sd":0,"ll":"Beijing, China","p":"110","t":1,"d":0,"iw":0,"in":1,"im":1,"la":0,"ai":0,"avt":"empty.png"}
    return api.getListFormSubmitSummary(1)
  })
  .then(reply => {
    console.log(JSON.stringify(reply))
    // > {"r":0,"fr":["new",2,"870aw","zswang.mikecrm.com/870aw",2,0,0,null,null,null,null,null,0,null,null,{"stt":"Thank you","std":""},null],"ifp":false,"_U":"/uploads/images","list":null}
    return api.getListFormSubmitAll(1, 0)
  })
  .then(reply => {
    console.log(JSON.stringify(reply))
    // > {"r":0,"fr":["new",2,"870aw","zswang.mikecrm.com/870aw",2,0,0,null,null,null,null,null,0,null,null,{"stt":"Thank you","std":""},null],"ifp":false,"_U":"/uploads/images","list":null}
    return api.getListFormSummary()
  })
  .then(reply => {
    console.log(JSON.stringify(reply))
    // > {"r":0,"a":0,"u":0,"ifp":1,"ftkv":0,"fcki":0,"m":0,"c":0,"g":[[2001,"One",1,0],[2002,"Two",1,0],[2003,"Three",1,0]],"_U":"empty/","list":{"d":[[200015053,0,0,1,null,null,null,"new",0,0,668,null,null,null]],"mp_frLA":{"200249374":"2018-09-29 23:17"},"mp_frCA":{"200249374":"2018-09-29 17:51"},"mp_frUA":{"200249374":"2018-09-29 23:26"},"mpUs":{"668":["zswang",1]}},"nxt":true}
    return api.getListFormAll(1, 1)
  })
  .then(reply => {
    console.log(JSON.stringify(reply))
    // > {"r":0,"a":0,"u":0,"ifp":1,"ftkv":0,"fcki":0,"m":0,"c":0,"g":[[2001,"One",1,0],[2002,"Two",1,0],[2003,"Three",1,0]],"_U":"empty/","list":{"d":[[200015053,0,0,1,null,null,null,"new",0,0,668,null,null,null]],"mp_frLA":{"200249374":"2018-09-29 23:17"},"mp_frCA":{"200249374":"2018-09-29 17:51"},"mp_frUA":{"200249374":"2018-09-29 23:26"},"mpUs":{"668":["zswang",1]}},"nxt":true}
    // * done
  })
  .then(() => {
    request('http://localhost:3636/close')
  })
  .catch(err => {
    request('http://localhost:3636/close')
    console.error(err)
  })
   ```
   ```js
   const api2 = new mikecrm.MikeCRMAPI({
  apiHost: 'http://localhost:404/',
  account: '{"p":"zswang"}',
})
api2.login().catch(err => {
  console.log(JSON.stringify(err).indexOf('"port":404') >= 0)
  // > true
})
api2.getPersonalData().catch(err => {
  console.log(JSON.stringify(err).indexOf('"port":404') >= 0)
  // > true
})
api2.getListFormSummary().catch(err => {
  console.log(JSON.stringify(err).indexOf('"port":404') >= 0)
  // > true
})
api2.getListFormAll(0).catch(err => {
  console.log(JSON.stringify(err).indexOf('"port":404') >= 0)
  // > true
})
api2.getListFormSubmitSummary(100).catch(err => {
  console.log(JSON.stringify(err).indexOf('"port":404') >= 0)
  // > true
})
api2.getListFormSubmitAll(100, 300).catch(err => {
  console.log(JSON.stringify(err).indexOf('"port":404') >= 0)
  // > true
})
   ```
 */
class MikeCRMAPI extends irequest_1.RequestBase {
    constructor(options) {
        super(options.debug);
        this.options = Object.assign({ debug: false, apiHost: 'https://www.mikecrm.com/handler/web/' }, options);
    }
    /**
     * 登录系统
     */
    login() {
        return new Promise((resolve, reject) => {
            request(`${this.options.apiHost}login/handleLogin.php`, {
                method: 'POST',
                form: {
                    d: this.options.account,
                },
            }, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                const cookie = String(res.headers['set-cookie']);
                cookie.replace(/\b(uvi|PHPSESSID)=(\w+)\b/g, (all, name, value) => {
                    this[name] = value;
                    return '';
                });
                resolve();
            });
        });
    }
    /**
     * 获取当前账号信息
     */
    getPersonalData() {
        return (this.uvi ? Promise.resolve() : this.login()).then(() => {
            return this.request(`${this.options.apiHost}settings/handleGetPersonalData.php`, {
                method: 'POST',
                headers: {
                    Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
                },
            });
        });
    }
    /**
     * 获取表单提交记录
     * @param form 表单编号
     */
    getListFormSubmitSummary(form) {
        return (this.uvi ? Promise.resolve() : this.login()).then(() => {
            return this.request(`${this.options.apiHost}form_submit/handleGetListFormSubmitSummary.php`, {
                method: 'POST',
                headers: {
                    Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
                },
                form: {
                    d: JSON.stringify({ cvs: { i: form } }),
                },
            });
        });
    }
    /**
     * 获取完整表单提交记录
     * @param form 表单编号
     * @param next 下一组编号
     */
    getListFormSubmitAll(form, next) {
        return (this.uvi ? Promise.resolve() : this.login()).then(() => {
            return this.request(`${this.options.apiHost}form_submit/handleGetListFormSubmit_all.php`, {
                method: 'POST',
                headers: {
                    Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
                },
                form: {
                    d: JSON.stringify({ cvs: { i: form, nxt: next } }),
                },
            });
        });
    }
    /**
     * 获取表单详情
     */
    getListFormSummary() {
        return (this.uvi ? Promise.resolve() : this.login()).then(() => {
            return this.request(`${this.options.apiHost}form/handleGetListFormSummary.php`, {
                method: 'POST',
                headers: {
                    Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
                },
            });
        });
    }
    /**
     * 获取完整表单详情
     */
    getListFormAll(pageNo, sort = 1) {
        return (this.uvi ? Promise.resolve() : this.login()).then(() => {
            return this.request(`${this.options.apiHost}form/handleGetListForm_all.php`, {
                method: 'POST',
                headers: {
                    Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
                },
                form: {
                    d: JSON.stringify({ cvs: { pgn: pageNo, sort: sort } }),
                },
            });
        });
    }
}
exports.MikeCRMAPI = MikeCRMAPI;
/*<remove>*/
const mikecrm = {
    MikeCRMAPI: MikeCRMAPI,
};
/*<remove>*/
