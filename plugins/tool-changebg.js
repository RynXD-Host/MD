import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
    let q = m.quoted ? m.quoted: m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw 'Fotonya Mana?'
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    m.reply(wait)
    let img = await q.download?.()
    let url = await uploadImage(img)
    let out = await changebg(url, m.quoted ? m.quoted.text : text)
    await conn.sendFile(m.chat, out, 'out.png', '*DONE (≧ω≦)ゞ*', m)
}
handler.help = ['changebg']
handler.tags = ['tools', 'premium']
handler.command = /^(cb|changebg|changebackground)$/i
handler.premium = true
export default handler

async function changebg(url, color) {
    try {
    const result = await removeBackgroundFromImageUrl({
      url,
      apiKey: apikey.getRandom(),
      size: "regular",
      type: "auto",
      bg_color: color
    });
    return Buffer.from(result.base64img, "base64");
  } catch (e) {
    return {
        status: false,
        error: e
    }
  }
}

const apikey = [
    '6a917eb9dacb9fb2f174acbaece8d21586b44b23',
    'Divb33Vh3YANNFJMPkv4QJs3',
    '61N7EMLJURGuTdYpavHwkWTC'
]