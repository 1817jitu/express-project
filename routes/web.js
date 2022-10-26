const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');
const FrontendController = require('../controllers/FrontendController');
const OrederController = require('../controllers/OrderController');
const StudentController = require('../controllers/StudentCotroller');
const router = express.Router();



// router.get('/',(req,res) => {
//     res.send("hello world");
// });

//=============================StudentController======================================
router.get('/home',StudentController.home)
router.get('/create',StudentController.create)
router.get('/view',StudentController.view)
router.get('/edit',StudentController.edit)
router.get('/delete',StudentController.delete)

//==============================EmployeeController=====================================
router.get('/home',EmployeeController.home)
router.get('/employee-about',EmployeeController.about)
router.get('/employee-ourteam',EmployeeController.ourteam)
router.get('/employee-contactus',EmployeeController.contactus)
router.get('/employee-login',EmployeeController.login)

//===============================OrderController=======================================
router.get('/order/display', OrederController.display)
router.get('/order/create', OrederController.createOrder)

// ============================FrontendController======================================
router.get('/frontend-home',FrontendController.home)
router.get('/frontend-about',FrontendController.about)
router.get('/frontend-contact',FrontendController.contact)

module.exports = router