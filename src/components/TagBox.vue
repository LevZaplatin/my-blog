<template>
  <div class="tag-box">
    <ul class="tag-box-side-menu-ul">
      <li v-for="tag in tags" :key="tag.id">
        <router-link
          :to="{ name: 'Tag', params: { tagId: tag.id }}">{{ tag.name }}</router-link>&#32;
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TagBox',
  data() {
    return {
      tags: [
        { id: 1, name: 'first' },
        { id: 2, name: 'second' },
        { id: 3, name: 'third' },
        { id: 4, name: 'post' },
        { id: 5, name: 'unit' },
        { id: 6, name: 'key' },
        { id: 7, name: 'linux' },
        { id: 8, name: 'fedora' },
        { id: 9, name: 'ansible' },
        { id: 10, name: 'perl' },
        { id: 11, name: 'python3' },
        { id: 12, name: 'pip' },
        { id: 13, name: 'macos' },
        { id: 14, name: 'c++' },
        { id: 15, name: 'mojolicious' },
        { id: 16, name: 'tornado' },
        { id: 17, name: 'django' },
        { id: 18, name: 'centos' },
        { id: 19, name: 'debian' },
        { id: 20, name: 'rpm' },
        { id: 21, name: 'selinux' },
        { id: 22, name: 'jcp' },
        { id: 23, name: 'java' },
        { id: 24, name: 'jetbrains' },
        { id: 25, name: 'pycharm' },
        { id: 26, name: 'bash' },
        { id: 27, name: 'tips' },
        { id: 28, name: 'javascript' },
        { id: 29, name: 'projects' },
      ],
    };
  },
};
</script>

<style scoped>
  .tag-box {
    width: 297px;
    height: 362px;
    background: url(/static/i/bgtags.png) top right no-repeat;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .tag-box-side-menu-table {
    width: 225px;
    margin-top: 97px;
    margin-left: 25px;
  }

  .tag-box-side-menu-ul {
    width: 240px;
    margin-top: 97px;
    margin-left: 15px;
    font-family: monospace;
  }

  .tag-box-side-menu-ul li {
    display: inline;
  }

  .tag-box-link-cell {
    text-align: right;
    padding-bottom: 17px;
  }

  .tag-box-link-cell p {
    font-size: 15px;
  }

  .tag-box-count-cell {
    width: 40px;
    padding-left: 5px;
    text-align: left;
  }
</style>
