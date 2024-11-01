export default {
    extends: [
        'stylelint-config-standard', // 配置stylelint拓展插件
        'stylelint-prettier/recommended', // 在 Stylelint 中集成 Prettier，使其成为 Stylelint 规则的一部分。
        'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件,
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        'prettier/prettier': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'unocss']
            }
        ],
        'no-descending-specificity': null,
        'selector-class-pattern': null
    }
}
