import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/Header';
import Main from '@/components/Main';
import PostBox from '@/components/PostBox';
import Post from '@/components/Post';
import Footer from '@/components/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: Main,
        header: Header,
        main: Main,
        footer: Footer,
      },
      children: [
        {
          path: '',
          name: 'Posts',
          component: PostBox,
        },
        {
          path: '/posts/:postId',
          name: 'Post',
          component: Post,
        },
        {
          path: '/tags/:tagId',
          name: 'Tag',
          component: PostBox,
        },
      ],
    },
  ],
});
