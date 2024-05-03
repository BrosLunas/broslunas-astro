import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_Ckf6Kgru.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fOzBosgT.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/legal/[...slug]","isIndex":false,"type":"page","pattern":"^\\/legal(?:\\/(.*?))?\\/?$","segments":[[{"content":"legal","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/legal/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/projects/[...slug]","isIndex":false,"type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/works","isIndex":true,"type":"page","pattern":"^\\/works\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/index.astro","pathname":"/works","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fOzBosgT.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.BSSBgDbx.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://broslunas.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/legal/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/search/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/works/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/ArticleBottomLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/legal/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/search/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/works/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/robots.txt.ts":"chunks/pages/robots_DdhyBTT0.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_MOjGeXn6.mjs","\u0000@astrojs-manifest":"manifest_BTmYP7jB.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DfiFOnX_.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_Bbd126ja.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_BNtqUdy4.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._RA7UQSsH.mjs","\u0000@astro-page:src/pages/legal/[...slug]@_@astro":"chunks/_.._juHi85Be.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_CMz6Iara.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"chunks/_.._UCXOp0fd.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"chunks/robots_D3OA41C9.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_B1RiX86r.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"chunks/index_ClcGOJ6_.mjs","\u0000@astro-page:src/pages/works/index@_@astro":"chunks/index_Z3BqPZwE.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_ByXv3gah.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/nueva seccion (juegos)/index.md?astroContentCollectionEntry=true":"chunks/index_BqhPj78V.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/primer post/index.md?astroContentCollectionEntry=true":"chunks/index_7RC4KBXH.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md?astroContentCollectionEntry=true":"chunks/index_CUmqWm1C.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md?astroContentCollectionEntry=true":"chunks/index_Dqwk13xh.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md?astroContentCollectionEntry=true":"chunks/index_DyNWKdKP.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md?astroContentCollectionEntry=true":"chunks/index_B1aAGwbu.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx?astroContentCollectionEntry=true":"chunks/index_uxqC1Pit.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/legal/privacy.md?astroContentCollectionEntry=true":"chunks/privacy_DaZ4DrbL.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/legal/terms.md?astroContentCollectionEntry=true":"chunks/terms_CDlSP_wn.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/01-snake/index.md?astroContentCollectionEntry=true":"chunks/index_BoVCApk1.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/02-arkanoid/index.md?astroContentCollectionEntry=true":"chunks/index_BuySfC1c.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/03-tetris/index.md?astroContentCollectionEntry=true":"chunks/index_BJ2yZvwE.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/04-pacman/index.md?astroContentCollectionEntry=true":"chunks/index_8V07g-Oq.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/05-pingpong/index.md?astroContentCollectionEntry=true":"chunks/index_BiVDNtgV.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/06-flappy-dino/index.md?astroContentCollectionEntry=true":"chunks/index_USauY5db.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/07-orbita/index.md?astroContentCollectionEntry=true":"chunks/index_CKxrau3_.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/web/broslunas-games/index.md?astroContentCollectionEntry=true":"chunks/index_DhglhbNZ.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/apple.md?astroContentCollectionEntry=true":"chunks/apple_CBtKfYrW.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/facebook.md?astroContentCollectionEntry=true":"chunks/facebook_Dl7_7KGl.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/google.md?astroContentCollectionEntry=true":"chunks/google_ClaYmZYO.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/mcdonalds.md?astroContentCollectionEntry=true":"chunks/mcdonalds_Cnq5Rq4i.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/nueva seccion (juegos)/index.md?astroPropagatedAssets":"chunks/index_DfnPY9Zq.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/primer post/index.md?astroPropagatedAssets":"chunks/index_povYk92u.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md?astroPropagatedAssets":"chunks/index_DBgCYg_c.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md?astroPropagatedAssets":"chunks/index_BZ4Noki4.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md?astroPropagatedAssets":"chunks/index_DqAg8nmL.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md?astroPropagatedAssets":"chunks/index_ByRDnxEV.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx?astroPropagatedAssets":"chunks/index_DWKa7EEj.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/legal/privacy.md?astroPropagatedAssets":"chunks/privacy_CPy2YwZE.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/legal/terms.md?astroPropagatedAssets":"chunks/terms_CeK7ZTXl.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/01-snake/index.md?astroPropagatedAssets":"chunks/index_GBxLVob6.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/02-arkanoid/index.md?astroPropagatedAssets":"chunks/index_J4LjnMZA.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/03-tetris/index.md?astroPropagatedAssets":"chunks/index_DLo_kQLJ.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/04-pacman/index.md?astroPropagatedAssets":"chunks/index_C4caejoO.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/05-pingpong/index.md?astroPropagatedAssets":"chunks/index_72H-aVoT.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/06-flappy-dino/index.md?astroPropagatedAssets":"chunks/index_DRGLOj4-.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/07-orbita/index.md?astroPropagatedAssets":"chunks/index_Bp5OPFwI.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/web/broslunas-games/index.md?astroPropagatedAssets":"chunks/index_6DvFsR-g.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/apple.md?astroPropagatedAssets":"chunks/apple_QQhtF2CU.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/facebook.md?astroPropagatedAssets":"chunks/facebook_BtXnvuDd.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/google.md?astroPropagatedAssets":"chunks/google_BoNnE8Xc.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/mcdonalds.md?astroPropagatedAssets":"chunks/mcdonalds_CcYq6NZJ.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/nueva seccion (juegos)/index.md":"chunks/index_D1l7Nfzb.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/primer post/index.md":"chunks/index_DAQeN4C9.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md":"chunks/index_CnkfhDYl.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md":"chunks/index_D2LZ6kqq.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md":"chunks/index_D6vefUNT.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md":"chunks/index_Dc3nDd4F.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx":"chunks/index_C49pMFzm.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/legal/privacy.md":"chunks/privacy_jnPqkZ68.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/legal/terms.md":"chunks/terms_81cezSfm.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/01-snake/index.md":"chunks/index_fWE2bqHD.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/02-arkanoid/index.md":"chunks/index_9AL1ThSb.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/03-tetris/index.md":"chunks/index_DOSJAJgf.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/04-pacman/index.md":"chunks/index_colJQ2NX.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/05-pingpong/index.md":"chunks/index_1MbHsQgA.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/06-flappy-dino/index.md":"chunks/index_EVZofMPy.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/07-orbita/index.md":"chunks/index_Ddolicpn.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/web/broslunas-games/index.md":"chunks/index_CPOGHcpo.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/apple.md":"chunks/apple_QdFeK0Y6.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/facebook.md":"chunks/facebook_DMPS3jzJ.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/google.md":"chunks/google_CQJ9p4PF.mjs","C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/work/mcdonalds.md":"chunks/mcdonalds_BSMX7T7X.mjs","@components/Blog":"_astro/Blog.CK3gJzYO.js","/astro/hoisted.js?q=1":"_astro/hoisted.BGfjo5mV.js","/astro/hoisted.js?q=0":"_astro/hoisted.fOzBosgT.js","@components/Counter":"_astro/Counter.DhYhT-U0.js","@astrojs/solid-js/client.js":"_astro/client.BfvbX4EV.js","@components/Projects":"_astro/Projects.i0hYdzVV.js","@components/Search":"_astro/Search.zqzcdEHd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/spongebob.dGmXfKPV.png","/_astro/_slug_.BSSBgDbx.css","/brand.svg","/favicon.png","/favicon.svg","/open-graph.jpg","/robots.txt","/social.svg","/ui.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/js/animate.js","/js/bg.js","/js/scroll.js","/js/theme.js","/img/broslunas-games.png","/_astro/ArrowCard.E513neQL.js","/_astro/Blog.CK3gJzYO.js","/_astro/client.BfvbX4EV.js","/_astro/Counter.DhYhT-U0.js","/_astro/hoisted.BGfjo5mV.js","/_astro/hoisted.fOzBosgT.js","/_astro/Projects.i0hYdzVV.js","/_astro/Search.zqzcdEHd.js","/_astro/web.CIE_19Vj.js","/img/games/arkanoid.png","/img/games/flappy-dino.png","/img/games/orbita.png","/img/games/pacman.png","/img/games/pingpong.png","/img/games/snake.png","/img/games/tetris.png","/video/gameplay/arkanoid.mp4","/video/gameplay/flappy-dino.mp4","/video/gameplay/orbita.mp4","/video/gameplay/pacman.mp4","/video/gameplay/pingpong.mp4","/video/gameplay/snake.mp4","/video/gameplay/tetris.mp4"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
