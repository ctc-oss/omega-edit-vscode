export function getWebviewContent(txt: string) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Omega!</title>
  </head>
  <body>
      <div>${txt}</div>
  </body>
  </html>`
}
