import fetch from 'node-fetch';

let handler = async (m, { text }) => {
  if (!text) throw new Error('Cari Apa?');
  
  try {
    let res = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=gatadios&query=${text}`);
    let anu = await res.json();
    
    anu = anu.result.map((v) => `*Title:* ${v.title}\n*Link*: ${v.link}`).join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n');
    
    m.reply(anu);
  } catch (error) {
    console.error('Error fetching data:', error);
    m.reply('Maaf, ada kesalahan dalam memproses permintaan.');
  }
};

handler.help = ['xnxxsearch'];
handler.tags = ['internet'];
handler.command = /^(xnxxsearch)$/i;
handler.premium = true;

export default handler;
