import Modal from "./Modal";
import searchLink from "./searchLink";
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
            <div class="modal-more-item file-message">
              Посмотреть все сообщения с файлами
            </div>
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

  async bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;

    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register("/service-worker.js");
        console.log("sw registered");
      }
    } catch (e) {
      console.log(e);
    }

    this.initialFetch();

    const dropFile = document.querySelector(".drop-file");
    const inputFileBtn = document.querySelector(".input-file-btn");
    inputFileBtn.addEventListener("change", (e) => this.onFileChange(e));
    dropFile.addEventListener("change", (e) => this.onFileChange(e));

    document
      .querySelector(".messages__container")
      .addEventListener("dragenter", () => {
        const placeHolder = document.querySelector(".drop");
        placeHolder.style.display = "block";
      });

    document.querySelector(".messages").addEventListener("dragenter", () => {
      const placeHolder = document.querySelector(".drop");
      placeHolder.style.display = "block";
    });

    document.querySelector(".drop").addEventListener("dragleave", (e) => {
      e.currentTarget.style.display = "none";
    });

    dropFile.addEventListener("drop", () => {
      document.querySelector(".drop").style.display = "none";
    });

    const mainInput = document.querySelector(".input__input");
    mainInput.addEventListener("keydown", (e) => this.onKeyDownInMainInput(e));
    document.body.addEventListener("click", (e) => this.onClickBody(e));
  }

  initialFetch() {
    const currId = localStorage.getItem("id");
    if (currId) {
      fetch(`http://localhost:7070/api/import/${currId}/null`)
        .then((r) => r.json())
        .then((r) => {
          const messageContainer = document.querySelector(
            ".messages__container",
          );

          if (r.pinId) {
            const pinMessage = document.querySelector(".pin-message");
            pinMessage.classList.remove("none");
            pinMessage.insertAdjacentHTML(
              "afterbegin",
              `
              <div class="pinned-message" data-id="${r.pinId}">Pinned message</div>
              <div class="pinned-message-text">
                ${r.pinBody}
              </div>
              <div class="unpin">✖</div>
              `,
            );
          }

          r.messages.forEach((msg) => {
            switch (msg.type) {
              case "text": {
                let clicked;
                if (msg.star) {
                  clicked = "clicked";
                } else {
                  clicked = "unclicked";
                }
                const result = searchLink(msg.body);
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `,
                );
                return;
              }
              case "image": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `,
                );
                return;
              }
              case "video": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `,
                );
                return;
              }
              case "audio": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `,
                );
                return;
              }
              case "file": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `,
                );
                return;
              }
            }
          });
        });
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

  async onClickBody(e) {
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

      const currId = localStorage.getItem("id");
      if (currId) {
        fetch(`http://localhost:7070/api/import/${currId}/null`)
          .then((r) => r.json())
          .then((r) => {
            const messageContainer = document.querySelector(
              ".messages__container",
            );
            messageContainer.innerHTML = "";
            r.messages.forEach((msg) => {
              switch (msg.type) {
                case "text": {
                  let clicked;
                  if (msg.star) {
                    clicked = "clicked";
                  } else {
                    clicked = "unclicked";
                  }
                  const result = searchLink(msg.body);
                  messageContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `,
                  );
                  return;
                }
                case "image": {
                  messageContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `,
                  );
                  return;
                }
                case "video": {
                  messageContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `,
                  );
                  return;
                }
                case "audio": {
                  messageContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `,
                  );
                  return;
                }
                case "file": {
                  messageContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `,
                  );
                  return;
                }
              }
            });
          });
      }
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

      fetch("http://localhost:7070/api/remove-star", {
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

    // Скачаивание файла
    if (
      e.target.classList.contains("file") ||
      e.target.classList.contains("file-desc-name") ||
      e.target.classList.contains("file-icon")
    ) {
      const msg = e.target.closest(".messages__message-file");
      const elWithUrl = msg.querySelector(".file-desc-name");

      const url = document.createElement("a");
      url.href = `http://localhost:7070/${elWithUrl.innerText}`;
      url.download = `${elWithUrl.innerText}`;
      url.target = "_blank";
      document.body.append(url);
      url.click();
      url.remove();
    }

    if (e.target.classList.contains("input__voice")) {
      const test = document.querySelector(".audio-btn-block");
      const testTwo = document.querySelector(".video-btn-block");
      if (test || testTwo) {
        modal.showTextModal("Уже ведётся запись");
        return;
      }
      if (navigator.mediaDevices) {
        try {
          const inputCon = e.target.closest(".input");
          const firstBtn = inputCon.querySelector(".input__smile");
          const secondBtn = inputCon.querySelector(".input__voice");
          firstBtn.classList.add("none");
          secondBtn.classList.add("none");

          inputCon.insertAdjacentHTML(
            "beforeend",
            `
        <div class="audio-btn-block">
          <div class="audio-done">✔</div>
          <div class="audio-time"><span class="audio-minutes">00</span>:<span class="audio-seconds">00</span></div>
          <div class="audio-cancel">✖</div>
        </div>
        `,
          );

          const minutes = document.querySelector(".audio-minutes");
          const seconds = document.querySelector(".audio-seconds");
          const timeInterval = setInterval(() => {
            seconds.innerText = Number(seconds.innerText) + 1;
            if (seconds.innerText.length === 1) {
              seconds.innerText = "0" + seconds.innerText;
            }
            if (seconds.innerText === "60") {
              seconds.innerText = "00";
              minutes.innerText = Number(minutes.innerText) + 1;
              if (minutes.innerText.length === 1) {
                minutes.innerText = "0" + minutes.innerText;
              }
            }
          }, 1000);

          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
          });
          const recorder = new MediaRecorder(stream);
          const chunks = [];
          let done = false;
          recorder.addEventListener("dataavailable", (e) => {
            chunks.push(e.data);
          });
          recorder.addEventListener("stop", () => {
            if (done) {
              const file = new File(chunks, "audio.mp3");

              const data = new FormData();
              data.append("file", file);
              data.append("type", "audio");
              data.append("chatId", localStorage.id);

              fetch("http://localhost:7070/api/add-file", {
                method: "POST",
                body: data,
              })
                .then((r) => r.json())
                .then((r) => {
                  if (r.Status) {
                    const messageCon = document.querySelector(
                      ".messages__container",
                    );
                    messageCon.insertAdjacentHTML(
                      "beforeend",
                      `
            <div class="messege messages__message-audio user" data-id="${r.idMessage}">
              <audio
                class="messages__message-audio-aud"
                src="http://localhost:7070/${r.idMessage}.${r.extension}"
                controls
              ></audio>
              <div class="messages__message-time-audio">${r.time}</div>
            </div>
      `,
                    );
                  }
                });
            }
          });
          recorder.start();

          const audioDone = document.querySelector(".audio-done");
          const audioCancel = document.querySelector(".audio-cancel");
          audioCancel.addEventListener("click", (e) => {
            recorder.stop();
            stream.getTracks().forEach((track) => track.stop());

            e.target.closest(".audio-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });

          audioDone.addEventListener("click", (e) => {
            done = true;

            recorder.stop();
            stream.getTracks().forEach((track) => track.stop());

            e.target.closest(".audio-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });
        } catch (e) {
          modal.showTextModal("Необходимо включить микрофон");
        }
      } else {
        modal.showTextModal("Ваш браузер не поддерживает запись аудио и видео");
        return;
      }
    }

    if (e.target.classList.contains("video-message")) {
      const test = document.querySelector(".audio-btn-block");
      const testTwo = document.querySelector(".video-btn-block");
      if (test || testTwo) {
        modal.showTextModal("Уже ведётся запись");
        return;
      }

      if (navigator.mediaDevices) {
        try {
          const inputCon = e.target.closest(".input");
          const firstBtn = inputCon.querySelector(".input__smile");
          const secondBtn = inputCon.querySelector(".input__voice");
          firstBtn.classList.add("none");
          secondBtn.classList.add("none");

          inputCon.insertAdjacentHTML(
            "beforeend",
            `
            <div class="video-btn-block">
              <div class="video-done">✔</div>
              <div class="video-time"><span class="video-minutes">00</span>:<span class="video-seconds">00</span></div>
              <div class="video-cancel">✖</div>
            </div>
            `,
          );

          const minutes = document.querySelector(".video-minutes");
          const seconds = document.querySelector(".video-seconds");
          const timeInterval = setInterval(() => {
            seconds.innerText = Number(seconds.innerText) + 1;
            if (seconds.innerText.length === 1) {
              seconds.innerText = "0" + seconds.innerText;
            }
            if (seconds.innerText === "60") {
              seconds.innerText = "00";
              minutes.innerText = Number(minutes.innerText) + 1;
              if (minutes.innerText.length === 1) {
                minutes.innerText = "0" + minutes.innerText;
              }
            }
          }, 1000);

          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
          });
          const recorder = new MediaRecorder(stream);
          const chunks = [];
          let done = false;
          recorder.addEventListener("dataavailable", (e) => {
            chunks.push(e.data);
          });
          recorder.addEventListener("stop", () => {
            if (done) {
              const file = new File(chunks, "video.mp4");

              const data = new FormData();
              data.append("file", file);
              data.append("type", "video");
              data.append("chatId", localStorage.id);

              fetch("http://localhost:7070/api/add-file", {
                method: "POST",
                body: data,
              })
                .then((r) => r.json())
                .then((r) => {
                  if (r.Status) {
                    const messageCon = document.querySelector(
                      ".messages__container",
                    );
                    messageCon.insertAdjacentHTML(
                      "beforeend",
                      `
                      <div class="messege messages__message-audio user" data-id="${r.idMessage}">
                        <audio
                          class="messages__message-audio-aud"
                          src="http://localhost:7070/${r.idMessage}.${r.extension}"
                          controls
                        ></audio>
                        <div class="messages__message-time-audio">${r.time}</div>
                      </div>
                      `,
                    );
                  }
                });
            }
          });
          recorder.start();

          const audioDone = document.querySelector(".video-done");
          const audioCancel = document.querySelector(".video-cancel");
          audioCancel.addEventListener("click", (e) => {
            recorder.stop();
            stream.getTracks().forEach((track) => track.stop());

            e.target.closest(".video-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });

          audioDone.addEventListener("click", (e) => {
            done = true;

            recorder.stop();
            stream.getTracks().forEach((track) => track.stop());

            e.target.closest(".video-btn-block").remove();
            firstBtn.classList.remove("none");
            secondBtn.classList.remove("none");
            clearInterval(timeInterval);
          });
        } catch (e) {
          modal.showTextModal("Необходимо включить микрофон и камеру");
        }
      } else {
        modal.showTextModal("Ваш браузер не поддерживает запись аудио и видео");
        return;
      }
    }

    if (e.target.classList.contains("geo")) {
      if (navigator.geolocation) {
        e.target.closest(".modal-more").classList.add("none");
        navigator.geolocation.getCurrentPosition(
          (data) => {
            const { latitude, longitude } = data.coords;
            const formattedCoords = `[${latitude}, ${longitude}]`;

            fetch("http://localhost:7070/api/add-text-message", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify({
                id: localStorage.id,
                star: false,
                crypto: false,
                body: formattedCoords,
                pinned: false,
              }),
            })
              .then((r) => r.json())
              .then((r) => {
                if (r.Status) {
                  const messagesContainer = document.querySelector(
                    ".messages__container",
                  );
                  messagesContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="messege messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
                  <p class="messages__message-text">
                    ${formattedCoords}
                  </p>
                  <div class="messages__message-time">${r.time}</div>
                  <div class="star">
                    <img src="http://localhost:7070/star-unclicked.png" alt="" class="star-unclicked"/>
                  </div>
                  <div class="pin">📌</div>
                </div>
                `,
                  );
                }
              });
          },
          () => {
            modal.showModalOnErrorGeo();
            // todo
            const cancel = document.querySelector(".cancel-geo");
            cancel.addEventListener("click", (e) => {
              e.target.closest(".modal-geo").remove();
            });

            const okButton = document.querySelector(".ok-geo");
            okButton.addEventListener("click", (e) => {
              const modal = e.target.closest(".modal-geo");
              const coordsInput = modal.querySelector(".coords-input");
              const coordsInputValue = coordsInput.value;
              const testCaseOne = /^-?\d+\.\d+, ?-?\d+\.\d+$/gm.test(
                coordsInputValue,
              );

              const testCaseTwo = /^\[-?\d+\.\d+, ?-?\d+\.\d+\]$/gm.test(
                coordsInputValue,
              );

              if (testCaseOne || testCaseTwo) {
                modal.remove();
                fetch("http://localhost:7070/api/add-text-message", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json;charset=utf-8",
                  },
                  body: JSON.stringify({
                    id: localStorage.id,
                    star: false,
                    crypto: false,
                    body: coordsInputValue,
                    pinned: false,
                  }),
                })
                  .then((r) => r.json())
                  .then((r) => {
                    if (r.Status) {
                      const messagesContainer = document.querySelector(
                        ".messages__container",
                      );
                      messagesContainer.innerHTML = "";
                      messagesContainer.insertAdjacentHTML(
                        "beforeend",
                        `
                        <div class="messege messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
                          <p class="messages__message-text">
                            ${coordsInputValue}
                          </p>
                          <div class="messages__message-time">${r.time}</div>
                          <div class="star">
                            <img src="http://localhost:7070/star-unclicked.png" alt="" class="star-unclicked"/>
                          </div>
                          <div class="pin">📌</div>
                        </div>
                        `,
                      );
                    }
                  });
              } else {
                coordsInput.value = "Введите верные координаты";
                coordsInput.setAttribute("disabled", true);
                setTimeout(() => {
                  coordsInput.value = "";
                  coordsInput.removeAttribute("disabled");
                }, 1000);
              }
            });
          },
        );
      }
    }

    if (e.target.classList.contains("import")) {
      e.target.closest(".modal-more").classList.add("none");
      modal.showImportModal();
    }

    if (e.target.classList.contains("cancel-import")) {
      e.target.closest(".modal-import").remove();
    }

    if (e.target.classList.contains("ok-import")) {
      const modal = e.target.closest(".modal-import");
      const modalInput = modal.querySelector(".import-input");
      modal.remove();
      fetch(`http://localhost:7070/api/import/${modalInput.value}/null`)
        .then((r) => r.json())
        .then((r) => {
          if (!r.status) {
            this.parentEl.insertAdjacentHTML(
              "afterbegin",
              `
            <div class="modal-upper">
              <div class="modal-upper-text">Чат не найден</div>
              <div class="modal-upper-close">✖</div>
            </div>
            `,
            );
            return;
          }
          const messageContainer = document.querySelector(
            ".messages__container",
          );
          messageContainer.innerHTML = "";

          if (r.pinId) {
            const pinMessage = document.querySelector(".pin-message");
            pinMessage.classList.remove("none");
            pinMessage.insertAdjacentHTML(
              "afterbegin",
              `
              <div class="pinned-message" data-id="${r.pinId}">Pinned message</div>
              <div class="pinned-message-text">
                ${r.pinBody}
              </div>
              <div class="unpin">✖</div>
              `,
            );
          }

          r.messages.forEach((msg) => {
            switch (msg.type) {
              case "text": {
                let clicked;
                if (msg.star) {
                  clicked = "clicked";
                } else {
                  clicked = "unclicked";
                }
                const result = searchLink(msg.body);
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `,
                );
                return;
              }
              case "image": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `,
                );
                return;
              }
              case "video": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `,
                );
                return;
              }
              case "audio": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `,
                );
                return;
              }
              case "file": {
                messageContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `,
                );
                return;
              }
            }
          });
        });
    }

    if (e.target.classList.contains("favorites")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-star`)
        .then((r) => r.json())
        .then((r) => {
          const messageContainer = document.querySelector(
            ".messages__container",
          );
          messageContainer.innerHTML = "";
          r.forEach((msg) => {
            let clicked;
            if (msg.star) {
              clicked = "clicked";
            } else {
              clicked = "unclicked";
            }
            const result = searchLink(msg.body);
            messageContainer.insertAdjacentHTML(
              "beforeend",
              `
                   <div class="messege messages__message user" data-id="${msg.id}" data-pin="${msg.pinned}" data-star="${msg.star}">
                      <p class="messages__message-text">
                        ${result}
                      </p>
                      <div class="messages__message-time">${msg.time}</div>
                      <div class="star">
                        <img src="http://localhost:7070/star-${clicked}.png" alt="" class="star-${clicked}"/>
                      </div>
                      <div class="pin">📌</div>
                    </div>
                  `,
            );
          });
        });
    }

    if (e.target.classList.contains("audio-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-audio`)
        .then((r) => r.json())
        .then((r) => {
          e.target.closest(".modal-more").classList.add("none");
          const messageContainer = document.querySelector(
            ".messages__container",
          );
          messageContainer.innerHTML = "";
          r.forEach((msg) => {
            messageContainer.insertAdjacentHTML(
              "beforeend",
              `
                  <div class="messege messages__message-audio user" data-id="${msg.id}">
                    <audio
                      class="messages__message-audio-aud"
                      src="http://localhost:7070/${msg.body}"
                      controls
                    ></audio>
                    <div class="messages__message-time-audio">${msg.time}</div>
                  </div>
                  `,
            );
          });
        });
    }

    if (e.target.classList.contains("video-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-video`)
        .then((r) => r.json())
        .then((r) => {
          e.target.closest(".modal-more").classList.add("none");
          const messageContainer = document.querySelector(
            ".messages__container",
          );
          messageContainer.innerHTML = "";
          r.forEach((msg) => {
            messageContainer.insertAdjacentHTML(
              "beforeend",
              `
                  <div class="messege messages__message-video user" data-id="${msg.id}">
                    <video src="http://localhost:7070/${msg.body}" controls></video>
                    <div class="messages__message-time-video">${msg.time}</div>
                  </div>
                  `,
            );
          });
        });
    }

    if (e.target.classList.contains("image-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-images`)
        .then((r) => r.json())
        .then((r) => {
          e.target.closest(".modal-more").classList.add("none");
          const messageContainer = document.querySelector(
            ".messages__container",
          );
          messageContainer.innerHTML = "";
          r.forEach((msg) => {
            messageContainer.insertAdjacentHTML(
              "beforeend",
              `
                  <div class="messege messages__message-img user" data-id="${msg.id}">
                    <div class="messages__message-time-img">${msg.time}</div>

                    <img
                      src="http://localhost:7070/${msg.body}"
                      alt=""
                      class="messages__message-image"
                    />
                  </div>
                  `,
            );
          });
        });
    }

    if (e.target.classList.contains("file-message")) {
      fetch(`http://localhost:7070/api/${localStorage.id}/all-files`)
        .then((r) => r.json())
        .then((r) => {
          e.target.closest(".modal-more").classList.add("none");
          const messageContainer = document.querySelector(
            ".messages__container",
          );
          messageContainer.innerHTML = "";
          r.forEach((msg) => {
            messageContainer.insertAdjacentHTML(
              "beforeend",
              `
                  <div class="messege messages__message-file user" data-id="${msg.id}">
                    <div class="file">
                      <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
                      <div class="file-desc">
                        <div class="file-desc-name">${msg.body}</div>
                      </div>
                    </div>
                    <div class="messages__message-time-file">${msg.time}</div>
                  </div>
                  `,
            );
          });
        });
    }

    if (e.target.classList.contains("input__smile")) {
      document.querySelector(".smiles").classList.toggle("none");
    }

    if (e.target.classList.contains("emoji")) {
      const mainInput = document.querySelector(".input__input");
      mainInput.value = mainInput.value + e.target.innerText;
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
            body: e.target.value,
            pinned: false,
          }),
        })
          .then((r) => r.json())
          .then((r) => {
            if (r.Status) {
              const result = searchLink(e.target.value);

              const messagesContainer = document.querySelector(
                ".messages__container",
              );
              messagesContainer.insertAdjacentHTML(
                "beforeend",
                `
                <div class="messege messages__message user" data-id="${r.id}" data-pin="false" data-star="false">
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

  fileReader(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (e) => {
        resolve(e.target.result);
      });
      fileReader.addEventListener("error", (e) => {
        reject(e.target.error);
      });
      fileReader.readAsDataURL(file);
    });
  }

  async onFileChange(e) {
    const fileType = e.target.files[0].type;
    if (fileType.startsWith("video")) {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "video");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate,
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.Status) {
            const messageCon = document.querySelector(".messages__container");
            messageCon.insertAdjacentHTML(
              "beforeend",
              `
            <div class="messege messages__message-video user" data-id="${r.idMessage}">
            <video src="http://localhost:7070/${r.idMessage}.${r.extension}" controls></video>
            <div class="messages__message-time-video">${r.time}</div>
          </div>
      `,
            );
          }
        });
    }
    if (fileType.startsWith("audio")) {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "audio");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate,
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.Status) {
            const messageCon = document.querySelector(".messages__container");
            messageCon.insertAdjacentHTML(
              "beforeend",
              `
            <div class="messege messages__message-audio user" data-id="${r.idMessage}">
              <audio
                class="messages__message-audio-aud"
                src="http://localhost:7070/${r.idMessage}.${r.extension}"
                controls
              ></audio>
              <div class="messages__message-time-audio">${r.time}</div>
            </div>
      `,
            );
          }
        });
    }
    if (fileType.startsWith("image")) {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "image");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate,
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.Status) {
            const messageCon = document.querySelector(".messages__container");
            messageCon.insertAdjacentHTML(
              "beforeend",
              `
            <div class="messege messages__message-img user" data-id="${r.idMessage}">
              <div class="messages__message-time-img">${r.time}</div>

              <img
                src="http://localhost:7070/${r.idMessage}.${r.extension}"
                alt=""
                class="messages__message-image"
              />
            </div>
      `,
            );
          }
        });
    }

    if (fileType === "") {
      const formDate = new FormData();
      formDate.append("file", e.target.files[0]);
      formDate.append("chatId", localStorage.id);
      formDate.append("type", "file");
      fetch("http://localhost:7070/api/add-file", {
        method: "POST",
        body: formDate,
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.Status) {
            const messageCon = document.querySelector(".messages__container");
            messageCon.insertAdjacentHTML(
              "beforeend",
              `
            <div class="messege messages__message-file user" data-id="${r.id}">
            <div class="file">
              <img src="http://localhost:7070/file.png" alt="" class="file-icon" />
              <div class="file-desc">
                <div class="file-desc-name">${r.idMessage}</div>
              </div>
            </div>
            <div class="messages__message-time-file">${r.time}</div>
          </div>
      `,
            );
          }
        });
    }

    e.target.value = "";
  }
}
