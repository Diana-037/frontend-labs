
  // ===== Завдання 1 =====
  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault()

    let ok = true

    const pib = document.getElementById("pib")
    const faculty = document.getElementById("faculty")
    const date = document.getElementById("date")
    const address = document.getElementById("address")
    const email = document.getElementById("email")

    const pibReg = /^[А-ЯІЇЄ][а-яіїє]+ [А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/
    const facultyReg = /^[А-ЯІЇЄа-яіїє]{4}$/
    const dateReg = /^\d{2}\.\d{2}\.\d{4}$/
    const addressReg = /^м\. [А-ЯІЇЄа-яіїє]{5}$/
    const emailReg = /^[a-z]{5}@[a-z]{5}\.com$/

    const fields = [
      [pib, pibReg],
      [faculty, facultyReg],
      [date, dateReg],
      [address, addressReg],
      [email, emailReg]
    ]

    fields.forEach(([field, reg]) => {
      field.classList.remove("error")
      if (!reg.test(field.value)) {
        field.classList.add("error")
        ok = false
      }
    })

    if (ok) {
      document.getElementById("result").innerHTML = `
        <p><b>Введені дані:</b></p>
        <p>ПІБ: ${pib.value}</p>
        <p>Факультет: ${faculty.value}</p>
        <p>Дата народження: ${date.value}</p>
        <p>Адреса: ${address.value}</p>
        <p>Email: ${email.value}</p>
      `
    }
  })

  // ===== Завдання 2 =====
  const table = document.getElementById("grid")
  let n = 1

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr")

    for (let j = 0; j < 6; j++) {
      const cell = document.createElement("td")
      cell.textContent = n

      cell.addEventListener("mouseover", () => {
        document.querySelectorAll("td").forEach(td => {
          if (td !== cell) {
            td.style.backgroundColor = "#9ad8ff"
          }
        })
      })

      cell.addEventListener("mouseout", () => {
        document.querySelectorAll("td").forEach(td => {
          td.style.backgroundColor = "white"
        })
      })

      row.appendChild(cell)
      n++
    }

    table.appendChild(row)
  }
