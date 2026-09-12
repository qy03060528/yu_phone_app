/* ========================================
 * 屿·迷你手机 —— 大脑连接桥（网页侧）
 * 让网页的聊天/工具真正连上「本地大脑服务器」
 * 地址：http://127.0.0.1:9010
 * ======================================== */

const YU_BRAIN = (window.location.hostname || '').match(/^(\d+\.){3}\d+$|^localhost$/i)
  ? 'http://127.0.0.1:9010'          // 本机跑时
  : (window.YU_BRAIN_HOST || 'http://127.0.0.1:9010');  // 别处跑时手动指定

async function brainChat(text, history){
  const res = await fetch(YU_BRAIN + '/chat', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ text, history: history || [] })
  });
  if(!res.ok){ throw new Error('大脑 HTTP '+res.status); }
  const data = await res.json();
  return data.reply;
}

async function brainTool(name, params){
  const res = await fetch(YU_BRAIN + '/tool', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ name, params: params||{} })
  });
  if(!res.ok){ throw new Error('工具 HTTP '+res.status); }
  return res.json();
}

async function brainHealth(){
  try{
    const res = await fetch(YU_BRAIN + '/health');
    if(!res.ok) return {ok:false};
    return await res.json();
  }catch(e){ return {ok:false}; }
}

window.brainChat = brainChat;
window.brainTool = brainTool;
window.brainHealth = brainHealth;
window.YU_BRAIN = YU_BRAIN;