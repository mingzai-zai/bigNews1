; (function (w) {

    let base = "http://localhost:8080/api/v1";
    let allUrl = {
        base: base,
        user_login: base + '/admin/user/login',//用户登录
        user_info: base + '/admin/user/info',//用户信息
        user_detail: base + '/admin/user/detail',//用户详情
        user_edit: base + '/admin/user/edit',//用户编辑
        category_list: base + '/admin/category/list',//文章类别查询
        category_add: base + '/admin/category/add',//文章类别新增
        category_search: base + '/admin/category/search',//文章类别搜索
        category_edit: base + '/admin/category/edit',//文章类别编辑
        category_delete: base + '/admin/category/delete',//文章类别删除
        article_query: base + '/admin/article/query',//文章搜索
        article_publish: base + '/admin/article/publish',//文章发布
        article_search: base + '/admin/article/search',//文章信息查询
        article_edit: base + '/admin/article/edit',//文章编辑
        article_delete: base + '/admin/article/delete',//文章删除
        comment_list: base + '/admin/comment/search',//文章评论列表
        comment_pass: base + '/admin/comment/pass',//文章评论通过
        comment_reject: base + '/admin/comment/reject',//文章评论不通过
        comment_delete: base + '/admin/comment/delete',//文章评论删除
    }
    w.allUrl = allUrl;
})(window);