const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/WASI-TECH-BOT-V1";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/733b2d3b5f1d1e1aeec0f.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOMEWELCOM || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923192173398,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ＧＥＮＥＲＴＥＤ ＢＹ ＷＡＳＩ 🇵🇰",
 
  author : process.env.PACK_AUTHER|| "ＩＴＸ",
  packname: process.env.PACK_NAME || "ＷＡＳＩ♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜-𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝗪𝗔𝗦𝗜",

  sessionName:process.env.SESSION_ID || "SUHAIL_02_21_08_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnVOQnZFUzN6THg3M2U0eXlvOFZDMU05UnhzLzAySlVjaFl3dlVnNkdwcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYTlQcTlYOXhTNTZlR1JGUVE5ZjNtQVwiLFxuICBcInBob25lSWRcIjogXCI5YTIxMzA0OC1jMmRmLTQzZTItYTAwYS05YTI0YWViZjMzNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDQwLFxuICAgICAgOTEsXG4gICAgICAxMjEsXG4gICAgICA0MSxcbiAgICAgIDczLFxuICAgICAgNTksXG4gICAgICAyMzYsXG4gICAgICAxOTQsXG4gICAgICAyMzEsXG4gICAgICAxMjYsXG4gICAgICA3NixcbiAgICAgIDI0NSxcbiAgICAgIDExNCxcbiAgICAgIDEwOCxcbiAgICAgIDE5OCxcbiAgICAgIDYwLFxuICAgICAgMjMwLFxuICAgICAgMjMwLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDE1OCxcbiAgICAgIDEzLFxuICAgICAgMTg3LFxuICAgICAgMjAyLFxuICAgICAgMTkzLFxuICAgICAgNzYsXG4gICAgICAyMTcsXG4gICAgICAyMzIsXG4gICAgICAyMDcsXG4gICAgICAxNTgsXG4gICAgICAxMixcbiAgICAgIDg1LFxuICAgICAgMjUwLFxuICAgICAgMjQwLFxuICAgICAgMTM4LFxuICAgICAgMjEwLFxuICAgICAgMzIsXG4gICAgICAxMjksXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNExNQllWWlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5OTQzNTQzODo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxOTM1MzAxMjUxMzA5Ojc3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wveTB1NENFSStUdXJZR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaUhiNCszbEVFYktJdDNzUnhNek1wZk5DMDVTRFhtdFU5ejVTNE5tYTF4ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhUHF0Z3Arak5wQk5HdC85aWNmWFJqZGRPMGtFVkU1Vm43TnFOa2tXLy84NlVTMFJGS0NtT0FxaTVnRjQyUTlZM29rWWtpRFJ1SjNyK1FCUDMyNnRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSenRxVFp0SllmMS9qMjd5R095OFhCbzUwOW9aZHhyZzRWZWg4czlxYkxGZXFQNGlGVnBTNmdiS2VoWVM2UkRsNWFmd3hVNHNxWWNPUVBwYzNocVlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTk0MzU0Mzg6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ4MTE2NjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "RybcWhfzZJ7Wd46dgGE21kLt",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "25",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "5c804a3fc8fb6ca21eeaecacf9935870",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
