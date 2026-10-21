// 3D preview hook (not built yet).
// main.js calls mount3D(container, modelUrl) when a product has a `model`.
// Later: load a 3D library here and render the model into `container`.

export function mount3D(container, modelUrl) {
  container.textContent = '3D preview coming soon';
  return {
    destroy() {
      container.replaceChildren();
    }
  };
}
