<template>
  <div>
    <v-row justify="center" align="center">
      <v-card class="px-5 mx-5 mt-5">
        <v-card-title>Background Color</v-card-title>
        <v-color-picker
          v-model="backgroundPickerValue"
          align-self="center"
        ></v-color-picker>
      </v-card>
      <v-card class="px-5 mx-5 mt-5">
        <v-card-title>Foreground Color</v-card-title>
        <v-color-picker v-model="foregroundPickerValue"></v-color-picker>
      </v-card>
    </v-row>
    <v-card class="ml-auto mr-auto mt-7 pt-3 pb-3" width="400px">
      <p class="text-center text-h5 font-weight-medium">
        {{ contrastValue }}
        ±
        {{
          Number(
            variance(foregroundPickerValue, backgroundPickerValue)
          ).toFixed(1)
        }}
      </p>
      <v-alert outlined type="success" class="mx-8">AA Small Text</v-alert>
    </v-card>
  </div>
</template>

<script>
import { contrastRatio } from '@/assets/contrast.js'

export default {
  components: {},
  data: () => ({
    backgroundPickerValue: {
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
    },
    foregroundPickerValue: {
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
    },
  }),
  computed: {
    contrastValue() {
      const value = contrastRatio(
        this.backgroundPickerValue,
        this.foregroundPickerValue
      ).contrast
      return Number(value).toFixed(2)
    },
  },
  methods: {
    // contrast(foreground, background) {
    //   return contrastRatio(background, foreground).contrast
    // },
    variance(foreground, background) {
      return contrastRatio(background, foreground).variance
    },
  },
}
</script>
