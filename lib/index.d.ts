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
    getListFormSubmitSummary(form: number): any;
}
//# sourceMappingURL=index.d.ts.map