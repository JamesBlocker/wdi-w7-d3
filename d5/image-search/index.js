const express = require('express')
const app = express()
// http client
const axios = require('axios')
// one specific client - can have multiple
const httpClient = axios.create()
const PORT = 3000

// mtrdOZaC06osxKRC1GTqvOyXtdnvdIrH - giphy api key (don't put api keys in code!!!)

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