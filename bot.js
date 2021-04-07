const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//////////////////////////////////////////////////
const DIG = require("discord-image-generation");

client.on("message", async (message) => {
    if (message.content === "!delete") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!grey") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Greyscale().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!invert") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Invert().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!sepia") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Sepia().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!ad") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Ad().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!affect") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Affect().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!bobross") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Bobross().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!confusedstonk") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.ConfusedStonk().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!black") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.DiscordBlack().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!blue") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.DiscordBlue().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!facepalm") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Facepalm().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!karaba") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Karaba().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!mm") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Mms().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!nostonk") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.NotStonk().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!poutine") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Poutine().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!rip2") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Rip().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!stonk") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Stonk().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!tatoo") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Tatoo().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!thomas") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Thomas().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!trash") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Trash().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
client.on("message", async (message) => {
    if (message.content === "!circle") {
        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Circle().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "efecktbotbykoray.png");;
        message.channel.send(attach)
    }
})
//////////////////////////////////////////////////

client.login(ayarlar.token);