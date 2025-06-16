const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')


// Ping command
const pingCommand = {
    pattern: "ping",
    react: '📟',
    alias: ["speed"],
    desc: "Check bot's ping",
    category: "main",
    use: ".ping",
    filename: __filename
};

cmd(pingCommand, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = new Date().getTime();
        const initialMessage = { text: "```Pinging To THENULA-XMD!!!```" };
        const options = { quoted: quoted };
        let msg = await conn.sendMessage(from, initialMessage, options);
        const endTime = new Date().getTime();
        return await conn.edite(msg, `*Pong*\n *${endTime - startTime} ms*`);
    } catch (error) {
        reply("*Error !!*");
        console.error(error);
    }
});
