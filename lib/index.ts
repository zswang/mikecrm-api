import * as request from 'request'
import { RequestBase } from 'irequest'
export enum FieldType {
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
  Department = 61,
}
export interface ICommonReturn {
  /**
   * 返回状态 0 为成功，非 0 为错误
   */
  r: number
}
export interface IPersonal extends ICommonReturn {
  /**
   * 账号
   */
  a: string
  /**
   * 姓名
   */
  n: string
  l: number
  sd: number
  /**
   * 地址
   */
  ll: string
  /**
   * 手机
   */
  p: string
  t: number
  d: number
  iw: number
  in: number
  im: number
  la: number
  ai: number
  /**
   * 头像
   */
  avt: string
}
export interface IListFormSubmitSummary extends ICommonReturn {
  fr: any[]
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
    { [key: string]: any },
    /**
     * 提示 Placeholder
     */
    { [key: string]: string }
  ][]
  cpo: string
  ifp: boolean
  _U: string
  list: {
    nxt: number
    d: any[]
    mp_fsCA: { [key: string]: string }
    mpFrs: { [key: string]: any[] }
    mpLoc: { [key: string]: string }
    mpCt: { [key: string]: string }
  }
}
export interface IMikeCRMAPIOptions {
  debug?: boolean
  apiHost?: string
  account: string
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
export class MikeCRMAPI extends RequestBase {
  private options: IMikeCRMAPIOptions
  private uvi: string
  private PHPSESSID: string
  constructor(options: IMikeCRMAPIOptions) {
    super(options.debug)
    this.options = {
      debug: false,
      apiHost: 'https://www.mikecrm.com/handler/web/',
      ...options,
    }
  }
  /**
   * 登录系统
   */
  login() {
    return new Promise((resolve, reject) => {
      request(
        `${this.options.apiHost}login/handleLogin.php`,
        {
          method: 'POST',
          form: {
            d: this.options.account,
          },
        },
        (err, res) => {
          if (err) {
            reject(err)
            return
          }
          const cookie = String(res.headers['set-cookie'])
          cookie.replace(/\b(uvi|PHPSESSID)=(\w+)\b/g, (all, name, value) => {
            this[name] = value
            return ''
          })
          resolve()
        }
      )
    })
  }
  /**
   * 获取当前账号信息
   */
  getPersonalData(): Promise<IPersonal> {
    return (this.uvi ? Promise.resolve() : (this.login() as any)).then(() => {
      return this.request(
        `${this.options.apiHost}settings/handleGetPersonalData.php`,
        {
          method: 'POST',
          headers: {
            Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
          },
        }
      )
    })
  }
  /**
   * 获取表单提交记录
   * @param form 表单编号
   */
  getListFormSubmitSummary(form: number) {
    return (this.uvi ? Promise.resolve() : (this.login() as any)).then(() => {
      return this.request(
        `${this.options.apiHost}form_submit/handleGetListFormSubmitSummary.php`,
        {
          method: 'POST',
          headers: {
            Cookie: `PHPSESSID=${this.PHPSESSID}; uvi=${this.uvi}`,
          },
          form: {
            d: JSON.stringify({ cvs: { i: form } }),
          },
        }
      )
    })
  }
}
/*<remove>*/
const mikecrm = {
  MikeCRMAPI: MikeCRMAPI,
}
/*<remove>*/
