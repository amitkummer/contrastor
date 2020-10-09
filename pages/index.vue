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
        {{
          Number(
            contrast(foregroundPickerValue, backgroundPickerValue)
          ).toFixed(1)
        }}
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
    backgroundPickerValue: null,
    foregroundPickerValue: null,
    expandInfo: false,
  }),
  methods: {
    contrast(foreground, background) {
      if (foreground && background) {
        return contrastRatio(background, foreground).contrast
      }
    },
    variance(foreground, background) {
      if (foreground && background) {
        return contrastRatio(background, foreground).variance
      }
    },
  },
}
</script>
