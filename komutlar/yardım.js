const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(RANDOM)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const koray = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » EleXtar Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/794123764472217664/797410756748115998/standard.gif")
.setDescription(`
**• Komutlar**

> [!efekt](https://discord.gg/ZxgSc3v4pA) → Efekt komutlarını gösterir.
> [!efekt2](https://discord.gg/ZxgSc3v4pA) → Efekt komutlarını gösterir. 

**• Linkler**

[Botu davet et](https://discord.com/oauth2/authorize?client_id=799634598992019466&permissions=0&scope=bot) [Destek sunucusu](https://discord.gg/ZxgSc3v4pA)
`)
.setImage('https://cdn.discordapp.com/attachments/808613496425152543/811106449853906954/ex_bot_2.gif')
;
 

return message.channel.send(koray)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};