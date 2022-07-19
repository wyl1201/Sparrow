export function createDiv() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  return div
}

// 创建 SVG 元素
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child)
  }
}

export function getAttributes(node, attributes) {
  return attributes.reduce(
    (total, cur) => ((total[cur] = node.getAttribute(cur)), total),
    {}
  )
}
