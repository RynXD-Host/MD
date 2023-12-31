import { tiktok } from '@xct007/frieren-scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukan URL!\n\nContoh:\n${usedPrefix + command} https://vt.tiktok.com/ZS8oHC5Ka/`)
    if (!/https|tiktok|com/i.test(text)) return m.reply('Invalid Link!')
    m.reply(wait)
    let { play, music, description } = await tiktok.v1(text)
    let video = await conn.sendFile(m.chat, play, 'tiktok.mp4', description ? description: '', m)
    conn.sendFile(m.chat, music, 'tiktok.mp3', '', video, false, { mimetype: 'audio/mpeg' })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktok(mp3|mp4|video|audio)|tt|tt(mp3|mp4|video|audio))$/i
handler.limit = true
export default handler