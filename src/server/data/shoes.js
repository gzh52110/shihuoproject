// cnpm install cheerio
// 专门为服务器设计包含jq核心库的第三方模块
// cnpm install request

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs")
const path = require("path")
// 爬取目标地址
const targetUrl = `http://www.shihuo.cn/basketball/list?page_size=60&sort=price_d&brand=%E4%B9%94%E4%B8%B9%E4%BD%93%E8%82%B2&price=100-300#qk=shaixuan`;
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
    const fileName = path.basename(imgUrl)
    const downloadPath = path.join("./download/",fileName)
    const writerStream = fs.createWriteStream(downloadPath)
    request(imgUrl).pipe(writerStream)
  });
  // console.log("goodslist:",goodslist);
});
 
module.exports = goodslist 