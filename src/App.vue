<template>
  <div>
    <Sidebar :toc="toc" />
    <div v-html="htmlContent" style="padding-left: 290px;"></div>
  </div>
</template>

<style>
@import "@/assets/splendor.css";
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { NButton, NCard } from 'naive-ui'
import Showdown from "showdown";
import showdownToc from "showdown-toc";

import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      md: null,
      markdownContent: "",
      htmlContent: "",
      src: null,
      toc: [],
    };
  },
  async mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const src = urlParams.get("src");
    this.src = src;

    this.markdownContent = await this.fetchMarkdown();

    const toc = [];
    this.md = new Showdown.Converter({ extensions: [showdownToc({ toc })] });

    this.htmlContent = this.md.makeHtml(this.markdownContent);

    /* TOC */
    this.toc = toc;
  },
  methods: {
    /* FETCH */
    async fetchMarkdown() {
      let r = await fetch(this.src, {
        method: "GET",
      });

      let result = await r.text();

      return result;
    },
  },
};
</script>