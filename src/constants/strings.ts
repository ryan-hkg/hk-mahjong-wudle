export const GAME_TITLE = '香港麻雀 糊dle'

export const WIN_MESSAGES = ['恭喜晒！', '你答啱咗啦！', '好叻呀你！']
export const GAME_COPIED_MESSAGE = '已複製去剪貼簿'
export const ABOUT_GAME_MESSAGE = '關於呢個遊戲'
export const NOT_ENOUGH_LETTERS_MESSAGE = '唔夠14隻麻雀！'
export const WORD_NOT_FOUND_MESSAGE = '唔準食詐糊！'
export const INVALID_HAND_MESSAGE = '每隻麻雀得４張！'
export const HARD_MODE_MESSAGE = '困難模式'
export const EASY_MODE_MESSAGE = '簡單模式'
export const STUCK_EASY_MESSAGE = '遊戲開始之後 唔可以較做困難模式！'
export const BROKEN_MESSAGE = '你個嘢壞咗呀！'
export const MISS_CORRECT_TILE_MESSAGE = (word: (string | number)[]) =>
  `第${word[0]}隻牌一定要係${word[1]}！`
export const MISS_PRESENT_TILE_MESSAGE = (word: string) =>
  `答案一定要有隻${word}！`
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `正確答案係 ${solution}`
export const ENTER_TEXT = '確定'
export const DELETE_TEXT = '刪除'
export const STATISTICS_TITLE = '統計數據'
export const GUESS_DISTRIBUTION_TEXT = '成績分佈'
export const NEW_WORD_TEXT = '距離下題仲有'
export const SHARE_TEXT = '分享'
export const TOTAL_TRIES_TEXT = '玩過嘅次數'
export const SUCCESS_RATE_TEXT = '成功率'
export const CURRENT_STREAK_TEXT = '目前連贏次數'
export const BEST_STREAK_TEXT = '最高連贏次數'
