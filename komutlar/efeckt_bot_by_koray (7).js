const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {

  let kullanıcı = message.mentions.users.first() || message.author;
  let link = `https://api.devs-hub.xyz/hitler?image=${kullanıcı.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `efektbotbykoray.png`);

  const embed = new MessageEmbed()
    .setTitle(`Hitler efekti uygulamış avatar!`)
    .setColor(`RANDOM`)
    .attachFiles(ek)
    .setImage(`attachment://efektbotbykoray.png`)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "hitler",
  description: "silah <etiket>",
  usage: ""
}; 