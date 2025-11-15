/* ---------------------------------------------------------------
   Utility: Convert API JSON data into an HTML table
---------------------------------------------------------------- */
function displayTable(title, data) {
    let output = document.getElementById("output");

    let table = `<h3>${title}</h3><table><tr>`;

    let keys = Object.keys(data[0]); // table headers

    keys.forEach(key => table += `<th>${key}</th>`);
    table += `</tr>`;

    data.forEach(item => {
        table += `<tr>`;
        keys.forEach(key => {
            table += `<td>${item[key]}</td>`;
        });
        table += `</tr>`;
    });

    table += `</table>`;

    output.innerHTML += table;
}

/* ---------------------------------------------------------------
   PromiseAPI1:
   - MUST use setTimeout
   - Returns a promise
   - Inside promise → fetch + resolve(true)
---------------------------------------------------------------- */

function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {               // REQUIRED delay
            fetch("https://dummyjson.com/posts")
                .then(res => res.json())
                .then(json => {
                    displayTable("Posts API", json.posts);
                    resolve(true);             // required for next API
                })
                .catch(err => reject(err));
        }, 1000);                        // 1 second delay
    });
}

function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    displayTable("Products API", data.products)
                    resolve(true);
                })
        }, 2000)
    });
}

function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then(res => res.json())
                .then(data => {
                    displayTable("Todos API", data.todos)
                    resolve(true);
                })
        }, 3000)
    })
}

/* ----------------------------------------------------------------
   Async function using await
   - Calls APIs in sequence
   - Must check if previous resolved true
----------------------------------------------------------------- */

async function startProcess() {
    document.getElementById("output").innerHTML = "";

    try {
        // First API
        const r1 = await PromiseAPI1();

        if (r1 === true) {
            const r2 = await PromiseAPI2();

            if (r2 === true) {
                await PromiseAPI3();
            }
        }
    } catch (err) {
        console.log("Error:", err);
    }
}


