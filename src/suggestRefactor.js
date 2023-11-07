// src/suggestRefactor.js

import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import {
  isFunctionTooLong,
  detectDeepPropDrilling,
  findUnnecessaryRerenders,
  checkHookDependencies,
} from "./analysisUtils";

export const suggestRefactor = (code) => {
  const suggestions = [];
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  traverse(ast, {
    FunctionDeclaration(path) {
      if (isFunctionTooLong(path)) {
        suggestions.push(
          `Function '${path.node.id.name}' is too long at ${path.node.loc.start.line}`,
        );
      }
    },
    JSXElement(path) {
      if (detectDeepPropDrilling(path)) {
        suggestions.push(
          `Deep prop drilling detected at ${path.node.loc.start.line}`,
        );
      }

      findUnnecessaryRerenders(path).forEach((node) => {
        suggestions.push(
          `Unnecessary rerender detected at ${node.loc.start.line}`,
        );
      });
    },
    CallExpression(path) {
      checkHookDependencies(path).forEach((issue) => {
        suggestions.push(`${issue.message} at ${issue.loc.start.line}`);
      });
    },
  });

  return suggestions;
};
