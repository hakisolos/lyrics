const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express();
const PORT = 3000
const path = require("path")

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")))


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
app.get("/search", async(req, res) => {
    const q = req.query.q
    if(!q){
        return res.json("query not found")
    }
    try{
       
        const api = `https://api.giftedtech.my.id/api/search/lyrics?apikey=gifted&query=${q}`
        const response = await axios.get(api)
        if(response.data.result.status === 500){
            return res.json("song not found!!")
        }
        const lyrics = response.data.result
        return res.json(lyrics)
        
    }catch(e){
        return res.json(`song not found! 😭`)
    }
})

app.listen(PORT, () => {
    console.log(`check port ${3000} `)
})