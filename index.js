import {Webhook} from 'discord-webhook-node';
import express from 'express'
import cors from 'cors'
import {curly} from 'node-libcurl'

const app = express()
const port = 3000

const NOT_AVAILABLE = 'NOT_AVAILABLE'

app.get('/', cors(), async (req, res) => {
const hook = new Webhook('https://discord.com/api/webhooks/1062746897967743037/6gIsm2hsqiWbwQF6wnoC_ZcnRlgiG_rni-2VlXTE7shi7ydXJlgLjh2Y_jOZQSt64tJ7');
 
const IMAGE_URL = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
hook.setUsername('AdidasBot');
hook.setAvatar(IMAGE_URL);

  setInterval(async () => {
    const { data } = await curly.get('https://www.adidas.com.ar/api/products/IB3593/availability', {
    httpHeader: [
     'Content-Type: application/json',
     'Accept: application/json',
     'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
     ],
    })
    if (true) {
    //if (data.variation_list[2].availability !== 0 || data.variation_list[2].availability_status !== NOT_AVAILABLE || data.availability_status !== NOT_AVAILABLE) {
      console.log('ENCONTRAMOS TALLE')
      hook.send('VILEK: ENCONTRAMOS TALLE! RAPIDO, ENTRÁ')
    }
  }, 2000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})