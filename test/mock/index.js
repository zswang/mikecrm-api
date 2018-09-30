const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let urlInfo = url.parse(req.url, true)
  switch (urlInfo.pathname) {
    case '/login/handleLogin.php':
      res.setHeader('set-cookie', 'uvi=hhhhhhh; PHPSESSID=xxxxxxxx;')
      res.end('', 200)
      return

    case '/settings/handleGetPersonalData.php':
      res.end(
        JSON.stringify({
          r: 0,
          a: 'zswang',
          n: 'Wang Jihu',
          l: 2012,
          sd: 0,
          ll: 'Beijing, China',
          p: '110',
          t: 1,
          d: 0,
          iw: 0,
          in: 1,
          im: 1,
          la: 0,
          ai: 0,
          avt: 'empty.png',
        }),
        200
      )
      return

    case '/form/handleGetListForm_all.php':
    case '/form/handleGetListFormSummary.php':
      res.end(
        JSON.stringify({
          r: 0,
          a: 0,
          u: 0,
          ifp: 1,
          ftkv: 0,
          fcki: 0,
          m: 0,
          c: 0,
          g: [[2001, 'One', 1, 0], [2002, 'Two', 1, 0], [2003, 'Three', 1, 0]],
          _U: 'empty/',
          list: {
            d: [
              [
                200015053,
                0,
                0,
                1,
                null,
                null,
                null,
                'new',
                0,
                0,
                668,
                null,
                null,
                null,
              ],
            ],
            mp_frLA: {
              '200249374': '2018-09-29 23:17',
            },
            mp_frCA: {
              '200249374': '2018-09-29 17:51',
            },
            mp_frUA: {
              '200249374': '2018-09-29 23:26',
            },
            mpUs: { '668': ['zswang', 1] },
          },
          nxt: true,
        }),
        200
      )
      return

    case '/form_submit/handleGetListFormSubmit_all.php':
    case '/form_submit/handleGetListFormSubmitSummary.php':
      res.end(
        JSON.stringify({
          r: 0,
          fr: [
            'new',
            2,
            '870aw',
            'zswang.mikecrm.com/870aw',
            2,
            0,
            0,
            null,
            null,
            null,
            null,
            null,
            0,
            null,
            null,
            {
              stt: 'Thank you',
              std: '',
            },
            null,
          ],
          ifp: false,
          _U: '/uploads/images',
          list: null,
        }),
        200
      )
      return

    case '/close':
      server.close()
      break
  }
  res.writeHead(404)
  res.end('Not Found')
})
server.listen(3636)
