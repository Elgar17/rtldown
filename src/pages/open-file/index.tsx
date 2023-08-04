import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
import { useEffect } from 'react'

// import fs from 'fs'
// fs.readFile('package.json', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
//   console.log(JSON.parse(data.toString()).name)
// })

const Open = () => {
  useEffect(() => {
    console.log('open')
  }, [])
  const openFile = () => {
    // console.log(window)
    console.log(window?.require('fs'))
  }
  return (
    <div className="open-continer">
      <Button onClick={openFile}>
        {/* <Link to="/">Open New File</Link> */}
        <div>Open New File</div>
      </Button>
    </div>
  )
}

export default Open
