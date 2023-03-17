import express from 'express'
import {
  listAllUser,
  showUser,
  createUser,
  deleteUser,
  updateUser,
  deleteIdUser
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', listAllUser) // SELECT
router.get('/:id', showUser) // SELECT
router.post('/', createUser) // INSERT
router.delete('/', deleteUser) // DELETE
router.delete('/:id', deleteIdUser) // DELETE
router.put('/', updateUser) // UPDATE

export default router