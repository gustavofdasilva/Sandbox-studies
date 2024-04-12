import puppeteer from "puppeteer";
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
  
  const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
  })
  
  const page = await browser.newPage();
  
  await page.goto('https://www.zapimoveis.com.br/aluguel/imoveis/sp+sao-paulo+zona-norte+tucuruvi/', {
      waitUntil: "domcontentloaded",
  })

  const pageData = await page.evaluate(()=>{
      const rentCardNodes = document.querySelectorAll('div.listing-wrapper__content>div')
      
      const rentCardArr = [...rentCardNodes].map(e => {
        const address = e.querySelector('h2') ? e.querySelector('h2').innerText : null
        
        return {
            address,
        }
      })

      return document.querySelector('p').innerText
  })
  
  console.log(pageData)

}

getQuotes();