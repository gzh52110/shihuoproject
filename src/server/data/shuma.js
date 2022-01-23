// cnpm install cheerio
// 专门为服务器设计包含jq核心库的第三方模块
// cnpm install request http://www.shihuo.cn/digital/list?scene=%E6%91%84%E5%BD%B1%E6%91%84%E5%83%8F#qk=category

// cnpm install cheerio
// 专门为服务器设计包含jq核心库的第三方模块
// cnpm install request

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs")
const path = require("path")
// 爬取目标地址
const targetUrl = `http://www.shihuo.cn/digital/list?scene=%E6%91%84%E5%BD%B1%E6%91%84%E5%83%8F#qk=category`;
const goodslist = []
request(targetUrl, (err, res, body) => {
 
  // console.log(body);
  const $ = cheerio.load(body);
   // body:爬取的内容
 
  $("#js_hover li").each((idx, item) => {
    //   const id = $(item).data('id')
    const $item = $(item)
      const id = $item.attr('data-goodsid')
      const title = $item.find(">.title>a").text()
      const imgUrl =$item.find(".img img").attr("src")
      const price = $item.find(">.price>span>b").text()

    const goods = {
      id,
      imgUrl,
      price,
      title,
    };
    goodslist.push(goods)

  });
//   console.log("goodslist:",goodslist);
//   console.log("goodslist:",goodslist);
});
 
module.exports = goodslist 