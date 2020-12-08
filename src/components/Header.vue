<template>
  <header>
    <v-app-bar app dark color="#8bc34a">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/').catch(err => {})">Haiiku</v-toolbar-title>

      <!-- pc表示タブメニュー -->
      <v-tabs>
        <v-tab
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <v-btn @click="logout()" class="ml-auto" dark outlined>
        <v-icon dark left>mdi-logout</v-icon>
        退室する
      </v-btn>
    </v-app-bar>

    <!-- sp表示タブメニュー -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            class="my-10"
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :to="menuItem.url"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import firebase from "firebase";
import constants from "../common/constants";

export default {
  name: "Header",
  data: () => {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    };
  },
  methods: {
    logout: function () {
      firebase
      .auth()
      .signOut()
      .then(() => {
        alert('退室しました');
        this.$router.push('/');
      })
    }
  },
};
</script>

<style lang="scss" scoped>
  .v-toolbar__title {
    cursor: pointer;
    overflow: visible;
    margin-right: 50px;
    font-size: 2.5rem;
  }

  .v-app-bar__nav-icon {
    @include display_pc {
      display: none;
    }
  }
  
  .v-tabs {
    display: none;

    @include display_pc {
      display: block;
    }
    .v-tab {
      font-size: 1.2rem;
    }
  }
</style>

