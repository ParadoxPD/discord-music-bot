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
    const index = args[0];
    const jumpedToTrack = queue.tracks[index];
    const success = queue.jump(index);

    return message.channel.send(
      success
        ? `Jumped to ${jumpedToTrack.title} ✅`
        : `Something went wrong ${message.author}... try again ? ❌`
    );
  },
};
