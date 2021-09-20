class HTMLParser {
  constructor(htmlString) {
    this.htmlString = htmlString;
  }

  getTagWithAttibutes(el) {
    const elAttributes = [...el.attributes];
    const tag = el.tagName;
    const attributes = elAttributes.map((att) => ({ [att.name]: att.value }));
    return { tag, attributes };
  }

  getTag(el) {
    const tag = el.tagName;
    return { tag };
  }

  get tags() {
    const temp = document.createElement("div");
    temp.innerHTML = this.htmlString;
    const elements = [...temp.getElementsByTagName("*")];
    const tags = elements.map((el) => {
      if (el.hasAttributes()) {
        return this.getTagWithAttibutes(el);
      } else {
        return this.getTag(el);
      }
    });

    return tags;
  }
}

const htmlString = `<p><img src="https://i.imgur.com/LSG9xg3.jpeg" alt="css" class="kl"/></p>`;

const htmlParser = new HTMLParser(htmlString);

console.log(htmlParser.tags);
