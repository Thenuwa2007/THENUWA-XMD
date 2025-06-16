const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "😸",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*⚒️ THENUWA XMD Support Channels⚒️*

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VbA97wVElagprBAP9W0n

> ❯❯ 𝚃𝙷𝙴𝙽𝚄𝚆𝙰 𝚇𝙼𝙳 𝚆𝙰𝚃𝚂 𝙰𝙿𝙿 𝙱𝙾𝚃 ➣`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
