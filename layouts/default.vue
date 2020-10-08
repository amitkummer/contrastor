<template>
  <v-app>
    <v-main>
      <v-app-bar dark color="purple" class="d-none d-sm-block">
        <v-toolbar-title> Contrastor </v-toolbar-title>
        <v-toolbar-items class="ml-3">
          <v-btn text nuxt :to="home.to"> Test Contrast </v-btn>
          <v-btn text nuxt :to="about.to"> About </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text :href="github.to">
            Github Repo
            <v-icon class="ml-5">mdi-github</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <nuxt />
    </v-main>
    <v-bottom-navigation
      dark
      fixed
      class="d-flex d-sm-none"
      background-color="purple"
    >
      <v-btn nuxt :to="home.to">
        <v-icon> mdi-check</v-icon>
        Tester
      </v-btn>
      <v-btn nuxt :to="about.to">
        <v-icon> mdi-information</v-icon>
        About
      </v-btn>
      <v-btn :href="github.to">
        <v-icon> mdi-github</v-icon>
        Github
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      about: {
        to: '/about',
      },
      home: {
        to: '/',
      },
      github: {
        to: 'https://github.com/amitkummer/contrastor',
      },
    }
  },
}
</script>
