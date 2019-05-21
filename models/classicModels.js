import {HTTP} from '../utils/Http.js'
class ClassicModels extends HTTP{
  getLatest(callback){
    this.request({
      url: '/classic/latest',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
        callback(res)
      }
    })
  }
} 
export {ClassicModels}