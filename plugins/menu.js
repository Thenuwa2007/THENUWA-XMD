const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",
    react: "📜",
    alias: ["panel","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
const config = await readEnv();
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Qᴜᴇᴇɴ-ʟɪᴛʜᴜ-ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟɪᴛʜᴜᴍ👨🏻‍💻*

*┌─〈 ✦🆀𝐔𝐄𝐄𝐍-🅻𝐈𝐓𝐇𝐔-🅼𝐃✦ 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖Qᴜᴇᴇɴ-ʟɪᴛʜᴜ-ᴍᴅ❖*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
 ┋ * *.ᴛɪᴋᴛᴏᴋ <ᴜʟʀ>*
 ┋ * *.ꜱᴏɴɢ <ɴᴀᴍᴇ>*
 ┋ * *.ꜰʙ <ᴜʟʀ>*
 ┋ * *.ɪᴍɢ <ɴᴀᴍᴇ>*
 *┋* *.ᴍᴇᴅɪᴀꜰɪʀᴇ <ᴜʟʀ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ᴘɪɴɢ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┕───────────────────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *POWERED BY QUEEN-LITHU-MD*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from, { text: madeMenu ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "QUEEN-LITHU-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: '◀︎QUEEN-LITHU-MD MENU▶︎',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VasctJ90LKZDfJ4JZp2d" ,
thumbnailUrl: "https://unitedcamps.in/Images/file_5278.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
