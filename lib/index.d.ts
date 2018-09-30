import { RequestBase } from 'irequest';
export declare enum FieldType {
    Radio = 1,
    Dropdown = 3,
    ImgRadio = 4,
    Text = 6,
    Number = 8,
    Date = 9,
    FileUpload = 10,
    Rating = 11,
    Tabular = 12,
    Currency = 13,
    Ranking = 14,
    ChainedDropdown = 15,
    City = 16,
    SectionBreak = 17,
    PageBreak = 18,
    StaticText = 19,
    StaticImg = 20,
    StaticMap = 21,
    Name = 23,
    Mobile = 24,
    Email = 25,
    Landline = 26,
    Fax = 27,
    Gender = 28,
    Title = 29,
    City2 = 30,
    Company = 31,
    JobTitle = 32,
    Address = 33,
    Website = 34,
    TencentQQ = 35,
    WeChat = 36,
    LINE = 37,
    WhatsApp = 38,
    Messenger = 39,
    Telegram = 40,
    Skype = 41,
    Viber = 42,
    Facebook = 44,
    GooglePlus = 45,
    Instagram = 46,
    LinkedIn = 47,
    Twitter = 48,
    SinaWeibo = 49,
    Portrait = 53,
    Birthdate = 54,
    ImgUpload = 56,
    Sale = 60,
    Department = 61
}
export interface ICommonReturn {
    /**
     * 返回状态 0 为成功，非 0 为错误
     */
    r: number;
}
export interface IPersonal extends ICommonReturn {
    /**
     * 账号
     */
    a: string;
    /**
     * 姓名
     */
    n: string;
    l: number;
    sd: number;
    /**
     * 地址
     */
    ll: string;
    /**
     * 手机
     */
    p: string;
    t: number;
    d: number;
    iw: number;
    in: number;
    im: number;
    la: number;
    ai: number;
    /**
     * 头像
     */
    avt: string;
}
export interface IListFormSubmitSummary extends ICommonReturn {
    fr: any[];
    cp: [
    /**
     * 编号
     */
    string, 
    /**
     * 字段类型
     */
    FieldType, 
    /**
     * 字段名
     */
    {
        [key: string]: any;
    }, 
    /**
     * 提示 Placeholder
     */
    {
        [key: string]: string;
    }][];
    cpo: string;
    ifp: boolean;
    _U: string;
    list: {
        /**
         * 下一组编号
         */
        nxt: number;
        d: any[];
        mp_fsCA: {
            [key: string]: string;
        };
        mpFrs: {
            [key: string]: any[];
        };
        mpLoc: {
            [key: string]: string;
        };
        mpCt: {
            [key: string]: string;
        };
    };
}
export interface IListFormSummary extends ICommonReturn {
    a: number;
    u: number;
    ifp: number;
    ftkv: number;
    fcki: number;
    m: number;
    c: number;
    /**
     * 分组信息
     */
    g: [number, string, number, number][];
    _U: string;
    list: {
        d: [number, number, number, number, null, string, string, string, number, number, 
        /**
         * 创建者
         */
        number, number, {
            apf: string;
            apt: string;
        }, null][];
        mp_frLA: {
            [key: string]: string;
        };
        mp_frCA: {
            [key: string]: string;
        };
        mp_frUA: {
            [key: string]: string;
        };
        /**
         * 创建者
         */
        mpUs: {
            [key: string]: [string, null];
        };
    };
    /**
     * 是否有下一组
     */
    nxt: boolean;
}
export interface IMikeCRMAPIOptions {
    debug?: boolean;
    apiHost?: string;
    account: string;
}
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
  console.log(JSON.stringify(err))
  // > {"errno":"ECONNREFUSED","code":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":404}
})
api2.getPersonalData().catch(err => {
  console.log(JSON.stringify(err))
  // > {"errno":"ECONNREFUSED","code":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":404}
})
api2.getListFormSummary().catch(err => {
  console.log(JSON.stringify(err))
  // > {"errno":"ECONNREFUSED","code":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":404}
})
api2.getListFormAll(0).catch(err => {
  console.log(JSON.stringify(err))
  // > {"errno":"ECONNREFUSED","code":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":404}
})
api2.getListFormSubmitSummary(100).catch(err => {
  console.log(JSON.stringify(err))
  // > {"errno":"ECONNREFUSED","code":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":404}
})
api2.getListFormSubmitAll(100, 300).catch(err => {
  console.log(JSON.stringify(err))
  // > {"errno":"ECONNREFUSED","code":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":404}
})
   ```
 */
export declare class MikeCRMAPI extends RequestBase {
    private options;
    private uvi;
    private PHPSESSID;
    constructor(options: IMikeCRMAPIOptions);
    /**
     * 登录系统
     */
    login(): Promise<{}>;
    /**
     * 获取当前账号信息
     */
    getPersonalData(): Promise<IPersonal>;
    /**
     * 获取表单提交记录
     * @param form 表单编号
     */
    getListFormSubmitSummary(form: number): Promise<IListFormSubmitSummary>;
    /**
     * 获取完整表单提交记录
     * @param form 表单编号
     * @param next 下一组编号
     */
    getListFormSubmitAll(form: number, next: number): Promise<IListFormSubmitSummary>;
    /**
     * 获取表单详情
     */
    getListFormSummary(): Promise<IListFormSummary>;
    /**
     * 获取完整表单详情
     */
    getListFormAll(pageNo: number, sort?: number): Promise<IListFormSummary>;
}
//# sourceMappingURL=index.d.ts.map