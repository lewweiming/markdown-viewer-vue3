<template>
  <div class="sidebar">
    <div style="letter-spacing: 2px;">Table Of Contents</div>
    <div>
        <ul>
            <li v-for="item in toc" :class="`level-${item.level}`">
                <a class="grow" :href="`#${item.anchor}`" v-smooth-scroll>{{ item.text }}</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.grow { transition: all .2s ease-in-out; }
.grow:hover { font-size: 120%; }

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 290px;
    height: 100vh;
    background: #fafafa;
    color: black;
    padding: 20px;
}

.sidebar ul {
    list-style-type: none;
    list-style-position: inside;
    line-height: 50px;
}

.sidebar li {
    margin-left: 0;
}

.sidebar li a {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.sidebar li.level-1 {
text-indent: 20px;
}

.sidebar li.level-2 {
text-indent: 40px;
}

.sidebar li.level-3 {
text-indent: 60px;
}
</style>

<script>
export default {
    props: ['toc']
}
</script>