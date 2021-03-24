import Layout from "@/business/app-layout/horizontal-layout";

const Users = {
  sort: 7,
  path: '/users',
  component: Layout,
  name: 'User',
  meta: {
    requireLicense: true,
  },
  children: [
    {
      path: 'list',
      component: () => import('@/business/users'),
      name: "UserList",
      meta: {
        title: "route.user",
        icon: 'el-icon-user',
        roles: ['admin']
      }
    },
    {
      path: "create",
      hidden: true,
      name: "UserCreate",
      component: () => import('@/business/users/create'),
      meta: {
        activeMenu: "/users/list",
        roles: ['admin']
      },
    }, {
      props: true,
      path: "edit/:name",
      hidden: true,
      name: "UserEdit",
      component: () => import('@/business/users/edit'),
      meta: {
        activeMenu: "/users/list",
        roles: ['admin']
      },
    }
  ]
}
export default Users
