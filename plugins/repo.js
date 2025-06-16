const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `* *_THENUWA XMD BOT REPO_* 


* Repo:* https://github.com/Thenuwa2007/THENUWA-XMD

OWNER https://wa.me/94715603835?text=*Hi_I_AM_THENUWA_XMD_OWNER*l


_Thank you for choosing THENUWA XMD

*Join My WhatsApp Channel✓ - :*https://whatsapp.com/channel/0029VbA97wVElagprBAP9W0n 


> *𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗛𝗘𝗡𝗨𝗪𝗔 𝗫𝗠𝗗 〽️𝗗* - : © dave*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/jgnhg4.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
