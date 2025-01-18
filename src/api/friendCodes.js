import axios from 'axios';

// https://docs.google.com/spreadsheets/d/e/2PACX-1vS_UPBN4vZVrODQZVxQLBDPVAAqPBlqbddynLSkbKDam1TagN8pGMC_lfOpwcVZvXW5uqNHcPMpaCX2/pubhtml
// 替換成你的 spreadsheet ID
const SPREADSHEET_ID = '1WdIH54M7BBvRIS-UUtva9rVDvgJZNYXCH3AQep7tzCc';
const API_KEY = 'AIzaSyBShPyVWqfNA1odtb42EE6cvedpSFsTmWM';
const RANGE = 'friendcode1'; // 你的工作表名稱

const SHEETS_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

export const getFriendCodes = async () => {
  try {
    const response = await axios.get(SHEETS_URL);
    const rows = response.data.values || [];
    
    // 假設第一行是標題
    // const headers = rows[0];
    return rows.slice(1).map(row => ({
      name: row[0], // 假設第一列是 name
      fc: row[1]  // 假設第二列是 fc
    }));
  } catch (error) {
    console.error('獲取好友代碼失敗:', error);
    throw error;
  }
};