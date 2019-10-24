<template>
  <div class="post-box">
    <div v-for="post in posts" :key="post.id" class="post-unit">
      <table class="post-table">
        <tr valign="top">
          <td class="post-header">
            <span class="number">
              <b v-for="number in post.id.toString().split('')" :class="'number'+number"
                 :key="number"></b>
            </span>
            <p class="postdate">{{ post.datetime }}</p></td>
        </tr>
        <tr valign="top">
          <td class="post-short"><h2>{{ post.title }}</h2>
            <p>{{ post.preview }}</p></td>
        </tr>
        <tr valign="top" class="post-bottom-tr">
          <td class="post-bottom">
            <p class="tag-list">
              <template v-for="(tag, index) in post.tags">
                <a :key="tag.id" :href="tag.id">
                  {{ tag.name }}</a><template v-if="(index+1) !== post.tags.length">,
              </template>
              </template>
            </p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
};
</script>

<style scoped>
  .post-unit {
    width: 100%;
    background: url(/static/i/bgpost.gif) top left repeat;
    margin-bottom: 38px;
  }

  .post-table {
    width: 100%;
  }

  .post-header {
    width: 100%;
    background: url(/static/i/bgpostheaderbegin.gif) top left no-repeat;
    padding-left: 42px;
  }

  .number {
    background: url(/static/i/post_next.gif) top right no-repeat;
    padding-right: 15px;
    height: 32px;
    display: block;
    float: left;
  }

  .number1 {
    background: transparent url(/static/i/number.gif) no-repeat 0px 0px;
    width: 6px;
    height: 32px;
    float: left;
    display: block;
  }

  .number2 {
    background: transparent url(/static/i/number.gif) no-repeat -6px 0px;
    width: 14px;
    height: 32px;
    float: left;
    display: block;
  }

  .number3 {
    background: transparent url(/static/i/number.gif) no-repeat -20px 0px;
    width: 13px;
    height: 32px;
    float: left;
    display: block;
  }

  .number4 {
    background: transparent url(/static/i/number.gif) no-repeat -33px 0px;
    width: 12px;
    height: 32px;
    float: left;
    display: block;
  }

  .number5 {
    background: transparent url(/static/i/number.gif) no-repeat -45px 0px;
    width: 12px;
    height: 32px;
    float: left;
    display: block;
  }

  .number6 {
    background: transparent url(/static/i/number.gif) no-repeat -57px 0px;
    width: 11px;
    height: 32px;
    float: left;
    display: block;
  }

  .number7 {
    background: transparent url(/static/i/number.gif) no-repeat -68px 0px;
    width: 13px;
    height: 32px;
    float: left;
    display: block;
  }

  .number8 {
    background: transparent url(/static/i/number.gif) no-repeat -81px 0px;
    width: 11px;
    height: 32px;
    float: left;
    display: block;
  }

  .number9 {
    background: transparent url(/static/i/number.gif) no-repeat -92px 0px;
    width: 11px;
    height: 32px;
    float: left;
    display: block;
  }

  .number0 {
    background: transparent url(/static/i/number.gif) no-repeat -103px 0px;
    width: 14px;
    height: 32px;
    float: left;
    display: block;
  }

  .postdate {
    text-align: right;
    line-height: 32px;
    padding-right: 18px;
    font-size: 12px;
    color: #838383;
  }

  .post-short {
    padding: 20px 26px;
  }

  .post-short a {
    text-decoration: none;
  }

  .post-short p {
    margin-bottom: 13px;
  }

  .post-bottom-tr {
  }

  .post-bottom {
    background: url(/static/i/bgpostbottom.gif) top right no-repeat;
    padding-bottom: 35px;
  }

  .tag-list {
    text-align: right;
    padding-right: 80px;
    padding-top: 5px;
    font-family: monospace;
  }

  .tag-list a {
    color: #3e6880;
  }
</style>
