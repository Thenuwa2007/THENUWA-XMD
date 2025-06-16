const config = require('../config')
const { cmd, commands } = require('../command')
const pdfUrl = "https://i.ibb.co/tC37Q7B/20241220-122443.jpg";


cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
                if (!checkAccess(senderNumber, isGroup)) {
            return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode !*");
        }
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: 'THENUVA XMD 𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
            
            await conn.sendMessage(from, {
      document: { url: pdfUrl }, // Path to your PDF file
      fileName: 'Didula MD', // Filename for the document
      mimetype: "application/pdf",
      fileLength: 99999999999999,
      image: { url: 'https://files.catbox.moe/jgnhg4.jpg' },
      pageCount: 2024,
      caption: `⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : ${ping} ms`,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: 'THENULA XMD​',
          newsletterJid: "120363420387793916@newsletter",
        },
        externalAdReply: {
          title: '©Didula MD V2 💚',
          body: ' *Didula MD V2 💚*',
          thumbnailUrl: 'https://files.catbox.moe/jgnhg4.jpg',
          sourceUrl: 'https://wa.me/message/DIDULLTK7ZOGH1',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
        
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
