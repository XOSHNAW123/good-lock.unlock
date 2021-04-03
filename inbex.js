Code Lock lock 

clinet.on("message", async DARMAN => {

  if (DARKMAN.content.startsWith("U")) {

    if (!DARKMAN.member.hasPermission("MANAGE_CHANNELS"))

      return DARKMAN.channel.send("");

    if (!DARKMAN.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;

    DARKMAN.channel.overwritePermissions(DARKMAN.guild.id, {

      SEND_MESSAGES: false

    });

    let embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .setTitle(` 🔒 | Locked Channel

Channel Status : Send Message : ❌ `)     

      .setTimestamp()

    DARKMAN.channel.sendEmbed(embed);

  }

})

Code Unlock unlock 

clinet.on("message", async DARKMAN => {

  if (DARKMAN.content.startsWith("22")) {

    if (! DARKMAN.member.hasPermission("MANAGE_CHANNELS"))

      return DARKMAN.channel.send("L");

    if (!DARKMAN.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;

    DARKMAN.channel.overwritePermissions(DARKMAN.guild.id, {

      SEND_MESSAGES: null

    });

    let embed = new Discord.RichEmbed()

      .setColor("RANDOM")

     .setTitle(`🔓 | unlocked Channel

Channel Status : Send Message : ✅`)

    .setTimestamp()

    DARKMAN.channel.sendEmbed(embed);
client.login("")
  }

});

