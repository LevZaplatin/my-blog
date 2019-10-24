<template>
  <div class="outer" id="app">
    <div class="site-c">
      <router-view class="header" name="header"></router-view>
      <router-view class="contentbox" name="main"></router-view>
      <router-view class="footer" name="footer"></router-view>
    </div><!--кончился site-c-->
  </div><!--кончился outer-->
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
    background-color: #FFF;
    color: #3b3b3b;
    font-size: 14px;
    font-family: Times New Roman, Times, serif;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  a {
    color: #950000;
  }

  a img {
    border: 0px;
  }

  h1 {
    font-size: 30px;
    color: #ad3d3d;
    font-weight: normal;
    margin-bottom: 13px;
  }

  h2 {
    font-size: 30px;
    color: #ad3d3d;
    font-weight: normal;
    margin-bottom: 13px;
  }

  h3 {
    font-size: 9pt;
    font-weight: bold;
  }

  h4 {
    font-size: 9pt;
    font-weight: bold;
  }

  h5 {
    font-size: 9pt;
    font-weight: bold;
  }

  sup {
    vertical-align: text-top;
    font-size: 65%;
  }

  table {
    border: 0px;
    border-collapse: collapse;
  }

  table td {
    padding: 0px;
  }

  .contentbox {
    width: 994px;
    padding-bottom: 213px;
  }

  .header {
    width: 100%;
    height: 296px;
    background: url(/static/i/bgheader.gif) top left no-repeat;
  }

  .footer {
    width: 100%;
    height: 54px;
    background: url(/static/i/bgfooter.gif) top center no-repeat;
    text-align: center;
  }

  .outer {
    width: 100%;
    background: #131313 url(/static/i/bgouter.gif) top center repeat-y;
  }

  .site-c {
    width: 906px;
    margin: 0px auto;
    overflow: visible;
  }
</style>
