
// backend
//skapar eget server
//Jag kommer skapa en folder i samma mapp
//som vi har andra filarna, döper server
//och i den här mappen som.. skapa en ny file som
// heter server.js

//skapar http://  med node.js
//node har inbyggd moduele som hjälper oss
//pratar http med t ex) till webbläsare
//Så vi ska hämta in den här modulen 
//och vi gör det igen 
//skapar en variabel precis om vanligt
// döper http och för att hämta in nånting i
//när vi håller på med react så inkort ord
// använder vi impotera olika moduler 
//node har en liknande sätt på att göra
// annat ord , de använder ordet require istället
// och ... require är en node function som tillgångtill
// alla kör vi node
//här kan då hämtar vi olika moduler .
//första hand hämtar vi som nämde 'http'
// ex) const http =  require('http')
// det här är som packetet , massa med kod hjälper oss
//skicka ut det här html koden till webbläsare.
//Jag kommer hoppa vidare lite bara lite här visa
//hur själva http packetet används
// Det finns nämligen i det här http packetet , en server
// som vi köra då. så att smydig node 
//url host namn, hemsidan adressen , //8080, localhost
// medelande ,req.url
// servern svarar, då kommer webbläsaren hänger med
//status koden med 200
// inbyggd function som writeHead(200), status kod
// status koden med 404 som vi hittade inte efter kanske fil..server, krasha..
//felaktig hantering osv
// redirekt eller annan sida , status kod (500)
// vi kommer gå genom express senare , efter middag
// klarar, vi kommer inte skicka mer   res.end()
// cd server, ls , tittar på katalogerna
// vi har server.js 
// vi skriver node server.js som väldigt enkelt
// ingeting hända?  det är helt rätt i det här 
// servern väntar på bara anrop från hemsidan 

const http = require('http')
const fileSystem = require('fs')

const helloWorld = (request, response) => {
  console.log('Request URL: ', request.url)

  if (request.url === '/andra-sidan') {
    response.writeHead(200)
    response.end('<html><head><meta charset="utf-8"></head><body><div style="background: blue;">Hej från andra sidan!</div></body></html>')
    return
  }

  fileSystem.readFile('index.html', (error, content) => {
    if (error) {
      response.writeHead(404)
      response.end()
      return
    }

    response.writeHead(200)
    response.end(content)
  })

  //response.writeHead(200)
  //response.end('<html><head><meta charset="utf-8"></head><body><div style="background: red;">Hej från första sidan!</div></body></html>')
}

const server = http.createServer(helloWorld)
server.listen(8080)