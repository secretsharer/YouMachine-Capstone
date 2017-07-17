import Cosmic from 'cosmicjs'

export default {
  create:(config, params, callback) => {
    const object = {
      title: params.author + ': ' +
      params.message,
      type_slug: config.bucket.type_slug,
      metafields: [
        {
          
        }
      ]
    }

}
