const router = require("express").Router();
import {getHtmlContent} from '../../services/htmlRewriteService';

router.get('/*', (req, res) => {
    const friendlyUrl = req.url.substr(1,req.url.length - 1);
    // TODO: pull some data from the database
    // TODO: build and inject meta tags to the HTML
    const htmlContent = getHtmlContent();
    res.set('Content-Type', 'text/html')

    res.send(htmlContent)
})

module.exports = router;
