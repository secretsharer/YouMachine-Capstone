export default {
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'ubot',
    type_slug: 'messages'
  },
  server: {
    host: process.env.youmachine.herokuapp.com/ || 'http://localhost:3000'
  }
}
