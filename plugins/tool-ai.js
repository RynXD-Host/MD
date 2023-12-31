import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Mau Nanya Apa???`
let lix = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`)
let hasil = await lix.json()
conn.adReply(
        m.chat,
        `${hasil.data}`.trim(),
        'Tekan Tautan Ini Untuk Follow',
        '©Silvia X Malix 2023-2025',
        'https://telegra.ph/file/3b6e204840a35e854d14f.png',
        'https://instagram.com/imron_dohc_',
        m)
    }  
handler.help = ['ai', 'openai']
handler.tags = ['main']
handler.command = /^(ai|chatgpt|openai)$/i
export default handler