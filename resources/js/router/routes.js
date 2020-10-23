function page(path) {
    return () => import(`@/components/${path}`).then(m => m.default || m);
}

export default [
    {
        path: '/',
        name: 'Home',
        component: page('admin/Home')
    },
    {
        path: '/test',
        name: 'Test',
        component: page('client/Test')
    }
];
