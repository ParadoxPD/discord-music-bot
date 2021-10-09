module.exports = {
  name: "jump",
  aliases: ["jm"],
  utilisation: "{prefix}jump",
  voiceChannel: true,

  execute(client, message, args) {
    const queue = player.getQueue(message.guild.id);

    if (!queue || !queue.playing) {
      return message.channel.send(
        `No music currently playing ${message.author}... try again ? ❌`
      );
    }
    const index = args[0] - 1;
    const jumpedToTrack = queue.tracks[index];
    console.log(jumpedToTrack.title);
    queue.jump(jumpedToTrack);
    const success = queue.skip();
    console.log(success);
    return message.channel.send(`Jumped to ${jumpedToTrack.title} ✅`);
  },
};
