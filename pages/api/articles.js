export const db = [{
    slug: 'a',
    title: 'ant',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
  }, {
    slug: 'b',
    title: 'bat',
    message: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu'
  }, {
    slug: 'c',
    title: 'cat',
    message: 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  }]
  
  export default function handler(req, res) {
    res.status(200).json(db)
  }