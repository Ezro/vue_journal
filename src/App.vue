<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="one-flex tools-header">
          <div class="header-item">
            <span v-on:click="toggleCatalog">Catalog</span>
            <!-- <button type="button">Catalog</button> -->
          </div>
          <div class="header-item">Image</div>
          <div class="header-item">Text</div>
          <div class="header-item">Pen</div>
        </div>
        <div class="one-flex controls-header">
          <div class="header-item">Undo</div>
          <div class="header-item">Redo</div>
        </div>
      </header>
      <aside>
        <div class="menu-header">
          MENU HEADER
          <br />LINE 2
        </div>
        <span v-if="$store.state.catalog_open">
          <div class="menu">
            <Logo color="green" />
          </div>
        </span>
      </aside>
      <main>
        <div class="page">
          <!-- {{ content }} -->
          <CatalogItem />
          <!-- <Logo color="green" /> -->
        </div>
      </main>
      <footer>
        <div class="footer">FOOTER</div>
      </footer>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import CatalogItem from "./components/CatalogItem";

export default {
  name: "App",
  components: {
    Logo,
    CatalogItem,
  },
  methods: {
    toggleCatalog() {
      this.$store.commit("toggle_catalog");
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
}

.static {
  cursor: not-allowed;
}

.draggable {
  cursor: move;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 10vh 80vh 10vh;
}

header {
  grid-column: 2 / span 2;
  display: flex;
}

.tools-header {
  flex: 90%;
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
}

.controls-header {
  flex: 1;
  display: flex;
  justify-content: right;
  padding-right: 20px;
  align-items: center;
}

.header-item {
  padding: 5px;
}

.menu-header {
  display: flex;
  flex: inherit;
  justify-content: center;
  padding-top: 5px;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

aside {
  grid-row: 1 / span 3;
  display: flex;
  flex-direction: column;
}

main {
  grid-row-start: 2;
  grid-column: 2 / span 2;
  display: flex;
}

.page {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  grid-row-start: 3;
  grid-column: 2 / span 2;
  display: flex;
}

.footer {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>