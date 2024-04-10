import puppeteer from "puppeteer";
import jQuery from "jquery";
import jsdom from 'jsdom'

const getQuotes = async () => {
    //? Parametros que serão passados
    // Carregar qual página? page index
    const offset = 12 // quinto andar carrega de 12 em 12 anúncios

    //?

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    })

    const page = await browser.newPage();

    await page.goto('https://www.quintoandar.com.br/alugar/imovel/aclimacao-sao-paulo-sp-brasil?referrer=home&profiling=true', {
        waitUntil: "domcontentloaded",
    })

    const pageIndex = 20
    
    let element = await page.waitForSelector('div.MuiBox-root.mui-10smzr0')
    for(let i = 0; i<pageIndex;i++) {
        await element.click()
        await page.waitForNavigation()
        element = await page.waitForSelector('div.MuiBox-root.mui-10smzr0')
    }
    

    const pageData = await page.evaluate(()=>{
        const pageIndex = 20
        const rentCardNodes = document.querySelectorAll('.bTndEd')
        const rentCardSelected = [...rentCardNodes].slice(pageIndex*12,(pageIndex*12)+12)
        const rentCardArr = [...rentCardSelected].map((e)=>{
            const imgs = [...e.querySelectorAll('img')].map((e)=>{
                return ('https://www.quintoandar.com.br'+e.getAttribute('src')).replace('med','xxl')
            })
            return {
                title: e.firstChild.getAttribute('title'),
                // link: e.firstChild.getAttribute('href'),
                // rentPrice: {
                //     text: e.querySelector('.fLkTfH').innerText,
                //     rawPrice: (e.querySelector('.fLkTfH').innerText).replace(/\D+/g, '')
                // },
                // totalPrice: {
                //     text: e.querySelector('.gYqoUK').innerText,
                //     rawPrice: (e.querySelector('.gYqoUK').innerText).replace(/\D+/g, '')
                // },
                // // address: e.querySelector('.hGkWsg').innerText,
                // // type: e.querySelector('.jxBqSr').innerText,
                // basicInfo: e.querySelector('.hZkulO').innerText, //! Fazer split no "·" para separa cada info
                // imgs,

            }
        })
        

        
        

        /*const title = document.querySelector("h1").innerText
        const address = document.querySelector('h4').innerText
        const price = document.querySelector('.dpxvUv').innerText
        const rentPrice = document.querySelector('.gzVfKD').innerText
        const imagesNodeList = document.querySelectorAll('img')
        const images = [...imagesNodeList].map((image)=>{
            const path = image.getAttribute('src') ?? image.getAttribute('data-src')
            return path
        })
        
        return {
            title, 
            address, 
            price,
            rentPrice,
            images: images.map((img)=>{
                if(img) {
                    return img.replace("/img/","https://www.quintoandar.com.br/img/")
                }
            })}*/

        return rentCardArr
    })

    console.log(pageData)

    await page.close()
    

}

getQuotes();