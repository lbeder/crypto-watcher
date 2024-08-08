import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["**/*.ts"],
    rules: {
      "max-len": ["error", 150, 2],
      camelcase: [
        "error",
        {
          ignoreImports: true
        }
      ],
      indent: [
        "error",
        2,
        {
          SwitchCase: 1
        }
      ],
      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],
      "no-plusplus": "off",
      "no-await-in-loop": "off",
      "no-restricted-syntax": "off",
      "no-continue": "off",
      "no-console": "error",
      "arrow-body-style": "off",
      "no-loop-func": "off",
      "no-unused-expressions": "off",
      "require-await": "error",
      "no-return-await": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ]
    },
    languageOptions: {
      globals: {
        assert: true,
        expect: true,
        artifacts: true,
        contract: true
      }
    }
  }
];
