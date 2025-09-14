const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05xcmZmelcyelp1VlpiK1VEblJWMlpQNCtwQXQ2TTVBb3AyUmoyT0xVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHdLV3B6YnV5RXZLRVB6aStzZnl1dkxYT3N5VldWbTNiYnk1enBwaE5Cdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SFRmZnlJeHdPZDZvYWhDNEIxeFJsRzFQQUVmS21kOHpOczRFOUw0NUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RnRONnl3S3J3Y1ppT3Fia0VKMnJrM2RkMUlnaHJ2blNUTjdQR21UUG53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMWVBLU0laTUI0eXl0aDFVUlVVdW9PVDdoazViN25kelR3NGp0RnFJMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitiQW1FdjFNbXJTWFhJeWxwMVM4QWc4alY5aFlmK2RJTDR0MXl1blpJMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxReThINDZMYWFDeFd5aFlEVWNJWUZjaXZRM29QY2hnV1dlNjZKMTJtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWt2R2RCRWhtak5KNWx3WmMzcmxqKzJpT0RKaEdGK3VGZlBmeGc4dittYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRzK2dRL1hIZ3dkWEhLV0xsdWVacXM3L0ExOEd3TnNteTF3Q0V3RUhxTmc1cWg5N3NkZHRuMExKZloyMFlTNEZBVUNZcmhuWmpad2ZCSmZRU2FFUml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJZdnhMVUVYci9lTEhwUWZVYzROaElvZWFybVhJVUF6bmh2MDlva1dGVkZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFU1lRVFA4UyIsIm1lIjp7ImlkIjoiMjYzNzM4NDAzMjA1Ojc0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik15YmVzdGx1dlRlY2giLCJsaWQiOiIxODk2NDQ5MDE3NjExODQ6NzRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWDc2Um9RcDlPYnhnWVlEU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlVk1CdDVjK2ZBVHBWSjBheEdyZmZ6NXY2bjk2bGkwRFAwemd2OVR2UHpZPSIsImFjY291bnRTaWduYXR1cmUiOiJ5WExaUXcyVjZvT1o3U1d1dzhRVmdtbENPTzdPRExaTjR1cnR5b0RwNldsWHM5Tm5saUc1eW90L1pYcGw5VEx0L2FwMmRFbnZiNmJzakc0eDFDRUREQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWnJ0QWFqV2djV0kxUGllcnlBV0x5VkdhUHpQbXdPekw1NzM3cmJVZmNhYjdSTE8walJIMXcydFpqMklxR29kRm5KdXh5bEZ1UFZTaFh3NWtIam1KaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3Mzg0MDMyMDU6NzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGxUQWJlWFBud0U2VlNkR3NScTMzOCtiK3AvZXBZdEF6OU00TC9VN3o4MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3ODY2NDEwLCJsYXN0UHJvcEhhc2giOiJubTNCYiJ9,
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
