import { retrieveStorage } from './categories.js'
import { addDelete, addTick, addUntick } from './item.js'
import * as modifier from './modifyItems.js'

retrieveStorage()
addTick()
addUntick()
addDelete()