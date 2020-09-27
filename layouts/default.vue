<template>
  <v-app>
    <v-app-bar dark app fixed color="purple">
      <v-toolbar-title> Site Name </v-toolbar-title>
      <v-divider class="mx-4" vertical></v-divider>
      <v-toolbar-item>
        <v-btn text nuxt :to="home.to"> Test Contrast </v-btn>
      </v-toolbar-item>
      <v-divider class="mx-4" vertical></v-divider>
      <v-toolbar-item>
        <v-btn text nuxt :to="about.to"> About </v-btn>
      </v-toolbar-item>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn text>
          Github Repo
          <v-icon class="ml-5">mdi-github</v-icon>
        </v-btn>
      </v-toolbar-item>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      about: {
        to: '/about',
      },
      home: {
        to: '/',
      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
