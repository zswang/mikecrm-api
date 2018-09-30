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
