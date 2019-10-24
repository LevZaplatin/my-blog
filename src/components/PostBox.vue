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
            <p class="postdate">{{ post.date }}</p></td>
        </tr>
        <tr valign="top">
          <td class="post-short">
            <router-link :to="{ name: 'Post', params: { postId: post.id }}">
              <h2>{{ post.title }}</h2>
            </router-link>
            <p>{{ post.preview }}</p></td>
        </tr>
        <tr valign="top" class="post-bottom-tr">
          <td class="post-bottom">
            <p class="tag-list">
              <template v-for="(tag, index) in post.tags">
                <router-link :to="{ name: 'Tag', params: { tagId: tag.id }}"
                             :key="tag.id">
                  {{ tag.name }}</router-link><template v-if="(index+1) !== post.tags.length">,
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
  name: 'PostBox',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Всем привет! Пост №1!',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'first' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 2,
          title: 'Всем привет! Пост №2',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'second' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 3,
          title: 'Всем привет! Пост №3',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'third' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 4,
          title: 'Всем привет! Пост №1!',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'first' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 5,
          title: 'Всем привет! Пост №2',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'second' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 6,
          title: 'Всем привет! Пост №3',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'third' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 7,
          title: 'Всем привет! Пост №1!',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'first' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 8,
          title: 'Всем привет! Пост №2',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'second' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 9,
          title: 'Всем привет! Пост №3',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'third' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 10,
          title: 'Всем привет! Пост №1!',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'first' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 11,
          title: 'Всем привет! Пост №2',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'second' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 12,
          title: 'Всем привет! Пост №3',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'third' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 13,
          title: 'Всем привет! Пост №1!',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'first' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 14,
          title: 'Всем привет! Пост №2',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'second' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
        {
          id: 15,
          title: 'Всем привет! Пост №3',
          date: new Date().toDateString(),
          preview: 'Тут я вообще расстроился… - как так? Кто-то занял IP и ХЗ как определить…Вспомнилось что по ping можно определить какая операционка стоит на удаленной машине. Пинг выдал следующее: 64 bytes from 192.168.*.*: icmp_seq=2 ttl=255 time=0.142 ms Думал, думал, пошел гуглить таблицу соответствия TTL - операционке/',
          tags: [
            { id: 1, name: 'third' },
            { id: 2, name: 'post' },
            { id: 3, name: 'tags' },
          ],
        },
      ],
    };
  },
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
    background: transparent url(/static/i/number.gif) no-repeat 0 0;
    width: 6px;
    height: 32px;
    float: left;
    display: block;
  }

  .number2 {
    background: transparent url(/static/i/number.gif) no-repeat -6px 0;
    width: 14px;
    height: 32px;
    float: left;
    display: block;
  }

  .number3 {
    background: transparent url(/static/i/number.gif) no-repeat -20px 0;
    width: 13px;
    height: 32px;
    float: left;
    display: block;
  }

  .number4 {
    background: transparent url(/static/i/number.gif) no-repeat -33px 0;
    width: 12px;
    height: 32px;
    float: left;
    display: block;
  }

  .number5 {
    background: transparent url(/static/i/number.gif) no-repeat -45px 0;
    width: 12px;
    height: 32px;
    float: left;
    display: block;
  }

  .number6 {
    background: transparent url(/static/i/number.gif) no-repeat -57px 0;
    width: 11px;
    height: 32px;
    float: left;
    display: block;
  }

  .number7 {
    background: transparent url(/static/i/number.gif) no-repeat -68px 0;
    width: 13px;
    height: 32px;
    float: left;
    display: block;
  }

  .number8 {
    background: transparent url(/static/i/number.gif) no-repeat -81px 0;
    width: 11px;
    height: 32px;
    float: left;
    display: block;
  }

  .number9 {
    background: transparent url(/static/i/number.gif) no-repeat -92px 0;
    width: 11px;
    height: 32px;
    float: left;
    display: block;
  }

  .number0 {
    background: transparent url(/static/i/number.gif) no-repeat -103px 0;
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
