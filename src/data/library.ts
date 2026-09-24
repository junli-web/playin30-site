import type { Lang } from '../i18n/ui';
import type { SceneId } from './games';

export type MaterialId =
  | 'tube' | 'carton' | 'paper' | 'card' | 'napkin' | 'magazine' | 'receipt'
  | 'cup' | 'glass' | 'bottle' | 'foil' | 'bowl' | 'saucepacket'
  | 'coin' | 'clip' | 'rubberband' | 'string' | 'tape' | 'toothpick' | 'straw' | 'pencil'
  | 'fork' | 'spoon' | 'ruler' | 'comb' | 'books' | 'notebooks' | 'tissuebox' | 'ball'
  | 'stick' | 'stone' | 'leaves' | 'scarf' | 'newspaper' | 'handkerchief' | 'cans' | 'none';

interface Material { id: MaterialId; label: Record<Lang, string>; alias: Record<Lang, string[]> }

/** Everything the Treasure Box is built around. Aliases make the search forgiving. */
export const MATERIALS: Material[] = [
  { id: 'tube', label: { en: 'cardboard tube', zh: '卫生纸筒' }, alias: { en: ['toilet roll', 'kitchen roll', 'tube', 'cardboard roll'], zh: ['纸筒', '卷纸芯', '厨房纸筒', '纸巾筒'] } },
  { id: 'carton', label: { en: 'cardboard box', zh: '纸箱' }, alias: { en: ['box', 'delivery box', 'shoe box', 'carton'], zh: ['快递箱', '鞋盒', '盒子', '硬纸板'] } },
  { id: 'paper', label: { en: 'sheet of paper', zh: 'A4 纸' }, alias: { en: ['a4', 'paper', 'scrap paper'], zh: ['纸', '白纸', '废纸'] } },
  { id: 'card', label: { en: 'playing card', zh: '扑克牌或卡片' }, alias: { en: ['cards', 'index card', 'postcard'], zh: ['卡片', '扑克', '名片'] } },
  { id: 'napkin', label: { en: 'napkin or tissue', zh: '餐巾纸' }, alias: { en: ['tissue', 'serviette', 'kitchen towel'], zh: ['纸巾', '面巾纸'] } },
  { id: 'magazine', label: { en: 'old magazine', zh: '旧杂志' }, alias: { en: ['magazine', 'catalogue'], zh: ['杂志', '画报'] } },
  { id: 'receipt', label: { en: 'receipt or paper strip', zh: '小票或纸条' }, alias: { en: ['receipt', 'ticket', 'strip'], zh: ['收据', '小票', '纸条'] } },
  { id: 'cup', label: { en: 'paper cup', zh: '纸杯' }, alias: { en: ['cups', 'plastic cup'], zh: ['杯子', '一次性杯'] } },
  { id: 'glass', label: { en: 'empty glass', zh: '玻璃杯' }, alias: { en: ['glass', 'tumbler'], zh: ['空杯', '水杯'] } },
  { id: 'bottle', label: { en: 'plastic bottle', zh: '塑料瓶' }, alias: { en: ['bottle', 'water bottle'], zh: ['水瓶', '矿泉水瓶'] } },
  { id: 'foil', label: { en: 'aluminium foil', zh: '铝箔纸' }, alias: { en: ['foil', 'tin foil'], zh: ['锡纸', '铝箔'] } },
  { id: 'bowl', label: { en: 'bowl of water', zh: '水盆' }, alias: { en: ['basin', 'bowl', 'sink'], zh: ['盆', '碗', '水槽'] } },
  { id: 'saucepacket', label: { en: 'sauce packet', zh: '酱料包' }, alias: { en: ['ketchup packet', 'sachet'], zh: ['番茄酱包', '调料包'] } },
  { id: 'coin', label: { en: 'coins', zh: '硬币' }, alias: { en: ['coin', 'change'], zh: ['钱币', '零钱'] } },
  { id: 'clip', label: { en: 'paper clips', zh: '回形针' }, alias: { en: ['paperclip', 'clip'], zh: ['曲别针', '别针'] } },
  { id: 'rubberband', label: { en: 'rubber bands', zh: '橡皮筋' }, alias: { en: ['elastic band', 'rubber band'], zh: ['皮筋', '猴皮筋'] } },
  { id: 'string', label: { en: 'string or shoelace', zh: '细绳或鞋带' }, alias: { en: ['thread', 'shoelace', 'twine', 'wool'], zh: ['绳子', '线', '毛线'] } },
  { id: 'tape', label: { en: 'sticky tape', zh: '胶带' }, alias: { en: ['tape', 'sellotape'], zh: ['透明胶', '胶布'] } },
  { id: 'toothpick', label: { en: 'toothpick', zh: '牙签' }, alias: { en: ['cocktail stick', 'skewer'], zh: ['竹签'] } },
  { id: 'straw', label: { en: 'drinking straw', zh: '吸管' }, alias: { en: ['straw'], zh: ['管子'] } },
  { id: 'pencil', label: { en: 'pencil', zh: '铅笔' }, alias: { en: ['pen', 'pencil'], zh: ['笔', '圆珠笔'] } },
  { id: 'fork', label: { en: 'forks', zh: '叉子' }, alias: { en: ['cutlery', 'fork'], zh: ['餐叉'] } },
  { id: 'spoon', label: { en: 'spoons', zh: '勺子' }, alias: { en: ['spoon', 'teaspoon'], zh: ['汤匙', '调羹'] } },
  { id: 'ruler', label: { en: 'ruler', zh: '直尺' }, alias: { en: ['ruler', '30 cm ruler'], zh: ['尺子', '直尺'] } },
  { id: 'comb', label: { en: 'plastic comb', zh: '塑料梳子' }, alias: { en: ['comb', 'balloon'], zh: ['梳子', '气球'] } },
  { id: 'books', label: { en: 'books', zh: '书' }, alias: { en: ['book', 'stack of books'], zh: ['书本', '课本'] } },
  { id: 'notebooks', label: { en: 'two notebooks', zh: '两本笔记本' }, alias: { en: ['notebook', 'exercise book'], zh: ['本子', '笔记本'] } },
  { id: 'tissuebox', label: { en: 'empty tissue box', zh: '空纸巾盒' }, alias: { en: ['tissue box', 'shoebox'], zh: ['抽纸盒', '纸盒'] } },
  { id: 'ball', label: { en: 'marble or paper ball', zh: '弹珠或纸团' }, alias: { en: ['marble', 'ball', 'ping pong'], zh: ['小球', '玻璃球', '乒乓球'] } },
  { id: 'stick', label: { en: 'stick', zh: '树枝' }, alias: { en: ['branch', 'twig'], zh: ['枝条', '木棍'] } },
  { id: 'stone', label: { en: 'stone', zh: '石头' }, alias: { en: ['rock', 'pebble'], zh: ['石子', '鹅卵石'] } },
  { id: 'leaves', label: { en: 'fallen leaves', zh: '落叶' }, alias: { en: ['leaf', 'leaves', 'seeds'], zh: ['树叶', '叶子', '翅果'] } },
  { id: 'scarf', label: { en: 'scarf or old towel', zh: '围巾或旧毛巾' }, alias: { en: ['towel', 'scarf', 'jumper'], zh: ['毛巾', '毛衣'] } },
  { id: 'newspaper', label: { en: 'newspaper', zh: '报纸' }, alias: { en: ['paper sheets', 'newspaper'], zh: ['旧报纸'] } },
  { id: 'handkerchief', label: { en: 'handkerchief', zh: '手帕' }, alias: { en: ['hanky', 'cloth'], zh: ['方巾', '小手绢'] } },
  { id: 'cans', label: { en: 'round things (cans, jars)', zh: '圆的东西（罐头、瓶子）' }, alias: { en: ['can', 'tin', 'jar'], zh: ['罐头', '易拉罐'] } },
  { id: 'none', label: { en: 'nothing at all', zh: '什么都不用带' }, alias: { en: ['no props', 'nothing', 'empty hands', 'talking', 'talk'], zh: ['不用道具', '零道具', '空手', '聊天', '说话', '口才'] } },
];

export const BOOKLET_FILES: Record<string, Partial<Record<Lang, string>>> = {
  home: { en: '/booklets/home-en-A4.pdf', zh: '/booklets/home-zh-A4.pdf' },
  charging: { en: '/booklets/charging-stop-en-A4.pdf', zh: '/booklets/charging-stop-zh-A4.pdf' },
  restaurant: { en: '/booklets/restaurant-en-A4.pdf' },
  car: { zh: '/booklets/car-talk-zh-A4.pdf' },
  winter: { en: '/booklets/outdoor-winter-en-A4.pdf', zh: '/booklets/outdoor-winter-zh-A4.pdf' },
  stamp: { en: '/booklets/stamp-en-A4.pdf', zh: '/booklets/stamp-zh-A4.pdf' },
};

export interface LibraryGame {
  id: string;
  title: Record<Lang, string>;
  principle: Record<Lang, string>;
  scene: SceneId;
  minutes: number;
  needs: MaterialId[];
  booklet?: keyof typeof BOOKLET_FILES;
}

/** Every challenge we have tested, indexed by what it is made of. */
export const LIBRARY: LibraryGame[] = [
  { id: 'tube-marble-run', title: { en: 'Cardboard tube marble run', zh: '纸筒滚球轨道' }, principle: { en: 'Slopes and speed', zh: '坡度与速度' }, scene: 'home', minutes: 20, needs: ['tube', 'tape', 'ball'] },
  { id: 'tube-tower', title: { en: 'Tube columns under books', zh: '纸筒撑书塔' }, principle: { en: 'Columns and load', zh: '柱体承重' }, scene: 'home', minutes: 10, needs: ['tube', 'books'] },
  { id: 'tube-launcher', title: { en: 'Tube launcher', zh: '纸筒弹射器' }, principle: { en: 'Elastic energy', zh: '弹性势能' }, scene: 'home', minutes: 15, needs: ['tube', 'rubberband', 'paper'] },
  { id: 'box-maze', title: { en: 'Tilting box maze', zh: '纸箱倾斜迷宫' }, principle: { en: 'Walls, gravity and control', zh: '重力与控制' }, scene: 'home', minutes: 20, needs: ['carton', 'straw', 'tape', 'ball'] },
  { id: 'paper-bridge', title: { en: 'A bridge from one sheet of paper', zh: '一张纸搭座桥' }, principle: { en: 'Shape beats material', zh: '形状比材料更重要' }, scene: 'home', minutes: 12, needs: ['paper', 'cup', 'coin'], booklet: 'charging' },
  { id: 'paper-columns', title: { en: 'Paper columns that hold up books', zh: '纸柱子撑起一摞书' }, principle: { en: 'Shape beats material', zh: '形状比材料更重要' }, scene: 'home', minutes: 10, needs: ['paper', 'books', 'tape'], booklet: 'home' },
  { id: 'diver', title: { en: 'The diver in a bottle', zh: '瓶子里的潜水员' }, principle: { en: 'Pressure and floating', zh: '压强与浮沉' }, scene: 'home', minutes: 15, needs: ['bottle', 'saucepacket'], booklet: 'home' },
  { id: 'book-tug', title: { en: 'The book tug of war', zh: '书页拔河' }, principle: { en: 'Friction adds up', zh: '摩擦力会叠加' }, scene: 'home', minutes: 5, needs: ['notebooks'], booklet: 'home' },
  { id: 'cup-tower', title: { en: 'Napkin-floor cup tower', zh: '纸杯餐巾塔' }, principle: { en: 'Load paths', zh: '荷载传递' }, scene: 'home', minutes: 10, needs: ['cup', 'napkin', 'coin'], booklet: 'charging' },
  { id: 'cup-phone', title: { en: 'String telephone', zh: '纸杯土电话' }, principle: { en: 'Sound through solids', zh: '固体传声' }, scene: 'home', minutes: 10, needs: ['cup', 'string'] },
  { id: 'rubber-guitar', title: { en: 'Rubber band guitar', zh: '橡皮筋吉他' }, principle: { en: 'Vibration and pitch', zh: '振动与音高' }, scene: 'home', minutes: 10, needs: ['tissuebox', 'rubberband', 'pencil'] },
  { id: 'rubber-scale', title: { en: 'Rubber band spring scale', zh: '橡皮筋弹簧秤' }, principle: { en: 'Stretch and weight', zh: '伸长与拉力' }, scene: 'home', minutes: 15, needs: ['rubberband', 'paper', 'clip', 'spoon'] },
  { id: 'foil-boat', title: { en: 'Foil boat cargo test', zh: '铝箔小船装硬币' }, principle: { en: 'Floating', zh: '浮力' }, scene: 'home', minutes: 10, needs: ['foil', 'bowl', 'coin'] },
  { id: 'paper-spinner', title: { en: 'Paper spinning top', zh: '纸陀螺' }, principle: { en: 'Spin and inertia', zh: '转动惯量' }, scene: 'home', minutes: 10, needs: ['paper', 'toothpick'] },
  { id: 'pinwheel', title: { en: 'Paper pinwheel', zh: '纸风车' }, principle: { en: 'Angled blades', zh: '斜面受力' }, scene: 'home', minutes: 10, needs: ['paper', 'pencil', 'clip'] },
  { id: 'ramp-race', title: { en: 'Rolling race down a ramp', zh: '斜面滚物赛' }, principle: { en: 'Where the mass sits', zh: '转动惯量' }, scene: 'home', minutes: 10, needs: ['books', 'cans'] },
  { id: 'comb-static', title: { en: 'Static comb and paper bits', zh: '梳子吸纸屑' }, principle: { en: 'Static electricity', zh: '摩擦起电' }, scene: 'home', minutes: 5, needs: ['comb', 'napkin'] },
  { id: 'ruler-note', title: { en: 'Twanging ruler', zh: '直尺振动调音' }, principle: { en: 'Frequency and length', zh: '振动频率' }, scene: 'home', minutes: 5, needs: ['ruler'] },
  { id: 'floating-forks', title: { en: 'Floating forks', zh: '浮起来的两把叉子' }, principle: { en: 'Centre of mass', zh: '重心低于支点' }, scene: 'restaurant', minutes: 10, needs: ['fork', 'toothpick', 'glass'], booklet: 'restaurant' },
  { id: 'card-coin-flick', title: { en: 'Flick the card, drop the coin', zh: '弹卡落币' }, principle: { en: 'Inertia', zh: '惯性' }, scene: 'restaurant', minutes: 5, needs: ['card', 'coin', 'glass'] },
  { id: 'card-house', title: { en: 'House of cards', zh: '扑克牌屋' }, principle: { en: 'Triangles are stable', zh: '三角形稳定' }, scene: 'restaurant', minutes: 15, needs: ['card'], booklet: 'restaurant' },
  { id: 'coin-overhang', title: { en: 'Coin overhang tower', zh: '硬币悬挑塔' }, principle: { en: 'Centre of mass', zh: '重心与支撑面' }, scene: 'restaurant', minutes: 10, needs: ['coin'] },
  { id: 'jumping-frog', title: { en: 'Origami jumping frog', zh: '折纸跳蛙' }, principle: { en: 'Elastic energy', zh: '弹性势能' }, scene: 'restaurant', minutes: 10, needs: ['paper'], booklet: 'restaurant' },
  { id: 'paper-helicopter', title: { en: 'Slow-fall paper helicopter', zh: '慢慢降落纸直升机' }, principle: { en: 'Drag and autorotation', zh: '空气阻力与自转' }, scene: 'car', minutes: 5, needs: ['receipt'], booklet: 'charging' },
  { id: 'reaction-ruler', title: { en: 'Catch the ruler', zh: '接尺子测反应' }, principle: { en: 'Reaction time', zh: '反应时间' }, scene: 'car', minutes: 10, needs: ['ruler'] },
  { id: 'two-point', title: { en: 'One point or two?', zh: '一个点还是两个点' }, principle: { en: 'Touch receptors', zh: '触觉感受器密度' }, scene: 'car', minutes: 10, needs: ['clip'] },
  { id: 'keep-warm', title: { en: 'Keep it warm for 20 minutes', zh: '让温水保持 20 分钟的温度' }, principle: { en: 'Insulation is trapped air', zh: '保温靠困住的空气' }, scene: 'outdoor', minutes: 15, needs: ['bottle', 'scarf', 'newspaper'], booklet: 'winter' },
  { id: 'leaf-race', title: { en: 'The slowest falling leaf', zh: '落得最慢的那片叶子' }, principle: { en: 'Air resistance', zh: '空气阻力' }, scene: 'outdoor', minutes: 10, needs: ['leaves'], booklet: 'winter' },
  { id: 'stick-lever', title: { en: 'Lift a bottle with one finger', zh: '一根手指举起水瓶' }, principle: { en: 'Levers', zh: '杠杆与力臂' }, scene: 'outdoor', minutes: 15, needs: ['stick', 'stone', 'bottle', 'string'] },
  { id: 'stick-tripod', title: { en: 'Stick tripod that holds weight', zh: '树枝三脚架' }, principle: { en: 'Triangles are stable', zh: '三角形稳定' }, scene: 'outdoor', minutes: 15, needs: ['stick', 'string'] },
  { id: 'hanky-parachute', title: { en: 'Handkerchief parachute', zh: '手帕降落伞' }, principle: { en: 'Air resistance', zh: '空气阻力' }, scene: 'outdoor', minutes: 15, needs: ['handkerchief', 'string', 'coin'] },
  { id: 'paper-planes', title: { en: 'Two paper planes, two jobs', zh: '两种纸飞机' }, principle: { en: 'Time in the air vs distance', zh: '滞空与远飞的取舍' }, scene: 'outdoor', minutes: 15, needs: ['paper'] },
];

/** Talking games: nothing in your hands, everything in the conversation. */
export const TALK_GAMES: LibraryGame[] = [
  { id: 'one-minute-advert', title: { en: 'One-minute advert', zh: '一分钟推销' }, principle: { en: 'Speaking clearly', zh: '口才：抓重点' }, scene: 'car', minutes: 10, needs: ['none'] },
  { id: 'no-filler', title: { en: 'No “um”, no “and then”', zh: '不许说“嗯”和“然后”' }, principle: { en: 'Speaking clearly', zh: '口才：说得干净' }, scene: 'car', minutes: 5, needs: ['none'] },
  { id: 'explain-in-30', title: { en: 'Explain it in 30 seconds', zh: '30 秒说清一件事' }, principle: { en: 'Speaking clearly', zh: '口才：结构' }, scene: 'restaurant', minutes: 10, needs: ['none'] },
  { id: 'interview-parent', title: { en: 'Interview your parent', zh: '采访爸妈的童年' }, principle: { en: 'Listening and follow-up questions', zh: '对话：提问与倾听' }, scene: 'home', minutes: 15, needs: ['none'] },
  { id: 'story-relay', title: { en: 'Story relay', zh: '故事接龙' }, principle: { en: 'Building on someone else’s idea', zh: '对话：接住别人的话' }, scene: 'car', minutes: 10, needs: ['none'] },
  { id: 'swap-sides', title: { en: 'Swap sides court', zh: '换位法庭' }, principle: { en: 'Arguing the other side', zh: '对话：换位思考' }, scene: 'restaurant', minutes: 15, needs: ['none'] },
  { id: 'guess-the-order', title: { en: 'Guess what they ordered', zh: '猜对方点了什么' }, principle: { en: 'Reading other people', zh: '对话：观察与换位' }, scene: 'restaurant', minutes: 10, needs: ['none'] },
  { id: 'twenty-questions', title: { en: 'Twenty questions, the smart way', zh: '更聪明的二十个问题' }, principle: { en: 'Each question halves the field', zh: '逻辑：二分法' }, scene: 'restaurant', minutes: 10, needs: ['none'] },
  { id: 'reverse-twenty', title: { en: 'Reverse twenty questions', zh: '反向二十问' }, principle: { en: 'Asking beats guessing', zh: '逻辑：会问比会猜更重要' }, scene: 'car', minutes: 10, needs: ['none'] },
  { id: 'what-if', title: { en: 'What if…?', zh: '如果……会怎样' }, principle: { en: 'Imagination with reasons', zh: '想象力：给出理由' }, scene: 'car', minutes: 10, needs: ['none'] },
  { id: 'worst-thing', title: { en: 'The worst bit of today', zh: '今天最糟的一件事' }, principle: { en: 'Listen first, then look for one real bright spot', zh: '韧性：先听完，再找一个真实的亮点' }, scene: 'home', minutes: 10, needs: ['none'] },
  { id: 'who-helped', title: { en: 'Who helped you today?', zh: '今天谁帮了你？' }, principle: { en: 'Noticing people, not listing blessings', zh: '韧性：看见具体的人' }, scene: 'home', minutes: 5, needs: ['none'] },
  { id: 'next-time', title: { en: 'Next time I would…', zh: '下次我会怎么做' }, principle: { en: 'Turning a flop into a plan', zh: '韧性：把失败变成办法' }, scene: 'home', minutes: 10, needs: ['none'] },
  { id: 'plate-24', title: { en: 'Make 24 from a number plate', zh: '车牌凑 24' }, principle: { en: 'Mental arithmetic', zh: '心算：四则运算' }, scene: 'car', minutes: 10, needs: ['none'] },
  { id: 'guess-then-count', title: { en: 'Guess first, then count', zh: '先猜再数' }, principle: { en: 'Fermi estimation', zh: '费米估算' }, scene: 'car', minutes: 10, needs: ['none'] },
];

LIBRARY.push(...TALK_GAMES);
