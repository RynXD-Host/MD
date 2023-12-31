import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!mime) throw 'Reply Gambar nya'
m.reply('bentar wak,harap bersabar sedikit😈....')
let media = await q.download()
let url = await uploadImage(media)
await conn.sendFile(m.chat, await (await fetch(`https://api.lolhuman.xyz/api/imagetoanime?apikey=GataDios&img=${url}`)).buffer(), 'anime.jpg', 'Ni wibu', m)
}
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(toanime|jadianime)$/i
handler.limit = true
handler.private = false

export default handler