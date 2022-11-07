const axios = require('axios')

module.exports = {
   name: 'weather',
   category: 'search',
   desc: 'Sends weather info about asked place.',
   async exec(citel, Void,args) {
    if (!args) return citel.reply("Give me location.Baka!!");
    let wdata = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
    );
    let textw = "";
    textw += `*🌟Weather of  ${args.join(" ")}*\n\n`;
    textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
    textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
    textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
    textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
    textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
    textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
    textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
    textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
    textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
    textw += `*Country:-* ${wdata.data.sys.country}\n`;

    Void.sendMessage(
      citel.chat,
      {
        text: textw,
      },
      {
        quoted: citel,
      }
    );

   }
}
