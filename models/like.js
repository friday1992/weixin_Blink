import { HTTP } from '../utils/Http.js'
class LikeModels extends HTTP {
  like(params) {
    console.log(params)
    let url = params.behavior == 'like'?'/like':'/like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id:params.art_id,
        type:params.category
      },
      //回调函数
      success: (res) => {
        console.log('回调函数'+res.data)
      }
    })
  }
}
export { LikeModels }