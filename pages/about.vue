<template>
  <v-container class="d-flex justify-center">
    <v-card outlined width="900px" class="mx-auto">
      <v-card-title> About this app </v-card-title>
      <v-card-text>
        <p>
          With Contrastor you can check the contrast ratio of any two colors,
          one acting as a foreground and one acting as a background.
        </p>
        <p>
          Colors can be inserted in RGBA, HSLA, and HEX formats, thanks to
          Vuetify's color picker component.
        </p>
        <p>** ADD formula for calculating new colors depending on hue **</p>
        <p>
          The site is powered by
          <v-chip link small href="https://vuejs.org/"> Vue </v-chip>
          and built using
          <v-chip link small href="https://nuxtjs.org/"> Nuxt </v-chip> and
          <v-chip link small href="https://vuetifyjs.com/en/"> Vuetify </v-chip
          >.
        </p>
        <p>
          The boilerplate for this app was generated using the wonderful
          <v-chip link small href="https://github.com/nuxt/create-nuxt-app">
            create-nuxt-app
          </v-chip>
          project.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
