console.log('Toggle Sidebar - working')

import { getElement } from './utils.js'

const toggleNav = getElement('toggle-nav')
const sidebarOverlay = getElement('.sidebar-overlay')
const closeBtn = getElement('.sidebar-close')

