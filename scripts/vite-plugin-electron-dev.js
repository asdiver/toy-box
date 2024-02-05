// 开发调试中联动electron
import { exec } from 'node:child_process'
import process from 'node:process'

export default () => ({
  name: 'electron-server',
  configureServer(server) {
    const http = server.httpServer
    http.on('listening', () => {
      const { address, port } = http.address()

      // 执行electron 提供vite开发服务器地址
      const env = Object.assign({ VITE_DEV_URL: `http://${address}:${port}` }, process.env)
      const electron = exec('pnpm run dev:electron', { env })

      // 子进程输出打印到父进程中
      electron.stdout.on('data', (data) => {
        console.log('electron render:', data)
      })
      electron.stderr.on('data', (err) => {
        console.log('electron render:', err)
      })

      // 两个进程同步关闭
      electron.on('exit', () => {
        process.exit()
      })
      process.on('exit', () => {
        electron.kill()
      })
    })
  },
})
