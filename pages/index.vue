<template>
  <v-row justify="center" align="center">
    <v-color-picker v-model="backgroundColor" class="mx-14"></v-color-picker>
    <v-color-picker v-model="foregroundColor" class="mx-14"></v-color-picker>
    <div>{{ backgroundColor }}</div>
    <div>{{ foregroundColor }}</div>
    <div>{{ contrast(foregroundColor, backgroundColor) }}</div>
  </v-row>
</template>

<script>
function contrastRatio(lighter, darker) {
  const lighterLuminance = relLuminance(lighter)
  const darkerLuminance = relLuminance(darker)
  return (lighterLuminance + 0.05) / (darkerLuminance + 0.05)
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
        return contrastRatio(foreground, background)
      }
    },
  },
}
</script>
