<template>
  <v-row justify="center" align="center">
    <v-color-picker v-model="background_color" class="mx-14"></v-color-picker>
    <v-color-picker v-model="foreground_color" class="mx-14"></v-color-picker>
    <div>{{ background_color }}</div>
    <div>{{ foreground_color }}</div>
    <div>{{ contrast(foreground_color) }}</div>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    background_color: null,
    foreground_color: null,
  }),
  methods: {
    contrast(color) {
      if (color) {
        return color.rgba.r
      }
    },
  },
}
</script>
