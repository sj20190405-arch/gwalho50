/**
 * 공통영어2 3·4단원 — 영어단어 4지선다 50 (서버/결과 저장용 Apps Script)
 * 구글 시트 > 확장 프로그램 > Apps Script 의 Code.gs 에 전체를 붙여넣고 저장한 뒤, 배포 > 새 배포(웹 앱) 하세요.
 * 고친 뒤에는 배포 관리 > 수정(연필) > 버전: 새 버전 > 배포 (주소 유지).
 * 단어 수정: SECTIONS 의 e(영어)·k(우리말 뜻)·lv(초/중/고)·n(단어장 번호)·ph(1=숙어).
 * 오답 보기는 같은 단원의 다른 단어에서 뽑으며, 뜻이 겹치는 단어(예: moreover·furthermore)는 함께 나오지 않습니다.
 */

const SECTIONS=[{"t": "3단원-1 (1~50번)", "u": 3, "q": [{"e": "timeless", "k": "영원한, 시대를 초월한", "lv": "고", "n": 1}, {"e": "symbol", "k": "상징", "lv": "중", "n": 2}, {"e": "culture", "k": "문화", "lv": "중", "n": 3}, {"e": "writer", "k": "작가", "lv": "초", "n": 4}, {"e": "publish", "k": "출판하다", "lv": "고", "n": 5}, {"e": "trap", "k": "(덫으로) 잡다; 덫", "lv": "중", "n": 6}, {"e": "tiger", "k": "호랑이", "lv": "초", "n": 7}, {"e": "story", "k": "이야기", "lv": "초", "n": 8}, {"e": "grandmother", "k": "할머니", "lv": "초", "n": 9}, {"e": "sick", "k": "아픈", "lv": "초", "n": 10}, {"e": "deal", "k": "거래; 다루다", "lv": "중", "n": 11}, {"e": "inspiration", "k": "영감", "lv": "고", "n": 12}, {"e": "award-winning", "k": "상을 받은, 수상한", "lv": "고", "n": 13}, {"e": "folktale", "k": "설화, 민간 설화", "lv": "고", "n": 14}, {"e": "brother", "k": "형제, 오빠, 남동생", "lv": "초", "n": 15}, {"e": "sister", "k": "자매, 언니, 여동생", "lv": "초", "n": 16}, {"e": "revive", "k": "되살리다, 부활시키다", "lv": "고", "n": 17}, {"e": "public", "k": "대중; 공공의", "lv": "중", "n": 18}, {"e": "interest", "k": "흥미, 관심", "lv": "중", "n": 19}, {"e": "abundant", "k": "풍부한, 아주 많은", "lv": "고", "n": 20}, {"e": "country", "k": "나라, 국가", "lv": "초", "n": 21}, {"e": "land", "k": "땅, 육지", "lv": "초", "n": 22}, {"e": "estimate", "k": "추정하다, 추산하다; 추정", "lv": "고", "n": 23}, {"e": "appearance", "k": "등장, 출현, 외모", "lv": "고", "n": 24}, {"e": "rock", "k": "바위, 암석", "lv": "중", "n": 25}, {"e": "Bronze Age", "k": "청동기 시대", "lv": "고", "n": 26}, {"e": "depict", "k": "묘사하다, 그리다", "lv": "고", "n": 27}, {"e": "hunt", "k": "사냥하다", "lv": "중", "n": 28}, {"e": "various", "k": "다양한", "lv": "중", "n": 29}, {"e": "include", "k": "포함하다", "lv": "중", "n": 30}, {"e": "aspect", "k": "측면, 양상", "lv": "고", "n": 31}, {"e": "legend", "k": "전설", "lv": "고", "n": 32}, {"e": "musical instrument", "k": "악기", "lv": "중", "n": 33}, {"e": "feature", "k": "~을 특징으로 하다, 등장시키다; 특징", "lv": "고", "n": 34}, {"e": "approximately", "k": "대략, 거의", "lv": "고", "n": 35}, {"e": "percent", "k": "퍼센트, 백분율", "lv": "중", "n": 36}, {"e": "positive", "k": "긍정적인", "lv": "중", "n": 37}, {"e": "light", "k": "빛; 관점, 시각", "lv": "초", "n": 38}, {"e": "foolish", "k": "어리석은", "lv": "중", "n": 39}, {"e": "creature", "k": "생물, 존재", "lv": "고", "n": 40}, {"e": "human", "k": "인간; 인간의", "lv": "중", "n": 41}, {"e": "rich", "k": "부유한, 부자인", "lv": "초", "n": 42}, {"e": "cry", "k": "울다; 울음", "lv": "초", "n": 43}, {"e": "baby", "k": "아기", "lv": "초", "n": 44}, {"e": "mistakenly", "k": "잘못하여, 실수로", "lv": "고", "n": 45}, {"e": "scary", "k": "무서운", "lv": "중", "n": 46}, {"e": "conflicting", "k": "상충하는, 모순되는", "lv": "고", "n": 47}, {"e": "respect", "k": "존경; 존경하다", "lv": "중", "n": 48}, {"e": "power", "k": "힘", "lv": "중", "n": 49}, {"e": "courage", "k": "용기", "lv": "중", "n": 50}]}, {"t": "3단원-2 (51~100번)", "u": 3, "q": [{"e": "scared", "k": "무서워하는, 겁먹은", "lv": "중", "n": 51}, {"e": "injure", "k": "다치게 하다, 부상을 입히다", "lv": "고", "n": 52}, {"e": "kill", "k": "죽이다", "lv": "중", "n": 53}, {"e": "common", "k": "흔한, 공통의", "lv": "중", "n": 54}, {"e": "past", "k": "과거; 지나간", "lv": "중", "n": 55}, {"e": "character", "k": "등장인물, 캐릭터, 성격", "lv": "중", "n": 56}, {"e": "face", "k": "직면하다; 얼굴", "lv": "중", "n": 57}, {"e": "decline", "k": "감소; 감소하다", "lv": "고", "n": 58}, {"e": "population", "k": "개체 수, 인구", "lv": "고", "n": 59}, {"e": "period", "k": "시대, 기간", "lv": "중", "n": 60}, {"e": "extinct", "k": "멸종된", "lv": "고", "n": 61}, {"e": "colonial", "k": "식민지의", "lv": "고", "n": 62}, {"e": "era", "k": "시대", "lv": "고", "n": 63}, {"e": "disappearance", "k": "사라짐, 소멸", "lv": "고", "n": 64}, {"e": "nation", "k": "국가, 민족", "lv": "중", "n": 65}, {"e": "symbolism", "k": "상징성", "lv": "고", "n": 66}, {"e": "modern", "k": "현대의", "lv": "중", "n": 67}, {"e": "selection", "k": "선정, 선택", "lv": "고", "n": 68}, {"e": "mascot", "k": "마스코트", "lv": "중", "n": 69}, {"e": "host", "k": "개최하다, 주최하다; 주최자", "lv": "고", "n": 70}, {"e": "represent", "k": "상징하다, 나타내다", "lv": "고", "n": 71}, {"e": "create", "k": "만들어 내다, 창조하다", "lv": "중", "n": 72}, {"e": "sacred", "k": "신성한", "lv": "고", "n": 73}, {"e": "guardian", "k": "수호자, 보호자", "lv": "고", "n": 74}, {"e": "mention", "k": "언급하다", "lv": "고", "n": 75}, {"e": "verse", "k": "(노래·시의) 구절, 절", "lv": "고", "n": 76}, {"e": "reinterpret", "k": "재해석하다", "lv": "고", "n": 77}, {"e": "version", "k": "판, 버전", "lv": "중", "n": 78}, {"e": "traditional", "k": "전통적인", "lv": "중", "n": 79}, {"e": "attention", "k": "주목, 관심", "lv": "중", "n": 80}, {"e": "worldwide", "k": "전 세계적인; 전 세계에", "lv": "중", "n": 81}, {"e": "million", "k": "백만; 백만의", "lv": "중", "n": 82}, {"e": "view", "k": "보다, 시청하다; 견해", "lv": "중", "n": 83}, {"e": "online", "k": "온라인으로; 온라인의", "lv": "중", "n": 84}, {"e": "wild", "k": "야생의", "lv": "중", "n": 85}, {"e": "report", "k": "보고하다; 보고(서)", "lv": "중", "n": 86}, {"e": "history", "k": "역사", "lv": "초", "n": 87}, {"e": "meaning", "k": "의미", "lv": "중", "n": 88}, {"e": "deny", "k": "부정하다, 부인하다", "lv": "고", "n": 89}, {"e": "museum", "k": "박물관", "lv": "초", "n": 90}, {"e": "make a deal with", "k": "~와 거래를 하다", "lv": "중", "n": 91, "ph": 1}, {"e": "used to", "k": "~하곤 했다", "lv": "중", "n": 92, "ph": 1}, {"e": "be related to", "k": "~와 관련되다", "lv": "고", "n": 93, "ph": 1}, {"e": "at least", "k": "적어도, 최소한", "lv": "중", "n": 94, "ph": 1}, {"e": "date back to", "k": "~로 거슬러 올라가다", "lv": "고", "n": 95, "ph": 1}, {"e": "in a positive light", "k": "긍정적으로, 좋게", "lv": "고", "n": 96, "ph": 1}, {"e": "run away", "k": "달아나다, 도망치다", "lv": "중", "n": 97, "ph": 1}, {"e": "in order to", "k": "~하기 위해", "lv": "중", "n": 98, "ph": 1}, {"e": "due to", "k": "~ 때문에", "lv": "고", "n": 99, "ph": 1}, {"e": "fade away", "k": "(서서히) 희미해지다, 사라지다", "lv": "고", "n": 100, "ph": 1}]}, {"t": "4단원-1 (1~50번)", "u": 4, "q": [{"e": "environment", "k": "환경", "lv": "중", "n": 1}, {"e": "trouble", "k": "곤경, 문제", "lv": "중", "n": 2}, {"e": "planet", "k": "행성, 지구", "lv": "중", "n": 3}, {"e": "sea level", "k": "해수면", "lv": "고", "n": 4}, {"e": "rise", "k": "상승하다, 오르다", "lv": "중", "n": 5}, {"e": "natural disaster", "k": "자연재해", "lv": "고", "n": 6}, {"e": "forest fire", "k": "산불", "lv": "중", "n": 7}, {"e": "flood", "k": "홍수", "lv": "중", "n": 8}, {"e": "increase", "k": "증가하다; 증가", "lv": "중", "n": 9}, {"e": "waste", "k": "쓰레기, 폐기물", "lv": "중", "n": 10}, {"e": "produce", "k": "생산하다", "lv": "중", "n": 11}, {"e": "plastic", "k": "플라스틱", "lv": "중", "n": 12}, {"e": "soil", "k": "토양, 흙", "lv": "중", "n": 13}, {"e": "pollution", "k": "오염", "lv": "중", "n": 14}, {"e": "major", "k": "주요한", "lv": "중", "n": 15}, {"e": "contributor", "k": "원인 제공자, 기여자", "lv": "고", "n": 16}, {"e": "destruction", "k": "파괴", "lv": "고", "n": 17}, {"e": "protect", "k": "보호하다", "lv": "중", "n": 18}, {"e": "climate change", "k": "기후 변화", "lv": "중", "n": 19}, {"e": "dangerous", "k": "위험한", "lv": "중", "n": 20}, {"e": "achieve", "k": "이루다, 달성하다", "lv": "고", "n": 21}, {"e": "goal", "k": "목표", "lv": "중", "n": 22}, {"e": "solution", "k": "해결책", "lv": "중", "n": 23}, {"e": "area", "k": "분야, 영역, 지역", "lv": "중", "n": 24}, {"e": "single-use", "k": "일회용의", "lv": "고", "n": 25}, {"e": "product", "k": "제품", "lv": "중", "n": 26}, {"e": "item", "k": "물품, 품목", "lv": "중", "n": 27}, {"e": "discard", "k": "버리다, 폐기하다", "lv": "고", "n": 28}, {"e": "recycle", "k": "재활용하다", "lv": "중", "n": 29}, {"e": "reduce", "k": "줄이다", "lv": "중", "n": 30}, {"e": "amount", "k": "양", "lv": "중", "n": 31}, {"e": "landfill", "k": "쓰레기 매립지", "lv": "고", "n": 32}, {"e": "dump", "k": "(쓰레기를) 내버리다", "lv": "고", "n": 33}, {"e": "burn", "k": "태우다", "lv": "중", "n": 34}, {"e": "furthermore", "k": "게다가, 더욱이", "lv": "고", "n": 35}, {"e": "metric ton", "k": "미터톤(1,000kg)", "lv": "고", "n": 36}, {"e": "marine", "k": "해양의, 바다의", "lv": "고", "n": 37}, {"e": "species", "k": "(생물의) 종", "lv": "고", "n": 38}, {"e": "mealworm", "k": "밀웜(갈색거저리 애벌레)", "lv": "고", "n": 39}, {"e": "larva (pl. larvae)", "k": "유충, 애벌레", "lv": "고", "n": 40}, {"e": "beetle", "k": "딱정벌레", "lv": "중", "n": 41}, {"e": "bacteria", "k": "박테리아, 세균", "lv": "중", "n": 42}, {"e": "cultivate", "k": "배양하다, 재배하다", "lv": "고", "n": 43}, {"e": "process", "k": "과정", "lv": "중", "n": 44}, {"e": "purify", "k": "정화하다", "lv": "고", "n": 45}, {"e": "polluted", "k": "오염된", "lv": "중", "n": 46}, {"e": "mining", "k": "광업, 채광", "lv": "고", "n": 47}, {"e": "industry", "k": "산업", "lv": "중", "n": 48}, {"e": "globe", "k": "지구, 세계", "lv": "중", "n": 49}, {"e": "dig", "k": "파다", "lv": "중", "n": 50}]}, {"t": "4단원-2 (51~100번)", "u": 4, "q": [{"e": "transport", "k": "운반하다, 수송하다", "lv": "고", "n": 51}, {"e": "expensive", "k": "비싼", "lv": "초", "n": 52}, {"e": "moreover", "k": "게다가, 더욱이", "lv": "고", "n": 53}, {"e": "solve", "k": "해결하다", "lv": "중", "n": 54}, {"e": "fortunately", "k": "다행히도", "lv": "중", "n": 55}, {"e": "eco-friendly", "k": "친환경적인", "lv": "중", "n": 56}, {"e": "cost-effective", "k": "비용 효율이 높은", "lv": "고", "n": 57}, {"e": "restore", "k": "복구하다, 회복시키다", "lv": "고", "n": 58}, {"e": "willow", "k": "버드나무", "lv": "고", "n": 59}, {"e": "extensive", "k": "광범위한, 넓은", "lv": "고", "n": 60}, {"e": "well-developed", "k": "잘 발달된", "lv": "고", "n": 61}, {"e": "root", "k": "뿌리", "lv": "중", "n": 62}, {"e": "naturally", "k": "자연적으로, 자연스럽게", "lv": "중", "n": 63}, {"e": "extract", "k": "추출하다, 뽑아내다", "lv": "고", "n": 64}, {"e": "harmful", "k": "해로운", "lv": "중", "n": 65}, {"e": "material", "k": "물질, 재료", "lv": "중", "n": 66}, {"e": "acidity", "k": "산도, 산성", "lv": "고", "n": 67}, {"e": "heavy metal", "k": "중금속", "lv": "고", "n": 68}, {"e": "research", "k": "연구; 연구하다", "lv": "중", "n": 69}, {"e": "effectiveness", "k": "효과, 효율성", "lv": "고", "n": 70}, {"e": "purpose", "k": "목적", "lv": "중", "n": 71}, {"e": "absorb", "k": "흡수하다", "lv": "고", "n": 72}, {"e": "promising", "k": "유망한, 촉망받는", "lv": "고", "n": 73}, {"e": "explore", "k": "탐구하다, 탐험하다", "lv": "중", "n": 74}, {"e": "effective", "k": "효과적인", "lv": "중", "n": 75}, {"e": "statistics", "k": "통계 (자료)", "lv": "고", "n": 76}, {"e": "generate", "k": "발생시키다, 만들어 내다", "lv": "고", "n": 77}, {"e": "coffee grounds", "k": "커피 찌꺼기", "lv": "고", "n": 78}, {"e": "greenhouse gas", "k": "온실가스", "lv": "중", "n": 79}, {"e": "emission", "k": "배출, 배출물", "lv": "고", "n": 80}, {"e": "biofuel", "k": "바이오 연료", "lv": "고", "n": 81}, {"e": "algae", "k": "조류(藻類), 말", "lv": "고", "n": 82}, {"e": "nutrient", "k": "영양분", "lv": "고", "n": 83}, {"e": "eventually", "k": "결국, 마침내", "lv": "고", "n": 84}, {"e": "renewable", "k": "재생 가능한", "lv": "고", "n": 85}, {"e": "sustainable", "k": "지속 가능한", "lv": "고", "n": 86}, {"e": "in particular", "k": "특히", "lv": "중", "n": 87, "ph": 1}, {"e": "provide A with B", "k": "A에게 B를 제공하다", "lv": "고", "n": 88, "ph": 1}, {"e": "deal with", "k": "~을 처리하다, 다루다", "lv": "중", "n": 89, "ph": 1}, {"e": "throw away", "k": "버리다", "lv": "중", "n": 90, "ph": 1}, {"e": "so far", "k": "지금까지", "lv": "중", "n": 91, "ph": 1}, {"e": "end up in", "k": "결국 ~에 이르게 되다", "lv": "고", "n": 92, "ph": 1}, {"e": "put ~ in danger", "k": "~을 위험에 빠뜨리다", "lv": "중", "n": 93, "ph": 1}, {"e": "turn to", "k": "~에 의지하다, ~으로 눈을 돌리다", "lv": "고", "n": 94, "ph": 1}, {"e": "break down", "k": "분해하다", "lv": "고", "n": 95, "ph": 1}, {"e": "feed on", "k": "~을 먹고 살다", "lv": "고", "n": 96, "ph": 1}, {"e": "speed up", "k": "속도를 높이다", "lv": "중", "n": 97, "ph": 1}, {"e": "stop A from -ing", "k": "A가 ~하지 못하게 막다", "lv": "고", "n": 98, "ph": 1}, {"e": "turn A into B", "k": "A를 B로 바꾸다", "lv": "고", "n": 99, "ph": 1}, {"e": "be exposed to", "k": "~에 노출되다", "lv": "고", "n": 100, "ph": 1}]}];

// ---------- flatten ----------
const Q = []; SECTIONS.forEach((s, si) => s.q.forEach(q => Q.push({...q, si, u: s.u})));
const N = Q.length;
const K = 50;
const SCOPES = {
  u3a: {label:"3단원-1", full:"Lesson 3 단어장 1~50번",  secs:[0]},
  u3b: {label:"3단원-2", full:"Lesson 3 단어장 51~100번", secs:[1]},
  u4a: {label:"4단원-1", full:"Lesson 4 단어장 1~50번",  secs:[2]},
  u4b: {label:"4단원-2", full:"Lesson 4 단어장 51~100번", secs:[3]},
};

// ---------- 문제 만들기 ----------
function senses_(k){ return String(k).replace(/\([^)]*\)/g,"").split(/[,;]/).map(s=>s.replace(/\s/g,"").replace(/^~/,"")).filter(Boolean); }
const SENSES = Q.map(q => senses_(q.k));
function overlap_(i, j){
  if (Q[i].e.toLowerCase() === Q[j].e.toLowerCase()) return true;
  const a = new Set(SENSES[i]); return SENSES[j].some(s => a.has(s));
}
function hash(str){ let h=2166136261; for(const c of str){ h^=c.codePointAt(0); h=Math.imul(h,16777619); } return h>>>0; }
function rng(seed){ let a=seed||1; return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function shuffle(arr, r){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function pickOpts_(qi, r){
  const same = Q.map((q,j)=>j).filter(j => j!==qi && Q[j].u===Q[qi].u && !overlap_(qi,j));
  const pref = shuffle(same.filter(j => !!Q[j].ph === !!Q[qi].ph), r), rest = shuffle(same.filter(j => !!Q[j].ph !== !!Q[qi].ph), r);
  const out = [];
  for (const j of pref.concat(rest)) { if (out.length>=3) break; if (out.every(o => !overlap_(o,j))) out.push(j); }
  return shuffle([qi, ...out], r);
}
function scopeIdx_(scope){ return Q.map((q,i)=>SCOPES[scope].secs.indexOf(q.si)>=0 ? i : -1).filter(i=>i>=0); }
function pickSet(scope, seedStr){
  const r = rng(hash(seedStr)), idx = shuffle(scopeIdx_(scope), r).slice(0, K);
  const dirs = shuffle(idx.map((_,p)=> p < Math.ceil(idx.length/2) ? "e" : "k"), r);   // 영→한 / 한→영 반반
  return idx.map((i,p) => ({ i, d: dirs[p], o: pickOpts_(i, r) }));
}
const promptOf_ = (i, d) => d === "e" ? Q[i].e : Q[i].k;
const optText_  = (j, d) => d === "e" ? Q[j].k : Q[j].e;

// ---------- 채점 ----------
// sub = {qs:[{i,d,o:[4]}], answers:[선택한 보기 위치 0~3, 없으면 -1], overrides:{qi:true}}
function gradeSub(sub){
  const ov = sub.overrides||{}, ans = sub.answers||[];
  const items = sub.qs.map((x,p)=>{ const a = Number(ans[p]); const pick = a>=0 && a<4 ? x.o[a] : -1;
    return { qi:x.i, p, d:x.d, pick, ans: pick>=0 ? optText_(pick, x.d) : "", ok: ov[x.i]===true || pick===x.i }; });
  return {items, score: items.filter(x=>x.ok).length, total: items.length};
}

function today(){ return new Date(Date.now()+9*3600e3).toISOString().slice(0,10); }

// =====================================================================
//  API (GitHub Pages 의 english/index.html 이 이 주소로 요청을 보냅니다)
// =====================================================================
const DEFAULT_PW = "0405";              // 스크립트 속성 TEACHER_PW 가 있으면 그 값을 사용
const SHEET = "결과";
const HEAD = ["날짜","범위","반","번호","이름","점수","만점","제출시각","회차","틀린 단어","key","qs","answers","overrides"];
const TZ = "Asia/Seoul";

function doGet() { return json_({ ok: true, message: "영어단어 4지선다 API 가 동작 중입니다.", today: todayKST_() }); }
function doPost(e) {
  let req = {};
  try { req = JSON.parse((e && e.postData && e.postData.contents) || "{}"); } catch (err) { return json_({ ok: false, error: "잘못된 요청입니다." }); }
  const fn = ROUTES[req.action];
  if (!fn) return json_({ ok: false, error: "알 수 없는 요청입니다." });
  try { return json_({ ok: true, data: fn(req) }); }
  catch (err) { return json_({ ok: false, error: String((err && err.message) || err) }); }
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function todayKST_() { return Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd"); }

// ---------- storage ----------
function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]).setFontWeight("bold").setBackground("#dce6f2");
    sh.setFrozenRows(1);
    sh.hideColumns(11, 4);
  }
  return sh;
}
function rows_() {
  const sh = sheet_(), n = sh.getLastRow() - 1;
  if (n < 1) return [];
  return sh.getRange(2, 1, n, HEAD.length).getDisplayValues().map((r, i) => ({
    row: i + 2, date: r[0], scope: r[1], cls: +r[2], num: +r[3], name: r[4], who: (+r[2]) + "-" + (+r[3]), submittedAt: r[7], attempts: +r[8] || 1,
    key: r[10], qs: JSON.parse(r[11] || "[]"), answers: JSON.parse(r[12] || "[]"), overrides: JSON.parse(r[13] || "{}")
  }));
}
function scopeLabel_(k) { return (SCOPES[k] || {}).label || k; }
function scopeKey_(label) { for (const k in SCOPES) if (SCOPES[k].label === label || k === label) return k; return label; }
function writeRow_(rec) {
  const g = gradeSub(rec);
  const vals = [rec.date, scopeLabel_(rec.scope), rec.cls, rec.num, rec.name, g.score, g.total, rec.submittedAt, rec.attempts,
    g.items.filter(x => !x.ok).map(x => Q[x.qi].e).join(", "), rec.key, JSON.stringify(rec.qs), JSON.stringify(rec.answers), JSON.stringify(rec.overrides || {})];
  const sh = sheet_();
  const row = rec.row || sh.getLastRow() + 1;
  sh.getRange(row, 1, 1, HEAD.length).setNumberFormat("@").setValues([vals.map(String)]);
}
function load_() { return rows_().map(r => ({ ...r, scope: scopeKey_(r.scope) })); }
function settings_() {
  const p = PropertiesService.getScriptProperties();
  return { showAnswers: p.getProperty("showAnswers") !== "false", allowRetry: true, fixedScope: p.getProperty("fixedScope") || "" };
}
function checkPw_(pw) {
  const real = PropertiesService.getScriptProperties().getProperty("TEACHER_PW") || DEFAULT_PW;
  if (String(pw || "").trim() !== real) throw new Error("비밀번호가 맞지 않습니다.");
}
function ident_(id) {
  const cls = parseInt(id && id.cls, 10), num = parseInt(id && id.num, 10), name = String((id && id.name) || "").trim().slice(0, 20);
  if (!(cls >= 1 && cls <= 20) || !(num >= 1 && num <= 40) || name.length < 2) throw new Error("반, 번호, 이름을 정확히 입력하세요.");
  return { cls, num, name, who: cls + "-" + num };
}
function withLock_(f) { const l = LockService.getScriptLock(); l.waitLock(20000); try { return f(); } finally { l.releaseLock(); } }
function result_(rec) {
  const g = gradeSub(rec), s = settings_();
  return {
    date: rec.date, scope: rec.scope, cls: rec.cls, num: rec.num, name: rec.name, score: g.score, total: g.total,
    submittedAt: rec.submittedAt, attempts: rec.attempts, showAnswers: s.showAnswers, allowRetry: true,
    items: g.items.map(x => ({ p: x.p, si: Q[x.qi].si, d: x.d, lv: Q[x.qi].lv, prompt: promptOf_(x.qi, x.d), ans: x.ans, ok: x.ok, correct: s.showAnswers ? optText_(x.qi, x.d) : null }))
  };
}
function validQs_(scope, raw) {
  const allowed = new Set(scopeIdx_(scope));
  const qs = (Array.isArray(raw) ? raw : []).map(x => ({ i: Number(x && x.i), d: x && x.d === "k" ? "k" : "e", o: (Array.isArray(x && x.o) ? x.o : []).map(Number) }));
  const ok = qs.length === Math.min(K, allowed.size) && new Set(qs.map(x => x.i)).size === qs.length && qs.every(x =>
    allowed.has(x.i) && x.o.length === 4 && new Set(x.o).size === 4 && x.o.indexOf(x.i) >= 0 && x.o.every(j => Q[j] && Q[j].u === Q[x.i].u));
  if (!ok) throw new Error("문제 정보가 올바르지 않습니다. 처음 화면에서 다시 시작하세요.");
  return qs;
}

// ---------- routes ----------
const ROUTES = {
  config(req) {
    const s = settings_(), d = todayKST_();
    const sizes = {}; for (const k in SCOPES) sizes[k] = scopeIdx_(k).length;
    const mine = {};
    if (req.ident) { try { const me = ident_(req.ident);
      load_().filter(r => r.date === d && r.who === me.who).forEach(r => {
        const g = gradeSub(r), m = mine[r.scope] || { count: 0, attempts: 0 };
        m.count++; if (r.attempts >= m.attempts) { m.attempts = r.attempts; m.score = g.score; m.total = g.total; }
        mine[r.scope] = m; });
    } catch (e) {} }
    return { today: d, sections: SECTIONS.map(x => x.t), scopes: SCOPES, sizes, total: N, settings: { fixedScope: s.fixedScope, allowRetry: true, showAnswers: s.showAnswers }, mine };
  },
  /** 시험 시작: 응시할 때마다 순서·출제 방향·보기가 새로 섞임 */
  start(req) {
    const me = ident_(req.ident), s = settings_(), d = todayKST_();
    const scope = SCOPES[req.scope] ? req.scope : null; if (!scope) throw new Error("시험 범위를 고르세요.");
    if (s.fixedScope && s.fixedScope !== scope) throw new Error("오늘은 " + scopeLabel_(s.fixedScope) + " 범위만 응시할 수 있습니다.");
    const done = load_().filter(r => r.date === d && r.scope === scope && r.who === me.who);
    const attempt = done.reduce((m, r) => Math.max(m, r.attempts), 0) + 1;
    const qs = pickSet(scope, d + "|" + scope + "|" + me.who + "-" + me.name + "|" + attempt + "|" + Utilities.getUuid());
    return { mode: "quiz", date: d, scope, attempt, allowRetry: true, qs,
      questions: qs.map(x => ({ si: Q[x.i].si, d: x.d, lv: Q[x.i].lv, p: promptOf_(x.i, x.d), o: x.o.map(j => optText_(j, x.d)) })) };
  },
  submit(req) {
    const me = ident_(req.ident);
    const scope = req.scope, d = String(req.date || "");
    if (!SCOPES[scope]) throw new Error("시험 범위가 올바르지 않습니다.");
    if (d !== todayKST_()) throw new Error("날짜가 바뀌었습니다. 처음 화면으로 돌아가 문제를 다시 받으세요.");
    const qs = validQs_(scope, req.qs);
    return withLock_(() => {
      const done = load_().filter(r => r.date === d && r.scope === scope && r.who === me.who);
      const attempt = done.reduce((m, r) => Math.max(m, r.attempts), 0) + 1;
      const answers = qs.map((_, p) => { const a = parseInt((req.answers || [])[p], 10); return a >= 0 && a < 4 ? a : -1; });
      const next = { row: null, date: d, scope, cls: me.cls, num: me.num, name: me.name,
        key: d + "|" + scope + "|" + me.who + "|" + attempt + "|" + Utilities.getUuid().slice(0, 8), qs, answers, overrides: {},
        submittedAt: Utilities.formatDate(new Date(), TZ, "HH:mm:ss"), attempts: attempt };
      writeRow_(next);
      return { mode: "result", result: result_(next) };
    });
  },
  // ----- teacher -----
  tData(req) {
    checkPw_(req.pw);
    const all = load_(), dates = [...new Set([todayKST_(), ...all.map(r => r.date)])].sort().reverse();
    const want = req.date || todayKST_();
    const list = all.filter(r => want === "all" || r.date === want).map(r => {
      const g = gradeSub(r);
      return { key: r.key, date: r.date, scope: r.scope, cls: r.cls, num: r.num, name: r.name, score: g.score, total: g.total, submittedAt: r.submittedAt, attempts: r.attempts,
        items: g.items.map(x => ({ p: x.p, qi: x.qi, d: x.d, ans: x.ans, ok: x.ok, ov: !!(r.overrides || {})[x.qi] })) };
    });
    return { today: todayKST_(), dates, date: want, list, settings: settings_(), questions: Q.map(q => ({ e: q.e, k: q.k, lv: q.lv, n: q.n, si: q.si })), sheetUrl: SpreadsheetApp.getActiveSpreadsheet().getUrl() };
  },
  tOverride(req) {
    checkPw_(req.pw);
    withLock_(() => { const rec = load_().find(r => r.key === req.key); if (!rec) return; rec.overrides = rec.overrides || {};
      if (req.on) rec.overrides[req.qi] = true; else delete rec.overrides[req.qi]; writeRow_(rec); });
    return ROUTES.tData(req);
  },
  tResetOne(req) {
    checkPw_(req.pw);
    withLock_(() => { const rec = load_().find(r => r.key === req.key); if (rec) sheet_().deleteRow(rec.row); });
    return ROUTES.tData(req);
  },
  tResetDay(req) {
    checkPw_(req.pw);
    withLock_(() => { const sh = sheet_(); load_().filter(r => r.date === req.day).map(r => r.row).sort((a, b) => b - a).forEach(row => sh.deleteRow(row)); });
    return ROUTES.tData(req);
  },
  tResetAll(req) {
    checkPw_(req.pw);
    withLock_(() => { const sh = sheet_(); if (sh.getLastRow() > 1) sh.deleteRows(2, sh.getLastRow() - 1); });
    return ROUTES.tData(req);
  },
  tSettings(req) {
    checkPw_(req.pw);
    const p = PropertiesService.getScriptProperties(), o = req.settings || {};
    if ("showAnswers" in o) p.setProperty("showAnswers", String(!!o.showAnswers));
    if ("fixedScope" in o) p.setProperty("fixedScope", SCOPES[o.fixedScope] ? o.fixedScope : "");
    return ROUTES.tData(req);
  },
};
