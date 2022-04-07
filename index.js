

const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hiiiiiii')
})

app.get('/users', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(result => {
        res.json(result.data);
    })
})



app.get('/arrs', (req, res) => {
    const bankLog = [
    {
      id: 1,
      bankName: 'BOA',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 2,
      bankName: 'BOA',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 3,
      bankName: 'Sun Trust',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 4,
      bankName: 'BOA',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 5,
      bankName: 'Sun Trust',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,
      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 6,
      bankName: 'Chime',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 7,
      bankName: 'BOA',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 8,
      bankName: 'Chime',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
    },
    {
      id: 9,
      bankName: 'BOA',
      balance: 21000,
      price: 250,
      include: 'Online access, Email access, DOB, Cookies, address, card details, Acct&Rn, License, Zelle On and Wire ON',
      hideInfoModal: false,

      email: 'samdougla@gmail.com',
      password: 'samdougla003',
      dob: 'Jan 10th, 1978',
      cardDetails: '2222 433 5555 8383',
      pvc: 331
      
    },
  ]
    res.json(bankLog)
})



app.listen(process.env.PORT || 8000)
