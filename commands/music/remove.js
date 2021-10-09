module.exports = {
  name: "remove",
  aliases: ["rm"],
  utilisation: "{prefix}remove",
  voiceChannel: true,

  execute(client, message, args) {
    const queue = player.getQueue(message.guild.id);

    if (!queue || !queue.playing) {
      return message.channel.send(
        `No music currently playing ${message.author}... try again ? ❌`
      );
    }
    const index = args[0];
    const removedTrack = queue.tracks[index];
    const success = queue.remove(index);

    return message.channel.send(
      success
        ? `Removed ${removedTrack.title} ✅`
        : `Something went wrong ${message.author}... try again ? ❌`
    );
  },
};
