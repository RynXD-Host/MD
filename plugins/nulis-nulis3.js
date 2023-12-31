import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix }) => {
if (!text) throw `Example ${usedPrefix}nulis Teks Yang Ingin Kamu Tulis`
let kertas = `https://api.lolhuman.xyz/api/nulis?apikey=gatadios&text=${text}`
await conn.sendFile(m.chat, kertas, 'error.jpg', 'Lain Kali Nulis Sendiri...\nSilvia X Malix', m)
}
handler.help = ['n'].map(v => v + 'ulis3 <teks>')
handler.tags = ['nulis3']
handler.command = /^nulis3$/i
export default handler
// BY Malix