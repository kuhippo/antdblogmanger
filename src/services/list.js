/**
 * Created by zmb on 25/2/17.
 */

import request from '../utils/request';


//获取文章
export function getarticles({ page = 1 }){
    return request('/api/blogs');
}

//删除文章
export function deleteArticle({ page = 1 }){
  return request('/api/deleteArticle');
}

// ,{
// method: "GET"
// body: "article="+tag
// })
