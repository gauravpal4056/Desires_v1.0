import express from 'express';
import bodyParser from 'body-parser'
import * as cheerio from 'cheerio';
import cors from 'cors'

import main from "./controller/scrap.js"

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", ]
}))

app.post("/", async (req, res) => {
    const {url} = req.body;
    const result = await fetch(url)
    const body = await result.text()
    const $ = cheerio.load(body);
    const imgLink = $('._396cs4').attr('src');
    const price = $('._30jeq3').text().split('₹')[1];
    const detail = $('.B_NuCI').text();
    return res.json({price: price, img:imgLink,detail:detail, message:"success"})

})
app.get('/:url', async(req, res) => {
    const url =req.params.url
    const result = await fetch(url)
    const body = await result.text()
    const $ = cheerio.load(body);
    const imgLink = $('._396cs4').attr('src');
    const price = $('._30jeq3')
    console.log(price.text());
    res.send("hey " + price + " imgLik is " + imgLink)

})

app.listen(3001, () => console.log("started at 3001"))