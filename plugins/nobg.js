
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!mime) throw 'Reply Gambar nya'
    m.reply('bentar wak,harap bersabar sedikit😈....')
    let media = await q.download()
    let url = await uploadImage(media)
    await conn.sendFile(m.chat, await (await fetch(`https://api.lolhuman.xyz/api/removebg?apikey=GataDios&img=${url}`)).buffer(), 'Nobg.png', 'Ni wak', m)
  } catch (error) {
    m.reply('Maaf Wak Terjadi Eror😢.')
    console.log(error) // Opsional, untuk melihat detail error di console
  }
}

handler.help = ['removebg']
handler.tags = ['']
handler.command = /^(removebg|nobg)$/i
handler.limit = true
handler.private = false

export default handler