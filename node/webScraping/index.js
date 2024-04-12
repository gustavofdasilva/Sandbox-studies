const{ puppeteer } = require('puppeteer')
const {Cluster} = require('puppeteer-cluster')

const getQuotes = async () => {
    //? Parametros que serão passados
    /*
    * pageIndex: Number <- quantos imóveis carregar por requisição (Testado apenas no QuintoAndar)
    * type: "rent" | "buy" <- Comprar ou Alugar imóveis
    * place: { <- Local escolhido do imóvel (precisa estar separado pois a URL de cada site usa uma estrutura diferente)
    *   UF: String
    *   city: String
    *   district: String
    * } 
    */
   //?
   
    const quintoAndarScraping = () => {
        const pageIndex = 0
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
        return rentCardArr
    }

    const zapimoveisScraping = () => {
        const rentCardNodes = document.querySelectorAll('div.listing-wrapper__content>div')
      
      const rentCardArr = [...rentCardNodes].map(e => {
        const address = e.querySelector('h2') ? e.querySelector('h2').innerText : null
        
        return {
            address,
        }
      })

      return document.querySelector('p').innerText
    }

    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 4,
        puppeteerOptions: {
            headless: true
        }
    })

    await cluster.task(async ({page, data: url})=>{
        await page.goto(url);
        let getData;
        if(String(url).includes('quintoandar')) {
            getData = quintoAndarScraping
        }
        
        if(String(url).includes('zapimoveis')) {
            getData = zapimoveisScraping
        }

        const pageData = await page.evaluate(getData)
        console.log(pageData)
    })

    await cluster.queue('https://www.quintoandar.com.br/alugar/imovel/tucuruvi-sao-paulo-sp-brasil?referrer=home&profiling=true')
    await cluster.queue('https://www.zapimoveis.com.br/aluguel/imoveis/sp+sao-paulo+zona-norte+tucuruvi/')
    await cluster.queue('https://www.youtube.com')

    await cluster.idle()
    await cluster.close()
}

getQuotes();