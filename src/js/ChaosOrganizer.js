import Modal from "./Modal";
import seachLink from "./searchLink";
const modal = new Modal(document.body);

export default class ChaosOrganizer {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <div class="container">
      <div class="header">
        <div class="header__name">Chaos Organizer</div>
        <input type="text" name="" id="" class="search-message none" />
        <div class="input-search-close none">✖</div>
        <div class="header__buttons">
          <img
            src="http://localhost:7070/search.png"
            alt="search"
            class="header__search"
          />
          <img src="http://localhost:7070/more.png" alt="" class="header__more" />
          <div class="modal-more none">
            <div class="modal-more-item import">Импорт чата</div>
            <div class="modal-more-item geo">Отправить гео-локацию</div>
            <div class="modal-more-item video-message">
              Записать видео-сообщение
            </div>
            <div class="modal-more-item notification">
              Установить напоминание
            </div>
            <div class="modal-more-item favorites">
              Посмотреть все избранные сообщения
            </div>
            <div class="modal-more-item audio-message">
              Посмотреть все аудио-сообщения
            </div>
            <div class="modal-more-item video-message">
              Посмотреть все видео-сообщения
            </div>
            <div class="modal-more-item image-message">
              Посмотреть все изображения
            </div>
            <div class="modal-more-item crypto-message">
              Отправить зашифрованное сообщение
            </div>
            <div class="modal-more-item zip">Заархивировать</div>
            <div class="modal-more-item unzip">Распаковать</div>
            <div class="close-modal-more">✖</div>
          </div>
        </div>
      </div>

      <div class="pin-message none"></div>

      <section class="messages">
        <div class="messages__container"></div>
      </section>

      <section class="input">
        <div class="drop none">
          <input class="drop-file" type="file" />
          <div class="placeholder-drop"></div>
        </div>

        <div class="input__file">
          <input type="file" class="input-file-btn" />
          <img
            src="http://localhost:7070/file.png"
            alt="file"
            class="input__file-placeholder"
          />
        </div>
        <input type="text" class="input__input" />
        <img
          src="http://localhost:7070/smile.png"
          alt="smile"
          class="input__smile"
        />

        <div class="smiles none">
          <div class="emoji emoji-smile">😂</div>
          <div class="emoji emoji-finger">👉</div>
          <div class="emoji emoji-sad">😞</div>
        </div>

        <img
          src="http://localhost:7070/microphone.png"
          alt="voice"
          class="input__voice"
        />
      </section>
    </div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;

    // Initial Fetch
    this.initialFetch();

    const mainInput = document.querySelector(".input__input");
    mainInput.addEventListener("keydown", (e) => this.onKeyDownInMainInput(e));
    document.body.addEventListener("click", (e) => this.onClickBody(e));
  }

  initialFetch() {
    const currId = localStorage.getItem("id");
    if (currId) {
      fetch(`http://localhost:7070/api/import/${currId}`);
      // DRAW UI
    } else {
      fetch("http://localhost:7070/api/init-chat", {
        method: "POST",
      })
        .then((r) => r.json())
        .then((r) => {
          localStorage.setItem("id", r.id);
          modal.showTextModal(
            `Уникальный итендификатор для экспорта чата: \n${r.id}`,
          );
        });
    }
  }

  onClickBody(e) {
    // Открытие закрытие дополнительного меню
    if (e.target.classList.contains("header__more")) {
      e.target.nextElementSibling.classList.toggle("none");
    }

    // Закрытие дополнительного меню
    if (e.target.classList.contains("close-modal-more")) {
      e.target.closest(".modal-more").classList.add("none");
    }

    // Открытие поля поиска
    if (e.target.classList.contains("header__search")) {
      const header = e.target.closest(".header");
      const inputSearch = header.querySelector(".search-message");
      const inputSearchClose = header.querySelector(".input-search-close");

      inputSearch.classList.remove("none");
      inputSearchClose.classList.remove("none");
    }

    // Закрытие поля поиска
    if (e.target.classList.contains("input-search-close")) {
      const header = e.target.closest(".header");
      const inputSearch = header.querySelector(".search-message");

      inputSearch.value = "";
      inputSearch.classList.add("none");
      e.target.classList.add("none");
    }

    // Удаление информативной модалки
    if (e.target.classList.contains("modal-upper-close")) {
      e.target.closest(".modal-upper").remove();
    }

    if (e.target.classList.contains("star-unclicked")) {
      const message = e.target.closest(".messages__message");
      const { id } = message.dataset;

      fetch("http://localhost:7070/api/add-star", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          idChat: localStorage.id,
          idMessage: id,
        }),
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.Status) {
            message.dataset.star = "true";
            e.target.className = "star-clicked";
            e.target.src = "http://localhost:7070/star-clicked.png";
          }
        });
    }

    if (e.target.classList.contains("star-clicked")) {
      const message = e.target.closest(".messages__message");
      const { id } = message.dataset;

      fetch("http://localhost:7070/api/add-star", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          idChat: localStorage.id,
          idMessage: id,
        }),
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.Status) {
            message.dataset.star = "false";
            e.target.className = "star-unclicked";
            e.target.src = "http://localhost:7070/star-unclicked.png";
          }
        });
    }

    if (e.target.classList.contains("pin")) {
      const msg = e.target.closest(".messages__message");
      if (msg.dataset.pin === "false") {
        const pinCon = document.querySelector(".pin-message");
        if (!pinCon.hasChildNodes()) {
          const { id } = msg.dataset;
          fetch("http://localhost:7070/api/add-pin", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              idChat: localStorage.id,
              idMessage: id,
              previousPinId: false,
            }),
          })
            .then((r) => r.json())
            .then((r) => {
              if (r.Status) {
                const text = msg.querySelector(".messages__message-text");
                pinCon.innerHTML = `
           <div class="pinned-message" data-id="${msg.dataset.id}">Pinned message</div>
            <div class="pinned-message-text">
              ${text.innerText}
            </div>
            <div class="unpin">✖</div>
          `;
                pinCon.classList.remove("none");
                msg.dataset.pin = "true";
              }
            });
        } else {
          pinCon.innerHTML = "";
          const pinnedMessageElement =
            document.querySelector(`[data-pin=true]`);
          const { id: oldId } = pinnedMessageElement.dataset;
          pinnedMessageElement.dataset.pin = false;

          const { id } = msg.dataset;
          fetch("http://localhost:7070/api/add-pin", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              idChat: localStorage.id,
              idMessage: id,
              previousPinId: oldId,
            }),
          })
            .then((r) => r.json())
            .then((r) => {
              if (r.Status) {
                const text = msg.querySelector(".messages__message-text");
                pinCon.innerHTML = `
           <div class="pinned-message" data-id="${msg.dataset.id}">Pinned message</div>
            <div class="pinned-message-text">
              ${text.innerText}
            </div>
            <div class="unpin">✖</div>
          `;
                msg.dataset.pin = "true";
              }
            });
        }
      }
    }

    if (e.target.classList.contains("unpin")) {
      const pinCon = e.target.closest(".pin-message");
      pinCon.innerHTML = "";
      pinCon.classList.add("none");
      const pinnedMsg = document.querySelector("[data-pin=true]");
      const { id } = pinnedMsg.dataset;
      fetch("http://localhost:7070/api/remove-pin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          idChat: localStorage.id,
          idMessage: id,
        }),
      });
    }
  }

  onKeyDownInMainInput(e) {
    if (e.code === "Enter") {
      if (e.target.value === "") {
        modal.showTextModal("Нельзя отправить пустое сообщение");
      } else {
        fetch("http://localhost:7070/api/add-text-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            id: localStorage.id,
            star: false,
            crypto: false,
            body: "Hello World",
            pinned: false,
          }),
        })
          .then((r) => r.json())
          .then((r) => {
            if (r.Status) {
              const result = seachLink(e.target.value);

              const messagesContainer = document.querySelector(
                ".messages__container",
              );
              messagesContainer.insertAdjacentHTML(
                "beforeend",
                `
                <div class="messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
                  <p class="messages__message-text">
                    ${result}
                  </p>
                  <div class="messages__message-time">${r.time}</div>
                  <div class="star">
                    <img src="http://localhost:7070/star-unclicked.png" alt="" class="star-unclicked"/>
                  </div>
                  <div class="pin">📌</div>
                </div>
                `,
              );

              e.target.value = "";
            }
          });
      }
    }
  }
}
