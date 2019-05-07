// tslint:disable-next-line:variable-name
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<!-- https://vaadin.com/tutorials/using-web-components-in-angular -->
<custom-style>
  <style include="lumo-color lumo-typography"></style>
</custom-style>
`;

document.head.appendChild($_documentContainer.content);
