import puppeteer from "puppeteer";
import jQuery from "jquery";

const getQuotes = async () => {
    //? Parametros que serão passados
    // Carregar qual página? page index
    const offset = 12 // quinto andar carrega de 12 em 12 anúncios

    //?

    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
    })

    const page = await browser.newPage();

    await page.goto('https://www.quintoandar.com.br/alugar/imovel/aclimacao-sao-paulo-sp-brasil?referrer=home&profiling=true', {
        waitUntil: "domcontentloaded",
    })

    const pageIndex = 1
    
    let element = await page.waitForSelector('div.MuiBox-root.mui-10smzr0')
    for(let i = 0; i<pageIndex;i++) {
        await element.click()
        await page.waitForNavigation()
        element = await page.waitForSelector('div.MuiBox-root.mui-10smzr0')
    }

    
    const pageData = await page.evaluate(()=>{
        const pageIndex = 1
        const rentCardNodes = document.querySelectorAll('.bTndEd')
        const rentCardSelected = [...rentCardNodes].slice(pageIndex*12,(pageIndex*12)+12)
        const rentCardArr = [...rentCardSelected].map((e)=>{
            const imgs = [...e.querySelectorAll('img')].map((e)=>{
                return ('https://www.quintoandar.com.br'+e.getAttribute('src')).replace('med','xxl')
            })
            const title= e.firstChild.getAttribute('title')
            const link = e.firstChild.getAttribute('href')
            const rentPrice = {
                    text: e.querySelector('.fLkTfH').innerText,
                    rawText: (e.querySelector('.fLkTfH').innerText).replace(/\D+/g, '')
                }
            const totalPrice = {
                text: e.querySelector('.gYqoUK').innerText,
                rawText: (e.querySelector('.gYqoUK').innerText).replace(/\D+/g, '')
            }
            const basicInfo = e.querySelector('.hZkulO').innerText.split('·').map((element)=>{
                return element.replace(/[^0-9]/g,'')
            })
            const basicInfoObject = {
                size: basicInfo[0],
                bedrooms: basicInfo[1],
                parkingSpots: basicInfo[2]
            }
            const address = e.querySelector('h2.sc-dwVMhp.GWXqv').innerText
            const type = e.querySelector('h2.sc-djUGQo.NfHTU').innerText

            return {
                title,
                link,
                rentPrice,
                totalPrice,
                address,
                type,
                basicInfo: basicInfoObject,
                imgs,

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