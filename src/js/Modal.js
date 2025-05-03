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

  showModalOnErrorGeo() {
    this.parentEl.insertAdjacentHTML(
      "afterbegin",
      `
              <div class="modal-geo">
                <h3>Что то пошло не так</h3>
                <p>
                  К сожалению, нам не удалось определить ваше местоположение, пожалуйста,
                  дайте разрешение на использование геолокации, либо введите координаты
                  вручную
                </p>
                <p>Широта и долгота через запятую</p>
                <input type="text" class="coords-input" />
                <div class="btn-block">
                  <button class="cancel-geo">Отмена</button>
                  <button class="ok-geo">ОК</button>
                </div>
              </div>
              `,
    );
  }

  showImportModal() {
    this.parentEl.insertAdjacentHTML(
      "afterbegin",
      `
              <div class="modal-import">
                <h3>Импорт чата</h3>
                <p>
                  Введите уникальный идентификатор 
                </p>
                <input type="text" class="import-input" />
                <div class="btn-block">
                  <button class="cancel-import">Отмена</button>
                  <button class="ok-import">ОК</button>
                </div>
              </div>
              `,
    );
  }
}
