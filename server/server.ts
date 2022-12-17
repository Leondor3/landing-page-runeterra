import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.use(cors());

app.get('/cards', async (request, response) => {
  const cards = await prisma.cards.findMany({
    select: {
      title: true,
      subparagraph: true,
      bannerUrl: true,
    },
  })

  return response.json(cards);
})

app.get('/slider', async (request, response) => {
  const slider = await prisma.slider.findMany({
    select: {
      bannerSlide: true,
    },
  })

  return response.json(slider);
})

app.get('/cardstabs', async (request, response) => {

  const cardstabs = await prisma.cardsTabs.findMany({
    select: {
      title: true,
      subtitle: true,
      bannerUrl: true,
    },
  
  })

  return response.json(cardstabs);
})

app.listen(3333, () => {
    console.log('Servidor está funcionando')
})
