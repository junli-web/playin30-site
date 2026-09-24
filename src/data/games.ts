import type { Lang } from '../i18n/ui';

export type SceneId = 'home' | 'restaurant' | 'car' | 'outdoor';
export type AgeId = 'low' | 'mid' | 'high';
export type Minutes = 15 | 30 | 45;

interface Game {
  title: string; where: string; principle: string; need: string;
  opener: string; ask: string; mins: number; levels: [string, string, string];
}

/** Printable booklets that exist today, per scene and language. Missing ones fall back to the signup form. */
export const BOOKLETS: Record<SceneId, Partial<Record<Lang, string>>> = {
  home: { en: '/booklets/home-en-A4.pdf', zh: '/booklets/home-zh-A4.pdf' },
  restaurant: { en: '/booklets/restaurant-en-A4.pdf' },
  car: { zh: '/booklets/car-talk-zh-A4.pdf' },
  outdoor: { en: '/booklets/outdoor-winter-en-A4.pdf', zh: '/booklets/outdoor-winter-zh-A4.pdf' },
};

/** The sample shown in the booklet-spread section (paper bridge, charging-stop booklet). */
export const SAMPLE_BOOKLET: Record<Lang, string> = { en: '/booklets/charging-stop-en-A4.pdf', zh: '/booklets/charging-stop-zh-A4.pdf' };

export const GAMES: Record<Lang, Record<SceneId, Game>> = {
  en: {
    home: { title: 'Paper columns that hold up books', where: 'After dinner at home', principle: 'Shape beats material', need: '3 sheets of paper, 5 books, some tape',
      opener: '“Three sheets of paper against five books. Which shape survives?”', ask: 'Ask first: round, square or triangle, which gives up first?', mins: 10,
      levels: ['Find the strongest shape', 'Hold 5 books on one column', 'Hold 5 books using half a sheet'] },
    restaurant: { title: 'Floating forks', where: 'Waiting for food', principle: 'Centre of mass below the pivot', need: '2 forks, 1 toothpick, 1 empty glass',
      opener: '“Only the toothpick may touch the glass. Make both forks float in mid-air.”', ask: 'Ask first: where is the balance point? Point to it.', mins: 10,
      levels: ['Float for 5 seconds', 'Only the tip of the toothpick on the rim', 'No glass: balance it on a fingertip'] },
    car: { title: 'Charging-stop maths', where: 'In the car', principle: 'Real numbers, right in front of you', need: 'Nothing at all',
      opener: '“Read the charger screen: how far will this charge take us?”', ask: 'Ask first: cheaper or dearer than petrol? Take a guess.', mins: 10,
      levels: ['Work out the kilometres', 'Work out the cost per kilometre', 'Compare it with petrol'] },
    outdoor: { title: 'Keep it warm for 20 minutes', where: 'Autumn and winter outdoors', principle: 'Insulation is trapped air', need: '2 bottles of warm water, a scarf, newspaper or dry leaves',
      opener: '“Two bottles, same warm water. One gets a scarf. Which one wins?”', ask: 'Ask first: scarf, newspaper or leaves, which holds the heat best?', mins: 15,
      levels: ['The wrapped bottle stays warmer', 'Rank three materials from best to worst', 'Predict the order before you test it'] },
  },
  zh: {
    home: { title: '纸柱子撑起一摞书', where: '晚饭后在家', principle: '形状比材料更重要', need: 'A4 纸 ×3　书 ×5　胶带',
      opener: '“三张纸，对五本书。哪种形状能活下来？”', ask: '先问：圆的、方的、三角的，哪根最先撑不住？', mins: 10,
      levels: ['找出最强的形状', '一根纸柱撑住 5 本书', '只用半张纸，撑住 5 本书'] },
    restaurant: { title: '浮起来的两把叉子', where: '餐厅等上菜', principle: '重心低于支点', need: '叉子 ×2　牙签 ×1　空杯 ×1',
      opener: '“只许牙签碰到杯子，让两把叉子浮在空中。”', ask: '先问：这两把叉子的平衡点在哪儿？指给我看。', mins: 10,
      levels: ['悬空 5 秒', '只让牙签尖搭在杯沿', '不用杯子，放在指尖上'] },
    car: { title: '充电站数学', where: '车里 / 充电站', principle: '用眼前的真实数字算账', need: '什么都不用带',
      opener: '“读一下充电桩屏幕：这次充的电，够我们跑多少公里？”', ask: '先问：你猜，比加油便宜还是贵？', mins: 10,
      levels: ['算出能跑多少公里', '算出每公里多少钱', '和加油比，哪个更划算'] },
    outdoor: { title: '让温水保持 20 分钟的温度', where: '秋冬户外', principle: '保温靠的是困住的空气', need: '两瓶温水、围巾、报纸或干树叶',
      opener: '“两瓶一样的温水，一瓶围上围巾。你猜哪瓶赢？”', ask: '先问：围巾、报纸、树叶，哪种最能留住热量？', mins: 15,
      levels: ['包起来的那瓶更温', '给三种材料排个名次', '动手前先预测名次'] },
  },
};

export const MACHINE_UI = {
  en: {
    title: 'Three taps, one game', badge: 'No sign-up', where: 'Where are you?', age: 'How old?', time: 'How long?',
    scenes: { home: 'Home', restaurant: 'Restaurant', car: 'Car', outdoor: 'Outdoors' } as Record<SceneId, string>,
    ages: { low: '8–9', mid: '10–11', high: '12–13' } as Record<AgeId, string>,
    min: 'min', level: (n: number) => `Level ${n}`, goal: 'Goal', bring: 'Bring', science: 'The science',
    extra: { 15: 'Exactly one challenge. Done in time.', 30: 'Plus a no-props bonus: make 24 from a number plate.', 45: 'Plus a no-props game and a conversation starter.' } as Record<Minutes, string>,
    print: 'Print this one (A5, free)', soon: 'Printable version coming soon: get notified', share: 'Send to another parent', copied: 'Link copied',
  },
  zh: {
    title: '三下，出一个游戏', badge: '不用注册', where: '你们在哪儿', age: '孩子几岁', time: '有多久',
    scenes: { home: '家里', restaurant: '餐厅', car: '车里', outdoor: '户外' } as Record<SceneId, string>,
    ages: { low: '8–9 岁', mid: '10–11 岁', high: '12–13 岁' } as Record<AgeId, string>,
    min: '分钟', level: (n: number) => `第 ${n} 关`, goal: '目标', bring: '要带', science: '原理',
    extra: { 15: '刚好一个挑战，玩完正好。', 30: '再送一个零道具游戏：车牌凑 24。', 45: '再送一个零道具游戏和一个聊天话题。' } as Record<Minutes, string>,
    print: '打印这一张（A5，免费）', soon: '可打印版即将推出：留个邮箱通知你', share: '发给另一个家长', copied: '链接已复制',
  },
};

/** The superhero-stamp craft booklet and the refill stamp card. */
export const STAMP: Record<Lang, { booklet: string; card: string }> = {
  en: { booklet: '/booklets/stamp-en-A4.pdf', card: '/booklets/stamp-card-en-A4.pdf' },
  zh: { booklet: '/booklets/stamp-zh-A4.pdf', card: '/booklets/stamp-card-zh-A4.pdf' },
};

/** The printable Treasure Box lid label and inside-lid checklist. */
export const TREASURE_BOX: Record<Lang, string> = {
  en: '/booklets/treasure-box-en-A4.pdf',
  zh: '/booklets/treasure-box-zh-A4.pdf',
};

/** The talking-games booklet: nothing in your hands. */
export const TALK_BOOKLET: Record<Lang, string> = { en: '/booklets/talk-en-A4.pdf', zh: '/booklets/talk-zh-A4.pdf' };
