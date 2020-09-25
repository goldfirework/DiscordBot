const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "?";

client.on('error', (error) => {
        const c = client.channels.cache.get('698748849291788533');
        message.channel.send('An error occured with that command, try again later.')
        if(message.channel.type === `text`) {
         const c = client.channels.cache.get('698748849291788533');
         const embed = new MessageEmbed()
             .setTitle(`Error with command ${cmd.help.name}`)
             .addField('Command run by', `${message.author.tag} (${message.author.id})`)
             .addField('Command run in', `${message.guild.name} (${message.guild.id})`)
             .setDescription(err && err.stack ? err.stack.substring(0, 2000) : require('util').inspect(err) || 'Nothing here? Check console')
             .setTimestamp()
             .setColor('RED');

         return c.send(embed);
     } else {
         if(message.channel.type === `dm`) {
        const embed = new MessageEmbed()
             .setTitle(`Error with command ${cmd.help.name}`)
             .addField('Command run by', `${message.author.tag} (${message.author.id})`)
             .setDescription(err && err.stack ? err.stack.substring(0, 2000) : require('util').inspect(err) || 'Nothing here? Check console')
             .setTimestamp()
             .setColor('RED');
        return c.send(embed);
      };
     };
   };
   });

// client.on('message', message => {
//   if (!message.content.startsWith(prefix)) return;
//   const args = message.content.trim().split(/ +/g);
//   const cmd = args[0].slice(prefix.length).toLowerCase();
//
//   if (cmd == "avatar") {
//     if (message.member.hasPermission('MANAGE_GUILD')) {
// //      if (!args[1]) return message.reply('Please specify a avatar');
//       if (args[1]) return client.user.setAvatar(args[1]);
//       if (args[1]) return client.reply("avatar changed!");
//     }else {
//       message.reply("Im sorry but you dont have the perms")
//     };
//   };
// });

client.on('message', message => {
  if (message.content == "!ping") {
    message.reply("Pong!")
  };
});

client.login("NzUzMjM2MjE2Mzk2MzgyMjY4.X1jP5A.l_1cYZT4hGNzFMiFrSA-pDi0LeM")
