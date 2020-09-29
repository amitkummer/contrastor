export { contrastRatio }

// Lighter should be background, darker should be foreground.
function contrastRatio(lighterPicker, darkerPicker) {
  const lighter = extractRGB(lighterPicker)
  let darker = extractRGB(darkerPicker)
  // Case where background has alpha == 1
  if (lighterPicker.rgba.a >= 1) {
    if (darkerPicker.rgba.a < 1) {
      darker = overlayColor(darker, darkerPicker.rgba.a, lighter)
    }
    return {
      contrast: getContrast(lighter, darker),
      variance: 0,
    }
  }
  // Case where background is semi-transperent
  const lighterOnBlack = overlayOnBlack(lighter)
  const lighterOnWhite = overlayOnWhite(lighter)
  let contrast1, contrast2
  if (darkerPicker.rgba.a < 1) {
    const dark1 = overlayColor(darker, darkerPicker.rgba.a, lighterOnBlack)
    const dark2 = overlayColor(darker, darkerPicker.rgba.a, lighterOnWhite)
    contrast1 = getContrast(dark1, lighterOnBlack)
    contrast2 = getContrast(dark2, lighterOnWhite)
  } else {
    contrast1 = getContrast(darker, lighterOnBlack)
    contrast2 = getContrast(darker, lighterOnWhite)
  }
  const average = (contrast1 + contrast2) / 2
  const variance = Math.abs(average - contrast1)
  return {
    contrast: average,
    variance,
  }
}

function overlayColor(overlaid, overlaidAlpha, background) {
  // Background color alpha should always be 1.
  const r = overlaid.r * overlaidAlpha + background.r * (1 - overlaidAlpha)
  const g = overlaid.g * overlaidAlpha + background.g * (1 - overlaidAlpha)
  const b = overlaid.b * overlaidAlpha + background.b * (1 - overlaidAlpha)
  return {
    r,
    g,
    b,
  }
}

function relLuminance(color) {
  const r = intermediateComp(color.r)
  const g = intermediateComp(color.g)
  const b = intermediateComp(color.b)
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

function getContrast(lighter, darker) {
  const lighterLuminance = relLuminance(lighter)
  const darkerLuminance = relLuminance(darker)
  return (lighterLuminance + 0.05) / (darkerLuminance + 0.05)
}

function overlayOnBlack(overlaid) {
  const black = {
    r: 0,
    g: 0,
    b: 0,
  }
  return overlayColor(overlaid, black)
}

function overlayOnWhite(overlaid) {
  const white = {
    r: 255,
    g: 255,
    b: 255,
  }
  return overlayColor(overlaid, white)
}

// Return JS object with rgb properties from vuetify color picker value
function extractRGB(vueColor) {
  const { a, ...rgb } = vueColor.rgba
  return rgb
}
