console.log(process.env.BOT_TOKEN);
module.exports = {
  app: {
    px: "-",
    token: process.env.BOT_TOKEN,
    playing: "by Paradox ❤️",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "DJ",
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "seek",
        "shuffle",
        "skip",
        "stop",
        "volume",
      ],
    },
    maxVol: 100,
    loopMessage: false,
    discordPlayer: {
      leaveOnEnd: false,
      leaveOnStop: false,
      leaveOnEmpty: false,
      leaveOnEmptyCooldown: 864000,
      bufferingTimeout: 5000,
    },
  },
};
