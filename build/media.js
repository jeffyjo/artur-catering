const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const imageSrc = path.resolve(`${__dirname}/../rawImages`)
const imageDist = path.resolve(`${__dirname}/../static/img`)

let images = fs.readdirSync(imageSrc)
images = images.filter(image => image.indexOf('dsc') > -1)

images.forEach(image => {
  sharp(`${imageSrc}/${image}`)
  .resize(1280, 1024)
  .toFile(`${imageDist}/${image}`, (err, info) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Image transformed', info)
  })
})
