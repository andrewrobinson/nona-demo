# THE UNSCIENTIFIC LOVE COMPATIBILITY CALCULATOR API - Coding Assesment

## Submission by Andrew Robinson <andrewmcrobinson@gmail.com>

## To run server
```bash
npm install
npm start
or 
nodemon server.js
```

## To test running server with curl / Postman
```bash
curl -H "Content-Type: application/json" -d '{"personOne": {"name": "Mary"},"personTwo": {"name": "James" }}' http://localhost:3000/ 
```

This json input format is easily extensible should you need surname, date of birth etc for other calculators. I chose to echo the people back in the response too.

## To run unit tests
```bash
npm test
```


