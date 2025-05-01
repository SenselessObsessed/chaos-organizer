export default class Modal {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  showTextModal(text) {
    this.parentEl.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="modal-upper">
        <div class="modal-upper-text">${text}</div>
        <div class="modal-upper-close">✖</div>
      </div>
      `,
    );
  }
}
