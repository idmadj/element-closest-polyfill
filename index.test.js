require('./index.js');

let article, div1, div2, div3;

beforeAll(() => {
    document.body.innerHTML = `
        <article>
            <div id="div-01">Here is div-01
                <div id="div-02">Here is div-02
                    <div id="div-03">Here is div-03
                        <div id="div-04">Here is div-04</div>
                    </div>
                </div>
            </div>
        </article>
    `;

    article = document.body.getElementsByTagName("article")[0];
    div1 = document.getElementById('div-01');
    div2 = document.getElementById('div-02');
    div3 = document.getElementById('div-03');
});

test('Finds itself', () => {
    const el = div3.closest("#div-03")

    expect(el).toBe(div3);
});

test('Finds a specific ancestor', () => {
    const el = div3.closest("#div-02")

    expect(el).toBe(div2);
});

test('Finds the closest ancestor which is a div in div', () => {
    const el = div3.closest("div div")

    expect(el).toBe(div3);
});

test('Finds the closest ancestor which is a div and has a parent article', () => {
    const el = div3.closest("article > div")

    expect(el).toBe(div1);
});

test('Finds the closest ancestor which is not a div', () => {
    const el = div3.closest(":not(div)")

    expect(el).toBe(article);
});

test('Returns `null` for a children', () => {
    const el = div3.closest("#div-04")

    expect(el).toBeNull();
});

test('Returns `null` for a selector with no match', () => {
    const el = div3.closest("#div-00")

    expect(el).toBeNull();
});
