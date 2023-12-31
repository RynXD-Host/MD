let handler = async (m, { conn, usedPrefix }) => {
	let donasi = `
╭─「 • *ᴘᴜʟꜱᴀ* • 」
│ • *TELKOM* ${pay.pulsa}
╰─────

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • *ᴅᴀɴᴀ* 083152615606
│ • *ɢᴏᴘᴀʏ* 083152615606
│ • *ᴏᴠᴏ* 083152615606
╰─────

_◛˖ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ ᴜɴᴛᴜᴋ ʏᴀɴɢ ꜱᴜᴅᴀʜ ʙᴇʀᴅᴏɴᴀꜱɪ_`
await conn.sendFile(m.chat, pay.qris, 'qris.jpg', donasi, m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
export default handler