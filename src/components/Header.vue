<template>
  <v-app>
    <v-app-bar app dark color="#8bc34a">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Haiiku</v-toolbar-title>

      <!-- pc表示タブメニュー -->
      <v-tabs>
        <v-tab
          v-for="(menuItem, index) in menuItems" 
          :key="index"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

      <!-- sp表示タブメニュー -->
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item
              class="my-10"
              v-for="(menuItem, index) in menuItems"
              :key="index"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

  </v-app>
</template>

<script>
import constants from "../common/constants";

export default {
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible;
  margin-right: 50px;
}
</style>

