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
    <v-container class="mt-n5">
      <v-card class="ml-auto mr-auto mb-7 mt-7 pt-3 pb-3" width="400px">
        <p class="text-center text-h5 font-weight-medium">
          {{ contrastValue }}
          ±
          {{ contrastVariance }}
        </p>
        <v-alert outlined :type="smallTextAAType" class="mx-8"
          >AA Small Text</v-alert
        >
        <v-alert outlined :type="largeTextAAType" class="mx-8"
          >AA Large Text</v-alert
        >
        <v-alert outlined :type="smallTextAAAType" class="mx-8"
          >AAA Small Text</v-alert
        >
        <v-alert outlined :type="largeTextAAAType" class="mx-8"
          >AAA Large Text</v-alert
        >
        <v-alert outlined :type="guiAAType" class="mx-8">AA GUI</v-alert>
        <v-btn text class="ml-3" @click="isWhyExpanded = !isWhyExpanded">
          <v-icon> {{ whyExpandedIcon }} </v-icon>
          Why the ±?
        </v-btn>
        <v-expand-transition>
          <div v-show="isWhyExpanded">
            <v-divider class="mt-3"> </v-divider>
            <p class="mx-8 mt-4 mb-2">
              When the background color is transparent the contrast ratio is the
              average of ratios when the background color is displayed on black
              and white backgrounds. The ± is the difference of the black and
              white ratios from the average.
            </p>
          </div>
        </v-expand-transition>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { contrastRatio } from '@/assets/contrast.js'

export default {
  components: {},
  data: () => ({
    isWhyExpanded: false,
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
    contrast() {
      return contrastRatio(
        this.backgroundPickerValue,
        this.foregroundPickerValue
      )
    },
    contrastValue() {
      return Number(this.contrast.contrast).toFixed(1)
    },
    contrastVariance() {
      return Number(this.contrast.variance).toFixed(1)
    },
    smallTextAAType() {
      return this.contrastValue >= 4.5 ? 'success' : 'error'
    },
    largeTextAAType() {
      return this.contrastValue >= 3.0 ? 'success' : 'error'
    },
    smallTextAAAType() {
      return this.contrastValue >= 7.0 ? 'success' : 'error'
    },
    largeTextAAAType() {
      return this.contrastValue >= 4.5 ? 'success' : 'error'
    },
    guiAAType() {
      return this.contrastValue >= 3.0 ? 'success' : 'error'
    },
    whyExpandedIcon() {
      return this.isWhyExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'
    },
  },
}
</script>
