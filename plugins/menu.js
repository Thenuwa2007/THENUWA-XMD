const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",
    react: "📂",
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

*⇆ HII MY DEAR FRINENDS...I AM THENUWA XMD ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚃𝙷𝙴𝙽𝚄𝚆𝙰 𝚇𝙼𝙳 𝙵𝚄𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 👋*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙲𝚈𝙱𝙴𝚁 𝚇 𝚃𝙷𝙴𝙽𝚄𝙻𝙰👨🏻‍💻*

*┌─〈 ✦𝗧𝗛𝗘𝗡𝗨𝗪𝗔 𝗫𝗠𝗗✦ 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖𝚃𝙷𝙴𝙽𝚄𝚆𝙰 𝚇𝙼𝙳❖*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *𝚅.1.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
 ┋ * *.
 ┋ * *.
 ┋ * *.
 ┋ * *.
 *┋* *.
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.
*┋* *.
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ᴘɪɴɢ*
*┋* *.
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.
*┕───────────────────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗛𝗘𝗡𝗨𝗟𝗔 𝗫𝗠𝗗 〽️𝗗*
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
title: '◀︎THENUWA XMD MENU▶︎',
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
