/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'lazysizes'
require('prismjs/themes/prism-tomorrow.css')

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}
