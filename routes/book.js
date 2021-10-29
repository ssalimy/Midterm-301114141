var express = require('express');
var router = express.Router();

let bookController = require('../controllers/book');

/* Get Rout For the Book List page - READ Operation */ 
router.get('/list', bookController.bookList);

/* Get Rout For the Details page - READ Operation */  
router.get('/details/:id', bookController.details);

/* Get Rout For displaying the Edit page - UPDATE Operation */ 
router.get('/edit/:id', bookController.displayEditPage);
/* Post Rout For processing the Edit page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage);

/* Get request to perform the deletion - DELETE Operation */ 
router.get('/delete/:id', bookController.performDelete);

/* Get Rout For displaying the Add page - CREATE Operation */ 
router.get('/add', bookController.displayAddPage);
/* Post Rout For processing the Add page - CREATE Operation */ 
router.post('/add', bookController.processAddPage);


module.exports = router;