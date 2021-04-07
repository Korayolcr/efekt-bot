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

> [!delete](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!grey](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!invert](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!sepia](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!ad](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!affect](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!bobross](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!confusedstonk](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!black](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!blue](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!facepalm](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!karaba](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!mm](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!nostonk](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!poutine](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!rip2](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!stonk](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!tatoo](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!thomas](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!trash](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.
> [!cricle](https://discord.gg/ZxgSc3v4pA) → Profiline efekt uygular.

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
    name: 'efekt2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!efekt2'
};