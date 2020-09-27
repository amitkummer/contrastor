<template>
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
