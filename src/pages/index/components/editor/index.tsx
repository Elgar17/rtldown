import React, { useEffect, useState } from 'react'
import { Editor, rootCtx } from '@milkdown/core'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { nord } from '@milkdown/theme-nord'
import { replaceAll } from '@milkdown/utils'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark'
import '@milkdown/theme-nord/style.css'
import './index.less'

interface MilkdownProps {
  onChange: (value: string) => void
  text: string
}

const MilkdownEditor: React.FC<MilkdownProps> = ({ text, onChange }) => {
  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root)

        ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
          onChange(markdown)
        })
      })
      .use(commonmark)
      .use(listener)
  )

  useEffect(() => {
    if (!text) return
    get()?.action(replaceAll(text))
  }, [text])

  return (
    <div>
      <Milkdown />
    </div>
  )
}

interface MDEditorProps {
  onChange: (value: string) => void
  node: any
}

export const MilkdownEditorWrapper: React.FC<MDEditorProps> = ({
  onChange,
  node,
}) => {
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
      <div className="file-name">{node?.name}</div>
      <MilkdownProvider>
        <MilkdownEditor text={text} onChange={onChange} />
      </MilkdownProvider>
    </div>
  )
}
