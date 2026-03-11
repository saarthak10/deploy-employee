// const https = require('https')
// const fs = require('fs')
// const path = require('path')

// const url = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb'
// const outPath = path.join(__dirname, '..', 'public', 'assets', 'character.glb')

// function download(url, dest) {
//   return new Promise((resolve, reject) => {
//     const dir = path.dirname(dest)
//     fs.mkdirSync(dir, { recursive: true })
//     const file = fs.createWriteStream(dest)
//     https.get(url, (res) => {
//       if (res.statusCode !== 200) {
//         reject(new Error('Failed to download file: ' + res.statusCode))
//         return
//       }
//       res.pipe(file)
//       file.on('finish', () => {
//         file.close(() => resolve(dest))
//       })
//     }).on('error', (err) => {
//       fs.unlink(dest, () => {})
//       reject(err)
//     })
//   })
// }

// ;(async () => {
//   try {
//     if (fs.existsSync(outPath)) {
//       console.log('Sample GLB already exists at', outPath)
//       return
//     }
//     console.log('Downloading sample GLB to', outPath)
//     await download(url, outPath)
//     console.log('Saved sample GLB.')
//   } catch (err) {
//     console.error('Could not fetch sample GLB:', err.message || err)
//     process.exitCode = 0
//   }
// })()
