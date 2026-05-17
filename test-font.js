import https from 'https';
https.get('https://raw.githubusercontent.com/google/fonts/main/ofl/montserrat/static/Montserrat-ExtraBold.ttf', (res) => {
  console.log(res.statusCode);
});
