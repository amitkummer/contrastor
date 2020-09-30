<template>
  <div>
    <v-row justify="center" align="center">
      <v-card class="px-5 mx-5">
        <v-card-title>Background Color</v-card-title>
        <v-color-picker
          v-model="backgroundPickerValue"
          align-self="center"
        ></v-color-picker>
      </v-card>
      <v-card class="px-5 mx-5">
        <v-card-title>Foreground Color</v-card-title>
        <v-color-picker v-model="foregroundPickerValue"></v-color-picker>
      </v-card>
    </v-row>
    <v-card class="ml-auto mr-auto mt-7" width="240px">
      <v-card-title>
        Contrast Ratio:
        {{
          Number(
            contrast(foregroundPickerValue, backgroundPickerValue)
          ).toFixed(3)
        }}
      </v-card-title>
    </v-card>
    <v-card class="ml-auto mr-auto mt-3" width="215px">
      <v-card-title>
        Variance:
        {{
          Number(
            variance(foregroundPickerValue, backgroundPickerValue)
          ).toFixed(3)
        }}
      </v-card-title>
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
