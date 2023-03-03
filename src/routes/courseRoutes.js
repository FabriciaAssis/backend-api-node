import express from 'express'
import {
   listAllCourses, 
   createCourse,
   deleteCourse, 
   updateCourse
  } from '../controllers/courseController.js'

  const router = express.Router()

router.get('/', listAllCourses)
router.post('/', createCourse)
router.delete('/', deleteCourse)
router.put('/', updateCourse)

export default router