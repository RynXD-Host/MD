import fetch from "node-fetch"
let handler = async (m, { conn, args, command }) => {
	let img = elainajpg.getRandom()
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
     ).length;
    conn.reply(m.chat, `_Bot Ini Memiliki Total ${totalf} Fitur..._`, m, {
      contextInfo: {
        externalAdReply : {
            showAdAttribution: true,
            mediaType: 1,
            title: wm,
            thumbnail: await (await fetch(img)).buffer(),
            mediaUrl: img,
            sourceId: ' ',
            sourceUrl: ''
        }
      }
    })    
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler