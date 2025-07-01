const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const path = require('path');

cmd({
    pattern: "bible",
    desc: "Receive a blessing from the Holy Scriptures",
    category: "religion",
    react: "✝️",
    filename: __filename
},
async (conn, mek, m, {
    from,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply
}) => {
    try {
        let reference = args.join(" ");
        
        if (!reference || reference.trim() === "") {
            return reply("🙏 Dear child of God, please provide a Bible reference (e.g., *John 3:16*) so we may meditate upon His Word.");
        }
        
        let url = `https://apis.davidcyriltech.my.id/bible?reference=${encodeURIComponent(reference)}`;
        
        let res = await fetchJson(url);
        
        if (res && res.success) {
            let message = `✝️ *Blessings from the Word of God: ${res.reference}* ✝️\n\n` +
                          `📖 *Translation:* ${res.translation}\n` +
                          `📜 *Verse Count:* ${res.verses_count}\n\n` +
                          `🔹 *Scripture:*\n${res.text.trim()}\n\n` +
                          `🕊️ *Reflect upon these words, and may the peace of Christ dwell within you.*\n` +
                          `🙏 *Amen. Praise the Lord for His everlasting mercy!* 🙌`;
            
            // Newsletter context info
            const newsletterContext = {
                mentionedJid: [sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420387793916@newsletter',
                    newsletterName: "𝗧𝗛𝗘𝗡𝗨𝗪𝗔 𝗫𝗠𝗗",
                    serverMessageId: 143,
                },
            };

            // Send the blessed message
            await conn.sendMessage(
                from,
                { text: message, contextInfo: newsletterContext },
                { quoted: mek }
            );
        } else {
            return reply("😔 O Lord, we seem to have encountered an error. The API did not return a valid response. Please try again later, and may His light guide you.");
        }
    } catch (e) {
        console.error(e);
        return reply(`⚠️ *Error:* ${e.message || e}\n\n🙏 *May God grant you patience and understanding.*`);
    }
});
