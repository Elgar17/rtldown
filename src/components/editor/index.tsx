import React, { useEffect, useState } from 'react'
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { nord } from '@milkdown/theme-nord'
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark'
import '@milkdown/theme-nord/style.css'
import './index.less'

interface MilkdownProps {
  // onChange: (value: string) => void
  text: string
}

const MilkdownEditor: React.FC<MilkdownProps> = ({ text }) => {
  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root)
        ctx.set(defaultValueCtx, text)
      })
      .use(commonmark)
  )
  // const [editor] = useState(get())

  //   // 更新内容
  useEffect(() => {
    if (!text) return
    console.log(
      '火箭：',
      get()?.config((ctx) => {
        // 更新内容为 text
        ctx.set(rootCtx, text)
        // console.log(ctx);
      })
    )
    // setText(get().getContent())
  }, [text])

  return <Milkdown />
}

interface MDEditorProps {
  onChange: (value: string) => void
  // text: string
}

export const MilkdownEditorWrapper: React.FC<MDEditorProps> = () => {
  const { ipcRenderer } = window.require('electron')
  const [text, setText] = useState('# hello')

  useEffect(() => {
    ipcRenderer.on('read-file-reply', (_, fileCtx) => {
      setText(fileCtx)
    })
    return () => {
      ipcRenderer.removeAllListeners('read-file-reply')
    }
  }, [])

  return (
    <div>
      <div className="file-name">hello.md</div>
      <button>获取内容</button>
      <MilkdownProvider>
        <MilkdownEditor text={text} />
      </MilkdownProvider>
    </div>
  )
}
