/**
 * Created by zmb on 25/2/17.
 */

import request from '../utils/request';


//获取文章
export function getarticle() {
  return request('/api/artivle');
}
