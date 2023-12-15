/** @type {import('svdoc/types/svdoc.config').Config} */
const config = {
  name: "Shadeup",
  icon: "img/logo.svg",
  primary: "#C953DD",
  external: [
    {
      href: "https://discord.gg/FfTtRMhDAS",
      text: "Discord",
      icon: ":discord",
    },
    {
      href: "https://unrealengine.com",
      text: "Unreal Engine",
      icon: ":unreal",
    },
    {
      href: "https://github.com/AskingQuestions/shadeup",
      text: "GitHub",
      icon: ":github",
    },
  ],
  sidenav: [
    {
      href: "/docs",
      text: "Overview",
      icon: ":home",
    },
    {
      href: "/docs/compute",
      text: "Compute Shaders",
      icon: ":numbers",
    },
    {
      href: "/docs/nodes",
      text: "Custom Nodes",
      icon: ":graph",
    },
    {
      href: "/docs/instancing",
      text: "Indirect Instancing",
      icon: ":grid",
    },
    {
      href: "/docs/proxies",
      text: "Proxies/Vertex Factories",
      icon: "img/proxies-icon.svg",
    },
  ],
};

module.exports = config;
