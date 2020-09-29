export { contrastRatio }

// Lighter should be background, darker should be foreground.
function contrastRatio(backgroundPicker, foregroundPicker) {
  const background = extractRGB(backgroundPicker)
  let foreground = extractRGB(foregroundPicker)
  // Case where background has alpha == 1
  if (backgroundPicker.rgba.a >= 1) {
    if (foregroundPicker.rgba.a < 1) {
      foreground = overlayColor(foreground, foregroundPicker.rgba.a, background)
    }
    return {
      contrast: getContrast(background, foreground),
      variance: 0,
    }
  }
  // If we're here, the background is semi-transperent
  const backgroundOnBlack = overlayOnBlack(background)
  const backgroundOnWhite = overlayOnWhite(background)
  let contrastBound1, contrastBound2
  // WE ALWAYS HIT THIS IF STATEMENT
  if (foregroundPicker.rgba.a < 1) {
    const foregroundOnBlackedBg = overlayColor(
      foreground,
      foregroundPicker.rgba.a,
      backgroundOnBlack
    )
    const foregroundOnWhitedBg = overlayColor(
      foreground,
      foregroundPicker.rgba.a,
      backgroundOnWhite
    )
    contrastBound1 = getContrast(foregroundOnBlackedBg, backgroundOnBlack)
    contrastBound2 = getContrast(foregroundOnWhitedBg, backgroundOnWhite)
  } else {
    contrastBound1 = getContrast(foreground, backgroundOnBlack)
    contrastBound2 = getContrast(foreground, backgroundOnWhite)
  }
  const average = (contrastBound1 + contrastBound2) / 2
  const variance = Math.abs(average - contrastBound1)
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
  const contrast = (lighterLuminance + 0.05) / (darkerLuminance + 0.05)
  return contrast < 1 ? 1 / contrast : contrast
}

function overlayOnBlack(overlaid) {
  const black = {
    r: 0,
    g: 0,
    b: 0,
  }
  return overlayColor(overlaid, 1, black)
}

function overlayOnWhite(overlaid) {
  const white = {
    r: 255,
    g: 255,
    b: 255,
  }
  return overlayColor(overlaid, 1, white)
}

// Return JS object with rgb properties from vuetify color picker value
function extractRGB(vueColor) {
  const { a, ...rgb } = vueColor.rgba
  return rgb
}
