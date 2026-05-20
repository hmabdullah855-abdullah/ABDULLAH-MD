const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ABDULLAHMDofficial/ABDULLAH-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://Abdullah-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ABDULLAHMDofficial/ABDULLAH-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/hmabdullah855-abdullah/ABDULLAH-MD.git",
REPO_NAME: process.env.REPO_NAME || "ABDULLAH-MD",
BOT_NAME: process.env.BOT_NAME || "ABDULLAH-MD",
DESCRIPTION: process.env.DESCRIPTION || "ABDULLAH MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923229309266",
OWNER_NAME: process.env.OWNER_NAME || "ABDULLAHMD Official",
ST_SAVE: process.env.ST_SAVE || "ABDULLAH-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "ABDULLAH-MD-BY-ABDULLAHMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY ABDULLAH-MD`* _*POWERD BY*_ *ABDULLAHMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "ABDULLAH-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ ABDULLAH-MD BY ABDULLAH-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363348739987203@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbCWxb75Ui2ghzk8wR1O",
INSTA: process.env.INSTA || "https://www.instagram.com/m_abdullah7156?igsh=aXhyc3VxdmJxOHl5",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
OWNER_IMG: process.env.OWNER_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
AI_IMG: process.env.AI_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://i.ibb.co/s9Cr1VSX/file-000000006d207207b33a182396f1a27f.png",
GROUP_IMG: process.env.GROUP_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
FUN_IMG: process.env.FUN_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
OTHER_IMG: process.env.OTHER_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
NEWS_IMG: process.env.NEWS_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg",
PP_IMG: process.env.PP_IMG || "https://i.ibb.co/bgNjJjNZ/20260520-102504.jpg"
};
