<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Contrastor </v-list-item-title>
            <span class="subtitle font-weight-light mt-1 mb-2">
              Calculate the contrast ratio of any two colors.
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="home.to">
          <v-list-item-icon>
            <v-icon> mdi-check </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Test Contrast </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="about.to">
          <v-list-item-icon>
            <v-icon> mdi-information </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> About </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :href="github.to">
          <v-list-item-icon>
            <v-icon> mdi-github </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Github Repository </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar dark color="purple" class="d-none d-sm-block">
        <v-toolbar-title> Site Name </v-toolbar-title>
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
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation
      dark
      fixed
      class="d-flex d-sm-none"
      background-color="purple"
    >
      <v-toolbar-items>
        <v-btn @click="drawer = !drawer">
          <v-icon> mdi-menu</v-icon>
          Navigation
        </v-btn>
      </v-toolbar-items>
    </v-bottom-navigation>
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
      github: {
        to: 'https://github.com/amitkummer/contrastor',
      },
    }
  },
}
</script>
