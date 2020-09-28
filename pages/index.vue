<template>
  <div>
    <v-row justify="center" align="center">
      <v-card class="px-5 mx-5">
        <v-card-title>Background Color</v-card-title>
        <v-color-picker
          v-model="backgroundColor"
          align-self="center"
        ></v-color-picker>
      </v-card>
      <v-card class="px-5 mx-5">
        <v-card-title>Foreground Color</v-card-title>
        <v-color-picker v-model="foregroundColor"></v-color-picker>
      </v-card>
    </v-row>
    <v-card class="ml-auto mr-auto mt-7" width="240px">
      <v-card-title>
        Contrast Ratio:
        {{ Number(contrast(foregroundColor, backgroundColor)).toFixed(3) }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
function contrastRatio(lighter, darker) {
  // Case where background has alpha == 1
  if (lighter.rgba.a >= 1) {
    if (darker.rgba.a < 1) {
      darker = overlayOn(darker, lighter)
    }
    const lighterLuminance = relLuminance(lighter)
    const darkerLuminance = relLuminance(darker)
    return (lighterLuminance + 0.05) / (darkerLuminance + 0.05)
  }
  // Case where background is semi-transperent
  // https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/color.js#L122
  return 1337
}

function overlayOn(overlaid, background) {
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

export default {
  components: {},
  data: () => ({
    backgroundColor: null,
    foregroundColor: null,
  }),
  methods: {
    contrast(foreground, background) {
      if (foreground && background) {
        return contrastRatio(background, foreground)
      }
    },
  },
}
</script>
