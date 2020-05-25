import emoji from "node-emoji"

export default function replaceEmojiShortcuts(text) {
  const RE_EMOJI = /:\+1:|:-1:|:[\w-]+:/g
  return text.replace(RE_EMOJI, function (match) {
    return emoji.get(match)
  })
}
