let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group Silvia_
*Offcial Group*
${link.gc}

*Jangan Lupa Follow Instagram*
https://instagram.com/_cowok_kul_
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
