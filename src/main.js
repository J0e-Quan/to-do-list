import { retrieveStorage } from './categories.js'
import { addDelete, addTick } from './item.js'
import * as modifier from './modifyItems.js'

retrieveStorage()
addTick()
addDelete()