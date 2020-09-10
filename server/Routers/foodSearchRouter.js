const express = require('express');
const axios = require('axios');
const auth = require('../Middleware/auth');
const { externalURL, appId, appKey } = require('../Config/keys');

const router = express.Router();

// retrieves food search results from third party API
router.get('/:query', auth, async (req, res) => {
  const { query } = req.params;
  axios({
    method: 'post',
    url: externalURL,
    data: {
      appId,
      appKey,
      query,
      fields: [
        'item_name',
        'brand_name',
        'nf_calories',
        'nf_protein',
        'nf_total_carbohydrate',
        'nf_total_fat',
      ],
    },
  })
    .then((response) => {
      console.log(response.data);
      const { hits } = response.data;
      const results = hits.map((hit) => {
        return {
          name: hit.fields.item_name,
          brand: hit.fields.brand_name,
          calories: Math.round(hit.fields.nf_calories),
          protein: Math.round(hit.fields.nf_protein),
          carbs: Math.round(hit.fields.nf_total_carbohydrate),
          fat: Math.round(hit.fields.nf_total_fat),
          api_id: hit._id,
        };
      });
      res.status(200).json(results);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ message: 'Unable to search' });
    });
});

module.exports = router;
