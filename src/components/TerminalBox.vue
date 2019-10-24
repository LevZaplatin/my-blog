<template>
  <div class="console withJS"><img src="/static/i/ssh2.gif" border="0px"><textarea
    id="consoleFild"></textarea>
  </div>
</template>

<script>
export default {
  name: 'TerminalBox',
};
</script>

<style scoped>
  a.console {
    border-bottom: 1px #950000 dashed;
    text-decoration: none;
    color: #950000;
  }

  a:hover.console {
    border-bottom: 1px #950000 solid;
  }

  div.console {
    position: relative;
    top: -25px;
  }

  #consoleFild { /*display: none; visibility: hidden;*/
    width: 557px;
    height: 240px;
    background-color: black;
    color: #aaaaaa;
  }

  .withJS {
    visibility: hidden;
    display: none;
  }
</style>
