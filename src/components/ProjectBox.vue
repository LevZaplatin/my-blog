<template>
  <div class="project-box">
    <table cellpadding="0" cellspacing="0" class="project-box-side-menu-table">
      <tr valign="top">
        <td class="project-box-link-cell"><p class="project-box-listlink"><a href="#">Коддинг</a>
        </p>
        </td>
        <td class="project-box-count-cell"><p>(10%)</p></td>
      </tr>
      <tr valign="top">
        <td class="project-box-link-cell"><p class="project-box-listlink"><a href="#">Мыслинг</a>
        </p>
        </td>
        <td class="countcell"><p>(44%)</p></td>
      </tr>
      <tr valign="top">
        <td class="project-box-link-cell"><p class="project-box-listlink"><a href="#">Пьянинг</a>
        </p>
        </td>
        <td class="project-box-count-cell"><p>(42%)</p></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProjectBox',
};
</script>

<style scoped>
  .project-box {
    width: 296px;
    height: 257px;
    background: url(/static/i/bgproject.png) top right no-repeat;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .project-box-side-menu-table {
    width: 140px;
    margin-top: 97px;
    margin-left: 53px;
  }

  .project-box-link-cell {
    text-align: right;
    padding-bottom: 17px;
  }

  .project-box-link-cell p {
    font-size: 15px;
  }

  .project-box-count-cell {
    width: 40px;
    padding-left: 5px;
    text-align: left;
  }
</style>
