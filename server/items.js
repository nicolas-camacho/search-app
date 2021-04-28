const express = require('express');
const fetch = require('node-fetch');
let router = express.Router();

router.get('/', async (req, res) => {
    let query = req.query.q

    const result = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
        .catch(err => console.log(err.message));

    if(result && result.ok){
        res.send(await result.json())
    } else {
        res.send('Nope')
    }
});

module.exports = router;