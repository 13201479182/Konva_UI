import { exec } from 'child_process';

// prettier-ignore
const plugins = [
    // 工具类插件
    'ms-ceintl.vscode-language-pack-zh-hans',       // 1. Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code
    'vscode-icons-team.vscode-icons',               // 2. vscode-icons
    'alefragnani.project-manager',                  // 3. Project Manager
    'gruntfuggly.todo-tree',                        // 4. Todo Tree
    'eamodio.gitlens',                              // 5. GitLens — Git supercharged
    'editorconfig.editorconfig',                    // 6. EditorConfig for VS Code

    // Vue开发类插件
    'ritwickdey.liveserver',                        // 1. Live Server
    'formulahendry.auto-close-tag',                 // 2. Auto Close Tag
    'formulahendry.auto-rename-tag',                // 3. Auto Rename Tag
    'steoates.autoimport',                          // 4. Auto Import
    'dbaeumer.vscode-eslint',                       // 5. ESLint,
    'esbenp.prettier-vscode',                       // 6. Prettier - Code formatter
    'vue.volar',                                    // 7. Vue Language Features (Volar)
    'vue.vscode-typescript-vue-plugin',             // 8. TypeScript Vue Plugin (Volar)
    'hollowtree.vue-snippets',                      // 9. Vue 3 Snippets

    // Markdown插件
    'bierner.markdown-preview-github-styles',       // 1. Markdown Preview Github Styling
    'bierner.markdown-emoji',                       // 2. Markdown Emoji
    'bierner.emojisense',                           // 3. :emojisense:
    'bierner.markdown-checkbox',                    // 4. Markdown Checkboxes
    'bierner.markdown-footnotes',                   // 5. Markdown Footnotes
    'bierner.markdown-mermaid',                     // 6. Markdown Preview Mermaid Support

    // 3D插件
    'slevesque.shader',                             // 1. Shader languages support for VS Code
    'circledev.glsl-canvas',                        // 2. glsl-canvas
];

function installPlugins(installedPlugins) {
    let loadedCount = 0;
    let loadTotal = plugins.length;
    for (const plugin of plugins) {
        if (installedPlugins.includes(plugin)) {
            console.log(`vsix log: plugin install progress ${++loadedCount}/${loadTotal}`);
        } else {
            const child = exec(`code --install-extension ${plugin}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`vsix err log: ${err}`);
                } else {
                    console.log(`vsix log: plugin install progress ${++loadedCount}/${loadTotal}`);
                }
                // 结束子进程
                child.kill();
            });
        }
    }
}

exec('code --list-extensions', (err, stdout, stderr) => {
    if (err) {
        return console.log(err);
    }
    const installedPlugins = stdout.split('\n').filter(item => item);
    installPlugins(installedPlugins);
});
