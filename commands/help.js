const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setAuthor("KirottuBot", "https://i.imgur.com/mgDKqhT.png")
  .setThumbnail("https://i.imgur.com/mgDKqhT.png")
  .setFooter("KirottuBot by: Master#4915", "https://i.imgur.com/mgDKqhT.png")
  .setColor("#ffffff")
  .addField("Komennot:", "help\nping\npurge\nsay");

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
