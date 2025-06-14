const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `┏━❮ 🔥𝗧𝗛𝗘𝗡𝗨𝗪𝗔 𝗫𝗠𝗗 〽️ ❯━
┃◈┃🤖 ʙᴏᴛ ɴᴀᴍᴇ : 𝚃𝙷𝙴𝙽𝚄𝚆𝙰 𝚇𝙼𝙳
┃◈┃🔖 ᴠᴇʀsɪᴏɴ : 2.0.0 ʙᴇᴛᴀ
┃◈┃📟 ᴘʟᴀᴛғᴏʀᴍ : ʀᴇᴘʟɪᴛ
┃◈┃👨‍💻ᴏᴡɴᴇʀ: 𝚃𝙷𝙴𝙽𝚄𝚆𝙰 𝚇𝙼𝙳

┃◈┃📆 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())} 
┃◈┃📈ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃◈┗━━━━━━━━━━━━━━𖣔𖣔
╰──────────────┈⊷
> ©Powerd By THENUWA XMD`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://raw.githubusercontent.com/Thenuwa2007/BOT-HELPER/refs/heads/main/THENUWA%20XMD.png` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: 'ᑕ𝐇𝐀𝐍𝐄𝐋 𝐉𝐈𝐃',
                    newsletterName: 'THENUWA XMD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
