const express = require('express')
const app = express()
// http client
const axios = require('axios')
// one specific client - can have multiple
const httpClient = axios.create()
const PORT = 3000

// mtrdOZaC06osxKRC1GTqvOyXtdnvdIrH - giphy api key (don't put api keys in code!!!)

app.get("/search/:term", (req, res) => {
    const options = {
        method: 'get',
        url: `https://api.giphy.com/v1/gifs/search?api_key=mtrdOZaC06osxKRC1GTqvOyXtdnvdIrH&q=${req.params.term}&limit=24&offset=0&rating=G&lang=en`
    }

    httpClient(options).then((apiResponse) => {
        var imgStr = ''
        var images = apiResponse.data.data

        images.forEach((image) => {
            const currentImageURL = image.images.fixed_height.url
            imgStr += `<img src="${currentImageURL}" />`
        })

        res.send(imgStr)
    })
})

app.get("/stickers/:term", (req, res) => {
    const options = {
        methos: 'get',
        url: `https://api.giphy.com/v1/stickers/search?api_key=mtrdOZaC06osxKRC1GTqvOyXtdnvdIrH&q=${req.params.term}&limit=25&offset=0&rating=G&lang=en`
    }

    httpClient(options).then((apiResponse) => {
        var stickerStr = ''
        var stickers = apiResponse.data.data
        
        stickers.forEach((sticker) => {
            console.log(sticker)
            const currentStickerURL = sticker.images.fixed_height.url
            stickerStr += `<img src="${currentStickerURL}" />`
        })

        res.send(stickerStr)
    })
})

app.get('/random/:tag', (req, res) => {
    // where we send the request
    const options = { 
        method: 'get', 
        url: `https://api.giphy.com/v1/gifs/random?api_key=mtrdOZaC06osxKRC1GTqvOyXtdnvdIrH&tag=${req.params.tag}&rating=G`
    }

    httpClient(options).then((apiResponse) => {
        var imageUrl = apiResponse.data.data.images.original.url
        res.send(`<img src="${imageUrl}" />`)
    })
})

app.get('/trending', (req, res) => {
    const options = {
        method : 'get',
        url: `https://api.giphy.com/v1/gifs/trending?api_key=mtrdOZaC06osxKRC1GTqvOyXtdnvdIrH&limit=25&rating=G`
    }

    httpClient(options).then((apiResponse) => {
        // console.log(apiResponse.data.data[0].images.original.url)
        const imageUrl = apiResponse.data.data[0].images.original.url
        res.send(`<img src=${imageUrl} />`)
    })
})



app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})