module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/prettier'], //需要dev依赖里安装eslint-config-prettier
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //下面是核心设置，会覆盖vscode关于prettier的设置
        'prettier/prettier': [
            'warn',
            {
                semi: false,
                singleQuote: true,
                printWidth: 160,
                endOfLine: 'crlf',
            },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
