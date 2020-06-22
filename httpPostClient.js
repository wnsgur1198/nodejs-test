﻿const http = require('http')

//const data = '{"query": "select * from myTable"}'
const data = "select * from myTable"

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.write(data);
req.end()