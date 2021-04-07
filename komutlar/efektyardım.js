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

> [!gay](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!wasted](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!rip](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 
> [!şaka](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!hapis](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 
> [!tablo](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!komünist](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 
> [!boğazla](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!trigger](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 
> [!simp](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!hearts](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 
> [!glitch](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!hitler](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!like](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 
> [!dislike](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!silah](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular. 

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
    name: 'efekt', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!efekt'
};