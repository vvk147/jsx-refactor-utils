// src/analysisUtils.js

const LONG_FUNCTION_THRESHOLD = 50; // number of lines

export function isFunctionTooLong(path) {
  return (
    path.node.loc.end.line - path.node.loc.start.line > LONG_FUNCTION_THRESHOLD
  );
}

const PROP_DRILLING_DEPTH_THRESHOLD = 3;

export function detectDeepPropDrilling(path) {
  let depth = 0;
  path.findParent((parent) => {
    if (parent.isJSXOpeningElement()) {
      depth += parent.node.attributes.filter(isProp).length;
    }
  });
  return depth > PROP_DRILLING_DEPTH_THRESHOLD;
}

function isProp(attribute) {
  // This is a simplification; you'd need more logic to ensure it's a prop.
  return attribute.type === "JSXAttribute";
}

export function findUnnecessaryRerenders(path) {
  let unnecessaryRerenders = [];
  if (path.isJSXOpeningElement()) {
    path.get("attributes").forEach((attribute) => {
      if (
        attribute.isJSXAttribute() &&
        attribute.get("value").isFunctionExpression()
      ) {
        unnecessaryRerenders.push(attribute.node);
      }
    });
  }
  return unnecessaryRerenders;
}

export function checkHookDependencies(path) {
  // This is a mock function; in reality, you would use static analysis
  // to understand the dependencies required for hooks.
  if (
    path.isCallExpression() &&
    path.get("callee").isIdentifier({ name: "useEffect" })
  ) {
    let depsPath = path.get("arguments")[1];
    if (
      depsPath &&
      depsPath.isArrayExpression() &&
      depsPath.node.elements.length === 0
    ) {
      return [
        {
          message: "useEffect with empty dependency array.",
          loc: path.node.loc,
        },
      ];
    }
  }
  return [];
}
