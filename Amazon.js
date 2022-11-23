import request from "request";
import cheerio from "cheerio";

const array = []
request('https://www.amazon.in/s?k=electronics&crid=2P9R7262ZERW6&sprefix=electronics%2Caps%2C338&ref=nb_sb_noss_1',(err,response,html)=>{
//    console.log(html) 
    const $=cheerio.load(html)

//sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 AdHolder sg-col s-widget-spacing-small sg-col-4-of-20
     $('.sg-col-4-of-20')
    .each((i,ell)=>{
        const image = $(ell)
        .find('img')
        .attr('src')

        const title= $(ell)
        .find('.a-text-normal')
        .text()

        const rating = $(ell)
        .find('.a-icon-alt')
        .text()

        const price = $(ell)
        .find('.a-offscreen')
        .text()

        const offerPrice = $(ell)
        .find('.a-offscreen')
        .text()

        array.push({
            image,
            title,
            rating,
            price,
            offerPrice
        })
        // console.log(array)
    })
    
})

export default array;