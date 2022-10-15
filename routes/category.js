const express = require('express')
const CategoryModel = require('../models/CategoryModel')
const router = express.Router()

//URL: localhost:3000/student
router.get('/', (req, res) => {
    CategoryModel.find((err, data) => {
    if (!err) {
      //res.send(data)
      //render ra trang index ở thư mục views/student
      res.render('category/index', { category: data })
    }
  })
})
router.get('/detail/:id', (req, res) => {
    CategoryModel.findById(req.params.id, (err, category) => {
      if (!err) {
         res.render('category/info',{category: category})
      }
   });
});



router.get('/delete/:id', (req, res) => {
    CategoryModel.findByIdAndDelete(req.params.id, (err) => {
     if (err) {
        console.log(err)
     } else {
        console.log("Delete category succeed !");
        //var message = "Delete student succeed !";
        //redirect về trang /student (URL không phải view)
        res.redirect("/category");
     }
  })
})

//render ra form ADD
router.get('/add', (req, res) => {
    res.render("category/new");
})

//nhận & xử lý dữ liệu từ form ADD
router.post('/add', (req, res) => {
   var category = new CategoryModel(req.body)
   category.save((err) => {
      if (!err) {
        console.log ("Add category succeed !")
        res.redirect("/category")
      }
   })
})

//render ra form EDIT
router.get('/edit/:id', (req, res) => {
    CategoryModel.findById(req.params.id, (err, data) => {
      if (!err) {
         res.render("category/update", { category : data })
      }
   })
})

//nhận & xử lý dữ liệu từ form EDIT
router.post('/edit/:id', (req, res) => {
   var id = req.params.id;
   var category = req.body;
   CategoryModel.findByIdAndUpdate(id, category, (err) => {
     if (!err) {
        console.log ("Update category succeed !")
        res.redirect("/category")
     }
   })
})

module.exports = router
