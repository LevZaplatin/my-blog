<template>
  <div class="header">
    <div class="find-box"><input class="text-area" value="ctrl+f" title="Поиск"><input
      type="image" src="/static/i/button.gif" class="button"></div>
    <div style="padding-top:20px; padding-left:37px;" class="withJS"><a href="#"
                                                                        style="font-size: 18px;"
                                                                        class="console">открыть
      BASH-консоль:)</a></div>
  </div><!--кончился header-->
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
  .withJS {
    visibility: hidden;
    display: none;
  }
  .header {
    width: 100%;
    height: 296px;
    background: url(/static/i/bgheader.gif) top left no-repeat;
  }

  .find-box {
    padding-top: 242px;
    padding-left: 37px;
  }

  .text-area, .button {
    vertical-align: middle;
  }

  .text-area {
    width: 174px;
    border: 1px solid #c9c9c9;
    padding: 1px 3px;
    font-family: Times New Roman, Times, serif;
    font-size: 1em;
  }

  .button {
    margin-left: -1px;
  }

  .withJS {
    visibility: hidden;
    display: none;
  }

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
</style>
