/**
 * Created by zmb on 25/2/17.
 */
import * as usersService from '../services/show';

export default {
  namespace: 'show',
  state: {
    article:"",
    isFetching:false,
  },

  reducers: {
    stardLoard(state){
      return{
        article:state.article,
        isFetching:true
      }
    },

    //获取成功
    drawing(state,{payload:article}){
      return {
        isFetching:false,
        article:article
      }
    },
  },

  effects: {
    *getarticle({
      payload:{page}
    },{call,put}){
      yield put({ type: 'stardLoard'});
      const data = yield call(usersService.getarticle);
      const article = data.data.article
      yield put({type:'drawing',payload:{article}})
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
        }
      });
    },
  },
};
