/**
 * Created by zmb on 25/2/17.
 */
import * as usersService from '../services/list';

export default {
  namespace: 'list',
  state: {
    isFetching:false,
    dataSource:[],
  },

  reducers: {
    stardLoard(state){
      return{
        isFetching:true,
        dataSource:state.dataSource
      }
    },
    //获取成功
    drawing(state,{payload:dataSource}){

      return {
        isFetching:false,
        dataSource:dataSource.dataSource
      }
    },
  },
  effects: {
    *deletearticle({
      payload:{page}
    },{call,put}){
      console.log(123)
      yield put({ type: 'stardLoard'});
      const judge = yield call(usersService.deleteArticle,{page});
      console.log(judge)
      // yield put({type:'drawing',payload:{dataSource}}
    },
    *getarticles({
      payload:{page}
    },{call,put}){
      yield put({ type: 'stardLoard'});
      const data = yield call(usersService.getarticles,{page});
      const dataSource = data.data
      yield put({type:'drawing',payload:{dataSource}})
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
