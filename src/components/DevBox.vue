<template>
  <div class="dev-box">
    <table cellpadding="0" cellspacing="0" class="dev-box-sidemenutable">
      <tr valign="top">
        <td class="dev-box-linkcell"><p class="dev-box-listlink"><a href="#">Коддинг</a></p></td>
        <td class="dev-box-countcell"><p>(10%)</p></td>
      </tr>
      <tr valign="top">
        <td class="dev-box-linkcell"><p class="dev-box-listlink"><a href="#">Мыслинг</a></p></td>
        <td class="dev-box-countcell"><p>(44%)</p></td>
      </tr>
      <tr valign="top">
        <td class="dev-box-linkcell"><p class="dev-box-listlink"><a href="#">Пьянинг</a></p></td>
        <td class="dev-box-countcell"><p>(42%)</p></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DevBox',
};
</script>

<style scoped>
  .dev-box {
    width: 296px;
    height: 267px;
    background: url(/static/i/bgrazrab.png) top right no-repeat;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .dev-box-sidemenutable {
    width: 140px;
    margin-top: 97px;
    margin-left: 53px;
  }

  .dev-box-linkcell {
    text-align: right;
    padding-bottom: 17px;
  }

  .dev-box-linkcell p {
    font-size: 15px;
  }

  .dev-box-countcell {
    width: 40px;
    padding-left: 5px;
    text-align: left;
  }
</style>
