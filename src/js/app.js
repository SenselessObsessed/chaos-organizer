import { fromEvent, map, debounceTime, distinctUntilChanged } from "rxjs";
import searchLink from "./searchLink";

import ChaosOrganizer from "./ChaosOrganizer";
import "./searchLink";

const chaosOrganizer = new ChaosOrganizer(document.body);
chaosOrganizer.bindToDOM();

function render() {
  const firstEl = document.querySelector(".messege");
  const firstElCoords = firstEl.getBoundingClientRect();
  if (firstElCoords.y < 0) {
    return;
  }
  const messegeId = firstEl.dataset.id;
  fetch(`http://localhost:7070/api/import/${localStorage.id}/${messegeId}`)
    .then((r) => r.json())
    .then((r) => {
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
            firstEl.insertAdjacentHTML(
              "beforebegin",
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
            firstEl.insertAdjacentHTML(
              "beforebegin",
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
            firstEl.insertAdjacentHTML(
              "beforebegin",
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
            firstEl.insertAdjacentHTML(
              "beforebegin",
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
            firstEl.insertAdjacentHTML(
              "beforebegin",
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

function renderSearched(r) {
  if (r === "") {
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
  } else {
    fetch(`http://localhost:7070/api/search-messages/${localStorage.id}/${r}`)
      .then((r) => r.json())
      .then((r) => {
        const messageContainer = document.querySelector(".messages__container");
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
          return;
        });
      });
  }
}

fromEvent(document.querySelector(".messages"), "scroll")
  .pipe(
    debounceTime(200),
    map((e) => e.target),
  )
  .subscribe((r) => render(r));

fromEvent(document.querySelector(".search-message"), "input")
  .pipe(
    debounceTime(400),
    map((e) => e.target.value),
    distinctUntilChanged(),
  )
  .subscribe((r) => renderSearched(r));
