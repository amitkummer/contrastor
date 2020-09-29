export { contrastRatio }

function contrastRatio(lighter, darker) {
  // Case where background has alpha == 1
  if (lighter.rgba.a >= 1) {
    if (darker.rgba.a < 1) {
      darker = overlayColor(darker, lighter)
    }
    const lighterLuminance = relLuminance(lighter)
    const darkerLuminance = relLuminance(darker)
    return (lighterLuminance + 0.05) / (darkerLuminance + 0.05)
  }
  // Case where background is semi-transperent
  return 1337
}

function overlayColor(overlaid, background) {
  // Background color alpha should always be 1.
  const r =
    overlaid.rgba.r * overlaid.rgba.a +
    background.rgba.r * (1 - overlaid.rgba.a)
  const g =
    overlaid.rgba.g * overlaid.rgba.a +
    background.rgba.g * (1 - overlaid.rgba.a)
  const b =
    overlaid.rgba.b * overlaid.rgba.a +
    background.rgba.b * (1 - overlaid.rgba.a)
  return {
    rgba: {
      r,
      g,
      b,
    },
  }
}

function relLuminance(color) {
  const r = intermediateComp(color.rgba.r)
  const g = intermediateComp(color.rgba.g)
  const b = intermediateComp(color.rgba.b)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function intermediateComp(amplitude) {
  // normalize the value
  amplitude = amplitude / 255
  if (amplitude <= 0.03928) {
    return amplitude / 12.92
  }
  return Math.pow((amplitude + 0.055) / 1.055, 2.4)
}

// function overlayOnBlack(overlaid) {
//   const black = {
//     r: 0,
//     g: 0,
//     b: 0,
//   }
//   return overlayColor(overlaid, black)
// }

// function overlayOnWhite(overlaid) {
//   const white = {
//     r: 255,
//     g: 255,
//     b: 255,
//   }
//   return overlayColor(overlaid, white)
// }
