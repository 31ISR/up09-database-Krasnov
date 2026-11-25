const express = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    const startedAt = new Date()

    res.on('finish', () => {
        console.log(`${startedAt.toISOString()} - ${req.method} ${req.originalUrl}`)
    })

    next()
})

app.get("/api", (req, res) => {
    res.json({ message: "Service is healthy" })
})

module.exports = app