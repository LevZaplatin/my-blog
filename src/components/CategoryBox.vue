<template>
  <div class="category-box">
    <table cellpadding="0" cellspacing="0" class="category-box-sidemenutable">
      <tr valign="top">
        <td class="category-box-linkcell"><p class="category-box-listlink"><a href="#">Коддинг</a>
        </p></td>
        <td class="category-box-countcell"><p>(10)</p></td>
      </tr>
      <tr valign="top">
        <td class="category-box-linkcell"><p class="category-box-listlink"><a href="#">Мыслинг</a>
        </p></td>
        <td class="category-box-countcell"><p>(44)</p></td>
      </tr>
      <tr valign="top">
        <td class="category-box-linkcell"><p class="lcategory-box-istlink"><a href="#">Пьянинг</a>
        </p></td>
        <td class="category-box-countcell"><p>(42)</p></td>
      </tr>
      <tr valign="top">
        <td class="category-box-linkcell"><p class="category-box-listlink"><a href="#">Кофиинг</a>
        </p></td>
        <td class="category-box-countcell"><p>(442)</p></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CategoryBox',
};
</script>

<style scoped>
  .category-box {
    width: 297px;
    height: 356px;
    background: url(/static/i/bgrazdel.png) top right no-repeat;
    overflow: hidden;
  }

  .category-box-sidemenutable {
    width: 140px;
    margin-top: 97px;
    margin-left: 53px;
  }

  .category-box-linkcell {
    text-align: right;
    padding-bottom: 17px;
  }

  .category-box-linkcell p {
    font-size: 15px;
  }

  .category-box-countcell {
    width: 40px;
    padding-left: 5px;
    text-align: left;
  }
</style>
