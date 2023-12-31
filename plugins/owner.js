import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(m.sender);
    let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");

    conn.adReply(
        m.chat,
        `*HAI KAK INI ADALAH OWNER SILVIA*`.trim(),
        'Tekan Tautan Ini Untuk Follow',
        '©Silvia X Malix 2023-2025',
        ppUrl,
        'https://instagram.com/imron_dohc_',
        m
    );

    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Malix Anak Jamsut MD\nNICKNAME:👑 Owner SILVIA OLIVIA OTSUKA\nORG:Malix Otsuka Js\nTITLE:soft\nitem1.TEL;waid=6283152615606:6285760429312\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://instagram.com/_cowok_kul_\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:silviaotsuka@gmail.com\nitem3.X-ABLabel:💌 Mail Owner SILVIA OTSUKA\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 21-12-2004\nEND:VCARD`;

    const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak });
    let caption = `👋 Hai *@${who.split("@")[0]}*, Ni Owner *Silvia* kak, Jangan Lupa Di Save >_<`;
};

handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|pengembang|creator)$/i;

export default handler;