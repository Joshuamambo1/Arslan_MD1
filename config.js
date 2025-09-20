const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xRYXp4L2tPY1Rud2pSZ0d6YmQ4bS84a1RzQmhBa2I2YUdVdXp0UXJIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVBkLzU5Mm9wZkdWT3lTQjZYWnQwa0k2UkVLbzdKbExnbUpSSVZGMkhDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS25McTU1MENURGkyNTM1UVg0Q2V6MHhiODhvT3NRdm4wRWFBcW5zTG1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicnBGa01zRUtaT2cyczFSbThUREdVZXNOZHpLS1YzYnlzek5Ld1FhNzBRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHL2RFckVKblcrMlVUczdNU01qTXFDVHB1NGNRVVJNbXZwMXgxM05Ra0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEyUzVWWHhkRzFrSXRvdnRwUmZvOHlWdS9IRFBSYTBMT3lTYWNPM3ZDbms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJxbDZ6SDkyZGpQajd5YkR4dnpHdWUvaG1LTDhlUTIwNThZUDBVU09rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk8yMjl1dnA1TnZqWWE1SS9BUFFnVmpjYndpc3RZMktzVDRCa1VQd3dpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDcW1YT3hGektLWXQ5MERzUDBMT2E5TWZMNVVaZVZOMjRBTW5UNWxDRnhkN3NEYW8yQllNZWJtaWM4bDNUeVU1TFo0Q2ZUcHBHU0x0eFZuNTBJTUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiIrd2UyVnBpNUdnaDNXcFpveERuSENxcGQ3VlY0NEdjOE1WUVM1RmthSGVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzU05WS0dXUyIsIm1lIjp7ImlkIjoiMjYzNzM4NDAzMjA1Ojc4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl5/wnZeX8J2XpyDwnZWB8J2VoPCdlaTwnZWZ8J2VpvCdlZLwnZWe8J2VkvCdlZ7wnZWT8J2VoPCdn5kt8J2Vi/CdlZbwnZWU8J2VmSIsImxpZCI6IjE4OTY0NDkwMTc2MTE4NDo3OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmNzZSb1FxSzIzeGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVWTUJ0NWMrZkFUcFZKMGF4R3JmZno1djZuOTZsaTBEUDB6Z3Y5VHZQelk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFHZUw5UnA5MEhKcDVXeHhpUlIxMytXdXNQaWQ1UmFIVEZValRRdzhPeWthN3k3Rm5zU0dEaXlJOElocE11czU4bkMwbjdSc2FuSzUxZWE1WjlneUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGc1hLRG1rSzJVcVp2QTZQdFJ6Mm9XT3U1UU8wc3FWUHNGemRNdk4zNVFPRksxdndDVHlDU3Jzb21sOXRWR0M0OUxnWTQ2RzlCK1J2WlVYcGNaR1FCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzczODQwMzIwNTo3OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYbFRBYmVYUG53RTZWU2RHc1JxMzM4K2IrcC9lcFl0QXo5TTRML1U3ejgyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgzMjAzMDEsImxhc3RQcm9wSGFzaCI6Im5tM0JiIn0=,
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ᴊᴏsʜᴜᴀᴍᴀᴍʙᴏ𝟭-ᴛᴇᴄʜ_MD 🇿🇼💎*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/x1g8H1Hp/midkingdoctorconnected.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Joshuamambo1_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Joshuamambo1_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263738403205",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "JoshKing Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Joshuamambo1_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/x1g8H1Hp/midkingdoctorconnected.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*MidKing_MD*🇿🇼💎",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263777756184",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
