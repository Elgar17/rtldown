import { Space } from 'antd'
import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import './FileOperation.less'

const FileOperation = () => {
  return (
    <div className="file-operation-container">
      {/* <Space> */}
      <div className="file-icon">
        <FolderAddOutlined style={{ fontSize: '18px' }} />
      </div>
      <div className="file-icon">
        <FileAddOutlined style={{ fontSize: '16px' }} />
      </div>
      {/* </Space> */}
    </div>
  )
}

export default FileOperation
