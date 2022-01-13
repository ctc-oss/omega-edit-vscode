<div align="center">
<p>
  <img alt="Omega Edit Logo" src="https://raw.githubusercontent.com/Shanedell/omega-edit-vscode/master/images/OmegaEditLogo.png" width=120>
</p>

<h1>Ωedit Edit for VS Code</h1>
  
![CodeQL](https://github.com/ctc-oss/omega-edit-vscode/workflows/CodeQL/badge.svg)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/ctc-oss/omega-edit-vscode.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ctc-oss/omega-edit-vscode/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ctc-oss/omega-edit-vscode.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ctc-oss/omega-edit-vscode/context:javascript)

</div>

Example VS Code plugin that uses embedded [Omega Edit](https://github.com/ctc-oss/omega-edit) bindings to generate content.


### Build Requirements
- Bindings compiled against Electron Node v14.16.0
- VS Code v1.60-1.63
- Yarn (https://yarnpkg.com/getting-started/install)

### Build and Launch

- Run `yarn` or `yarn install`
- Click the `Run and Debug` button
- Click the play button with `Extension` select
  - this causes the extension to launch

<img alt="Build Launch GIF" src="https://raw.githubusercontent.com/Shanedell/omega-edit-vscode/master/images/BuildLaunch.gif">

### Show Extension

Type omega at the command palette:

- Windows/Linux: (`ctrl+shift+p`)
- Mac: (`command+shift+p`)


### References
- https://github.com/ctc-oss/omega-edit
- https://github.com/microsoft/vscode-extension-samples
