import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`Kirim/Balas Foto Dengan Caption ${usedPrefix + command}`)
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`*Format ${mime} tidak didukung!*`)
    m.reply(wait)
    let img = await q.download()
    let url = await uploadImage(img)
    let anime = API('rose', '/image/h5tuqq', { url: url }, null)
    await conn.sendFile(m.chat, anime, 'anime.png', 'Nih Kak', m)
}
handler.help = ['jadianime']
handler.tags = ['tools']
handler.command = /^(jadianime)$/i
handler.limit = true
handler.onlyprem = true
export default handler